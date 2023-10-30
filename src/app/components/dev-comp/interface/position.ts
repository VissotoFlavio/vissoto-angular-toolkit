import { ObjectValues } from './object-values';

export const POSITION = {
  top: 'top',
  right: 'right',
  bottom: 'bottom',
  left: 'left',
  center: 'center',
  topRight: 'top-right',
  topLeft: 'top-left',
  bottomRight: 'bottom-right',
  bottomLeft: 'bottom-left',
} as const;

export type Position = ObjectValues<typeof POSITION>;
