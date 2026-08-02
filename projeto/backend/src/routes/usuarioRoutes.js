const router = require("express").Router();


const usuarioController = require("../controllers/usuarioController");



router.get(
    "/",
    usuarioController.listar
);



router.post(
    "/",
    usuarioController.criar
);



module.exports = router;