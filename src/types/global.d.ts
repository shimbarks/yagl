export {};

declare global {
  type Entries<T> = {
    [K in keyof T]: [K, T[K]];
  }[keyof T][];
}
