/**Importando módulos */
import checkComplete from "./components/checkComplete.js";
import deleteIcon from "./components/deleteIcon.js";

//Inmediately invoked function expression IIFE
/** Funciones que en cuanto se declaran se ejecutan
 * La ventaja de ellas es que no quedan al alcance
 * del usuario, por lo que tanto las funciones como
 * las propiedades no podrán ser accedidas a través
 * de la consola del navegador.
 * Sintáxis:
 * (() => {})();
 * 
 * Cuando declaramos una función de esta forma, dejamos 
 * todas las funciones y variables que contiene fuera
 * del alcance (scope) global, de esa forma mantenemos
 * más seguro nuestro código.
 * 
 * Mientras que si solo declaramos las funciones fuera,
 * permanecerán al alcance del usuario.
*/

const btn = document.querySelector("[data-form-btn]");
console.log(btn);

const createTask = (evento) => {
    /**
     * En el navegador para mantener los console.log antes de
     * evitar que se recargue la página seleccionamos en el
     * icono de engrane la opción Persist Logs
     */
    evento.preventDefault();
    const input = document.querySelector("[data-form-input]");
    const value = input.value;
    const list = document.querySelector("[data-list]");
    const task = document.createElement("li");
    task.classList.add("card");
    input.value = "";

    //Template de Strings `` backticks
    /**
     * Usar Template de String tiene las siguientes ventajas:
     * 1. Combinar etiquetas HTML con variables de JavaScript.
     * 2. Para incluír variables es con ${nombreVariable}
     */
    const taskContent = document.createElement("div");
    const titleTask = document.createElement("span");
    titleTask.classList.add("task");
    titleTask.innerText = value;
    taskContent.appendChild(checkComplete());
    taskContent.appendChild(titleTask);
    //task.innerHTML = content;
    task.appendChild(taskContent);
    task.appendChild(deleteIcon());
    list.appendChild(task);

}

/**Esta es una Arrow Function o Función anónima */
btn.addEventListener("click", createTask);