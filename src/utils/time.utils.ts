import { Language } from '../lang/lang.model';
import {
  HebrewTimeUnit,
  HebrewTimeUnitsMap,
  Period,
} from '../models/time.model';

export function calcWorkingPeriod(
  startDateString: string,
  lang: Language
): Period {
  const now = new Date();
  const startDate = new Date(startDateString);
  const diff = now.getTime() - startDate.getTime();
  const days = Math.ceil(diff / (1000 * 3600 * 24));
  const months = Math.round(days / 30);
  const isEnglish = lang === Language.ENGLISH;

  switch (true) {
    case days < 7:
      return {
        unit: isEnglish ? 'day' : 'ימים',
        amount: days,
      };
    case days < 28:
      return {
        unit: isEnglish ? 'week' : 'שבועות',
        amount: Math.round(days / 7),
      };
    case months < 12:
      return {
        unit: isEnglish ? 'month' : 'חודשים',
        amount: months,
      };
    default: {
      const yearsString = (days / 365).toFixed(1);
      const decimal = yearsString.at(-1);
      const years = decimal === '5' ? +yearsString : Math.round(days / 365);

      return {
        unit: isEnglish ? 'year' : 'שנים',
        amount: years,
      };
    }
  }
}

export function transformHebrewPeriod({ amount, unit }: Period): string {
  if (amount === 1 || amount === 2) {
    const key = amount === 1 ? 'single' : 'double';
    return HebrewTimeUnitsMap[key][unit as HebrewTimeUnit];
  }

  return `${amount} ${unit}`;
}

export function spellHebrewPassed({ amount, unit }: Period): string {
  if (amount === 1) {
    return unit === 'שנים' ? 'חלפה' : 'חלף';
  }

  return 'חלפו';
}
