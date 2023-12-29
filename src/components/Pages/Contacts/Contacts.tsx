import { useState } from "react"
import { ContactForm } from "./ContactForm"
import { ContactTable } from "./ContactTable"
import { v4 as uuidv4 } from 'uuid'
import { styled } from "styled-components"

export interface Contact {
  id: string
  name: string
  email?: string
  number?: number
  group?: string
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
  const [showModal, setShowModal] = useState<boolean>(false)

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
    setNewContact({ id: '', name: '', email: '', number: 0, group: 'friend' });
  };

  const deleteContact = (contact: Contact) => {
    setContacts(contacts.filter((el: { id: string; }) => el.id !== contact.id))
  }

  return (
    <>
      {showModal && <ContactForm handleInputChange={handleInputChange} handleSubmit={handleSubmit} newContact={newContact} />}
      <Button onClick={() => setShowModal(s => !s)}>New Contact</Button>
      <ContactTable contacts={contacts} deleteContact={deleteContact} />
    </>
  )
}