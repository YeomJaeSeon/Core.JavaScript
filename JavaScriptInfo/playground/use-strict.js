// "use strict"
function func(){
    "use strict" //함수 스코프 내에서도 엄격모드 지정가능 (ES5에서 변경된 기능 활성화)
    const hello = 3
    console.log(hello)
}

func()
// x = 3
 
vv = 3