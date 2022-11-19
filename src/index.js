import express from "express";
import morgan from "morgan";
import router from "./routes/router.js";
import bodyParser from "body-parser";
import path from "path";
import {fileURLToPath} from "url";   //para el __dirname

const app = express();

const filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(filename);

app.set('port',process.env.PORT || 3000); 
app.set('view engine','ejs');
app.set('views',path.join(__dirname,"views"));


//middlewares
app.use(morgan('dev'))

app.use(express.urlencoded({ extended: false }))   //debe estar por arriba del app.use('/',router);   para que me envie los datos correctamente 
app.use(express.static(path.join(__dirname,'public')));

app.use('/',router);  




app.listen(app.get('port'),()=>{
    console.log("server is running on port :",app.get('port')); 
})