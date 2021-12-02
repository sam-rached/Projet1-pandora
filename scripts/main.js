/* Textes et images variables qu'on utilisera pour remplir nos box.
 * On peut revoir l'organisation (tout dans un seul objet, clés utilisées...)
 */
const habitants = {
    zone4: `Les paiquores sont une race plutôt belliqueuse, toujours aptes à la violence gratuite, y compris entre les membres de la communauté. On a rapporté l'histoire d'un paysan qui aurait empoisonné toutes les bètes de son voisin pour une simple querelle. Ils utilisent un langage imagé ('On en a plein le tour du ventre', "Je gueule, je gueule, j'pourrais gueuler dans le cul d'un poney ce serait pareil !", "Bon ben révolte ? REVOLTE !!!!"). Car oui, ils sont souvent en révolte, pour une raison dérisoire, quand ils en ont une.`,
}

const food = {
    zone4: `Choux, navets, betteraves... Que des légumes tristes, car rien d'autre ne pousse dans leur région. Leur pain est très mauvais, évitez le. Il est fortement conseillé d'apporter sa propre nourriture. Et sa propre boisson, car il est déjà arrivé qu'ils empoisonnent l'eau pour une querelle de voisinage... Photo de testicules de poulets, mets très prisé par les locaux.`,
}

const nature = {
    zone4: `Des forêts, des plaines et de la boue, beaucoup de boue. Ce qui explique surement leur surnom de "bouseux". Pour la faune, vous pourrez peut-être apercevoir quelques animaux sauvages comme les perdrix, les faisans, les cerfs et beaucoup plus rare les <a href="https://fr.wikipedia.org/wiki/Jackalope" target="_blank">Jackalope</a>.`,
}

const customs = {
    zone4: ``,
}

const images = {
    zone4: {
        habitants: 'img/zone4-habitants.jpg',
        food: 'img/zone4-food.jpg',
        //nature: 'img/zone4-nature.jpg',
        //customs: 'img/zone4-customs.jpg',
    },
}

const titles = {
    zone1: "La zone d'Iysha",
    zone2: 'La zone de Juliette',
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
    launchAnimation();
}

// On assigne les callback quand on clique sur la barre nav
for (const li of document.querySelectorAll('nav li')){
    li.onclick = clickOnZone;
}

// On assigne les callback quand on clique sur les marqueurs de la carte
for (const a of document.querySelectorAll('header a')){
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