import express from 'express'

//IMPORTAR EL CONTROLADOR DE HABITACIONES
import {ControllerHabitacion} from '../controller/ControllerHabitacion.js'
let controllerHabitacion=new ControllerHabitacion()

import { ControllerReserva } from '../controller/ControllerReservas.js';
let controladorReserva=new ControllerReserva();

//variable para personalizar las rutas (ENDPOINTS) de mis servicios
export let routers=express.Router()


//escribo mis rutas (cada ruta es un servicio)

//ENDPOINTS PARA LOS SERVICIOS ASOCIADOS A LAS HABITACIONES

routers.get('/viajescomfama/v1/habitaciones',controllerHabitacion.buscarHabitaciones)
routers.get('/viajescomfama/v1/habitacion/:id',controllerHabitacion.buscarHabitacionPorId)
routers.post('/viajescomfama/v1/habitacion',controllerHabitacion.agregarHabitacion)
routers.put('/viajescomfama/v1/habitacion/:id',controllerHabitacion.editarHabitacion)


//ENDPOINTS PARA LOS SERVICIOS DE RESERVA

routers.get('/viajescomfama/v1/reservas/',controladorReserva.buscarReserva)
routers.get('/viajescomfama/v1/reservas/:id',controladorReserva.buscarReservaPorId)
routers.post('/viajescomfama/v1/reserva/',controladorReserva.agregarReserva)
routers.put('/viajescomfama/v1/reserva/:id',controladorReserva.editarReserva)
routers.delete('/viajescomfama/v1/reserva/:id',controladorReserva.eliminar)
