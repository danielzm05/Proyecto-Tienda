// Efecto Header
window.addEventListener("scroll", function () {
    var header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
});

// ELementos
let btnLoginHeader = document.getElementById("btn-nav-login");

// Vista Admin
const adminLogin = JSON.parse(localStorage.getItem("adminLogin")) || {
    admin: false,
};

if (adminLogin.admin) {

    btnLoginHeader.innerText = "Cerrar Sesión";

    btnLoginHeader.addEventListener("click", () => {
        adminLogin.admin = false;
        cerrarSesionAlert();
        localStorage.setItem("adminLogin", JSON.stringify(adminLogin));
    });

} else {

};
