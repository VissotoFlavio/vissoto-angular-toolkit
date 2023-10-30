import { CodeViewer } from '../../../components/code-viewer/interfaces/code-viewer.interface';
import { EventsComponents } from '../events.interface';

export interface CheckboxRequest {
  codeModule: CodeViewer;
  events: EventsComponents[];
  codeSimples: CodeViewer;
  codeChecked: CodeViewer;
  codeDisabled: CodeViewer;
  codeHelperText: CodeViewer;
  codeControlForm: CodeViewer;
}
