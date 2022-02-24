
const express = require('express')

class Servidor{
    constructor(){

        //Iniciamos express
        this.app = express()

        //Puerto
        this.port = process.env.PORT || 3000

        //MiddleWares
        this.middlewares()

        this.popularPath = '/3/movie/popular'
        

        //Rutas del archivo
        this.rutas()
    }



    middlewares(){
        //Directorio publico (public)\
        this.app.use(express.static('public'))
        this.app.use(express.json())
    }

    rutas(){
        this.app.use(this.popularPath,require('../routes/populars'))
    }
    listen(){
        this.app.listen(this.port, () =>{
            console.log("El servidor esta corriendo en el puerto", this.port)
        })
    }
}



module.exports = Servidor;