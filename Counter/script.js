const addBtn = document.querySelector('#increase');
const subBtn = document.querySelector('#decrease');
const counter = document.querySelector('#count');

let count = 0;
addBtn.addEventListener('click', addNo);
subBtn.addEventListener('click', subNo);

function addNo(){
  count++;
  counter.innerHTML = count;

  if (counter.innerHTML > '0') {
    counter.style.color = 'green';
  }
  else if (counter.innerHTML === '0') {
    counter.style.color = '#000';
  }

}
function subNo(){
  count--;
  counter.innerHTML = count;

  if (counter.innerHTML < '0') {
    counter.style.color = 'red';
  }
  else if (counter.innerHTML === '0') {
    counter.style.color = '#000';
  }

}
