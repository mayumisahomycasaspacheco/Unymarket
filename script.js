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

const boton_perfil = document.getElementById("boton_perfil");
const ventana_perfil = document.getElementById("ventana_perfil");
const boton_cerrar_perfil = document.getElementById("boton_cerrar_perfil");

boton_perfil.addEventListener("click", function (){
    ventana_perfil.classList.remove("oculta");
});

boton_cerrar_perfil.addEventListener("click", function (){
    ventana_perfil.classList.add("oculta");
});

const boton_vender = document.getElementById("boton_vender");
const ventana_vender = document.getElementById("ventana_vender");
const boton_cerrar_vender = document.getElementById("boton_cerrar_vender");

boton_vender.addEventListener("click", function (){
    ventana_vender.classList.remove("oculta");
});

boton_cerrar_vender.addEventListener("click", function (){
    ventana_vender.classList.add("oculta");
});

const boton_libros = document.getElementById("boton_libros");
const seccion_libros = document.getElementById("seccion_libros");

boton_libros.addEventListener("click", function (){
    seccion_libros.classList.remove("oculta");
});