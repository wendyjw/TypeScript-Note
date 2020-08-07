interface encrypt {
    (key: string, value: string):string //传入参数和返回值都是字符串
}

var md5:encrypt = function(name: string, id: string):string { //定义md5函数
    return `${name}-${id}`
}
var sha1:encrypt = function(key: string, value:string):string {
    return `${key} is ${value}`
}
md5('wenjwu','conf6300')