const checkComplete = () => {
    const i = document.createElement("i");
    i.classList.add('far', 'fa-check-square', 'icon');
    i.addEventListener("click", completeTask);
    return i;
}

const completeTask = (event) => {
    const element = event.target;
    /**Función toggle:
     * Verifica si existe o no la clase.
     * Si existe la quita y si no la coloca.
     */
    element.classList.toggle("fas");
    element.classList.toggle("completeIcon");
    element.classList.toggle("far");
}

/**Exportando función principal */
export default checkComplete;