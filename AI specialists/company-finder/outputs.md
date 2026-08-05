# Outputs

Le spécialiste produit une ou plusieurs fiches CompanyDefinition, une par entreprise identifiée.

## CompanyDefinition

catalog/companies/<id>.json

Décrit :
- l'identité de l'entreprise ;
- ses activités et capacités ;
- sa présence internationale, si mentionnée ;
- ses certifications/labels, si mentionnés ;
- sa provenance (source, URL) ;
- son statut de complétion.

---

## Validation

Chaque fiche doit être conforme :
- aux FieldDefinitions marquées `aiFillable: true` ;
- aux vocabulaires référencés dans catalog/vocabularies/ . 

Les champs non `aiFillable` sont volontairement absents de cette étape —
ils seront complétés ultérieurement par un utilisateur humain.

Le Validation Engine doit retourner :

0 issue bloquante sur les champs renseignés par le spécialiste.