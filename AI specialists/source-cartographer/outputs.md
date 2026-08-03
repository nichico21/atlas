# Outputs

Le spécialiste produit exactement deux fichiers.

## SourceDefinition

catalog/sources/<id>.json

Décrit :

- la source ;
- sa qualité ;
- son évaluation ;
- ses objets ;
- ses métadonnées.

---

## ConnectorDefinition

catalog/connectors/<id>.json

Décrit :

- le mode d'accès ;
- la stratégie d'exploration ;
- la synchronisation ;
- les capacités du connecteur.

---

## Validation

Les deux fichiers doivent être conformes :

- aux FieldDefinitions ;
- aux vocabulaires ;
- au modèle d'évaluation.

Le Validation Engine doit retourner :

0 issue.