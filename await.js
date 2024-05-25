// function mocking an api call that takes 2 seconds to execute and returns a promise;
function b(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve('two')
        }, 2000)
    })
}

function withoutAwait(){
    console.log('one')
    /* prints one */
    b().then((e)=>console.log(e))
    /* then tries to resolve promise, while the promise is being resolved it resumes with the rest of the code*/
    console.log('three')
    /* prints three */
    /* now the promise is resolved after 2 seconds so prints two */
}

async function withAwait(){
    console.log('one')
    // prints one
    const result = await b();
    // waits for the promise to resolve and DOES NOT resume with the rest of the code. 
    console.log(result)
    // promise is resolved after 2 seconds so prints two
    console.log('three')
    // now prints three
}

// withoutAwait();
withAwait();