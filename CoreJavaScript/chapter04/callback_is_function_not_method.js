// 콜백함수는 함수다!? 메서드를 콜백함수로 전달해도 함수로 동작한다.(this가 전역객체이다.)
var obj = {
    vals: [1, 2, 3],
    logValues: function(v, i){
        console.log(this, v, i);
    }
}

obj.logValues(1, 2);
[1, 2, 3].forEach(obj.logValues,) //forEach 가 콜백함수의 제어권을 갖게된다. (호출 시점) 