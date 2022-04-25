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

// 지네릭 타입 제한
function logTextLength<T>(text: T[]): T[]{
    console.log(text.length)
    text.forEach(function (text) { 
        console.log(text)
    })
    return text
}

logTextLength<string>(['hi', 'abc'])

// 지네릭 타입 제한 2 - 정의된 타입 이용하기
interface LengthType{
    length: number;
}
// T에 들어올 타입은 이미 정의된 인터페이스인 LengthType을 확장한것일것이다. === LengthType인터페이스의 타입들을 최소한 가지고있다.
function logTextLength2<T extends LengthType>(text: T): T{
    text.length;
    return text
}

logTextLength2('a')
// logTextLength2(10) 10에는 length프로퍼티가 없기때문에 린트에러난다.
logTextLength2({length: 10, name: 'yeom', age: 10})


// 지네릭 타입제한3 - keyof
interface ShoppingItem{
    name: string;
    price: number;
    stock: number;
}

function getShoppingItemOption<T extends keyof ShoppingItem>(itemOption: T): T{
    return itemOption
}

// getShoppingItemOption(10);
// getShoppingItemOption<string>('a')

getShoppingItemOption('name')
getShoppingItemOption('price')
getShoppingItemOption('stock')

type Student = {
    name: string;
    age: number;
    grade: number
}
function getName<T extends Student>(student: T): T{
    return student
}
function getKeys<T extends keyof Student>(student: T): T{
    return student
}

getName({name: 'yeom', age: 10, grade: 100})
// getName(true)
getKeys('age')
getKeys('grade')