type MyBoolean = false | true;

type Pair = [string, string];

type Car1 = {
  name: "string";
  model: "string";
  type: "string";
  isNew?: "string";

  [key: string]: unknown;
};
