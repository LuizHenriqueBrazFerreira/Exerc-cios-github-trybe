const whereAreYou = document.getElementById('where-are-you');

const whereParent = whereAreYou.parentElement;
whereParent.style.color = 'black';
whereParent.style.backgroundColor = 'green';
whereParent.style.width = '100%';

const firstChildOfChild = whereAreYou.firstElementChild;
firstChildOfChild.innerText = 'Olá, Trybers! Sou Luiz Henrique';

const firstChildByParent = whereParent.firstElementChild;
const firstChildbyWhere = whereAreYou.previousElementSibling;

const text = whereAreYou.nextSibling;

const thirdChild = whereAreYou.nextElementSibling;

const thirdChildByParent = whereParent.lastElementChild.previousElementSibling;