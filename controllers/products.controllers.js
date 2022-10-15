import { v4 as uuidv4 } from 'uuid';

let productos = []

const agregarProductos = (req, res) => {
    try {
        const { nombre, precio, marca, isTouch } = req.body; 

        const nuevoProducto = {
            id: uuidv4(),
            nombre,
            precio,
            marca,
            isTouch
        }

        productos.push(nuevoProducto);

        res.json({
            success: true,
            response: "Producto agregado correctamente"
        })
    } catch (error) {
        res.json({
            success: false,
            response: error.message
        })
    }
}

const leerProductos = (req, res) => {
    try {
        const clave = req.headers.clave;
        if(clave === process.env.CLAVE_SECRETA) {
            res.json({
                success: true,
                response: productos
            })
        } else {
            throw new Error('No tienes permiso para ver este contenido');
        }
    } catch (error) {
        res.json({
            success: false,
            response: error.message
        })
    }
}

const eliminarProducto = (req, res) => {
    try {
        const id = req.params.id;
        if(!productos.find(element => element.id === id)) {
            throw new Error ('No existe producto con el id asociado');
        }
        productos = productos.filter(producto => producto.id !== id);
        res.json({
            uccess: true,
            response: productos
        })
    } catch (error) {
        res.json({
            success: false,
            response: error.message
        })
    }
    
}

const editarProducto = (req, res) => {
    try {
        const id = req.params.id;

        const { nombre, precio, marca, isTouch } = req.body; 

        const productoEnEdicion = {
            id,
            nombre,
            precio,
            marca,
            isTouch
        }

        productos = productos.map(producto => {
            if(producto.id === id) {
                return productoEnEdicion;
            }
            return producto;
        })

        res.json({
            success: true,
            response: productos
        })
    } catch (error) {
        res.json({
            success: false,
            response: error.message
        })
    }
    
}

export { agregarProductos, leerProductos, eliminarProducto, editarProducto }