import { CodeViewer } from './../../../../components/code-viewer/interfaces/code-viewer.interface';
import { EventsComponents } from '../../events.interface';

export interface SelectRequest {
  codeModule: CodeViewer;
  codeTitle: CodeViewer;
  codeRounded: CodeViewer;
  events: EventsComponents[];
}
