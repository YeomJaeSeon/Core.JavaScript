//외부함수의 변수를 참조하는 내부함수 - 2
var outer = function(){
    var a = 1;
    var inner = function(){
        return ++a;
    }
    return inner();
}

var outer2 = outer();
console.log(outer2)