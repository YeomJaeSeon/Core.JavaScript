var obj1 = {
    name: 'obj1',
    func: function(){
        console.log(this)
    }
}

setTimeout(obj1.func.bind(obj1), 1000); 
//bind메서드를 통해서 콜백함수내의 this를 바인딩 할수있똬.!@!@