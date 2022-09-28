import React, { useState } from "react";
import './todoListPage.scss';
import { TodoList } from "../../components/TodoList/todoList";
import { useSelector, useDispatch } from 'react-redux'
import { addItemToList } from "../../redux/todoListSlice";




export default function TodoListPage() {
    const dispatch = useDispatch()
    const [newItem, setItemName] = useState('')


    const additem = () => {
        dispatch(addItemToList(newItem))
        setItemName('')
    }

    const onNameInput = (event: any) => {
        setItemName(event.target.value)
    }

    return (
        <div className="pageWrapper">
            
            <div className="inputContainer" >
                <input type="text" onChange={(e) => onNameInput(e)} id="itemName" value={newItem} ></input>
                <button onClick={additem}  >Add item</button>
            </div>
            <TodoList />
        </div>
    );
};