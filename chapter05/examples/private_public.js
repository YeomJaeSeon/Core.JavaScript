//js는 접근제어자 (private, public, protected, default가 없다. 그렇다고 캡슐화가 불가능할까?)
//캡슐화는 왜? - 불필요한 정보를 외부로 노출시키지않아, 변경에 대한 파급효과를 줄일수있다. 

//nono, closure를 통해서 접근권한제어 가능, 공개할녀석들은 return하고, 공개하지않을 녀석들은 함수의 지역변수들로 지정하면된다.

var createCar = function (){
    var fuel = Math.ceil(Math.random() * 10 + 10);
    var power = Math.ceil(Math.random() * 3 + 2);
    var moved = 0; //지역변수들로 설정하자. 이제 외부로 전달할 내부함수가 이 녀석들을 참조할것.

    return {
        get moved (){
            return moved //이러한 지역변수를 참조하는데, 외부함수의 실행컨텍스트가 종료되어도 계속 참조할수있다. - 클로져
        },
        run : function (){
            var km = Math.ceil(Math.random() * 6);
            var wasteFuel = km / power; //클로져
            if(fuel < wasteFuel){ // 클로져
                console.log('이동불가');
                return
            }
            fuel -= wasteFuel // 클로져
            moved += km; // 클로져
            console.log(km + 'km 이동 (총 ' + moved + 'km). 남은 연료: '+ fuel)
        }
    }
}

var car = createCar();
car.run()