/**
  Escreva um algoritimo que calcule a area de um triangulo
 */

function calcularTriangulo(base, altura) {
  const area = (base * altura) / 2;
  return `O valor do triangulo e: ${area}`;
}

console.log(calcularTriangulo(16, 4));
