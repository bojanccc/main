import React from "react";
import './todoList.scss';

import CheckIcon from '../../Assets/Icons/check.svg';
import CheckSuccessIcon from '../../Assets/Icons/checkSuccess.svg';
import { useSelector, useDispatch } from 'react-redux'

interface ListItem {
  text: string;
  done: boolean;
}



export const TodoList = () => {
  const list = useSelector((state: any) => state.list.data)

  console.log('redux',list)

  const markChecked = (item: ListItem) => {
    
  
  }




  return (
    <ul className="todoList">
      {list.map((item: ListItem, i: React.Key | null | undefined) => (
        <li key={i}>
          {item.done ?
            <img onClick={()=>markChecked(item)} src={CheckSuccessIcon} />
            : <img onClick={() => markChecked(item)} src={CheckIcon} />
          }
          <span data-testid={`todo${i}`}>{item.text}</span>
        </li>
      ))}
    </ul>
  );
};
