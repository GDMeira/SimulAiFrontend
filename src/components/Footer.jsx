import styled from "styled-components"


export default function Footer() {
    return (
        <ContainerSC>
            Footer
        </ContainerSC>
    )
}

const ContainerSC = styled.div`
    width: 100vw;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 30px;
    position: fixed;
    bottom: 0;
    left: 0;
    z-index: 1;
`;
