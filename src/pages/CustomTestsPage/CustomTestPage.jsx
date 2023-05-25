import styled from "styled-components"

export default function CustomTestPage() {
    return (
        <ContainerSC>
            CustomTestPage
        </ContainerSC>
    )
}

const ContainerSC = styled.main`
    width: 100vw;
    font-size: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
`