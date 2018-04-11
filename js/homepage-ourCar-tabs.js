let tab=$(".our-car__tab"); console.log(tab.length);
let description=document.querySelectorAll(".our-car__tab-content");
console.log(tab);

for (var i=0; i<tab.length; i++) {
    tab[i].addEventListener('click', showCatalogue);
}

function showCatalogue(event) {
    for(var i=0; i<tab.length; i++){
        if (event.currentTarget==tab[i]) {
           tab[i].classList.add('tab_underline');
            description[i].classList.add('show');
            description[i].classList.remove('hide');
            
        }
        else { 
            description[i].classList.remove('show');
            description[i].classList.add('hide');
            tab[i].classList.remove('tab_underline');
        }
    }
}
