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

queryTwo = document.getElementById('query-two');

placeholderOne = document.getElementById('placeholder-one');
placeholderTwo = document.getElementById('placeholder-two');

beach = document.getElementById('beach');
rainforest = document.getElementById('rainforest');
shouldWake = document.getElementById('should-wake');
shouldNotWake = document.getElementById('should-not-wake');

beach.onclick = () => {
    dropdownOptions.style.display = 'none';
    placeholderOne.innerHTML = 'beach';
    placeholderOne.setAttribute('class', 'drop-chosen');
    queryTwo.style.display = 'block';
};

rainforest.onclick = () => {
    dropdownOptions.style.display = 'none';
    placeholderOne.innerHTML = 'rainforest';
    placeholderOne.setAttribute('class', 'drop-chosen');
    queryTwo.style.display = 'block';
};

shouldWake.onclick = () => {
    dropdownOptions.style.display = 'none';
    placeholderTwo.innerHTML = 'should';
    placeholderTwo.setAttribute('class', 'drop-chosen');
};

shouldNotWake.onclick = () => {
    dropdownOptions.style.display = 'none';
    placeholderTwo.innerHTML = `shouldn't`;
    placeholderTwo.setAttribute('class', 'drop-chosen');
};


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