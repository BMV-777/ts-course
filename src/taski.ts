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
