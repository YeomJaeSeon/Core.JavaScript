interface Developer {
    name: string;
    skill: string;
}
interface Person {
    name: string
    age: number;
}

function introduce(): Developer | Person{
    return {
        name: 'Tony', 
        age: 33, 
        skill: 'Iron Making'
    }
}

function hello(man: Developer | Person){
    if((man as Developer).skill){
        (man as Developer).skill
    }else{
        (man as Person).age
    }
    // if(isDeveloper(man)){
    //     man.skill
    // }else{
    //     man.age
    // }
}
const tony = introduce();
console.log(tony.age) // age 프로퍼티 분명잇는데? 없다고 뜨는 이유는 유니온이기에,, 공통된 속성만 접근가능

if ((tony as Developer).skill){
    var skill = (tony as Developer).skill
    console.log(skill)
}else if((tony as Person).age){
    var age = (tony as Person).age;
    console.log(age)
}

//타입가드함수
function isDeveloper(target: Developer | Person): target is Developer{
    return(target as Developer).skill !== undefined;
}

// function isPerson(target: Developer | Person): target is Person{
//     return (target as Person).age !== undefined
// }

if(isDeveloper(tony)){
    console.log(tony.name)
    console.log(tony.skill)
}else{
    console.log(tony.name)
    console.log(tony.age)
}