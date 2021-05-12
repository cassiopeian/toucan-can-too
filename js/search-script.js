// RANDOM LETTERS FOR THE WORD SEARCH

let randomLetter = document.getElementsByClassName('random-letter');
for (let i = 0; i < randomLetter.length; i++) {
    randomLetter[i].innerHTML = assignLetter();
};

function assignLetter() {
    let letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    let randomize = Math.floor(Math.random() * letters.length);
    return letters[randomize];
};


// CHANGE COLOR WHEN CLICKED

//this sets the letters green when clicked, and it reveals the animal facts when the reveal functions' conditions are met
$('.letter').on('click', function() {
    if ($(this).hasClass('selected-letter')) {
        $(this).removeClass('selected-letter');
    } else {
        $(this).addClass('selected-letter');
    }
    revealAnaconda();
    revealCaiman();
    revealMacaw();
    revealMorpho();
    revealOcelot();
    revealPiranha();
    revealSloth();
    revealTapir();
    revealToucan();
    revealTreeFrog();
});

$('.random-letter').on('click', function() {
    if ($(this).hasClass('selected-letter')) {
        $(this).removeClass('selected-letter');
    } else {
        $(this).addClass('selected-letter');
    }
});


// REVEAL THE HIDDEN ANIMAL FACTS

$('button').on('click', function() {
    // if a button has the class 'found'
    if ($(this).hasClass('found')) {
        // toggle the display of the next animal facts div 
        $(this).next('div').toggle();
    }
});

// this confirms that a letter has been selected/turned green
let green = (element) => {
    return element.hasClass('selected-letter');
};

// if the first and last letter of each word HAS been selected, displayFacts will "open" that word's hidden animal-fact div
let displayFacts = (animal) => {
    return animal.css('display', 'block');
};

// each revealAnimal function below relies on the two functions above, and they're all called in the click event on line 17
let revealAnaconda = () => {
    if (green($('#10-1')) && green($('#3-8'))) {
        displayFacts($('#anaconda'));
        $('#anaconda-button').addClass('found');
    }
};

let revealCaiman = () => {
    if (green($('#10-11')) && green($('#6-7')) && green($('#5-6'))) {
        displayFacts($('#caiman'));
        $('#caiman-button').addClass('found');
    }
};

let revealMacaw = () => {
    if (green($('#2-3')) && green($('#2-7'))) {
        displayFacts($('#macaw'));
        $('#macaw-button').addClass('found');
    }
};

let revealMorpho = () => {
    if (green($('#5-5')) && green($('#10-5'))) {
        displayFacts($('#morpho'));
        $('#morpho-button').addClass('found');
    }
};

let revealOcelot = () => {
    if (green($('#3-11')) && green($('#8-11'))) {
        displayFacts($('#ocelot'));
        $('#ocelot-button').addClass('found');
    }
};

let revealPiranha = () => {
    if (green($('#4-1')) && green($('#9-1')) && green($('#10-1'))) {
        displayFacts($('#piranha'));
        $('#piranha-button').addClass('found');
    }
};

let revealSloth = () => {
    if (green($('#7-2')) && green($('#3-2'))) {
        displayFacts($('#sloth'));
        $('#sloth-button').addClass('found');
    }
};

let revealTapir = () => {
    if (green($('#5-9')) && green($('#9-9'))) {
        displayFacts($('#tapir'));
        $('#tapir-button').addClass('found');
    }
};

let revealToucan = () => {
    if (green($('#6-10')) && green($('#1-10'))) {
        displayFacts($('#toucan'));
        $('#toucan-button').addClass('found');
    }
};

let revealTreeFrog = () => {
    if (green($('#1-8')) && green($('#1-1'))) {
        displayFacts($('#treefrog'));
        $('#treefrog-button').addClass('found');
    }
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