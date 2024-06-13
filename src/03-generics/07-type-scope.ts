export function tuplePairCreate<T>(first: T) {
  return function <U>(second: U): [T, U] {
    return [first, second];
  };
}

const twoCreate = tuplePairCreate(1);

const val1 = twoCreate(2);
const val2 = twoCreate("ads");
