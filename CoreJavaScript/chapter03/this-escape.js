var obj = {
    outer: function(){
        console.log(this);
        var innerFunc1 = function(){
            console.log(this);
        }
        innerFunc1();

        var self = this; //상위 스코프의 this를 저장해버리는것 -> this 우회하는 방법
        //this가 전역객체를 보는건 좀 아니지 않나? 싶어서 이렇게 우회를 하기도한다. 해당 컨텍스트의  this가 없다면  이전 컨텍스트의 this를 참조하고 그러면 좋을텐데 싶어서 우회를함.
        
        var innerFunc2 = function (){
            console.log(self);
        }
        innerFunc2();
    }
}

obj.outer();