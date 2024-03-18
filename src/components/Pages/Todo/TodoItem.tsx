
import React from 'react'
import { DeleteIcon, EditIcon } from '../../Icons/Icons'
import { TodoInput, TodoListItem, TodoText, TodoTextWrapper, TodoWrapper } from './style'
import { Todos } from '.'

interface TodoItemsProps {
    todo: Todos
    toggleChecked: (id: string) => void
    deleteTodo: (id: string) => void
    editTodo: (id: string) => void
}

export const TodoItem: React.FC<TodoItemsProps> = ({ todo, toggleChecked, deleteTodo, editTodo }) => {
    return (
        <TodoListItem checked={todo.checked}>
            <TodoWrapper>
                <TodoInput type="radio" name={todo.text} value={todo.text} checked={todo.checked} onClick={() => toggleChecked(todo.id)} />
                <TodoTextWrapper>
                    <TodoText checked={todo.checked}>{todo.text}</TodoText>
                </TodoTextWrapper>
            </TodoWrapper>
            <TodoWrapper>
                <EditIcon onClick={() => editTodo(todo.id)} />
                <DeleteIcon onClick={() => deleteTodo(todo.id)} />
            </TodoWrapper>
        </TodoListItem>
    )
}
