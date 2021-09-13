/*function calculaValor(num1, num2) {
    var soma = num1 + num2;
    console.log(soma);
  } 
  
  calculaValor(2, 2)
  calculaValor(2, 5)
  calculaValor(21, 4)
  calculaValor(10, 10)
  calculaValor(8, 7)
  calculaValor(2, 5)
*/

function calculaValor(sexo, idade){
    let valorTotal = 0;

    if (sexo == "M" && idade >= 18 && idade <= 21) {
        valorTotal = 45
    } else if (sexo == "M" && idade > 21){  
        valorTotal = 55
    } else if (sexo == "F" && idade >= 18 && idade <= 21){  
        valorTotal = 35
    } else if (sexo == "F" && idade > 21){
        valorTotal = 45
    }

    return valorTotal

}

module.exports = {calculaValor}
  
