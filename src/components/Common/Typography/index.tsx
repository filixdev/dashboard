import { styled } from "styled-components";

interface TypographyProps {
    fontWeight?: string
    fontSize?: string
}

export const H1 = styled.h1<TypographyProps>`
    /* font-family: 'Arial', sans-serif;  */
    font-size: 2rem;
    font-weight: ${props => props.fontWeight || 'bold'};
`

export const H2 = styled.h2<TypographyProps>`
    font-size: 1.5rem;
    font-weight: ${props => props.fontWeight || 'bold'};
`

export const H3 = styled.h3<TypographyProps>`
    font-size: 1.25rem;
    font-weight: ${props => props.fontWeight || 'normal'};
`

export const Text = styled.p<TypographyProps>`
    font-size: 1rem;
    font-weight: ${props => props.fontWeight || 'normal'};
`

export const Span = styled.span<TypographyProps>`
    font-size: 1rem;
    font-weight: ${props => props.fontWeight || 'normal'};
`