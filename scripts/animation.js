/* WoodSprite animation */
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min +1)) + min;
}

// WIP: transformation en objet pour en utiliser plusieurs sur la page
class woodSpriteAnimation {
  constructor(spriteId) {
    this.img = document.getElementById(spriteId);

    this.idAnimation = null;
    this.vw = window.innerWidth;
    this.isRunning = false;
  }
  start() {
    this.isRunning = true;

    //this.verticalLimit = document.body.clientHeight - this.img.height - 100;
    this.verticalLimit = document.body.scrollHeight;

    // position horizontal aléatoire (entre 1/3 et 2/3 de l'écran)
    this.posX = getRandomIntInclusive(this.vw/3, this.vw/3*2);
    // On positionne les images juste au dessus du titre
    let title = document.getElementById('name-area');
    this.posY = title.getBoundingClientRect().top + window.pageYOffset;

    this.moveX = null, this.numberMoveX = 0;
    clearInterval(this.idAnimation);
    this.idAnimation = setInterval(this.nextFrame, getRandomIntInclusive(10,50), this);
  }
  nextFrame(self) {
    // ici on est dans une fonction de callback, on doit donc utiliser self au lieu de this
    if (self.posY >= self.verticalLimit) {
      self.stop();
    } else {
      // On garde le même mouvement latéral sur une fourchette de 5 à 25 frames
      if (self.numberMoveX === 0){
        self.numberMoveX = getRandomIntInclusive(5, 25);
        self.moveX = getRandomIntInclusive(-1,1);
      } else {
        self.numberMoveX--;
      }
      self.posY++;
      self.posX += self.moveX;

      self.img.style.top = `${Math.floor(self.posY)}px`;
      self.img.style.left = `${self.posX}px`;
    }
  }
  stop(){
    if (!this.isRunning)
      return;
    clearInterval(this.idAnimation);
    this.img.style.top = `-100px`; // on déplace l'image en dehors de l'affichage
  }
}
const animations = [];

function startAnimation(){
  if (!animations.length){
    animations.push(new woodSpriteAnimation('woodSprite1'));
    animations.push(new woodSpriteAnimation('woodSprite2'));
    animations.push(new woodSpriteAnimation('woodSprite3'));
  }
  for (const animation of animations)
    animation.start();
}

function stopAnimation(){
  for (const animation of animations)
    animation.stop();
}

//module.exports = startAnimation;