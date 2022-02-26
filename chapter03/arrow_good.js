/*
call, apply, this를 통해 명시적으로 thisBinding될 객체를 지정할 필요가 없는 'arrow function'을 사용하자.
-> 완전 코드가 깔끔해짐

arrow function은 실행컨텍스트 생성시(함수 호출 시) thisBinding하는 과정 자체가 없어서 상위 컨텍스트의 this를 사용한다..  good!
(참고! 실행컨텍스트 생성시 Hoisting(environemtnRecord), scope chain(outerEnvironmentReference - 함수 선언될 당시의 LE참조), thisbinding을 하는데 세번째 를 arrow function에서는 안한다.)
 */
var arrowGood = {
    outer: function (){
        console.log(this);
        var innerFunc = () => {
            console.log(this) //이 함수 호출시 생성되는 실행먼텍스트는 thisBinding자체를 안한다.
        }
        innerFunc()
    }
}
arrowGood.outer()