import styled from "styled-components"
import logo from '/logo.svg'
import { Link } from "react-router-dom";
import { pages } from "../routes/routes";
import { Button, IconButton, Menu, MenuButton, MenuItem, MenuList, Portal } from "@chakra-ui/react";
import { HamburgerIcon } from '@chakra-ui/icons'

export default function Footer() {
    const desktopLinks = [
        { name: 'Home', path: pages.home },
        { name: 'Simulados', path: pages.tests },
        { name: 'Provas customizadas', path: pages.customTests },
        { name: 'Notícias', path: pages.news },
        { name: 'Sobre', path: pages.aboutUs },
        { name: 'Login', path: pages.signIn }
    ];

    const mobileLinks = [
        { name: 'Home', path: pages.home },
        { name: 'Simulados', path: pages.tests },
        { name: 'Customizadas', path: pages.customTests }
    ];

    const mobileMenu = [
        { name: 'Notícias', path: pages.news },
        { name: 'Sobre', path: pages.aboutUs },
        { name: 'Login', path: pages.signIn }
    ];

    const isMobile = window.innerWidth < 1200;
    const visibleLinks = (!isMobile ? desktopLinks : mobileLinks);

    return (
        <ContainerSC>
            <LogoTitleSC>
                <img src={logo} alt="logo" />
                {!isMobile && <h1>Física Médica Brasil</h1>}
            </LogoTitleSC>
            <ContainerPagesLink>
                {visibleLinks.map((link, i) => <Link key={i} to={link.path}><h2>{link.name}</h2></Link>)}
            </ContainerPagesLink>
            {isMobile && (
                <>
                    <Menu>
                        <MenuButton
                            as={IconButton}
                            aria-label='Options'
                            icon={<HamburgerIcon />}
                            variant='outline'
                        />
                        <Portal>
                            <MenuList>
                                {mobileMenu.map((item, i) => <MenuItem><Link key={i} to={item.path}><h2>{item.name}</h2></Link></MenuItem>)}
                            </MenuList>
                        </Portal>
                    </Menu>
                </>
            )
            }
        </ContainerSC >
    )
}

const ContainerSC = styled.div`
    width: 100vw;
    height: 10vh;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    font-size: 3vh;
    position: fixed;
    top: 0;
    z-index: 1;
    background-color: #ffffff;
    box-shadow: 0 2px 4px 1px rgba(0, 0, 0, 0.2);
    opacity: 0.9;
    overflow: hidden;

    div {
        display: flex;
        justify-content: space-around;
        align-items: center;
        color: #547c31;
        font-weight: 700;
        height: 10vh;
    }

`;

const LogoTitleSC = styled.div`
    font-size: 3.2vh;

    img {
        width: 10vh;
    }
`;

const ContainerPagesLink = styled.div`
    width: 65vw;
    font-size: 2.2vh;
    text-transform: uppercase;

    @media(max-width: 1200px){
        font-size: 3.3vw;
    }
`;