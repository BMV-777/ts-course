//1

function slice(str: string, start: number, end?: number): string {
  let newStr = "";

  let lastIndex: number;

  if (end) {
    lastIndex = end > str.length ? str.length : end;
  } else {
    lastIndex = str.length;
  }

  for (let i = start; i < lastIndex; i++) {
    newStr += str[i];
  }

  return newStr;
}

// console.log(slice("Hello", 0, 3));

//2

interface User {
  login: string;
  email: string;
  password: string;
  isOnline: boolean;
  lastVisited: Date;
}

interface Admin {
  login: string;
  email: string;
  password: string;
  isOnline: boolean;
  lastVisited: Date;
  role: string;
}

const user1: User = {
  login: "Tatem",
  email: "borenkovmv@gmail.com",
  password: "Tatem1985",
  isOnline: false,
  lastVisited: new Date(2024, 3, 28),
};

const admin1: Admin = {
  login: "Admin",
  email: "borenkovmv@gmail.com",
  password: "Tatem1985",
  isOnline: false,
  lastVisited: new Date(2024, 3, 28, 12.0),
  role: "Super Admin",
};

function login(user: {
  login: string;
  password: string;
  lastVisited: Date;
}): void {
  if ((user.login.length > 0, user.password.length > 0)) {
    console.log(`Hello ${user.login} Date ${user.lastVisited}`);
  }
}

//3

type Level = "junior" | "middle" | "senior";

interface Developer {
  login: string;
  skills: string[];
  level: Level;
}

const junior: Developer = {
  login: "Gary",
  skills: ["html, css, js"],
  level: "junior",
};

const middle: Developer = {
  login: "Merry",
  skills: ["html, css, js, react"],
  level: "middle",
};

function gradeDeveloper(dev: { level: Level }, newLevel: Level) {
  dev.level = newLevel;
}

const senior: Developer = {
  login: "Maks",
  skills: ["html, css, js, react, ts"],
  level: "senior",
};

console.log(gradeDeveloper(senior, "senior"));

// function gradeDeveloper(developer: {
//   login: string;
//   skills: string[];
//   level: Level;
// }): void {
//   if (developer.level === "junior") {
//     console.log(
//       `Hello Junior! ${developer.login} you skills:  ${developer.skills}`
//     );
//   } else if (developer.level === "middle") {
//     console.log(
//       `Hello Middle! ${developer.login} you skills:  ${developer.skills}`
//     );
//   } else if (developer.level === "senior") {
//     console.log(
//       `Hello Senior! ${developer.login} you skills:   ${developer.skills}`
//     );
//   }
// }

// gradeDeveloper(senior);
