import {modeloReservas} from '../Models/modeloDatosReservas.js';

export class serviciosReserva{

    constructor(){}

    async buscarTodasReservas(){
        let reservas=await modeloReservas.find()
        return reservas
    }

    async buscarReservaPorId(id){
        let reserva = await modeloReservas.findById(id)
        return reserva
    }

    async agregarReserva(datos){
        let reservaAGuardar=new modeloReservas(datos)
        return await reservaAGuardar.save()
    }

    async actualizarReserva(id,datos){
        return modeloReservas.findByIdAndUpdate(id,datos)

    }

    async eliminarReserva(id){
        
        return modeloReservas.findByIdAndDelete(id)
    
    }
}