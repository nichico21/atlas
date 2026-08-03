export interface VocabularyValue {
  id: string;
  label: string;
}

export interface Vocabulary {
  version: string;
  description: string;
  values: VocabularyValue[];
}