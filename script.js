const boton_comprar = document.getElementById("boton_comprar");
const ventana = document.getElementById("ventana_comprar");

boton_comprar.addEventListener("click", function ()
{
    ventana.classList.remove("oculta");
});

const boton_cerrar = document.getElementById("boton_cerrar");

boton_cerrar.addEventListener("click", function ()
{
    ventana.classList.add("oculta");
});