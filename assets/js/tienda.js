// Efecto Header
window.addEventListener("scroll", function () {
  var header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 0);
})

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

  //Botón cerrar sesión
  btnLoginHeader.addEventListener("click", () => {
    adminLogin.admin = false;
    cerrarSesionAlert();
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

let productos = JSON.parse(localStorage.getItem("misProductos")) || [
  { id: 1, nombre: "Camiseta Titular Boca Juniors Adidas ", año: "2022", precio: 35000, img: "./assets/img/camisetas/Boca_Home_2022.png" },
  { id: 2, nombre: "Camiseta Titular Real Madrid Adidas", año: "2023", precio: 55000, img: "./assets/img/camisetas/RMadrid_Home_2023.png" },
  { id: 3, nombre: "Camiseta Inter de Miami Visitante Adidas", año: "2023", precio: 50000, img: "./assets/img/camisetas/IMiami_Away_2023.png" },
  { id: 4, nombre: "Camiseta Argentina Campeón del Mundo Titular Adidas", año: "2022", precio: 50000, img: "./assets/img/camisetas/Argentina_Home_2022.png" },
  { id: 5, nombre: "Camiseta Argentina Visitante Adidas", año: "2006", precio: 40000, img: "./assets/img/camisetas/Argentina_Away_2006.png" },
  { id: 6, nombre: "Camiseta Velez Sarsfield Titular Topper", año: "2005", precio: 30000, img: "./assets/img/camisetas/Velez_Home_2005.png" },
  { id: 7, nombre: "Camiseta Boca Juniors TitulasAdidas", año: "2006", precio: 50000, img: "./assets/img/camisetas/Boca_Home_2006.png" },
  { id: 8, nombre: "Camiseta River Plate Titular Adidas", año: "2001", precio: 40000, img: "./assets/img/camisetas/River_Home_2001.png" },

]

//Formulario Crear Producto
btnCrear.addEventListener("click", (e) => {
  e.preventDefault()

  const id = productos.length + 1;
  const nombre = document.getElementById("nombre-añadir").value.trim();
  const año = document.getElementById("año-añadir").value.trim();
  const precio = parseFloat(document.getElementById("precio-añadir").value);
  const imagen = document.getElementById("img-añadir").value.trim();

  if (nombre != "" && año.length == 4 && precio > 0 && imagen != "") {

    document.getElementById("nombre-añadir").value = "";
    document.getElementById("año-añadir").value = "";
    document.getElementById("precio-añadir").value = "";
    document.getElementById("img-añadir").value = "";

    productos.push({
      id: id,
      nombre: nombre,
      año: año,
      precio: precio,
      img: imagen,
    });

    productoCreadoAlert();
    saveLocalmisProductos();
    crearCardsHTML();

  } else {
    errorAlert();
  }

});

//Crea Productos HTML
const crearCardsHTML = () => {
  cardsContainer.innerHTML = ``;

  productos.forEach((elemento) => {

    //Card Con Imagen del Producto
    let product = document.createElement("div");
    product.className = "product";
    product.innerHTML = `
    <h3 class="productEliminar">x</h3> 
    <img src="${elemento.img}">
    `;

    //Product Info
    let productInfo = document.createElement("div");
    productInfo.className = "product-info";
    productInfo.innerHTML = `
      <p class="product-year">${elemento.año}</p>
      <p class="product-title">${elemento.nombre}</p>
      <h3 class="product-price">$ ${elemento.precio}</h3> 
      </div>
      `;
    product.appendChild(productInfo);

    //Botón Agregar al Carrito
    let comprar = document.createElement("button")
    comprar.innerText = "Agregar"
    comprar.className = "product-btn"
    productInfo.appendChild(comprar);

    //Muestro las Card en el div contenedor
    cardsContainer.append(product);

    //Oculto botón Eliminar Card si es Admin
    let btnEliminarCard = product.querySelector(".productEliminar");
    btnEliminarCard.style.display = "none";
    if (adminLogin.admin) {
      btnEliminarCard.style.display = "inline-block";
    }

    //Funcion al dar click en el botón "Eliminar Producto" de las cards
    btnEliminarCard.addEventListener("click", () => {
      eliminarCard(elemento.id)
    });

    //Funcion al dar click en el botón "Agregar" de las cards
    comprar.addEventListener("click", () => {
      carrito.push({
        id: elemento.id,
        nombre: elemento.nombre,
        año: elemento.año,
        precio: elemento.precio,
        img: elemento.img,
      });
      carritoCounter();
      saveLocalCarrito();
    });

  });
}

//Funcion guardar en el carrito de localStorage
const saveLocalCarrito = () => {
  localStorage.setItem("carrito", JSON.stringify(carrito));
}

//Funcion guardar productos en localStorage
const saveLocalmisProductos = () => {
  localStorage.setItem("misProductos", JSON.stringify(productos));
}

crearCardsHTML();