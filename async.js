function normalFunctin() {
    return 'one'
}

// when we make a function async, it returns a promise
async function asyncFunction() {
    return 'two'
}

function a() {
    console.log(normalFunctin())
    console.log(asyncFunction())    //prints promise bcz of async
    //if we want to print the value of this async function, we will have to resolve the promise first
    asyncFunction().then((e)=>console.log(e))
}

a()