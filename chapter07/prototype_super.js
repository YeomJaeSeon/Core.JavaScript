//prototype으로 super 흉내내기 (부모클래스의 생성자 호출하는 super..?)
var extendClass = function (SuperClass, SubClass, subMethods){
    SubClass.prototype = Object.create(SuperClass.prototype)
    SubClass.prototype.constructor = SubClass;
    SubClass.prototype.super = function (propName){
        var self = this;
        if(!propName) return function(){
            SuperClass.apply(self, arguments)
        }
        var prop = SuperClass.prototype[propName]
        if(typeof prop !== 'function') return prop;
        return function(){
            return prop.apply(self, arguments)
        }
    }
    if(subMethods){
        for(var method in subMethods){
            SubClass.prototype[method] = subMethods[method]
        }
    }
    Object.freeze(SubClass.prototype);
    return SubClass;
}

var Rectangle = function (width, height){
    this.width = width;
    this.height = height;
}

Rectangle.prototype.getArea = function(){
    return this.width * this.height;
}

var Square = extendClass(
    Rectangle,
    function(width){
        this.super()(width, width);
    },{
        getArea: function(){
            console.log('size is : ', this.super('getArea')());
        }
    }
)

var sq = new Square(10);
sq.getArea()
console.log(sq.super('getArea')())

//prototype을 이용한 상위클래스의 메서드에 추가적인 작업하기.. super를 prototype을 이용해서 구현했다.
// 솔직히 어렵다. 모든 코드를 이해하는건 효율적이지 못하는것같다.