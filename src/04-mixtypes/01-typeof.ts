import { average } from "../01-basick/02-function";

let str = "Hello world";
const x = typeof str;

type fn = typeof average;

const max: fn = (...num) => Math.max(...num);

max(1, 2, 3);

type returnFn = ReturnType<typeof average>;
