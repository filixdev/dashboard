import { useState } from "react"
import { Todos } from "./Todo"
import { Button, Input } from "./style"

interface EditTodoProps {
    todo: Todos
    editText: (value: string, id: string) => void
}

export const EditTodo: React.FC<EditTodoProps> = ({ todo, editText }) => {

    const [value, setValue] = useState(todo.text)

    const handleSubmit = (e: { preventDefault: () => void }) => {
        e.preventDefault()
        editText(value, todo.id)
        setValue('')
    }

    return (
        <form onSubmit={handleSubmit}>
            <Input type="text" placeholder="edit... " value={value} onChange={(e) => setValue(e.target.value)} />
            <Button type="submit">Edit Todo</Button>
        </form>
    )
}

