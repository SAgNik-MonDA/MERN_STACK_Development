
const express=require("express");
const app=express();

// console.dir(app);

let port=3000;

// listen
app.listen(port, ()=>{
    console.log(`app is listening on port ${port}`);
});

// request & response

// app.use((req,res)=>{
//     // console.log(req);
//     console.log("request recived");


//     // send request

//     res.send("this is a basic response");
// });


app.get("/", (req,res)=>{
    res.send("you contacted root path");
});

app.get("/apple", (req,res)=>{
    res.send("you contacted apple path");
});

app.get("/orange", (req,res)=>{
    res.send("you contacted orange path");
});

app.get("*", (req,res)=>{
    res.send("this path does not exist");
});
