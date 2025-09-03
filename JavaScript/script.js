//comentario 1 linea
/*comentario
multi linea*/

//Funciones

function mostrarMensajes(){
    alert("Bienvenido a JavaScript");
    console.log("Este mensajito esta oculto, solo por consola shhh")
}

//variables y tipos de datos
//var = obsoleta, no recomendada
//let = opcion para variables si recomendada
let nombre = "Eric"; //string texto
let edad = 20 //number int
let peso = 80.5 //decimal
let activo = false; //Booleano
let direccion; //Undefined
let telefono = null //null

let tipos = `
    <strong>Nombre: ${nombre} {${typeof nombre}}</strong><br>
    <strong>Edad: ${edad} {${typeof edad}}</strong><br>
    <strong>Peso: ${peso} {${typeof peso}}</strong><br>
    <strong>Activo: ${activo} {${typeof activo}}</strong><br>
    <strong>Direccion: ${direccion} {${typeof direccion}}</strong><br>
    <strong>Telefono: ${telefono} {${typeof telefono}}</strong><br>
`
//DOM - Document Object Model
document.getElementById("tiposDatos").innerHTML = tipos;

//Operaciones basicas
let a = 10;
let b = 3;
let suma = a + b;
let resta = a - b;
let multiplicacion = a * b;
let division = a / b;
let modulo = a % b;
let operaciones = `
    <i class="fa-solid fa-plus"></i> Suma: ${suma} <br>
    <i class="fa-solid fa-minus"></i> Resta: ${resta} <br>
    <i class="fa-solid fa-xmark"></i> Multiplicacion: ${multiplicacion} <br>
    <i class="fa-solid fa-divide"></i> Division: ${division} <br>
    <i class="fa-solid fa-percentage"></i> Modulo: ${modulo} <br>

`
document.getElementById("operaciones").innerHTML = operaciones;

//Formulario
function enviarFormulario(){
    // Prevenir el envío por defecto del formulario (importante para evitar recargas)
    event.preventDefault(); // Añade esto para detener el comportamiento por defecto del botón de submit

    const nombreInput = document.getElementById("nombre"); // Obtener el elemento input
    const correoInput = document.getElementById("correo"); // Obtener el elemento input
    const mensajeResultadoDiv = document.getElementById("mensajeResultado"); // Obtener el elemento div

    const nombre = nombreInput.value.trim();
    const correo = correoInput.value.trim();

    // Reiniciar las clases del div de mensaje para quitar estados anteriores
    mensajeResultadoDiv.className = "alert mt-3"; // Resetear clases

    // Validar campos vacíos
    if(!nombre || !correo){
        mensajeResultadoDiv.classList.add("alert-danger", "d-block");
        mensajeResultadoDiv.innerHTML = `<i class="fa-solid fa-triangle-exclamation"></i> Debes completar todos los campos.`;
        return;
    }

    // Validar formato de correo
    if(correo.includes("@") === false || correo.includes(".") === false){
        mensajeResultadoDiv.classList.add("alert-warning", "d-block");
        mensajeResultadoDiv.innerHTML = `<i class="fa-solid fa-triangle-exclamation"></i> Debes ingresar un correo valido. Debe incluir "@" y "."`;
        return;
    }

    // Si todo es válido
    mensajeResultadoDiv.classList.add("alert-success", "d-block");
    mensajeResultadoDiv.innerHTML = `<i class="fa-solid fa-circle-check"></i> ¡El correo es válido, <strong>${nombre}</strong>! <br> Te llamaremos pronto a ${correo}.`;
}
