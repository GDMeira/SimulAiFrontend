import styled from "styled-components";
import { Button, FormControl, FormErrorMessage, Input, InputGroup, InputLeftElement, InputRightElement, Text, Tooltip } from "@chakra-ui/react";
import { HiOutlineIdentification } from "react-icons/hi";
import { BsKey, BsTelephone, BsCalendarEvent } from "react-icons/bs";
import { AiOutlineMail, AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { BiSolidInstitution } from "react-icons/bi";
import { useContext } from "react";
import ColorContext from "../../contexts/colors";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { pages } from "../../routes/routes";
import { signUp } from "../../routes/controller";
import dayjs from "dayjs";

export default function SignUpForm() {
    const { color1, color2, color3 } = useContext(ColorContext);
    const [formStates, setFormStates] = useState({
        email: { value: "", isInvalid: false },
        password: { value: "", isInvalid: false },
        passwordConfirm: { value: "", isInvalid: false },
        institution: { value: "", isInvalid: false },
        name: { value: "", isInvalid: false },
        birthday: { value: "", isInvalid: false },
        phone: { value: "", isInvalid: false }
    });
    const [show, setShow] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    const handleClick = () => setShow(!show);

    function phoneBeautify() {
        const phone = formStates.phone.value;

        if (phone.length < 3) {
            return phone;
        } else if (phone.length < 7) {
            return `(${phone.slice(0, 2)}) ${phone.slice(2)}`
        } else if (phone.length < 11) {
            return `(${phone.slice(0, 2)}) ${phone.slice(2, 6)}-${phone.slice(6)}`
        } else {
            return `(${phone.slice(0, 2)}) ${phone.slice(2, 7)}-${phone.slice(7)}`
        }
    }

    function handleChange(event) {
        const fieldName = event.target.name;
        let fieldValue = event.target.value;

        if (fieldName === 'phone') {
            fieldValue = fieldValue.replace(/[()\s-]/g, '');
            if (fieldValue.length > 11) fieldValue = fieldValue.slice(0, 11);
        } 

        const newFormStates = {
            ...formStates,
            [fieldName]: {
                ...formStates[fieldName],
                value: fieldValue,
                isInvalid: false
            }
        };

        setFormStates(newFormStates);
    }

    async function handleSubmit(event) {
        event.preventDefault();
        let newFormStates = { ...formStates };

        if (formStates.password.value !== formStates.passwordConfirm.value) {
            newFormStates = {
                ...newFormStates,
                passwordConfirm: { ...newFormStates.passwordConfirm, isInvalid: true },
            };
        }

        const oldestAccept = dayjs('1900/01/01');

        const today = dayjs();
        const birthdayDate = dayjs(formStates.birthday.value, "YYYY-MM-DD");
        console.log(formStates.birthday.value, birthdayDate.toString(), birthdayDate.isBefore(oldestAccept))

        if (birthdayDate.isAfter(today) || birthdayDate.isBefore(oldestAccept)) {
            newFormStates = {
                ...newFormStates,
                birthday: { ...newFormStates.birthday, isInvalid: true }
            };
        }

        const phoneRegex = /^[0-9]{10,11}$/;
        if (!phoneRegex.test(newFormStates.phone.value)) {
            newFormStates = {
                ...newFormStates,
                phone: { ...newFormStates.phone, isInvalid: true }
            };
        }

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
        delete body.passwordConfirm;
        body.birthday = birthdayDate.format('DD/MM/YYYY').toString();

        console.log(body)

        try {
            await signUp(body);
            navigate(pages.signIn)
        } catch (error) {
            if (error.response) {
                alert(error.response.data);
            } else {
                alert(error);
            }
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <FormsContainerSC>
            <FormSC onSubmit={handleSubmit} >
                <Tooltip hasArrow placement='top' label='Seu email' bgColor={color3} color={color2}>
                    <FormControl isInvalid={formStates.email.isInvalid} >
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
                </Tooltip>

                <Tooltip hasArrow placement='top' label='Seu nome' bgColor={color3} color={color2}>
                    <InputGroup mt={3}>
                        <InputLeftElement pointerEvents='none' h='100%'>
                            <HiOutlineIdentification color='gray.300' size={30} />
                        </InputLeftElement>
                        <Input
                            h={window.screen.width > 1200 ? '60px' : '50px'}
                            required
                            type='text'
                            placeholder='Joana Dark'
                            bgColor={color1}
                            name="name"
                            value={formStates.name.value}
                            isInvalid={formStates.name.isInvalid}
                            onChange={handleChange}
                            size='lg'
                            disabled={isLoading}
                        />
                    </InputGroup>
                </Tooltip>

                <Tooltip hasArrow placement='top' label='Instituição onde estuda/estudou' bgColor={color3} color={color2}>
                    <InputGroup mt={3}>
                        <InputLeftElement pointerEvents='none' h='100%'>
                            <BiSolidInstitution color='gray.300' size={30} />
                        </InputLeftElement>
                        <Input
                            h={window.screen.width > 1200 ? '60px' : '50px'}
                            required
                            type='text'
                            placeholder='Universidade de São Paulo'
                            bgColor={color1}
                            name="institution"
                            value={formStates.institution.value}
                            isInvalid={formStates.institution.isInvalid}
                            onChange={handleChange}
                            size='lg'
                            disabled={isLoading}
                        />
                    </InputGroup>
                </Tooltip>

                <Tooltip hasArrow placement='top' label='Número de celular' bgColor={color3} color={color2}>
                    <FormControl isInvalid={formStates.phone.isInvalid} >
                        <InputGroup mt={3}>
                            <InputLeftElement pointerEvents='none' h='100%'>
                                <BsTelephone color='gray.300' size={30} />
                            </InputLeftElement>
                            <Input
                                h={window.screen.width > 1200 ? '60px' : '50px'}
                                required
                                type='text'
                                placeholder='(16) 91234-5678'
                                bgColor={color1}
                                name="phone"
                                value={phoneBeautify()}
                                onChange={handleChange}
                                size='lg'
                                disabled={isLoading}
                            />
                        </InputGroup>
                        <FormErrorMessage>Telefone inválido.</FormErrorMessage>
                    </FormControl>
                </Tooltip>

                <Tooltip hasArrow placement='top' label='Data de nascimento' bgColor={color3} color={color2}>
                    <FormControl isInvalid={formStates.birthday.isInvalid} >
                        <InputGroup mt={3}>
                            <InputLeftElement pointerEvents='none' h='100%'>
                                <BsCalendarEvent color='gray.300' size={30} />
                            </InputLeftElement>
                            <Input
                                h={window.screen.width > 1200 ? '60px' : '50px'}
                                required
                                type="date"
                                placeholder='Data de nascimento'
                                bgColor={color1}
                                name="birthday"
                                value={formStates.birthday.value}
                                onChange={handleChange}
                                size='lg'
                                disabled={isLoading}
                                min="1900-01-01"
                            />
                        </InputGroup>
                        <FormErrorMessage>Data de nascimento inválida.</FormErrorMessage>
                    </FormControl>
                </Tooltip>

                <Tooltip hasArrow placement='top' label='Sua senha' bgColor={color3} color={color2}>
                    <InputGroup mt={3}>
                        <InputLeftElement pointerEvents='none' h='100%' >
                            <BsKey color='gray.300' size={30} />
                        </InputLeftElement>
                        <Input
                            h={window.screen.width > 1200 ? '60px' : '50px'}
                            required
                            type={show ? 'text' : 'password'}
                            placeholder='senha'
                            bgColor={color1}
                            name="password"
                            value={formStates.password.value}
                            isInvalid={formStates.password.isInvalid}
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
                </Tooltip>

                <Tooltip hasArrow placement='top' label='Confirmação de senha' bgColor={color3} color={color2}>
                    <FormControl isInvalid={formStates.passwordConfirm.isInvalid} >
                        <InputGroup mt={3}>
                            <InputLeftElement pointerEvents='none' h='100%' >
                                <BsKey color='gray.300' size={30} />
                            </InputLeftElement>
                            <Input
                                h={window.screen.width > 1200 ? '60px' : '50px'}
                                required
                                type={show ? 'text' : 'password'}
                                placeholder='confirmação de senha'
                                bgColor={color1}
                                name="passwordConfirm"
                                value={formStates.passwordConfirm.value}

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
                        <FormErrorMessage>Confirmação de senha incorreta.</FormErrorMessage>
                    </FormControl>
                </Tooltip>

                <Button
                    isLoading={isLoading}
                    type="submit"
                    bgColor={color3}
                    size='lg'
                    w={window.screen.width > 1200 ? '200px' : '100%'}
                    alignSelf='center'
                    mt={5}
                >
                    Cadastrar
                </Button>

                <Text
                    fontSize='lg'
                    cursor='pointer'
                    mt={5}
                    _hover={{ color: '#fff' }}
                    onClick={() => navigate(pages.signIn)}
                    textAlign='center'
                >
                    Já tem cadastro? Faça login
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
        min-height: 80vh;

        margin-bottom: 20px;
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