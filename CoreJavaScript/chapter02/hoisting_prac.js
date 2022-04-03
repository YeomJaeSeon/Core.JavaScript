// function a(x){
//     console.log(x); // 1
//     var x;
//     console.log(x); // 1
//     var x = 2;
//     console.log(x) //2
// }
// a(1)

console.log('//========//')
function a(){
    console.log(b); // Function
    var b = 'bbb';
    console.log(b); // 'bbb'
    function b(){}
    console.log(b) // 'bbb'
}
a();