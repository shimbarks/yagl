import { Yagl, YAGL_KEYS } from '../models/app.model';
import { Entries } from '../models/common.model';

export function parseYagl(value: string): Yagl {
  const unfilteredEntries = value
    .split('💌')
    .map((entry) => entry.split('👋').map((e) => e.trim()));

  const yaglEntries = unfilteredEntries.filter(([key]) => {
    return YAGL_KEYS.includes(key as keyof Yagl);
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

export function convertFormToYagl(form: Yagl): string {
  const entries = Object.entries(form) as Entries<Yagl>;
  return entries
    .map(([key, value]) => {
      if (typeof value === 'object') {
        value = value.toLocaleString(undefined, { dateStyle: 'short' });
      }

      return `${key} 👋 ${value}`;
    })
    .join(' 💌\n');
}
