let randomNumber1 = Math.floor(Math.random() * 6 + 1);
let randomimg = '/images/dice' + randomNumber1 + '.png';
let newimg = document.querySelectorAll('img')[0];
newimg.setAttribute('src',randomimg);

let randomNumber2 = Math.floor(Math.random() * 6 + 1);
let randomimg2 = '/images/dice' + randomNumber2 + '.png';
let newimg2 = document.querySelectorAll('img')[1];
newimg2.setAttribute('src',randomimg2);

if (randomNumber1 > randomNumber2) {
 document.querySelector('h1').innerHTML = 'Player 1 Wins! 🎉';
} else if (randomNumber2 > randomNumber1) {
document.querySelector('h1').innerHTML = 'Player 2 Wins! 🎉';
} else {
  document.querySelector('h1').innerHTML = 'Draw!';
 }
