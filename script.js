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