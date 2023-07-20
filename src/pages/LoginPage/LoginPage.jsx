import styled from "styled-components"

export default function LoginPage() {
    return (
        <ContainerSC>
            LoginPage
        </ContainerSC>
    )
}

const ContainerSC = styled.main`
    width: 100vw;
    min-height: 100vh;
    font-size: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 100px;
    background-image: linear-gradient(to right, red 0%, red 30%, blue 30%, blue 100%);
`