const mongoose = require("mongoose");
const Chat = require("./models/chat.js");

main()
.then(()=>{
    console.log("connection sucessful");
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
};


let allChats = [{
    from:"sagnik",
    to:"CPIM",
    msg:"CPIM jindabad.....",
    created_at: new Date()
},

{
    from:"sagnik",
    to:"CPIM",
    msg:"CPIM jindabad.....",
    created_at: new Date()
},

{
    from:"sagnik",
    to:"CPIM",
    msg:"CPIM jindabad.....",
    created_at: new Date()
},

{
    from:"sagnik",
    to:"CPIM",
    msg:"CPIM jindabad......",
    created_at: new Date()
},



];


Chat.insertMany(allChats);
