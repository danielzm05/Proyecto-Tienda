// Efecto Header
/* window.addEventListener("scroll", function () {
  var header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 0);
}) */

// ELementos
let btnCrear = document.getElementById("btn-mostrar-formulario"); //Cambiar btnCrear a btnMostrar
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
let carrito = [];

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

//Crea Productos HTML
productos.forEach((producto) => {
  let product = document.createElement("div");
  product.className = "product";
  product.innerHTML = `
  <img src="${producto.img}">
    `;

  let productInfo = document.createElement("div");
  productInfo.className = "product-info";
  productInfo.innerHTML = `
    <p class="product-year">${producto.año}</p>
    <p class="product-title">${producto.nombre}</p>
    <h3 class="product-price">$ ${producto.precio}</h3> 
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
      id: producto.id,
      nombre: producto.nombre,
      año: producto.año,
      precio: producto.precio,
      img: producto.img,
    });
    console.log(carrito);
    carritoCounter();
  });
});


