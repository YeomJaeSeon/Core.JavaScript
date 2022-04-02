var func = function(x){
    console.log(this, x);
}
func(1) //함수로 호출, func 가 가르키는 함수 내부의 this는 전역객체를가르킴 (런타임이 nodejs니 global)

var obj = {
    method: func
}
obj.method(2) //메서드로호출, this는 호출한 주체인 객체(obj)를 가르킴

var obj1 = {
    outer: function (){
        console.log(this);
        var innerFunc = function () {
            console.log(this);
        }
        innerFunc(); // (1)

        var obj2 = {
            innerMethod: innerFunc
        }
        obj2.innerMethod() //(2)
        // (1), (2)모두 같은 함수를 호출한건데 this가 다름. 메서드로호출하냐, 함수로 호출하냐의 차이로 this 가 다르다. 전자는 호출한주체인 객체를 this가 가르키고
        //후자는 전역객체(global)을 가르킨다. 이를 보곤 누구는 자스의 설계오류라고한다.
    }
}

obj1.outer()