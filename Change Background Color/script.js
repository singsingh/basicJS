const clrBtn = document.querySelector('.btnClass');
const clrBg = document.querySelector('body');
const colors = ['red','blue','green','purple','tomato','yellow','brown'];

clrBtn.addEventListener('click', changColor);

function changColor(){
  //clrBg.style.backgroundColor = colors[1];
  let random = Math.floor(Math.random()*colors.length)
  clrBg.style.backgroundColor = colors[random];
}
