var func = function(x){
    console.log(this, x);
}

func(1);
console.log(obj);
var obj = {
    method: func
}

obj.method(2); //객체의 메서드로 호출될 떄만 자바스크립 트는 메서드로 인식한다. 무조건 객체의 프로퍼티에 함수를 할당했다해서 메서드가 아니다.
///js에서는 객체의 메서드로 호출될 때만 메서드로 인식!

