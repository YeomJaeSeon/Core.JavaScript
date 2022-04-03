var a = 1;
var outer = function (){
    var inner = function(){
        console.log(a) // undefined - inner의 실행컨텍스트의 environmentRecord에는 a가 있다. 그치만 값이 할당되징낳아 undefined이다.(hoisting)
        var a = 3;
    }
    inner();
    console.log(a) // outer의 environmentRecord에 없으닌까 outerEnvironmentReference를 통해 스코프체인상 a 를 검색, 전역 LE에 a 가있으므로 찾아서 1출력
}
outer();
console.log(a) //1 