import type { Thing, WithContext } from 'schema-dts';

type JsonLdData = WithContext<Thing> | WithContext<Thing>[];

type JsonLdProps = {
  data: JsonLdData;
};

/**
 * JsonLd — injection sécurisée de schemas JSON-LD dans le HTML.
 *
 * `dangerouslySetInnerHTML` est requis : Google attend du JSON brut dans la
 * balise script. React échapperait les chevrons et casserait le parsing.
 * Le contenu vient uniquement de helpers typés côté serveur (lib/seo/schemas),
 * pas d'input utilisateur — donc pas de risque d'injection.
 */
export function JsonLd({ data }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data),
      }}
    />
  );
}
