startButton = document.getElementById('start-button');
// introBox = document.getElementById('intro-box');
homeItems = document.getElementById('home-flex-container');
storyOptions = document.getElementById('story-options');
arrow = document.querySelector('.arrow');
selectHolder = document.querySelector('.selection-placeholder');
dropdownOptions = document.querySelector('.dropdown-options');

startButton.onclick = () => {
    document.body.style.backgroundColor = '#0a151b';
    homeItems.style.display = 'none';
    storyOptions.style.display = 'block';
    startButton.style.display = 'none';
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