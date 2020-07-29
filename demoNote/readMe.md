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

  ##### 3.4 ts中方法的重载

    function getInfo(name:string):string; //  没有方法体
    function getInfo(age:number):string; //  没有方法体
    function getInfo(str:any):any {
        if (type of str === 'string) {
            return `My name is ${str}`
        } else {
            return `My age is ${str}`
        }
    }

    