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

let green = (element) => {
    return element.hasClass('selected-letter');
};

let displayFlex = (animal) => {
    return animal.css('display', 'flex');
};

let revealAnaconda = () => {
    if (green($('#10-1')) && green($('#3-8'))) {
        displayFlex($('#anaconda'));
    }
};

let revealCaiman = () => {
    if (green($('#10-11')) && green($('#6-7')) && green($('#5-6'))) {
        // $('#caiman').css('display', 'block');
        displayFlex($('#caiman'));
    }
};

let revealMacaw = () => {
    if (green($('#2-3')) && green($('#2-7'))) {
        $('#macaw').css('display', 'block');
    }
};

let revealMorpho = () => {
    if (green($('#5-5')) && green($('#10-5'))) {
        $('#morpho').css('display', 'block');
    }
};

let revealOcelot = () => {
    if (green($('#3-11')) && green($('#8-11'))) {
        $('#ocelot').css('display', 'block');
    }
};

let revealPiranha = () => {
    if (green($('#4-1')) && green($('#9-1')) && green($('#10-1'))) {
        $('#piranha').css('display', 'block');
    }
};

let revealSloth = () => {
    if (green($('#7-2')) && green($('#3-2'))) {
        $('#sloth').css('display', 'block');
    }
};

let revealTapir = () => {
    if (green($('#5-9')) && green($('#9-9'))) {
        $('#tapir').css('display', 'block');
    }
};

let revealToucan = () => {
    if (green($('#6-10')) && green($('#1-10'))) {
        $('#toucan').css('display', 'block');
    }
};

let revealTreeFrog = () => {
    if (green($('#8-1')) && green($('#1-1'))) {
        $('#treefrog').css('display', 'block');
    }
};

// let revealAnaconda = () => {
//     if ($('#10-1').hasClass('selected-letter') && $('#3-8').hasClass('selected-letter')) {
//         $('#anaconda').css('display', 'block');
//     }
// };
