"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.add = void 0;
function add(a, b) {
    return a + b;
}
exports.add = add;
add(1, 1);
function asyncSum(a, b, cd) {
    const result = a + b;
    if (cd) {
        return cd(result);
    }
    return Promise.resolve(result);
}
asyncSum(1, 2);
