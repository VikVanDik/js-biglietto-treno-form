// raccogliere i dati dall'utente
// calcolare prezzo ed eventuali sconti
// creare comparsa della card biglietto alla pressione del bottone
// creare reset ed eliminazione della card alla pressione del bottone reset



const send = document.getElementById('invia');
const disappear = document.getElementById('disappear')
const priceMulti = 0.21
const multiUA = 8/10
const multiA = 6/10

send.addEventListener('click', function(){
  disappear.classList.toggle('d-none');
  const km = parseInt(document.getElementById('km').value)
  const name = document.getElementById('name').value
  let age = parseInt(document.getElementById('age').value)
  console.log(age)
  let price = km * priceMulti
  if (age == 1) {
    let priceUA = price * multiUA
    console.log(priceUA)
  } else if (age == 2) {
    let priceN = price
    console.log(priceN)
  } else if (age == 3) {
    let priceA = price * multiA 
    console.log(priceA)
  }

})