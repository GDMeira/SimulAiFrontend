import styled from "styled-components";
import questoes from './images/questoes.png';
import objetivo from './images/objetivo.png';
import desempenho from './images/desempenho.png';
import { useNavigate } from "react-router-dom";
import Post from "./Post";
import { pages } from "../../routes/routes";


export default function HomePage() {
    // TODO: criar estado para isMobile
    const navigate = useNavigate();

    const desktopPosts = [
        {title:'Simulados em Física Médica', text:'Mais de 5000 questões de 14 instituições que oferecem Residência em Física Médica. Resoluções, Questões comentadas, Análises personalizadas e muito mais.', image:undefined, button:'COMEÇAR A AVALIAÇÃO GRATUITA', path:'/LoginPage'},
        {title:'Escolha os temas das questões', text:'Um dos maiores diferenciais do portal Física Médica Brasil é a possibilidade de escolher os temas das questões que deseja treinar como SUS, Mecânica Quântica, Cálculo, Radioterapia, entre outros.', image:questoes, button:'', path:''},
        {title:'Foco no objetivo', text:'Selecione apenas questões das instituições e hospitais que tenha interesse. Nossos simulados tem  um banco de questões de mais de 10 instituições e, entre elas, HACC, HCUSP,  HSL, INCA, entre outras.', image:objetivo, button:'', path:''},
        {title:'Melhore seu desempenho', text:'Com base no histórico de questões respondidas, veja quais temas ou instituições têm as menores assertividades. Assim, é crie simulados totalmente personalizados para melhorar seu desempenho.', image:desempenho , button:'', path:''},
        {title:'Prepare-se para a Prova de Residência', text:'', image: undefined, button:'COMEÇAR A AVALIAÇÃO GRATUITA', path:'/LoginPage'}
    ];

    const mobilePosts = [
        {title:'Simulados em Física Médica', text:'Mais de 5000 questões de 14 instituições. Resoluções, Questões comentadas, Análises personalizadas e muito mais.', image:undefined, button:'AVALIAÇÃO GRATUITA', path:pages.signIn},
        {title:'Escolha os temas das questões', text:'SUS, Mecânica Quântica, Cálculo, Radioterapia, entre outros.', image:questoes, button:'', path:''},
        {title:'Foco no objetivo', text:'Selecione apenas questões das instituições e hospitais que tenha interesse.', image:objetivo, button:'', path:''},
        {title:'Melhore seu desempenho', text:'Histórico de questões com análises personalisadas.', image:desempenho , button:'', path:''},
        {title:'Prepare-se para a Prova de Residência', text:'', image: undefined, button:'AVALIAÇÃO GRATUITA', path:'/LoginPage'}
    ];

    const isMobile = window.innerWidth < 1200;
    const posts = (isMobile ? mobilePosts : desktopPosts);

    return (
        <ContainerHomeSC>
            {posts.map((post,i) => <Post key={i} post={post} position={i} />)}
        </ContainerHomeSC>
    )
}

const ContainerHomeSC = styled.main`
    width: 100vw;
    margin-top: 10vh;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    font-size: 5vh;
    background-color: lightblue;
`