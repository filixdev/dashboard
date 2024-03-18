import { css, styled } from "styled-components";
import { FontProperties } from "../../../theme/types";

type FontWeight = "bold" | "regular";
type FontStyle = "normal" | "italic";

interface TypographyProps {
  fontWeight?: FontWeight;
  fontSize?: FontStyle;
  color?: string;
  fontStyle?: string;
}

// const typographyStyle = css<TypographyProps>`
//   font-weight: ${(props) => props.fontWeight || "normal"};
//   font-size: ${(props) => props.fontSize || "1rem"};
//   color: ${(props) => props.color || "black"};
//   font-style: ${(props) => props.fontStyle || "normal"};
// `;

export const Heading1 = styled.h1<TypographyProps>`
  ${({ theme, ...props }) =>
    generateDefaultFontProperties(theme.fonts.heading1, { ...props })}
`;

export const Heading2 = styled.h2<TypographyProps>`
  ${({ theme, ...props }) =>
    generateDefaultFontProperties(theme.fonts.heading2, { ...props })}
`;

export const Heading3 = styled.h3<TypographyProps>`
  ${({ theme, ...props }) =>
    generateDefaultFontProperties(theme.fonts.heading3, { ...props })}
`;

export const Text = styled.p<TypographyProps>`
  ${({ theme, ...props }) =>
    generateDefaultFontProperties(theme.fonts.body, { ...props })}
`;

export const generateDefaultFontProperties = (
  font: FontProperties,
  typographyProps: TypographyProps
) => {
  return css`
    font-family: ${font.fontFamily}, serif;
    font-weight: ${typographyProps.fontWeight || font.fontWeight || "regular"};
    font-size: ${typographyProps.fontSize || font.fontSize || "1rem"};
    color: ${typographyProps.color || font.color || "black"};
    font-style: ${typographyProps.fontStyle || font.fontStyle || "normal"};
  `;
};
