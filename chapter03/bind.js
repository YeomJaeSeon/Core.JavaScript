var func = function(a, b, c, d){
    console.log(this, a, b, c, d);
}

func(1, 2, 3, 4);

var bindFunc1 = func.bind({x: 1}); //bind메서드는 바로 함수를 반환하는 것에서 call, apply와 다르다. 그러나 명시적으로 this를 바인딩해주는 것은 같다.
bindFunc1(1, 2, 3, 4);

var bindFunc2 = func.bind({x: 1}, 4, 5); //공통
bindFunc2(1, 2); //부분
bindFunc2(3, 4); //부분
//bind메서드는 이렇게 공통 / 부분을 나눌수있다.