/* Destino al que se aplicaran las funciones*/

const total = document.querySelector("#total");
const valor = document.querySelector("#valor");
const cantidad = document.querySelector("#cantidad");
const btnSuma = document.querySelector("#suma");
const btnResta = document.querySelector("#resta");

/* Variables y constantes a utilizar */
/* son datos internos */

const precio = 400000;
const max = 10;
const min = 1;
let stock = 10;
let cant = 1;
let tot = precio * cant;

/* Contenido que deseo mostrar */
/* usa la constante creada en primera instancia con la variable creada */

total.innerHTML = tot;
valor.innerHTML = precio;
cantidad.innerHTML = cant ;

/* Evento, accion que se ejecutara */

btnSuma.addEventListener("click", () => {
    if (cant < stock) {
        cant = cant + 1; 
        tot = precio * cant;
        cantidad.innerHTML = cant;
        total.innerHTML = tot;
    }
        
})

btnResta.addEventListener("click", () => {
    if (cant > 0) {
        cant = cant - 1; 
        tot = precio * cant;
        cantidad.innerHTML = cant;
        total.innerHTML = tot;
    }  
})


