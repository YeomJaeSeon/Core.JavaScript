/**
 * 나중에 참조될 수도 있기에, 수집대상이 되지않은 변수는 어떻게 메모리 할당 해제를 할까?
 * 
 * -> GC 참조카운트 0으로 만들면됨. 어떻게 -> 'primitive type'데이터를 해당 변수에 할당하면 된다
 */
var outer = (
    function(){
        var a = 1;
        var inner = function(){
            return ++a;
        }
        return inner
    }
)();
//이때 이미 outer는 콜스택에서 제거되어, 실행컨텍스트 종료되었다. inner은 이아래에서 실행될건데 그래도 outer의 지역변수 a를 사용할수있는데 이건 클로져때문
//클로져: 어떠한 함수의 지역변수를 참조하는 내부함수를 '외부로 전달'했을 때 지역변수는 사라지지않는다. (왜 why? 언젠간 내부함수의 outerEnvironmentReference에 의해 참조될 수도 있기 때문에 사라지징낳아. GC에의해.. 즉 참조카운트가 0이아니야!)
console.log(outer());
console.log(outer())
outer = null // primitive type null을 할당하면 클로져에의해 GC수집대상이 되지않아 메모리 차지하던 녀석을 해제해줄수있다.'
console.log(outer()) // outer is not function (메모리해제함.)

