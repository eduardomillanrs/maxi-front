export function isObject(value: unknown): boolean {
  return (
    typeof value === 'object' &&
    value !== null &&
    !Array.isArray(value) &&
    Object.prototype.toString.call(value) === '[object Object]'
  );
}

export function isNil(value: unknown): boolean {
  return value === undefined || value === null;
}

export function mergeConfig<T extends object>(defaultConfig: T, userConfig: Partial<T>): T {
  const config = Object.fromEntries(
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    Object.entries(userConfig).filter(([_, value]) => value !== undefined),
  ) as Partial<T>;

  return { ...defaultConfig, ...config };
}
