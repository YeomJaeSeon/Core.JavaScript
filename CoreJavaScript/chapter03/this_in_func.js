// 함수가 호출될때 실행컨텍스트가 생성된다.
// 실행컨텍스트가 생성되면 호이스팅(environmentRecord), 스코프 체인(outerEnvironmentReference), thisBinding이 설정이된다.
// 호이스팅에 의해 실행컨텍스트의 식별자 정보가 모아지고, outerEnvironmentReference에 의해 해당 함수가 선언된 시점의 LexicalEnvironemt를 참조하기에 스코프 체인이 생성되고, thisBinding에 의해 this가 가르키는 객체가 저장이 된다.

/**
 * 함수 vs 메서드 in JavaScript
 * 
 * 무조건 객체의 프로퍼티에 함수를 할당 했다고 해서 메서드인가? -> 0/x 반은 맞고 반은 틀림 자스에서는 메서드로 호출해야하 메서드이다. ? 뭔말?
 * 
 * -> 점 표기법이라던가 대괄호 표기법으로 함수를 호출해야 메서드로 인식된다.
 */

function outer(){
    function func(){
        console.log(this);
    }
    var inner = {
        innerFunc: func
    }

    inner.innerFunc() //메서드를 호출 -> 호출한 주체가 this에 저장이 되는데, 객체가 호출한 주체이므로 inner object가 this에 저장이 된다.
    func(); //함수를 호출 -> 호출한 주체가 this에 저장이되는데, 호출한 주체가 없기에 전역객체를 가르킨다.
}
outer();

/**
 * 메서드내부의 this
 * 
 * 메서드 내부의 this는 객체를 가르킨다. (자신을 호출한 주체)
 */

var obj = {
    func: function(){
        console.log(this);
    }
}

obj.func();
obj['func'](); //점표기법이나 대괄호 표기법으로 호출해야 메서드를 호출한것이므로 이렇게해야 this는 객체를 가르ㅍ킨다.

/**
 * 함수 내부의 this
 * this는 호출한 주체를 가르키는데 함수는 호출한 주체가 없다. 그래서 바인딩되지않은 this는 전역객체를 가르키기에 전역객체가 this에 들어간다.
 * 
 * node면 global, 브라우저면 window
 */
function func1(){
    console.log(this);
}

func1();

/**
 * 메서드 내부의 함수 this
 * 
 * 복잡한건 생각할 필요없고 메서드로 호출되었읕면 this는 객체를 가르킨다.
 * 함수로 호출되었으면 this는 전역객체를 가르킨다.
 */
 

function subFunc(){
    console.log(this);
}
var complexObj = {
    func: subFunc,
}

console.log('메서드로 호출 ---- this는 호출한 주체인 객체를 가르킨다.')
complexObj.func();


console.log('함수로 호출 ---- this는 전역객체를 가르킨다.')
subFunc();

/**
 * this바인딩하지 않는 함수
 * 
 * 함수의 this가 무조건 전역객체를 가르키는건 이상하다. this는 인스턴스를 가르켜야할거가튼데,,, 
 * 
 * 이런문제점을 해소하기위해 실행 컨텍스트가 생성될때(함수가 호출될 때) thisBinding을 하지 않는 함수를 만들엇따.
 */

console.log('//======================== arrow function ==================//')
var arrTest = {
    outer: function(){
        console.log(this);
        var innerFunc = () => {
            console.log(this); // innerFunc의 실행컨텍스트가 생성 될 때, thisBinding을 하지않는다. 상위 스코프의 this를 사용한다.
        }

        innerFunc();
    }
}

arrTest.outer()