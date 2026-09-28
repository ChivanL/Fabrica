export interface Producto {
    id: number;
    nombre: string;
    precio: number;
    descripcion: string;
}

const productos: Producto[] = [
    {
        id: 1,
        nombre: 'Laptop Gamer',
        precio: 1200,
        descripcion: 'Laptop para gaming con buen rendimiento',
    },
    {
        id: 2,
        nombre: 'Teclado Mecánico',
        precio: 150,
        descripcion: 'Teclado mecánico RGB de alta calidad',
    },
];

export class productosModel {
    static async getAll(): Promise<Producto[]> {
        return productos;
    }

    static async getById(id: number): Promise<Producto | undefined> {
        return productos.find((producto) => producto.id === id);
    }

    static async create(input: Omit<Producto, 'id'>): Promise<Producto> {
        const newProducto: Producto = {
            id: productos.length > 0 ? productos[productos.length - 1].id + 1 : 1,
            ...input,
        };

        productos.push(newProducto);
        return newProducto;
    }

    static async delete(id: number): Promise<boolean> {
        const productoIndex = productos.findIndex((producto) => producto.id === id);

        if (productoIndex === -1) {
            return false;
        }

        productos.splice(productoIndex, 1);
        return true;
    }

    static async update(id: number, input: Partial<Producto>): Promise<Producto | null> {
        const productoIndex = productos.findIndex((producto) => producto.id === id);

        if (productoIndex === -1) {
            return null;
        }

        productos[productoIndex] = {
            ...productos[productoIndex],
            ...input,
        };

        return productos[productoIndex];
    }
}