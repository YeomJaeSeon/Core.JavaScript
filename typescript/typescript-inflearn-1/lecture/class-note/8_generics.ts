// function logText(text){
//     console.log(text)
//     return text;
// }

// logText('hello') // 'hello'
// logText(10) // 10
// logText(true); // true

// function logText<T>(text: T): T{
//     console.log(text);
//     return text;
// }

// logText('하이') // T에는 타입이아닌 '하이'가 들어간다.
// logText<string>('하이') // T에는 string이 들어간다. 타입을 넣었다.


// 지네릭 사용하기전!!

// 파라미터 타입만다르다고 같은기능을 하는 함수를 여러개 만들어야하나?
// function logText(text: string){
//     console.log(text)
//     text.split('').reverse().join('')
//     return text;
// }
// function logNumber(num: number){
//     console.log(num);
//     return num;
// }

// logText('a')
// const num = logNumber(10);

// logText(true) // 타입정의안해서 타입이 any이다.


// 유니온 타입을 이용한 선언방식의 문제
// function logText(text: string | number){
//     console.log(text)
//     return text;
// }

// const a = logText('a');
// // a.split('') //할수가없음 number나 string중하나이기떄문에.

// logText(10)

// 지네릭 사용장점
function logText<T>(text: T): T{
    console.log(text);
    return text;
}


const text = logText<string>('hello')
const text2 = logText('hello')

const str = logText<string>('a'); // 지네릭은 함수를 호출할때, 타입지정가능
str.split('').reverse().join('')
const flag = logText<boolean>(true);
const number = logText<number>(10)
number.toFixed()