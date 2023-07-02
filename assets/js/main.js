/* Header */
window.addEventListener("scroll", function(){
    var header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
})

/* Constructor */

class Producto {
    constructor(nombre, año, precio) {
      this.nombre = nombre;
      this.año = año;
      this.precio = precio;
    }
}

let listaProductos = [
    {nombre: "Camiseta Titular Boca Juniors Adidas ", año:"2022", precio: "35000"},
    {nombre: "Camiseta Titular Real Madrid Adidas", año:"2023", precio: "55000"},
    {nombre: "Camiseta Inter de Miami Visitante Adidas", año:"2023", precio: "50000"},
    {nombre: "Camiseta Argentina Campeón del Mundo Titular Adidas", año:"2022", precio: "50000"},
]
  
