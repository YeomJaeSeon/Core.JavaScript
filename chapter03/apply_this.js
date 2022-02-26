var func = function(a, b, c){
    console.log(this, a, b, c);
}

// func(1, 2, 3)
func.apply({x : 1}, [1, 2, 3])

var obj = {
    a: 1,
    method: function(x, y){
        console.log(this.a, x, y);
    }
}

obj.method.apply({a: 10000}, [1, 2])

/**
 * call 과 apply 메서드(메서드다. 함수가 아니다. Function.~으로 점표기법으로 호출하기 때문에)는 실행컨텍스트가 생성될때(함수가 호출될때) this를
 * 바인딩을 런타임에 맞기는게 아닌, 개발자가 직접 '명시적'으로 this를 지정할 수 있다. 두 메서드는 파라미터 타입만 다를뿐.
 */