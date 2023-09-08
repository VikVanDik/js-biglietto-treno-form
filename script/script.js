// raccogliere i dati dall'utente
// calcolare prezzo ed eventuali sconti
// creare comparsa della card biglietto alla pressione del bottone
// creare reset ed eliminazione della card alla pressione del bottone reset



const send = document.getElementById('invia');
const disappear = document.getElementById('disappear')
const priceMulti = 0.21
const multiUA = 8/10
const multiA = 6/10

let messageName = document.getElementById('message-name')
let ticketType = document.getElementById('ticket-type')
let cartNumber = document.getElementById('cart')
let PD = document.getElementById('PD')
let cost = document.getElementById('cost')

send.addEventListener('click', function(){
  disappear.classList.remove('d-none');
  const km = parseInt(document.getElementById('km').value)
  const name = document.getElementById('name').value
  let age = parseInt(document.getElementById('age').value)
  console.log(age)
  let price = km * priceMulti
  if (age == 1) {
    let priceUA = price * multiUA
    let ticketUA = `Biglietto Minorenni`
    ticketType.innerHTML = ticketUA;
    cost.innerHTML = priceUA
    console.log(ticketUA)
    console.log(priceUA)
  } else if (age == 2) {
    let priceN = price
    let ticketN = `Biglietto Standard`
    ticketType.innerHTML = ticketN;
    cost.innerHTML = priceN
    console.log(ticketN)
    console.log(priceN)
  } else if (age == 3) {
    let priceA = price * multiA 
    let ticketA = `Biglietto Silver`
    ticketType.innerHTML = ticketA;
    cost.innerHTML = priceA
    console.log(ticketA)
    console.log(priceA)
  }

  messageName.innerHTML=name;
  cartNumber.innerHTML = Math.floor(Math.random() * 9) + 1;
  PD.innerHTML = Math.floor(Math.random() * (9999 - 9000)) + 9000;

})