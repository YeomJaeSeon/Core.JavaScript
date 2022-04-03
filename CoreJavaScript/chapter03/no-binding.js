// 바인딩하지 않는 함수
var obj = {
    outer: function(){
        console.log(this);
        var innerFunc = () => {
            console.log(this); //화살표함수에서는 실행컨텍스트가 생성될때 this를 바인딩하지 않으닌까(= this가 가르키는 객체를 설정하지 않으닌까 바로 위스코프의 this를 사용하게된다.)
            //아애 this에 객체를 넣는 과정을 빼버림
        }
        innerFunc();
    }
}

obj.outer();

/**
 * this가 전역객체를 바라보는 문제를 해결하기 위해 ES6 부터는 this를 바인딩하지 않는 함수를 만들어버림
 * 
 * () => {} arrow function 은 실행컨텍스트가 생성 될 때, thisBinding하는 작업을 아애 하지않아버림
 * 그래서 상위 스코프의 this를 그대로 쓸수있다. -> 이렇게되면 함수의 this가 전역객체를 바라보는 일은 없겠다.
 */