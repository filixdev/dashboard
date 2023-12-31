import { SetStateAction, useState } from "react"
import { Button, Input, TodoContainer, TodoList } from "./style"
import { TodoItem } from "./TodoItem"
import { v4 as uuidv4 } from 'uuid'
import { EditTodo } from "./EditTodo"

// TODO: add redux and localstorage

export interface Todos {
  id: string
  text: string
  checked: boolean
  isEditing: boolean
}

export const Todo = () => {

  const [todos, setTodos] = useState<Todos[]>([])
  const [inputValue, setInputValue] = useState('')

  const handleChange = (e: { target: { value: SetStateAction<string> } }) => {
    setInputValue(e.target.value)
  }

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault()
    if (inputValue.trim() !== '') {
      setTodos([...todos, { id: uuidv4(), text: inputValue, checked: false, isEditing: false }])
      setInputValue('')
    }
  }

  const toggleChecked = (id: string) => {
    setTodos(todos.map((todo: Todos) => todo.id === id ? { ...todo, checked: !todo.checked } : { ...todo }))
  }

  const deleteTodo = (id: string) => {
    setTodos(todos.filter((todo: Todos) => todo.id !== id))
  }

  const editTodo = (id: string) => {
    setTodos(todos.map((todo: Todos) => todo.id === id ? { ...todo, isEditing: !todo.isEditing } : { ...todo }))
  }

  const editText = (value: string, id: string) => {
    setTodos(todos.map((todo: Todos) => todo.id === id ? { ...todo, text: value, isEditing: !todo.isEditing } : { ...todo }))
  }

  const todoCompleted = todos.filter( todo => todo.checked === true).length
  const todoNotCompleted = todos.filter( todo => todo.checked === false).length

  return (
    <div>
      <h1>Get shit done!</h1>
      <p>Todo completed: {todoCompleted}</p>
      <p>Todo not completed: {todoNotCompleted}</p>
      <form onSubmit={handleSubmit}>
        <Input type="text" placeholder="add todo..." onChange={handleChange} value={inputValue} />
        <Button type="submit">Add</Button>
      </form>
      <TodoContainer>
        <TodoList>
          {todos.map((todo, index) => (
            todo.isEditing ? (
              <EditTodo key={index} todo={todo} editText={editText} />
            ) : (
              <TodoItem key={index} todo={todo} toggleChecked={toggleChecked} deleteTodo={deleteTodo} editTodo={editTodo} />
            )
          ))}
        </TodoList>
      </TodoContainer>
    </div>
  )
}
