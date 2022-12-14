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

export interface Period {
  unit: EnglishTimeUnit | HebrewTimeUnit;
  amount: number;
}

export type EnglishTimeUnit = 'day' | 'week' | 'month' | 'year';
export type HebrewTimeUnit = 'ימים' | 'שבועות' | 'חודשים' | 'שנים';

export const HebrewTimeUnitsMap = {
  single: {
    ימים: 'יום',
    שבועות: 'שבוע',
    חודשים: 'חודש',
    שנים: 'שנה',
  },
  double: {
    ימים: 'יומיים',
    שבועות: 'שבועיים',
    חודשים: 'חודשיים',
    שנים: 'שנתיים',
  },
};
