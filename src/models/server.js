
const express = require('express')
const mysqlConnection = require('../database')

class Servidor{
    constructor(){

        //Iniciamos express
        this.app = express() 
 
        //Puerto
        this.port = process.env.PORT || 3000

        //conexion a la base de datos
        this.dbConnection()
        //MiddleWares
        this.middlewares()

        this.popularPath = '/3/movie/popular'
        

        //Rutas del archivo
        this.rutas()
    }


    async dbConnection(){
        try {
            await mysqlConnection.authenticate()
            console.log('Db is connected')
            
        } catch (error) {
            throw new Error(error)
        }
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