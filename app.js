import {Servidor} from './servidor/servidor.js'

//IMPORTAMOS DOTENV PARA MANIPULAR VARIABLES DE ENTORNO 
import 'dotenv/config' 

//PARA UTILIZAR UNA CLASE SE DEBE INSTANCIAR
//PARA USAR UNA CLASE DEBO CREAR UN OBJETO (ES UNA VARIABLE)
//PARA USAR UNA CLASE LE DEBO SACAR COPIA

let servidor_Comfama = new Servidor()

//ENCIENDO EL SERVIDOR
servidor_Comfama.encenderServidor()

// remove this after you've confirmed it working
console.log(process.env.PORT) 