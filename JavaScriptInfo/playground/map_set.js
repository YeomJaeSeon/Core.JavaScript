let map = new Map();
map.set('1', 'str1');
map.set(1, 'num1');
map.set(true, 'bool1');

console.log(map.get(1));
console.log(map.get('1'));
console.log(map.get(true));
console.log(map.size)
map['hello'] = 'hello world'
console.log(map) //map도 일반 객체처럼 사용할 수 있으나 사용하지 말자.

// 맵은 키로 객체를 허용?
let john = {
    name: 'John',
    age: 26
}

let visitCountMap = new Map();
visitCountMap.set(john, 123);
console.log(visitCountMap)
console.log(visitCountMap.get(john))

let visitCountObj = {};
visitCountObj[john] = 123;
console.log(visitCountObj)
console.log(visitCountObj['[object Object]']) 

const newMap = new Map();
// console.log(newMap.set('korea', '염재선'))
//set메서드는 map자체를 반환 -> map chaining가능

newMap.set('korea', '염재선')
    .set('USA', 'alexander')
    .set('Afreeca', 'umtanga')

console.log(newMap)

let recipeMap = new Map([
    ['cucumber', 500],
    ['tomatoes', 350],
    ['onion',    50]
]);

for(let vegetable of recipeMap.keys()){
    console.log(vegetable)
}
for(let amount of recipeMap.values()){
    console.log(amount)
}
for(let entry of recipeMap.entries()){
    console.log(entry)
}

recipeMap.forEach((value, key, map) =>{
    console.log(`${key}:${value}`)
})

let obj = {
    name: 'yeom',
    age: 5
}
let map2 = new Map(Object.entries(obj))
console.log(map2)

console.log(recipeMap)
const arr = Object.fromEntries(recipeMap);
console.log(arr)