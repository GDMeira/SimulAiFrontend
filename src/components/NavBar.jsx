import styled from "styled-components"
import logo from '/logo.svg'
import { Link } from "react-router-dom";


export default function Footer() {
    const links = [
        {name:'Home' ,path:'/' },
        {name:'Simulados' ,path:'/TestsPage' },
        {name:'Simulados customizados' ,path:'/CustomTestPage' },
        {name:'Notícias' ,path:'/NewsPage' },
        {name:'Sobre' ,path:'/AboutUs' },
        {name:'Login' ,path:'/LoginPage' }
    ];

    return (
        <ContainerSC>
            <LogoTitleSC>
                <img src={logo} alt="logo" />
                <h1>Física Médica Brasil</h1>
            </LogoTitleSC>
            <ContainerPagesLink>
                {links.map(link => <Link to={link.path}><h2>{link.name}</h2></Link>)}
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