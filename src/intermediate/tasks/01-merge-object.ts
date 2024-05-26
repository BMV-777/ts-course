// import { Car } from './01-merge-object';
export interface IProduct {
  price: number;
  isNew: boolean;
  isSale: boolean;
  title: string;
}

export interface IVehicle {
  wheels: string;
  year: number;
  brand: string;
}

export interface ICar extends IProduct, IVehicle {
  type: string;
  model: string;
}

// const car1: Car = {

// }

type Product = {
  price: number;
  isNew: boolean;
  isSale: boolean;
  title: string;
};

type Vehicle = {
  wheels: string;
  year: number;
  brand: string;
};

type Car = {
  color?: string;
} & Product &
  Vehicle;

const car1: Car = {
  brand: "BMV",
  isNew: true,
  isSale: false,
  price: 12345,
  title: "Hello",
  wheels: "god",
  year: 1985,
};
