
import styled from "styled-components";
import { ContactContainer, FormStyled, InputStyled, InputWrapper, SelectStyled } from "../../Pages/Contacts/style";

export interface Value {
    id: string
    name: string
    email?: string
    number?: number
    group?: string
    checked?: boolean
}

export interface ModalFormProps {
    handleInputChange: (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
    handleSubmit: (event: React.FormEvent) => void;
    newValue: Value;
    buttonText?: string
    titleForm?: string
    closeModal?: () => void
}

const Button = styled.button`
    width: 100px;
    padding: 2px 12px;
    text-align: center;
    margin: 0 auto;
`;

const TitleForm = styled.h2`
    text-align: center;
`

export const Form: React.FC<ModalFormProps> = ({ handleInputChange, handleSubmit, newValue, titleForm, buttonText }) => {
    return (
        <ContactContainer>
            <TitleForm>{titleForm}</TitleForm>
            <FormStyled onSubmit={handleSubmit}>
                <InputWrapper>
                    <label htmlFor="name">Enter Name: </label>
                    <InputStyled type="text" placeholder="Name..." name="name" id="name" value={newValue.name} onChange={handleInputChange} required />
                </InputWrapper>
                <InputWrapper>
                    <label htmlFor="email">Enter Mail: </label>
                    <InputStyled type="email" placeholder="name@mail.com..." name="email" id="email" value={newValue?.email} onChange={handleInputChange} />
                </InputWrapper>
                <InputWrapper>
                    <label htmlFor="number">Enter Telephone Number: </label>
                    <InputStyled type="tel" placeholder="123456..." name="number" id="number" value={newValue.number?.toString()} onChange={handleInputChange} />
                </InputWrapper>
                <InputWrapper>
                    <label htmlFor="group">Select Group: </label>
                    <SelectStyled name="group" id="group" value={newValue?.group} onChange={handleInputChange}>
                        <option value="">-</option>
                        <option value="work">Work</option>
                        <option value="family">Family</option>
                        <option value="friend">Friend</option>
                        <option value="friend">Other</option>
                    </SelectStyled>
                </InputWrapper>
                <Button type="submit">{buttonText}</Button>
            </FormStyled>
        </ContactContainer>
    );
};
