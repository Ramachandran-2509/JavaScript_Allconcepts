// REST API means REpresentational State of Resource (REST) API

// API => Application Programming Interface

// JSON=> JavaScript Object Notation
// JSON is a lightweight data interchange format that is easy to read and write. It is a text


//prefer format
// fetch('https://fakestoreapi.com/users/1')
//   .then(response => response.json())
//   .then(data => console.log(data));


// how works we fetch api

// fetch('https://fakestoreapi.com/users/abc')
// .then((res)=>{
//     if(!res.ok){
//         throw new Error('Failed to fetch data')
//     }
//     else{
//         return res.json()
//     }
// })
// .then((data)=>{
//     console.log(data)
// })
// .catch((err)=>{
//     console.log(err.message)
// })



async function finalResult(){
    // fetch('https://fakestoreapi.com/users/abc')
    try{
        let k=await fetch('https://fakestoreapi.com/users/1')
        // console.log(k)
        if(!k.ok){
            throw new Error('Failed to fetch data') 
            }
            else{
                let data=await k.json()
                console.log(data)
                }
    }
    catch(err){
      console.log(err.message)  
    }


}
finalResult()