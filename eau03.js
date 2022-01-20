#! node

//Script qui affiche les arguments à l'envers

// Function qui parcour un tableau à l'envers et qui affiche chaque index
let reverse = (tab) => {
  for (let a = tab.length - 1; a >= 0; a--) {
    console.log(tab[a])
  }
}

//Gestion d'erreur
if (process.argv.length < 4) {
  console.log("Veuillez indiquer au moins deux arguments au script")
}

//Parsing
let arg = process.argv

//Résolution du problème et Affichage
arg.splice(0, 2)
reverse(arg)
