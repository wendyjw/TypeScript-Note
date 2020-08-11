"use strict";
var Dog = /** @class */ (function () {
    function Dog(name) {
        this.name = name;
    }
    Dog.prototype.eat = function () {
        console.log(this.name + "\u5403\u9AA8\u5934");
    };
    return Dog;
}());
var dog = new Dog('Doby');
var Cat = /** @class */ (function () {
    function Cat(name) {
        this.name = name;
    }
    Cat.prototype.eat = function () {
    };
    return Cat;
}());
