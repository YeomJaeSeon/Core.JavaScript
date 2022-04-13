//함수 파라미터에 타입 정의
function sum2(a: number, b: number){
    return a + b;
}

// 함수 반환값에 타입 정의
function add(): number{
    return 10;
}

sum2(1, 2) 

//함수의 옵셔널 파라미터
function log(a: string, b?: string, c?: string){
}

log('hi', '1')
