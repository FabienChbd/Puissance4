let readLine = require ("readline-sync")
let puissance4 = []
const nbColonne = 7
const nbLigne = 6
let joueur1car = "X"
let joueur2car = "O"

puissance4 = initTableauVide(nbLigne, nbColonne, 0)
afficherP4(puissance4, joueur1car, joueur2car)

while(true){
    if (joueurJoue(1)){
        console.log("J1 Win")
        return
    }
    if (joueurJoue(2)){
        console.log("J2 Win")
        return
    }
    }


function joueurJoue(joueur){
    let ligneVide =-1
    let colonne =-1
    while(ligneVide===-1|| colonne<=0||colonne >7){
console.log ("Choisie une colonne vide")
colonne = saisirColonne()
ligneVide = retournerLigneVide(colonne)}
puissance4[ligneVide][colonne-1] = joueur
afficherP4( puissance4, joueur1car, joueur2car)
return verifFinDeJeu
}
/**
 * Saisie de la colonne
 * @returns 
 */
function saisirColonne(){
return readLine.question("Quelle Colonne ?")
}

function retournerLigneVide(colonne){
    return 5
}

function verifFinDeJeu(){
    return true
}
/**
 * init tableau en fonct du nb lignes et colonnes
 * @param {num} nbLigne 
 * @param {num} nbColonne 
 * @param {all} car 
 * @returns 
 */
function initTableauVide (nbLigne, nbColonne, car=''){
    let tab =[];
    for (let i=0; i< nbLigne;i++){
        let ligne = [];
        for (let j=0;j<nbColonne;j++){
            ligne.push(car);
        }
        tab.push(ligne)
    }
    return tab
}
/**
 *  * Permet d'afficher le tableau de P4
 * @param {array string} puissance4 
 * @param {string} joueur1car 
 * @param {string} joueur2car 
 */
function afficherP4(puissance4, joueur1car, joueur2car){
    for(let i=0; i < puissance4.length;i++){
        let ligne="";
        for(let j=0;j<puissance4[i].length;j++){
            ligne += "| "
            if(puissance4[i][j] === 0){
                ligne += '_'
            } else if (puissance4[i][j] === 1){
                ligne += joueur1car
            } else if (puissance4[i][j] === 2){
                ligne += joueur2car
            }
            ligne += " |"
        }
        console.log(ligne)
    }
}