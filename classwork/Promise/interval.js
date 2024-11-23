let name;
setTimeout(()=>{
    name="kenny";
}, 5000)


let p=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("kenny")
    },10000);
    // a=1+2
    // if (a==2){
    //     resolve("correct")
    // }
    // else{
    //     reject("incorrect")
    // }
})

// p.then(value=>console.log(value)).catch(err=>console.log(err)
// )
number=0
// p.then(value=>{
//     console.log(number);
//     name=value}).then(result=>{console.log(number);
//         number++
//         console.log(number);

//         console.log(name)
//         }).then(result=>console.log(number)).catch(err=>console.log(err))
        testFunction=async()=>{
            name=await p
            console.log(name);
        }
        testFunction()


// name=p.then(value=>{return value}).catch(err=>console.log(err)
// )
// console.log(name);


// let myPromise=new Promise(function(myResolve,myReject){
//     setTimeout(function(){
//         myResolve("I love You !!");
//     },3000);
// });
// myPromise.then(function(value){
//     document.getElementById("demo").innerHTML=value
// });