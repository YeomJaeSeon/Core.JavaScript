function hello(){
    console.log(this);
}

hello() // 함수에서의 this는 해당 함수를 호출한 주체가 지정되어 있지 않기 때문에, 전역 객체가된다.
//지정되지 않은 this는 실행컨텍스트에서  전역객체를 바라본다.. - chapter02