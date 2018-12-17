const hexColor = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];
const colorBtn = document.querySelector('.colorBtn');
const bgColor = document.querySelector('body');
const hexCode = document.querySelector('.hex');

colorBtn.addEventListener('click', hexGen);

function hexGen(){
  let hex = "#";
  for (let i = 0; i < 6; i++) {
    let random = Math.floor(Math.random()*hexColor.length);
    hex += hexColor[random];
  }
  bgColor.style.backgroundColor = hex;
  hexCode.innerHTML = hex;
}
