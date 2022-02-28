const couleurs = [
    "#FFF59B",
    "FCB6D0",
    "B6DCB6"
]

const couleurPrincipale = couleurs[Math.floor(Math.random()*couleurs.length)];

let root = document.documentElement;

window.addEventListener('DOMContentLoaded', (event) => {
    root.style.setProperty('--main-color', couleurPrincipale);
} );

/*FRISE CHRONOLOGIQUE */

const rond1 = document.querySelector('.nb1');
const rond2 = document.querySelector('.nb2');
const rond3 = document.querySelector('.nb3');
const rond4 = document.querySelector('.nb4');

const timeline = document.querySelector('.friseTemps');
timeline.style.width = '12.5%';
clicPointFrise();

function clicPointFrise(){

    switch(timeline.style.width) {
        case '12.5%':
            changerBackgroundColor(rond1, 'red');
            changerBackgroundColor(rond2, couleurPrincipale);
            changerBackgroundColor(rond3, couleurPrincipale);
            changerBackgroundColor(rond4, couleurPrincipale);
            break;
        case '37.5%':
            changerBackgroundColor(rond1, 'red');
            changerBackgroundColor(rond2, 'red');
            changerBackgroundColor(rond3, couleurPrincipale);
            changerBackgroundColor(rond4, couleurPrincipale);
            break;
        case '62.5%':
            changerBackgroundColor(rond1, 'red');
            changerBackgroundColor(rond2, 'red');
            changerBackgroundColor(rond3, 'red');
            changerBackgroundColor(rond4, couleurPrincipale);
            break;
        case '87.5%':
            changerBackgroundColor(rond1, 'red');
            changerBackgroundColor(rond2, 'red');
            changerBackgroundColor(rond3, 'red');
            changerBackgroundColor(rond4, 'red');
            break;
        default:
            console.log('ya un ptit probleme lo');
    }
}

function changerBackgroundColor(element, couleur){
    element.style.backgroundColor = couleur;
}

rond1.addEventListener('click', () => {
    timeline.style.width = '12.5%';
    clicPointFrise();
});

rond2.addEventListener('click', () => {
    timeline.style.width = '37.5%';
    clicPointFrise();
});

rond3.addEventListener('click', () => {
    timeline.style.width = '62.5%';
    clicPointFrise();
});

rond4.addEventListener('click', () => {
    timeline.style.width = '87.5%';
    clicPointFrise();
});