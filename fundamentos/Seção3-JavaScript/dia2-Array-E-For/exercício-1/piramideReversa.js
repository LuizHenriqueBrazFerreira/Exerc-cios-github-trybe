const n = 5;
let linha = '';
let asterisco = '*';
let posicaoLinha = n - 1;

for(let linhaIndex = 0; linhaIndex < n; linhaIndex += 1){
  for(let colunaIndex = 0; colunaIndex < n; colunaIndex += 1){
    if(colunaIndex < posicaoLinha){
      linha = linha + ' ';
    }else{
      linha = linha + asterisco;
    }
  }
  console.log(linha);
  linha = '';
  posicaoLinha -= 1;
}