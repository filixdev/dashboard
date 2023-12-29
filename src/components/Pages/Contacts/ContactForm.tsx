import styled from "styled-components";
import { ContactContainer, FormStyled, InputStyled, InputWrapper, SelectStyled } from "./style";
import { Contact } from "./Contacts";

interface ContactFormProps {
    handleInputChange: (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
    handleSubmit: (event: React.FormEvent) => void;
    newContact: Contact;
}

const Button = styled.button`
    width: 100px;
`;

export const ContactForm: React.FC<ContactFormProps> = ({handleInputChange, handleSubmit, newContact }) => {
    return (
        <ContactContainer>
            <FormStyled onSubmit={handleSubmit}>
                <InputWrapper>
                    <label htmlFor="name">Enter Name: </label>
                    <InputStyled type="text" placeholder="Name..." name="name" id="name" value={newContact.name} onChange={handleInputChange} required />
                </InputWrapper>
                <InputWrapper>
                    <label htmlFor="email">Enter Mail: </label>
                    <InputStyled type="email" placeholder="name@mail.com..." name="email" id="email" value={newContact?.email} onChange={handleInputChange} />
                </InputWrapper>
                <InputWrapper>
                    <label htmlFor="number">Enter Telephone Number: </label>
                    <InputStyled type="tel" placeholder="123456..." name="number" id="number" value={newContact.number?.toString()} onChange={handleInputChange} />
                </InputWrapper>
                <InputWrapper>
                    <label htmlFor="group">Select Group: </label>
                    <SelectStyled name="group" id="group" value={newContact?.group} onChange={handleInputChange}>
                        <option value="">-</option>
                        <option value="work">Work</option>
                        <option value="family">Family</option>
                        <option value="friend">Friend</option>
                        <option value="friend">Other</option>
                    </SelectStyled>
                </InputWrapper>
                <Button type="submit">Add</Button>
            </FormStyled>
        </ContactContainer>
    );
};
