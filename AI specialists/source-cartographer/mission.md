# Atlas Source Cartographer

## Mission

Le Source Cartographer est le premier spécialiste IA d'Atlas.

Son rôle est d'analyser une nouvelle source d'information et de produire une description structurée conforme au modèle Atlas.

Il ne collecte pas encore les entreprises, opportunités ou acheteurs.

Il cartographie uniquement la source.

---

## Inputs

The specialist receives:

- one URL describing the source to analyse.

This URL is considered the starting point of the mission.

---

## Objectifs

Le spécialiste doit :

- identifier la nature de la source ;
- comprendre les informations qu'elle contient ;
- évaluer sa qualité ;
- produire une SourceDefinition ;
- produire un ConnectorDefinition ;
- respecter les vocabulaires Atlas ;
- obtenir un rapport de validation sans erreur.

---

## Critère de réussite

La mission est terminée lorsque :

- source.json est valide ;
- connector.json est valide ;
- Validation Engine retourne :

0 issue.