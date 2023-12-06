import { styled } from "styled-components";

export const Input = styled.input`
    width: 50%;
    padding: 0.5rem;
    border: 1px solid #ccc;
    border-radius: 5px;
    margin-bottom: 0.5rem;
`

export const Button = styled.button`
    padding: 0.5rem;
    border: none;
    border-radius: 5px;
    background-color: #2b3031;
    color: #fff;
    cursor: pointer;
    &:hover {
        background-color: #656565;
    }
`

export const TodoContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`

export const TodoList = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
`

export const TodoListItem = styled.li`
    display: flex;
    align-items: center;
    gap: 0.3rem;
    border-radius: 5px;
`

export const TodoInput = styled.input`
    border: none;
    margin: 0;
    &:focus {
        outline: none;
    }
`
    
export const TodoText = styled.p<{checked: boolean}>`
    text-decoration: ${({checked}) => (checked ? 'line-through' : 'none')}
`