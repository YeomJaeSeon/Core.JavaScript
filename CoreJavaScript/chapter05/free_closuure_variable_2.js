(function (){
    var a = 0;

    var intervalId = null;
    var inner = function(){
        if(++a >= 10){
            clearInterval(intervalId);
            inner = null; //메모리 해제.. 클로져에의해 참조카운트 0이 되지않아 GC 수집대상이 아니였는데 primitive type인 null을 할당해서 메모리해제.!
        }
        console.log(a);
    }

    intervalId = setInterval(inner, 1000);
})()