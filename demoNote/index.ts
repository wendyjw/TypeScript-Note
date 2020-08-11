class MinNum<T> {
    public list:T[] = []        // 初始话类型为T的空数组
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