var obj = {
    logThis: function(){
        console.log(this);
    },
    logThisLater1: function() {
        setTimeout(this.logThis, 500);
    },
    logThisLater2: function(){
        setTimeout(this.logThis.bind(this), 1000); //bind를 통해서 콜백함수의 this도 명시적으로 지정할수있다.
    }
}
obj.logThisLater1()
obj.logThisLater2()