import React, { useState } from "react";
import CheckIcon from '../../Assets/Icons/check.svg';
import CheckSuccessIcon from '../../Assets/Icons/checkSuccess.svg';
import DeleteIcon from '../../Assets/Icons/delete.svg';
import EditIcon from '../../Assets/Icons/edit.svg';
import { useSelector, useDispatch } from 'react-redux';
import { handleItemCheck, removeItemFromList } from '../../redux/todoListSlice';
import EditItemModal from '../EditItemModal/editItemModal';
import './todoList.scss';

interface ListItem {
  text: string;
  done: boolean;
}

export const TodoList = () => {
  const dispatch = useDispatch()
  const list = useSelector((state: any) => state.list.data)
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [itemForEdit, setItemForEdit] = useState({});

  const markChecked = (item: ListItem) => {
    dispatch(handleItemCheck(item));
  }

  const deleteItem = (item: ListItem) => {
    dispatch(removeItemFromList(item.text));
  }

  const editItem = (item: ListItem) => {
    setItemForEdit(item);
    setModalIsOpen(true);
  }

  function closeModal() {
    setModalIsOpen(false);
  }

  return (
    <>
      <ul className="todoList">
        {list.map((item: ListItem, i: React.Key | null | undefined) => (
          <li key={i}>
            <div className="nameContainer">
              {item.done ?
                <img alt='Checked icon' onClick={() => markChecked(item)} src={CheckSuccessIcon} />
                : <img alt='Unchecked icon' onClick={() => markChecked(item)} src={CheckIcon} />
              }
              <span data-testid={`todo${i}`}>{item.text}</span>
            </div>
            <div className="buttonsContainer">
              <img alt='Edit icon' onClick={() => editItem(item)} src={EditIcon} />
              <img alt='Delete icon' onClick={() => deleteItem(item)} src={DeleteIcon} />
            </div>
          </li>
        ))}
      </ul>
      <EditItemModal open={modalIsOpen} closeModal={closeModal} editItem={itemForEdit} />
    </>
  );
};
