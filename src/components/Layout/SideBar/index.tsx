import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import { BackButton, LayoutContainer, LinkListItem, ListStyled, MainContainer, SideBarContainer } from './style'
import { sidebarData } from './sidebarData'
import { KeyboardArrowLeftIcon, KeyboardArrowRightIcon } from '../../Icons/Icons'
import { BaseTheme } from '../../../theme/types'
import NavBar from '../../common/NavBar/NavBar'

interface LayoutProps {
    toggleTheme: () => void;
    theme: BaseTheme;
}

export const Layout: React.FC<LayoutProps> = ({ toggleTheme, theme }) => {
    const [toggleSideBar, setToggleSideBar] = useState(false)

    const handleToggleSideBar = () => {
        setToggleSideBar(!toggleSideBar)
    }

    return (
        <>
            <NavBar toggleTheme={toggleTheme} theme={theme}/>
            <LayoutContainer>
                <SideBarContainer toggleSideBar={toggleSideBar}>
                    <ListStyled>
                        {sidebarData.map(item => (
                            <li key={item.id}>
                                <LinkListItem to={item.path} toggleSideBar={toggleSideBar}>
                                    {item.icon}
                                    {toggleSideBar && <span>{item.name}</span>}
                                </LinkListItem>
                            </li>
                        ))}
                    </ListStyled>
                    <BackButton onClick={handleToggleSideBar} toggleSideBar={toggleSideBar}>
                        {toggleSideBar ?
                            <>
                                <KeyboardArrowLeftIcon />
                                <span>Collapse</span>
                            </>
                            :
                            <KeyboardArrowRightIcon />
                        }
                    </BackButton>
                </SideBarContainer>
                <MainContainer>
                    <Outlet />
                </MainContainer>
            </LayoutContainer>
        </>
    )
}
