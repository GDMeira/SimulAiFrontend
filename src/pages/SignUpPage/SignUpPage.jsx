import styled from "styled-components";
import PageLayout from "../../components/PageLayout";
import imgLoginDesktop from "../../assets/loginDesktop.jpg";
import SignUpForm from "./SignUpForm";

export default function SignUpPage() {
    const isMobile = window.innerWidth < 1200;

    return (
        <PageLayout>
            {!isMobile && <ImageContainerSC>
                <img src={imgLoginDesktop} alt="Acesse sua conta" />
            </ImageContainerSC>}
            <SignUpForm />
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
    box-shadow: 0px 0px 7px rgba(0, 0, 0, 0.25);
    margin-right: 1vw;

    img {
        width: 90%;
    }
`