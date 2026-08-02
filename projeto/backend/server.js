const express = require("express");
const cors = require("cors");

const usuarioRoutes = require("./src/routes/usuarioRoutes");


const app = express();


app.use(cors());

app.use(express.json());


app.use("/usuarios", usuarioRoutes);



app.listen(3000, () => {

    console.log("Servidor rodando na porta 3000");

});