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

let revealAnaconda = () => {
    if (green($('#10-1')) && green($('#3-8'))) {
        $('#anaconda').css('display', 'block');
    }
};

let revealCaiman = () => {
    if (green($('#10-11')) && green($('#5-6'))) {
        $('#caiman').css('display', 'block');
    }
};

let revealMacaw = () => {
    if (green($('#2-3')) && green($('#2-7'))) {
        $('#macaw').css('display', 'block');
    }
};

// let revealAnaconda = () => {
//     if ($('#10-1').hasClass('selected-letter') && $('#3-8').hasClass('selected-letter')) {
//         $('#anaconda').css('display', 'block');
//     }
// };
