//void - когда функция нечиго не возврощает
//never - когда функция не завершится она когдато сломается

function log(name: string, userId?: string): void {
  console.log("Hello", name, "width Id", userId || "anonym");
}

log("Maks");

function average(...nums: number[]) {
  const sum = nums.reduce((current, total) => current + total, 0);

  return console.log(sum / nums.length);
}

average(5, 10);

function crash(): never {
  throw new Error("crash");
}
const sum2 = (a: number, b: number): number => a + b;
