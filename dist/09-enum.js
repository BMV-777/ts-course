"use strict";
var ShapeKind;
(function (ShapeKind) {
    ShapeKind[ShapeKind["Circle"] = 0] = "Circle";
    ShapeKind[ShapeKind["Square"] = 1] = "Square";
})(ShapeKind || (ShapeKind = {}));
// type Leve = "junior" | "middle" | "senior";
var Grades;
(function (Grades) {
    Grades["Junior"] = "junior";
    Grades["Middle"] = "middle";
    Grades["Senior"] = "senior";
})(Grades || (Grades = {}));
function gradeDev(dev) {
    if (dev.level === Grades.Junior) {
        dev.level = Grades.Middle;
    }
    else if (dev.level === Grades.Middle) {
        dev.level = Grades.Senior;
    }
}
