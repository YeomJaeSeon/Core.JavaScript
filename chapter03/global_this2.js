console.log(this);

console.log(typeof this);

console.log(global === this);

console.log(this === module.exports)

function a(){
    console.log('a', this === exports, this === global)
}

const b = () => {
    console.log('b', this === exports)
}

a();
b();

/**
 * .js파일을 node로 실행하면 전역객체는 module.exports이다.. REPL을 통해 node
 * 를 실행하면 this 는 global이다.
 *
 * 브라우저의 전역객체는 window이구..
 *
 * 노드로 자바스크립트를 실행한다 해도 전역객체가 무조건 'global'아니구나.
 * javascript파일을 이용하면 기본적으로 모듈 스코프가 생겨서 module.exports가 전역객체이구나.
 * */