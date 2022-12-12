export function getEnumKeyByValue(enumObj: object, value: string): string {
  const index = Object.values(enumObj).indexOf(value);
  return Object.keys(enumObj)[index];
}
