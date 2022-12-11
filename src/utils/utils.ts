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
  return 'formal';
}

export function yaglToCasual(yagl: Yagl): string {
  return 'casual';
}

export function yaglToChill(yagl: Yagl): string {
  return 'chill';
}
