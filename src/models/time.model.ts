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
