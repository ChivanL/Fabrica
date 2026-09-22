import { readjson } from '../utils.js';
export interface Producto {
    id: number;
    nombre: string;
    precio: number;
    descripcion: string;
}


const productos = readjson('productos.json');

export class productosModel {
    static getAll() {
        return productos;
    }

    static async getById(id: number) {
        const producto = productos.find((p: { id: number }) => p.id === id);
        return producto
    }

    static async create(producto: { nombre: string; precio: number; descripcion: string; }) {
        const newProducto = {
            id: productos.length + 1,
            ...producto
        }
            productos.push(newProducto);
    }