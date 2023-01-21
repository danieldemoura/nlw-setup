const button = document.querySelector("#btn-habito")
const form = document.querySelector("form")
const nlwSetup = new NLWSetup(form)

button.addEventListener("click", add)
form.addEventListener("change", save)

function add() {
  let today = new Date().toLocaleString("pt-br").slice(0, -5)
  let dayExists = nlwSetup.dayExists(today)

  if(dayExists) {
    alert("O Dia que você está querendo adicionar já existe!")
    return
  }

  nlwSetup.addDay(today)
}

function save() {
  localStorage.setItem("NLWSetup Meus Hábitos", JSON.stringify(nlwSetup.data))
}

const data = JSON.parse(localStorage.getItem("NLWSetup Meus Hábitos")) || {}
nlwSetup.setData(data)
nlwSetup.load()