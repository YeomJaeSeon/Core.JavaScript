function identity<Type>(arg: Type){
    return arg
}

const result1 = identity<string>('hi')
// result1.
const result2 = identity<boolean>(true)
// result2.
const result3 = identity<number>(100) // 함수를 호출하는 시점에 지네릭의 타입을 지정할수있다.
// result3.

const result4 = identity(1000)

let myIdentity: <Type>(arg: Type) => Type = identity
myIdentity('ho')

interface ILengthWise{
    length: number
}

function logText<T extends ILengthWise>(text: T): T{
    console.log(text.length)
    return text
}

logText(10)
logText({length: 0, value: 'hi'})

function getProperty<T, O extends keyof T>(obj: T, key: O){
    return obj[key]
}

let obj = {a: 1, b: 2, c: 3}

getProperty(obj, 'a')
// getProperty(obj, 'z')