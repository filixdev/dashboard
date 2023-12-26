import { Link } from "react-router-dom";
import styled from "styled-components";

export const SideBarContainer = styled.div<{ toggleSideBar: boolean }>`
  margin: 0;
  padding: 0;
  width: ${({ toggleSideBar }) => (toggleSideBar ? "200px" : "")};
  height: 100vh;
  z-index: 999;
  overflow: auto;
  background-color: #2b3031;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow-x: hidden;
  transition: 0.5s width;
`;

export const ListStyled = styled.ul`
  list-style: none;
  padding: 1rem;
  margin: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const LinkListItem = styled(Link)<{ toggleSideBar: boolean }>`
  text-decoration: none;
  color: #fff;
  padding: 0.5rem 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
    justify-content: ${({ toggleSideBar }) =>
    toggleSideBar ? "unset" : "center"};
  &:hover {
    background-color: rgba(255, 255, 255, 0.5);
    transition: 0.3s;
  }
`;

export const BackButton = styled.div<{ toggleSideBar: boolean }>`
  color: #fff;
  border-top: 1px solid #fff;
  display: flex;
  align-items: center;
  padding: 0.5rem 1rem;
  gap: 0.5rem;
  cursor: pointer;
  justify-content: ${({ toggleSideBar }) =>
    toggleSideBar ? "unset" : "center"};
`;

export const LayoutContainer = styled.div`
  display: flex;
  width: 100%;
`;

export const MainContainer = styled.main`
  width: 100%;
  height: 100vh;
  overflow-y: scroll;
`;
