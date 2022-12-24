import {createPool} from "mysql2/promise"; 

export const pool = createPool({
    host:"containers-us-west-190.railway.app",
    port:"6104",
    user:"root",
    password:"cKXiUDpADUdZFbakF0gi",
    database:"railway",
    ssl:{
        rejectUnauthorized:false
    }
})