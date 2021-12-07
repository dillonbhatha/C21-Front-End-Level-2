let myStr = "dit is een variabele van het datatype string"; //dit is een variabele van het datatype string, waarom?  staat tussen haakjes. vul je antwoord in op de lijn
let myInt = 3; //dit is een variabele van het datatype numeric waarom? omdat het een getal is. vul je antwoorden in op de lijn

//Waarom staat er let voor de variabelen? een variabele moet je declareren want dan leg je het vast in de geheugen. vul je antwoord in op de lijn

function getName(naam){ //In op welke regel in de HTML file wordt deze functie aangeroepen 19 vul je antwoord in op de lijn

    // vul in wat naam is: naam is de Parameter vul je antwoord in op de lijn, je hebt de eerste letter al gekregen
    // vul in: naam heeft de waarde getName de waarde noemen we een Any vul je antwoord in op de lijn, je hebt de eerste letter al gekregen

    alert(naam); //dit toont een pop up op het scherm met de tekst vul je naam hier, echt doen! deze tekst staan op regel 19 van de HTML vul je antwoord in op de lijn
}

function hideMe(){ //mag je de naam van de functie veranderen? ja. vul je antwoord in op de lijn
    document.getElementById("hide").style.display = "none"; 
    document.getElementById("show").style.display = "block"; 
    // wat gebeurd er in deze functie? het verstoppen en het verschijnen van plaatjes. en waar wordt deze in je HTML aangeroepen? ____________ vul je antwoorden in op de lijn
}

function show(){ //als ik de naam van deze functie verander, waar verander ik deze dan in de HTML 23 t/m 29. vul je antwoord in op de lijn
    document.getElementById("hide").style.display = "block"; // wat doet getElementById? element selecteren. vul je antwoord in op de lijn
    document.getElementById("show").style.display = "none";     
    // wat gebeurd er in deze functie? =het verstopt. vul je antwoord in op de lijn
}

function rekenen(getal){ //In op welke regel in de HTML file wordt deze functie aangeroepen 32. en wanneer wordt deze aangeroepen als je klikt op de button. vul je antwoord in op de lijn

    let antwoord = myInt + getal; //waar komt de waarde van myInt vandaan regel 2 van js. en waar komt de waarde van getal vandaan? ___regel 34____ vul je antwoord in op de lijn

    document.querySelector(".som").innerHTML = antwoord;  // wat doet querySelector? _querySelector is een methode om met javascript elementen te selecteren zoals id en classes.___  Wat is antwoord hier? vul je antwoorden in op de lijn
    
    //wat gebeurt er in deze functie? _als je op de knop drukt word het veranderd naar het antwoord_____ vul je antwoord in op de lijn

    //verander de waarde van myInt (zorg dat je een getal gebruikt) en refresh de pagina, wat gebeurd er? _dan reken je met een ander getal____ vul je antwoord in op de lijn
    //probeer ook eens de + in een - te veranderen of in een * als waarde van de variabele antwoord (regel 28), zie je wat er gebeurt? dan word er met een andere waarde gerekend
}

function setColor(element, kleur, size){ //In op welke regel in de HTML file wordt deze functie aangeroepen _____46_____ vul je antwoord in op de lijn

    element.style.color = kleur; //waar komt de waarde van element vandaan ____this______ en waar komt de waarde van kleur vandaan? ___orange_____ vul je antwoord in op de lijn
    element.style.fontSize = size; //waar komt de waarde van szie vandaan? ____30px___ vul je antwoord in op de lijn

    //wat gebeurt er in deze functie? ______het selecteerd een waarde geeft het een kleur and size______ vul je antwoord in op de lijn
}

getName(myStr);
// wat gebeurd er hierboven ___een functie om een naam te krijgen en een string___ en wanneer gebeurt dat _als je een string maakt___ (tip ververs je pagina eens in je brouwser? vul je antwoord in op de lijn.
// verander de waarde van myStr en kijk wat er dan gebeurt (ververs je browser en test het uit) wat gebeurd er? ____er komt geen pop-up meer____ vul je antwoord in op de lijn.