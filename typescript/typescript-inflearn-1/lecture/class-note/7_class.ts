class TPerson{
    protected hello: string
    private name: string;
    public age: number; //타입스크립트는 멤버의 타입 지정해줘야한다.
    readonly log: string;
    // 타입스크립트에선 private public도 정의해준다.
    constructor(name: string, age: number){
        this.name = name;
        this.age = age;
    }
}

const p = new TPerson('염재선', 5)