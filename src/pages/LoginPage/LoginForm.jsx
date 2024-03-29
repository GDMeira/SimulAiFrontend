import styled from "styled-components";
import { Alert, AlertIcon, Button, FormControl, FormErrorMessage, Input, InputGroup, InputLeftElement, InputRightElement, Stack, Text } from "@chakra-ui/react";
import { FcGoogle } from "react-icons/fc";
import { BsFacebook, BsKey } from "react-icons/bs";
import { AiOutlineMail, AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useContext } from "react";
import ColorContext from "../../contexts/colors";
import { useState } from "react";
import { signIn } from "../../routes/controller";
import UserContext from "../../contexts/user";
import { useNavigate } from "react-router-dom";
import { pages } from "../../routes/routes";

export default function LoginForm() {
    const { setUser } = useContext(UserContext);
    const { color1, color2, color3 } = useContext(ColorContext);
    const [formStates, setFormStates] = useState({
        email: { value: "", isInvalid: false },
        password: { value: "", isInvalid: false }
    })
    const [show, setShow] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [loginError, setLoginError] = useState(false);
    const navigate = useNavigate();

    const handleClick = () => setShow(!show);

    function handleChange(event) {
        const fieldName = event.target.name;
        const fieldValue = event.target.value;

        const newFormStates = {
            ...formStates,
            [fieldName]: {
                ...formStates[fieldName],
                value: fieldValue,
                isInvalid: false
            }
        };

        setFormStates(newFormStates);
        if (loginError) setLoginError(false);
    }

    async function handleSubmit(event) {
        event.preventDefault();

        let newFormStates = { ...formStates };
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!emailRegex.test(newFormStates.email.value)) {
            newFormStates = {
                ...newFormStates,
                email: { ...newFormStates.email, isInvalid: true }
            };
        }

        let body = {};

        if (Object.entries(newFormStates).some(([key, state]) => state.isInvalid)) {
            setFormStates(newFormStates);
            return;
        } else {
            Object.entries(newFormStates).forEach(([key, state]) => body[key] = state.value)
        }

        setIsLoading(true);

        try {
            const answer = await signIn(body);
            setUser(answer.data);
            localStorage.setItem("userSA", JSON.stringify(answer.data));
            navigate(pages.tests)
        } catch (error) {
            if (error.response.status === 401) {
                setFormStates({
                    ...formStates,
                    password: { ...formStates.password, isInvalid: true },
                    email: { ...formStates.email, isInvalid: true }
                })

                setLoginError(true);
            }
        }

        setIsLoading(false);
    }

    return (
        <FormsContainerSC>
            <Stack direction='column' spacing={4} w='100%'>
                <Button
                    h={window.screen.width > 1200 ? '80px' : '60px'}
                    fontSize={window.screen.width > 1200 ? 'lg' : 'md'}
                    leftIcon={<FcGoogle size={30} />}
                    color={color1}
                    variant='solid'
                    textColor='black'
                    isLoading={isLoading}
                >
                    Entrar com google
                </Button>
                <Button
                    h={window.screen.width > 1200 ? '80px' : '60px'}
                    fontSize={window.screen.width > 1200 ? 'lg' : 'md'}
                    leftIcon={<BsFacebook size={30} />}
                    color={color1}
                    variant='solid'
                    textColor='black'
                    isLoading={isLoading}
                >
                    Entrar com Facebook
                </Button>
            </Stack>
            <Breaker />

            {loginError && <Alert status='error' w={window.screen.width > 1200 ? '60%' : '100%'} fontSize={20} borderRadius={5}>
                    <AlertIcon />
                    Email ou senha inválida
                </Alert>}
            <FormSC onSubmit={handleSubmit} >
                

                <FormControl isInvalid={formStates.email.isInvalid}>
                    <InputGroup >
                        <InputLeftElement pointerEvents='none' h='100%'>
                            <AiOutlineMail color='gray.300' size={30} />
                        </InputLeftElement>
                        <Input
                            h={window.screen.width > 1200 ? '60px' : '50px'}
                            required
                            type='text'
                            placeholder='mail@prov.com'
                            bgColor={color1}
                            name="email"
                            value={formStates.email.value}
                            onChange={handleChange}
                            size='lg'
                            disabled={isLoading}
                        />
                    </InputGroup>
                    <FormErrorMessage>Email inválido.</FormErrorMessage>
                </FormControl>

                <FormControl isInvalid={formStates.password.isInvalid} >
                    <InputGroup mt={3}>
                        <InputLeftElement pointerEvents='none' h='100%' >
                            <BsKey color='gray.300' size={30} />
                        </InputLeftElement>
                        <Input
                            h={window.screen.width > 1200 ? '60px' : '50px'}
                            required
                            type={show ? 'text' : 'password'}
                            placeholder='***'
                            bgColor={color1}
                            name="password"
                            value={formStates.password.value}
                            onChange={handleChange}
                            size='lg'
                            disabled={isLoading}
                        />
                        <InputRightElement width='4.5rem' h='100%'>
                            <Button h='1.75rem' size='sm' onClick={handleClick} bg='none'>
                                {show ? <AiOutlineEyeInvisible size={30} /> : <AiOutlineEye size={30} />}
                            </Button>
                        </InputRightElement>
                    </InputGroup>
                    <FormErrorMessage>Senha inválida.</FormErrorMessage>
                </FormControl>

                <Text
                    fontSize='sm'
                    textAlign='right'
                    w='98%'
                    mt={1}
                    cursor='pointer'
                >
                    Esqueci minha senha
                </Text>

                <Button
                    isLoading={isLoading}
                    type="submit"
                    bgColor={color3}
                    size='lg'
                    w={window.screen.width > 1200 ? '200px' : '100%'}
                    alignSelf='center'
                    mt={5}
                >
                    Entrar
                </Button>

                <Text
                    fontSize='lg'
                    cursor='pointer'
                    mt={5}
                    _hover={{ color: '#fff' }}
                    onClick={() => navigate(pages.signUp)}
                    textAlign='center'
                >
                    Ainda não tem uma conta? Cadastre-se
                </Text>

            </FormSC>

        </FormsContainerSC>
    )
}

const FormsContainerSC = styled.section`
    width: 40vw;
    min-height: 65vh;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;

    @media (max-width: 1200px) {
        width: 70vw;
        min-height: 78vh;
    }
`

const FormSC = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    width: 100%;
`

const Breaker = styled.hr`
    width: 100%;
    border: 1px solid #767373;
`