import { SourceEvaluation } from "./source-evaluation";
import { SourceConnector } from "./source-connector";
import { SourceCapabilities } from "./source-capabilities";

export interface Source {

    id: string; 

    name: string; 

    acronym?: string;

    description: string;  

    whyStrategic: string; 

    questionsAnswered: string; 

    comments?: string; 

    owner: string; 

    url?: string; 

    sourceCategory: string; 

    sourceType: string; 

    geographicScope: string; 

    status: string; 

    role: string[]; 

    mainObject: string; 

    primarySectors: string[]; 

    dataTypes: string[];

    estimatedCompanies: number; 

    updateFrequency: string; 

    accessMethod: string[]; 

    collectionDifficulty: string; 

    lastVerified: Date; 

    licenses: string; 

    connector: SourceConnector; 

    capabilities: SourceCapabilities;

    evaluation: SourceEvaluation; 

    fsipScore: number; 

    integrationPriority: string;

    developmentPriority: string; 

/**
 * Date de la dernière mise à jour des données
 * publiée par le producteur de la source.
 */
lastSourceUpdate?: Date;

}