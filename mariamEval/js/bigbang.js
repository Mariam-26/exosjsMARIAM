// Ma boucle FOR
for (compteur = 1; compteur <= 100; compteur++) /* Ma boucle FOR plus ses conditions */ {
    if (compteur % 15 === 0) /* Si le modulo de mon compteur divisé par 15 est égal en valeur et en type à 0  */ {
        document.getElementById('p1').innerHTML += 'BigBang <br>'; /* Alors j'affiche ds mon paragraphe BIGBANG et je fais un retour en ligne */
    } else if (compteur % 3 === 0) /* Si le modulo de mon compteur divisé par 3 est égal en valeur en valeur et en type à 0 */ {
        document.getElementById('p1').innerHTML += 'Big <br>'; /* Alors j'affiche BIG le résultat dans mon paragraphe et je fais un retour en en ligne */
    } else if (compteur % 5 === 0) /* Sinon si le modulo de mon compteur divisé par 5 est égal en valeur en valeur et en type à 0 */ {
        document.getElementById('p1').innerHTML += 'Bang <br>' /* Alors j'affiche BANG dans mon paragraphe et je fais un retour en en ligne */ ;
    } else {
        document.getElementById('p1').innerHTML += compteur + '<br>'; /* Sinon le RESTE s'affiche en chiffre */
    }

}
document.getElementById('p1').style.fontSize = '1.5rem';