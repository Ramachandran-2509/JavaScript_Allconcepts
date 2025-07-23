let newPromise= new Promise((resolve, reject)=>{

    let Data= false
    if(Data){
        resolve("Data is received ")
    }
    else{
            reject("Data not received ")
    }
})

newPromise.then((msg)=>{
console.log("success : " + msg)
}).catch((err)=>{
    console.log("error : " + err)
}).finally(()=>{
    console.log("finally : promise is resolved or rejected")
})