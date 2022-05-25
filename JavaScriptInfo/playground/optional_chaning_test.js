const user = {
    address:{
        name: '서울'
    },
    name: '염재선',
    age: 27
}

console.log(user.address.name.specific?.value) // 앞의 대상이 undefined null 이면 평가 멈추고 undefined반환


let jaeseon = {}

console.log(jaeseon.address?.name) // 없어도 되는 대상에만 옵셔널 체이닝을 붙여야지 꼭 있어야하는 대상에 붙이면 디버깅이 어려워진다.
console.log(jaeseon?.address?.name) // 이렇게 남발하면 안된다.

// 단락평가
let x = 0;
let hello = null;
hello?.sayHi(x++); // hello가 null이라 평가를 멈추기 때문에 x++은 실행되지 않는다.
console.log(x)

hello = {
    name:'hellop'
}
// hello?.sayH(x++)
// console.log(x)