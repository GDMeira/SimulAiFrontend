import { useNavigate } from "react-router-dom";
import { Flex, Text } from "@chakra-ui/react";

export default function CardPost({ position, post }) {
    const isMobile = window.innerWidth < 1200;

    return (
        <Flex
            h="65vh"
            w="100%"
            bg={`url(${post.bgImage}) no-repeat center center / cover`}
            flexDirection="column"
            justifyContent="flex-end"
            alignItems="center"
            color="white"
            textAlign="center"
        >
            <Text color='#fff' bgColor='#49474791' fontSize={isMobile ? 30 : 50} fontWeight={700} mb={10}>
                {post.title}
            </Text>
        </Flex>
    )
}
