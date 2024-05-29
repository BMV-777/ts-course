"use strict";
function add(a, b) {
    return a + b;
}
add(1, 1);
function asyncSum(a, b, cd) {
    const result = a + b;
    if (cd) {
        return cd(result);
    }
    return Promise.resolve(result);
}
asyncSum(1, 2);
