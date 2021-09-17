import { makeAutoObservable, observable } from "mobx"

interface ITodo {
    id: number
    title: string
    completed: boolean
}

// создаем объект который сразу будет прослушиваемым
// он слушается функцией observer в компоненте Todo
const todosTemp: ITodo[] = observable([])


class Todo {
    todos: ITodo[] = todosTemp
    count: number = 2

    constructor() {
        // запрос тестовых данных
        fetch('https://jsonplaceholder.typicode.com/todos/2')
            .then(async response => this.todos.push(await response.json()))
    }

    addTodo(): void {
        this.count++
        fetch(`https://jsonplaceholder.typicode.com/todos/${this.count}`)
            .then(async response => this.todos.push(await response.json()))
    }

    removeTodo(id: number): void {

        const index = this.todos.reduce((index, todo, i) => {
            if (todo.id === id)  index = i
            return index
        }, -1)

        if (index > -1) {
            // удаляем элемент с помощью splice из текущего массива
            // возвращает новый массив из удаленных элементов
            this.todos.splice(index, 1)
        }
    }

    completeTodo(todo: ITodo): void {
        todo.completed = !todo.completed
        console.log('работа с состоянием', this.todos)
    }

}

export default new Todo()