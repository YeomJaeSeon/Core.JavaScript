function a (){
    console.log(b); //undefined
    var b = 'bbb';
    console.log(b); // bbb
    function b(){}
    console.log(b) //function b
}
a()