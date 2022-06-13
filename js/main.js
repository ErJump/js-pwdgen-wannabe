//Dichiaro e assegno le costanti attraverso l'input dell'utente
const userName = prompt("Inserisci il tuo nome");
const userSurname = prompt("Inserisci il tuo cognome");
const userColor = prompt("Inserisci il tuo colore preferito");
//Dichiaro e assegno il numero 22 
const currentYear = 22; 
//Richiamo lo span con l'id user-password e faccio scrivere all'interno dell'elemento html le variabili dichiarate precedentemente.
document.getElementById("user-password").innerHTML = userName + userSurname + userColor + currentYear;