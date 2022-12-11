import { Yagl, YAGL_DATE_KEYS, YAGL_KEYS } from '../models/app.model';
import { Entries } from '../models/common.model';

export function parseYagl(value: string): Yagl {
  const unfilteredEntries = value
    .split('💌')
    .map((entry) => entry.split('👋').map((e) => e.trim()));

  const entries = unfilteredEntries.filter(([key]) => {
    return YAGL_KEYS.includes(key as keyof Yagl);
  });

  const yaglEntries = entries.map(([key, value]) => {
    return [
      key,
      YAGL_DATE_KEYS.includes(key as keyof Yagl)
        ? new Date(Date.parse(value))
        : value,
    ];
  }) as Entries<Yagl>;

  return Object.fromEntries(yaglEntries);
}

export function yaglToFormal(yagl: Yagl): string {
  return `formal ${yagl.firstName}`;
}

export function yaglToCasual(yagl: Yagl): string {
  return `casual ${yagl.firstName}`;
}

export function yaglToChill(yagl: Yagl): string {
  return `chill ${yagl.firstName}`;
}

export function yaglToString(form: Yagl): string {
  const entries = Object.entries(form) as Entries<Yagl>;
  return entries
    .map(([key, value]) => {
      if (YAGL_DATE_KEYS.includes(key)) {
        value = value.toLocaleString(undefined, { dateStyle: 'short' });
      }

      return `${key} 👋 ${value}`;
    })
    .join(' 💌\n');
}
