
// Templating

const express = require("express");
const app=express();
const path=require("path");

// serving static files
app.use(express.static("public"));
app.use(express.static(path.join(__dirname,"public/css")));
app.use(express.static(path.join(__dirname,"public/js")));



const port=8080;
app.set("view engine","ejs");

app.set("views",path.join(__dirname,"/views"));

app.get("/",(req,res)=>{
    res.render("home.ejs");
});

app.get("/hellow",(req,res)=>{
    res.send("hiii guys.....!!!");
});

app.listen(port,()=>{
    console.log(`listening on port  ${port}`);
});



// Passing data to EJS

app.get("/rolldice",(req,res)=>{
    dicevalue=Math.floor(Math.random()*6)+1;
    res.render("rolldice.ejs",{num:dicevalue});
});


// Instragram EJS

// app.get("/ig/:username",(req,res)=>{
    // const followers = ["adam","bob","steve","abc"];
    // let {username}=req.params;
    // res.render("instagram.ejs",{username,followers});
// });




app.get("/ig/:username",(req,res)=>{
let { username }=req.params;
const instaData=require("./data.json")
const data=instaData[username];
if(data){
res.render("insta1.ejs",{data});
}
else{
    res.render("error.ejs");
}
});



