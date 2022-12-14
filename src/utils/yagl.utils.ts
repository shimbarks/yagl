import { WeekDays } from '../lang/lang.data';
import { Language } from '../lang/lang.model';
import { LetterTone, Yagl, YAGL_KEYS } from '../models/app.model';
import { toneLangFuncMap } from './letter.utils';
import { calcWorkingPeriod } from './time.utils';

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
