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

 






app.get("/inscrever", (req, res)=>{

    const q = "SELECT * FROM  inscrever"

    db.query(q,(err, data)=>{
        if(err) return res.json(err)
        return res.json(data)
    })

    // const q = "SELECT * FROM inscrever WHERE (?)"
    // const values = [
    //     req.body.nickname,
    //     req.body.senha
    // ]

    // if(nickname)
    // db.query(q,(err, data)=>{
    //     if(err) return res.json(err)
    //     return res.json(data)
    // })
})

// 

app.post("/inscrever", (req,res)=>{
    const q = "INSERT INTO inscrever (`nome`, `nickname`,`password`)  VALUES (?)"
    const values = [
        req.body.nome,
        req.body.nickname,
        req.body.senha
    ]



    db.query(q,[values], (err,data)=>{
        if(err) return res.json(err)
        return res.json("foi criado com sucesso!")
    })
})





app.get("/lol", (req, res)=>{


    const q = "SELECT * FROM campeoes"

    db.query(q,(err, data)=>{
        if(err) return res.json(err)
        return res.json(data)
    })
})




app.get("/login",(req,res)=>{

 
    const q = "SELECT * FROM inscrever WHERE  nickname  ==  VALUES (?) AND password ==  VALUES (?)"
    const values = [
        req.body.nickname,
        req.body.password
    ]
    
    db.query(q,[values],(err, data)=>{
        if(err) return res.json(err)
        return res.json(data)
    })

})



// SKINS
app.get("/skins",(req,res)=>{

 
    const q = "SELECT * FROM skins"

    db.query(q,(err, data)=>{
        if(err) return res.json(err)
        return res.json(data)
    })

})


// INCIO do get dos cards das skins










app.listen(8800, ()=>{
    console.log("Backend conectado!!!")

});



// app.post("/inscrever",(req,res)=>{
//     const nome = req.body.nome
//     const nickname = req.body.nickname



// db.query("SELECT * FROM `inscrever` WHERE nickname = ?", [nickname],(err,result)=>{
//     if(err){
//         res.send(err)
//     }
//     if(result.length == 0){
//             db.query("INSERT INTO `inscrever`(`nome`, `nickname`) VALUES ('?')",[nome,nickname],(err,result)=>{
//                 if (err) {
//                     res.send(err)
//                 }

//                 res.send({msg: "cadastrado com sucesso"})
//             }) 
        
       
//     }    else{ res.send({msg:"usuario ja cadastrado"})}
// })

// })
