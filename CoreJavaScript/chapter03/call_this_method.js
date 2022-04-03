var obj = {
    a: 1,
    method: function(x, y){
        console.log(this, this.a, x, y);
    }
}

obj.method(2, 3); //메서드를 호출한것, this는obj가될것
obj.method.call({a: 1000}, 2, 3); //call 메서드를 이요하면 이렇게 this를 바인딩해준다. (명시적으로) 실행컨텍스트가 생성될떄 this binding을 해주는게아닌 명시적으로 개발자가 this가 가르킬 객체를 지정해 줄 수 있다.


