
const express = require('express')
const cors = require('cors')
const  mysqlConnection  = require("../database")

class Servidor{
    constructor(){

        //Iniciamos express
        this.app = express()

        //Puerto
        this.port = process.env.PORT || 3000
        this.app.use(cors())

        // Llamar a la base de datos
        this.conectarDB()

        //MiddleWares
        this.middlewares()

        //Rutas del archivo
        this.rutas()
    }

    async conectarDB(){
        await mysqlConnection
    }



    middlewares(){
        //Directorio publico (public)
        this.app.use(express.json())
    }

    rutas(){
        this.app.use('', require('../routes/populars'))
        this.app.use('/details', require('../routes/details'))
        this.app.use('/reviews', require('../routes/reviews'))
        this.app.use('/similars', require('../routes/similars'))
    }

    listen(){
        this.app.listen(this.port, () =>{
            console.log("El servidor esta corriendo en el puerto", this.port)
        })
    }
}



module.exports = Servidor;