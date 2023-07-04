const trybeBankCustomers = ['Oliva', 'Nat', 'Gus'];

function addCustomers(customer){
  if (typeof customer != 'string'){;
    return 'O valor está incorreto, digite uma string!';
} else{
  trybeBankCustomers.push(customer);
  return 'Pessoa adicionada com sucesso';
  };
};

console.log(addCustomers('Luiz'));
console.log(trybeBankCustomers);