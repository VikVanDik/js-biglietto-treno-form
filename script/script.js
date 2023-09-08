// raccogliere i dati dall'utente
// calcolare prezzo ed eventuali sconti
// creare comparsa della card biglietto alla pressione del bottone
// creare reset ed eliminazione della card alla pressione del bottone reset

const km = document.getElementById('km').value

console.log(km);

const send = document.getElementById('invia');
const disappear = document.getElementById('disappear')

send.addEventListener('click', function(){
  disappear.classList.toggle('d-none')
})