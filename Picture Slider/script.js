const next = document.querySelector('.nextBtn');
const previous = document.querySelector('.prevBtn');
const container = document.querySelector('.images');

let counter = 0;

next.addEventListener('click', nextSlide);
previous.addEventListener('click', previousSlide);

function nextSlide() {
  container.animate([{opacity:'0.1'},{opacity:'1.0'}], {duration:1000, fill:'forwards'});
  if (counter===6) {
    counter = -1;
  }
  counter++;
  container.style.backgroundImage = `url(img/bcg-${counter}.jpeg)`;
}
function previousSlide(){
  container.animate([{opacity:'0.1'},{opacity:'1.0'}], {duration:1000, fill:'forwards'});
  if (counter===0) {
    counter = 7;
  }
  counter--;
  container.style.backgroundImage = `url(img/bcg-${counter}.jpeg)`;
}
