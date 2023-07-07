// Efecto Header
/* window.addEventListener("scroll", function () {
  var header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 0);
}) */

// ELementos
let btnCrear = document.getElementById("btn-crear-producto");
let vistaAdmin = document.getElementById("vista-admin");
let btnLoginHeader = document.getElementById("btn-nav-login");
let cardsContainer = document.getElementById("cardsContainer");
let modalContainer = document.getElementById("modalContainer");
let cantidadCarrito = document.getElementById("cantidad-carrito");

// Vista Admin
const adminLogin = JSON.parse(localStorage.getItem("adminLogin")) || {
  admin: false,
};

if (adminLogin.admin) {

  vistaAdmin.style.display = "flex";
  btnLoginHeader.innerText = "Cerrar Sesión";

  btnLoginHeader.addEventListener("click", () => {
    adminLogin.admin = false;
    alert("Has cerrado sesión.")
    localStorage.setItem("adminLogin", JSON.stringify(adminLogin));
  });

} else {

  vistaAdmin.style.display = "none";
}

// Carrito
let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

// Clase Producto y constructor
class producto {
  constructor(id, nombre, año, precio, img) {
    this.nombre = id;
    this.nombre = nombre;
    this.año = año;
    this.precio = precio;
    this.img = img;
  }
}

let productos = [
  { id: "001", nombre: "Camiseta Titular Boca Juniors Adidas ", año: "2022", precio: 35000, img: "./assets/img/camisetas/Boca_Home_2022.png" },
  { id: "002", nombre: "Camiseta Titular Real Madrid Adidas", año: "2023", precio: 55000, img: "./assets/img/camisetas/RMadrid_Home_2023.png" },
  { id: "003", nombre: "Camiseta Inter de Miami Visitante Adidas", año: "2023", precio: 50000, img: "./assets/img/camisetas/IMiami_Away_2023.png" },
  { id: "004", nombre: "Camiseta Argentina Campeón del Mundo Titular Adidas", año: "2022", precio: 50000, img: "./assets/img/camisetas/ARgentina_Home_2022.png" },
]



//Formulario Crear Producto
btnCrear.addEventListener("click", (e) => {
  e.preventDefault()

  const id = document.getElementById("id-añadir").value.trim();
  const nombre = document.getElementById("nombre-añadir").value.trim();
  const año = document.getElementById("año-añadir").value.trim();
  const precio = parseFloat(document.getElementById("precio-añadir").value);
  const imagen = document.getElementById("img-añadir").value.trim();
  productos.push({
    id: id,
    nombre: nombre,
    año: año,
    precio: precio,
    img: imagen,
  });


  /* console.log(id + " " + nombre + " " + año + " " + precio + " " + imagen); */
  console.log(productos);
  crearCardsHTML();
});

//Crea Productos HTML
const crearCardsHTML = () => {
  cardsContainer.innerHTML = ``;

  productos.forEach((elemento) => {
    let product = document.createElement("div");
    product.className = "product";
    product.innerHTML = `
    <img src="${elemento.img}">
      `;

    let productInfo = document.createElement("div");
    productInfo.className = "product-info";
    productInfo.innerHTML = `
      <p class="product-year">${elemento.año}</p>
      <p class="product-title">${elemento.nombre}</p>
      <h3 class="product-price">$ ${elemento.precio}</h3> 
      </div>
      `;
    product.appendChild(productInfo);

    let comprar = document.createElement("button")
    comprar.innerText = "Agregar"
    comprar.className = "product-btn"
    productInfo.appendChild(comprar);

    cardsContainer.append(product);

    comprar.addEventListener("click", () => {
      carrito.push({
        id: elemento.id,
        nombre: elemento.nombre,
        año: elemento.año,
        precio: elemento.precio,
        img: elemento.img,
      });
      carritoCounter();
      saveLocal()
    });
  });
}

//set
const saveLocal = () => {
  localStorage.setItem("carrito", JSON.stringify(carrito));
}

crearCardsHTML();
