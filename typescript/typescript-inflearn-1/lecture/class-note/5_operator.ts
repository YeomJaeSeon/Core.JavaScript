// function logMessage(value: any){
//     console.log(value)
// }

// logMessage('hello')
// logMessage(100)

var seho: string | number | boolean
// let bool: boolean;

function logMessage(value: string | number){ // Union Type: 하나의 타입 이상을 사용할수있게 도와줌
    // 특정 타입으로 타입의 범위를 좁혀나가는 과정: **타입 가드*
    if(typeof value === 'number'){
        value.toLocaleString()
    }else if(typeof value === 'string'){
        value.toString()
    }

    throw new TypeError('value must be number or string')
}
logMessage('hello')
logMessage(100)

interface Developer{
    name: string;
    skill: string
}

interface Person{
    name: string;
    age: number;
}

function isDeveloper(arg: any): arg is Developer{
    return arg.skill in arg
}

function askSomeone(someone: Developer | Person){
    someone.name // 유니온 타입을 이용했을 때, 공통된 프로퍼티만 접근할수있다... 이게 유니온타입의 특징
    // someone.age
    // someone.skill 공통된 프로퍼티 이외의 프로퍼티에 접근하고 싶으면 타입가드를 이용해서 타입의 범위를 좁혀나가자!

    if(isDeveloper(someone)){
        someone.name
        someone.skill
    }else{
        someone.name
        someone.age
    }
}

function askSomeone2(someone: Developer & Person){// Developer, Person모든 속성 사용한다. Developer, Person속성 모두 가지고 있는 하낭늬 새로운 타입이 생성되는 너낌인걸?
    someone.age
    someone.name
    someone.skill
}

// var capt: string & number & boolean;


//Union
//Developer
askSomeone({
    name: 'yeom',
    skill: 'backend',
    age: 100
})
//Person
askSomeone({
    name: 'yeom2',
    age: 100
})

//Intersection
//Developer
askSomeone2({
    name: 'yeom',
    skill: 'backend',
    age: 100
})
//Person
askSomeone2({
    name: 'yeom2',
    age: 100,
    skill: 'frontend'
})


let user: number & string & boolean