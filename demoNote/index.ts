class Person {
    name:string;
    constructor (n:string) {
        this.name = n
    }
    getName():void {
        alert(this.name)
    }
}
var person1 = new Person('wenjwu')
person1.getName() // 输出“wenjwu”

class Teacher extends Person {
    constructor (name: string) {
        super (name)
    }
    work():void {
        alert(`${this.name} is working`)
    }
}
var teacher1 = new Teacher('Lily')
teacher1.work()