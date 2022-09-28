import React, { useState, useEffect } from "react";
import './editItemModal.scss';

import CloseIcon from '../../Assets/Icons/close.svg';
import { useSelector, useDispatch } from 'react-redux';
import { editItemFromList } from '../../redux/todoListSlice';
import Modal from 'react-modal';

interface ListItem {
    text: string;
    done: boolean;
}

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        width: '400px',
        height: '300px',
        border: '5px solid #00a8f0',
        borderRadius: '30px',
    },
};



export default function EditItemModal(props: any) {

    const dispatch = useDispatch()
    const [itemName, setItemName] = useState("");

    const onNameInput = (event: any) => {
        setItemName(event.target.value)
    }

    useEffect(() => {
        setItemName(props.editItem?.text)
    }, [props.editItem])


    const editItem = () => {
        const editData = { itemName: props.editItem.text, newItemName: itemName }
        dispatch(editItemFromList(editData));
        props.closeModal();
    }


    return (
        <div className="editModal">
            <Modal
                isOpen={props.open}
                style={customStyles}
            >
                <img className="closeButton" onClick={() => { props.closeModal() }} src={CloseIcon} />
                <input type="text" value={itemName} onChange={(e) => onNameInput(e)}></input>
                <button onClick={editItem}  >Edit item</button>
            </Modal>
        </div>
    );
};
