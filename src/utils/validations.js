export function isURI(str) {
    // Regex para verificar se a string é uma URI
    const uriRegex = /^(http|https|ftp):\/\/[^\s/$.?#].[^\s]*$/;
    return uriRegex.test(str);
}

export function validateTest(test) {
    const today = new Date();
    const error = [];

    if (test.year < 1900 || test.year > today.getFullYear() || !test.year) {
        error.push({ type: 'Ano', message: `${test.year} não é um ano válido.` });
    }

    if (test.month < 1 || test.month > 12 || !test.month) {
        error.push({ type: 'Mês', message: `${test.month} não é um mês válido.` });
    }

    if (!test.institution || test.institution === "" || !test.institution) {
        error.push({ type: 'Instituição', message: `O nome da instituição é obrigatório.` });
    }

    let rowNumber = 5;
    let numberOfAlternatives = 0;

    test.questions.forEach(q => numberOfAlternatives += q.alternatives.length);
    numberOfAlternatives = Math.round(numberOfAlternatives / test.questions.length);

    test.questions.forEach(q => {
        rowNumber++;
        Object.entries(q).forEach(([k, v]) => {
            if (v === '#VALOR!' || v === '#VALUE!') {
                error.push({ type: 'Valor inesperado', message: `Existe 1 valor intratável na linha ${rowNumber} da planilha.` });
            }

            if (k === 'answer' && (v === null || v === '' || v > 4 || v < 0)) {
                error.push({ type: 'Resposta', message: `Existe 1 questão sem resposta na linha ${rowNumber} da planilha.` });
            }

            if (k === 'alternatives' && v.length !== numberOfAlternatives) {
                error.push({ type: 'Alternativas', message: `Existem ${v.length} alternativas na linha ${rowNumber} da planilha.` });
            }
        })
    })

    return error;
}