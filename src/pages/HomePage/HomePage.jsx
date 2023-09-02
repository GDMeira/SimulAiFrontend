import styled from "styled-components";
import subjects from './images/subjects.jpg';
import training from './images/training.jpg';
import studying from './images/studying.jpg';
import target from './images/positioning1.png';
import performance from './images/enhanceResults.jpg';
import Post from "./Post";
import { pages } from "../../routes/routes";
import Carrousel from "./Carrousel";
import ColorContext from "../../contexts/colors";
import { useContext } from "react";


export default function HomePage() {
    const colors = useContext(ColorContext);

    const desktopPosts = [
        {title:'Simulados em Física Médica', text:'Mais de 5000 questões de 14 instituições que oferecem Residência em Física Médica. Resoluções, Questões comentadas, Análises personalizadas e muito mais.', image: training, button:'COMEÇAR A AVALIAÇÃO GRATUITA', path:'/LoginPage'},
        {title:'Escolha os temas das questões', text:'Um dos maiores diferenciais do portal Física Médica Brasil é a possibilidade de escolher os temas das questões que deseja treinar como SUS, Mecânica Quântica, Cálculo, Radioterapia, entre outros.'},
        {title:'Foco no objetivo', text:'Selecione apenas questões das instituições e hospitais que tenha interesse. Nossos simulados tem  um banco de questões de mais de 10 instituições e, entre elas, HACC, HCUSP,  HSL, INCA, entre outras.'},
        {title:'Melhore seu performance', text:'Com base no histórico de questões respondidas, veja quais temas ou instituições têm as menores assertividades. Assim, é crie simulados totalmente personalizados para melhorar seu performance.'}
    ];

    const mobilePosts = [
        {title:'Simulados em Física Médica', text:'Mais de 5000 questões de 14 instituições. Resoluções, Questões comentadas, Análises personalizadas e muito mais.', image: training, button:'AVALIAÇÃO GRATUITA', path:pages.signIn},
        {title:'Filtre os temas', text:'SUS, Mecânica Quântica, Cálculo, Radioterapia, entre outros.'},
        {title:'Foco no objetivo', text:'Selecione apenas questões das instituições e hospitais que tenha interesse.'},
        {title:'Melhore seu performance', text:'Histórico de questões com análises personalisadas.'}
    ];
    const isMobile = window.innerWidth < 1200;
    const posts = (isMobile ? mobilePosts : desktopPosts);

    return (
        <ContainerHomeSC colors={colors}>
            <Carrousel />
            {posts.map((post,i) => <Post key={i} post={post} position={i} />)}
        </ContainerHomeSC>
    )
}

const ContainerHomeSC = styled.main`
    width: 100vw;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    font-size: 5vh;
    background-image: linear-gradient(to right, ${props => props.colors.color1} 0%,
        ${props => props.colors.color2} 55%,  ${props => props.colors.color2} 100%);
`