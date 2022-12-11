import { Yagl, YAGL_KEYS } from '../models/app.model';

export function getEnumKeyByValue(enumObj: object, value: string): string {
  const index = Object.values(enumObj).indexOf(value);
  return Object.keys(enumObj)[index];
}

export function parseYagl(value: string): Yagl {
  const unfilteredEntries = value
    .split('💌')
    .map((entry) => entry.split('👋').map((e) => e.trim()));

  const yaglEntries = unfilteredEntries.filter(([key]) => {
    return YAGL_KEYS.includes(key as keyof Yagl);
  });

  return Object.fromEntries(yaglEntries);
}

export function yaglToFormal(yagl: Yagl): string {
  return `formal ${yagl.firstName}`;
}

export function yaglToCasual(yagl: Yagl): string {
  return `casual ${yagl.firstName}`;
}

export function yaglToFunny(yagl: Yagl): string {
  return `funny ${yagl.firstName}`;
}

export function yaglToString(form: Yagl): string {
  const entries = Object.entries(form) as Entries<Yagl>;
  return entries.map((entry) => entry.join(' 👋 ')).join(' 💌\n');
}
