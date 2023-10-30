import { ObjectValues } from './object-values';

export const SHOW_TYPE = {
  frame: 'frame',
  side: 'side',
  central: 'central',
} as const;

export type ShowType = ObjectValues<typeof SHOW_TYPE>;
