var obj = {
    methodA: function(){
        console.log(this);
    },
    inner: {
        methodB: function(){
            console.log(this);
        }
    }
}

obj.methodA(); //메서드로 써 호출한 것이다. .표기법으로 함수를 호출하였기에, 메서드 내의 this는 호출한 주체에 대한 정보를 담는데, 메서드는 호출한 객체가 주체이므로 this에는 객체 가 담긴다.
obj['methodA']()

obj.inner.methodB(); // 메서드의 this는 호출한 주체가 담기기 때문에, method()의 호출한 주체는 inner오브젝트이므로  메서드 내부의 this는 inner오브젝트를 가르킨다.(thisBinding시점에 this는 inner오브젝트를 가르킨다.)
obj.inner['methodB']();
obj['inner'].methodB();
obj['inner']['methodB'](); 
