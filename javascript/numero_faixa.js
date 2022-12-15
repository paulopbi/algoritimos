// dado um numero inteiro verificar se ele compreende entre 20 e 90
const numero = Math.floor(Math.random() * 100);

if (numero >= 20 && numero <= 90) {
  console.log(`O numero ${numero}, esta na faixa de 20 a 90.`);
} else {
  console.log(`O numero ${numero}, esta fora da faixa.`);
}
