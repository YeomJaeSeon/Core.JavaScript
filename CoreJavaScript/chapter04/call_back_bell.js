// 콜백함수를 익명함수로 전달하는 과정이 반복되어 코드의 들여쓰기가 감당할수 없을 정도로 깊어지는 현상
setTimeout(function (name){
    var coffeeList = name;
    console.log(coffeeList)
    setTimeout(function(name){
        coffeeList += ', ' + name;
        console.log(coffeeList);
        setTimeout(function(name){
            coffeeList += ', ' + name;
            console.log(coffeeList)
            setTimeout(function(name){
                coffeeList += ', ' + name;
                console.log(coffeeList);

            }, 500, '카페라떼')
        }, 500, '카페모카')
    }, 500, '아메리카노')
}, 500, '에스프레소')