/*Descrizione:


Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
*/

var pcNumbers = []
var points = 0;

function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min) + min)
}


// Un alert() espone 5 numeri generati casualmente.
for (var i = 0; i < 5; i++) {
    var generatedNumber = randomNumber(1, 100)
    pcNumbers.push(generatedNumber)
}
alert(pcNumbers);
// Da li parte un timer di 30 secondi.
//Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
setTimeout(function () {
    for (i = 0; i < 5; i++) {
        var userNumber = parseInt(prompt('Inserisci, uno alla volta, il numero che hai visto: '))
        if (pcNumbers.includes(userNumber)) {
            points++
        }
    }
    alert("Hai totalizzato: " + points + ' punti')
}, 30000)
