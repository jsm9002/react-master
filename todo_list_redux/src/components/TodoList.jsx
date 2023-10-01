import React from 'react'
import Todoitem from './Todoitem'
import { useSelector } from 'react-redux'

const TodoList = ({ title, checked }) => {
  const todos = useSelector((state) => state.todo.todos)
  const todoList = todos.filter((item) => item.complete === checked)

  return (
    <div className="todo-list">
      <p className="todo-list-tit">
        [{title} : {todoList.length}개]
      </p>
      <ul className="todo-list-ul" />
      {todoList.map((item) => (
        <Todoitem key={item.id} todo={item} />
      ))}
    </div>
  )
}

export default TodoList
