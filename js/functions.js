// Funktio nopan pyörittämiseen ja kuvan vaihtamiseen
function rollDice() {
  // Generoi satunnainen luku 1-6
  const satunnainen = Math.floor(Math.random() * 6) + 1;
  
  // Hae kuvan elementti
  const noppa = document.getElementById('noppakuva');
  
  // Aseta kuvan lähde satunnaisen luvun mukaan
  noppa.src = `./IMAGES/dice${satunnainen}.png`;
}

// Lisää tapahtumakuuntelija noppadiville
const noppadiv = document.getElementById('dice');
noppadiv.addEventListener('click', rollDice);
