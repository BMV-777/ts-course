type User = {
  name: string;
  displayName: string | null;
};

function DisplayError(
  user: User
): asserts user is User & { displayName: string } {
  if (!user.displayName) throw new Error("No displayName");
}

function logDisplayName(user: User) {
  DisplayError(user);

  console.log(user.displayName.toUpperCase());
}
