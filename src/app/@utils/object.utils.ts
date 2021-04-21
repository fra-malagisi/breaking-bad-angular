export function objectToQueryParamsConverter<T extends Record<string, string>>(obj: Partial<T>): string {
  return Object.keys(obj).map((key: string) => `${encodeURIComponent(key)}=${encodeURIComponent((obj[key] as string))}`).join('&');
}

export function cleanObject<T>(obj: T): Partial<T> {
  return JSON.parse(JSON.stringify(obj));
}
