"use strict";
//Array<string>
//string[]
//Promise<number>
function toArray(...arg) {
    return arg;
}
toArray(1, 2, 3);
toArray("sd", "hhd");
function add(value) {
    return value[0];
}
const handle = (value) => value[0];
add("csc", "efefe");
const modal = {
    title: "ff",
    value: 122,
};
const obj = {
    title: "lll",
    value: [123],
};
// export function append<T>(el: T[], list: T[]): T[] {
//   return list.concat(el);
// }
// export function append1<T>(el: T, list: T[]): T[] {
//   return list.concat(el);
// }
// console.log(append([33], [4, 8, 7]));
// console.log(append1(77, [4, 8, 7]));
