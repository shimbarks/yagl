import { Language } from '../lang/lang.model';
import { LetterTone, Period, Yagl, YAGL_KEYS } from '../models/app.model';

export function parseYagl(value: string): Yagl {
  const unfilteredEntries = value
    .split('💌')
    .map((entry) => entry.split('👋').map((e) => e.trim()));

  const yaglEntries = unfilteredEntries.filter(([key]) => {
    return YAGL_KEYS.includes(key as keyof Yagl);
  });

  return Object.fromEntries(yaglEntries);
}

export function yaglToString(form: Yagl): string {
  const entries = Object.entries(form) as Entries<Yagl>;
  return entries.map((entry) => entry?.join(' 👋 ')).join(' 💌\n');
}

export function yaglToLetter({
  yagl,
  lang,
  tone,
}: {
  yagl: Yagl;
  lang: Language;
  tone: LetterTone;
}): string {
  const { amount, unit } = calcWorkingPeriod(yagl.startDate);
  return `After ${amount} ${unit} ${tone} ${lang}`;
}

export function calcWorkingPeriod(startDateString: string): Period {
  const now = new Date();
  const startDate = new Date(startDateString);
  const diff = now.getTime() - startDate.getTime();
  const days = Math.ceil(diff / (1000 * 3600 * 24));
  const months = Math.round(days / 30);

  switch (true) {
    case days < 7:
      return {
        unit: 'days',
        amount: days,
      };
    case days < 28:
      return {
        unit: 'weeks',
        amount: Math.round(days / 7),
      };
    case months < 12:
      return {
        unit: 'months',
        amount: months,
      };
    default: {
      const yearsString = (days / 365).toFixed(1);
      const decimal = yearsString.at(-1);
      const years = decimal === '5' ? +yearsString : Math.round(days / 365);

      return {
        unit: 'years',
        amount: years,
      };
    }
  }
}
