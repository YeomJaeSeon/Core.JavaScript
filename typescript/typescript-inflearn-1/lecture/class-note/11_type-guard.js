function introduce() {
    return {
        name: 'Tony',
        age: 33,
        skill: 'Iron Making'
    };
}
function hello(man) {
    if (man.skill) {
        man.skill;
    }
    else {
        man.age;
    }
    // if(isDeveloper(man)){
    //     man.skill
    // }else{
    //     man.age
    // }
}
var tony = introduce();
console.log(tony.age); // age 프로퍼티 분명잇는데? 없다고 뜨는 이유는 유니온이기에,, 공통된 속성만 접근가능
if (tony.skill) {
    var skill = tony.skill;
    console.log(skill);
}
else if (tony.age) {
    var age = tony.age;
    console.log(age);
}
//타입가드함수
function isDeveloper(target) {
    return target.skill !== undefined;
}
// function isPerson(target: Developer | Person): target is Person{
//     return (target as Person).age !== undefined
// }
if (isDeveloper(tony)) {
    console.log(tony.name);
    console.log(tony.skill);
}
else {
    console.log(tony.name);
    console.log(tony.age);
}
