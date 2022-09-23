import React, { useState } from "react";
import './todoListPage.scss';
import { TodoList } from "../../components/TodoList/todoList";



export default function TodoListPage(){
    const [todos, setTodos] = useState([
        { text: "Buy milk", done: true },
        { text: "Buy bread", done: false }
    ]);
    return (
        <div>
            <TodoList todos={todos} />
        </div>
    );
};