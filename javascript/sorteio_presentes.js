const pessoas = ["Alexandre", "Paulo", "Yasmim"];
const premios = ["Tatugem", "Livro", "Iphone"];
const data = ["Natal", "Aniversario", "Ano novo"];
const numeroAleatorio = Math.floor(Math.random() * 3);

console.log(
  `A ${pessoas[numeroAleatorio]} ira ganhar um(a) ${premios[numeroAleatorio]} no ${data[numeroAleatorio]}`
);
