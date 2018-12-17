const quotes = [
  {
    author: 'Albert Einstein',
    quote: '"Imagination is more important than knowledge."'
  },
  {
    author: 'Confucius',
    quote: '"It does not matter how slowly you go as long as you do not stop."'
  },
  {
    author: 'Walt Disney',
    quote: '"All our dreams can come true, if we have the courage to pursue them."'
  },
  {
    author: 'Estée Lauder',
    quote: '"I never dreamed about success, I worked for it."'
  },
  {
    author: 'Avul Pacir Zainulabidin Abdul Kalam',
    quote: '"Difficulties in your life do not come to destroy you but to help you realise your hidden potential and power. Let difficulties know that you too are difficult."'
  },
  {
    author: 'Victor Hugo',
    quote: '"There is nothing more powerful in the world than the idea that came in time."'
  },
  {
    author: 'Amy Cuddy',
    quote: '"When we close ourselves off, we are not just closing ourselves off to other people, we are closing ourselves off from ourselves and impeding ourselves. When you open up, you allow yourself to be who you are."'
  },
  {
    author: 'Aristotle',
    quote: '"We are what we repeatedly do. Excellence, then, is not an act, but a habit."'
  },
  {
    author: 'Helen Keller',
    quote: '"Never bend your head. Always hold it high. Look the world straight in the eye. "'
  },
  {
    author: 'William James',
    quote: '"Begin to be now what you will be hereafter."'
  },
  {
    author: 'Tony Robbins',
    quote: '"Setting goals is the first step in turning the invisible into the visible."'
  },
  {
    author: 'Chris Evert',
    quote: '"You can’t give up! When you give up, you are re like everybody else!"'
  },
]
const quoteBtn = document.querySelector('#quoteBtn');
const blockQuotes = document.querySelector('#quotes');
const blockAuthors = document.querySelector('#authors');

quoteBtn.addEventListener('click', getQuotes);

function getQuotes() {

  let random = Math.floor(Math.random()*quotes.length);
  blockAuthors.innerHTML = quotes[random].author;
  blockQuotes.innerHTML = quotes[random].quote;
}
