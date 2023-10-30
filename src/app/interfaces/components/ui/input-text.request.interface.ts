import { AttributesItem } from '../attributes.interface';
import { BaseStyle } from './style/base-style.interface';
import { CodeViewer } from '../../../components/code-viewer/interfaces/code-viewer.interface';
import { EventsComponents } from '../events.interface';

export interface InputTextRequest {
  codeModule: CodeViewer;
  events: EventsComponents[];
  attributes: string[];
  attributesHTML: AttributesItem[];
  rounded: CodeViewer;
  cssClassInput: CodeViewer;
  roundedEnum: CodeViewer;

  codeControlForm: CodeViewer;

  borderStyle: BaseStyle[];
}
