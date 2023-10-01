import { createSlice } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
    name:'todo',
    initialState:{
        todos:[]
    },
    reducers:{
        addTodo:(state,action)=>{
            console.log(action)
            state.todos = state.todos.concat(action.payload)
        },
        checkChangeTodo:(state,action)=>{
            console.log('투두리스트 체크표시:',action)
            state.todos = state.todos.map((item) => ({
                ...item,
                complete: item.id === (action.payload.id) ? !item.complete : item.complete,
              }))
        },
        textChangeTodo:(state,action)=>{
            console.log('투두리스트 텍스트수정:',action)
            state.todos = state.todos.map((item)=>({
                ...item,
                text:item.id === action.payload.id ? action.payload.newText : item.text
            })) 
            
        },
        deleteTodo:(state,action)=>{
            console.log('투두리스트 지우기:',action)
            state.todos = state.todos.filter((item)=>item.id !== (action.payload.id))
        } 
    },
})


export const TodoReducerActions = todoSlice.actions
export default todoSlice.reducer