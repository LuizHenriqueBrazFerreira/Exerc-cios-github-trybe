const irmaoDoJorel = document.createElement('section');
irmaoDoJorel.innerText = 'Olá, sou o irmão do jorel!';

const pai = document.querySelector('#pai');

pai.appendChild(irmaoDoJorel);

const paiOndeEstaVoce = document.querySelector('#elementoOndeVoceEsta');

const filhoOndeEstaVoce = document.createElement('section');
filhoOndeEstaVoce.id = 'Onde esta você meu filho??????';
filhoOndeEstaVoce.innerText = 'Im blue, im feel alright?';
filhoOndeEstaVoce.style.backgroundColor = 'blue';

paiOndeEstaVoce.appendChild(filhoOndeEstaVoce);

const filhoDoFilhoDoFilho = document.createElement('p');
filhoDoFilhoDoFilho.id = 'filhodofilhodofilho';
filhoDoFilhoDoFilho.innerText = 'FilhoDoFilhoDoFilho';

const paiDoFilhoDoFilhoDoFilho = document.querySelector('#primeiroFilhoDoFilho');

paiDoFilhoDoFilhoDoFilho.appendChild(filhoDoFilhoDoFilho);


const terceiroFilho = filhoDoFilhoDoFilho;
 terceiroFilho.parentElement.parentElement.nextElementSibling;
 terceiroFilho.innerText = 'Eu sou o caçula';

console.log(terceiroFilho)