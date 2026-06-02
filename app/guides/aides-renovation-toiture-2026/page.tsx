import {
  GuidePageLayout,
  generateGuideMetadata,
} from '@/components/content/GuidePageLayout';

const SLUG = 'guides/aides-renovation-toiture-2026';
export const metadata = generateGuideMetadata(SLUG);

export default function Page() {
  return (
    <GuidePageLayout
      content={{
        slug: SLUG,
        h1: (
          <>
            Aides rénovation toiture{' '}
            <span className="text-[var(--color-terre)]">2026</span> :
            MaPrimeRénov', éco-PTZ, TVA réduite
          </>
        ),
        subtitle:
          "Quelles aides pour rénover sa toiture en 2026 ? Guide complet des dispositifs disponibles à Bordeaux et en Gironde : montants, conditions, démarches. Mise à jour 2026.",
        datePublished: '2026-05-26',
        readingTimeMin: 10,
        sections: [
          {
            id: 'panorama',
            title: 'Panorama des aides 2026',
            content: (
              <>
                <p>
                  En 2026, plusieurs dispositifs d'aide sont disponibles pour
                  financer la rénovation de votre toiture en Gironde, à
                  condition que les travaux concernent l'amélioration
                  énergétique du logement (principalement l'isolation de la
                  toiture). Voici les principales aides cumulables.
                </p>
                <table>
                  <thead>
                    <tr>
                      <th>Aide</th>
                      <th>Montant max</th>
                      <th>Condition principale</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <strong>MaPrimeRénov'</strong>
                      </td>
                      <td>Jusqu'à 7 500 €</td>
                      <td>Selon revenus, travaux isolation</td>
                    </tr>
                    <tr>
                      <td>
                        <strong>Éco-PTZ</strong>
                      </td>
                      <td>30 000 € (sans intérêts)</td>
                      <td>Prêt remboursable sur 15 ans</td>
                    </tr>
                    <tr>
                      <td>
                        <strong>TVA 5,5 %</strong>
                      </td>
                      <td>Économie ≈ 4,5 % du devis</td>
                      <td>Logement +2 ans, travaux énergie</td>
                    </tr>
                    <tr>
                      <td>
                        <strong>CEE (Certificats Économies Énergie)</strong>
                      </td>
                      <td>Variable selon fournisseur</td>
                      <td>Cumulable MaPrimeRénov'</td>
                    </tr>
                    <tr>
                      <td>
                        <strong>Aides locales Bordeaux Métropole</strong>
                      </td>
                      <td>Jusqu'à 2 000 €</td>
                      <td>Conditions de revenus, parc ancien</td>
                    </tr>
                  </tbody>
                </table>
                <blockquote>
                  Important : la majorité de ces aides sont conditionnées au{' '}
                  <strong>recours à un artisan RGE</strong> (Reconnu Garant de
                  l'Environnement). Sans certification RGE de l'entreprise,
                  pas d'aide possible.
                </blockquote>
              </>
            ),
          },
          {
            id: 'maprimrenov',
            title: "MaPrimeRénov' : la principale aide",
            content: (
              <>
                <p>
                  MaPrimeRénov' est la principale aide à la rénovation
                  énergétique en France. Pour une rénovation de toiture, elle
                  concerne <strong>l'isolation thermique</strong> (combles
                  perdus, rampants, sarking) et non le démoussage ou le
                  nettoyage. Elle est versée par l'Agence Nationale de
                  l'Habitat (Anah).
                </p>
                <h3>Conditions principales</h3>
                <ul>
                  <li>Être propriétaire ou propriétaire bailleur du logement</li>
                  <li>Le logement a plus de 15 ans (ou 2 ans si remplacement chaudière fioul)</li>
                  <li>Le logement est la résidence principale (ou louée)</li>
                  <li>L'entreprise réalisant les travaux est certifiée RGE</li>
                  <li>Le dossier est déposé AVANT le début des travaux</li>
                </ul>
                <h3>Montants 2026 pour l'isolation de toiture</h3>
                <p>
                  Les montants varient selon votre catégorie de revenus
                  (Bleu, Jaune, Violet, Rose). Pour l'isolation des combles
                  perdus ou rampants :
                </p>
                <ul>
                  <li>
                    <strong>MaPrimeRénov' Bleu</strong> (revenus très modestes)
                    : 25 €/m² isolant + bonus
                  </li>
                  <li>
                    <strong>MaPrimeRénov' Jaune</strong> (revenus modestes) :
                    20 €/m²
                  </li>
                  <li>
                    <strong>MaPrimeRénov' Violet</strong> (revenus
                    intermédiaires) : 15 €/m²
                  </li>
                  <li>
                    <strong>MaPrimeRénov' Rose</strong> (revenus supérieurs) :
                    7 €/m²
                  </li>
                </ul>
                <p>
                  Pour une toiture de 120 m² de combles isolés, le montant
                  peut atteindre <strong>1 800 à 3 000 €</strong> selon votre
                  catégorie. Le plafonnement total annuel est de 20 000 € sur
                  5 ans pour les ménages aux revenus très modestes (Bleu) et
                  modestes (Jaune).
                </p>
                <h3>Démarches</h3>
                <ol>
                  <li>Créer son compte sur maprimerenov.gouv.fr</li>
                  <li>Demander un devis à un artisan RGE</li>
                  <li>Déposer le dossier en ligne AVANT signature du devis</li>
                  <li>Attendre la notification d'attribution (3-4 semaines)</li>
                  <li>Réaliser les travaux</li>
                  <li>Transmettre la facture pour déclenchement du paiement</li>
                </ol>
              </>
            ),
          },
          {
            id: 'eco-ptz',
            title: "L'éco-prêt à taux zéro (éco-PTZ)",
            content: (
              <>
                <p>
                  L'éco-PTZ est un prêt sans intérêts plafonné à{' '}
                  <strong>30 000 €</strong> (montant porté à 50 000 € en 2024
                  pour les rénovations performantes), remboursable sur 15 ans
                  maximum. Il finance les travaux d'amélioration énergétique
                  de la résidence principale.
                </p>
                <h3>Conditions</h3>
                <ul>
                  <li>Logement de plus de 2 ans utilisé comme résidence principale</li>
                  <li>Travaux réalisés par un artisan RGE</li>
                  <li>Au moins une action d'amélioration énergétique (isolation, chauffage…)</li>
                  <li>Demande déposée auprès d'une banque partenaire</li>
                </ul>
                <h3>Cumul avec MaPrimeRénov'</h3>
                <p>
                  L'éco-PTZ est cumulable avec MaPrimeRénov'. Vous pouvez
                  donc obtenir une prime ET emprunter à taux zéro pour
                  compléter le financement. C'est la stratégie la plus
                  efficace pour les rénovations énergétiques importantes.
                </p>
              </>
            ),
          },
          {
            id: 'tva-reduite',
            title: 'La TVA réduite à 5,5 % ou 10 %',
            content: (
              <>
                <p>
                  La TVA réduite est l'aide la plus simple à obtenir : elle
                  est appliquée directement par l'artisan sur la facture,
                  sans démarche administrative de votre part.
                </p>
                <h3>TVA à 5,5 % — rénovation énergétique</h3>
                <p>S'applique aux travaux suivants :</p>
                <ul>
                  <li>Isolation de la toiture (combles, rampants, sarking)</li>
                  <li>Pose de Velux pour amélioration énergétique</li>
                  <li>Étanchéité visant à améliorer la performance thermique</li>
                </ul>
                <h3>TVA à 10 % — entretien et amélioration</h3>
                <p>S'applique aux travaux suivants :</p>
                <ul>
                  <li>Démoussage et nettoyage de toiture</li>
                  <li>Traitement hydrofuge</li>
                  <li>Réparation, remplacement de tuiles</li>
                  <li>Pose ou réfection de zinguerie (gouttières, etc.)</li>
                  <li>Pose de fenêtres de toit standard (sans isolation renforcée)</li>
                </ul>
                <p>
                  <strong>Conditions communes</strong> : logement de plus de 2
                  ans, résidence principale ou secondaire. Sans condition de
                  revenus.
                </p>
              </>
            ),
          },
          {
            id: 'cee',
            title: 'Les Certificats d\u2019Économies d\u2019Énergie (CEE)',
            content: (
              <>
                <p>
                  Les CEE sont une aide versée par les fournisseurs d'énergie
                  (EDF, Engie, TotalEnergies, etc.) ou les grandes
                  enseignes (Leclerc, Auchan…) qui sont obligés par l'État
                  de financer des travaux d'économie d'énergie chez les
                  particuliers.
                </p>
                <p>
                  Pour l'isolation de toiture, le montant CEE peut
                  représenter <strong>10 à 18 €/m² isolé</strong>, soit{' '}
                  <strong>1 200 à 2 200 € pour 120 m²</strong>. C'est
                  cumulable avec MaPrimeRénov'.
                </p>
                <h3>Comment l'obtenir</h3>
                <ol>
                  <li>
                    Comparer les offres CEE sur des comparateurs spécialisés
                  </li>
                  <li>Signer la convention CEE AVANT le devis de l'artisan</li>
                  <li>Faire réaliser les travaux par une entreprise RGE</li>
                  <li>Transmettre la facture au signataire CEE</li>
                  <li>Recevoir la prime (virement, chèque, bon d'achat)</li>
                </ol>
              </>
            ),
          },
          {
            id: 'aides-locales',
            title: 'Aides locales Bordeaux Métropole et Gironde',
            content: (
              <>
                <p>
                  En plus des aides nationales, plusieurs dispositifs locaux
                  peuvent compléter votre financement en Gironde.
                </p>
                <h3>Plan Climat Bordeaux Métropole</h3>
                <p>
                  Bordeaux Métropole propose un programme d'accompagnement à
                  la rénovation énergétique avec un guichet unique{' '}
                  <strong>Ma Rénov Bordeaux Métropole</strong>. Conseillers
                  gratuits, aides complémentaires sous conditions, jusqu'à{' '}
                  <strong>2 000 € de subvention</strong> sur les rénovations
                  performantes.
                </p>
                <h3>Anah local Gironde</h3>
                <p>
                  L'agence locale de l'Anah en Gironde traite les dossiers
                  MaPrimeRénov' et propose des aides complémentaires pour
                  les ménages modestes habitant un logement de plus de 15
                  ans. Permanences à Bordeaux, Libourne et Mérignac.
                </p>
                <h3>Programme "Habiter Mieux Sérénité"</h3>
                <p>
                  Pour les rénovations globales générant au moins 35 %
                  d'économie d'énergie, ce programme permet de bénéficier
                  d'une aide majorée et d'un accompagnement complet
                  (diagnostic, devis, suivi). Plafonné à 50 % du montant des
                  travaux pour les ménages très modestes.
                </p>
              </>
            ),
          },
          {
            id: 'strategie',
            title: 'Stratégie optimale de cumul des aides',
            content: (
              <>
                <p>
                  En cumulant intelligemment les aides, vous pouvez{' '}
                  <strong>réduire de 50 à 80 %</strong> le coût d'une
                  rénovation de toiture isolée. Voici la stratégie type
                  pour une isolation de combles à Bordeaux.
                </p>
                <h3>Exemple chiffré : isolation combles 120 m² à 8 500 € HT</h3>
                <table>
                  <thead>
                    <tr>
                      <th>Poste</th>
                      <th>Montant</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Devis artisan RGE</td>
                      <td>8 500 € HT</td>
                    </tr>
                    <tr>
                      <td>TVA 5,5 %</td>
                      <td>+ 467 € (TTC : 8 967 €)</td>
                    </tr>
                    <tr>
                      <td>MaPrimeRénov' (cat. Jaune)</td>
                      <td>– 2 400 €</td>
                    </tr>
                    <tr>
                      <td>CEE (prime énergie)</td>
                      <td>– 1 680 €</td>
                    </tr>
                    <tr>
                      <td>Aide Bordeaux Métropole</td>
                      <td>– 1 000 €</td>
                    </tr>
                    <tr>
                      <td>
                        <strong>Reste à charge</strong>
                      </td>
                      <td>
                        <strong>3 887 € TTC</strong>
                      </td>
                    </tr>
                    <tr>
                      <td>Éco-PTZ</td>
                      <td>3 887 € à 0 % sur 10 ans</td>
                    </tr>
                  </tbody>
                </table>
                <p>
                  Dans cet exemple, le ménage finance{' '}
                  <strong>54 % du coût</strong> par les aides, et emprunte
                  le solde à taux zéro sur 10 ans — soit{' '}
                  <strong>32 €/mois</strong>. Le rentabilité énergétique
                  (économie de chauffage) dépasse souvent la mensualité.
                </p>
              </>
            ),
          },
          {
            id: 'demarches',
            title: 'Démarches pas à pas',
            content: (
              <>
                <p>
                  Voici l'ordre exact des démarches pour optimiser votre
                  dossier d'aides. La règle absolue :{' '}
                  <strong>
                    rien ne se signe avant que tous les dossiers soient
                    déposés
                  </strong>
                  . Beaucoup d'aides exigent un dépôt antérieur au devis.
                </p>
                <ol>
                  <li>
                    <strong>Identifier vos travaux</strong> : isolation
                    combles, rampants, étanchéité, etc.
                  </li>
                  <li>
                    <strong>Choisir un artisan RGE</strong> : vérifier la
                    certification sur le site france-renov.gouv.fr
                  </li>
                  <li>
                    <strong>Demander un devis détaillé</strong> mais ne pas
                    le signer immédiatement
                  </li>
                  <li>
                    <strong>Estimer votre catégorie MaPrimeRénov'</strong>{' '}
                    (simulateur en ligne)
                  </li>
                  <li>
                    <strong>Signer une convention CEE</strong> avec un
                    fournisseur (avant devis)
                  </li>
                  <li>
                    <strong>Déposer le dossier MaPrimeRénov'</strong> sur
                    maprimerenov.gouv.fr
                  </li>
                  <li>
                    <strong>Attendre la notification d'attribution</strong>{' '}
                    (3-4 semaines)
                  </li>
                  <li>
                    <strong>Signer le devis artisan</strong>
                  </li>
                  <li>
                    <strong>Demander l'éco-PTZ</strong> à votre banque si
                    besoin de financement complémentaire
                  </li>
                  <li>
                    <strong>Réaliser les travaux</strong>
                  </li>
                  <li>
                    <strong>Transmettre les factures</strong> aux différents
                    organismes pour déclencher les paiements
                  </li>
                </ol>
                <blockquote>
                  Conseil : pour les rénovations importantes, faites-vous
                  accompagner par un conseiller France Rénov' (gratuit). Il
                  vous guide dans le montage du dossier et la chronologie des
                  démarches.
                </blockquote>
              </>
            ),
          },
        ],
        faq: [
          {
            question: 'Le démoussage est-il éligible aux aides ?',
            answer:
              "Non. Le démoussage et le nettoyage de toiture ne sont pas considérés comme des travaux d'amélioration énergétique. Ils ne sont donc pas éligibles à MaPrimeRénov', éco-PTZ ou aides locales. Ils bénéficient en revanche de la TVA à 10 % (entretien sur logement +2 ans).",
          },
          {
            question:
              "Qu'est-ce qu'un artisan RGE et comment vérifier ?",
            answer:
              "RGE (Reconnu Garant de l'Environnement) est une certification obligatoire pour que les travaux soient éligibles aux aides. Vérifiez la certification sur france-renov.gouv.fr en saisissant le nom ou le SIRET de l'entreprise. La certification précise les domaines d'intervention couverts.",
          },
          {
            question: "Peut-on cumuler plusieurs aides ?",
            answer:
              "Oui, la majorité des aides sont cumulables : MaPrimeRénov' + CEE + TVA réduite + éco-PTZ + aides locales. Seules les aides versées par le même organisme pour le même travaux ne se cumulent généralement pas. Cumuler intelligemment permet de réduire de 50 à 80 % le coût d'une rénovation énergétique.",
          },
          {
            question:
              "Faut-il déposer le dossier avant ou après les travaux ?",
            answer:
              "AVANT toujours, pour MaPrimeRénov', CEE et éco-PTZ. La date de dépôt du dossier doit être antérieure à la date de signature du devis et au début des travaux. C'est la cause n°1 de refus d'aides : les particuliers signent leur devis avant d'avoir fait les démarches.",
          },
          {
            question:
              "Quel est le délai entre le dépôt et le versement ?",
            answer:
              "Pour MaPrimeRénov' : 3-4 semaines pour la notification d'attribution, puis versement sous 15 jours après transmission de la facture. Pour les CEE : 6-12 semaines selon le signataire. L'éco-PTZ est mobilisable au moment des travaux. Prévoir 2-3 mois entre la première démarche et le démarrage du chantier.",
          },
          {
            question: "Que se passe-t-il si je ne suis pas éligible ?",
            answer:
              "Vous restez éligible à la TVA réduite (5,5 % ou 10 % selon les travaux) qui s'applique automatiquement sur la facture. Vous pouvez aussi bénéficier de l'éco-PTZ qui n'a pas de condition de ressources (mais condition d'acceptation bancaire). Les CEE n'ont pas de condition de revenus dans la majorité des cas.",
          },
        ],
      }}
    />
  );
}
