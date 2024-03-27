interface Car {
  wheels: string;
  brand: string;
  type: string;
  isNew?: boolean;
  name?: string;

  [key: number]: unknown;
  [key: string]: unknown;
}

const car: Car = {
  wheels: "4",
  brand: "BMV",
  type: "Sedan",
};

const car2: Car = {
  wheels: "2",
  brand: "Volva",
  type: "Corvet",
  name: "Go",
};

car2[10] = 10;

car2.go = 30;

console.log(car2);
