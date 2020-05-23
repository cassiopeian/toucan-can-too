startButton = document.getElementById('start-button');
introBox = document.getElementById('intro-box');
storyOptions = document.getElementById('story-options');

startButton.onclick = () => {
    introBox.style.display = 'none';
    storyOptions.style.display = 'block';
};