import styled from "styled-components";
import PageLayout from "../../components/PageLayout";
import imgLoginDesktop from "../../assets/loginDesktop.jpg";

export default function LoginPage() {
    const isMobile = window.innerWidth < 1200;

    return (
        <PageLayout>
            {!isMobile && <ImageContainerSC>
                <img src={imgLoginDesktop} alt="Acesse sua conta" />
            </ImageContainerSC>}
            <FormsContainerSC>
                <h1>Entrar e formulário login</h1>
            </FormsContainerSC>
        </PageLayout>
    )
}

const ImageContainerSC = styled.div`
    width: 32vw;
    height: 32vw;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #fff;
    border-radius: 50px;

    img {
        width: 90%;
    }
`

const FormsContainerSC = styled.section`
    width: 45vw;
    height: 65vh;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    background-color: red;
`