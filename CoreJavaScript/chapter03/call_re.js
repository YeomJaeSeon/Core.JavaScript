var func = function(a, b, c){
    console.log(this, a, b, c);
}

func(1, 2, 3)
func.call('hello', 1, 2, 3) // 명시적으로 this를 지정해버릐기

var obj = {
    a: 1,
    method: function(x, y){
        console.log(this, x, y);
    }
}
obj.method(2, 3);
obj.method.call({a: 4}, 5, 6);