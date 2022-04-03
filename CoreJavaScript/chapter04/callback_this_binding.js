var obj1 = {
    name: 'obj1',
    func: function(){
        var self = this;
        return function(){
            console.log(self.name)
        }
    }
}

var callback = obj1.func();

setTimeout(callback, 1000);

var obj2 = {
    name: 'obj2',
    func: function(){
        console.log(obj2.name);
    }
}

setTimeout(obj2.func, 1000);