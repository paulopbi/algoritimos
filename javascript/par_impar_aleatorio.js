// Algoritimo de par ou impar com numeros aleatorios
const numero = Math.floor(Math.random() * 1000);

if (numero % 2 === 0) {
  console.log(`O numero: ${numero} e Par!`);
} else {
  console.log(`O numero: ${numero} e Impar!`);
}
