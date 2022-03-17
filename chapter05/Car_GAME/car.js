var car = {
    fuel: Math.ceil(Math.random() * 10 + 10),
    power : Math.ceil(Math.random() * 3 + 2),
    moved: 0,
    run: function(){
        var km = Math.ceil(Math.random() * 6);
        var wasteFuel = km / this.power;
        if(this.fuel < wasteFuel){
            console.log("이동 불가")
            return;
        }
        this.fuel -= wasteFuel
        this.moved += km;
        console.log(`${km}km 이동 (총 ${this.moved}km)`)
    },
}
/**
 * 이 car 오브젝트의 run 프로퍼티를 통해 게임을 하면된다. 그러나 게임 참여자 누구든 car의 프로퍼티에 들어가서 조작할수있다. - 접근제어가 필요하다. -> closure(폐쇄)이용
 */

var createCar = function (){
    //외부로부터 숨길건 return X
    var fuel = Math.ceil(Math.random() * 10 + 10);
    var power = Math.ceil(Math.random() * 3 + 2);
    var moved = 0;

    var publicMembers = {
        get moved(){
            return moved;
        },
        run: function(){
            var km = Math.ceil(Math.random() * 6);
            var wasteFuel = km / power;
            if(fuel < wasteFuel){
                console.log("이동 불가")
                return;
            }
            fuel -= wasteFuel
            moved += km;
            console.log(`${km}km 이동 (총 ${moved}km)`)
        }
    }

    Object.freeze(publicMembers);

    // 외부에 공개할건 return
    return publicMembers
    // return {
    //     get moved(){
    //         return moved;
    //     },
    //     run: function(){
    //         console.log(`fuel: ${fuel}`)
    //         var km = Math.ceil(Math.random() * 6);
    //         var wasteFuel = km / power;
    //         if(fuel < wasteFuel){
    //             console.log("이동 불가")
    //             return;
    //         }
    //         fuel -= wasteFuel
    //         moved += km;
    //         console.log(`${km}km 이동 (총 ${moved}km)`)
    //     }
    // }
}

var improvedCar = createCar();
improvedCar.run() // 이 메서드가 실행 될 땐, createCar실행컨텍스트는 종료되었다. 그런데도 createCar의 변수들에 참조할수있는건 클로져덕. 
improvedCar.run()
improvedCar.run()
improvedCar.run()
improvedCar.run()

console.log('//===================//')
/**
 * 클로져로 정보은닉 할수있구나. js에서
 */

var improvedCar2 = createCar();
improvedCar2.fuel = 1000; //어뷰징 가능.. 접그제어를 클로져로해서 잘 했지만 아직도 어뷰징이가능.
// console.log(improvedCar2.fuel)
improvedCar2.run()