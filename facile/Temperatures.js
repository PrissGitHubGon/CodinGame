/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

const nbrTemp = parseInt(readline()); // the number of temperatures to analyse
var temps = readline(); //une température exprimée sous la forme d'un nombre entier compris entre -273 et 5526

if (temps) {
  // si on analyse les températures(temps)
  let nbrTempArray = temps.split(" "); //je  créer  un tableau à partir d'une chaine de caractères, que je renomme  nbrTempArray

  let min = nbrTempArray[0];

  for (let i = 1; i < nbrTempArray.length; i++) {
    if (Math.abs(min) > Math.abs(nbrTempArray[i])) {
      min = nbrTempArray[i];
    } else if (
      Math.abs(min) == Math.abs(nbrTempArray[i]) && // abs donne La valeur absolue du nombre passé en argument.
      min < nbrTempArray[i]
    ) {
      min = nbrTempArray[i];
    }
  }

  console.log(min);
} else {
  console.log(0);
}
