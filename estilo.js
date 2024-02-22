// Función para manejar el contador de visitas
function manejarContadorVisitas() {
    // Verifica si ya hay una cookie con el contador
    let visitCount = obtenerCookie('visitCount');
  
    // Si no hay contador, inicializa uno a 1, de lo contrario, incrementa el contador
    if (!visitCount) {
        visitCount = 1;
    } else {
        visitCount = parseInt(visitCount) + 1;
    }
  
    // Muestra el contador en la página
    const counterElement = document.getElementById('contador');
    if (counterElement) {
        counterElement.textContent = visitCount;
    }
  
    // Almacena el contador actualizado en una cookie que expira en 30 días
    establecerCookie('visitCount', visitCount, 30);
}

// Función para obtener el valor de una cookie
function obtenerCookie(nombre) {
    const cookies = document.cookie.split(';');
    for (const cookie of cookies) {
        const [cookieNombre, cookieValor] = cookie.split('=');
        if (cookieNombre.trim() === nombre) {
            return cookieValor;
        }
    }
    return null;
}

// Función para establecer el valor de una cookie
function establecerCookie(nombre, valor, diasExpiracion) {
    const fechaExpiracion = new Date();
    fechaExpiracion.setDate(fechaExpiracion.getDate() + diasExpiracion);
    const cookieString = `${nombre}=${valor}; expires=${fechaExpiracion.toUTCString()}; path=/`;
    document.cookie = cookieString;
}

// Llama a la función de manejarContadorVisitas al cargar la página
document.addEventListener('DOMContentLoaded', manejarContadorVisitas);


// Resto de tu script existente...

//Menu lateral
var menu_visible = false;
let menu = document.getElementById("nav");
function mostrarOcultarMenu(){
    if(menu_visible==false){//si esta oculto
        menu.style.display = "block";
        menu_visible = true;
    }
    else{
        menu.style.display = "none";
        menu_visible = false;
    }
}
//oculto el menu una vez que selecciono una opción
let links = document.querySelectorAll("nav a");
for(var x = 0; x <links.length;x++){
    links[x].onclick = function(){
        menu.style.display = "none";
        menu_visible = false;
    }
}

//Creo las barritas de una barra particular identificada por su id
function crearBarra(id_barra){
    for(i=0;i<=16;i++){
        let div = document.createElement("div");
        div.className = "e";
        id_barra.appendChild(div);
    }
}

//selecciono todas las barras generales par aluego manipularlas
let html = document.getElementById("html");
crearBarra(html);
let javascript = document.getElementById("javascript");
crearBarra(javascript);
let wordpress = document.getElementById("wordpress");
crearBarra(wordpress);
let photoshop = document.getElementById("photoshop");
crearBarra(photoshop);
let php = document.getElementById("php");
crearBarra(php);
let ilustrator = document.getElementById("ilustrator");
crearBarra(ilustrator);

//Ahora voy a guardar la cantidad de barritas que se van a ir pintando por cada barar
//para eso utilizo un arreglo, cada posiciòn pertenece a un elemento
//comienzan en -1 porque no tiene ninguna pintada al iniciarse
let contadores = [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1];
//esta variable la voy a utilizar de bandera para saber si ya ejecuto la animación
let entro = false;

//función que aplica las animaciones de la habilidades
function efectoHabilidades(){
    var habilidades = document.getElementById("habilidades");
    var distancia_skills = window.innerHeight - habilidades.getBoundingClientRect().top;
    if(distancia_skills>=300 && entro==false){
        entro = true;
        const intervalHtml = setInterval(function(){
            pintarBarra(html, 17, 0, intervalHtml);
        },100);
        const intervalJavascript = setInterval(function(){
            pintarBarra(javascript, 16, 1, intervalJavascript);
        },100);
        const intervalWordpress = setInterval(function(){
            pintarBarra(wordpress, 17, 2, intervalWordpress);
        },100);
        const intervalPhotoshop = setInterval(function(){
            pintarBarra(photoshop, 16, 3, intervalPhotoshop);
        },100);
        const intervalPhp = setInterval(function(){
            pintarBarra(php, 17, 4, intervalPhp);
        },100);
        const intervalIlustrator = setInterval(function(){
            pintarBarra(ilustrator, 16, 5, intervalIlustrator);
        },100);
    }
}

//lleno una barra particular con la cantidad indicada
function pintarBarra(id_barra, cantidad, indice, interval){
    contadores[indice]++;
    x = contadores[indice];
    if(x < cantidad){
        let elementos = id_barra.getElementsByClassName("e");
        elementos[x].style.backgroundColor = "#3a7ace";
    }else{
        clearInterval(interval)
    }
}

//detecto el scrolling del mouse para aplicar la animación de la barra
window.onscroll = function(){
    efectoHabilidades();
}