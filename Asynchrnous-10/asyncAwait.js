let newpromise = new Promise((resolve, reject) => {
  let data = false;

  if (data) {
    resolve("data is true");
  } else {
    // reject("data is false");
    throw new Error('Data not received')
  }
});

//why we use for async await becuase using await key word to change Asyncrnous operation to synchronous operation

// let res= await newpromise
// console.log(res)

// console.log("please don't give up ram")

//output
// data is true
// please don't give up ram

// now let's see how to use async await with try catch block

async function finalPromise() {
  try {
    let res = await newpromise;
    console.log(res);
  } catch (err) {
    // console.log(err.message);  // when we use for throw new error in reject state we received in error message
    console.log(err)
  } finally {
    console.log("Data end");
  }
}

finalPromise()
console.log("Welcome");
