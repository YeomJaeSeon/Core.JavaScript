//environmentRecord를 통해 코드가 실행되기전 식별자 수집하는 과정을 호이스팅으로 살펴보자(실제로 위로올라가는건 아님에 주의하자!)
//전역 실행 컨텍스트의 environmentRecord에 의해 어떻게 식별자를 수집하는지 알기 위해 만든 파일!
var sum = function sum(a, b){
    return a + b;
} // 함수는 전체다 호이스팅
var multiply; // 변수는 식별자만 호이스팅!

console.log(sum(1, 2));
console.log(multiply(3, 4));

multiply = function(a, b){
    return a * b;
}

/**
 * environmentRecord에 의해 해당 컨텍스트의 수집되는 식별자 정보는
 * 변수는 식별자만
 * 함수는 전체다!
 * 
 * -> 해당 컨텍스트 맨 위로 올라가는 호이스팅으로 생각해도 무방하니 호이스팅이라고 하는것이다!
 */

//이렇게 함수선언문과 함수 표현식은 차이를 보인다...

/**
 * 결론! : 함수표현식은 함수도 하나의 값으로 취급할수있기에 다른 변수에 할당할수있다..!@!@
 */