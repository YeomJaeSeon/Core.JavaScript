var func = function (x){
    console.log(this, x);
}

func(1); // global

var obj = {
    method: func
}

obj.method(2); // obj

//js는 메서드로호출해야 메서드임, 메서드로호출한다는 것은 점 표기법이나, 대괄호 표기법으로 호출한다는 의미.