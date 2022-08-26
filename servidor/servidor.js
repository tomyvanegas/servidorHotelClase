// forma anterior de importar 
//const express = require('express')
//fomra actual de importar 
import  express  from "express"

import {routers} from "../routers/routers.js"

//llamar al metodo conectar con bd


import { connect } from "../database/conexion.js"


export class Servidor{

    constructor(){
        this.app = express() // definiendo atributo o variable
        this.habilitarjson()
        this.conectarConBd()
        this.atenderPeticiones() //atiendo las peticiones del cliente
    }

    atenderPeticiones(){
        // atendiendo peticiones
       
        this.app.use('/',routers)
  
    }

    habilitarjson(){

        this.app.use(express.json()) 

    }

    encenderServidor(){
        //levantando el servidor 
        this.app.listen(process.env.PORT,function(){
            console.log("servidor corriendo" + process.env.PORT)
        })
    }

    conectarConBd(){

        connect()

    }

}