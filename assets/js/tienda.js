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
let verCarrito = document.getElementById("verCarrito");
let modalContainer = document.getElementById("modalContainer");


// Vista Admin
const adminLogin = JSON.parse(localStorage.getItem("adminLogin")) || {
  admin: false,
};

if (adminLogin.admin) {

  vistaAdmin.style.display = "flex";
  btnLoginHeader.innerText = "Cerrar Sesión";

  btnLoginHeader.addEventListener("click", () => {
    adminLogin.admin = false;
    alert("Haz cerrado sesión.")
    localStorage.setItem("adminLogin", JSON.stringify(adminLogin));
  });

} else {

  vistaAdmin.style.display = "none";
}

// Carrito
let carrito = [];

// Clase Producto y constructor
class producto {
  constructor(nombre, año, precio, img) {
    this.nombre = nombre;
    this.año = año;
    this.precio = precio;
    this.img = img;
  }
}

let productos = [
  { nombre: "Camiseta Titular Boca Juniors Adidas ", año: "2022", precio: 35000, img: "./assets/img/camisetas/Boca_Home_2022.png" },
  { nombre: "Camiseta Titular Real Madrid Adidas", año: "2023", precio: 55000, img: "./assets/img/camisetas/RMadrid_Home_2023.png" },
  { nombre: "Camiseta Inter de Miami Visitante Adidas", año: "2023", precio: 50000, img: "./assets/img/camisetas/IMiami_Away_2023.png" },
  { nombre: "Camiseta Argentina Campeón del Mundo Titular Adidas", año: "2022", precio: 50000, img: "./assets/img/camisetas/ARgentina_Home_2022.png" },
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
  });
});

// Funcion del Botón Agregar en Cards
verCarrito.addEventListener("click", () => {

  modalContainer.innerHTML = "";
  modalContainer.style.display = "flex";

  const modalHeader = document.createElement("div");
  modalHeader.className = "modal-header";
  modalHeader.innerHTML = `
  <h1 class="modal-header-title">Carrito</h1> 
  `;
  modalContainer.append(modalHeader);

  const modalbutton = document.createElement("h1");
  modalbutton.innerText = "x";
  modalbutton.className = "modal-header-button";

  modalbutton.addEventListener("click", () => {
    modalContainer.style.display = "none";
  });

  modalHeader.append(modalbutton);


  carrito.forEach((producto) => {
    let carritoContent = document.createElement("div");
    carritoContent.className = "modal-content";
    carritoContent.innerHTML = `
    <img src="${producto.img}">
    <p class="product-title">${producto.nombre}</p>
    <h3 class="product-price">$ ${producto.precio}</h3> 
    `;

    modalContainer.append(carritoContent);
  });

  const total = carrito.reduce((acc, num) => acc + num.precio, 0);
  const totalCarrito = document.createElement("div");
  totalCarrito.className = "total-content";
  totalCarrito.innerHTML = `<h3 class="product-price">Total: $${total}</h3>`;
  modalContainer.append(totalCarrito);


})

