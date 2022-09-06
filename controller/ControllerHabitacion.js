import {ServicioHabitacion} from "../services/serviciosHabitacion.js"

export class ControllerHabitacion{

    constructor(){}

    // buscar habitaciones

    async buscarHabitaciones(request,response){
        
        // llamo al servicio 

        let serviciosHabitacion = new ServicioHabitacion()

        //Intento resolver peticion
        try{
            
            response.status(200).json({
            
                mensaje:"exito en la consulta",
                datos: await serviciosHabitacion.buscarTodas()

            })

        }catch(error){//fallo resolviendo la peticion 
            response(400).json({

                mensaje:"fallo en la consulta" + error,
                datos:null        

            })
        }
    }

    // buscar habitacion por id

    async buscarHabitacionPorId(request,response){
        let identificador = request.params.id
        
        // llamo al servicio habitaciones

        let serviciosHabitacion = new ServicioHabitacion()



        try{
            
            
            response.status(200).json({
               
                mensaje:"exito en la consulta "+ identificador,
                datos: await serviciosHabitacion.buscarPorId(identificador)

                
            })

        }catch(error){//fallo resolviendo la peticion 
            response(400).json({

                mensaje:"fallo en la consulta" + error,
                datos:null

            })
        }
    }

    // agregar habitacion

    async agregarHabitacion(request,response){
        let cuerpo = request.body
        
        // llamar al servicio habitaciones

        let serviciosHabitacion = new ServicioHabitacion()

        //Intento resolver peticion
        try{

           await serviciosHabitacion.agregar(cuerpo)

            response.status(200).json({

                mensaje:"exito agregando la habitacion",
                datos :null


            })

        }catch(error){//fallo resolviendo la peticion 
            response(400).json({

                mensaje:"fallo en la consulta" + error,
                datos:null

            })
        }
    }    

    // editar habitacion

    async editarHabitacion(request,response){
        
        //recibir el id 
        let id = request.params.id

        //recibir los datos con los que voy a editar (body)
        let datos = request.body
         
        // llamar al servivio habitacion

        let serviciosHabitacion = new ServicioHabitacion()

        //Intento resolver peticion
        try{

            await serviciosHabitacion.actualizar(id,datos)

            response.status(200).json({

                mensaje:"exito editando la habitacion" + id,
                datos : null


            })

        }catch(error){//fallo resolviendo la peticion 
            response(400).json({

                mensaje:"fallo editando habitacion " + error,
                datos:null

            })
        }
    }

    // eliminar habitacion

    /*async eliminarReserva(request,response){
         
        //Intento resolver peticion
        try{

            response.status(200).json({

            })

        }catch(error){//fallo resolviendo la peticion 
            response(400).json({

            })
        }
    }*/
}