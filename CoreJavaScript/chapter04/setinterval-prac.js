/**
 * 콜배함수란? 다른 코드에 인자로 넘겨준 함수이다.
 * 콜백함수를 인자로 받는 다른코드는 콜백함수를 제어할수있는 제어권을 얻게된다.
 * 
 * 즉, 콜백함수는 제어권과 관련이 깊다.
 * 
 * 결론!
 * - 함수를 직접 내가 실행하는게 아닌, 콜백함수를 전달한 코드가 실행한다.(제어권이 나에게 없고 콜백함수를 인자로 받은 코드에 있다.)
 */

var count = 0;
var timer = global.setInterval(function(){
    console.log(count);
    if(++count > 4) clearInterval(timer);
}, 300) //setInterval인자로 전달한 함수(콜백함수)는 내가 실행하지 않아도 setInterval 이라는 녀석이 실행하네?
// 함수 실행의 제어권이 나에게 없고 다른녀석에게 있다.

console.log(timer)