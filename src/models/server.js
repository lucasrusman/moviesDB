
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

        this.popularPath = ''
        this.detailPath = '/descripcion'
        this.reviewPath = '/descripcion'
        this.similarPath = '/descripcion'
        

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
        this.app.use(this.popularPath, require('../routes/populars'))
        this.app.use(this.detailPath, require('../routes/details'))
        this.app.use(this.reviewPath, require('../routes/reviews'))
        this.app.use(this.similarPath, require('../routes/similars'))
    }
    listen(){
        this.app.listen(this.port, () =>{
            console.log("El servidor esta corriendo en el puerto", this.port)
        })
    }
}



module.exports = Servidor;