import Express from "express";
import Estudiante from "../controllers/controllersRoutes.js";
const router = Express.Router(); 

router.get('/',Estudiante.mostrarForm)
router.post('/notas',Estudiante.mostrarNotas)
router.get('*',Estudiante.noEncontrado)

export default router; 