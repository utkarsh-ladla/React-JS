import {createSlice, nanoid} from '@reduxjs/toolkit';
//nano id genererate unique id
const initialState = {
    todos:[{id: 1, text: "Hello WORLD"}]

}

function sayHello() {
    console.log("Hello World");
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const todo={
            id : nanoid(),
            text: action.payload
            }
            state.todos.push(todo)
        },   // both is used
        removeTodo: (state, action ) => {
            state.todos =state.todos.filter((todo) => todo.id !== action.payload)
        },  
    }
    //reducer hold properties and function 
})

export const {addTodo, removeTodo} = todoSlice.actions

export default todoSlice.reducer