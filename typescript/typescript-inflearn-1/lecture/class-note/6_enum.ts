enum Shoes{
    Nike = '나이키',
    Adidas = '아디다스',
} // ** 별도의 값을 지정하지않으면 number로 취급
// 문자열 지정하면 string으로 취급

var myShoes = Shoes.Nike
console.log(myShoes)
console.log(typeof myShoes) // '나이키'

enum Answer {
    Yes = 'Yes',
    No = 'No'
}
// 예제
function askQuestion(answer: Answer){
    if(answer === Answer.Yes){
        console.log('정답입니다')
    }else if(answer === Answer.No){
        console.log('오답입니다')
    }
}

askQuestion(Answer.Yes)
// askQuestion('Yes')
//이것만으론 이넘을 사용하는 이유론 좀 부족한듯, 파라미터의 타입을 answer: 'Yes' | 'No'로 유니온 을이용해도 되잖아 
//굳이 이넘써야해?
// 내가볼땐, 문장열하드코딩보단, 이넘 상수로 정의하는것이 재사용성이 좋고, 변경에 유리하기 때문인거같아.