import { useState } from "react"
import { v4 as uuidv4 } from 'uuid'
import { styled } from "styled-components"
import { ContactTable } from "./ContactTable"
import AddUserModal from "./AddUserModal"
import EditUserModal from "./ EditContactModal"

export interface Contact {
  id: string
  name: string
  email?: string
  number?: number
  group?: string
  checked?: boolean
}

const Button = styled.button`
    width: 100px;
`;

const InitialContactsState: Contact = {
  id: '',
  name: '',
  email: '',
  number: 0,
  group: ''
}

export const Contacts = () => {

  const [contacts, setContacts] = useState<Contact[]>([])
  const [newContact, setNewContact] = useState<Contact>(InitialContactsState);
  const [showModalAddUser, setShowModalAddUser] = useState<boolean>(false)
  const [showModalEditUser, setShowModalEditUser] = useState<boolean>(false)

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = event.target;
    setNewContact(prevContact => ({
      ...prevContact,
      id: uuidv4(),
      [name]: value
    }));
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    setContacts([...contacts, newContact]);
    setNewContact({ id: '', name: '', email: '', number: 0, group: '' });
    setShowModalAddUser(false)
    setShowModalEditUser(false)
  };

  const deleteContact = (contact: Contact) => {
    setContacts(contacts.filter((el: { id: string; }) => el.id !== contact.id))
  }

  const editContact = (contactId: string) => {
    const contactToEdit = contacts.find(contact => contact.id === contactId)
    if (contactToEdit) {
      setNewContact(contactToEdit)
      setShowModalAddUser(false)
      setShowModalEditUser(true)
    }
  }
  
  return (
    <>
      {showModalAddUser && !showModalEditUser && <AddUserModal handleInputChange={handleInputChange} handleSubmit={handleSubmit} newValue={newContact} onCloseModal={() => setShowModalAddUser(s => !s)}/>}
      {showModalEditUser && !showModalAddUser && <EditUserModal handleInputChange={handleInputChange} handleSubmit={handleSubmit} newValue={newContact} onCloseModal={() => setShowModalAddUser(s => !s)}/>}
      <Button onClick={() => setShowModalAddUser(s => !s)}>New Contact</Button>
      <ContactTable contacts={contacts} deleteContact={deleteContact} editContact={editContact} />
    </>
  )
}