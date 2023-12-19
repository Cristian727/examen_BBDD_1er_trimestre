let lista = JSON.parse(localStorage.getItem("lista"))
if(lista === null){
  lista = []
} else{
  for(let i = 0; i<= lista.length; i++){
    const elemento = document.createElement("p")
    elemento.innerHTML = lista[i]
    document.querySelector(".resultados").appendChild(elemento)
  }
}

function añadir(){
  const valor = document.querySelector("#input_usuario").value
  lista.push(valor)
   const elemento = document.createElement("p")
   elemento.innerHTML = valor
   document.querySelector(".resultados").appendChild(elemento)
   document.querySelector("#input_usuario").value = ""
   localStorage.setItem("lista", JSON.stringify(lista))
}

function borrar(){
  lista = []
  document.querySelector(".resultados").innerHTML = ""
  localStorage.removeItem('lista')
  document.querySelector(".resultadoGanador").innerHTML = ""
}

function random(array){
  return array[Math.floor(Math.random() * array.length)]
}

function sortear(){
   const ganador = random(lista)
   const textoGanador = document.createElement("p")
   textoGanador.innerHTML = ganador
   document.querySelector(".resultadoGanador").innerHTML = ""
   document.querySelector(".resultadoGanador").appendChild(textoGanador)
}

function capturarTecla(event){
  if(event.keyCode === 13){
    añadir()
  }
  if(event.keyCode === 27){
    borrar()
  }
}