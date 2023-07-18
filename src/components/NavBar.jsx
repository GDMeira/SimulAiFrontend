import styled from "styled-components"
import logo from '/logo.svg'
import { Link } from "react-router-dom";
import { pages } from "../routes/routes";

// TODO: criar menu burguer para window.innerWidth < 1200

export default function Footer() {
    const links = [
        {name:'Home', path: pages.home },
        {name:'Simulados', path: pages.tests },
        {name:'Provas customizadas', path: pages.customTests },
        {name:'Notícias', path: pages.news },
        {name:'Sobre', path: pages.aboutUs },
        {name:'Login', path: pages.signIn }
    ];

    return (
        <ContainerSC>
            <LogoTitleSC>
                <img src={logo} alt="logo" />
                <h1>Física Médica Brasil</h1>
            </LogoTitleSC>
            <ContainerPagesLink>
                {links.map((link, i) => <Link key={i} to={link.path}><h2>{link.name}</h2></Link>)}
            </ContainerPagesLink>
        </ContainerSC>
    )
}

const ContainerSC = styled.div`
    width: 100vw;
    height: 10vh;
    display: flex;
    justify-content: space-around;
    align-items: center;
    font-size: 3vh;
    position: fixed;
    top: 0;
    left: 0;
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
`;