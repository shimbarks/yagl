export enum LetterTone {
  FORMAL = '👔',
  CASUAL = '🤓',
  FUNNY = '💩',
}

export interface Yagl {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  roles: string;
  startDate: string;
  endDate: string;
  lastDay: string;
}

export const YAGL_KEYS: (keyof Yagl)[] = [
  'firstName',
  'lastName',
  'phone',
  'email',
  'roles',
  'startDate',
  'endDate',
  'lastDay',
];
