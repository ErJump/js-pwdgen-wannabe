const userName = prompt("Inserisci il tuo nome");
const userSurname = prompt("Inserisci il tuo cognome");
const userColor = prompt("Inserisci il tuo colore preferito");
const currentYear = 22; 

document.getElementById("user-password").innerHTML = userName + userSurname + userColor + currentYear;