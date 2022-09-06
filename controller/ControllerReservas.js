import {serviciosReserva} from '../services/serviciosReserva.js'

export class ControllerReserva{

    constructor(){}

    

//buscar reserva
async buscarReserva(request, response){

    let servicioReservas = new serviciosReserva()
        //intento resolver la peticion
        try{
            response.status(200).json({
                mensaje:"exito en la consulta",
                datos:await servicioReservas.buscarTodasReservas()
            })  
        }catch(error){ //fallo resolviendo la peticion
            
            response(400).json({
                mensaje:"fallo en la consulta"+error,
                datos:null   
            })
        }
}

async buscarReservaPorId(request,response){
    let identificador=request.params.id
    
    let servicioReservas = new serviciosReserva()
    try{
        response.status(200).json({
            mensaje:"exito en la consulta "+identificador,
            datos:await servicioReservas.buscarReservaPorId(identificador)})
    }catch(error){ //fallo resolviendo la peticion
        
        response(400).json({
            mensaje:"fallo en la consulta"+error,
            datos:null
        })
    }
}

async agregarReserva(request,response){
    let cuerpo = request.body
            //llamo al servicio habitaciones
    let servicioReservas =new serviciosReserva()
           
    try{
    
        await servicioReservas.agregarReserva(cuerpo)
                
        response.status(200).json({
            mensaje:"exito agregando reserva",
            datos:null})
    }catch(error){ //fallo resolviendo la peticion
        
        response(400).json({
            mensaje:"fallo agregando habitacion"+error,
           datos:null})
    }
}

async editarReserva(request, response){
    let id = request.params.id
    let datos = request.body
    let servicioReservas=new serviciosReserva()
           
    try{
        await servicioReservas.actualizarReserva(id,datos)
        response.status(200).json({
            mensaje: "exito editando la Reserva  " + id,
            datos: null})
        
}catch(error){ //fallo resolviendo la peticion
    
    response(400).json({mensaje:"fallo en resolviendo la peticion"+error,
            datos:null})
}}

async eliminar(request,response){
    let id = request.params.id
   
    let servicioReservas=new serviciosReserva()
           
    try{
        await servicioReservas.eliminarReserva(id)
        response.status(200).json({
            mensaje: "exito editando la Reserva  " + id,
            datos: null})
        
}catch(error){ //fallo resolviendo la peticion
    
    response(400).json({mensaje:"fallo en resolviendo la peticion"+error,
            datos:null})
}
}
}