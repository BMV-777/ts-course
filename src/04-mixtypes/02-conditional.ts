const x3 = 16;

const isXNegative = x3 >= 0 ? "yes" : "no";

console.log(isXNegative);

interface StringRecord {
  [key: string]: string;
}

interface DateRecord {
  [key: string]: Date;
}

type MyRecord<T> = T extends string ? StringRecord : DateRecord;

type Obj = MyRecord<string>;
type Obj1 = MyRecord<number>;
const o1: Obj = {
  r: "123",
};

export {};
