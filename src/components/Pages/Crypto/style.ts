import styled from "styled-components";

export const Table = styled.table`
  border-collapse: collapse;
`;

export const CoinLogo = styled.img`
  width: 1.5rem;
  height: 1.5rem;
  margin-right: 0.5rem;
`;

export const TableD = styled.td<{ priceChangeColor?: string }>`
  padding: 1rem;
  border: 1px solid #000;
  color: ${({ priceChangeColor }) => priceChangeColor};
`;

export const TableH = styled.th`
  border: 1px solid #000;
`;

export const TableR = styled.tr`
  cursor: pointer;
  text-align: center;
`;

export const CoinName = styled.span`
  font-weight: bold;
  margin-right: 0.5rem;
`;

export const CoinNameWrap = styled.span`
  display: flex;
  align-items: center;
  text-align: left;
`;

export const Input = styled.input`
  padding: 0.5rem;
  width: 10%;
  margin: 1rem 0;
`;
