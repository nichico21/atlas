/**
 * Méthodes d'exploration d'une source.
 */
export type ExplorationMode =
  | "full-site"
  | "entry-points"
  | "api-only"
  | "manual";

/**
 * Définition d'un connecteur Atlas.
 *
 * Un Connector décrit comment Atlas interagit avec une source.
 * Il ne décrit pas la source elle-même (cf. SourceDefinition),
 * mais la stratégie permettant aux agents IA de la consulter.
 */
export interface ConnectorDefinition {

  /**
   * Identifiant unique du connecteur.
   * Exemple : "sirene-api"
   */
  id: string;

  /**
   * Source associée.
   * Exemple : "sirene"
   */
  source: string;

  /**
   * Nom du connecteur.
   */
  label: string;

  /**
   * Description.
   */
  description?: string;

  /**
   * Version du connecteur.
   */
  version: string;

  /**
   * Connecteur actif ?
   */
  enabled: boolean;

  // ==========================================================
  // CONNECTION
  // ==========================================================

  /**
   * Méthode d'accès utilisée.
   * (API, Website, RSS, CSV...)
   *
   * Vocabulaire :
   * access-methods.json
   */
  accessMethod: string;

  /**
   * URL principale utilisée par le connecteur.
   */
  baseUrl: string;

  /**
   * Authentification nécessaire ?
   */
  authenticationRequired: boolean;

  // ==========================================================
  // EXPLORATION
  // ==========================================================

  /**
   * Stratégie générale d'exploration.
   */
  explorationMode: ExplorationMode;

  /**
   * Pages à explorer en priorité.
   *
   * Exemple :
   * [
   *   "/companies",
   *   "/members",
   *   "/news"
   * ]
   */
  entryPoints: string[];

  /**
   * Profondeur maximale d'exploration.
   */
  maxDepth: number;

  /**
   * Suivre automatiquement les liens internes ?
   */
  followInternalLinks: boolean;

  /**
   * Respecter robots.txt ?
   */
  respectRobotsTxt: boolean;

  /**
   * Utiliser le sitemap lorsqu'il existe ?
   */
  useSitemap: boolean;

  // ==========================================================
  // SYNCHRONIZATION
  // ==========================================================

  /**
   * Fréquence de synchronisation
   * choisie par Atlas.
   *
   * (à distinguer de updateFrequency
   * qui décrit la fréquence
   * de mise à jour de la source.)
   */
  syncFrequency: string;

  /**
   * Date de la dernière synchronisation.
   */
  lastSync?: Date;

  /**
   * Date de la dernière vérification
   * du connecteur.
   */
  lastVerified?: Date;

  // ==========================================================
  // CAPABILITIES
  // ==========================================================

  /**
   * Fonctionnalités offertes
   * par ce connecteur.
   *
   * Vocabulaire :
   * connector-capabilities.json
   */
  capabilities: string[];

  // ==========================================================
  // AI
  // ==========================================================

  /**
   * Conseils destinés aux agents IA.
   */
  notes?: string;

  /**
   * Limites connues.
   */
  knownLimitations?: string;

  /**
   * Stratégie recommandée
   * pour l'exploration.
   */
  recommendedStrategy?: string;

}