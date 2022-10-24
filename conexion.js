const mongoose = require("mongoose");

const username = "admin";
const password = "admin";
const database = "OmegaBD";
const URI = "mongodb+srv://"+username+":"+password+"@cluster0.ggzduuk.mongodb.net/"+database*"?retryWrites=true&w=majority";
           // mongodb+srv://admin:<password>@cluster0.ggzduuk.mongodb.net/?retryWrites=true&w=majority
const conectar = async () => {
    try {
        await mongoose.connect(URI); // esta es una promesa
        console.log("Atlas esta en linea");
    } catch (error) {
        console.log("Error en la conexion. "+error);
    }

    //Para trabajar con Promesas 
    //mongoose.connect(URI)
    // .then(() => {console.log("Atlas esta en linea")})
    // .catch(() => {console.log("Error en la conexion. "+error)});
}
conectar();

module.exports = mongoose;
