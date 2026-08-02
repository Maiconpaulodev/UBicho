const Usuario = require("../models/Usuario");



async function listar(req, res) {

    try {


        const usuarios = await Usuario.listar();


        res.json(usuarios);


    } catch (error) {

        res.status(500).json({
            erro: error.message
        });

    }

}



async function criar(req, res) {

    try {


        const { nome, email, senha, tipo} = req.body;


        const usuario = await Usuario.criar(
            nome,
            email,
            senha,
            tipo
        );


        res.json(usuario);



    } catch (error) {


        res.status(500).json({
            erro: error.message
        });


    }

}



module.exports = {

    listar,

    criar

};