// Exercício while

/*let numero = 0
let soma = 0
numero = Number(prompt("Digite um número para ser somado: (para sair digite 0!!!"))

while (numero != 0){
    soma = soma + numero
    numero = Number(prompt("Digite um número para ser somado: (Para sair digite 0!!!"))
}
alert(soma)*/

//Exercícios Laços For

/*let array = [11, 15, 18, 14, 12, 13]
let maiorValor = 0

for (let i = 0; i < 6; i++){
    if (array[i] > maiorValor){
        maiorValor = array[i]
    }
}
alert(maiorValor)

//Exercício 3 For...Of

const palavras  = ["Oi" , "sumido(a)" , "tudo" , "bem?" , "Saudades"]
let frase = ""

for (let indices of palavras){
    frase = frase + indices + " "
}
alert(frase)

//Exercício

let valor = 0
for(let i = 0; i < 5; i++) {
  valor += i
}
console.log(valor)

function imprimirOlaMundo(){
    alert("Olá Mundo!")
}

imprimirOlaMundo()
imprimirOlaMundo()
imprimirOlaMundo()
imprimirOlaMundo()
imprimirOlaMundo()

function imprimeNome(Nome){
    alert(`Olá ${Nome}`)
}

let NomeUser=""
NomeUser = prompt("Digite seu nome:")
imprimeNome(NomeUser)

//Exercício 3

 let numero1 = 3
 let numero2 = 12
 let resultado = 0
 resultado = somaNum(numero1,numero2)
 alert(resultado)
 

//Exercicio 4
function trataArray(input){
    //Inicializa variáveis
    let array = []
    //Armazena primeiro valor dividido por 2
    array.push((input[0]/2))
    array.push((input[(input.length-1)]/2))
    //Retorna array nova
    return array
}

//Declara varíaveis 
let array = [2,3,4,5,6,7,8]
let novaArray = []
//Chama função
novaArray = trataArray(array)
//Escreve com alert
alert(novaArray)*/


