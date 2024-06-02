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
function append(el, list) {
    return list.concat(el);
}
function append1(el, list) {
    return list.concat(el);
}
console.log(append([33], [4, 8, 7]));
console.log(append1(77, [4, 8, 7]));
