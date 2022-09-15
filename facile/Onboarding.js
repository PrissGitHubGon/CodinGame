/**
 * CodinGame planet is being attacked by slimy insectoid aliens.
 * <---
 * Hint:To protect the planet, you can implement the pseudo-code provided in the statement, below the player.
 **/

// game loop
while (true) {
  var enemy1 = readline(); // name of enemy 1
  var dist1 = parseInt(readline()); // distance to enemy 1
  var enemy2 = readline(); // name of enemy 2
  var dist2 = parseInt(readline()); // distance to enemy 2

  // Write an action using print()
  // To debug: printErr('Debug messages...');

  // Display enemy1 name when enemy1 is the closest, enemy2 otherwise
  if (dist1 < dist2) {
    //si la distance 1 et plus petite que la distance 2 alors affiche (tire) sur ennemie 1 sinon 2
    console.log(enemy1);
  } else {
    console.log(enemy2);
  }
}
