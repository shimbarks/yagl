export enum LetterStyle {
  FORMAL = '👔',
  CASUAL = '🤓',
  CHILL = '💩',
}

export interface Yagl {
  firstName: string;
  lastName: string;
  roles: string;
  startDate: string;
  endDate: string;
  lastDay: string;
}

export const YAGL_KEYS: (keyof Yagl)[] = [
  'firstName',
  'lastName',
  'roles',
  'startDate',
  'endDate',
  'lastDay',
];
