import mongoose from "mongoose"

const Schema = mongoose.Schema

const Reservas = new Schema({
    
    idHabitacion:{
        type:String,
        required:true
    },
    fechaEntrada:{
        type:Date,
        required:true
    },
    fechaSalida:{
        type:Date,
        required:true
    },
    NumeroAdultos:{
        type:Number,
        required:true
    },
    Numeroninos:{
        type:Number,
        required:false
    },
    valorReserva:{
        type:Number,
        required:true
    }

    })


export const modeloReservas = mongoose.model("reservas",Reservas)