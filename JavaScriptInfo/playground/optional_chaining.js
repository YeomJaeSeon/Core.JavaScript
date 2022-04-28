let user = {}
// console.log(user.address.street)

// 그래서  &&를 이용, -> false인것 반환
console.log(user && user.address && user.address.street)

console.log(user?.address?.street)

let user2 = null;
// user2 = 'hello'
console.log(user2?.address)
console.log(user2?.address.street)

console.log(user.address?.street) // 적절함
// 옵셔널 체이닝은 존재하지 않아도 괜찮은 대상에만 사용해야 한다.
//user는 무조건 존재하고, address는 존재하징낳을수있기에 이것은 좋은 옵셔널 체이닝

let user3 = null;
console.log('에러 발생하기 직전임')
// console.log(user3.hello)
let x = 0;
user3?.sayHi(x++);
console.log(x)

let user4 = {
    admin(){ // 메서드 단축구문
        console.log("관리자 계정입니다.")
    }
}

let user5 = {};

user4.admin?.()
user5.admin?.() // admin없음 단락평가로 함수 호출되지 않는다

let user6 = {
    firstName: 'Violet'
}

let user7 = null;

let key = "firstName";
console.log(user6?.[key])
console.log(user7?.[key])


console.log('end')

const userr = null;
let x5 = 0;
userr?.sayHi(x5++); //단락평가
console.log(x5)