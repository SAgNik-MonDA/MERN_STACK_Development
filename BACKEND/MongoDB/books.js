const mongoose = require('mongoose');



main().then((res)=>{
    console.log("connection Sucessfull");
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/amazon');
}

const bookSchema=new mongoose.Schema({
    title:{
        type:String,
        required:[true,"Error"]
    },
    author:{
        type:String,
        
    },
    price:{
        type:String,
       
    },
    discount:{
        type:String,
        default:0,
    }
})

const Book=mongoose.model("Book",bookSchema);

// let book1=new Book({
//     title:"math",
//     author:"ERfversr",
//     price:1200
// })
// book1.save()
// .then((res)=>{
//     console.log(res);
// })
// .catch((err)=>{
//     console.log(err);
// });

let book1=new Book({
    author:"ERfversr",
    price:120
})
book1.save()
.then((res)=>{
    console.log(res);
})
.catch((err)=>{
    console.log(err.errors.title.properties.message);
});