import type { Request, Response } from 'express';
import { productosModel } from '../models/producto.js';

export class productosController {
    static async getAll(_req: Request, res: Response) {
        const productos = await productosModel.getAll();
        res.json(productos);
    }

    static async getById(req: Request, res: Response) {
        const id = Number(req.params.id);
        const producto = await productosModel.getById(id);

        if (producto) {
            return res.json(producto);
        }

        return res.status(404).json({ message: 'Producto no encontrado' });
    }

    static async create(req: Request, res: Response) {
        const { nombre, precio, descripcion } = req.body;

        const newProducto = await productosModel.create({
            nombre,
            precio,
            descripcion,
        });

        return res.status(201).json({ message: 'Producto creado', producto: newProducto });
    }

    static async delete(req: Request, res: Response) {
        const id = Number(req.params.id);
        const producto = await productosModel.getById(id);

        if (!producto) {
            return res.status(404).json({ message: 'Producto no encontrado' });
        }

        await productosModel.delete(id);
        return res.json({ message: 'Producto eliminado' });
    }

    static async update(req: Request, res: Response) {
        const id = Number(req.params.id);
        const producto = await productosModel.update(id, req.body);

        if (!producto) {
            return res.status(404).json({ message: 'Producto no encontrado' });
        }

        return res.json({ message: 'Producto actualizado', producto });
    }
}