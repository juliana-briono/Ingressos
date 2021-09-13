const { usuarios } = require('./data/usuario')
const {valorTotal} = require('./funcoes/valor-total')

const { ingressos } = require('./data/ingressos')

const { validaQuantidadeUsuario} = require ('./funcoes/valida-quantidade-usuarios')


const resposta = validaQuantidadeUsuario(usuarios.length, ingressos)

if (resposta == true) {
    const total = valorTotal(usuarios)
    console.log(total);
} else {
    console.log('quantidade de ingressos ou usuários não são iguais')
}




