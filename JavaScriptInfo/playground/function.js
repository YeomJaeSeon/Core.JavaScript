printAll()
// func()
console.log(func === undefined) // 함수 표현식도 호이스팅된다.
console.log(func2)

function printAll(){
    console.log("printAll")   
}

var func = function(){
    console.log('func')
}
let func2 = function(){
    console.log('func2')
}


function hi(){
    console.log('func hi')
}

console.log(hi)

