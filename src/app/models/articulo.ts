export class Articulo {
    id: number;
    nombre: string;
    descripcion: string;
    precio: number;
    cantidad: number;
    descuento: number;
    url: string;

    constructor(id: number, nombre: string, descripcion: string,
        precio: number, cantidad: number, descuento: number, url: string) {
        this.id = id;
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.precio = precio;
        this.cantidad = cantidad;
        this.descuento = descuento;
        this.url = url;
    }
}