"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.num = void 0;
exports.num = [1, [2, 4, [23]]];
console.log(exports.num);
// num.push(1);
exports.num.push([77, [99]]);
console.log(exports.num);
function isJSON(arg) { }
isJSON(1);
isJSON({});
isJSON([12]);
isJSON("hi");
isJSON([1, { x: "" }]);
