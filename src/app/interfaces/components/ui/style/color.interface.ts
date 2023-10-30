import { BaseStyle } from './base-style.interface';
import { CodeViewer } from '../../../../components/code-viewer/interfaces/code-viewer.interface';

export interface ColorStyle {
  colors: BaseStyle[];
  enum: CodeViewer;
}
