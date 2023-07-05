// ---------EFECTO HEADER---------
window.addEventListener("scroll", function(){
    var header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
})

let btnCrear = document.getElementById("btn-crear");
let formulario = document.getElementById("formulario");
let cardsContainer = document.getElementById("cardsContainer");

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
    constructor(nombre, año, precio, img) {
      this.nombre = nombre;
      this.año = año;
      this.precio = precio;
      this.img = img;
    }
}

let productos = [
    {nombre: "Camiseta Titular Boca Juniors Adidas ", año:"2022", precio: "35000", img:"./assets/img/camisetas/Boca_Home_2022.png"},
    {nombre: "Camiseta Titular Real Madrid Adidas", año:"2023", precio: "55000", img:"./assets/img/camisetas/RMadrid_Home_2023.png"},
    {nombre: "Camiseta Inter de Miami Visitante Adidas", año:"2023", precio: "50000", img:"./assets/img/camisetas/IMiami_Away_2023.png"},
    {nombre: "Camiseta Argentina Campeón del Mundo Titular Adidas", año:"2022", precio: "50000", img:"./assets/img/camisetas/ARgentina_Home_2022.png"},
]

productos.forEach((producto) => {
  let content = document.createElement("div");
  content.className = "product";
  content.innerHTML = `
  <img src="${producto.img}">
  <div class="product-info">
    <p class="product-year">${producto.año}</p>
    <p class="product-title">${producto.nombre}</p>
    <h3 class="product-price">$ ${producto.precio}</h3> 
    <input class="prouduct-btn" type="submit" value="Comprar">
    </div>
    `;

    cardsContainer.append(content);
});

