/**escreva um algoritimo que diga se o usuario for menor de 18 anos ele nao pode entrar na festa, se for maior de 18 anos ele pode entrar na festa */

function entradaDaFesta(nome, idade) {
  if (idade < 18) {
    return `Infelizmente ${nome}, voce nao possui idade para entrar na festa.`;
  } else {
    return `Parabens ${nome}, voce possui idade para entrar na festa.`;
  }
}

console.log(entradaDaFesta("Trevor Philips", 45));
