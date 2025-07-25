// ici exo conditions


// si exo1 est égal à 33, alors vous me faites un log qui affiche bordeaux sinon vous affichez Paris

let exo1 = 33;

// effectuera une conversion des deux éléments à comparer avant d'effectuer la comparaison
// '33' == 33 

// effectuera la même comparaison mais sans conversion préalable (elle renverra toujours false si les types des deux valeurs comparées sont différents)
// '33' === 33 

// si exo1 est egal a 33 j'affiche bordeaux
// sinon j'affiche bouuuu paris

if(exo1 = 33){
    console.log('bordeaux');
}else{
    console.log('bouuuu paris');

}

// exo 2
// vous allez me comparer deux variables (a et b), et qui contiennent des integers, si a > b afficher a est plus grand que b, faites pareil pour a < b et pour a = b

let a = 32;
let b = 32;

// if('a > b') {
//     console.log(a + " est plus grand que " + b);
// }
// if('a < b') {
//     console.log(b + " est plus grand que " + a);
// }
// if('a == b') {
//     console.log(a + " est égal à " + b);
// }

// si a > b afficher a est plus grand que b
if(a > b) {
    console.log(a + " est plus grand que " + b);
}
// si a < b afficher b est plus grand que a
// si il y a plusieurs conditions mettre 'else' 'if'
else if(a < b) {
    console.log(b + " est plus grand que " + a);
}
// si a = b afficher a est est égal à b 
// toujours terminer la boucle avec 'else'
else {
    console.log(a + " est égal à " + b);
}

// vous allez vérifier le contenu d'une variable "pair", si le nombre est pair vous afficherez "true", sinon afficherez "false"

var pair = 20;
// if('nom de la variable' '%2 == 0'(formule modulo pour dire si un chiffre est pair) alors log affichera si le nombre est pair ou impaire)
if( pair %2 === 0){
    console.log(true);
}else{
    console.log(false);
}

// exo 4
// vous allez vérifier si le contenu d'une variable username contient olivier. si elle ne contient pas olivier, alors on renvoie "welcome"
// on refuse les username olivier
// on accepte les olivier type pokemon
// on refuse les pokemon type pokemon

var userName = 'Olivier';
const level = 'pokemon';
if (userName !== "Olivier" && level !== "pokemon" || userName == 'Olivier' && level === "pokemon") {
    console.log('accepted');
} else {
    console.log("notaccepted");
}

// bonus 
// 1 - afficher "tarif réduit" si user = student ou que heure entre 22h et 5h sinon afficher "tarif plein"

let user;
let heure = 21

if (user == 'student' || heure >= 5 && heure <= 22){
    console.log('tarif réduit');

}else {
    console.log('tarif plein');
    
}

// 2 - un client peu avoir 20% de réduction sur ces achats si c'est son anniversaire ou qu'il a un solde (ses dépenses) de plus 1000 euros
let birthday; 
let solde;

// 3 - afficher "ok" si x est positif et y est pair ou x est positif et z est entre 5 et 10 
let x;
let y;
let z;







