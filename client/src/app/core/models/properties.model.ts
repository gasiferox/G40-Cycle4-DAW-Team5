import { LocationModel } from "./locations.model";

export interface PropertyModel {
  tipo: string;
  ubicacion: LocationModel;
  area: number;
  precio: number;
  habitaciones: number;
  baños: number;
  parqueadero: boolean;
  descripcion: string;
  imagenes: string;
}
