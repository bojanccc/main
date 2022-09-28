import React, { useState, useEffect } from "react";
import CloseIcon from '../../Assets/Icons/close.svg';
import { useDispatch } from 'react-redux';
import { editItemFromList } from '../../redux/todoListSlice';
import Modal from 'react-modal';
import './editItemModal.scss';

interface ModalProps {
    open: boolean;
    closeModal: () => void;
    editItem: any
}

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        width: '350px',
        height: '170px',
        border: '5px solid #00a8f0',
        borderRadius: '30px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column' as 'column',
    },
};

export default function EditItemModal(props: ModalProps) {
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
                <img alt='Close icon' className="closeButton" onClick={() => { props.closeModal() }} src={CloseIcon} />
                <input className='textField' type="text" value={itemName} onChange={(e) => onNameInput(e)}></input>
                <button className="editButton" onClick={editItem}>Edit item</button>
            </Modal>
        </div>
    );
};
