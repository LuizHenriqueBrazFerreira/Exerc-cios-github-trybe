const firstTitle = document.createElement('h1');
firstTitle.innerText = 'TrybeTrip - Agência de Viagens';
document.body.appendChild(firstTitle);
firstTitle.className = 'title';

const main = document.createElement('main');
main.className = 'main-content';
document.body.appendChild(main);
main.style.backgroundColor = 'green';

const firstSection = document.createElement('section');
firstSection.className = 'center-content';

main.appendChild(firstSection);

const firstP = document.createElement('p');
firstP.innerText = 'Olá!'
firstSection.appendChild(firstP);

const secondSection = document.createElement('section');
secondSection.className = 'left-content';

main.appendChild(secondSection);

const thirdSection = document.createElement('section');
thirdSection.className = 'right-content';
thirdSection.style.marginRight = 'auto';

main.appendChild(thirdSection);

const img = document.createElement('img');
img.className = 'small-image';
img.src = 'https://picsum.photos/200';

secondSection.appendChild(img);

const unList = document.createElement('ul');
thirdSection.appendChild(unList);

const numbers = ['um', 'dois', 'três', 'quatro', 'cinco', 'seis', 'sete', 'oito', 'nove', 'dez']

for (let index = 0; index < numbers.length; index += 1){
  const list = document.createElement('li');
  list.innerText = numbers[index];
  unList.appendChild(list);
}

for (let indexh = 0; indexh < 3; indexh +=1){
  const subtitle = document.createElement('h3');
  main.appendChild(subtitle);
  subtitle.className = 'description';
}

main.removeChild(secondSection);

unList.lastChild.remove();
unList.lastChild.remove();