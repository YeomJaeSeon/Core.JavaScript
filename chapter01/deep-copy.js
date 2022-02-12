/**
 * 깊은 복사의 경우 primitive타입은 그냥 복사하면되지만
 * 참조 타입인 경우 가장 바깥의 객체 뿐만아니라 중첩객체들의 내부 프로퍼티들도 복사를 해야한다.
 */

//깊은 복사 - 참조타입이면 중첩 객체도 모두 불변 객체로 만드는 과정이다.
var copyObjectDeep = function (target){
    var result = {};
    if(typeof target === 'object' && target !== null){
        for(var prop in target){
            result[prop] = copyObjectDeep(target[prop]) //재귀적으로 중첩된 객체들도 불변 객체로 만들어야 깊은 복사가 된다
        }
    }else{
        result = target
    }

    return result;
}

var obj1 = {
    a: 1,
    b: {
        c: null,
        d: [1, 2]
    }
}

var obj2 = copyObjectDeep(obj1)

obj1.b.c = 100 //깊은 복사가 잘된걸 볼수있다..b 중첩객체도 불변객체가 된걸 볼수있드아..
console.log(obj1)
console.log(obj2)