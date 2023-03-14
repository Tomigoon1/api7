console.clear()
import { Router } from "express";
import Modelo from '../InfoModel.js'


const router = Router();


router.post('/PostPeticion',async(req,res)=>{
    // const tareas = await Modelo.find()


    const infoModel =  new Modelo({
        email:req.body.email,
        name:req.body.name,
        message:req.body.message
    })
    await infoModel.save()
    console.log(req.body)
    res.json(req.body)
})
router.get('/GetPeticion',(req,res)=>{
    // const tareas = await Modelo.find()
    res.json({mssg:"bolivviaxd"})
})

export default router;