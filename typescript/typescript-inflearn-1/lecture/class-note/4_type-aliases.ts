type StringType = string // 단순히 type 키워드는 타입에 별칭(별명)만 주는것이다.

const name1: StringType = '121233'
const name2: string = '1234'

// interface Person1{
//     name: string;
//     age: number
// }

type Person1 = {
    name: string;
    age: number;
    getNumber(): number
}

var jaeseon: Person1 = { // (vscode프리뷰 상태)커서 가져다 대면, type 별칭을 이요하면 내부 프로퍼티의 타입들을 다 볼수있네!
    name: '재선',
    age: 5,
    getNumber(){
        return this.age
    }
}

type Todo = {
    id: string;
    title: string;
    done: boolean
}
function getTodo(todo: Todo){
    return todo
}

type MyType = '염재선'

const me: MyType = '염재선'
interface MyType2{
    name: '염재선'
}

const me2: MyType2 = {
    name: '염재선'
}