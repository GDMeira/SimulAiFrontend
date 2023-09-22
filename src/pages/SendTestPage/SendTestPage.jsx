import styled from "styled-components";
import PageLayout from "../../components/PageLayout";
import newTest from "../../assets/newTest.jpg";
import { Alert, AlertDescription, AlertIcon, AlertTitle, Button, Text, useToast } from "@chakra-ui/react";
import { useContext, useRef } from "react";
import ColorContext from "../../contexts/colors";
import ExcelJS from "exceljs/dist/exceljs.min.js";
import { postTest } from "../../routes/controller";
import { useState } from "react";
import { isURI, validateTest } from "../../utils/validations";

export default function SendTest() {
    const isMobile = window.innerWidth < 1200;
    const { color1, color2, color3 } = useContext(ColorContext);
    const [isLoading, setIsLoading] = useState(false);
    const [worksheetError, setWorksheetError] = useState([]);
    const toast = useToast()
    const fileInputRef = useRef(null);

    function validateAndSendTest(test) {
        const errors = validateTest(test);

        if (errors.length > 0) {
            toast({
                title: `Ocorreu um erro no processamento da prova.`,
                status: 'error',
                isClosable: true,
            })
            setIsLoading(false);
            setWorksheetError(errors);
            console.log(worksheetError);
            console.log(test)

            return
        }

        console.log(test)

        postTest(test)
            .then(() => {
                console.log('Sucesso!!!');
                toast({
                    title: `Sua prova foi salva com sucesso!!!`,
                    status: 'success',
                    isClosable: true,
                })
            })
            .catch(e => {
                console.error(e);
                toast({
                    title: `Ocorreu um erro ao tentar salvar a prova.`,
                    status: 'error',
                    description: `${e.message}`,
                    isClosable: true,
                })
                setWorksheetError({ type: e.type, message: e.message })
            });
    }

    const handleFileUpload = () => {
        setIsLoading(true);
        fileInputRef.current.click();
    };

    const handleFileChange = async (e) => {
        const selectedFile = e.target.files[0];

        if (selectedFile) {
            const workbook = new ExcelJS.Workbook();
            const reader = new FileReader();

            reader.onload = async (e) => {
                const test = { questions: [] };
                const data = e.target.result;

                // Carregando o arquivo .xlsx com o exceljs
                await workbook.xlsx.load(data);

                // Obtendo a planilha com o nome "test"
                const worksheet = workbook.getWorksheet("test");

                if (worksheet) {
                    // Convertendo a planilha em um objeto
                    worksheet.eachRow((row, rowNumber) => {
                        const rowData = {};

                        if (rowNumber === 1) { // cabeçalhos
                            row.eachCell((cell, colNumber) => {
                                rowData[colNumber] = cell.value;
                            });
                            test.institution = rowData[2];
                        }

                        if (rowNumber === 2) { // cabeçalhos
                            row.eachCell((cell, colNumber) => {
                                rowData[colNumber] = cell.value;
                            });
                            test.year = rowData[2];
                        }

                        if (rowNumber === 3) { // cabeçalhos
                            row.eachCell((cell, colNumber) => {
                                rowData[colNumber] = cell.value;
                            });
                            test.month = rowData[2];
                        }

                        if (rowNumber > 5) { // Comece a partir da quinta linha para ignorar cabeçalhos
                            const newQuestion = {
                                category: null,
                                resolution: null,
                                images: null,
                                answer: null,
                                alternatives: []
                            };
                            const alphabet = ['a', 'b', 'c', 'd', 'e'];
                            row.eachCell((cell, colNumber) => {
                                rowData[colNumber] = cell.value;
                                if (colNumber === 1) newQuestion.question = cell.value;
                                if (colNumber >= 2 && colNumber <= 6) {
                                    if (isURI(cell.value)) {
                                        newQuestion.alternatives.push({ text: '', image: cell.value });
                                    } else {
                                        newQuestion.alternatives.push({ text: cell.value, image: '' })
                                    }
                                }
                                if (colNumber === 7) newQuestion.category = cell.value;
                                if (colNumber === 8) newQuestion.answer = alphabet.indexOf(cell.value.toLowerCase());
                                if (colNumber === 9) newQuestion.resolution = cell.value;
                                if (colNumber === 10) newQuestion.images = cell.value;
                            });
                            test.questions.push(newQuestion);
                        }
                    });

                    validateAndSendTest(test);
                }
            }
            reader.readAsArrayBuffer(selectedFile);

            fileInputRef.current.value = null;

            setIsLoading(false);
        };
    }


    return (
        <PageLayout>
            {!isMobile && <ImageContainerSC>
                <img src={newTest} alt="Acesse sua conta" />
            </ImageContainerSC>}
            <ContainerSC>
                <Text fontSize={window.screen.width > 1200 ? '1.2em' : '0.8em'} textAlign='center'>CADASTRE UMA PROVA</Text>
                <Text fontSize='lg' textAlign='center'>
                    Para cadastrar uma prova baixe
                    o modelo de planilha e preencha
                    com as questões e informações requeridas.
                </Text>

                <Button size='lg' onClick={() => window.open("https://docs.google.com/spreadsheets/d/1IroUYHz19VTk4o25xb8AZVL9k1kJa78ADHfeG12Ge24/edit?usp=sharing", "_blank")}>
                    Acessar planilha modelo
                </Button>
                <Button size='lg' bgColor={color3} onClick={handleFileUpload} isLoading={isLoading}>
                    Enviar planilha preenchida
                </Button>
                <input
                    type="file"
                    ref={fileInputRef}
                    style={{ display: "none" }}
                    onChange={handleFileChange}
                    accept=".xlsx"
                />

                {worksheetError.length > 0 && worksheetError.map(e => (
                    <Alert key={e.message} status='error' w={window.screen.width > 1200 ? '60%' : '100%'} fontSize={window.screen.width > 1200 ? '0.3em' : '0.25em'} borderRadius={5}>
                        <AlertIcon />
                        <AlertTitle>{e.type}</AlertTitle>
                        <AlertDescription>{e.message}</AlertDescription>
                    </Alert>
                ))}

            </ContainerSC>
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
    margin-right: 3vw;

    img {
        width: 90%;
    }
`
const ContainerSC = styled.section`
    width: 40vw;
    min-height: 65vh;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    gap: 15px;
    

    @media (max-width: 1200px) {
        width: 70vw;
        min-height: 78vh;

        margin-bottom: 20px;
    }
`