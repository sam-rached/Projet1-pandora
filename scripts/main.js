/* Textes et images variables qu'on utilisera pour remplir nos box.
 * On peut revoir l'organisation (tout dans un seul objet, clés utilisées...)
 */
const habitants = {
    zone4: `Les paiquores sont une race plutôt belliqueuse, toujours aptes à la violence gratuite, y compris entre les membres de la communauté. On a rapporté l'histoire d'un paysan qui aurait empoisonné toutes les bètes de son voisin pour une simple querelle. Ils utilisent un langage imagé ('On en a plein le tour du ventre', "Je gueule, je gueule, j'pourrais gueuler dans le cul d'un poney ce serait pareil !", "Bon ben révolte ? REVOLTE !!!!"). Car oui, ils sont souvent en révolte, pour une raison dérisoire, quand ils en ont une.`,
}

const food = {
    zone4: `Choux, navets, betteraves... Que des légumes tristes, car rien d'autre ne pousse dans leur région. Leur pain est très mauvais, évitez le. Il est fortement conseillé d'apporter sa propre nourriture. Et sa propre boisson, car il est déjà arrivé qu'ils empoisonnent l'eau pour une querelle de voisinage... Photo de testicules de poulets, met très prisé par les locaux.`,
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

function clickOnZone(){
    let article = document.getElementById('habitants');
    if (habitants[this.id])
        article.getElementsByTagName('p')[0].innerHTML = habitants[this.id];
    if (images[this.id] && images[this.id]['habitants'])
        article.getElementsByTagName('img')[0].src = images[this.id]['habitants'];

    article = document.getElementById('food');
    if (food[this.id])
        article.getElementsByTagName('p')[0].innerHTML = food[this.id];
    if (images[this.id] && images[this.id]['food'])
        article.getElementsByTagName('img')[0].src = images[this.id]['food'];

    article = document.getElementById('nature');
    if (nature[this.id])
        article.getElementsByTagName('p')[0].innerHTML = nature[this.id];
    if (images[this.id] && images[this.id]['nature'])
        article.getElementsByTagName('img')[0].src = images[this.id]['nature'];
    
    article = document.getElementById('customs');
    if (customs[this.id])
        article.getElementsByTagName('p')[0].innerHTML = customs[this.id];
    if (images[this.id] && images[this.id]['customs'])
        article.getElementsByTagName('img')[0].src = images[this.id]['customs'];
}

for (const li of document.querySelectorAll('nav li')){
    li.onclick = clickOnZone;
}