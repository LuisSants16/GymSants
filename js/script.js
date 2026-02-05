const header = document.querySelector(".container_header");

window.addEventListener("scroll", () => {

  if (window.scrollY > 80) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }

});


document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.getElementById("menuToggle");
  const menu = document.getElementById("menu");

  if (!menuToggle || !menu) {
    console.error("Falta #menuToggle o #menu en el HTML");
    return;
  }

  const icon = menuToggle.querySelector("i");
  const links = document.querySelectorAll(".link_menu");

  menuToggle.addEventListener("click", () => {
    menu.classList.toggle("active");

    if (icon) {
      if (menu.classList.contains("active")) {
        icon.classList.remove("fa-bars");
        icon.classList.add("fa-xmark");
      } else {
        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");
      }
    }
  });

  links.forEach(link => {
    link.addEventListener("click", () => {
      menu.classList.remove("active");
      if (icon) {
        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");
      }
    });
  });
});

const btnIMC = document.getElementById("calcularIMC")
const btnLimpiar = document.getElementById("limpiarIMC")
const resultado = document.getElementById("resultadoIMC")

btnIMC.addEventListener("click", () => {
  const peso = parseFloat(document.getElementById("peso").value)
  const altura = parseFloat(document.getElementById("altura").value)
  const edad = parseInt(document.getElementById("edad").value)
  const genero = document.getElementById("genero").value

  if(!peso || !altura || !edad || genero === ""){
    resultado.textContent = "Por favor completa todos los campos"
    return
  }

  const alturaM = altura / 100
  const imc = (peso / (alturaM ** 2)).toFixed(1)

  let estado = ""
  let mensaje = ""

  if(imc < 18.5){
    estado = "Bajo peso"
    mensaje = "Estás por debajo del peso recomendado"
  }else if(imc < 25){
    estado = "Peso normal"
    mensaje = "Tu peso es saludable"
  }else if(imc < 30){
    estado = "Sobrepeso"
    mensaje = "Estás por encima del peso recomendado"
  }else{
    estado = "Obesidad"
    mensaje = "Se recomienda reducir grasa corporal"
  }

  const pesoMin = (18.5 * (alturaM ** 2)).toFixed(1)
  const pesoMax = (24.9 * (alturaM ** 2)).toFixed(1)

  resultado.innerHTML = `
    <strong>IMC:</strong> ${imc}<br>
    <strong>Estado:</strong> ${estado}<br>
    <strong>Peso actual:</strong> ${peso} kg<br>
    <strong>Peso ideal:</strong> ${pesoMin} kg - ${pesoMax} kg<br>
    <span>${mensaje}</span>
  `
})

btnLimpiar.addEventListener("click", () => {
  resultado.textContent = ""
})