import 'json-schema';

declare module 'json-schema' {
  // eslint-disable-next-line @typescript-eslint/naming-convention
  export interface JSONSchema7 {
    dateformatex?: string;
    example?: string | number;
    collectionFormat?: 'csv' | 'ssv' | 'tsv' | 'pipes' | 'multi';
  }
}
