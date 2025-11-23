export interface CarritoItem {
  productoId: string;
  cantidad: number;
}

export interface Usuario {
  _id: string;
  nombre: string;
  correo: string;
  pass: string;
  telefono?: string;
  region: string;
  comuna: string;
}

export interface Product {
  _id: string;
  id: string;
  img: string;
  nombre: string;
  precio: string;
  categoria: string;
  descripcion: string;
}
