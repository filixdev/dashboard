import { styled } from "styled-components";
import { Heading1, Text } from "../../common/Typography";
import { Button } from "../../common/Button";

export const Input = styled.input`
  width: 450px;
  padding: 0.6rem;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 1rem;
  margin-bottom: 0.5rem;

`;

export const TodoContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const TodoList = styled.ul`
  list-style: none;
  padding: 1rem 0 0;
  margin: 0;
`;

export const TodoListItem = styled.li<{checked?: boolean}>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.3rem;
  border-radius: 5px;
  margin-bottom: 0.5rem;
  padding: 0.5rem;
  border: 1px solid #ccc;
  width: 450px;
  background-color: ${( {checked}) => checked ? '#c6c6c62e' : 'white'};
  height: auto;
`;

export const TodoInput = styled.input`
  border: none;
  width: 20px;
  height: 20px;
  margin: 0;
  &:focus {
    outline: none;
  }
`;

export const TodoText = styled(Text)<{ checked: boolean }>`
  text-decoration: ${({ checked }) => (checked ? "line-through" : "none")};
  color: ${( {checked}) => checked ? '#c6c6c6' : 'black'};
`;

export const TextWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin: 1rem 0;
`;

export const Heading1Styled = styled(Heading1)`
  margin-bottom: 0.5rem;
  font-weight: bold;
`;

export const Form = styled.form`
  display: flex;
  gap: 0.5rem;
`;

export const TodoWrapper = styled.div`
  display: flex;
  gap: 0.5rem;
`

export const TodoTextWrapper = styled.div`
  max-width: 340px;
  word-wrap: break-word;
  white-space: normal;
`;

export const EditButton = styled(Button)`
  width: 60px;
`

export const FormEdit = styled.form`
display: flex;
gap: 0.5rem;
`
export const NoTaskContainer = styled.div`
  display: flex;
  flex-direction: flex-start;
  align-items: center;
  margin-top: 2rem;
  padding-left: 1rem;
`;
