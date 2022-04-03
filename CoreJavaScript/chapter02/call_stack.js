var a = 1;
function outer(){
    function inner(){
        console.log(a);
        var a = 3;
    }
    inner();
    console.log(a)
}
outer()
console.log(a)

/**
 * 실행 컨텍스트 (execution context) : 실행할 코드에 제공할 환경 정보를 모아 놓은 객체!
 * - 실행 컨텍스트를 구성하는 것은 '함수를 호출하면 된다'
 *
 * 콜스택에 execution context가 담기는 순서
 *
 * 최초에 콜스택엔 아무것도 있지 않음 []
 * 전역 컨텍스트가 콜스택에 쌓임 [전역 컨텍스트] <- 배열을 콜스택이라고 생각
 * 10번째줄 outer()에서 outer에 대한 환경정보를 수집한 컨텍스트 객체를 콜스택에 담는다. 전역컨텍스트 관련 코드 멈춤, outer 컨텍스트 관련 코드 실행 [전역 컨텍스트, outer 컨텍스트]
 * 7번째 줄 inner()에서 inner에 대한 환경정보를 수집한 컨텍스트 객체를 콜스택에 담는다. outer 컨텍스트 관련 코드 멈춤, inner 컨텍스트 관련 코드 실행[전역 컨텍스트, outer 컨텍스트, inner 컨텍스트]
 * inner함수 모두 끝나면 inner함수 관련 환경 정보를 가지고 있는 컨텍스트 콜스택에서 pop, outer 관련 컨텍스트 코드 실행 [전역 컨텍스트, outer 컨텍스트]
 * outer 끝나면 outer함수 관련 실행컨텍스트 콜스택에서 pop, 전역컨텍스트 실행 [전역 컨텍스트]
 * 실행할 코드 없으면 콜스택에서 전역 컨텍스트도 pop []
 */