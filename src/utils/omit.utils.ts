function omit<T, K extends keyof T>(object: T, keys: K[]): Omit<T, K> {
  const result = { ...object };
  keys.forEach((key) => delete result[key]);
  return result;
}

export default omit;
