import { displayTasks } from "./displayTasks.js";

const deleteIcon = (id) => {
    //const content = `<i class="fas fa-trash-alt trashIcon icon"></i>`;
    const i = document.createElement("i");
    i.classList.add("fas", "fa-trash-alt", "trashIcon", "icon");
    i.addEventListener("click", () => deleteTask(id));
    return i;
}

const deleteTask = (id) => {
    /**Para acceder a el evento(event), nos mostrará
     * una serie de propiedades en este caso del evento click.
     * Para acceder al elemento que queremos sea seleccionado
     * o tomado en cuenta para dicho evento, notaremos en la
     * el índice de propiedades del navegador la propiedad target,
     * la cual es el elemento html donde se aloja el evento.
     * event.target <- Nos traerá por consola al elemento HTML donde
     * opera el evento click.
     * 
     * Acceder al elemento padre.
     * Una vez tomado en cuenta el elemento target, para poder
     * llegar al elemento padre se accede:
     * event.target.parentElement 
     */
    const li = document.querySelector("[data-list]");
    const tasks = JSON.parse(localStorage.getItem("tasks"));
    const index = tasks.findIndex((item) => item.id == id);
    //splice() permite eliminar elementos de un arreglo.
    //En el primer parámetro se índica desde que posición eliminar.
    //El segundo índicamos la cantidad de elementos a eliminar.
    tasks.splice(index, 1);
    li.innerHTML = "";
    localStorage.setItem("tasks",JSON.stringify(tasks));
    displayTasks();
}

/**Exportando función principal */
export default deleteIcon;