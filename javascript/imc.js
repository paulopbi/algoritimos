/**escreva um algoritimo que calcule o imc */

function imc(peso, altura) {
  const formulaImc = peso / (altura * altura);
  return formulaImc;
}

console.log(imc(68, 1.7));
