import {createPool} from "mysql2/promise"; 

export const pool = createPool({
    host:"containers-us-west-116.railway.app",
    port:"6599",
    user:"root",
    password:"Qv3cjbIf881cFS57gAzB",
    database:"railway",
    ssl:{
        rejectUnauthorized:false
    }
})