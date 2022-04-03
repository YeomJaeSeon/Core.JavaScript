var outer = function(){
    var a = 1;
    var inner = function(){
        return ++a;
    }
    return inner;
}
var outer2 = outer();
console.log(outer2());
console.log(outer2())

/**
 * outer2변수에 outer함수를 실행하였기에, outer에대한 싫애컨텍스트는 9번째 줄 이전에 이미 종료되었다.
 * 
 * 그런데, 콘솔엔 2, 3이 찍힌다. 즉 outer 실행컨텍스트의 LE를 참조하여 a변수에 접근했다는거다.
 * 
 * 아니 이미 죽었어야할 실행컨텍스트에 inner가 어떻게 접근했단 말인가.... 대체 당최 어떻게
 * 콜스택으로 생각해봐도
 * 
 * 1. 전역객체
 * 2. 전역 객체 - outer
 * 3. 전역객체
 * 4. 전역객체 - inner (이떈 이미 outer실행컨텍스트 죽어있따.)
 *  
 * 머야!!!
 * 
 * outer는 inner에의해 사용될수도 있기에, 참조 count가0이아니다. 그러니 GC가 수집하지않아 outer는 종료되지 않은 것이다.
 * 좀더 풀어보자면 이미 outer함수(외부함수)의 실행컨텍스트가 종료되어도, 내부함수 inner가 외부로 전달되었을 때, 언젠간 inner함수가 호출되어 inner 실행컨텍스트가 실행되면, outer 실행컨텍스트의 LE를 inner의 
 * outerEnvironmentReference에 의해 참조될수 있기에, 참조 count가 0 이 아니여서, Garbage Collector에의해 수집대상이 되지 않는다.. 즉,외부함수의 변수 a는 gc에 의해 사라지지않는다.
 * 
 * 이것이 클로져다
 * '외부 함수에서 선언한 지역변수를 참조하는 내부 함수를 외부로 전달할 경우 외부함수의 실행컨텍스트가 종료되어도 내부함수가 참조하는 외부함수의 변수는 사라지지않는다..'
 */