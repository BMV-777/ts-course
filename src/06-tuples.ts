const pairs: [string, string][] = [
  ["key", "value"],
  ["more", "dole"],
];

const date: [number, boolean, string] = [1, true, "lodash"];
date.push(10, 10);

console.log(date);

const doc: [string, string, number, Date][] = [];
doc.push(["Maks", "Borenkov", 38, new Date(1985, 11, 13)]);

console.log(doc);
