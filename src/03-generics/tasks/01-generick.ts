function append<T>(el: T[], list: T[]): T[] {
  return list.concat(el);
}
function append1<T>(el: T, list: T[]): T[] {
  return list.concat(el);
}

console.log(append([33], [4, 8, 7]));
console.log(append1(77, [4, 8, 7]));
