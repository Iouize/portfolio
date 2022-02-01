const couleurs = [
    "#FFF59B",
    "FCB6D0",
    "B6DCB6"
]

const couleurPrincipale = couleurs[Math.floor(Math.random()*couleurs.length)];

window.addEventListener('DOMContentLoaded', (event) => {
    document.querySelector('.home').style.backgroundColor = couleurPrincipale;
} );