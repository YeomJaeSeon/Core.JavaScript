//외부함수의 변수를 참조하는 내부함수 - 1
var outer = function(){
    var a = 1;
    var inner = function () {
        console.log(++a);
    }
    inner();
}

outer();
