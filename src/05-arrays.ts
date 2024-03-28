const numbers = [1, 2, 3, 4];

const str = [];
const str2: Array<string> = [];
str.push("abc");
str2.push("dsd");

// interface Car {
//   model: string;
//   brand: string;
// }

const cars: Car[] = [];

cars.push({ model: "Audi", wheels: "3", brand: "Q8", type: " " });

//масив в масиве

const arrOfArr: string[][] = [];

arrOfArr.push([" ", ""]);

function printArr(arr: unknown[]): void {
  arr.forEach((el, index, array) => {
    console.log(el, index, array);
  });
}
