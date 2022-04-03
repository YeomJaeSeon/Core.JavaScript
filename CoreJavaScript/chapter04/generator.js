// 비동기를 동기적으로 표현하는 Promise이외의 다른 방법 -> Generator
var addCoffee = function(prevName, name){
    setTimeout(function(){
        coffeeMaker.next(prevName ? prevName + ', ' + name : name);
    }, 500)
}

var coffeeGenerator = function* (){ // *붙은 함수가 제네레이터함수.
    var espresso = yield addCoffee('', '에스프레소');
    console.log(espresso);
    var americano = yield addCoffee(espresso, '아메리카노')
    console.log(americano);
    var mocha = yield addCoffee(americano, '카페모카');
    console.log(mocha);
    var latte = yield addCoffee(mocha, '카페라떼')
    console.log(latte)
}

var coffeeMaker = coffeeGenerator();
coffeeMaker.next();