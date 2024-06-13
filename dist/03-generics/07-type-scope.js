"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.tuplePairCreate = void 0;
function tuplePairCreate(first) {
    return function (second) {
        return [first, second];
    };
}
exports.tuplePairCreate = tuplePairCreate;
const twoCreate = tuplePairCreate(1);
const val1 = twoCreate(2);
const val2 = twoCreate("ads");
