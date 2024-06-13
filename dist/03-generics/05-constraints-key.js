"use strict";
function prop(key, obj) {
    return obj[key];
}
const obj2 = { a: 1, b: 2, c: 3 };
prop("a", obj2);
prop("b", obj2);
