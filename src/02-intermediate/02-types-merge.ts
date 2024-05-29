type Union1 = "a" | "b" | "c" | "d";
type Union2 = "a" | "e" | "c" | "i";
type Union3 = Union1 | Union2; //все что есть значение
type Union4 = Union1 & Union2; //одинаковые значение

type Union5 = { a: string; b: string; c: string } & {
  a: string;
  z: boolean;
  g: number;
};

type User = {
  readonly email: string;
  readonly login: string;
  password: string;
};

// const user1: User = {};

type Persons = {
  readonly firstName: string;
  lastName: string;
  phone?: string;
  yearOgBirth?: number;
};

type Employee = {
  contractStart?: Date;
} & Persons &
  User;

// const user1: Employee = {};

type Developer = {
  skills: string[];
  phone: string;
  level: "junior" | "middle" | "senior";
  // say()?: void;
  code?: (arg: string) => void;
} & Employee;

const user2: Developer = {
  firstName: "Pupkin",
  lastName: "Meri",
  email: "borenkov",
  login: "Maks",
  phone: "77889",
  level: "senior",
  skills: ["html", "css", "js", "react", "docker"],
  password: "3222",
};

export {};
