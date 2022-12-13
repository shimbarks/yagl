import { WeekDays } from '../lang/lang.data';
import { Language } from '../lang/lang.model';
import { LetterTone, Period, Yagl, YAGL_KEYS } from '../models/app.model';
import { toneLangFuncMap } from './letter.utils';

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
  const roles = transformRoles(yagl.roles, lang);
  const lastDay = transformLastDay(yagl.lastDay, lang);
  const period = calcWorkingPeriod(yagl.startDate, lang);
  const func = toneLangFuncMap[lang][tone];
  return func({ ...yagl, roles, lastDay }, period);
}

function transformLastDay(lastDay: string, lang: Language): string {
  const date = new Date(lastDay);
  const weekDay = WeekDays[lang][date.getDay()];
  return `${weekDay}, ${date.getDate()}/${date.getMonth() + 1}`;
}

function transformRoles(roles: string, lang: Language): string {
  const rolesList = roles.split(',').map((role) => role.trim());
  let lastRole = '';

  if (rolesList.length > 1) {
    lastRole = rolesList.pop() as string;
  }

  let aggregatedRoles = rolesList.join(', ');

  if (lastRole) {
    aggregatedRoles += ` ${
      lang === Language.ENGLISH ? 'and ' : 'ו'
    }${lastRole}`;
  }

  return aggregatedRoles;
}

function calcWorkingPeriod(startDateString: string, lang: Language): Period {
  const now = new Date();
  const startDate = new Date(startDateString);
  const diff = now.getTime() - startDate.getTime();
  const days = Math.ceil(diff / (1000 * 3600 * 24));
  const months = Math.round(days / 30);
  const isEnglish = lang === Language.ENGLISH;

  switch (true) {
    case days < 7:
      return {
        unit: isEnglish ? 'days' : 'ימים',
        amount: days,
      };
    case days < 28:
      return {
        unit: isEnglish ? 'weeks' : 'שבועות',
        amount: Math.round(days / 7),
      };
    case months < 12:
      return {
        unit: isEnglish ? 'months' : 'חודשים',
        amount: months,
      };
    default: {
      const yearsString = (days / 365).toFixed(1);
      const decimal = yearsString.at(-1);
      const years = decimal === '5' ? +yearsString : Math.round(days / 365);

      return {
        unit: isEnglish ? 'years' : 'שנים',
        amount: years,
      };
    }
  }
}
