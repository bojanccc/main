import React from "react";
import './todoList.scss';

import CheckIcon from '../../Assets/Icons/check.svg';
import CheckSuccessIcon from '../../Assets/Icons/checkSuccess.svg';
import DeleteIcon from '../../Assets/Icons/delete.svg';
import EditIcon from '../../Assets/Icons/edit.svg';
import { useSelector, useDispatch } from 'react-redux';
import { handleItemCheck, removeItemFromList } from '../../redux/todoListSlice';

interface ListItem {
  text: string;
  done: boolean;
}



export const TodoList = () => {
  const dispatch = useDispatch()
  const list = useSelector((state: any) => state.list.data)


  const markChecked = (item: ListItem) => {
    dispatch(handleItemCheck(item))
  }

  const deleteItem = (item: ListItem) => {
    dispatch(removeItemFromList(item.text))
  }




  return (
    <ul className="todoList">
      {list.map((item: ListItem, i: React.Key | null | undefined) => (
        <li key={i}>
          <div className="nameContainer">
            {item.done ?
              <img onClick={() => markChecked(item)} src={CheckSuccessIcon} />
              : <img onClick={() => markChecked(item)} src={CheckIcon} />
            }
            <span data-testid={`todo${i}`}>{item.text}</span>
          </div>
          <div className="buttonsContainer">
            <img onClick={() => deleteItem(item)} src={EditIcon} />
            <img onClick={() => deleteItem(item)} src={DeleteIcon} />
          </div>
        </li>
      ))}
    </ul>
  );
};
