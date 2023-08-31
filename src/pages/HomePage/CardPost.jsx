import { useNavigate } from "react-router-dom";
import { Flex, Text } from "@chakra-ui/react";

export default function CardPost({ position, post }) {
    const navigate = useNavigate();

    const hasText = post.text !== '';

    return (
        <Flex
            h="50vh"
            w="98vw"
            bg={`url(${post.bgImage}) no-repeat center center / cover`}
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            color="white"
            textAlign="center"
        >
            <Text color='#331fea' fontSize={50} fontWeight={700}>
                {post.title}
            </Text>
        </Flex>
    )
}
