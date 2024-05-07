//Acá hacemos la conexión con MONGODB: 

const mongoose = require("mongoose");

//2) Crear una conexión con la base de datos

mongoose.connect("mongodb+srv://chaval198678:tonyfunko@cluster0.6l6psjf.mongodb.net/e-commerce?retryWrites=true&w=majority&appName=Cluster0")
    .then(() => console.log("Conexion exitosa"))
    .catch((error) => console.log("Error en la conexion", error))