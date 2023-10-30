import { Color } from './color';
import { Position } from './position';
import { Rounded } from './rounded';
import { ShowType } from './show-type';
import { Size } from './size';
import { TemplateRef } from '@angular/core';

export interface ModalConfig {
  templateRef: TemplateRef<unknown>;
  color?: Color;
  position?: Position;
  rounded?: Rounded;
  showType?: ShowType;
  size?: Size;
  width?: string;
}
