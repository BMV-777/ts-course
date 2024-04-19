"use strict";
const x1 = "loading";
const arr = [];
function pictureId(id) {
    if (typeof id === "string")
        console.log(id.toUpperCase());
    else
        console.log(id);
}
pictureId(12);
function welcome(person) {
    if (Array.isArray(person)) {
        console.log("Hello" + person.join(" "));
        return 1;
    }
    else {
        console.log("Hello", person);
        return person;
    }
}
