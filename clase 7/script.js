function ejemploFunciones(){
    //para ir acumulando el texto
    let salida = "";

    //defino una funcion tradicional
    function saludar(nombre){
        salida += "Hola, " + nombre + "\n";
    }

    //Funciones anonimas = flecha . arrow functions
    //no tienen nombre y son automaticas
    const sumar = (a,b) => a+b;

    //llamar a las funciones
    saludar("Marcelo");
    saludar("Eduardo");

    //llamar a la arrow function
    salida += "suma de 5+3" + sumar(5,3) + "\n"; 

    document.getElementById("resultado").textContent = salida;

    //mostrar el resultado en la cajita pre
}
function ejemploFor(){
    let salida = "numeros del 1 al 10 \n";

    //for
    //var
    //condicional
    //Incremento, salto, con peso
    for(let i = 1; i<=10; i++){
        salida += "Número: " +i + "\n";
    }

    document.getElementById("resultado").textContent = salida;
}

function ejemploWhile(){
    let salida = "";

    let contador = 1;

    while(contador <=5){
        salida += "contador vale: " + contador + "\n";
        contador++;
    }
    //mostrar el resultado en la cajita pre
    document.getElementById("resultado").textContent = salida;
}

//FOREACH == PARA CADA UNO

function ejemploForEach(){
    let salida = "";
    let frutas = ["manzana", "banana", "kiwi", "pera"];
}

function ejemploMetodos(){
    let salida = "";
    let texto = "Hola Mundo";

    salida += "texto original " + texto + "\n";

    salida += "texto en mayusculas " + texto.toUpperCase() + "\n";

    salida += "texto en minusculas " + texto.toLowerCase() + "\n";

    salida += "Cantidad de caracteres " + texto.length + "\n";

    let numeros = [5,3,8,1,4];

    salida += "lista original " + numeros + "\n";

    numeros.push(6); //agrega un elemento al final

    salida += "lista con push " + numeros + "\n";

    numeros.pop(); //elimina el ultimo elemento de la lista

    salida += "lista con pop " + numeros + "\n";

    //mostrar resultado en la caja
    document.getElementById("resultado").textContent = salida;

}