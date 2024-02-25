import { Form, Value } from "../../Common/Form";
import { Modal } from "../../Common/Modal"

export interface AddUserModalProps {
    handleInputChange: (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
    handleSubmit: (event: React.FormEvent) => void;
    newValue: Value;
    buttonText?: string
    titleForm?: string
    onCloseModal: () => void
  }

const AddUserModal: React.FC<AddUserModalProps> = ({ handleInputChange, handleSubmit, newValue, onCloseModal }) => {
  return (
    <Modal onCloseModal={onCloseModal}>
        <Form buttonText="Add" titleForm="Add Contact" handleInputChange={handleInputChange} handleSubmit={handleSubmit} newValue={newValue} />
    </Modal>
  )
}

export default AddUserModal