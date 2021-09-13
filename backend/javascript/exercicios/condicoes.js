var nome = 'juliana briono';
var idade = 21
var sexo = true
var somaAnos = idade + 7

var resultado = '';


if (sexo == false) {
    resultado = 'masculino'
}

if(sexo == true) {
    resultado = 'feminino'
}

console.log('A ' + nome + ' tem ' + idade + ' anos e é do sexo ' + resultado + ' e a soma da sua idade com o número 7 é de ' + somaAnos)
