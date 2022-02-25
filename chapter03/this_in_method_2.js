var obj1 = {
    outer: function(){
        console.log(this);
        var innerFunc = function(){
            console.log(this);
        }
        innerFunc(); //메서드가아닌 함수호출은 호출 주체가 없으므로 this는 전역객체를 가르킨다. -> this는 인스턴스를 가르켜야 맞을 거 같은데 어색한다.
        //그래서 실행컨텍스트 생성할때 아애 thisBinding을 하지 않는 arrow function이 만들어졌다.
    }
}

obj1.outer();

//obj1
//global
//obj2
