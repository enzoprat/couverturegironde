#!/usr/bin/env node
/**
 * GSC OAuth — flow d'authentification one-shot.
 *
 * Utilisation :
 *   1. Crée un OAuth client Desktop dans GCP, télécharge le JSON.
 *   2. Renomme-le en `_secrets/gsc-oauth-client.json`.
 *   3. Lance `npm run seo:gsc:auth`.
 *   4. Le script ouvre ton navigateur → tu autorises avec ton Google.
 *   5. Google redirige sur localhost, le script capture le code.
 *   6. Le refresh token est sauvegardé dans `_secrets/gsc-oauth-token.json`.
 *
 * Ensuite : `npm run seo:gsc` utilise automatiquement le refresh token.
 *
 * Le refresh token n'expire que si tu ne pulls pas pendant 6 mois.
 * Si ça arrive, relance `npm run seo:gsc:auth` pour le régénérer.
 */

import fs from 'node:fs';
import path from 'node:path';
import http from 'node:http';
import { fileURLToPath } from 'node:url';
import { google } from 'googleapis';
import { exec } from 'node:child_process';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.resolve(__dirname, '..');
const CLIENT_PATH = path.join(projectRoot, '_secrets', 'gsc-oauth-client.json');
const TOKEN_PATH = path.join(projectRoot, '_secrets', 'gsc-oauth-token.json');
const SCOPES = ['https://www.googleapis.com/auth/webmasters.readonly'];

if (!fs.existsSync(CLIENT_PATH)) {
  console.error(`❌ Client OAuth introuvable : ${CLIENT_PATH}`);
  console.error(`   → Crée un OAuth client Desktop sur GCP :`);
  console.error(`     https://console.cloud.google.com/apis/credentials?project=couverture-gironde`);
  console.error(`   → CRÉER → ID client OAuth → Application de bureau`);
  console.error(`   → Télécharge le JSON → renomme en _secrets/gsc-oauth-client.json`);
  process.exit(1);
}

const clientJson = JSON.parse(fs.readFileSync(CLIENT_PATH, 'utf8'));
const { client_id, client_secret } = clientJson.installed ?? clientJson.web ?? {};

if (!client_id || !client_secret) {
  console.error(`❌ Format JSON invalide. Attendu : { installed: { client_id, client_secret } }`);
  process.exit(1);
}

const PORT = 41789; // port arbitraire
const REDIRECT_URI = `http://localhost:${PORT}`;

const oauth2 = new google.auth.OAuth2(client_id, client_secret, REDIRECT_URI);

const authUrl = oauth2.generateAuthUrl({
  access_type: 'offline',
  prompt: 'consent', // force le refresh_token même si déjà autorisé
  scope: SCOPES,
});

console.log('🌐 Ouverture du navigateur pour autorisation…');
console.log(`   Si rien ne s'ouvre, va manuellement sur :`);
console.log(`   ${authUrl}\n`);

// Ouvre le navigateur (cross-platform)
const opener = process.platform === 'darwin' ? 'open' : process.platform === 'win32' ? 'start' : 'xdg-open';
exec(`${opener} "${authUrl}"`);

// Mini serveur HTTP pour capturer le code
const server = http.createServer(async (req, res) => {
  const url = new URL(req.url, REDIRECT_URI);
  const code = url.searchParams.get('code');
  const error = url.searchParams.get('error');

  if (error) {
    res.writeHead(400, { 'Content-Type': 'text/html; charset=utf-8' });
    res.end(`<h1>❌ Auth refusée : ${error}</h1>`);
    console.error(`\n❌ Auth refusée : ${error}`);
    server.close();
    process.exit(1);
  }

  if (!code) {
    res.writeHead(400);
    res.end('No code');
    return;
  }

  try {
    const { tokens } = await oauth2.getToken(code);

    if (!tokens.refresh_token) {
      res.writeHead(500, { 'Content-Type': 'text/html; charset=utf-8' });
      res.end('<h1>⚠ Pas de refresh_token</h1><p>Va sur https://myaccount.google.com/permissions et révoque "claude-gsc-cli", puis relance.</p>');
      console.error(`\n⚠ Google n'a pas renvoyé de refresh_token (déjà autorisé).`);
      console.error(`   → Révoque l'accès sur https://myaccount.google.com/permissions`);
      console.error(`   → Cherche "claude-gsc-cli" → Révoquer`);
      console.error(`   → Relance ce script.`);
      server.close();
      process.exit(1);
    }

    fs.writeFileSync(TOKEN_PATH, JSON.stringify(tokens, null, 2));
    fs.chmodSync(TOKEN_PATH, 0o600);

    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
    res.end(`<!doctype html><meta charset="utf-8"><title>OK</title>
      <body style="font-family: -apple-system, sans-serif; padding: 40px; max-width: 600px; margin: auto;">
      <h1>✅ Authentification réussie</h1>
      <p>Refresh token sauvegardé dans <code>_secrets/gsc-oauth-token.json</code>.</p>
      <p>Tu peux fermer cet onglet et retourner au terminal.</p>
      <p>Lance maintenant : <code>npm run seo:gsc</code></p>
      </body>`);

    console.log(`\n✅ Refresh token sauvegardé dans ${path.relative(projectRoot, TOKEN_PATH)}`);
    console.log(`   Lance maintenant : npm run seo:gsc`);
    server.close();
    process.exit(0);
  } catch (err) {
    res.writeHead(500, { 'Content-Type': 'text/html; charset=utf-8' });
    res.end(`<h1>❌ Erreur échange token</h1><pre>${err.message}</pre>`);
    console.error(`\n❌ Erreur échange code → token : ${err.message}`);
    server.close();
    process.exit(1);
  }
});

server.listen(PORT, () => {
  console.log(`👂 En attente du callback OAuth sur ${REDIRECT_URI} …`);
});
