import { observer } from "mobx-react-lite";
import React from "react";
import todo from "./store/todo"; 

const Todo = observer(() => {
    console.log('рендер компонента');
    
    return (
        <div>
            {todo.todos.map(todoe => {
                return (
                    <div key={todoe.title + Math.random()}>
                        <input type="checkbox" checked={todoe.completed} onChange={() => todo.completeTodo(todoe)} />
                        {todoe.title}
                        <button onClick={() => todo.removeTodo(todoe.id)}>Удалить задачу</button>
                        <button onClick={() => todo.addTodo()}>Добавить задачу</button>
                    </div>
                
                )
            })}
        </div>
    )
})

export default Todo;