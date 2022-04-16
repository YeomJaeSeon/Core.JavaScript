interface User{
    age: number;
    name: string
}

// 변수에 인터페이스 활용
var seho: User = {
    age: 10,
    name: "세호"
}

// 함수에 인터페이스 활용
// 함수 인자에 인터페이스로 타입정의
function getUser(user: User){
    console.log(user)
}

const capt = {
    name: '캡틴',
    age: 100,
    isGood: true // 인터페이스에 정의된 프로퍼티 개수보다 많아도 되네..!?
}

getUser(capt)

// 함수의 스펙(구조)에 인터페이스를 활용

interface sumFunction{
    (a: number, b: number): number
}
var sum: sumFunction;

sum = function(a: number, b: number){
    return a + b;
}

// 아.. 함수의 전체적인 모습도 인터페이스로 정의할수있구나.난 이건 처음알았다.


// 인덱싱
// 배열의 인덱스의 타입과, (인덱스는 당연히 number아닌가?) 원소의 타입도 interface를 이용해 정의할수있다. 이것도 처음알았다.
interface StringArray{
    [index: number]: string
}

var arr: StringArray = ['a', 'b', 'c']
arr[0] = 'table';