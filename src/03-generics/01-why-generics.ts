function add(value: number): number;
function add(value: string): string;
function add(value: string[]): string;
function add(value: Date[]): Date;
function add(value: any): any {
  return value[0];
}

interface Model {
  name: string;
  value: number; //number [] boolean
}

export {};
