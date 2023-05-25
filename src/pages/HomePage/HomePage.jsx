import styled from "styled-components"


export default function HomePage() {
    const posts = [
        {title:'', text:'', image: , button:'', path:''},
        {title:'', text:'', image: , button:'', path:''},
        {title:'', text:'', image: , button:'', path:''},
        {title:'', text:'', image: , button:'', path:''},
        {title:'', text:'', image: , button:'', path:''}
    ];

    return (
        <ContainerHomeSC>
            Home page
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