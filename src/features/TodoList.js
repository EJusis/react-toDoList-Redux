import {createSlice} from "@reduxjs/toolkit";

export const tasksSlice = createSlice({
    name: 'tasks',
    initialState: {
        value: []
    },
    reducers: {
        addTask: (state, action) => {
            state.value.push(action.payload)
        },
        removeTask: (state, action) => {
            const {index} = action.payload
            state.value = state.value.filter((x, i) => i !== index)
        }

    }
})

export const {addTask, removeTask} = tasksSlice.actions

export default tasksSlice.reducer