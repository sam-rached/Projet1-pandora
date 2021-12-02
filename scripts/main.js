/* Textes et images variables qu'on utilisera pour remplir nos box.
 * On peut revoir l'organisation (tout dans un seul objet, clés utilisées...)
 */
const habitants = {
  zone1:` Les Floating Islands sont principalement peuplées de dragons qui y vivent depuis toujours, cependant vous pouvez trouver des populations Na'vi qui préfèrent le calme et l'isolement de ces Floating Islands par rapport à la vie en contrebas..`,
  zone2: `La fête est un pilier de la vie quotidienne des Na'vi, leur permettant de relâcher la pression mais aussi de rencontrer les autres membres de la tribu. Activité interdite aux Paiquores (on ne mélange pas les torchons et les serviettes) mais les humains en goguette sauront se faire accepter le temps d'une soirée grâce à leur petite taille hautement exotique. `,
  zone3: `Depuis quatorze mille ans, le peuple indigène Munduruku d'Amazonia vivent en harmonie avec la forêt. Mais au cours des cinquante dernières années, quelque 20 % du poumon vert de Pandora ont été déboisés pour construire un barrage, un MacDo, un datacenter Amazon etc...`,
  zone4: `Les paiquores sont une race plutôt belliqueuse, toujours aptes à la violence gratuite, y compris entre les membres de la communauté. On a rapporté l'histoire d'un paysan qui aurait empoisonné toutes les bètes de son voisin pour une simple querelle. Ils utilisent un langage imagé ('On en a plein le tour du ventre', "Je gueule, je gueule, j'pourrais gueuler dans le cul d'un poney ce serait pareil !", "Bon ben révolte ? REVOLTE !!!!"). Car oui, ils sont souvent en révolte, pour une raison dérisoire, quand ils en ont une.`,
};


const food = {
  zone1: `Tout ce qui vole... Vous ne pouvez pas vraiment manger une vache là-haut, n'est-ce pas! Si vous avez de la chance, un dragon peut jeter le reste de sa carcasse si cela arrive COUREZ pour ramasser la chair en décomposition restante ! délicieux.`,
  zone2: `Imergez-vous dans la fête façon Na'vi grâce aux cocktails de champignons hallucinogènes proposés sur le site: leurs couleurs éclatantes sont un avant-goût du voyage qui vous attend.`,
  zone3:
    "Leur plat local est le Couscous royal au manioc et pattes de tarantule grillées, un délice divin.Sinon la chasse et la cueillette occupent la majeur partie de leur temps (manioc, banane, serpent)",
    zone4: `Choux, navets, betteraves... Que des légumes tristes, car rien d'autre ne pousse dans leur région. Leur pain est très mauvais, évitez le. Il est fortement conseillé d'apporter sa propre nourriture. Et sa propre boisson, car il est déjà arrivé qu'ils empoisonnent l'eau pour une querelle de voisinage... Photo de testicules de poulets, met très prisé par les locaux.`,
}

const nature = {
  zone1: `Vue d'en haut, rien de mieux. Il y a encore beaucoup de végétation sur les Islands comme : arbres, herbe, fleurs. Faites attention à ne pas tomber, rien ne dit mieux Floating Island qu'un énorme flanc de falaise et tombez a ca mort(avec vue et vole surprenante).`,
  zone2: `L'Arbre des âmes est aussi un haut lieux de la vie nocturne sur Pandora où on se retrouve entre membres de la tribu afin de pratiquer des danses rituelles jusqu'au petit jour. Les plantes fluorescentes qui se trouvent autour permettent un éclairage psychédélique idéal pour vos soirées les plus folles et mémorables.`,
  zone3:
    "Paysages à couper le souffle, la nature verte est omniprésente dans ce coin reclus de Pandora. Mais elle cache très bien son jeu, quelques insectes et animaux seront heureux de vous rencontrer ",
    zone4: `Des forêts, des plaines et de la boue, beaucoup de boue. Ce qui explique surement leur surnom de "bouseux". Pour la faune, vous pourrez peut-être apercevoir quelques animaux sauvages comme les perdrix, les faisans, les cerfs et beaucoup plus rare les <a href="https://fr.wikipedia.org/wiki/Jackalope" target="_blank">Jackalope</a>.`,
}

const customs = {
  zone1: `Voler sur le dos d'un dragon est l'une des principales coutumes des Floating Islands, c'est comme monter à cheval à 10000 mètres du sol a 300 km h avec un risque élevé d'avoir des insectes dans les yeux et potentiellement mourir, mais à part ça tout comme monter a cheval. La seule façon de volé sur un dragon est de se connecter avec un dragon. Good luck with that.`,
  zone2: `Veillez à vous habiller à la mode Na'vi pour sortir: pagne, colliers de perles et plumes de Nadrak (le paon local) de rigueur, les chaussures à semelles anti-dérapantes étant un must pour éviter toute chute malencontreuse sur le dance-floor.`,
  zone3: `La coutume est très simple et se résume à un proverbe : "Faites vivre votre passion, elle vous réchauffera quand le monde deviendra froid."`,
  zone4: ``,
}

const images = {
  zone1: {
    habitants: "img/avatar-img11.png",
    food: "img/carcass.jpeg",
    nature: "img/avatar-img5.webp",
    customs: "img/flying-on-banshees.jpg",
  },

  zone2: {
    habitants: "img/avatar-img8-cropped.jpg",
    food: "img/avatar-img2.png",
    nature: "img/avatar-img10.jpg",
    customs: "img/bynight1.jpg",
  },
  zone3: {
    habitants: "img/zone3-habitant.jpg",
    food: "img/zone3-food.jpg",
    nature: "img/zone3-lieu.jpg",
    customs: "img/zone3-coutume.jpg",
  },

  zone4: {
    habitants: "img/zone4-habitants.jpg",
    food: "img/zone4-food.jpg",
    //nature: 'img/zone4-nature.jpg',
    //customs: 'img/zone4-customs.jpg',
  },
};

const titles = {
    zone1: 'Floating Islands',
    zone2: 'Pandora by night',
    zone3: 'La zone de Samir',
    zone4: 'La vallée des Paiquores',
}

function clickOnZone(event){
    event.preventDefault();
    
    // this.id contient l'id de l'élément li, zone1 par exemple
    // dans les éléments <li> on récupère un id comme zone1
    // dans les éléments <a> on récupère un id comme zone1-map
    // donc on fait un split et on prend la première partie (toujours zone1)
    let zone = event.target.id.split('-')[0];

    let article = document.getElementById('habitants');
    if (habitants[zone])
        article.getElementsByTagName('p')[0].innerHTML = habitants[zone];
    if (images[zone] && images[zone]['habitants'])
        article.getElementsByTagName('img')[0].src = images[zone]['habitants'];

    article = document.getElementById('food');
    if (food[zone])
        article.getElementsByTagName('p')[0].innerHTML = food[zone];
    if (images[zone] && images[zone]['food'])
        article.getElementsByTagName('img')[0].src = images[zone]['food'];

    article = document.getElementById('nature');
    if (nature[zone])
        article.getElementsByTagName('p')[0].innerHTML = nature[zone];
    if (images[zone] && images[zone]['nature'])
        article.getElementsByTagName('img')[0].src = images[zone]['nature'];
    
    article = document.getElementById('customs');
    if (customs[zone])
        article.getElementsByTagName('p')[0].innerHTML = customs[zone];
    if (images[zone] && images[zone]['customs'])
        article.getElementsByTagName('img')[0].src = images[zone]['customs'];

    const title = document.getElementById('name-area');
    title.innerHTML = titles[zone];
    title.scrollIntoView();
}

// On assigne les callback quand on clique sur la barre nav
for (const li of document.querySelectorAll("nav li")) {
  li.onclick = clickOnZone;
}

// On assigne les callback quand on clique sur les marqueurs de la carte
for (const a of document.querySelectorAll("header a")) {
  a.onclick = clickOnZone;
}

/* WoodSprite animation */
let idAnimation = null;
function launchAnimation() {
    function getRandomIntInclusive(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min +1)) + min;
    }
    const img = document.getElementById('woodSprite');
    const vw = window.innerWidth;
    const vh = window.innerHeight;

    let posX = 0, posY = vw/2;
    clearInterval(idAnimation);
    idAnimation = setInterval(frame, 10);
    function frame() {
        if (posY > vh+img.height+50) {
            clearInterval(idAnimation);
        } else {
            posX++;
            posY += getRandomIntInclusive(-1,1);

            img.style.top = posX + 'px';
            img.style.left = posY + 'px';
        }
    }
}
