import styled from "styled-components"
import questoes from './images/questoes.png'
import objetivo from './images/objetivo.png'
import desempenho from './images/desempenho.png'
import { useNavigate } from "react-router-dom"


export default function HomePage() {
    const navigate = useNavigate();

    const posts = [
        {title:'Simulados em Física Médica', text:'Mais de 5000 questões de 14 instituições que oferecem Residência em Física Médica. Resoluções, Questões comentadas, Análises personalizadas e muito mais.', image:undefined, button:'COMEÇAR A AVALIAÇÃO GRATUITA', path:'/LoginPage'},
        {title:'Escolha os temas das questões', text:'Uma dos maiores diferenciais do portal Física Médica Brasil é a possibilidade de escolher os temas das questões que deseja treinar como SUS, Mecânica Quântica, Cálculo, Radioterapia, entre outros.', image:questoes, button:'', path:''},
        {title:'Foco no objetivo', text:'Selecione apenas questões das instituições e hospitais que tenha interesse. Nossos simulados tem  um banco de questões de mais de 10 instituições e, entre elas, HACC, HCUSP,  HSL, INCA, entre outras.', image:objetivo, button:'', path:''},
        {title:'Melhore seu desempenho', text:'Com base no histórico de questões respondidas, veja quais temas ou instituições têm as menores assertividades. Assim, é crie simulados totalmente personalizados para melhorar seu desempenho.', image:desempenho , button:'', path:''},
        {title:'Prepare-se para a Prova de Residência', text:'', image: undefined, button:'COMEÇAR A AVALIAÇÃO GRATUITA', path:'/LoginPage'}
    ];

    function renderPost(post, position) {
        const hasText = post.text !== '';
        // const hasImage = post.image !== undefined;
        const hasButton = post.button !== '';
        const colors = [
            {background:'#F2F9FF', button:'#75ac45'},
            {background:'#75ac45', button:'#FCF20C'},
        ];


        if (hasButton) {
            //se position for par recebe colors[0], se não colors[1]
            return ( 
                <PostButtonSC color={colors[position%2]}>  
                    <h1>{post.title}</h1>
                    {hasText && (<p>{post.text}</p>)}
                    <button onClick={() => navigate(post.path)}>{post.button}</button>
                </PostButtonSC>
            )
        } else if(position % 2 === 0) {
            return (
                <PostTextSC color={colors[0]}>
                    <img src={post.image} alt="imagem" />
                    <div>
                        <h1>{post.title}</h1>
                        <p>{post.text}</p>
                    </div>
                </PostTextSC>
            )
        } else {
            return (
                <PostTextSC color={colors[1]}>
                    <div>
                        <h1>{post.title}</h1>
                        <p>{post.text}</p>
                    </div>
                    <img src={post.image} alt="imagem" />
                </PostTextSC>
            )
        }
    }

    return (
        <ContainerHomeSC>
            {posts.map((post,i) => renderPost(post,i))}
        </ContainerHomeSC>
    )
}

const ContainerHomeSC = styled.main`
    width: 100vw;
    margin-top: 100px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    font-size: 50px;
    background-color: lightblue;
`

const PostTextSC = styled.div`
    width: 100%;
    height: 600px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    background-color: ${props => props.color.background};

    div {
        width: 40%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;

        h1 {
            font-size: 0.9em;
            margin: 2em;
            text-align: center;
        }

        p {
            font-size: 0.6em;
            line-height: 2.5em;
            text-align: left;
        }
    }

    img {
        width: 400px;
    }
`;

const PostButtonSC = styled.div`
    width: 100%;
    height: 600px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    background-color: ${props => props.color.background};

    h1 {
        font-size: 1.5em;
    }

    p {
        font-size: 0.7em;
    }

    button {
        width: 680px;
        height: 110px; 
        background-color: ${props => props.color.button}; 
        color: #fff;
        font-size: 0.7em;
        border-radius: 2em;
        box-shadow: 0 5px 2px 1px rgba(0, 0, 0, 0.2);
    }
`;