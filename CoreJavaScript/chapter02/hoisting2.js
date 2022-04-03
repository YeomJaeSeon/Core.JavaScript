//hoisting.js파일의 a 함수가 실행 컨텍스트의 LexicalEnvironment 혹은 VariableEnviront의 environmentRecord가 어떻게 동작하는지에 따라 코드를 재구성해보자!
// 실제론 이렇게 되지않는다. 호이스팅도 가상의 개념이라 식별자를 가장 위로 올리지 않는다!
// 그전에 또 알아야할건 environmentRecord는 식별자의 정보만 수집한다. 현재 컨텍스트의 코드가 실행되기 전에 식별자 정보만 수집하지 해당 변수에 어떤 값을 할당할지는 관심 없다.

// function a(){
//     var x = 1;
//     console.log(x)
//     var x;
//     console.log(x)
//     var x = 2;
//     console.log(x);
// }
//
// a()

// 위 코드를 environmentRecord동작을 이해하기 위한 코드로 변경하면!?

function a(){
    var x;
    var x;
    var x;
    //environmentRecord는 식별자에만 관심이 있다.

    x = 1;
    console.log(x)
    console.log(x)
    x = 2;
    console.log(x)
}

a()

/**
 * 실제 어떤식으로 동작하는지 과정을 살펴보자.
 *
 * 콜스택 []
 * 콜스택 [전역 컨텍스트]
 * a() 호출되면 콜스택 [전역 컨텍스트, a 컨텍스트]
 * a 컨텍스트 의 VariableEnvironment, LexicalEnvironment 의 environmentRecord는 a컨텍스트 관련 코드가 실행되기 전에 식별자 정보를 모두 수집한다.(위에서 부터 순서대로)
 * a컨텍스트 관련 함수 a의 맨위에 호이스팅되어있따.(실제론 호이스팅 안된다!!)
 * var x; 로 변수 공간에 식별자 x 할당되고 데이터 공간의 주소는 비어있따.
 * var x; var x;는 이미 변수공간에 식별자 x가 할당되어있으므로 무시된다.
 * x = 1; 데이터 공간에 1이있는지 확인하고 없으니 비어있는 데이터 공간 메모리에 1을 할당한다.
 * x 변수공간의 주소에 데이터공간을 연결시킨다.
 * x = 2; 데이터 공간에 2가 있는지 확인한다. 없으니 비어있는 데이터 공간 메모리에 2를 할당한다.
 * x 변수공간의 주소를 2 데이터 공간 조로 변경한다.
 */