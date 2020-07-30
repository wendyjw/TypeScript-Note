abstract class Person {         // ts中的抽象类，她是提供其他类继承的基类，不能直接被实例化
    public name:string
    constructor(name:string) {
        this.name = name
    }
    abstract eat():void    // 抽象类中的抽象方法不包含具体实现，并且必须在派生类中实现该方法
}

// var P = new Person()     // 报错：抽象类不能被实例

class Cat extends Person{
    constructor(name:string) {
        super(name)
    }
    eat(){                      // 派生类中必须包含eat方法
        alert(`${this.name}`)
    }
    // abstract run():void      // 报错：抽象方法只能放在抽象类中
}