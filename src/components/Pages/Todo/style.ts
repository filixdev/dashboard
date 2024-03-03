import { styled } from "styled-components";
import { H1, Text } from "../../Common/Typography";

export const Input = styled.input`
  width: 450px;
  padding: 0.6rem;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 1rem;
`;
// TODO: remove
export const Button = styled.button`
  padding: 0.5rem;
  border: none;
  border-radius: 5px;
  background-color: #2b3031;
  color: #fff;
  cursor: pointer;
  &:hover {
    background-color: #656565;
  }
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

export const TodoListItem = styled.li`
  display: flex;
  align-items: center;
  gap: 0.3rem;
  border-radius: 5px;
  margin-bottom: 0.5rem;
  padding: 0.5rem;
  border: 1px solid #ccc;
  width: 450px;
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
`;

export const TextWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.3rem;
  margin: 1rem 0;
`;

export const Heading1 = styled(H1)``;

export const Form = styled.form`
  display: flex;
  gap: 0.5rem;
`;
