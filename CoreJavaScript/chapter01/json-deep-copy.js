var copyObjectDeepViaJson = function (target){
    return JSON.parse(JSON.stringify(target));
}


var obj = {
    a: 1,
    b: {
        c: null,
        d: [1, 2],
        func1: function (){console.log(3)}
    },
    func2: function (){console.log(4);}
}

var obj2 = copyObjectDeepViaJson(obj);

obj2.a = 3;
obj2.b.c = 100
obj2.b.d[0] = 4000;
obj2.b.func1 = function(){console.log('deep copy')}

console.log(obj)
obj.b.func1()
console.log(obj2)
obj2.b.func1();