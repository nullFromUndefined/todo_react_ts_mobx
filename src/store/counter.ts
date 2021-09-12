import { makeAutoObservable } from "mobx"


class Counter {
    count: number = 0
    constructor() {
        // функция в качестве значения по дефолту принимает контекст
        makeAutoObservable(this)
        // console.log(this.count + 1);
        
    }

    increment(): void {
        this.count = this.count + 1
        console.log(this.count)
    }

    decrement(): void {
        this.count = this.count - 1
        console.log(this.count)
        
    }
}

export default new Counter()