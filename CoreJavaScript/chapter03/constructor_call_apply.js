function Person(name, gender){
    console.log(this)
    this.name = name;
    this.gender = gender;
    console.log(this)
}

function Student(name, gender, school){
    console.log(this)
    Person.call(this, name, gender);
    this.school = school;
    console.log(this)
}

function Employee(name, gender, company){
    console.log(this)
    Person.apply(this, [name, gender])
    this.company = company;
    console.log(this)
}

var by = new Student('재선', 'male', '한기대')
var jn = new Employee('재선', 'male', '카닥')
//
// console.log(by)
// console.log(jn)