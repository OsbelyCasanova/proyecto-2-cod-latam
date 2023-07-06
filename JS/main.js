//Alternando la clase active entre los elementos del menú para cambiar sus estilos
let menuItems = document.querySelectorAll('.menu-item')

menuItems.forEach(function (item) {
    item.addEventListener('click', function (e) {
        const currentItem = document.querySelector('.active');
        currentItem.classList.remove('active');
        e.target.classList.add('active');
    })
})

//Alternando clases para que se muestre un menú desplegable al precionar el simbolo hamburguesa
let menuIcon = document.getElementById('menu-icon');
let menu = document.getElementById('menu');

menuIcon.addEventListener('click', function () {
    menu.classList.toggle('desplegable');
});

//Función para quitar el menu desplegable cuando se presiona un item
function redimensionar() {
    if (window.innerWidth < 600) {
        let menuItemsDesp = document.querySelectorAll('.menu-item');
        menuItemsDesp.forEach(function (item) {
            item.addEventListener('click', function () {
                let menuDesplegable = document.querySelector('.desplegable');
                menuDesplegable.classList.remove('desplegable');
                menuDesplegable.classList.add('quitarMenu');
            })
        })
    } else {
        let menuDesplegable = document.querySelector('.quitarMenu');
        menuDesplegable.classList.remove('quitarMenu');
        menuDesplegable.classList.add('menu');
    }
};

//Para llamar a la función cada vez que se cambie el tamaño de la pantalla
window.addEventListener('resize', redimensionar);

//Llamar a la función inicialmente para comprobar el tamaño actual de la pantalla
redimensionar();


//Validar los datos ingresados al formulario

function validarFormulario(event) {
    event.preventDefault();

    let nombre = document.getElementById("nombre").value;
    let email = document.getElementById("email").value;
    let mensaje = document.getElementById("mensaje").value;

    if (nombre === "") {
        alert("Por favor, ingresa tu nombre");
        return;
    }

    if (nombre.length < 3) {
        alert("Por favor, ingresa tu nombre completo");
        return;
    }

    if (email === "") {
        alert("Por favor, ingresa tu email");
        return;
    }

    if (mensaje === "") {
        alert("Por favor, ingresa tu mensaje");
        return;
    }

    if (mensaje.length < 10) {
        alert("Por favor, detalla un poco mas tu mensaje");
        return;
    }

    document.getElementById("nombre").value = "";
    document.getElementById("email").value = "";
    document.getElementById("mensaje").value = "";

    alert("¡Tu mensaje ha sido enviado!");
}
