const { Pool } = require("pg");


const db = new Pool({

    host: "localhost",
    user: "postgres",
    password: "postgres",
    database: "ubicho",
    port: 5432

});


module.exports = db;