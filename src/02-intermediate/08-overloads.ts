export function add(a: number, b: number): number;
export function add(a: string, b: string): string;
export function add(a: any, b: any): any {
  return a + b;
}

add(1, 1);

type asyncCd = (res: number) => number;

function asyncSum(a: number, b: number): Promise<number>;
function asyncSum(a: number, b: number, cd: asyncCd): number;
function asyncSum(a: number, b: number, cd?: asyncCd): any {
  const result = a + b;

  if (cd) {
    return cd(result);
  }

  return Promise.resolve(result);
}

asyncSum(1, 2);
