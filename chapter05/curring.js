// 커링함수는 여러개의 인자를 받는 함수를 하나의 인자만 받는 함수로 나눠 순차적으로 호출될 수 있게 체인형태로 구성한것.. 복잡하네
// 별게 다있네 자스는

var curry = function(func){ //1
    // console.log(func)
    return function(a){ // 2
        // console.log(a)
        return function(b){ //3
            // console.log(b)
            return func(a, b);
        }
    }
}

var getMaxWith10 = curry(Math.max)(10);
console.log(getMaxWith10(8)) //이때, 1, 2는 실행컨텍스트 종료디ㅗ었는데도 3실행될때 1, 2의 지역변수 참조할수있지.. - > 클로져
console.log(getMaxWith10(25))

var getMinWith10 = curry(Math.min)(10);
console.log(getMinWith10(8))
console.log(getMinWith10(25))

/**
 * 커링함수는 클로져 덕분에 사용할수있다.
 */

var curry2 = function(func){
    return function(a){
        return function(b){
            return function(c){
                return function(d){
                    return function(e){
                        return func(a, b, c, d, e)
                    }
                }
            }
        }
    }
}

var getMax = curry2(Math.max)
console.log(getMax(1)(2)(3)(4)(5)) // 완전신기하다 ㅋㅋ

//ES6 (es2015)부턴 arrow function사용가능
var curry3 = func => a => b => c => d => e => func(a, b, c, d, e)
var getMax = curry3(Math.max)
console.log(getMax(1)(2)(3)(4)(5))

/**
 * 클로져덕에 사용할수있는 커링은 언제사용하나?
 * (왜 클로져덕? 이미 종료된 실행컨텍스트의 지역변수를 외부로전달된 함수가 참조할수있으닌까..)
 * 1. 지연실행(함수형프로그래밍) - 마지막인자가 올떄까지 함수실행을 미루는 것
 * 2. 프로젝트내에서 자주 사용되는 함수의 매개변수가 항상 비슷하고 일부만 바뀌는 경우
 */

var getInformation =function(func){//1
    return  function(baseUrl){//2
        return function (path){//3
            return function(id){//4
                return func(baseUrl, path + '/' + id);
            }
        }
    }
}

var arrgowGetInformationCurryingFunc = func => baseUrl => path => id => func(baseUrl, path, '/', id)

var fetchWithBaseURL = getInformation(console.log)('ec2.amazon-ec2.com')

//이렇게 마지막 인자 들어올떄까지 함수 실행을 미루는 괜찬흥ㄴ 커링함수
fetchWithBaseURL('/hello')(2) //이때 1, 2의 실행컨텍스트 종료되어서 GC에읳 ㅐ분명 수집되어야하는데.. 안되고 func, baseUrl사용할수있지? 이건 클로져 현상이다. 다시 클로져란 함수 내부의 지역변수를 참조하는 내부 함수가 외부로 전달될때, 지역변수가 사라지지않는 함수형프로그래밍에서 자주 나타나는 현상(자스만의 현상이아니기에 EcMA script에 클로져는 설명이 안되어있다!)
fetchWithBaseURL('/users')(2)
fetchWithBaseURL('/items')(5) 

//사용해보니 어렵지않고 괜찮네 신기하다 