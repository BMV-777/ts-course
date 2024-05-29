const User = {
  id: 123,
  admin: false,

  becomeAdmin: function () {
    this.admin = true;
  },
};

function hanselClick(this: HTMLButtonElement, event: Event) {
  this.disabled = true;
}
