var report = {
    sum: 0,
    count: 0,
    add: function (){
        var args = Array.prototype.slice.call(arguments);
        args.forEach(function (entry){
            this.sum += entry;
            ++this.count;
        }, this) //두번재 파라미터에 this (report.add로 메서드로 호출하였기에 this는 호출한 주체인 report객체이다.)
    },
    average: function(){
        return this.sum / this.count;
    }
}
report.add(10, 30, 20); //this: report 객체
console.log(report.sum, report.count, report.average());