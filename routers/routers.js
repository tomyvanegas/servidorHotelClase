import express from 'express'

//IMPORTAR EL CONTROLADOR DE HABITACIONES
import {ControllerHabitacion} from '../controller/ControllerHabitacion.js'
let controllerHabitacion=new ControllerHabitacion()

//variable para personalizar las rutas (ENDPOINTS) de mis servicios
export let routers=express.Router()


//escribo mis rutas (cada ruta es un servicio)

//ENDPOINTS PARA LOS SERVICIOS ASOCIADOS A LAS HABITACIONES

routers.get('/viajescomfama/v1/habitaciones',controllerHabitacion.buscarHabitaciones)
routers.get('/viajescomfama/v1/habitacion/:id',controllerHabitacion.buscarHabitacionPorId)
routers.post('/viajescomfama/v1/habitacion',controllerHabitacion.agregarHabitacion)
routers.put('/viajescomfama/v1/habitacion/:id',controllerHabitacion.editarHabitacion)




//ENDPOINTS PARA LOS SERVICIOS ASOCIADOS A LAS RESERVAS
/*rutas.post('viajescomfama/v1/reserva',function (req, res) {
    res.send('Hello World')
})
rutas.put('viajescomfama/v1/reserva/:id',function (req, res) {
    res.send('Hello World')
})
rutas.delete('viajescomfama/v1/cancelacion/:id',function (req, res) {
    res.send('Hello World')
})*/