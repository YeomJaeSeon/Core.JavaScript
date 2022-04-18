const obj = {
    "like birds": true
}

const keyValue = 'like birds'
console.log(obj[keyValue])

obj[1 + 2 + 3] = 'hello'
console.log(obj)

console.log(obj['6'])
// console.log(obj.6)
const sum = 10 + 200
const newObj = {
    [sum]: '결과'
}
console.log(newObj)
console.log(newObj[sum])

const crazyOj = {
    return: 'hi',
    const: 2,
    for: 'for',
    1: 1
}
console.log(crazyOj)
Object.keys(crazyOj).forEach(value => {
    console.log(value)
    console.log(typeof value)
})

const obj2 = {
    1: 'hello'
}
console.log(obj2)
console.log(obj2['1'])

const newUser = {}
console.log(newUser.name)

if("1" in obj2){
    console.log('1은 있는 프로퍼티 입니다.')
}

for(let key in crazyOj){
    console.log(key)
}

const user = {
    name: 'yeom',
    age: 1,
    isMale: true
}

for(let key in user){
    console.log(key) //name age isMale
    console.log(user[key])
}