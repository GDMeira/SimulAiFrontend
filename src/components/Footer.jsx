import styled from "styled-components"
import email from '../assets/email.png'
import facebook from '../assets/facebook.png'
import whatsapp from '../assets/whatsapp.png'
import linkedin from '../assets/linkedin.png'
import instagram from '../assets/instagram.png'
import tiktok from '../assets/tiktok.png'
import youtube from '../assets/youtube.png'
import twitter from '../assets/twitter.png'



export default function Footer() {
    // TODO: tirar frase "Física médica brasil 2023" no mobile
    const desktopIcons = [
        { image: whatsapp, text: '(19)999999999', path: 'https://whatsapp.com' },
        { image: email, text: 'contato@cont.com', path: 'https://www.gmail.com' },
        { image: linkedin, text: '', path: 'https://linkedin.com' },
        { image: instagram, text: '', path: 'https://www.instagram.com' },
        { image: facebook, text: '', path: 'https://www.facebook.com' },
        { image: tiktok, text: '', path: 'https://www.tiktok.com' },
        { image: youtube, text: '', path: 'https://www.' },
        { image: twitter, text: '', path: 'https://www.' },
    ];

    const mobileIcons = [
        { image: whatsapp, text: '', path: 'https://whatsapp.com' },
        { image: email, text: '', path: 'https://www.gmail.com' },
        { image: linkedin, text: '', path: 'https://linkedin.com' },
    ];

    const isMobile = window.innerWidth > 1200;
    const visibleIcons = (isMobile ? desktopIcons : mobileIcons)

    return (
        <ContainerSC>
            {visibleIcons.map((icon, i) => {
                return <div key={i}>
                    <a href={icon.path}>
                        <img src={icon.image} alt="icon" />
                    </a>
                    {icon.text.length > 0 && <span>{icon.text}</span>}
                </div>
            })}

            <div>
                <span>Física Médica Brasil 2023</span>
            </div>
        </ContainerSC>
    )
}

const ContainerSC = styled.div`
    width: 100vw;
    height: 8vh;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    font-size: 2vh;
    position: relative;
    z-index: 1;
    background-color: #e0d83a;

    div {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 0 0.3vw;
    }

    span {
        margin: 0 0.8vh;
    }

    img {
        width: 4vh;
    }

`;
