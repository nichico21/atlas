/**
 * Types de champs supportés par Atlas.
 */
export type FieldType =
  | "text"
  | "long-text"
  | "number"
  | "rating"
  | "boolean"
  | "date"
  | "url"
  | "email"
  | "single-select"
  | "multi-select"
  | "evaluation";

/**
 * Sections d'un formulaire.
 */
export type FieldSection =
  | "identity"
  | "classification"
  | "metadata"
  | "evaluation"
  | "connector"
  | "technical";

/**
 * Décrit l'origine des valeurs d'un champ.
 */
export interface FieldSource {

  /**
   * Type de source.
   * Exemple : vocabulary, entity, api...
   */
  type: "vocabulary" | "entity" | "api";

  /**
   * Nom de la ressource.
   * Exemple : "families"
   */
  name: string;

}

/**
 * Décrit la manière dont les agents IA utilisent un champ.
 */
export interface AIConfiguration {

  /**
   * Le champ est indexé.
   */
  index: boolean;

  /**
   * Le champ est utilisé pour la recherche.
   */
  search: boolean;

  /**
   * Le champ peut être résumé.
   */
  summarize: boolean;

  /**
   * Le champ est intégré dans les embeddings.
   */
  embedding: boolean;

}

/**
 * Définition métier d'un champ Atlas.
 */
export interface FieldDefinition {

  /**
   * Nom technique.
   */
  id: string;

  /**
   * Libellé affiché.
   */
  label: string;

  /**
   * Section du formulaire.
   */
  section: FieldSection;

  /**
   * Ordre d'affichage.
   */
  order: number;

  /**
   * Type métier.
   */
  type: FieldType;

  /**
   * Champ obligatoire ?
   */
  required: boolean;

  /**
   * Champ calculé automatiquement ?
   */
  computed?: boolean;

  /**
   * Champ en lecture seule ?
   */
  readonly?: boolean;

  /**
   * Description affichée dans l'interface.
   */
  description?: string;

  /**
   * Valeur par défaut.
   */
  defaultValue?: unknown;

  /**
   * Exemple de valeur.
   */
  example?: unknown;

/**
 * Groupe auquel l'objet appartient.
 * Ex. "evaluation", "connector", "metadata"
 * Si absent, le champ est situé à la racine.
 */
parent?: string;

  /**
   * Source des valeurs.
   */
  valueSource?: FieldSource;

  /**
   * Paramètres IA.
   */
  ai: AIConfiguration;

  /**
   * Formule de calcul.
   */
  formula?: string;

  aiFillable?: boolean;

}