const categoriaOperaciones = require("../operaciones/categoriaOperaciones");
const router = require('express').Router();

router.get("/", categoriaOperaciones.consultarCategorias);
router.get("/:id", categoriaOperaciones.consultarCategoria);
router.post("/", categoriaOperaciones.crearCategoria);
router.put("/:id", categoriaOperaciones.modificarCategorias);
router.delete("/id", categoriaOperaciones.borrarCategorias);

module.exports = router;