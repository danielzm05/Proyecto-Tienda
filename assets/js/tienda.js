/* Efecto Header */
window.addEventListener("scroll", function(){
    var header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
})

let btnCrear = document.getElementById("btn-crear");
let formulario = document.getElementById("formulario");


// ---------FORMULARIO---------
// control de boton que activa formulario
formulario.style.display = "none"; //ESTO DEBE IR EN EL IF SI ES ADMIN

const estadoFormulario = {
    mostrar: false,
};

btnCrear.onclick = (e) => {
    e.preventDefault();
    if (estadoFormulario.mostrar) {
        btnCrear.innerText = "Crear un producto";
        formulario.style.display = "none";
        estadoFormulario.mostrar = false;
        console.log(estadoFormulario);

      } else {
        btnCrear.innerText = "Cancelar";
        formulario.style.display = "block";
        estadoFormulario.mostrar = true;
        console.log(estadoFormulario);
      }
}

class Producto {
    constructor(nombre, año, precio) {
      this.nombre = nombre;
      this.año = año;
      this.precio = precio;
    }
}

let listaProductos = JSON.parse(localStorage.getItem("productos")) || [
    {nombre: "Camiseta Titular Boca Juniors Adidas ", año:"2022", precio: "35000"},
    {nombre: "Camiseta Titular Real Madrid Adidas", año:"2023", precio: "55000"},
    {nombre: "Camiseta Inter de Miami Visitante Adidas", año:"2023", precio: "50000"},
    {nombre: "Camiseta Argentina Campeón del Mundo Titular Adidas", año:"2022", precio: "50000"},
]