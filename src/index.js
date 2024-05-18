const express = require("express")
const app = express()

const path = require("path")
const collection = require("./mongodb")
const PORT = 3000

const templatesPath = path.join(__dirname,'../tempelates')

app.use(express.json())
app.set("view engine","hbs")
app.set("views",templatesPath)

app.use(express.urlencoded({extended:false}))


app.get("/",(req,res)=>{
    res.render("login")
})

app.get("/signup",(req,res)=>{
    res.render("signup")
})

app.post("/signup",async(req,res)=>{
    
    const data = {
        name: req.body.name,
        password : req.body.password
    }
   
    await collection.insertMany([data])

    res.render(app)

})

app.post("/login",async(req,res)=>{
    
 const check = await collection.findOne({name: req.body.name})
 try{

 if(check.password===req.body.password){

    res.render(app)
 }else{
      res.render("wrong password")
 }
}
catch{
    res.render("worng details")


}})

app.listen(PORT,()=>{
    console.log(`app running on : http://localhost:${PORT}`)
})