import {productosModel} from '../models/producto.js';
import {readjson} from '../utils.js';


export class productosController {  

    static async getAll(req: Express.Request, res: Express.Response) {
        const productos = await productosModel.getAll();
        res.json(productos);
    }

    static async getById(req: Express.Request, res: Express.Response) {
        const {id} = req.params;
        const producto = await productosModel.getById(id);
        if (producto) return res.json(producto);
        res.status(404).json({ message: 'Producto no encontrado' });
    }

    static async create(req: Express.Request, res: Express.Response) {
        const newProducto = await productosModel.create({input: result.data});
        res.status(201).json({ message: 'Producto creado', producto: newProducto });
    }   


static async delete(req: Express.Request, res: Express.Response) {
    const { id } = req.params;
    const producto = await productosModel.getById(id);
    if (!producto) return res.status(404).json({ message: 'Producto no encontrado' });
    await productosModel.delete(id);
    res.json({ message: 'Producto eliminado' });
}

static async update({id,input}) {
    const productoIndex = productos.findIndex((p: { id: number }) => p.id === id);  
    if (productoIndex === -1) return false;

    producto[productoIndex] = { 
        ...productos[productoIndex], 
        ...input 
    };
    return productos[productoIndex];
}
}