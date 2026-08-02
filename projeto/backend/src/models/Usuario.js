const db = require("../config/database");

class Usuario {

    static async listar() {

        const resultado = await db.query(
            "SELECT * FROM usuarios"
        );

        return resultado.rows;

    }

    static async criar(nome, email, senha, tipo) {

        const resultado = await db.query(

            `
            INSERT INTO usuarios (nome, email, senha, tipo)
            VALUES ($1, $2, $3, $4)
            RETURNING *
            `,

            [
                nome,
                email,
                senha,
                tipo
            ]

        );

        return resultado.rows[0];

    }

}

module.exports = Usuario;