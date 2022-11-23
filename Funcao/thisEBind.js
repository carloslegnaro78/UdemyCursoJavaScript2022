const pessoa = {
    saudacao: 'Bom dia!',
    fala(){
        console.log(this.saudacao)
    }
}

pessoa.fala()
const falar = pessoa.fala
falar() // conflito entre paradigmas: funcional e OO

const falarDePessoa = pessoa.fala.bind(pessoa)
falarDePessoa()