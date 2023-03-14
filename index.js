console.clear()
import express from 'express';
import notes from './notes/notes.js'
import './mongoDB.js'
import cors from 'cors'



const app = express();
app.use(cors({
    "origin": '*',
}

))

app.use(express.text())
app.use(express.json())

app.use(notes)

app.listen(3000,()=>{
    console.log('el puerto esasdasta in');
})



