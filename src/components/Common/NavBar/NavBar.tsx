import styled from "styled-components";
import { BaseTheme } from "../../../theme/types";
import DarkMode from "../DarkMode";

interface NavBarProps {
    toggleTheme: () => void;
    theme: BaseTheme;
}

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background-color: ${({ theme }) => theme.colors.black};
  color: ${({ theme }) => theme.colors.white};
`;

const NavBar: React.FC<NavBarProps> = ({ toggleTheme, theme }) => {
    return (
        <Nav>
            <DarkMode toggleTheme={toggleTheme} theme={theme} />
        </Nav>
    )
}

export default NavBar