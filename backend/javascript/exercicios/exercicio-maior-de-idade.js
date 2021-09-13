var nome = 'Lucas Cardoso';
var sexo = true
var idadeM = ''

// if e else if
if (idade < 18) {
  idadeM = ' é menor de idade'
} else if (idade >= 18) {
  idadeM = ' é maior de idade'
}
/* RESULTADO 
console.log('O ' + nome + idadeM); 
*/

var idade = 14
var condicao = idade >= 18;

// if e else
if (condicao) {
  console.log('maior de idade');
} else {
  console.log('menor de idade');
} 



//ternario
condicao ? console.log('maior de idade') : console.log('menor de idade')
