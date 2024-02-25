import { Modal } from "../../Common/Modal"
import { Form, Value } from "../../Common/Form"


export interface EditUserModalProps {
  handleInputChange: (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
  handleSubmit: (event: React.FormEvent) => void;
  newValue: Value;
  buttonText?: string
  titleForm?: string
  onCloseModal: () => void
}

const EditUserModal: React.FC<EditUserModalProps> = ({ handleInputChange, handleSubmit, newValue, onCloseModal }) => {
  return (
    <Modal onCloseModal={onCloseModal}>
      <Form buttonText="Save Changes" titleForm="Edit Contact" handleInputChange={handleInputChange} handleSubmit={handleSubmit} newValue={newValue} />
    </Modal>
  )
}

export default EditUserModal