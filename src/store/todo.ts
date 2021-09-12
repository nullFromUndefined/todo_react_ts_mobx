import { makeAutoObservable } from "mobx"

interface ITodo {
    id: number
    title: string
    completed: boolean
}

class Todo {
    todos: ITodo[] = [
        {id: 100, title: 'Купить хлеб', completed: false},
        {id: 200, title: 'Пройти курс', completed: false},
        {id: 300, title: 'Сделать практику', completed: false}
    ]
    
    constructor() {
        makeAutoObservable(this)
    }

    addTodo(): void {
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then(response => response.json())
            .then(json => this.todos = [...json])
    }

    removeTodo(id: number): void {
        console.log('удаление элемента');
        
        setTimeout(() => {
            this.todos = this.todos.filter(todo => todo.id !== id)
        }, 2000)
    }

    completeTodo(todo: ITodo): void {
        todo.completed = !todo.completed
        console.log('работа с состоянием');
        
        
    }

}

export default new Todo()