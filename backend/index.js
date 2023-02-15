import express from "express";
import mysql from "mysql";
import cors from "cors";

const app = express()

// 1/2 - Para conectar ao banco de dados.
const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"lol"
}); // 2/2 - Fechando a conecção aqui.

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
    res.json("Oi, este é o backend!")
})


app.get("/lol", (req, res)=>{
    const q = "SELECT * FROM campeoes"
    db.query(q,(err, data)=>{
        if(err) return res.json(err)
        return res.json(data)
    })
})


app.listen(8800, ()=>{
    console.log("Backend conectado!!!")
})