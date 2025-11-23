export interface CarritoItem {
  productoId: string;
  cantidad: number;
}

export interface UsuarioMongo {
  id: string;
  nombre: string;
  correo: string;
  pass: string;
  telefono?: string;
  region: string;
  comuna: string;
}

export interface UsuarioRegister {
  nombre: string;
  correo: string;
  pass: string;
  telefono?: string;
  region: string;
  comuna: string;
}

export interface ProductMongo {
  id: string;
  img: string;
  nombre: string;
  precio: string;
  categoria: string;
  descripcion: string;
}
