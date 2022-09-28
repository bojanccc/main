import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface List {
    text: string;
    done: boolean;
}

interface EditList {
    itemName: string;
    newItemName: string;
}

export const todoListSlice = createSlice({
    name: 'list',
    initialState: {
        data: [
            { text: "Buy milk", done: true },
            { text: "Buy bread", done: false }
        ]
    },
    reducers: {
        handleItemCheck: (state, action: PayloadAction<List>) => {
            const tempData = state.data;
            const index = tempData.map(e => e.text).indexOf(action.payload.text);
            tempData[index].done = !action.payload.done
            state.data = tempData;
        },
        addItemToList: (state, action: PayloadAction<string>) => {
            const tempData = state.data;
            const newItem = { text: action.payload, done: false };
            tempData.unshift(newItem);
            state.data = tempData;
        },
        editItemFromList: (state, action: PayloadAction<EditList>) => {
            const tempData = state.data;
            const index = tempData.map(e => e.text).indexOf(action.payload.itemName);
            tempData[index].text = action.payload.newItemName
            state.data = tempData;
        },
        removeItemFromList: (state, action: PayloadAction<string>) => {
            const tempData = state.data;
            const index = tempData.map(e => e.text).indexOf(action.payload);
            tempData.splice(index, 1)
            state.data = tempData;
        },
    }
});

export const {
    handleItemCheck, addItemToList, editItemFromList, removeItemFromList
} = todoListSlice.actions;

export default todoListSlice.reducer;
