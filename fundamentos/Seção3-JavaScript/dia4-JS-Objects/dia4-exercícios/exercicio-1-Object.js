const reader = {
  name: 'Julia',
  lastName: 'Pessoa',
  age: 21,
  favoriteBooks: [
    {
      title: 'O Senhor dos Anéis - a Sociedade do Anel',
      author: 'J. R. R. Tolkien',
      publisher: 'Martins Fontes',
    },
  ],
};

reader.favoriteBooks.push(
  {
   title: 'Harry Potter e o Prisioneiro de Azkaban', 
   author: 'JK. Rolling', 
   publisher: 'Rocco',
  },
);

let letter = `O livro favorito de ${reader.name} ${reader.lastName} se chama '${reader.favoriteBooks[1].title}'.`;
console.log(letter);

console.log(reader);
console.log(reader.favoriteBooks[1].title);

let message = `${reader.name} tem ${reader.favoriteBooks.length} livros favoritos.`;
console.log(message);