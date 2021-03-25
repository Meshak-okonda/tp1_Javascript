     function reinit(){
        event.preventDefault();
        let nom = document.getElementById("nom");
        nom.value = "";
        let prenom = document.getElementById("prenom");
        prenom.value = "";
        let select = document.getElementById("selection");
        let bio = document.getElementById("bio") ;
        bio.value = "";  
        let img = document.getElementById('ab')
        img.style.opacity = 0
        image_verif = true
        }
    let btnInit = document.getElementById("reinit")
    btnInit.addEventListener('click', reinit)
    function maj(){
        var conteneur = document.getElementById('voir');
        conteneur.innerHTML= "" ;
        for (const i in nombrePersonne) {
        // Création de l'afficher
        var information = document.createElement('div')
            information.className = 'information'

        // Creation de l'element qui va afficher l'image de la personne
            var img = document.createElement('img')
            img.className = 'img-rond'
            img.src = nombrePersonne[i].srcImg
            img.alt = 'Image de ' + nombrePersonne[i].nom
            

        // Création de la section qui va pour affichage du texte de la personne
            var text = document.createElement('div')
            text.className = 'sect-info'


            var textHaut = document.createElement('div')
            textHaut.className = 'space reajuste'

        // Création de l'element nom et prenom pour affichage
            var nomPrenom = document.createElement('p') 
            nomPrenom.innerText = nombrePersonne[i].nom + '  ' + nombrePersonne[i].prenom 
            nomPrenom.className = 'size'

            var btnSup = document.createElement('img') 
            btnSup.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABmJLR0QA/wD/AP+gvaeTAAABsklEQVRoge2ZPUsDQRCGH42FQTSFKPiBiIUWElsbC2vRVrQVFCsbC1tL/4JYxC6N/0BEC4OIChZptNHCPgZFMCBa3CVZjtzlNrsXl2QeWJj9mNl5w2Q5dkEQEqHHUpwhYA9YBUYi1r0BZ8AxULG0tzUmgCfgV6MVgMH/SDaKC/REVNuJzSRMS2seKCr9IzxhjUgB68CW368Ao0DZMAcrbFD/hR9jrE8BJcVn0VYivYb+/YpdirH+B3hX+mnD/Wv0RcztA7NN/NX5ObzTqBnDgT02m6y/AU5jxA3lktb+xLZbLk6ypqXlDFGllQdufXsFyCafTo0CcO3bDzYD52hvOR3qJtgVpRWHZ+DKt8fxvrUAPvBKs8qOYuf9eYA1YMwwBy3CSks9UZaV8ZeAv+ozrYyHnYzdW1oixDVEiGuIENcQIa4hQlxDhLiGCHENEeIaIsQ1OkaI6S1KFjjw7RllPKOMB9mlfuE9Zbi/Nh1zQfelG9iQT12HuELudQMbcpdU4DTwSnvKqoC91+aGLOA9LycpoghMtpKcrvIMsA0sAQOtbBhCGTjHe5n6thhXEATBUf4A1LHmPWgZrmAAAAAASUVORK5CYII=" 
            btnSup.alt = "" + i
            btnSup.id = "btn-suppression"
            btnSup.addEventListener('click', function(e){
                    nombrePersonne.splice(Number(e.target.alt), 1)
                    maj();
            });

            textHaut.appendChild(nomPrenom)
            textHaut.appendChild(btnSup)

        // Création de l'element groupe pour affichage
            var groupe = document.createElement('p')
            groupe.className = 'size reajuste'
            groupe.innerText = nombrePersonne[i].groupe

        // Création de l'element bio pour affichage
            var bio = document.createElement('p')
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
var nombrePersonne = [];
    

// evenement pour la création d'un element
function creer(event){
        event.preventDefault();
        let nom = document.getElementById("nom");
        let prenom = document.getElementById("prenom");
        let select = document.getElementById("selection");
        let bio = document.getElementById("bio");
        image = document.getElementById("photo")
        if(verification(nom, prenom, bio, source_img)){
            let personne = {
            nom : nom.value,
            prenom : prenom.value,
            groupe : select.value,
            bio : bio.value,
            srcImg : source_img
            }
            console.log(source_img)

            let input = document.getElementById("photo");
            let fReader = new FileReader();

            reinit()
            
            nombrePersonne.push(personne)
            maj();
        }
    }

    function verification(nom, prenom, bio, source_img){
        let conteneur = document.getElementsByClassName('container')
        let body = document.getElementsByTagName('body')
        
        let aff = document.createElement('p')
        aff.className = "alert"

        function affichage(){
            conteneur[0].style.opacity = "1"
            let sup = document.getElementsByClassName('alert') 
            body[0].removeChild(sup[0])
        }
        if((prenom.value.trim() == "")){
            conteneur[0].style.opacity = "0.1"
            prenom.value = ""
            aff.innerText = "Vous devez mettre le Prenom"
            
            body[0].appendChild(aff)

            prenom.focus();

            setInterval(affichage, 5000)

        }else if(nom.value.trim() == ""){
            conteneur[0].style.opacity = "0.1"
            nom.value = ""
            aff.innerText = "Vous devez mettre le nom"
            body[0].appendChild(aff)

            nom.focus();

            setInterval(affichage, 5000)
        }
        else if (bio.value.trim() == ""){
            conteneur[0].style.opacity = "0.1"
            bio.value = ""
            aff.innerText = "Vous devez mettre la Biographie de la personne"
            body[0].appendChild(aff)

            bio.focus();

            setInterval(affichage, 5000)
        }else if(image_verif){
            conteneur[0].style.opacity = "0.1"
            
            aff.innerText = "Vous devez mettre la photo de la personne"
            body[0].appendChild(aff)

            document.getElementById("photo").focus()
            
            setInterval(affichage, 5000)
        }
        else{
            return true
        }
    }

var btnCreer = document.getElementById("creer")
btnCreer.addEventListener('click', creer)

var source_img = "";
var image_verif = true
var changePhoto = document.getElementById("photo")
changePhoto.addEventListener('change', function(e){
    var img = document.getElementById('ab')
    img.style.opacity = 1
    var input = document.getElementById("photo");
    var fReader = new FileReader();
    fReader.readAsDataURL(input.files[0]);
    fReader.onloadend = function(event){
    img.src = event.target.result;
    source_img = event.target.result;
    image_verif = false
    }
})