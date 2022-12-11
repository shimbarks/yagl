export enum LetterStyle {
  FORMAL = '👔',
  CASUAL = '🤓',
  CHILL = '💩',
}

export interface Yagl {
  firstName: string;
  lastName: string;
  roles: string;
  startDate: Date;
  endDate: Date;
  lastDay: Date;
}

export const YAGL_KEYS: (keyof Yagl)[] = [
  'firstName',
  'lastName',
  'roles',
  'startDate',
  'endDate',
  'lastDay',
];
