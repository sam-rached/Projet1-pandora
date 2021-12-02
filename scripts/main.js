/* Textes et images variables qu'on utilisera pour remplir nos box.
 * On peut revoir l'organisation (tout dans un seul objet, clés utilisées...)
 */
const habitants = {

    zone1:`The island of Pandora is home to the Warrios of Na'vi. Blue and mystical in appearance these Warrios have been trained by the elements to become the deadliest beings in the universe. That being said they have adapted to humain contact giving humains the possibility to get to know them a bit better and gradually become friends. The Na'vi Warriors are one with nature and the enviroment they live in, making them remarkable marksman, hunters, doctors, cooks... in other words there is not alot of things they can not do, making them the next rulers of the universe and great people do be around at a party.`,
    zone2: `La fête est un pilier de la vie quotidienne des Na'vi, leur permettant de relâcher la pression mais aussi de rencontrer les autres membres de la tribu. Activité interdite aux Paiquores (on ne mélange pas les torchons et les serviettes) mais les humains en goguette sauront se faire accepter le temps d'une soirée grâce à leur petite taille hautement exotique. `,
    zone3: ``,

    zone4: `Les paiquores sont une race plutôt belliqueuse, toujours aptes à la violence gratuite, y compris entre les membres de la communauté. On a rapporté l'histoire d'un paysan qui aurait empoisonné toutes les bètes de son voisin pour une simple querelle. Ils utilisent un langage imagé ('On en a plein le tour du ventre', "Je gueule, je gueule, j'pourrais gueuler dans le cul d'un poney ce serait pareil !", "Bon ben révolte ? REVOLTE !!!!"). Car oui, ils sont souvent en révolte, pour une raison dérisoire, quand ils en ont une.`,
}

const food = {

    zone1: `Pretty much anything that grows on the island. A variety of weird and wonderful fruit and vedge know to the Na'vi Warriors as "boomchacalaka",Boomchacalaka is a term used to say that everything is edible the key is how it is cooked. Sadly that type of inforrmation is top secret, only true Na'vi can cook up a feast for the visitors (wouldn't want to kill anyone during their visit).`,
    zone2: `Imergez-vous dans la fête façon Na'vi grâce aux cocktails de champignons hallucinogènes proposés sur le site: leurs couleurs éclatantes sont un avant-goût du voyage qui vous attend.`,
    zone3: ``,

    zone4: `Choux, navets, betteraves... Que des légumes tristes, car rien d'autre ne pousse dans leur région. Leur pain est très mauvais, évitez le. Il est fortement conseillé d'apporter sa propre nourriture. Et sa propre boisson, car il est déjà arrivé qu'ils empoisonnent l'eau pour une querelle de voisinage... Photo de testicules de poulets, met très prisé par les locaux.`,
}

const nature = {

    zone1: `Forest, beaches, floating islands, mountains, clifts, caves, swamps... the Island of Pandora is 3 different ecosystem on one island, the beauty of this island is breathtaking, looking like earth but also extraterrestrial with their vibrant colors and stellar shapes.`,
    zone2: `L'Arbre des âmes est aussi un haut lieux de la vie nocturne sur Pandora où on se retrouve entre membres de la tribu afin de pratiquer des danses rituelles jusqu'au petit jour. Les plantes fluorescentes qui se trouvent autour permettent un éclairage psychédélique idéal pour vos soirées les plus folles et mémorables.`,
    zone3: ``,

    zone4: `Des forêts, des plaines et de la boue, beaucoup de boue. Ce qui explique surement leur surnom de "bouseux". Pour la faune, vous pourrez peut-être apercevoir quelques animaux sauvages comme les perdrix, les faisans, les cerfs et beaucoup plus rare les <a href="https://fr.wikipedia.org/wiki/Jackalope" target="_blank">Jackalope</a>.`,
}

const customs = {

    zone1: `Being a small island consisting of multiple cultures and ethnicities, Pandora has many traditions and customs that even some Na'vi don’t understand, depending on which part of the Island they’re from but the main custom is to always connect with one another. They also agrea on transportation, the only way to get around the island is by dragon or rhino beasts all depending on your needs (flying around is a big thing here). The Na'vi are Kind beings but will not accept any disrespect towards their elders or their royal family. They are one with nature, what comes from the land goes back to the land. no littering aloud.`,
    zone2: `Veillez à vous habiller à la mode Na'vi pour sortir: pagne, colliers de perles et plumes de Nadrak (le paon local) de rigueur, les chaussures à semelles anti-dérapantes étant un must pour éviter toute chute malencontreuse sur le dance-floor.`,
    zone3: ``,

    zone4: ``,
}

const images = {
    zone1: {

        habitants: 'img/Navi.jpeg',
        food: 'img/scary-plants.jpeg',
        nature: 'img/avatar-2-artwork.jpeg',
        customs: 'img/connecting.jpeg'


    },

    zone2:{
        habitants: 'img/avatar-img8-cropped.jpg',
        food: 'img/avatar-img2.png',
        nature: 'img/avatar-img10.jpg',
        customs:'img/bynight1.jpg',
    },
    zone3: {
        habitants: '',
        food: '',
        nature: '',
        customs:'',
    },

    zone4: {
        habitants: 'img/zone4-habitants.jpg',
        food: 'img/zone4-food.jpg',
        //nature: 'img/zone4-nature.jpg',
        //customs: 'img/zone4-customs.jpg',
    },
}

const titles = {
    zone1: "La zone d'Iysha",
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
for (const li of document.querySelectorAll('nav li')){
    li.onclick = clickOnZone;
}

// On assigne les callback quand on clique sur les marqueurs de la carte
for (const a of document.querySelectorAll('header a')){
    a.onclick = clickOnZone;
}