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
    console.table(this.img);
    this.idAnimation = null;
    this.vw = window.innerWidth;
  }
  start() {
    //this.verticalLimit = document.body.clientHeight - this.img.height - 100;
    this.verticalLimit = document.body.scrollHeight;

    console.log(`bottom: ${document.body.clientHeight}`);
    console.log(`img.height: ${this.img.height}`);

    this.posX = this.vw/2;
    let title = document.getElementById('name-area')
    this.posY = title.getBoundingClientRect().top + window.pageYOffset;
    this.moveX = null, this.numberMoveX = 0;
    clearInterval(this.idAnimation);
    this.idAnimation = setInterval(this.nextFrame, 10, this);
  }
  nextFrame(self) {
    // ici on est dans une fonction de callback, on doit donc utiliser self au lieu de this
    if (self.posY >= self.verticalLimit) {
      self.stop();
    } else {
      // On garde le même mouvement latéral sur 5 frames
      if (self.numberMoveX === 0){
        self.numberMoveX = 15;
        self.moveX = getRandomIntInclusive(-1,1);
      } else {
        self.numberMoveX--;
      }
      self.posY++;
      self.posX += self.moveX;

      self.img.style.top = `${self.posY}px`;
      self.img.style.left = `${self.posX}px`;
    }
  }
  stop(){
    clearInterval(this.idAnimation);
    this.img.style.top = `-100px`;
  }
}

function startAnimation(){
  const animation = new woodSpriteAnimation('woodSprite');
  animation.start()
}

//module.exports = startAnimation;