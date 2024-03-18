import React from 'react'
import { styled } from 'styled-components'

interface ButtonProps {
  text?: string
  onClick?: () => void
  disabled?: boolean
  className?: string
  type?: 'button' | 'submit' | 'reset'
  borderRadius?: 'squared' | 'rounded'
}

const DefaultButton = styled.button<ButtonProps>`
  width: 6rem;
  height: 40px;
  margin: 0;
  text-align: center;
  font-size: 14px;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  position: relative;
  box-sizing: border-box;
  background-color: #222;
  border-radius: ${props => props.borderRadius === 'rounded' ? '50px' : '6px'};
  border-style: none;
  color: #fff;
  cursor: pointer;
  
  &:hover {
    opacity: .9;
  }

`

export const Button: React.FC<ButtonProps> = ({
  text,
  onClick,
  disabled = false,
  type = 'submit',
  borderRadius = 'squared',
  className
}) => {
  return (
    <DefaultButton type={type} className={className} disabled={disabled} onClick={onClick} borderRadius={borderRadius}>
      {text}
    </DefaultButton>
  )
}
