import styled from "styled-components"


export default function HomePage() {


    return (
        <ContainerHomeSC>
            Home page
        </ContainerHomeSC>
    )
}

const ContainerHomeSC = styled.main`
    width: 100vw;
    margin: 100px 0;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 50px;
    background-color: lightblue;
`