function b(){
    return new Promise((resolve, reject)=>{
      setTimeout(()=>{
        resolve('two')
      }, 2000)
    })
  }
  
  async function a(){
    console.log('one')
    const resultOfB = b();
    // We are calling b() which returns a promise.
    console.log(resultOfB)
    /**If we try to print resultOfB now, it will print 'Promise{}' because we have not
      resolved the promise yet.
     */     
    console.log(resultOfB.then((e)=>console.log(e)))
  }
  
  a();