//Alerta para cuando Inicia Sesión con datos erroneos, o crea un producto  con datos erroneos
const errorAlert = () => {
    Swal.fire({
        title: 'Datos Incorrectos',
        text: 'Error en los datos ingresados. Intentelo de nuevo',
        imageUrl: './assets/img/alertas/errorAlert2.png',
        width: '30%',
        position: 'center',
        timer: 3000,
        imageWidth: 100,
        imageHeight: 100,
        imageAlt: 'Custom image',
        showConfirmButton: false,

        customClass: {
            container: '',
            popup: 'alert',
        }
    })
}

//Alerta para cuando inicia sesión correctamente
const bienvenidoLoginAlert = () => {
    Swal.fire({
        title: 'Bienvenido',
        text: 'Accediste a la vista de Administrador',
        imageUrl: './assets/img/alertas/bienvenidoLoginAlert.png',
        width: '30%',
        position: 'center',
        timer: 5000,
        imageWidth: 100,
        imageHeight: 100,
        imageAlt: 'Custom image',
        showConfirmButton: false,

        customClass: {
            container: '',
            popup: 'alert',
        }
    })
}

//Alerta para cuando cierra sesión
const cerrarSesionAlert = () => {
    Swal.fire({
        title: 'Has cerrado sesión',
        imageUrl: './assets/img/alertas/cerrarSesionAlert.png',
        width: '30%',
        position: 'center',
        timer: 5000,
        imageWidth: 100,
        imageHeight: 100,
        imageAlt: 'Custom image',
        showConfirmButton: false,

        customClass: {
            container: '',
            popup: 'alert',
        }
    })
}

//Alerta para cuando crea un producto (formulario)
const productoCreadoAlert = () => {
    Swal.fire({
        title: 'Producto Agregado',
        text: 'Se creo la card correctamente',
        imageUrl: './assets/img/alertas/productoCreadoAlert.png',
        width: '30%',
        position: 'center',
        timer: 2000,
        imageWidth: 100,
        imageHeight: 100,
        imageAlt: 'Custom image',
        showConfirmButton: false,

        customClass: {
            container: '',
            popup: 'alert',
        }
    })
}

//Funcion Eliminar Card + Alerta 
const eliminarCard = (id) => {
    Swal.fire({
        title: 'Eliminar Card',
        text: "Si oprime 'eliminar' no podrás revertirlo.",
        imageUrl: './assets/img/alertas/eliminarCard1.png',
        width: '30%',
        imageWidth: 100,
        imageHeight: 100,
        showCancelButton: true,
        confirmButtonColor: '#d81616',
        cancelButtonColor: '#333333',
        cancelButtonText: 'Cancelar',
        confirmButtonText: 'Eliminar',
    }).then((result) => {

        //Si Presiona Eliminar muestra otra alerta y luego lo elimina
        if (result.isConfirmed) {
            Swal.fire({
                title: 'Eliminado!',
                text: 'El producto se eliminó correctamente.',
                imageUrl: './assets/img/alertas/eliminarCard2.png',
                width: '30%',
                imageWidth: 100,
                imageHeight: 100,
                timer: 2000,
                showConfirmButton: false,
            })

            const buscaId = productos.find((element) => element.id == id);
            productos = productos.filter((productosId) => {
                return productosId !== buscaId;
            });
            crearCardsHTML();
            saveLocalmisProductos();
        }
    })
}


