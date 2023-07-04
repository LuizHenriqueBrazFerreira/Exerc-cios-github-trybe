const trybeBankCustomers = ['Oliva', 'Nat', 'Gus'];

function addCustomers(people, newPeople){
  for(let index = 0; index < newPeople.length; index += 1){
    (typeof newPeople[index] === 'string') ? trybeBankCustomers.push(newPeople[index]) : console.log('Todos os nomes fornecidos precisam estar escritos entre aspas!');
  };
  return trybeBankCustomers;
};

console.log(addCustomers(trybeBankCustomers, ['Luiz', 'Sabino']));
