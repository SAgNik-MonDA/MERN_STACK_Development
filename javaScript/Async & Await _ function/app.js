// async keyword

async function greet(){

    // throw error
    // throw "random error";
    return "hellow";
};
greet()
.then((result)=>{
    console.log("promise was resolved");
    console.log("result was",result);
})
.catch((err)=>{
    console.log("promise was rejected with err:",err);
})




// await keyword

function getnum(){
    return new Promise((resolve,reject)=>{
         setTimeout(()=>{
            let num=Math.floor(Math.random()*10)+1;
            console.log(num);
            resolve();
         },1000);
    });
}


async function demo(){
    await getnum();
    await getnum();
    await getnum();
     getnum();
}
demo();