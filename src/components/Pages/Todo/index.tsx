import { SetStateAction, useState } from "react"
import { v4 as uuidv4 } from 'uuid'
import { Form, Heading1Styled, Input, NoTaskContainer, TextWrapper, TodoContainer, TodoList } from "./style"
import { TodoItem } from "./TodoItem"
import { EditTodo } from "./EditTodo"
import { Button } from "../../common/Button"
import { Heading3, Text } from "../../common/Typography"
import { getDate } from "../../../utils/date"

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

  const todoCompleted = todos.filter(todo => todo.checked === true).length
  const todoNotCompleted = todos.filter(todo => todo.checked === false).length

  return (
    <div>
      <Heading1Styled>Get shit done!</Heading1Styled>
      <Text fontStyle='italic'>{getDate()}</Text>
      <TextWrapper>
        <Text fontWeight='bold' color='#444'>Completed: {todoCompleted}</Text>
        <Text fontWeight='bold' color='#444'>Not completed: {todoNotCompleted}</Text>
      </TextWrapper>
      <Form onSubmit={handleSubmit}>
        <Input type="text" placeholder="Add Todo . . ." onChange={handleChange} value={inputValue} maxLength={100} />
        <Button text='Add' onClick={() => null} />
      </Form>
      <TodoContainer>
        {todos.length ? (
          <TodoList>
            {todos.map((todo, index) => (
              todo.isEditing ? (
                <EditTodo key={index} todo={todo} editText={editText} />
              ) : (
                <TodoItem key={index} todo={todo} toggleChecked={toggleChecked} deleteTodo={deleteTodo} editTodo={editTodo} />
              )
            ))}
          </TodoList>
        ) : (
          <NoTaskContainer>
            <Heading3>No Task</Heading3>
          </NoTaskContainer>
        )}
      </TodoContainer>
    </div>
  )
}
