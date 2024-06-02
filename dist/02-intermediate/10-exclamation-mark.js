"use strict";
let word = null;
const num = 10;
if (num > 5) {
    word = "abc";
}
console.log(word.toLowerCase());
function printName(name) {
    const fullName = name;
}
function printName2(persons) {
    console.log(persons.name);
}
const people = [
    {
        name: "Grin",
        age: 30,
        sex: "female",
    },
    {
        name: "Dron",
        age: 35,
        sex: "male",
    },
    {
        name: "Anni",
        age: 40,
        sex: "female",
    },
    {
        name: "Doli",
        age: 30,
        sex: "male",
    },
];
const femalePeople = people.find((person) => person.sex === "male");
