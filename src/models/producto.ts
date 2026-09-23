import { readjson } from '../utils.js';
export interface Producto {
    id: number;
    nombre: string;
    precio: number;
    descripcion: string;
}


const productos = readjson('productos.json');

export class productosModel {
    static async getAll() {
        return productos;
    }

    static async getById(id: number) {
        const producto = productos.find((p: { id: number }) => p.id === id);
        return producto
    }

    static async create({input}) {
        const newProducto = {
            id: productos.length + 1,
            ...input
        }
         productos.push(newProducto);
         return newProducto;
        }

    static async delete({id}: {id: number}) {
        const productoIndex = productos.findIndex((p: { id: number }) => p.id === id);  
        if (productoIndex !== -1) return false
        productos.splice(productoIndex, 1);
        return true;

    }

    static async update(id: number, input: Partial<Producto>) {

    }