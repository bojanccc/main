import { createSlice, current, PayloadAction } from '@reduxjs/toolkit';


export const todoListSlice = createSlice({
    name: 'list',
    initialState: {
        data: [
            { text: "Buy milk", done: true },
            { text: "Buy bread", done: false }
        ]
    },
    reducers: {

        markItemChecked: (state, action: PayloadAction<object>) => {
            const tempData = state.data;
            
            console.log(action.payload)


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
    addItemToList, removeItemFromList, markItemChecked
} = todoListSlice.actions;

export default todoListSlice.reducer;
