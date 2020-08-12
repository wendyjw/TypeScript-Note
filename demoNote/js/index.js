"use strict";
var DB = /** @class */ (function () {
    function DB() {
    }
    DB.prototype.add = function (value) {
        console.log(value);
        return true;
    };
    return DB;
}());
var User = /** @class */ (function () {
    function User() {
    }
    return User;
}());
var user = new User();
user.name = 'wenjwu';
user.age = 12;
// var mgDB = new DB()
// mgDB.add(user)    // {name: 'wenjwu', age: 12}
// mgDB.add('1111')    // '1111', 不会报错，没有对参数类型进行限制，传入任何参数都可以
var mgDB = new DB();
mgDB.add(user); // {name: 'wenjwu', age: 12}
// mgDB.add('1111')    // 报错，‘1111’的类型与User类类型不一致
var Article = /** @class */ (function () {
    // 实例化时传值
    function Article(params) {
        this.title = params.title;
        this.desc = params.desc;
    }
    return Article;
}());
var art = new Article({ title: 'title', desc: 'description' });
var mgDB1 = new DB();
mgDB1.add(art);
