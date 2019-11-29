
let otherCheckbox = document.querySelector('input[value="other"]');

function createBook (nomLivre, auteur, dispo)
{   if(otherCheckbox.checked){
        document.querySelector('#rep').innerHTML += `
        <div class="list">
        <h1>le livre "${nomLivre}"</h1>
        <h4>écrit par "${auteur}"</h4>
        </div>
        `;}
    else{
        document.querySelector('#rep').innerHTML += `
        <div class="listb">
        <h1>le livre "${nomLivre}"</h1> 
        <h4>écrit par "${auteur}"</h4>
        </div>
        `;
    }
}
document.forms.list.addEventListener(
    'submit',
    function(event){
        event.preventDefault();
        createBook(
            this.nomLivre.value,
            this.auteur.value,
            this.dispo.value,
        );
        this.nomLivre.value='';
        this.auteur.value='';
    } 
)

