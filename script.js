const seeDetails = document.querySelector('.pots__header > span');
const pots = document.querySelector('.pots');

seeDetails.addEventListener('click', () => {
  pots.classList.toggle('non-expanded'); 
});