startButton = document.getElementById('start-button');
introBox = document.getElementById('intro-box');
storyOptions = document.getElementById('story-options');

startButton.onclick = () => {
    document.body.style.backgroundColor = '#0a151b';
    introBox.style.display = 'none';
    storyOptions.style.display = 'block';
    startButton.style.display = 'none';
};