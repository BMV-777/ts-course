let word: string | null = null;

const num = 10;

if (num > 5) {
  word = "abc";
}

console.log(word!.toLowerCase());

function printName(name?: string) {
  const fullName: string = name!;
}

interface Persons {
  name: string;
  age: number;
  sex: "female" | "male";
}

function printName2(persons?: Persons) {
  console.log(persons!.name);
}

const people: Persons[] = [
  {
    name: "Grin",
    age: 30,
    sex: "female",
  },
  {
    name: "Dron",
    age: 35,
    sex: "male",
  },
  {
    name: "Anni",
    age: 40,
    sex: "female",
  },
  {
    name: "Doli",
    age: 30,
    sex: "male",
  },
];

const femalePeople = people.find((person) => person.sex === "male")!;
