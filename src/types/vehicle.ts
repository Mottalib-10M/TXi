export interface Vehicle {
  brand: string;
  model: string;
  year: number;
  color: string;
  plate: string;
  capacity: number;
  features: string[];
}

export const EMPTY_VEHICLE: Vehicle = {
  brand: "",
  model: "",
  year: new Date().getFullYear(),
  color: "",
  plate: "",
  capacity: 4,
  features: [],
};
