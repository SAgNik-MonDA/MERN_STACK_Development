const express=require("express");
const app=express();
const port=8080;
app.listen(port,()=>{
    console.log(`listening to port ${port}`);
});


app.get("/register",(req,res)=>{
    let {user}=req.query;
    res.send(`standard GET response.... welcome ${user}`);
});

app.post("/register",(req,res)=>{
    res.send("standard POST response");
});
