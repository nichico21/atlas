# Workflow

## Étape 1

Réception du contenu.

Entrée :

- Contenu extrait par le Crawler (une ou plusieurs pages)
- sourceId, sourceUrl

---

## Étape 2

Identification des entreprises distinctes mentionnées dans le contenu.

Ne pas confondre :
- une entreprise mentionnée comme simple exemple ou référence client ;
- une entreprise réellement décrite comme faisant partie de la source (adhérent, fournisseur référencé, acteur du répertoire...).

Identification des entreprises distinctes mentionnées dans le contenu. Pour chaque entreprise repérée, vérifier qu'elle correspond à au moins un secteur
du vocabulaire `primary-sectors` avant de poursuivre. Si aucune correspondance claire n'existe, ignorer cette entreprise et ne pas produire de fiche.

---

## Étape 3

Pour chaque entreprise identifiée, extraction des seuls champs `aiFillable: true`
disponibles dans le contenu fourni.

Ne jamais inventer une valeur absente du contenu.

---

## Étape 4

Production d'une fiche company.json par entreprise, avec :
- completionStatus = "ai-draft"
- sourceId, sourceUrl renseignés

---

## Étape 5

Validation

Le Validation Engine est exécuté sur les champs renseignés.

---

## Étape 6

Livraison

Les fiches sont intégrées au catalogue Atlas (catalog/companies/).