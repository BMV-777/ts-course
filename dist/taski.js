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
