# FSIP Source Registry

Le Source Registry constitue la source de vérité de toutes les sources documentaires utilisées par FSIP.

Chaque source est décrite dans un fichier JSON conforme au schéma officiel.

## Structure

schemas/
vocabularies/
sources/

## Règles

Une source = un fichier JSON

Toutes les valeurs doivent appartenir aux vocabulaires.

Le schéma est validé avant chaque synchronisation.

Airtable et Supabase sont alimentés automatiquement depuis ce registre.