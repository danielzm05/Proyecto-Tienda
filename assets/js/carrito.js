// Funcion del Botón Agregar en Cards
const pintarCarrito = () => {

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
        <span class="delete-product">x</span> 
        `;

        modalContainer.append(carritoContent);

        let eliminar = carritoContent.querySelector(".delete-product");
        eliminar.addEventListener("click", () => {
            eliminarProducto(producto.id);
        }
        );

    });

    const total = carrito.reduce((acc, num) => acc + num.precio, 0);
    const totalCarrito = document.createElement("div");
    totalCarrito.className = "total-content";
    totalCarrito.innerHTML = `<h3 class="product-price">Total: $${total}</h3>`;
    modalContainer.append(totalCarrito);

}

//Botón Carrito Header Muestra el carrito
verCarrito.addEventListener("click", pintarCarrito);

//Función eliminar producto del carrito
const eliminarProducto = (idProducto) => {
    const foundId = carrito.find((element) => element.id === idProducto);

    carrito = carrito.filter((carritoId) => {
        return carritoId !== foundId
    });
    pintarCarrito();
    carritoCounter();
    saveLocalCarrito();

};

//Función Contador Carrito
const carritoCounter = () => {
    cantidadCarrito.style.display = "block";
    const carritoLength = carrito.length;
    localStorage.setItem("carritoLength", JSON.stringify(carritoLength));

    cantidadCarrito.innerText = JSON.parse(localStorage.getItem("carritoLength"));
};

carritoCounter();