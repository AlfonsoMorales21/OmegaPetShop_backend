// Importaciones
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const mongoose = require("./conexion");

// Configuración
const app = express();
const env = process.env;
const port = env.port || 8000;
app.use(morgan("dev"));
app.use(express.json());
app.use(cors());

// Aranque
app.listen(port, ()=> {
    console.log("API iniciado en el puerto " + port);
});

// Rutas
app.get("/", (req, res) => {
    res.send("Api iniciado");
});
app.use("/categorias", require("./routers/categoriaRouters"));
   

