"use strict";
function DisplayError(user) {
    if (!user.displayName)
        throw new Error("No displayName");
}
function logDisplayName(user) {
    DisplayError(user);
    console.log(user.displayName.toUpperCase());
}
