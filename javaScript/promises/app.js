// resolve & rejecct

function savetodb(data){
return new Promise((resolve,reject)=>{
let internetspeed=Math.floor(Math.random()*10)+1;
if(internetspeed > 4){
    resolve("sucess : data was saved");
}
else{
    reject("failure : weak connection");
}
});
}



// then & catch

// let request=savetodb("sagnik"); //request=promise object
// request
//     .then(()=>{
//         console.log("promise was resolved");
//         console.log(request);
//     })
//     .catch(()=>{
//     console.log("promise was rejected");
//      console.log(request);
// });


// promise chaning

let request=savetodb("sagnik"); //request=promise object
request
    .then(()=>{
        console.log("data1 was saved");
        return savetodb("hellow");
        })
      .then(()=>{
        console.log("data 2 is saved");
      })
    
    .catch(()=>{
    console.log("promise was rejected");
 
});
