//generic function takes all types of output either it is object ,string or value
function user<T>(mydata1:T):T{  //T can be anything P ,q,A etc
    return mydata1
}
console.log(user<string>("ram"));
console.log(user<number>(6));
// or use below one
function users<T>(meradata:T):T{
    return meradata
}
console.log(users({name:"ram",age:30}))
console.log(users(6))
console.log(users("ram2"))
