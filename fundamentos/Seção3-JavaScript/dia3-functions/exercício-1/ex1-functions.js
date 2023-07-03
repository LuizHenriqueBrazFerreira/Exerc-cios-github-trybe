const balance = 200;
function addBalance (value){
  return balance + value;
};
function subBalance(value){
  return balance - value;
};
function  multBalance(value){
  return balance * value;
};
function divBalance(value){
  return balance / value;
};


console.log(addBalance(100));
console.log(subBalance(20));
console.log(multBalance(4));
console.log(divBalance(6));