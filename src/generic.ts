console.log('generic')

// value type capturing by <T>
// here T is variable and this is generic 

/* const addId= (obj:object)=>{ */

/* -------another example-========================= */
/* const addId= <T>(obj:T)=>{ // generic style type <T>
    let id=Math.floor(Math.random() * 100)

    return { ...obj, id}
}

let user = addId({
    name:'suhel',
    age:33,
    country:'Bangladesh'
})

console.log(user.id) */



/* -------another example-========================= */

/* const addId= <T extends {name:string,age:number,country:string}>(obj:T)=>{ // generic style type <T>
    let id=Math.floor(Math.random() * 100)

    return { ...obj, id}
}

let user = addId({
    name:'suhel',
    age:33,
    country:'Bangladesh'
})
 
console.log(user.id) */

/* --------------------------another example-========================= */
interface ApiResponse<T>{ //here data received by T
    status:number,type:string,data:T
    
}

    const response :ApiResponse<object>={ // here data sent as a object T
        status:200,type:'good',data:{name:'suhel',country:'Ban'}
    }
console.log(response)


