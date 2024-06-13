function len<T extends { length: number }>(arg: T): number {
  return arg.length;
}

len("123");
len([123]);

const obj1 = { a: 1, length: 1 };

len(obj1);

console.log(len("grizli777777"));
