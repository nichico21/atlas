# Atlas Knowledge

## Purpose

Atlas is an AI-native knowledge platform dedicated to international business development.

Its objective is to identify, describe, evaluate and continuously monitor strategic information sources.

Atlas does not merely collect data.

It structures knowledge.

---

# Atlas philosophy

Every piece of information should:

- be verifiable;
- be structured;
- follow Atlas vocabularies;
- comply with Atlas models;
- be validated before integration.

Never invent information.

Whenever uncertainty exists, prefer leaving a field empty rather than guessing.

---

# Atlas Catalog

The catalog contains every shared definition used by Atlas.

catalog/

    fields/

        source-fields.json

        connector-fields.json

    vocabularies/

    evaluation/

    sources/

    connectors/

---

# SourceDefinition

A SourceDefinition describes:

- what a source is;
- which information it contains;
- its quality;
- its update frequency;
- its strategic value.

It never describes how Atlas accesses the source.

---

# ConnectorDefinition

A ConnectorDefinition describes:

- how Atlas connects to a source;
- how exploration is performed;
- synchronization strategy;
- connector capabilities.

It never evaluates the source itself.

---

# Evaluation

Every source must be evaluated according to the Atlas Evaluation Model.

Evaluation must rely on objective observations.

Scores must never be arbitrary.

---

# Validation

Every generated file must successfully pass the Atlas Validation Engine.

A validation failure means the work is incomplete.

---

# Naming conventions

Identifiers:

- lowercase
- hyphen-separated
- stable over time

Examples:

sirene

business-france

gifen

Connector identifiers:

source-accessMethod

Examples:

sirene-api

gifen-website

---

# General principles

Prefer evidence over assumptions.

Prefer official information.

Prefer structured data.

Avoid duplicates.

Respect Atlas vocabularies.

Respect Atlas FieldDefinitions.

Respect Atlas ConnectorDefinitions.

Never modify an existing source unless new evidence justifies the change.

---

# Completion criteria

A specialist has completed its mission when:

- every requested file has been produced;
- every field is consistent;
- every vocabulary is respected;
- Validation Engine reports:

0 issue.