const express = require('express');
const app = express();

(async () => {

    const database = require('./Banco/db');
    const User = require('./Banco/user');

    await database.sync();
    await User.create (
        {
            nome: "Matheus"

        }
        
    )

})



