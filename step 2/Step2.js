const texte = document.getElementById("texte");
function visible(battikh){
    if(battikh==="appear"){
        texte.style.display="grid";
        texte.style.gridTemplateColumns="50%";
        texte.style.transform="rotate(270deg)";
    } 
    else if(battikh==="disappear"){
        texte.style.display="none";
    }
}