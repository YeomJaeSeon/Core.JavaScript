
console.log(value1) //undefined
console.log(value2) // raise ReferenceError
var value1 = function(){
    console.log('value1')
}

const value2 = function(){
    console.log('value2')
}