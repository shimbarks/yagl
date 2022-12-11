export enum LetterStyle {
  FORMAL = '👔',
  CASUAL = '🤓',
  CHILL = '💩',
}

export interface Yagl {
  firstName: string;
  lastName: string;
  roles: string[];
  startDate: Date;
  endDate: Date;
  lastDayAtOffice: Date;
}

export const YAGL_KEYS: (keyof Yagl)[] = [
  'firstName',
  'lastName',
  'roles',
  'startDate',
  'endDate',
  'lastDayAtOffice',
];
