
function TestaCPF() {
    strCPF = document.getElementById("campo_cpf").value;
    var Soma;
    var Resto;
    Soma = 0;
    
    if (strCPF == "") return console.log("Campo cpf vazio");

    if (strCPF == "00000000000") return alert('CPF INVÁLIDO!');

    for (i=1; i<=9; i++) Soma = Soma + parseInt(strCPF.substring(i-1, i)) * (11 - i);
    Resto = (Soma * 10) % 11;

    if ((Resto == 10) || (Resto == 11))  Resto = 0;
    if (Resto != parseInt(strCPF.substring(9, 10)) ) return alert('CPF INVÁLIDO!');

    Soma = 0;
    for (i = 1; i <= 10; i++) Soma = Soma + parseInt(strCPF.substring(i-1, i)) * (12 - i);
    Resto = (Soma * 10) % 11;

    if ((Resto == 10) || (Resto == 11))  Resto = 0;
    if (Resto != parseInt(strCPF.substring(10, 11) ) ) return alert('CPF INVÁLIDO!');
    return alert('O CPF É VALIDO!');
}