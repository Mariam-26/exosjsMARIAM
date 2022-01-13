// Initialisation mes variables
let affiche = '';
let compteur = 1;

/**
 Ma boucle while plus mes conditions
 */
while ((affiche !== 'oui') && (affiche !== 'non')) {
    affiche = prompt(`Jouons à OUI ni NON`);
    compteur++; // incrémentation mon compteur 
}

document.getElementById('p1').innerHTML = `Tu as dis oui, c'est perdu !`; /* L'affichage de la réponse dans un paragraphe */