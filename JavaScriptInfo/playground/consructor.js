function User(name){
    // this = {} 
    this.name = name;
    this.isAdmin = false
    // return this
}

let user = new User('보라')
let noNew = new User('하이')
// console.log(noNew)

console.log(user.name)
console.log(user.isAdmin)

function Admin(){
    console.log(new.target) // 해당함수가 new와함께 호출되었는지 아닌지 new.target으로 알수있음
}

Admin()

new Admin()


//new없이 그냥 함수호출로 생성자함수역할하는 함수만들기
function Student(name){
    if(!new.target){
        return new Student(name)
    }
    this.name = name;
}

let bora = Student('보라') // new 없이 일반함수호출을 생성자함수호출로만들어버뤼기
console.log(bora.name)

function User2(name){
    if(!new.target){
        return new User2(name)
    }
    this.name = name;
}
const user1 = User2('재선')
console.log(user1.name)
const user2 = new User2('재선')
console.log(user2.name)