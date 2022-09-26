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


        addItem: (state, action: PayloadAction<string>) => {
            const tempData = state.data;
            const newItem = {text: action.payload, done: false};
            tempData.unshift(newItem);
            state.data = tempData;
        },
    }
});

// Action creators are generated for each case reducer function
export const {
   addItem,
} = todoListSlice.actions;

export default todoListSlice.reducer;
