import styled from "styled-components";
import { Contact } from ".";

interface ContactTableProps {
    contacts: Contact[];
    deleteContact: (contact: Contact) => void;
    editContact: (contact: string) => void;
}

const MAX_ROWS = 10;

const TableStyled = styled.table`
    border-collapse: collapse;
    width: 100%;
    text-align: center;

    td, th {
        border: 1px solid #dddddd;
    }
`;

const Button = styled.button`
    width: 100px;
`;

export const ContactTable: React.FC<ContactTableProps> = ({ contacts, deleteContact, editContact }) => {

    const renderRows = () => {
        const rows = [];

        // Add data rows
        for (let i = 0; i < contacts.length && i < MAX_ROWS; i++) {
            const contact = contacts[i];
            rows.push(
                <tr key={contact.id}>
                    <td>{contact.name}</td>
                    <td>{contact.email}</td>
                    <td>{contact.number}</td>
                    <td>{contact.group}</td>
                    <td>
                        <Button type="button" onClick={() => deleteContact(contact)}>Delete</Button>
                        <Button type="button" onClick={() => editContact(contact.id)}>Edit</Button>
                    </td>
                </tr>
            );
        }

        // Add empty rows if needed
        for (let i = contacts.length; i < MAX_ROWS; i++) {
            rows.push(
                <tr key={`empty-${i}`}>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                </tr>
            );
        }

        return rows;
    };

    return (
        <TableStyled>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Number</th>
                    <th>Group</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {renderRows()}
            </tbody>
        </TableStyled>
    );
}
