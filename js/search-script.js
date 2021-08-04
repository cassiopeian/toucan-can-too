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

    if ($(this).hasClass('found') && $(this).children('.plus-minus').html() == '-') {
        // indicate info box can be expanded
        $(this).children('.plus-minus').html('+');
    } else if ($(this).children('.plus-minus').html() == '+') {
        // indicate info box can be closed
        $(this).children('.plus-minus').html('-');
    }
});

// confirm, in the "reveal" functions, that a letter has been selected
let green = (element) => element.hasClass('selected-letter');

// if the first and last letter of each word HAS been selected, displayFacts will "open" that word's hidden animal-fact div
let displayFacts = (animal) => {
    return animal.css('display', 'block');
};

// each revealAnimal function below relies on the two functions above, and they're all called in the click event on line 17
let revealAnaconda = () => {
    if (green($('#10-1')) && green($('#3-8'))) {
        displayFacts($('#anaconda'));
        $('#anaconda-button').addClass('found').children('.plus-minus').css('display', 'block');

        // prevent facts from opening again, unless toggled by user
        revealAnaconda = () => {};
    }
};

let revealCaiman = () => {
    if (green($('#10-11')) && green($('#6-7')) && green($('#5-6'))) {
        displayFacts($('#caiman'));
        $('#caiman-button').addClass('found').children('.plus-minus').css('display', 'block');

        // prevent facts from opening again, unless toggled by user
        revealCaiman = () => {};
    }
};

let revealMacaw = () => {
    if (green($('#2-3')) && green($('#2-7'))) {
        displayFacts($('#macaw'));
        $('#macaw-button').addClass('found').children('.plus-minus').css('display', 'block');

        // prevent facts from opening again, unless toggled by user
        revealMacaw = () => {};
    }
};

let revealMorpho = () => {
    if (green($('#5-5')) && green($('#10-5'))) {
        displayFacts($('#morpho'));
        $('#morpho-button').addClass('found').children('.plus-minus').css('display', 'block');

        // prevent facts from opening again, unless toggled by user
        revealMorpho = () => {};
    }
};

let revealOcelot = () => {
    if (green($('#3-11')) && green($('#8-11'))) {
        displayFacts($('#ocelot'));
        $('#ocelot-button').addClass('found').children('.plus-minus').css('display', 'block');

        // prevent facts from opening again, unless toggled by user
        revealOcelot = () => {};
    }
};

let revealPiranha = () => {
    if (green($('#4-1')) && green($('#9-1')) && green($('#10-1'))) {
        displayFacts($('#piranha'));
        $('#piranha-button').addClass('found').children('.plus-minus').css('display', 'block');

        // prevent facts from opening again, unless toggled by user
        revealPiranha = () => {};
    }
};

let revealSloth = () => {
    if (green($('#7-2')) && green($('#3-2'))) {
        displayFacts($('#sloth'));
        $('#sloth-button').addClass('found').children('.plus-minus').css('display', 'block');

        // prevent facts from opening again, unless toggled by user
        revealSloth = () => {};
    }
};

let revealTapir = () => {
    if (green($('#5-9')) && green($('#9-9'))) {
        displayFacts($('#tapir'));
        $('#tapir-button').addClass('found').children('.plus-minus').css('display', 'block');

        // prevent facts from opening again, unless toggled by user
        revealTapir = () => {};
    }
};

let revealToucan = () => {
    if (green($('#6-10')) && green($('#1-10'))) {
        displayFacts($('#toucan'));
        $('#toucan-button').addClass('found').children('.plus-minus').css('display', 'block');

        // prevent facts from opening again, unless toggled by user
        revealToucan = () => {};
    }
};

let revealTreeFrog = () => {
    if (green($('#1-8')) && green($('#1-1'))) {
        displayFacts($('#treefrog'));
        $('#treefrog-button').addClass('found').children('.plus-minus').css('display', 'block');

        // prevent facts from opening again, unless toggled by user
        revealTreeFrog = () => {};
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

// hovering over the hamburger menu
$('.hamburger').on('mouseenter', function() {
    // lowers the sloth's arm
    $('#sloth-menu').attr('src', 'images/sloth-menu-hover.svg');
});

// moving the mouse away from the hamburger menu
$('.hamburger').on('mouseleave', function() {
    // raises the sloth's arm
    $('#sloth-menu').attr('src', 'images/sloth-menu.svg');
});

