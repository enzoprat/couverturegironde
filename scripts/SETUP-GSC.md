# _secrets/ — clés et tokens (NE JAMAIS COMMITTER)

Ce dossier est dans le `.gitignore`. Il contient les secrets nécessaires aux scripts SEO.

## Fichiers attendus

### `gsc-service-account.json`

Clé JSON du service account Google Cloud utilisé par `scripts/gsc-pull.mjs` pour lire l'API Search Console.

## Setup étape par étape

### 1. Activer l'API Google Search Console

1. Va sur https://console.cloud.google.com/
2. Sélectionne ton projet (ou créé-en un, par exemple `couverturegironde-seo`)
3. Menu **APIs & Services → Library**
4. Cherche "**Google Search Console API**" → clique → **Enable**

### 2. Créer le service account

1. Menu **IAM & Admin → Service Accounts → CREATE SERVICE ACCOUNT**
2. Nom : `claude-gsc-reader`
3. ID : auto-généré (laisse comme proposé)
4. Description : `Lecture Search Console pour scripts SEO Claude Code`
5. Skip les permissions du projet (Continue → Done)

### 3. Générer la clé JSON

1. Clique sur le service account créé
2. Onglet **Keys → ADD KEY → Create new key**
3. Type : **JSON** → **Create**
4. Le fichier se télécharge automatiquement
5. Renomme-le en `gsc-service-account.json` et place-le dans `_secrets/`

### 4. Autoriser le service account sur la propriété GSC

1. Ouvre le JSON, note la valeur de `client_email` (genre `claude-gsc-reader@xxxxx.iam.gserviceaccount.com`)
2. Va sur https://search.google.com/search-console
3. Sélectionne la propriété **couverturegironde.fr**
4. **Settings (⚙)** → **Users and permissions** → **ADD USER**
5. Email : colle l'adresse du service account
6. Permission : **Restricted**
7. **ADD**

### 5. Lancer

```bash
npm run seo:gsc                 # 28 derniers jours
npm run seo:gsc -- --days 90    # 90 jours
npm run seo:gsc -- --rows 1000  # plus de lignes
```

Les CSVs sortent dans `_gsc-data/` (également gitignored).

## Si ça fail

- **`403 insufficient permissions`** : tu as oublié l'étape 4 (ajouter le service account à la propriété GSC). Vérifie que tu as bien collé le `client_email` exact.
- **`404 Not found`** : la propriété GSC n'est pas en `sc-domain:` mais en URL-prefix. Édite `scripts/gsc-pull.mjs` ligne `SITE_URL` pour mettre `https://www.couverturegironde.fr/` à la place.
- **Clé introuvable** : vérifie que le fichier s'appelle exactement `gsc-service-account.json` et est dans `_secrets/`.
