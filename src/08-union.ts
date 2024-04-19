type Status = "ok" | "loading" | "error";

const x1: Status = "loading";

const arr: (number | string)[] = [];

function pictureId(id: number | string): void {
  if (typeof id === "string") console.log(id.toUpperCase());
  else console.log(id);
}

pictureId(12);

function welcome(person: [string, string] | string): number | string {
  if (Array.isArray(person)) {
    console.log("Hello" + person.join(" "));
    return 1;
  } else {
    console.log("Hello", person);
    return person;
  }
}
