// 인터페이스
interface Developer1{
    name: string;
    skill: string;
}
interface Person1{
    name: string;
}

let developer: Developer1;
let person: Person1;
developer = person;
person = developer; // 에러안나. - 타입호환

class CPerson {
    name: string;
}
class CDeveloper{
    name: string;
    skill: string;
}
let developerC: CDeveloper
let personC: CPerson
personC = developerC
developerC = personC

// 함수
var add = function(a: number){

}
var sum = function(a: number, b: number){

}
add = sum;
sum = add;

// 제네릭
interface Empty<T>{


}
var empty1: Empty<string>;
var emtpy2: Empty<number>
empty1 = emtpy2
emtpy2 = empty1

interface NotEmpty<T>{
    data: T;
}
var notEmpty1: NotEmpty<string>
var notEmtpy2: NotEmpty<number>
notEmpty1 = notEmtpy2
notEmtpy2  notEmpty1

interface A{
    name: string;
}
interface B{
    name: string;
}

let a: A;
let b: B;
a = b;
b = a;