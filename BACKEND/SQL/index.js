
const { faker } = require('@faker-js/faker');
const mysql =require('mysql2');
const express = require("express");
const app=express();
const path=require("path");
const methodOverride= require("method-override");


app.use(methodOverride("_method"));
app.use(express.urlencoded({extended:true}));
app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "delta_app",
  password:"Sagnik@12",
});

 let getRandomUser = () =>{
  return [
    faker.string.uuid(),
    faker.internet.username(),
    faker.internet.email(),
    faker.internet.password(),
  ];
}

// let q="SHOW TABLES";

// Inserting new data
// let q="INSERT INTO user(id,username,email,password) VALUES ?";

// let data=[];
// for(let i=0;i<=100;i++){
//  data.push (getRandomUser());
// }

// let user=[
// ["123bedr","123_newuserbr","abc@gmail.combe","abcb"],
// ["123cdr","123_newusercr","abcde@gmail.com","abcc"]
// ];


// try{
//   connection.query(q,[data],(err,result) => {
//   if(err) throw err;
//   console.log(result);
//   // console.log(result.length);
//   // console.log(result[0]);
//   // console.log(result[1]);
// });
// } catch (err) {
//   console.log(err);
// }

// Home route
app.get("/",(req,res)=>{
 let q=`SELECT COUNT(*)  AS total FROM user`;
  try{
  connection.query(q,(err,result) => {
  if(err) throw err;
  let count=result[0].total;
  // res.send(result[0]);
  res.render("home.ejs",{ count });
});
} catch (err) {
  console.log(err);
  res.send("some error in DB");
}
});

// show route
app.get("/user",(req,res)=>{
  let q= `SELECT * FROM user`;
  try{
  connection.query(q,(err,users) => {
  if(err) throw err;
  // console.log(result);
  res.render("showusers.ejs",{users});
});
} catch (err) {
  console.log(err);
  res.send("some error in DB");
}
});

// Edit Route

app.get("/user/:id/edit",(req,res)=>{
  let {id} = req.params;
  let q=`SELECT * FROM user WHERE id='${id}'`;
  // console.log(id);
 try{
  connection.query(q,(err,result) => {
  if(err) throw err;
  let user = result[0];
  res.render("edit.ejs",{user});
});
} catch (err) {
  console.log(err);
  res.send("some error in DB");
}
});

// Update (DB) Route
app.patch("/user/:id",(req,res)=>{
  let {id} = req.params;
  let {password: formPass , username:newUsername}=req.body;
  let q=`SELECT * FROM user WHERE id='${id}'`;

  try{
  connection.query(q,(err,result) => {
  if(err) throw err;
  let user = result[0];
  if(formPass !=user.password){
    res.send("Wrong Password");
  }else{
    let q2 = `UPDATE user SET username='${newUsername} 'WHERE id = '${id}'`;
     connection.query(q2,(err,result) => {
      if(err) throw err;
      res.redirect("/user");
     })
  }
  
});
} catch (err) {
  console.log(err);
  res.send("some error in DB");
}
});

// connection.end();
app.listen("8090",()=>{

  console.log("server is listening to port 8090");
});

// let getRandomUser = () =>{
//   return {
//     Id: faker.string.uuid(),
//     username: faker.internet.username(),
//     email: faker.internet.email(),
//     password: faker.internet.password(),
//   };
// }
// console.log(getRandomUser());




