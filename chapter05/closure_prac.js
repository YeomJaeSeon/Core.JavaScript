//클로져란 함수 내부의 지역변수를 참조하는 내부함수를 '외부로 전달'했을 때, 지역변수가 사라지지 않는 현상
// 왜? - 언젠간 내부함수가 호출되면 outerEnvironmentReference에 의해 참조되어 사용될수 있기에 참조 카운트가 0이 아니라서, GC가 수거하지 않는다. 그래서 함수의 실행컨텍스트가 종료되어도, 내부함수가 참조하는 지역변수는 사라지지않아. 이 현상을 클로져

var outer = function(){
    var a = 1;
    var inner = function(){
        return ++a;
    }
    return inner
}

var outer2 = outer(); //이때, outer의 실행컨텍스트는 이미 종료되었음
console.log(outer2()) //그런데 inner를 호출하여도 outer의 environmentRecord에 저장된 a에 접근할수있다??
console.log(outer2()) // 여기도??
//이게 바로 클로져