//Array<string>
//string[]
//Promise<number>

type TypeFactory<T> = T;
// // type TypeFactory<T, U> = T;

// // type XType = TypeFactory<string, number>
type XType = TypeFactory<string>;
type ZType = TypeFactory<number>;

function toArray<T>(...arg: T[]): T[] {
  return arg;
}

toArray(1, 2, 3);
toArray("sd", "hhd");

function add(value: number): number;
function add<T>(value: readonly []): undefined;
function add<T>(value: readonly T[]): T[];
function add(value: any): any {
  return value[0];
}

const handle = <T>(value: T[]): T => value[0];

add("csc", "efefe");

interface Modal<T> {
  title: string;
  value: T;
}

const modal: Modal<number> = {
  title: "ff",
  value: 122,
};

const obj: Modal<Array<number>> = {
  title: "lll",
  value: [123],
};

function append<T>(el: T[], list: T[]): T[] {
  return list.concat(el);
}
function append1<T>(el: T, list: T[]): T[] {
  return list.concat(el);
}

console.log(append([33], [4, 8, 7]));
console.log(append1(77, [4, 8, 7]));
