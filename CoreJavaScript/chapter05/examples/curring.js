//커링하수: 여러개ㅡ이 인자를 받는 함수를 하나의 인자만 받는 함수로 나눠, 순차적으로 호출될수있게 체인형형태로 구성한것. (리덕스에서 사용한 경험이 있다..)
//마지막에  핳ㄴ번에 하나의 인자만 전달하고, 마지막 인자를 전달하기 전까지 호출하지않는다.

// var curry = function(func){
//     return function(a){
//         return function(b){
//             return func(a, b);
//         }
//     }
// }

//es6 arrow function사용
var curry = func => a => b => func(a, b)

var getMaxWith10 = curry(Math.max)(10) // 이때는 함수가 호출되지 않는다. 마지막 인자를 전달하지 않았기에ㅣ.. 이게 클로져를 사용하는 거다. 
console.log(getMaxWith10(8)) //이때 함수가 호출되낟.
console.log(getMaxWith10(25)) // 이때도 함수가 호출됨. 

