"use strict";
//void - когда функция нечиго не возврощает
//never - когда функция не завершится она когдато сломается
Object.defineProperty(exports, "__esModule", { value: true });
exports.average = void 0;
function log(name, userId) {
    console.log("Hello", name, "width Id", userId || "anonym");
}
log("Maks");
function average(...nums) {
    const sum = nums.reduce((current, total) => current + total, 0);
    return console.log(sum / nums.length);
}
exports.average = average;
average(5, 10);
function crash() {
    throw new Error("crash");
}
const sum2 = (a, b) => a + b;
