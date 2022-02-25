// arrow function
var arr = {
    outer: function(){
        console.log(this);
        var innerFunc = () => {
            console.log(this);
        }
        innerFunc(); // innerFunc 호출할때 실행컨텍스트가 생성되는데, 그때 thisBinding자체를 하지 않는다. 왜? arrow function이기 때뭉네~
        //자연스레 상위 스코프 (스코프 체인상)의 this를 가르키게 된다.
        //this는 실행 주체를 가르킨다.
    }
}

arr.outer();