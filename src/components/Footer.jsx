import styled from "styled-components"
import { Link } from "react-router-dom"
import email from '../assets/email.png'
import facebook from '../assets/facebook.png'
import whatsapp from '../assets/whatsapp.png'
import linkedin from '../assets/linkedin.png'
import instagram from '../assets/instagram.png'
import tiktok from '../assets/tiktok.png'
import youtube from '../assets/youtube.png'
import twitter from '../assets/twitter.png'



export default function Footer() {
    const icons = [
        { image: whatsapp, text: '(19)999999999', path: 'https://whatsapp.com' },
        { image: email, text: 'contato@cont.com', path: 'https://www.gmail.com' },
        { image: linkedin, text: '', path: 'https://linkedin.com' },
        { image: instagram, text: '', path: 'https://www.instagram.com' },
        { image: facebook, text: '', path: 'https://www.facebook.com' },
        { image: tiktok, text: '', path: 'https://www.tiktok.com' },
        { image: youtube, text: '', path: 'https://www.' },
        { image: twitter, text: '', path: 'https://www.' },
    ];

    return (
        <ContainerSC>
            {icons.map(icon => {
                return <div>
                    <a href={icon.path}>
                        <img src={icon.image} alt="icon" />
                    </a>
                    <span>{icon.text}</span>
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
    height: 100px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 30px;
    position: relative;
    z-index: 1;
    background-color: #FCF20C;

    div {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 0 20px;
    }

    span {
        margin: 0 15px;
    }

`;
