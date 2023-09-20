import styled from "styled-components";
import PageLayout from "../../components/PageLayout";
import newTest from "../../assets/newTest.jpg";
import { Button, Text } from "@chakra-ui/react";
import { useContext, useRef } from "react";
import ColorContext from "../../contexts/colors";
import ExcelJS from "exceljs/dist/exceljs.min.js";

export default function SendTest() {
    const isMobile = window.innerWidth < 1200;
    const { color1, color2, color3 } = useContext(ColorContext);

    const fileInputRef = useRef(null);

    const handleFileUpload = () => {
        fileInputRef.current.click();
    };

    const handleFileChange = (e) => {
        const selectedFile = e.target.files[0];

        if (selectedFile) {
            const workbook = new ExcelJS.Workbook();

            const reader = new FileReader();

            reader.onload = async (e) => {
                const data = e.target.result;

                // Carregando o arquivo .xlsx com o exceljs
                await workbook.xlsx.load(data);

                // Obtendo a planilha com o nome "test"
                const worksheet = workbook.getWorksheet("test");

                if (worksheet) {
                    // Convertendo a planilha em um objeto JavaScript
                    const sheetData = [];
                    worksheet.eachRow((row, rowNumber) => {
                            sheetData.push(row.values);
                    });

                    console.log("Dados da planilha 'test':", sheetData);

                    // Faça algo com os dados da planilha, como armazená-los em estado ou enviar para o servidor.
                } else {
                    console.log("A planilha 'test' não foi encontrada no arquivo.");
                }
            };

            reader.readAsArrayBuffer(selectedFile);
        }
    };

    return (
        <PageLayout>
            {!isMobile && <ImageContainerSC>
                <img src={newTest} alt="Acesse sua conta" />
            </ImageContainerSC>}
            <ContainerSC>
                <Text>CADASTRE UMA PROVA</Text>
                <Text fontSize='lg' textAlign='center'>
                    Para cadastrar uma prova baixe
                    o modelo de planilha e preencha
                    com as questões e informações requeridas.
                </Text>

                <Button size='lg' onClick={() => window.open("https://docs.google.com/spreadsheets/d/1IroUYHz19VTk4o25xb8AZVL9k1kJa78ADHfeG12Ge24/edit?usp=sharing", "_blank")}>
                    Acessar planilha modelo
                </Button>
                <Button size='lg' bgColor={color3} onClick={handleFileUpload} >
                    Enviar planilha preenchida
                </Button>
                <input
                    type="file"
                    ref={fileInputRef}
                    style={{ display: "none" }}
                    onChange={handleFileChange}
                    accept=".xlsx"
                />
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
    

    @media (max-width: 1200px) {
        width: 70vw;
        min-height: 78vh;

        margin-bottom: 20px;
    }
`