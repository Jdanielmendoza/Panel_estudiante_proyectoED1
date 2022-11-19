import { pool } from "../database/dbConection.js";
const controller = {}

controller.mostrarForm =(req,res)=>{
    res.render('form');
}

controller.mostrarNotas = async(req,res)=>{
    const {registro} = req.body; 
    const result = await pool.query('select * from Estudiante where Registro = ?',[registro]); 
    res.render('notasDeEstudiante',{
        data : result[0][0]
    }) 
}


//error en ruta 
controller.noEncontrado = (req,res)=>{
    return res.status(400).send("error ruta o registro invalido!")
}

export default controller; 