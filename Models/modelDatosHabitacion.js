//importar a mongoose
import mongoose from "mongoose"

const Schema = mongoose.Schema

const Habitacion = new Schema({
    nombre:{
        type:String,
        required:true
    },
    valorNoche:{
        type:Number,
        required:true
    },
    descripcion:{
        type:String,
        required:true
    },
    imagenes:{
        type:String,
        required:false
    },
    numeroPersonas:{
        type:String,
        required:true
    }
})

 export const modeloHabitacion = mongoose.model("habitacion",Habitacion)