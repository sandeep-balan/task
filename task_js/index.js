const express = require("express");
const app = express();
const db = require("./database.js")
app.set("views",__dirname+"/view");
app.set("view engine","ejs");
app.use(express.urlencoded());
app.get("/",(req,res)=>{
    res.render("index");
})
app.post("/",(req,res)=>{
    const d = req.body;
    console.log(req.body);
    var sql = "insert into detail values(?,?,?)";
    db.query(sql,[d.name,d.age,d.phno],(err,data)=>{
        if(err) throw err;
        else{
            console.log("Inserted Successfully");
        }
    })
    res.redirect("/get");
})
app.get("/get",(req,res)=>{
    var sql = "select * from detail";
    db.query(sql,(err,data)=>{
        res.render("list",{s:data})
    })
})
app.listen(3000);