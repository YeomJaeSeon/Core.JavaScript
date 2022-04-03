var obj = {
    methodA: function(){console.log(this)},
    inner: {
        methodB: function(){
            console.log(this);
        }
    }
}

obj.methodA();
obj['methodA']();

obj.inner.methodB();
obj.inner['methodB']();
obj['inner'].methodB();
obj['inner']['methodB']();

/**
 * 메서드 내부에서의 this
 * 
 * - this에는 호출한 주체에 대한 정보가 담긴다.
 * 
 * 어떤 함수를 메서드로 호출한 경우(메서드로 호출했다는 것은 객체가 함수를 호출했다 === 점 표기법 or 대괄호 표기법으로)
 * 해당 함수를 호출한 주체는 객체이므로 해당 객체가 this에 담긴다.(this에는 가르키는 객체가 담긴다.)
 */