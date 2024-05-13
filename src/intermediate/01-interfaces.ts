//  readonly - нельзя перезаписать значение

export interface User {
  readonly email: string;
  readonly login: string;
  password: string;
}

export interface User {
  isOnline?: boolean;
}

// const user1: User = {};

export interface Persons {
  readonly firstName: string;
  lastName: string;
  phone?: string;
  yearOgBirth?: number;
}

export interface Employee extends User, Persons {
  contractStart?: Date;
}

export interface Developer extends Employee {
  skills: string[];
  phone: string;
  level: "junior" | "middle" | "senior";
  say(): void;
  code?: (arg: string) => void;
}

const user1: Employee = {
  firstName: "Pupkin",
  lastName: "Meri",
  login: "1234",
  password: "899",
  email: "borenkov",
};
