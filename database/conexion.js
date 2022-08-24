// importar mongoose

import mongoose from "mongoose"

//me conecto a la base de datos 

export async function connect(){
    try{

        await mongoose.connect(process.env.DATABASE);

    }
    catch{

        console.log("upss " + error)

    }
}


