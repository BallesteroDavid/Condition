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


