var fruits = ['apple', 'banana', 'peach']
var $ul = document.createElement('ul')

// var alertFruit = function (fruit){
//     alert(`your choice is ${fruit}`)
// }

var alertFruitBuilder = function(fruit){
    return function(){ // 클로져 존재할까 ㅇㅇ 존재한다. 언젠가 클릭을 하면 이 함수가 실행 될 것이고, 이 때 alertFruitBuilder의 실행컨텍스트는 종료되어 있지만, 리턴하는 익명함수의 outerEnvironmentreference에 의해 fruit을 참조할수있다.
        alert('your choice is ' + fruit)
    }
}
fruits.forEach(function(fruit){
    var $li = document.createElement('li')
    $li.innerText = fruit; // 바로 위 스코프의 변수긴한데 클로져일까? ㄴㄴ '내부 함수가 외부로 전달된 경우가아니다', 전역컨텍스트는 살아있다.
    $li.addEventListener('click', alertFruitBuilder(fruit))
    $ul.appendChild($li);
})

document.body.appendChild($ul)

/**
 * 콜백함수 내부에서 외부 데이터를 사용할대 이렇게 클로져를 이용하는군하... 
 */