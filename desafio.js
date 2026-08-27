let nome = "João";
let nota1 = 8;
let nota2 = 6;
function calcularMedia(nota1, nota2) {
    return (nota1 + nota2) / 2;
}


function verificarSituacao(media) {
    if (media >= 6) {
        return "Aprovado";
    } else {
        return "Reprovado";
    }
}

let media = calcularMedia(8, 7);
let situacao = verificarSituacao(media);


console.log("Média:", media);
console.log("Situação:", situacao);
console.log("Aluno: ", nome);
//Desafio EXTRA
function verificarmaior(nota1, nota2) {
    if (nota1 > nota2) {
        return "Nota 1 é maior que Nota 2";
    } else if (nota2 > nota1) {
        return "Nota 2 é maior que Nota 1";
    } else {
        return "As notas são iguais";
    }
}3
console.log(verificarmaior(8, 5)); 
console.log(verificarmaior(7, 7)); 