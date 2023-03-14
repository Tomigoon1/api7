import mongoose from "mongoose";


(async ()=>{
    const db = await mongoose.connect('mongodb://127.0.0.1/dbnotas')
    console.log('estasmo iin en la base de datos dbnotas')
    
})();


