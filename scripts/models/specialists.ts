export interface SpecialistInput {

  /**
   * Resource to analyse.
   */
  url: string;

}

export interface SpecialistResult {

  /**
   * Final prompt assembled by the Specialist Engine.
   */
  prompt: string;

}