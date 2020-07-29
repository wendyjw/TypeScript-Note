class Per {
   name:string = 'per'
   constructor(name:string) {
       this.name = name
   }
   job():void{
    alert('do job')
   }
}


class Teacher extends Per {
    constructor(name:string) {
        super(name)
    }
    job():void {
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