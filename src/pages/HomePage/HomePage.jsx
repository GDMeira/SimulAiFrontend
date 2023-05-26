import styled from "styled-components"
import questoes from './images/questoes.png'
import objetivo from './images/objetivo.png'
import desempenho from './images/desempenho.png'


export default function HomePage() {
    const posts = [
        {title:'Simulados em Física Médica', text:'Mais de 5000 questões de 14 instituições que oferecem Residência em Física Médica. Resoluções, Questões comentadas, Análises personalizadas e muito mais.', image:undefined, button:'COMEÇAR A AVALIAÇÃO GRATUITA', path:'/LoginPage'},
        {title:'Escolha os temas das questões', text:'Uma dos maiores diferenciais do portal Física Médica Brasil é a possibilidade de escolher os temas das questões que deseja treinar como SUS, Mecânica Quântica, Cálculo, Radioterapia, entre outros.', image:questoes, button:'', path:''},
        {title:'Foco no objetivo', text:'Selecione apenas questões das instituições e hospitais que tenha interesse. Nossos simulados tem  um banco de questões de mais de 10 instituições e, entre elas, HACC, HCUSP,  HSL, INCA, entre outras.', image:objetivo, button:'', path:''},
        {title:'Melhore seu desempenho', text:'Com base no histórico de questões respondidas, veja quais temas ou instituições têm as menores assertividades. Assim, é crie simulados totalmente personalizados para melhorar seu desempenho.', image:desempenho , button:'', path:''},
        {title:'Prepare-se para a Prova de Residência', text:'', image: undefined, button:'COMEÇAR A AVALIAÇÃO GRATUITA', path:'/LoginPage'}
    ];

    function renderPost(post) {
        const hasText = post.text !== '';
        const hasImage = post.image !== undefined;
        const hasButton = post.button !== '';
    }

    return (
        <ContainerHomeSC>
            {posts.map(post => renderPost(post))}
        </ContainerHomeSC>
    )
}

const ContainerHomeSC = styled.main`
    width: 100vw;
    height: 1500px;
    margin-top: 100px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    font-size: 50px;
    background-color: lightblue;

    div:nth-child(2n) {
        background-color: #76D423;
    }

    div:nth-child(2n+1) {
        background-color: #F2F9FF;
    }
`

const PostSC = styled.div`
    width: 100%;
    height: 600px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;

    img {
        width: 400px;
    }
`;