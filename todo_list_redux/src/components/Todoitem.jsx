import React, {  useState } from 'react'
import { FaCheckCircle, FaRegCircle } from 'react-icons/fa'
import { useDispatch } from 'react-redux'
import { TodoReducerActions } from '../redux/reducers/todoSlice'


const Todoitem = ({todo}) => {
  const [edited, setEdited] = useState(false)
  const [newText, setNewText] = useState()

  
  const dispatch = useDispatch()


  const handleEdit = () => {
    setEdited(!edited)
  }
  // const handleEditText = (e) => {
  //   setNewText(e.target.value)
  //   console.log(newText)
  // }

  //수정완료기능구현
  // - 사용자가 수정하려는 todo가 배열
  const handleSubmit = () => {
    // let updateList = todos.map((item)=>({
    //     ...item,
    //     text:item.id === todo.id ? newText : item.text
    // })) 
    setEdited(!edited)
    dispatch(TodoReducerActions.textChangeTodo({id:todo.id, newText:newText}))
  }


  const handleDelete = () => {


if(window.confirm('정말 삭제하시겠습니까?')){
    // console.log('삭제할 todo의 id:', id)
    // let updateList = todos.filter((item)=>item.id !== id)
    dispatch(TodoReducerActions.deleteTodo({id:todo.id}))
  }}

  const handleCheckChange = () => {
    // let updateList = todos.map((item) => ({
    //   ...item,
    //   complete: item.id === todo.id ? !item.complete : item.complete,
    // }))
    dispatch(TodoReducerActions.checkChangeTodo({id:todo.id}))
  }

  return (
    <li className="todo-item">
      {todo.complete ? (
        <FaCheckCircle
          style={{ color: 'green' }}
          className="todo-item-checkbox"
          onClick={handleCheckChange}
        />
      ) : (
        <FaRegCircle
          style={{ color: 'lightgray' }}
          className="todo-item-checkbox"
          onClick={handleCheckChange}
        />
      )}

      {edited ? (
        <input
          type="text"
          className="todo-item-edit-input"
          vlaue={newText}
          onChange={(e)=>setNewText(e.target.value)}
        ></input>
      ) : (
        <span  className={`todo-item-content ${
          todo.complete === true && 'todo-item-content-checked'
        }`}>{todo.text}</span>
      )}
      {todo.complete ? null : edited ? (
        <button className="todo-item-submit-btn" onClick={handleSubmit}>
          💾
        </button>
      ) : (
        <button className="todo-item-edit-btn" onClick={handleEdit}>
          🪄
        </button>
      )}
      <button className="todo-item-edit-delete" onClick={()=>handleDelete(todo.id)}>
        🗑️
      </button>
    </li>
  )
}

export default Todoitem

// {edited ? <input type='text' className='todo-item-edit-input'></input>:
//         <span className='todo-item-content'>
//         {todo.complete ? null : (
//         <button className={`todo-item-edit-btn`} onClick={handleEdit}>
//         🪄
//       </button>
//     )}</span>}
