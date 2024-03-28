"use strict";
const numbers = [1, 2, 3, 4];
const str = [];
const str2 = [];
str.push("abc");
str2.push("dsd");
// interface Car {
//   model: string;
//   brand: string;
// }
const cars = [];
cars.push({ model: "Audi", wheels: "3", brand: "Q8", type: " " });
//масив в масиве
const arrOfArr = [];
arrOfArr.push([" ", ""]);
function printArr(arr) {
    arr.forEach((el, index, array) => {
        console.log(el, index, array);
    });
}
