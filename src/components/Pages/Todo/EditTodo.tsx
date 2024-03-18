import { useState } from "react"
import { Todos } from "."
import { EditButton, FormEdit, Input } from "./style"

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
        <FormEdit onSubmit={handleSubmit}>
            <Input type="text" placeholder="Edit . . ." value={value} onChange={(e) => setValue(e.target.value)} maxLength={100} />
            <EditButton type="submit" text="Ok"/>
        </FormEdit>
    )
}

