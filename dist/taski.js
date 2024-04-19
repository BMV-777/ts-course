"use strict";
//1
function slice(str, start, end) {
    let newStr = "";
    let lastIndex;
    if (end) {
        lastIndex = end > str.length ? str.length : end;
    }
    else {
        lastIndex = str.length;
    }
    for (let i = start; i < lastIndex; i++) {
        newStr += str[i];
    }
    return newStr;
}
const user1 = {
    login: "Tatem",
    email: "borenkovmv@gmail.com",
    password: "Tatem1985",
    isOnline: false,
    lastVisited: new Date(2024, 3, 28),
};
const admin1 = {
    login: "Admin",
    email: "borenkovmv@gmail.com",
    password: "Tatem1985",
    isOnline: false,
    lastVisited: new Date(2024, 3, 28, 12.0),
    role: "Super Admin",
};
function login(user) {
    if ((user.login.length > 0, user.password.length > 0)) {
        console.log(`Hello ${user.login} Date ${user.lastVisited}`);
    }
}
const junior = {
    login: "Gary",
    skills: ["html, css, js"],
    level: "junior",
};
const middle = {
    login: "Merry",
    skills: ["html, css, js, react"],
    level: "middle",
};
function gradeDeveloper(dev, newLevel) {
    dev.level = newLevel;
}
const senior = {
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
