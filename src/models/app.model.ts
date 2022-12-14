export enum LetterTone {
  FORMAL = '👔',
  CASUAL = '🤓',
  CHILL = '🍹',
}

export interface Yagl {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  linkedIn?: string;
  company: string;
  roles: string;
  lob?: string;
  startDate: string;
  lastDay: string;
}

export const YAGL_KEYS: (keyof Yagl)[] = [
  'firstName',
  'lastName',
  'phone',
  'email',
  'linkedIn',
  'company',
  'roles',
  'lob',
  'startDate',
  'lastDay',
];
