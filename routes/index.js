import express from 'express';
import { agregarProductos, leerProductos, eliminarProducto, editarProducto } from '../controllers/products.controllers.js';

const router = express.Router();

router.route('/productos')
    .post(agregarProductos)
    .get(leerProductos)

router.route('/producto/:id')
    .delete(eliminarProducto)
    .put(editarProducto)

export default router;