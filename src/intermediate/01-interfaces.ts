//  readonly - нельзя перезаписать значение

interface User {
  readonly email: string;
  readonly login: string;
  password: string;
}

interface User {
  isOnline?: boolean;
}

// const user1: User = {};

interface Persons {
  readonly firstName: string;
  lastName: string;
  phone?: string;
  yearOgBirth?: number;
}

interface Employee extends User, Persons {
  contractStart: Date;
}

interface Developer extends Employee {
  skills: string[];
  phone: string;
  level: "junior" | "middle" | "senior";
  say(): void;
  code?: (arg: string) => void;
}

const user1: Employee = {};
