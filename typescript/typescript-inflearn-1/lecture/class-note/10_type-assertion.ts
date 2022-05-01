// 타입 단언(type assertion)
var a2;
a2 = 20;
a2 = 'a'
var b2 = a2 as string;
// 타입 단언으로 타입스크립트 넌 내말만들어. 내가 지정한 타입이 옳은거야라고 말하는 것이다.

// DOM API 조작
var div = document.querySelector('a')
// div.innerT
if(div){
    div.innerText
}