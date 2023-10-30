import { AttributesItem } from '../attributes.interface';
import { CodeViewer } from '../../../components/code-viewer/interfaces/code-viewer.interface';
import { ColorStyle } from './style/color.interface';
import { EventsComponents } from '../events.interface';

export interface AlertRequest {
  codeModule: CodeViewer;
  events: EventsComponents[];
  timer: CodeViewer;
  show: CodeViewer;
  template: CodeViewer;
  autoClose: CodeViewer;

  attributes: string[];
  attributesHTML: AttributesItem[];

  colorStyle: ColorStyle;
}
