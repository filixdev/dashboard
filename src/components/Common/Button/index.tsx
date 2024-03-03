import React from 'react'
import { styled } from 'styled-components'

interface ButtonProps {
    text: string
    onClick: () => void
    disabled?: boolean
    className?: string
}

const CustomButton = styled.button`
  min-height: 40px;
  min-width: 80px;
  margin: 0;
  padding: 10px 10px;
  text-align: center;
  font-size: 16px;
  background-color: #222;
  border-radius: 4px;
  border-style: none;
  color: #fff;
  cursor: pointer;

  &:hover {
    opacity: .9;
  }

`


export const Button: React.FC<ButtonProps> = ({text, onClick, disabled = false, className}) => {
  return (
    <CustomButton type='submit' className={className} disabled={disabled} onClick={onClick}>
        {text}
    </CustomButton>
  )
}
