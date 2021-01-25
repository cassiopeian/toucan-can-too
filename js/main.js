startButton = document.getElementById('start-button');
// introBox = document.getElementById('intro-box');
homeItems = document.getElementById('home-flex-container');
storyOptions = document.getElementById('story-options');
arrow = document.querySelector('.arrow');

dropdownOptions = document.querySelector('.dropdown-options');

// startButton.onclick = () => {
//     document.body.style.backgroundColor = '#0a151b';
//     homeItems.style.display = 'none';
//     storyOptions.style.display = 'block';
//     startButton.style.display = 'none';
// };

function bumpUp() {
  dropdownOptions.style.display = 'none';
  window.scrollBy(0, 120);
};

// CHOOSING FROM THE DROPDOWNS 

const placeholderOne = document.getElementById('placeholder-one');
const rBlankOne = document.getElementById('r-blank-one');
const bBlankOne = document.getElementById('b-blank-one');

const beach = document.getElementById('beach');
const bOne = document.getElementById('b-one');
const bringSnorkel = document.getElementById('bring-snorkel');
const forgetSnorkel = document.getElementById('forget-snorkel');

const rainforest = document.getElementById('rainforest');
const rOne = document.getElementById('r-one');
const shouldWake = document.getElementById('should-wake');
const shouldNotWake = document.getElementById('should-not-wake');

// beach prompts
beach.onclick = () => {
  placeholderOne.innerHTML = beach.innerHTML;
  placeholderOne.setAttribute('class', 'drop-chosen beach-color');
  bOne.style.display = 'block';
  bumpUp();
};

bringSnorkel.onclick = () => {
  bBlankOne.innerHTML = bringSnorkel.innerHTML;
  bBlankOne.setAttribute('class', 'drop-chosen beach-color');
  bumpUp();
};

forgetSnorkel.onclick = () => {
  bBlankOne.innerHTML = forgetSnorkel.innerHTML;
  bBlankOne.setAttribute('class', 'drop-chosen beach-color');
  bumpUp();
};

// rainforest prompts
rainforest.onclick = () => {
  placeholderOne.innerHTML = rainforest.innerHTML;
  placeholderOne.setAttribute('class', 'drop-chosen rainforest-color');
  rOne.style.display = 'block';
  bumpUp();
};

shouldWake.onclick = () => {
  rBlankOne.innerHTML = shouldWake.innerHTML;
  rBlankOne.setAttribute('class', 'drop-chosen rainforest-color');
  bumpUp();
};

shouldNotWake.onclick = () => {
  rBlankOne.innerHTML = shouldNotWake.innerHTML;
  rBlankOne.setAttribute('class', 'drop-chosen rainforest-color');
  bumpUp();
};

// SLOTH MENU

$('.hamburger').on('click', function(){
  $('nav').animate({left: 0});
});
  
$('.close-nav').on('click', function(){
  $('nav').animate({left: '100%'});
});
  
$(window).on('resize', function(){
  $('nav').removeAttr('style');
});

let slothMenu = document.getElementById('sloth-menu');

slothMenu.addEventListener('mouseenter', function(event) {
  event.target.setAttribute('src', 'images/sloth-menu-hover.svg');
}, false);

slothMenu.addEventListener('mouseleave', function(event) {
  event.target.setAttribute('src', 'images/sloth-menu.svg');
}, false);

  
// selectHolder.onclick = () => {
//     arrow.style.transform = 'rotate(225deg)';
//     arrow.style.margin = '0 0 0 10px';
// };

// selectHolder.onclick = () => {
//     dropdownOptions.style.display = 'block';
// };

// selectHolder.onmouseover = () => {
//     dropdownOptions.style.display = 'block';
// };
// selectHolder.addEventListener('mouseout', )