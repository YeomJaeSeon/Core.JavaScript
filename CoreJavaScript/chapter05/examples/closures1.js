function outer(){
    var a = 1;

    return function (){
        return setTimeout(() => {
            console.log(++a) //클로져는 콜백함수내부에서 외부데이터를 사용할때 발생한다.
        }, 2000)
    }
}

var timer = outer()
timer()