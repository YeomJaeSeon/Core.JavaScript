var func = function(a, b, c, d){
    console.log(this, a, b, c, d);
}

var bindFunc = func.bind({x: 1}, 4, 5);
console.log(bindFunc.name) //bound func -> bound가 붙는다 ㅋㅋ bind의 반환 메서드의 name프로퍼티엔 접두어 'bound'가붙어 구분쉽게 도와준다.
console.log(func.name) // func