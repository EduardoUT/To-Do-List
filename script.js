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
import { addTask } from "./components/addTask.js";
import { readTasks } from "./components/readTasks.js";

const btn = document.querySelector("[data-form-btn]");

/**Esta es una Arrow Function o Función anónima */
btn.addEventListener("click", addTask);
readTasks();