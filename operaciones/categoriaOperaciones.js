const categoriaModelo = require("../models/categoriaModelo");
const categoriaOperaciones = {};

categoriaOperaciones.crearCategoria = async(req, res) => {
    try{
        const objeto = req.body;
        const categoria = new categoriaModelo(objeto);
        const categoriaGuardada = await categoria.save();
        if (categoriaGuardada != null) {
           res.status(201).send(categoriaGuardada);
        }
    } catch (error) {
        res.status(400).send("Mala petición. "+error);
    }
}

categoriaOperaciones.consultarCategorias = async (req, res) => {
    try{
        const filtro = req.query;
        let listacategorias;
        if (filtro.nombre != null){
            listacategorias = await categoriaModelo.find({
                "$or" : [
                    {"nombre": { $regex:filtro.nombre, $options:"i" }}
                ]
            });
        }
        else {
            listacategorias = await categoriaModelo.find();
        }
        
        if (listacategorias.length > 0) {
            res.status(200).send(listacategorias);
        }
        else {
            res.status(404).send("No hay datos ");
        }
    } catch (error) {
        res.status(400).send("Mala petición. "+error);
    }

}

categoriaOperaciones.consultarCategoria = async (req, res) => {
    try{
        const id = req.params.id;
        const categoria = await categoriaModelo.findById(id);
        if (categoria != null) {
            res.status(200).send(categoria);
        }
        else {
            res.status(404).send("No hay datos ");
        }
    } catch (error) {
        res.status(400).send("Mala petición. "+error);
    }

}

categoriaOperaciones.modificarCategoria = async (req, res) => {
    try{
        const id = req.params.id;
        const objeto = req.body;
        const categoria = {
            nombre: objeto.nombre,
            activo: objeto.activo,
            imagen: objeto.imagen
        }
        const categoriaActualizada = await categoriaModelo.findByIdAndUpdate(id, categoria, { new: true });
        res.status(200).send(categoriaActualizada);
    } catch (error) {
        res.status(400).send("Mala petición. "+error);
    }

}

categoriaOperaciones.borrarCategoria = async (req, res) => {
   try {
    const id = req.params.id;
    const categoriaBorrada = await categoriaModelo.findByIdAndDelete(id);
    res.status(200).send(categoriaBorrada);
   } catch (error) {
    res.status(400).send("Mala petición. "+error);
   } 
}

module.exports = categoriaOperaciones;
