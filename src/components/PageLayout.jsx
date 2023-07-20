import { useContext } from "react";
import ColorContext from "../contexts/colors";
import styled from "styled-components";

export default function PageLayout({children}) {
    const colors = useContext(ColorContext);

    return (
        <LayoutSC colors={colors}>
            {children}
        </LayoutSC>
    )
}

const LayoutSC = styled.main`
    width: 100vw;
    min-height: 79.5vh;
    font-size: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 100px;
    background-image: linear-gradient(to right, ${props => props.colors.color1} 0%, ${props => props.colors.color1} 35%,
        ${props => props.colors.color2} 35%, ${props => props.colors.color2} 100%);
`