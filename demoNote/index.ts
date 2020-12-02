class DB<T> {
    add(value: T):boolean {
        console.log(value);
        return true;
    }
}
class User {
    name: string | undefined;
    age: number | undefined;
}

var user = new User()
user.name='wenjwu'
user.age=12


// var mgDB = new DB()
// mgDB.add(user)    // {name: 'wenjwu', age: 12}
// mgDB.add('1111')    // '1111', 不会报错，没有对参数类型进行限制，传入任何参数都可以


var mgDB = new DB<User>()
mgDB.add(user)  // {name: 'wenjwu', age: 12}
// mgDB.add('1111')    // 报错，‘1111’的类型与User类类型不一致


class Article {
    title: string | undefined;
    desc: string | undefined;
    // 实例化时传值
    constructor(params: {
        title: string | undefined,
        desc?: string | undefined
    }) {
        this.title = params.title;
        this.desc = params.desc;
    }
}

var art = new Article({title: 'title', desc: 'description'});

var mgDB1 = new DB<Article>();
mgDB1.add(art);
function getInfo(name:string, age?:number):string{
    if (age) {
        return `name is ${name}, age is ${age}`
    } else {
        return `name is ${name}, age is unknow`
    }
}