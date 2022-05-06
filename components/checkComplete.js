const checkComplete = (id) => {
    const i = document.createElement("i");
    i.classList.add('far', 'fa-check-square', 'icon');
    i.addEventListener("click", (event) => completeTask(event, id));
    return i;
}

const completeTask = (event, id) => {
    const element = event.target;
    /**Función toggle:
     * Verifica si existe o no la clase.
     * Si existe la quita y si no la coloca.
     */
    element.classList.toggle("fas");
    element.classList.toggle("completeIcon");
    element.classList.toggle("far");
    const tasks = JSON.parse(localStorage.getItem("tasks"));
    //findIndex devuelve la posición en un arreglo
    const index = tasks.findIndex(item => item.id == id);
    //Accedemos al index obtenido seguido de la llave con el nombre
    //A continuacón negamos la misma sentencia para que en caso
    //Independiente de ser true o false niega el valor.
    tasks[index]["complete"] = !tasks[index]["complete"]
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

/**Exportando función principal */
export default checkComplete;