"use strict";
const User = {
    id: 123,
    admin: false,
    becomeAdmin: function () {
        this.admin = true;
    },
};
function hanselClick(event) {
    this.disabled = true;
}
