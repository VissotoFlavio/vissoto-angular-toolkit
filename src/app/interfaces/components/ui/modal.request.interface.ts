import { AttributesItem } from '../attributes.interface';
import { CodeViewer } from '../../../components/code-viewer/interfaces/code-viewer.interface';
import { EventsComponents } from '../events.interface';

export interface ModalRequest {
  codeModule: CodeViewer;
  events: EventsComponents[];
  rounded: CodeViewer;
  cssClassHeader: CodeViewer;
  roundedEnum: CodeViewer;
  show: CodeViewer;
  template: CodeViewer;

  attributes: string[];
  attributesHTML: AttributesItem[];
}
