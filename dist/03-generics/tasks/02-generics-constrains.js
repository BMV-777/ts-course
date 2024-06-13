"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.valuers = exports.key = void 0;
function key(obj) {
    const currentKeys = [];
    for (let key in obj) {
        if (obj.hasOwnProperty(key))
            currentKeys.push(key);
    }
    return currentKeys;
}
exports.key = key;
const sum1 = { a: 1, b: 2, d: 4 };
console.log(key([1, 8, 9, 2, 5]));
function valuers(obj) {
    const currentValues = [];
    for (let key in obj) {
        currentValues.push(obj[key]);
    }
    return currentValues;
}
exports.valuers = valuers;
