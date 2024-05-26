function example(n?: number | string) {
  if (typeof n === "number") {
    n.toFixed(2);
  } else if (typeof n === "string") {
    n.toLowerCase();
  } else if (typeof n === "undefined") {
    console.log(" no variont");
  } else {
    n;
  }
}

function example1(str: string | string[] | null) {
  if (str && typeof str === "object") {
    str.concat();
  } else if (typeof str === "string") {
    str.toLowerCase();
  }
}

function example3(x: number[] | Date) {
  if (x instanceof Date) {
    x.getDate();
  } else {
    x.concat();
  }
}

// type Fish = { swim: () => void };
// type Bird = { fly: () => void };

// function moveBy(animal: Fish | Bird) {
//   if ("swim" in animal) {
//     return animal.swim();
//   } else {
//     return animal.fly();
//   }
// }
