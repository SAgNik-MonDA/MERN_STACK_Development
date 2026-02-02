const mongoose = require('mongoose');



main().then((res)=>{
    console.log("connection Sucessfull");
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/test');
}
const userSchema=new mongoose.Schema({
    name:String,
    email:String,
    age:Number,
});

const User = mongoose.model("User",userSchema);

// const user1=new User({
//     name:"sagnik",
//     email:"wef@uhio",
//     age:20
// });

// user1.save()
// .then((res)=>{
//     console.log(res);
// })
// .catch((err)=>{
//     console.log(err);
// });

// User.insertMany([
//     {name:"sagnik",email:"wdgujdgu@kdfwekfh",age:20},
//     {name:"tirtha",email:"wdguj@kdfwekfh",age:23},
//     {name:"deba",email:"wddgu@kdfwekfh",age:25}

// ]).then((res)=>{
//     console.log(res);
// });


// User.find({}).then((res)=>{
//     console.log(res);
// })
// .catch((err)=>{
//     console.log(err);
// });

//  User.updateOne({name:"sagnik"},{age:62})
//  .then((res)=>{
//     console.log(res);
// })
// .catch((err)=>{
//     console.log(err);
// });


//  User.findOneAndUpdate({name:"sagnik"},{age:6},{new:true})
//  .then((res)=>{
//     console.log(res);
// })
// .catch((err)=>{
//     console.log(err);
// });



//  User.findByIdAndUpdate(("6980e8896d0e8dbb8cad15e9"),{age:65},{new:true})
//  .then((res)=>{
//     console.log(res);
// })
// .catch((err)=>{
//     console.log(err);
// });

 User.findOneAndDelete({name:"sagnik"}).then((res)=>{
    console.log(res);
 });
