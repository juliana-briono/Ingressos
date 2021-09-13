/*function validaQuantidadeUsuario(quantidadeDeUsuarios, quantidadeIngressos) {
    if (quantidadeDeUsuarios == quantidadeIngressos) {
        return true
    } else {
        return false
    }

}*/

const validaQuantidadeUsuario = (quantidadeDeUsuarios, quantidadeIngressos) => {
    if (quantidadeDeUsuarios == quantidadeIngressos) {
        return true
    } else {
        return false
    }
};
    
module.exports = { validaQuantidadeUsuario }