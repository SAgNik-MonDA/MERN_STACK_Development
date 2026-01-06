
const { faker } = require('@faker-js/faker');
const mysql =require('mysql2');


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
let q="INSERT INTO user(id,username,email,password) VALUES ?";

let data=[];
for(let i=0;i<=100;i++){
 data.push (getRandomUser());
}
// let user=[
// ["123bedr","123_newuserbr","abc@gmail.combe","abcb"],
// ["123cdr","123_newusercr","abcde@gmail.com","abcc"]
// ];


try{
  connection.query(q,[data],(err,result) => {
  if(err) throw err;
  console.log(result);
  // console.log(result.length);
  // console.log(result[0]);
  // console.log(result[1]);
});
} catch (err) {
  console.log(err);
}

connection.end();

// let getRandomUser = () =>{
//   return {
//     Id: faker.string.uuid(),
//     username: faker.internet.username(),
//     email: faker.internet.email(),
//     password: faker.internet.password(),
//   };
// }
// console.log(getRandomUser());




