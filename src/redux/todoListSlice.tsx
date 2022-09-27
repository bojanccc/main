import { createSlice, current, PayloadAction } from '@reduxjs/toolkit';

interface List {
    text: string;
    done: boolean;
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
            
            console.log(action.payload.text)
            const index = tempData.map(e => e.text).indexOf(action.payload.text);
            console.log(index)
            tempData[index].done = !action.payload.done
            state.data = tempData;
        },

        addItemToList: (state, action: PayloadAction<string>) => {
            const tempData = state.data;
            const newItem = {text: action.payload, done: false};
            tempData.unshift(newItem);
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

// Action creators are generated for each case reducer function
export const {
    addItemToList, removeItemFromList, handleItemCheck
} = todoListSlice.actions;

export default todoListSlice.reducer;
