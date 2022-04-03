/**
 * 클로져 왜와이? 
 * - 정보은닉
 */
var outer = function () {
    //outer 외부 스코프에선 outer를 실행할 순 있지만 outer내부 정보에 바로 접근 할 순없다.
    var a = 1;
    var inner = function(){
        return ++a;
    }

    return inner; // return을 활용해서 외부 스코프에서 함수 내부의 변수들을 선택적으로 사용해 접근 권한을 부여할 수있다.
}
/**
 * 리턴하는 녀석들은 외부에 공개하고싶은 애들
 * 리턴하지 않는 애들은 외부에 공개하고싶지 않은 애들 -> 이렇게 접근제어를 실현할수있다 in JS
 */

var outer2 = outer();
console.log(outer2());
console.log(outer2());

/**
 * 자바는 정보은닉을 접근 제어자로 쓸수 있었다. 매우 쉽게..
 * 근데 자스는 이런 걸 제공해주지않아.. 대신 클로져를 통해서 정보은닉을 할 수 있다.
 */