//Lista frutas

const frutas = ["maça", "banana", "melancia", "manga", "uva"];
//console.log('As frutas são',frutas);
//console.log('A primeira fruta é',frutas[0]);
//console.log('A última fruta é', frutas[4]);

//Lista números

const numeros = [15,30,40,28,60,10];
soma = 0;
for (let i = 0; i < numeros.length; i++) {
    soma += numeros[i];
}

//console.log('Os números da lista são', numeros);
//console.log('A soma total é', soma);

//Lista 10 números
const numeros2= [20, 40, 28, 17, 80, 60, 10, 55, 30, 78];
const maiorNumero = Math.max(...numeros);

