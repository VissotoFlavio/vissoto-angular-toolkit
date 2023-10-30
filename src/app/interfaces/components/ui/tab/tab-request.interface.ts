import { CodeViewer } from '../../../../components/code-viewer/interfaces/code-viewer.interface';
import { EventsComponents } from '../../events.interface';

export interface TabRequest {
  codeModule: CodeViewer;
  maxWidthPx: CodeViewer;
  maxWidthElement: CodeViewer;
  widthPx: CodeViewer;
  interfaceTab: CodeViewer;
  events: EventsComponents[];
}
