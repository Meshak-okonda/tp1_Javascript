var nombrePersonne = [];
let img = document.getElementById('ab')
let image = document.getElementById("photo")
let nom = document.getElementById("nom");
let prenom = document.getElementById("prenom");
let select = document.getElementById("selection");
let bio = document.getElementById("bio");
var conteneur = document.getElementById('voir');

function reinit(){
    event.preventDefault();
    nom.value = "";
    prenom.value = "";
    bio.value = "";  
    img.style.opacity = 0
    image_verif = true
}

let btnInit = document.getElementById("reinit")
btnInit.addEventListener('click', reinit)

// affichage 
function maj(nombrePersonne){
        console.log()
        conteneur.innerHTML= "" ;
    for (const i in nombrePersonne) {
    // Création de l'afficher
        console.log(nombrePersonne[i])
        let information = document.createElement('div')
        information.className = 'information'

    // Creation de l'element qui va afficher l'image de la personne
        let img = document.createElement('img')
        img.className = 'img-rond'
        img.src = nombrePersonne[i].srcImg
        img.alt = 'Image de ' + nombrePersonne[i].nom
        

    // Création de la section qui va pour affichage du texte de la personne
        let text = document.createElement('div')
        text.className = 'sect-info'


        let textHaut = document.createElement('div')
        textHaut.className = 'space reajuste'

    // Création de l'element nom et prenom pour affichage
        let nomPrenom = document.createElement('p') 
        nomPrenom.innerText = nombrePersonne[i].nom + '  ' + nombrePersonne[i].prenom 
        nomPrenom.className = 'size scrollY'

        let btnSup = document.createElement('img') 
        btnSup.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABmJLR0QA/wD/AP+gvaeTAAABsklEQVRoge2ZPUsDQRCGH42FQTSFKPiBiIUWElsbC2vRVrQVFCsbC1tL/4JYxC6N/0BEC4OIChZptNHCPgZFMCBa3CVZjtzlNrsXl2QeWJj9mNl5w2Q5dkEQEqHHUpwhYA9YBUYi1r0BZ8AxULG0tzUmgCfgV6MVgMH/SDaKC/REVNuJzSRMS2seKCr9IzxhjUgB68CW368Ao0DZMAcrbFD/hR9jrE8BJcVn0VYivYb+/YpdirH+B3hX+mnD/Wv0RcztA7NN/NX5ObzTqBnDgT02m6y/AU5jxA3lktb+xLZbLk6ypqXlDFGllQdufXsFyCafTo0CcO3bDzYD52hvOR3qJtgVpRWHZ+DKt8fxvrUAPvBKs8qOYuf9eYA1YMwwBy3CSks9UZaV8ZeAv+ozrYyHnYzdW1oixDVEiGuIENcQIa4hQlxDhLiGCHENEeIaIsQ1OkaI6S1KFjjw7RllPKOMB9mlfuE9Zbi/Nh1zQfelG9iQT12HuELudQMbcpdU4DTwSnvKqoC91+aGLOA9LycpoghMtpKcrvIMsA0sAQOtbBhCGTjHe5n6thhXEATBUf4A1LHmPWgZrmAAAAAASUVORK5CYII=" 
        btnSup.alt = "" + i
        btnSup.id = "btn-suppression"
        btnSup.addEventListener('click', function(e){
                nombrePersonne.splice(Number(e.target.alt), 1)
                maj(nombrePersonne);
        });
        

        textHaut.appendChild(nomPrenom)
        textHaut.appendChild(btnSup)

    // Création de l'element groupe pour affichage
        let groupe = document.createElement('p')
        groupe.className = 'size reajuste'
        groupe.innerText = nombrePersonne[i].groupe

    // Création de l'element bio pour affichage
        let bio = document.createElement('p')
        bio.innerText = nombrePersonne[i].bio

    // incorporation des elements à afficher dans leur conteneur
        text.appendChild(textHaut)
        text.appendChild(groupe)
        text.appendChild(bio)

    // incorporation des elements à afficher dans leur conteneur principale
        information.appendChild(img)
        information.appendChild(text)

    // affichage des informations 
        conteneur.appendChild(information)
    }
}

// variable qui contient tout les elements à afficher



// evenement pour la création d'un element
function creer(event){
    event.preventDefault();

    if(verification(nom, prenom, bio, source_img)){
        let personne = {
        nom : nom.value,
        prenom : prenom.value,
        groupe : select.value,
        bio : bio.value,
        srcImg : source_img
        }

        reinit()
        
        nombrePersonne.push(personne)
        maj(nombrePersonne);
    }
}

// Verification de la validité des données

function verification(nom, prenom, bio, source_img){
    let conteneur = document.getElementsByClassName('container')
    let body = document.getElementsByTagName('body')
    
    let aff = document.createElement('p')
    aff.className = "alert"  

    function affichage(){
        let sup = document.getElementsByClassName('alert') 
        body[0].removeChild(sup[0])
        conteneur[0].style.opacity = "1"
    }

    function alertAff(message, element){
        conteneur[0].style.opacity = "0.005"
        element.value = ""
        aff.innerText = message
        
        body[0].appendChild(aff)

        element.focus();

        setInterval(affichage, 3000)
    }

    if((prenom.value.trim() == "")){
        alertAff("Vous devez mettre le Prenom", prenom)

    }else if(nom.value.trim() == ""){
        alertAff("Vous devez mettre le nom", nom)
    }
    else if (bio.value.trim() == ""){
        alertAff("Vous devez mettre la Biographie de la personne", bio)
        
    }else if(image_verif){
        alertAff("Vous devez mettre la photo de la personne", img)
    }
    else{
        return true
    }
}






let btnCreer = document.getElementById("creer")
btnCreer.addEventListener('click', creer)

let source_img = "";
let image_verif = true

image.addEventListener('change', function(e){
img.style.opacity = 1
let fReader = new FileReader();
fReader.readAsDataURL(image.files[0]);
fReader.onloadend = function(event){
img.src = event.target.result;
source_img = event.target.result;
image_verif = false
}
})

// let filtre = [];
                            

// // btnCherche.on
// let btnCherche = document.getElementById('search')
// btnCherche.addEventListener('click', filtrer({
//     let valeur = document.getElementById('valeur')
//     event.preventDefault()
//     filtre = nombrePersonne.filter(function(element){
//         return element.nom.indexOf(valeur.Value) > -1
//     })
//     console.log(filtre)

//     maj(filtre)}))


// let btnMaj = document.getElementById('maj')
// btnMaj.addEventListener('click', maj(nombrePersonne))