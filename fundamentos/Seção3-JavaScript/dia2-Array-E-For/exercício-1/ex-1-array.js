const numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let soma = 0;
let media;
let maior;

for(let index = 1; index < numbers; index +=1){
  soma += numbers[index];
}
console.log(soma)
