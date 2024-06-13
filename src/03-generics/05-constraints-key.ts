function prop<T, U extends keyof T>(key: U, obj: T): T[U] {
  return obj[key];
}

interface Laptop {
  brand: "string";
}

type but = Laptop["brand"];

const obj2 = { a: 1, b: 2, c: 3 };

prop("a", obj2);
prop("b", obj2);
