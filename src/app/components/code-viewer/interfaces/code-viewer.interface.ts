import { Language } from './languages.enum';

export interface CodeViewer {
  code: string;
  language?: Language;
}
