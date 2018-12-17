const messageIn = document.querySelector('#msgIn');
const messageOut = document.querySelector('#msgOut');
const messageBtn = document.querySelector('#msgBtn');

messageBtn.addEventListener('click', seeMsg);

function seeMsg(){
  let message = messageIn.value;
  if (message==="") {
    alert('Please enter your message');
  }
  else {
    messageOut.innerHTML = message;
    messageIn.value = '';  
  }
  }
