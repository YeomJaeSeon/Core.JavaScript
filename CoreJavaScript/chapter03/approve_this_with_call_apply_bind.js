var problem = {
    outer: function(){
        console.log(this);
        var innerFunc = function(){
            console.log(this);
        }
        innerFunc() //이 함수, 이 실행 컨텍스트의 thisBinding은 전역객체가 되는 문제가 있었따.
    }
}

console.log('//== problem == //')
problem.outer()
console.log()

//이렇게 함수의 this가 전역객체를 바라보는 문제때문에, self나 arrowfunction을 사용했다.

//solve 1 self라는 변수 하나 만들기

var solve1 = {
    outer: function(){
        console.log(this);
        var self = this;
        var innerFunc = function(){
            console.log(self);
        }
        innerFunc();
    }
}

console.log('// == self 라는 임의의 변수이용해서 해당 변수에 상위 컨텍스트의 this 담기 == //')
solve1.outer();
console.log()

var solve2 = {
    outer: function(){
        console.log(this);
        var innerFunc = () => {
            console.log(this);
        }
        innerFunc()
    }
}

console.log('// == this binding자체를 안하는 arrow function을 이용해 전역객체를 thisbinding하는 문제 해결하기 == //')
solve2.outer()
console.log()

var solve3 = {
    outer: function(){
        console.log(this);
        var innerFunc = function (){
            console.log(this);
        }
        innerFunc.apply(this);
        innerFunc.call(this)
    }
}
console.log('// == call이나 apply를 이용해 this 명시적으로 상위컨텍스트의 this를 바인딩 해버리기 == //')
solve3.outer()
console.log()

var solve4 = {
    outer: function (){
        console.log(this);
        var innerFunc = function(){
            console.log(this);
        }.bind(this);

        innerFunc();
        console.log(innerFunc.name)
    }
}
console.log('// == bind메서드를 통해서 명시적으로 상위컨테스트의 this를 바인딩 해버리기')
solve4.outer()
console.log()