const orange = "#F7A823";
const bleu = "#417EC1";
const vert = "#A7F59B";
const rose = "#F59AD9";

const vert2 = "#64A859";
const rose2 = "#A85991";
const orange2 = "#AB6F07";
const bleu2 = "#1C4775";

const jspQuelCouleur = "#FFF59B";
const couleurs = [
    [
        orange,
        bleu,
        orange2,
        bleu2
    ],
    [
        bleu,
        orange,
        bleu2,
        orange2
    ],
    [
        vert,
        rose,
        vert2,
        rose2
    ],
    [
        rose,
        vert,
        rose2,
        vert2
    ]
];

function couleurAleatoire() {
   const randomColor = couleurs[Math.floor(Math.random()*couleurs.length)];
   return randomColor;
}

let couleurPrincipale = couleurAleatoire();

let root = document.documentElement;

let mainColor = couleurPrincipale[0];
let opositeColor = couleurPrincipale[1];
let secondColor = couleurPrincipale[2];
let opositeSecondColor = couleurPrincipale[3];

window.addEventListener('DOMContentLoaded', changeColors() );


function changeColors(){
    root.style.setProperty('--main-color', mainColor);
    root.style.setProperty('--oposite-color', opositeColor);
    root.style.setProperty('--second-color', secondColor);
    root.style.setProperty('--secondOposite-color', opositeSecondColor);
}


/*FRISE CHRONOLOGIQUE */

const rond1 = document.querySelector('.nb1');
const rond2 = document.querySelector('.nb2');
const rond3 = document.querySelector('.nb3');
const rond4 = document.querySelector('.nb4');

let formationArticle = document.querySelectorAll('.formationCard');

const timeline = document.querySelector('.friseTemps');
timeline.style.width = '12.5%';
clicPointFrise();

function clicPointFrise(){

    switch(timeline.style.width) {
        case '12.5%':
            changerBackgroundColor(rond1, 'red');
            changerBackgroundColor(rond2, mainColor);
            changerBackgroundColor(rond3, mainColor);
            changerBackgroundColor(rond4, mainColor);
            affichageArticle(formationArticle[0], true);
            affichageArticle(formationArticle[1], false);
            affichageArticle(formationArticle[2], false);
            affichageArticle(formationArticle[3], false);
            break;
        case '37.5%':
            changerBackgroundColor(rond1, 'red');
            changerBackgroundColor(rond2, 'red');
            changerBackgroundColor(rond3, mainColor);
            changerBackgroundColor(rond4, mainColor);
            affichageArticle(formationArticle[0], false);
            affichageArticle(formationArticle[1], true);
            affichageArticle(formationArticle[2], false);
            affichageArticle(formationArticle[3], false);
            break;
        case '62.5%':
            changerBackgroundColor(rond1, 'red');
            changerBackgroundColor(rond2, 'red');
            changerBackgroundColor(rond3, 'red');
            changerBackgroundColor(rond4, mainColor);
            affichageArticle(formationArticle[0], false);
            affichageArticle(formationArticle[1], false);
            affichageArticle(formationArticle[2], true);
            affichageArticle(formationArticle[3], false);
            break;
        case '87.5%':
            changerBackgroundColor(rond1, 'red');
            changerBackgroundColor(rond2, 'red');
            changerBackgroundColor(rond3, 'red');
            changerBackgroundColor(rond4, 'red');
            affichageArticle(formationArticle[0], false);
            affichageArticle(formationArticle[1], false);
            affichageArticle(formationArticle[2], false);
            affichageArticle(formationArticle[3], true);
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



function affichageArticle(element, bool) {
    if(bool == true) {
        element.style.display = "block";
    } else {
        element.style.display = "none";
    }

}


//FONCTION BULLES AFFICHAGE CLIC
const illuMoi = document.querySelector('.illustrationLouise');

const bulles = document.querySelectorAll('.bulle');
const dernierBulle = (bulles.length) - 1;

function afficheBulleDiscu(){
    if(bulles[dernierBulle].style.display == 'block') {
        for(var j = 0; j < bulles.length; j++ ) {
            bulles[j].style.display = 'none';
        }
        return;
    }

    for (var i = 0; i < bulles.length; i++) {
        let displayBulle = bulles[i].style.display;
        let audio = new Audio('audio/son' + (i+1) + '.mp3');
        
        if (displayBulle != 'block') {
            audio.play();
            bulles[i].style.display = 'block';
            return;
        }   
    }  
}



illuMoi.addEventListener('click', afficheBulleDiscu);
