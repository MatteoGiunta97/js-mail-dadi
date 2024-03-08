/*

Mail:
Chiedi all’utente la sua email,
controlla che sia nella lista di chi può accedere,
stampa un messaggio appropriato sull’esito del controllo.
Per la soluzione di questo esercizio NON è consentito utilizzare .includes di js!
Prima di partire a scrivere codice poniamoci qualche domanda:
Che ci sia un array da qualche parte?
Se dobbiamo confrontare qualcosa che "cosa" ci serve?

*/


// Creo una lista di e-mail
const emails = ['nome.cognome@email.1', 'nome.cognome@email.2', 'nome.cognome@email.3', 'nome.cognome@email.4', 'nome.cognome@email.5', 'nome.cognome@email.6', 'nome.cognome@email.7', 'nome.cognome@email.8', 'nome.cognome@email.9', 'nome.cognome@email.10'];
const userEmail = 'nome.cognome@email.5';

console.log(emails)

let emailFound = false;
// Scorrere l'elenco delle email
for(let i = 0; i < emails.length; i++) {
    const thisEmail = emails[i];

    // Per ogni email:
    // Controllo se l'email attuale nel ciclo è uguale a quella dell'utente
    // Se trovo l'email nella lista -> mi appunto che l'ho trovata (nella viariabile)
    if(thisEmail === userEmail) {
        emailFound = true;
    }

    console.log(thisEmail)
}

// Alla fine del ciclo se nella variabile vedo che l'email c'è stampo "accesso consentito"
// altrimenti stampo "accesso negato"
if(emailFound === true) {
    alert("accesso consentito");
} else {
    alert("accesso negato");
}

console.log(emailFound)