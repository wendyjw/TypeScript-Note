#### 1. 环境搭建
1. tsc --init
2. 修改outDir: './js'
3. 修改 VsCode 自动编译 监视配置： terminal-> run task -> typescript -> watch

#### 2. typeScript中的数据类型及写法
boolean, number, string, Array, null, undefined,
元组类型，枚举类型, 任意类型any, 其它类型，void类型，  never类型
1. var str:string = 'hello world'

2. 数组定义：
    1）var arr1:string[] = ["js", "php","c"] // 数组中的元素只能是Strig类型
    2）var arr2:Array<string> = ["js", "php","c"] // 数组中的元素只能是Strig类型
    3) var arr3:any[] = [123,'hello',true] // any类型，元素类型均可

3. 元组类型tuple, 属于数组的一种，分别定义数组中每个元素的类型
   var arr:[number, string, boolean] = [123,"hello",false] // 值必须与定义时的类型相对应

4. 枚举类型enum
   1) enum Flag {success=1, error=0}
      var a:Flag = Flag.success // 变量a = 1
   2) enum Color {red, green, white} // 未复制
      var b:Color = Color.green   
      <!-- 类型中没有复制，则默认值位索引值 -->
      console.log(b) // 1
   3）enum Color {red, green = 5, white} // 部分赋值
      var c:Color = Color.red 
      var d:Color = Color.green
      var e:Color = Color.white
      console.log(c) // 0, 索引值
      console.log(d) // 5, 定义中的值
      console.log(e) // 6，在前一个值的基础上递增

5.  var num:any =  123
    num = 'hello' // 变化值类型不会报错    
    使用场景：
    var box:any = document.getElementById('box')
    box.style.color = 'red' // 不会有警告

6. null 和 undefined ,属于其它类型（never）
    1)一个元素没有赋值，就是undefine
      var a:number
      var b:undefined
      console.log(a) // 输出undefined，且报错
      console.log(b) // 输出undefined，但不报错

    2)一个元素可能存在多种类型
      var num: number | null | undefined
      console.log(num)  // 输出undefined,且不报错
      num = 123 // 输出123
      num = null // 输出null

7. void类型：方法没有返回任何类型

    1) 如果方法没有返回值
    正确写法：
    function run():void {
        console.log('hello wolrd')
    }

    错误写法：
    function run():number {
        console.log('hello wolrd')
    }

    错误写法：
    function run():undefined {
        console.log('hello wolrd')
    }

    2) 如果方法有返回值
    正确写法：需要有number类型返回值
    function run():number {
        return 123
    }
     错误写法：
    function run():number {
        console.log('hello wolrd')
    }

8. never类型： 是其它类型(包括null 和undefined)类型的子类型，代表不会出现的值
   声明never类型的变量只能赋值为never类型

   var a:undefined
   a = undefined //只能赋值undefined
   var b:null
   b = null //只能赋值null

#### 3. 函数定义

##### 3.1 方法定义写法
    1)函数声明写法

        // 同时指定参数类型和返回值类型
        function getInfo(name: string, age:number):string {
            return `name is ${name}, age is ${age}`
        }
        getInfo('wnejwu', 28)

    2）匿名函数写法

        var getInfo2=function(name: string, age: number):string{
            return `name is ${name}, age is ${age}`
        }   
        getInfo('wnejwu', 28)

    3)没有返回值的方法

        function getInfo(name: string, age:number):void {
            console.log(`name is ${name}, age is ${age}`) 
        }
        getInfo('wnejwu', 28)


##### 3.2 方法可选参数

    function getInfo(name:string, age?:number):string{
        if (age) {
            return `name is ${name}, age is ${age}`
        } else {
            return `name is ${name}, age is unknow`
        }
    }
     getInfo('wenjwu') // age可传参或不传参，都不会报错， name is wenjwu, age is unknow
     getInfo('wenjwu',26) // name is wenjwu, age is 26

    注意：可选参数必须配置到参数的最后

##### 3.3 方法默认参数    

    function getInfo(name:string, age:number=20):string{
        if (age) {
            return `name is ${name}, age is ${age}`
        } else {
            return `name is ${name}, age is unknow`
        }
    }
     getInfo('wenjwu') // age可传参或不传参，都不会报错,有默认值20， name is wenjwu, age is 20
     getInfo('wenjwu',26) // name is wenjwu, age is 26

     注意：默认参数配置位置没有规定


##### 3.4 方法剩余参数 

 使用三点运算符实现

    1) 写法1：将传入参数以数组result展开
    function getSum (...result:number[]):number {
        var sum = 0
        for (let i = 0; i < result.length; i++) {
            sum += result[i]
        }
        return sum
    }
    getSum([1,2,3,4]) // sum 值为 10, 此时result = [1,2,3,4]

    2）写法2： 传入参数分别保存在a,b,result中

    function getSum(a:number, b:number, ...result:number[]):number {
        var sum = a + b
        for (let i = 0; i < result.length; i++) {
            sum += result[i]
        }
        return sum
    }
     getSum([1,2,3,4]) // 此时a = 1, b = 2, result = [3,4]

##### 3.5 ts中方法的重载

    function getInfo(name:string):string; //  没有方法体
    function getInfo(age:number):string; //  没有方法体
    function getInfo(str:any):any {
        if (type of str === 'string) {
            return `My name is ${str}`
        } else {
            return `My age is ${str}`
        }
    }

    getInfo('wenjwu') // 正常运行
    getInfo(26)      // 正常运行
    getInfo(true)   // 报错

#### 4. 类和继承

##### 4.1 Es5中使用方法

    构造函数
    function Person () {
        this.name = 'person'
        this.age = 12
    }

    Person.prototype.getInfo = function () {
        alert('Run getInfo')
    }

    <!-- 创建静态方法 -->
    Person.getStatic = function () {
        alert('I am a static function')
    }

    可以直接使用Person.getStatic()调用静态方法

    实例对象
    var person1 = new Person()

    使用person1.getInfo()调用实例方法

    继承：

    1. 原型链继承
    function Teacher () {

    }
    Teacher.prototype = new Person ()
    var teacher1 = new Teacher()
    teacher1.name         // 输出“person”
    teacher1.getInfo     // 输出“Run getInfo”

    注意：1. 继承构造函数中的属性和方法，也可以继承原型链中属性和方法
         2. 实例化子类没法给父类传参

    2. 对象冒充 
    function Teacher () {
        Person.call(this)
    }
    var teacher2 = new Teacher()
    teacher2.name      // 输出“person”
    teacher2.getInfo() // 报错
    注意：对象冒充可以继承构造函数中的属性和方法，但是不能继承原型链中属性和方法
    
    3. 原型链 + 对象冒充 组合继承

    function Person (name, age) {
        this.name = name
        this.age = age
        this.run = function(){
            alert('run in person')
        }
    }

    function Teacher (name, age) {
        Person.call(this, name, age)
    }

    Teacher.prototype = Object.create(Person.prototype)
    Teacher.prototype.constrctor = Teacher
    var teacher3 = new Teacher('wenjwu', 26)
    teacher3.name         // 输出“wenjwu”
    teacher3.run         // 输出“run in person”

##### 4.2 ts 中定义类

    class Person {
        name:string;                // 属性,省略了public关键词,后续可以用this.name访问
        constructor (n:string) {    // 构造函数，在实例化类的时候触发
            this.name = n;
        }
        getName():void {
            alert(this.name)
        }
    }
    var person1 = new Person('wenjwu')
    person1.getName() // 输出“wenjwu”

    转义成es5
    var Person = /** @class */ (function () {
        function Person(n) {
            this.name = n;
        }
        Person.prototype.getName = function () {
            alert(this.name);
        };
        return Person;
    }());
    var person1 = new Person('wenjwu');
    person1.getName(); // 输出“wenjwu”


##### 4.3 ts 中继承

    class Person {
        name:string;                
        constructor (n:string) {  
            this.name = n;
        }
        getName():void {
            alert(this.name)
        }
    }

    Teacher 继承Person
    class Teacher extends Person {
        constructor (name: string) {
            super (name)        // 初始化父类的构造函数
        }
        work():void {
            alert(`${this.name} is working`)
        }
    }
    var teacher1 = new Teacher('Lily')
    teacher1.getName(); // 输出“Lily”
    teacher1.work();   // 输出“Lily is working”

    转成Es5的代码

    "use strict";
    var __extends = (this && this.__extends) || (function () {
        var extendStatics = function (d, b) {
            extendStatics = Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
                function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
            return extendStatics(d, b);
        };
        return function (d, b) {
            extendStatics(d, b);
            function __() { this.constructor = d; }
            d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
        };
    })();

    var Person = /** @class */ (function () {
        function Person(n) {
            this.name = n;
        }
        Person.prototype.getName = function () {
            alert(this.name);
        };
        return Person;
    }());
    var person1 = new Person('wenjwu');
    person1.getName(); // 输出“wenjwu”

    var Teacher = /** @class */ (function (_super) {
        __extends(Teacher, _super);
        function Teacher(name) {
            return _super.call(this, name) || this;
        }
        Teacher.prototype.work = function () {
            alert(this.name + " is working");
        };
        return Teacher;
    }(Person));

    var teacher1 = new Teacher('Lily');
    teacher1.work();

##### 4.5 ts 类里面的三种修饰符

- public 公有类型: 可以在类里面/子类里面/类外部都可以访问实例属性（注意不是静态属性）
- protected 保护类型: 可以在类里/子类里访问，类外部不能访问...
- private 私有类型: 可以在类里访问，子类里/类外部不能访问...

如果没有设置,默认是public

    class Person {
        protected name:string;
        constructor (n:string) {
            this.name = n
        }
        getName():void {
            alert(this.name)                    //类里都可访问
        }
    }

    class Teacher extends Person {
        constructor (name: string) {
            super (name)
        }
        work():void {
            alert(`${this.name} is working`)  // private类型时会报错
        }
    }

    var person1 = new Person('wenjwu')
    console.log(person1.name)       // protected, private类型时会报错

    var teacher1 = new Teacher('Lily')
    console.log(teacher1.name)      // protected, private类型时会报错

##### 4.6 ts 类中静态属性和静态方法

##### 4.6.1 ES 5中静态属性和方法

    function Person () {
        this.name = 'aaa'               // name: 实例属性
        this.run = function () {        // run: 实例方法
            ...
        }
    }

    Person.age = 12         // 静态属性

    Person.work = function(){   // 静态方法
        ...
    }

    静态方法调用： Person.work()
    实例方法调用： var p = new Person();
                 p.run()

使用场景：jquery($)伪代码

    function $(element) {
        return new Base(element)
    }

    function base (element, cssKey, value) {
        this.element = elment(获取DOM节点)
        this.css= function (arr, value) => {
            this.element.style.cssKey = value
        }
    }

    $('.box').css('color', 'red')   // 实例方法
    $.ajax(...)                     // 静态方法，直接调用$的方法

##### 4.6.2 ts 中静态属性和方法

    class Per {
        public name:string = 'wenjwu'       // 实例属性
        protected class:string = 'num 1'   // 实例属性
        static age:number = 12            // 静态属性
        constructor (name:string, age: number) {
            this.name = name
            this.age = age              // 报错：它是实例属性而不是实例属性
        }

        run ():void {                   // 实例方法
            console.log('do run');
            alert(`${this.name}`)       // 成功
            alert(`${this.age}`) 
        };

        static work ():void {           //静态方法
            console.log('do work');
            alert(`${this.name}`)       // 报错：静态方法中无法访问 public , protected属性
            alert(`${Per.age}`)         // 成功：静态方法中可以访问静态属性，且使用Per.age访问
        };
    }

    var P = new Per('www', 34)
    P.run()       // 访问实例方法
    Per.work()    // 访问静态方法


#### 4.7 ts 中多态
多态：父类定义一个方法不去实现，让继承他的子类去实现， 不同子类有不同表现形式
多态属于继承

    class Per {
        name:string = 'per'
        constructor(name:string) {
            this.name = name
        }
        job():void{         
            // 没有具体指名功能
            alert('do job')
        }
    }


    class Teacher extends Per {
        constructor(name:string) {
            super(name)
        }
        job():void {
            // 实现功能
            alert(`${this.name} is teacher`)
        }
    }

    class Worker1 extends Per {
        constructor(name:string) {
            super(name)
        }
        job = ():void  => {
            alert(`${this.name} is worker`)   
        }
    }

#### 4.8 ts 中的抽象类

- 抽象类以abstract关键词定义

        abstract class Person {         // ts中的抽象类，她是提供其他类继承的基类，不能直接被实例化
            public name:string
            constructor(name:string) {
                this.name = name
            }
            abstract eat():void    // 1）抽象方法必须包含在抽象类中。2）抽象类中的抽象方法不包含具体实现，并且必须在派生类中实现该方法
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


#### 5. 接口类型

接口：行为和类型的规范

##### 5.1 属性类接口

    定义接口
    interface NameType {
        firstName: string; // 注意；结束
        lastName: string;
    }

    function setName(name: NameType):void {
        console.log(`first name is ${name.firstName}, last name is ${name.lastName}`);
    }
    // setName({firstName:'wu', lastName: 'wenj', age:12}) 报错，因为NameType中不包含age
    var obj = {firstName:'wu', lastName: 'wenj', age:12}；// 正常，参数中必须包含firstName和lastName,但是不推荐这样使用，参数最好和接口定义时保持一致
    setName(obj)  

接口：可选属性

        interface NameType {
            firstName: string;
            lastName?: string;
        }

        function setName (name: NameType) {
            console.log(`${name}`);
        }
        var obj = {
            firstName: 'wu' // lastName可选，所以不报错
        }
        setName(obj);

实例： 模拟ajax请求

        // $.ajax({
        //     type: 'post',
        //     url: api.apiHost,
        //     async: true,
        //     data: {
        //     }
        // })

        interface AjaxData {
            type: string;
            url: string;
            async: boolean;
            data?: string；
        }
        function setAjaxData (config: AjaxData) {
            var xhr = new XMLHttpRequest;
            xhr.open(config.type, config.url)；
            xhr.send(config.data)；
            xhr.onreadystatechange = function () {
                if (xhr.readyState === 4 && xhr.status === 200) {
                    console.log('send success')；
                }
            }
        }
        var obj = {
            type: 'post',
            url: 'https://www.baidu.com',
            async: true,
            data: "{name: 'wenjwu', age: 12}"
        };
        setAjaxData(obj)；

##### 5.2 函数类接口
对方法传入的类型及返回值进行批量约束

    interface encrypt {
        (key: string, value: string):string //传入参数和返回值都是字符串
    }

    var md5:encrypt = function(name: string, id: string):string { //定义md5函数
        return `${name}-${id}`
    }
    var sha1:encrypt
    md5('wenjwu','conf6300')

##### 5.3 可索引接口（不常用）

1) 对数组的约束
    interface userNumber {
        [index: number]:string  // 索引时munber类型，索引值为string类型
    }
    var arr:userNumber=['aa','bb']

2) 对对象的约束
    interface userObj {
        [index: string]: string
    }

    var obj:userObj = {
        name: 'wenjwu',
        age: '20'
    }


##### 5.4 类类型接口，对类的约束，类似抽象类 

    interface Animal {
        name: string;
        eat(str:string):void;
    }

    class Dog implements Animal {
        name:string;
        constructor(name:string) {
            this.name = name
        }
        eat() {
            console.log(`${this.name}吃骨头`)
        }
    }

    var dog = new Dog('Doby');
    dog.eat(); //Doby吃骨头

    class Cat implements Animal {
        name: string;
        constructor (name: string) {
            this.name = name
        }
        eat(food: string) {
            console.log(`${this.name}吃${food}`);
        }
    }
    var c = new Cat('小猫');
    c.eat('老鼠'); // 小猫吃老鼠

#### 6. 接口扩展: 

##### 6.1 接口可以继承接口
    interface Animal {
        eat():void;
    }

    interface Person extends Animal {
        work():void;
    }

    class Web implements Person {
        public name:string;
        constructor(name: string) {
            this.name = name
        }
        eat() {
            console.log(`${this.name} is eating`)
        }
        work() {
            console.log(`${this.name} is working`)
        }
    }

    var W = new Web('Lily')
    W.eat() // Lily is eating
    W.work()  // Lily is working

##### 6.2 类继承父类，实现接口

    interface Animal {
        eat():void;
    }

    interface Person extends Animal {
        work():void;
    }

    class Program {
        public n:string;
        constructor(name: string) {
            this.n = name;
        }
        coding(code: string) {
            console.log(`${this.n} is ${code}`);
        }
    }

    // 继承Program ，并且实现Person接口
    class Web extends Program implements Person {
        constructor(name: string) {
            super(name)
        }
        eat() {
            console.log(`${this.n} is eating`)
        }
        work() {
            console.log(`${this.n} is working`)
        }
    }

    var W = new Web('Lily')
    W.eat() // Lily is eating
    W.work()  // Lily is working
    W.coding('coding')  // Lily is coding

#### 7. 泛型

一个组件可以支持多重类型的数据，解决接口、类、方法的复用性

##### 7.1 泛型函数

    // T 表示泛型，具体什么类型是调用这个方法时决定
    function getData<T>(data: T):T{
        return data
    }

    getData<number>(1111) // 返回1111
    getData<number>('aaa') // 报错,参数必须是number

##### 7.2 泛型类

普通类

    class MinNum {
        public list:number[] = []
        add(value: number):void {
            this.list.push(value)
        }
        min():number {
            let result = this.list[0]
            for(let i = 0; i < this.list.length; i++) {
                if (result > this.list[i]) {
                    result = this.list[i]
                }
            }
            return result
        }
    }
    var M = new MinNum()
    M.add(2)
    M.add(23)
    M.add(4)

    M.min() // 2

泛型类

    class MinNum<T> {
        public list:T[] = []        // 初始化类型为T的空数组
        add(value: T):void {        
            this.list.push(value)
        }
        min():T{
            let result = this.list[0]
            for(let i = 0; i < this.list.length; i++) {
                if (result > this.list[i]) {
                    result = this.list[i]
                }
            }
            return result
        }
    }
    var M = new MinNum()
    M.add('b')
    M.add('a')
    M.add('d')

    M.min() // a
