const form = document.querySelector('#form-habits')
const nwlSetup = new NLWSetup(form)

const button = document.querySelector('header button')

button.addEventListener('click', add)
form.addEventListener('change', save)

function save() {
  localStorage.setItem('NLWSetup@habits', JSON.stringify(nwlSetup.data))
}

function add() {

  const today = new Date().toLocaleString('pt-br').slice('0, -5')
  const dayExists = nwlSetup.dayExists(today)

  if(dayExists) {
    alert("Dia já incluso!")
    return
  }

  alert('Dia adicionado com sucesso!')
  nwlSetup.addDay(today)
}

const data = JSON.parse(localStorage.getItem('NLWSetup@habits')) || {}
nwlSetup.setData(data)
nwlSetup.load()