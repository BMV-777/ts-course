type WindowProp = keyof Window;

const myValue: WindowProp = "ontoggle";

interface PC {
  brand: "string";
  year: "string";
}

type Type1 = keyof PC;

const val1: Type1 = "brand";

type Tup = keyof [string, number];

const val2: Tup = "1";
