import { useNavigate } from "react-router-dom";
import styled from "styled-components";

export default function Post({ position, post, colors }) {
    const navigate = useNavigate();

    const hasText = post.text !== '';
    // const hasImage = post.image !== undefined;
    const hasButton = post.button !== '';
    const bgColors = [
        { background: colors.color1, button: colors.color2 },
        { background: colors.color2, button: colors.color3 }
    ];


    if (hasButton) {
        //se position for par recebe bgColors[0], se não bgColors[1]
        return (
            <PostButtonSC color={bgColors[position % 2]}>
                <h1>{post.title}</h1>
                {hasText && (<p>{post.text}</p>)}
                <button onClick={() => navigate(post.path)}>{post.button}</button>
            </PostButtonSC>
        )
    } else if (position % 2 === 0) {
        return (
            <PostTextSC color={bgColors[0]}>
                <img src={post.image} alt="imagem" />
                <div>
                    <h1>{post.title}</h1>
                    <p>{post.text}</p>
                </div>
            </PostTextSC>
        )
    } else {
        return (
            <PostTextSC color={bgColors[1]}>
                <div>
                    <h1>{post.title}</h1>
                    <p>{post.text}</p>
                </div>
                <img src={post.image} alt="imagem" />
            </PostTextSC>
        )
    }
}

const PostTextSC = styled.div`
    width: 100%;
    height: 35vh;
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
            margin-top: 3vh;
            margin-bottom: 1em;
            text-align: center;
        }

        p {
            font-size: 0.6em;
            line-height: 1.2em;
            text-align: left;
        }
    }

    img {
        height: 33vh;
    }

    @media (max-width: 1200px) {
        height: 30vh;
        img {
            height: 20vh;
        }

        div {
            width: 60%;
        }
    }
`;

const PostButtonSC = styled.div`
    width: 100%;
    height: 35vh;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    background-color: ${props => props.color.background};

    h1 {
        font-size: 1.2em;
    }

    p {
        font-size: 0.6em;
        padding-left: 1%;
    }

    button {
        width: 30%;
        height: 7vw; 
        min-width: 200px;
        min-height: 60px;
        background-color: ${props => props.color.button}; 
        color: #fff;
        font-size: 0.7em;
        border-radius: 2em;
        box-shadow: 0 5px 2px 1px rgba(0, 0, 0, 0.2);
    }
`;