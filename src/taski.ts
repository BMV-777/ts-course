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
  password: number;
  isOnline: boolean;
  lastVisited: Date;
}

interface Admin {
  login: string;
  email: number;
  password: number;
  isOnline: boolean;
  lastVisited: Date;
  role?: string;
}

// let login = function (user { login: string; password: number}): void {
//   console.log(`${user.login} and ${user.password}`)
// }

// function login(user: { login: string; password: number }): void {
//   if (user.login || user.password) {
//     console.log(`Hello ${user.login} `);
//   }
// }

// login({ login: "Torrent", password: 112 });

// const user: User = {
//   login: "login",
//   email: "email",
//   isOnline: true,
//   lastVisited: new Date(),
// };

// console.log(user.lastVisited);
