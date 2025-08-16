const express = require("express");
const app = express();
const port = 8080;
const path = require("path");
const { v4: uuidv4 } = require('uuid');


app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));
app.use(express.static(path.join(__dirname,"public")));


let posts=[
    {
    id : uuidv4(),
    username : "HIT",
    content : "I love coding"
},
{
    id : uuidv4(),
    username : "sagnik",
    content : "hard wokr is important to achive sucess"
},
{
    id : uuidv4(),
    username : "deba",
    content : "I got selected for my first internship.....!!!!"
},
];




app.get("/posts",(req , res) => {
    res.render("index.ejs",{posts});
});



app.get("/posts/new",(req , res) => {
    res.render("new.ejs");
});




app.post("/posts",(req,res)=>{
    let {username,content} = req.body;
    let id = uuidv4();
    posts.push({id,username,content});
    res.redirect("/posts");
});





app.get("/posts/:id",(req,res)=>{
    let {id} =req.params;
    console.log(id);
    let post=posts.find((p)=>
        id === p.id
    );
    // console.log(post);
    res.render("show.ejs",{post});
});


app.patch("/posts/:id", (req, res) => {
    let { id } = req.params;

    // let newContent = req.body.content; 
    // console.log(newContent);
    console.log(id);
    res.send("patch request working");
});






app.listen(port,()=>{
    console.log("listening to port : 8080");
});

