import React, { useState } from 'react'
import Todoinput from '../components/Todoinput'
import TodoList from '../components/TodoList'

const Todohome = () => {
  const[todos, setTodos]=useState([])

  console.log(todos)

  return (
    <div className='todo-container'>
        <h1 className='todo-tit'>TodoList</h1>
        {/* 투두리스트 추가하는 영역 */}
        <Todoinput todos={todos} setTodos={setTodos} />
        {/* 해야할 일 출력 */}
        <TodoList title={'해야할 일'} todos={todos} setTodos={setTodos} checked={false}/>
        {/* 완료된일 출력 */}
        <TodoList title={'완료된 일'} todos={todos} setTodos={setTodos} checked={true}/>
    </div>
  )
}

export default Todohome