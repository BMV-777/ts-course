type NestedNumbers = number | NestedNumbers[];

export const num: NestedNumbers = [1, [2, 4, [23]]];
console.log(num);
// num.push(1);
num.push([77, [99]]);
console.log(num);

//Json

type JSONPrimitive = number | string | boolean | null;
type JSONObject = { [k: string]: JSONValue };
type JSONArray = JSONValue[];
type JSONValue = JSONArray | JSONObject | JSONPrimitive;

function isJSON(arg: JSONValue) {}

isJSON(1);
isJSON({});
isJSON([12]);
isJSON("hi");
isJSON([1, { x: "" }]);
