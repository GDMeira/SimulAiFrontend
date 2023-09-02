import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import ColorContext from "../../contexts/colors";
import { Button, Flex, Text } from "@chakra-ui/react";

export default function Post({ position, post }) {
    const navigate = useNavigate();
    const hasImage = post.image !== undefined;
    const isMobile = window.innerWidth < 1200;

    if (hasImage) {
        return (
            <Flex
                h="65vh"
                w="100%"
                bg={`url(${post.image}) no-repeat center center / cover`}
                flexDirection="column"
                justifyContent="space-around"
                alignItems="center"
                color="white"
                textAlign="center"
                mt={10}
            >
                <Text color='#fff' bgColor='#49474791' fontSize={isMobile ? 30 : 50} fontWeight={700} mb={10}>
                    {post.title}
                </Text>
                <Text color='#fff' bgColor='#49474791' fontSize={isMobile ? 15 : 25} fontWeight={700} mb={10} w={isMobile ? '100%' : '40%'}>
                    {post.text}
                </Text>
                <Button 
                    p={2}
                    color='#fff' 
                    bgColor='#494747dd' 
                    size={isMobile ? 'lg' : '2lg'}
                    onClick={() => navigate(post.path)}
                >
                    {post.button}
                </Button>
            </Flex>
        )
    } else {
        return (
            <Flex
                w={isMobile ? '100%' : '40%'}
                flexDirection="column"
                justifyContent="space-around"
                alignItems="center"
                color="white"
                textAlign="center"
                bgColor='#49474749'
                mt={5}
            >
                <Text color='#fff' fontSize={isMobile ? 30 : 50} fontWeight={700} mb={10}>
                    {post.title}
                </Text>
                <Text color='#fff' fontSize={isMobile ? 15 : 25} fontWeight={700} mb={10}>
                    {post.text}
                </Text>
            </Flex>
        )
    }
}

const PostTextSC = styled.div`
    width: 100%;
    height: auto;
    padding: 1vh 0;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;

    h1 {
        font-size: 0.9em;
        text-align: center;
    }

    p {
        font-size: 0.6em;
        line-height: 1.2em;
        text-align: left;
    }

    @media (max-width: 1200px) {
        height: 30vh;

        h1, p {
            line-height: 1.2em;
            text-align: center;
        }
    }
`;