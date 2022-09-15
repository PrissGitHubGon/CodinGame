/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

let nbHorses = parseInt(readline()); //Le nombre N de chevaux
let strengths = []; //  la force/puissance de chaque cheval.
let minDiff = Number.MAX_SAFE_INTEGER; // La constante Number.MAX_SAFE_INTEGER représente la valeur (sûre) maximale d’un nombre entier en JavaScript
for (let i = 0; i < nbHorses; ++i) strengths.push(parseInt(readline()));

// Trier le tableau pour trouver facilement la différence minimale
strengths.sort((strength1, strength2) => strength1 - strength2); // methode de trie (nombres.sort()) + fonction de Comparaison (ex: nombres.sort((a, b) => a - b);) qui permet par exemple de ne pas mettre 1 et 10 l'un aprés l'autre dans un tableau exemple sans la fonction de comparaison [1,10,2,3,4,5,6,7,8,9], exemple avec la fonction de comparaison [1,2,3,4,5,6,7,8,9,10]

for (let i = 0; i < nbHorses - 1; ++i) {
  let difference = strengths[i + 1] - strengths[i];
  minDiff = Math.min(minDiff, difference); //La fonction Math.min() renvoie le plus petit nombre d'une série
}
