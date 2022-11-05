//Armazenando uma funcao em variavel e constante

const imprimirSoma = function (a, b) {
    console.log(a + b)
}

imprimirSoma(2, 3)

// Armazenando um funcao arrow em uma variavel
const soma= (a, b) => {
    return a + b
}

console.log(soma(2,3))

// retorno implícito
const subtracao = (a, b) => a - b
console.log(subtracao(2, 3))