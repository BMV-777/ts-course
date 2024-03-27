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
