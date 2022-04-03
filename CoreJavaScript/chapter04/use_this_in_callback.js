/**
 * 콜백함수는 함수이다.
 * 
 * this가 전역객체를 바라봐버리는 문제!
 */
var obj = {
    name: 'obj',
    func: function(){
        console.log(this.name);
    }
}

var callback = obj.func;
setTimeout(callback, 1000)

/**
 * 1. 콜백에서 this를 사용하는 원초적인 방법
 * -> 다른 변수에 this를 담아버리기
 */

var obj1 = {
    name : 'obj1',
    func: function(){
        var self = this;
        return function(){
            console.log(self.name)
        }
    }
}

var callback1 = obj1.func();
setTimeout(callback1, 1000)

/**
 * 2. 에라 ~ 콜백내에서 this 못쓰겠다.
 * -> this 콜백함수내에선 안써버리기!
 * 
 * -> 
 */

var obj2 = {
    name: 'obj2',
    func: function(){
        console.log(obj2.name);
    }
}

var callback2 = obj2.func;
setTimeout(callback2, 1000)

/**
 * 3. bind를써서 깔끔하게 콜백내에서 this 사용하기
 * -> 가장 굿!
 */

var obj1 = {
    name: 'obj1',
    func: function(){
        console.log(this.name);
    }
}

setTimeout(obj1.func.bind(obj1), 1000) //bind는 thisBinding하고있는 함수를 리턴한다.

var obj2 = {name: 'obj2'}
setTimeout(obj1.func.bind(obj2), 1500)


