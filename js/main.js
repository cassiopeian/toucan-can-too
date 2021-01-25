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
  dropdownOptions.style.display = 'none';
  placeholderOne.innerHTML = beach.innerHTML;
  placeholderOne.setAttribute('class', 'drop-chosen beach-color');
  bOne.style.display = 'block';
};

bringSnorkel.onclick = () => {
  dropdownOptions.style.display = 'none';
  bBlankOne.innerHTML = bringSnorkel.innerHTML;
  bBlankOne.setAttribute('class', 'drop-chosen beach-color');
};

forgetSnorkel.onclick = () => {
  dropdownOptions.style.display = 'none';
  bBlankOne.innerHTML = forgetSnorkel.innerHTML;
  bBlankOne.setAttribute('class', 'drop-chosen beach-color');
};

// rainforest prompts
rainforest.onclick = () => {
  dropdownOptions.style.display = 'none';
  placeholderOne.innerHTML = rainforest.innerHTML;
  placeholderOne.setAttribute('class', 'drop-chosen rainforest-color');
  rOne.style.display = 'block';
};

shouldWake.onclick = () => {
  dropdownOptions.style.display = 'none';
  rBlankOne.innerHTML = shouldWake.innerHTML;
  rBlankOne.setAttribute('class', 'drop-chosen rainforest-color');
};

shouldNotWake.onclick = () => {
  dropdownOptions.style.display = 'none';
  rBlankOne.innerHTML = shouldNotWake.innerHTML;
  rBlankOne.setAttribute('class', 'drop-chosen rainforest-color');
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