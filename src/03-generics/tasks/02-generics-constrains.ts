export function key<T extends object>(obj: T): Array<keyof T> {
  const currentKeys = [];

  for (let key in obj) {
    if (obj.hasOwnProperty(key)) currentKeys.push(key);
  }

  return currentKeys;
}

const sum1 = { a: 1, b: 2, d: 4 };

console.log(key([1, 8, 9, 2, 5]));

export function valuers<T extends object>(obj: T): Array<T[keyof T]> {
  const currentValues = [];

  for (let key in obj) {
    currentValues.push(obj[key]);
  }
  return currentValues;
}
