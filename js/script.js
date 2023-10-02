function Princ(){
    let valor1 = parseInt(document.getElementById("digito1").value)
    let valor2 = parseInt(document.getElementById("digito2").value)
    let salida = "";
    
    if (valor1 % 2 == 0)
    {
        valor1++;
    }
    for ( let i = valor1; i <= valor2; i += 2){
        salida += `${i}\n`;
    }

    document.getElementById("txtsalida").innerHTML = salida;
}

function Mostrar(){
    let palabra = document.getElementById("digito1").value
    let salida = palabra.split("").reverse().join("")

    document.getElementById("txtsalida").value = salida;

}

function fibo() {
    document.getElementById("metodo-form").addEventListener("submit", function(event) {
        event.preventDefault(); // Evita que el formulario se envíe y recargue la página
    
        var x = 0;
        var y = 1;
        var z;
        var resultado = "";
        for (i = 0; i < 15; i++) {
            z = x + y;
            resultado += ("[" + z + "]");
            y = x;
            x = z;
        }
         
        document.getElementById("txtsalida").innerHTML = "El resultado es: " + resultado;
    });
}

function Ppolindromo(){
    document.getElementById("Palindromo-form").addEventListener("submit",function(event){
    event.preventDefault();
    let palabra = document.getElementById("palabra").value.toLowerCase();
    let verificador = palabra.split("").reverse().join("");

    if(verificador == palabra)
    {
        document.getElementById("txtsalida").innerHTML = `Es una palabra palindromo`;
    }
    else
    {
        document.getElementById("txtsalida").innerHTML = `No es una palabra palindromo`;
    }   
    });
   
}

function Buscar() {
    let valor1 = parseInt(document.getElementById("mes").value);
    let valor2 = parseInt(document.getElementById("año").value);

    // Crear un objeto Date para representar el primer día del mes especificado
    let primerDia = new Date(valor2, valor1 - 1, 1);

    // Crear un objeto Date para representar el último día del mes
    let ultimoDia = new Date(valor2, valor1, 0);

    // Obtener el elemento HTML donde mostrarás las fechas
    let resultado = document.getElementById("texsalida");

    // Limpiar cualquier contenido anterior
    resultado.value = "";

    // Mostrar el primer día en el elemento HTML
    resultado.value += "Primer día del mes: " + primerDia.toDateString() + "\n";

    // Mostrar el último día en el elemento HTML
    resultado.value += "Último día del mes: " + ultimoDia.toDateString();
}

function Mostrarr(){
    let eleccion = document.getElementById("tp").value
    let eleccion2 = document.getElementById("tp2").value
    let valor1 = parseInt(document.getElementById("ataque").value)
    let valor2 = parseInt(document.getElementById("defensa").value)
    let eficacia = 0.5;

    if(eleccion == "Fuego" && eleccion2 == "Planta")
    {
        eficacia = 2;
    }
    else if( eleccion == "Agua" && eleccion2 == "Fuego")
    {
        eficacia = 2;
    }
    else if( eleccion == "Electro" && eleccion2 == "Agua")
    {
        eficacia = 2;
    }
    else if (eleccion == "Fuego" && eleccion2 == "Electro" || eleccion1 == "Electro" && eleccion2 == "Fuego")
    {
        eficacia = 1;
    }
    else if (eleccion == "Planta" && eleccion2 == "Fuego") {
        eficacia = 1;
    }
    else {
        eficacia = 0.5;
    }

    var daño = 50*(valor1/valor2)*eficacia;

    document.getElementById("txtsalida").value=daño.toFixed(2)
}

//Galeria//
function changeImg(id) {
    let visor = document.getElementById("visorid");
    visor.setAttribute("src", `img/img${id}.jpg`);
}

/*Coche en movimiento*/
function MoverCoche() {
    fondo1 = document.getElementById("fondouno");
    fondo2 = document.getElementById("fondodos");
    paramover = setInterval(mover, 50);
    setInterval(repetir, 2250);
}
desplazar = 0;
function mover() {
    desplazar -= 10;
    desplazar2 = desplazar + 450;
    position1 = desplazar + "px";
    position2 = desplazar2 + "px";
    fondo1.style.left = position1;
    fondo2.style.left = position2;
}
function repetir() {
    fondo1.style.left = "0px";
    fondo2.style.left = "450px";
    desplazar = 0;
}

