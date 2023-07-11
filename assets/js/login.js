//Elementos
const loginButton = document.getElementById("login-button");

// Si adminLogin no existe, lo crea y le establece admin: false
const adminLogin = JSON.parse(localStorage.getItem("adminLogin")) || {
    admin: false
}

//Login
loginButton.addEventListener("click", (e) => {
    e.preventDefault()

    const usuario = document.getElementById("usuario").value.trim();
    const contraseña = document.getElementById("contraseña").value

    if (usuario == "admin" && contraseña == "123456") {
        bienvenidoLoginAlert();
        window.location.href = "../tienda.html";
        adminLogin.admin = true;

    } else {
        errorAlert();
    }

    localStorage.setItem("adminLogin", JSON.stringify(adminLogin));

});

