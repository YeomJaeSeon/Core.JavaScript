var obj = {
    vals: [1, 2, 3],
    logValues: function(v, i){
        console.log(this, v, i);
    }
}

obj.logValues(1, 2); //메서드로 호출한것이기에 this는 호출한 주체인 obj를 가르킨다.

[4, 5, 6].forEach(obj.logValues, {a: 1}); //명시적으로 this가 가르킬 객체를 두번재 인자에 전달.~
//콜백함수는 함수이다. 메서드로 호출한게 아닌 함수를 전달한 것이기 때문에 두번째 인자에 thisArgs를 전달한게 아니면 전역객체를 바라본다/