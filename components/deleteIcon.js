const deleteIcon = () => {
    //const content = `<i class="fas fa-trash-alt trashIcon icon"></i>`;
    const i = document.createElement("i");
    i.classList.add("fas", "fa-trash-alt", "trashIcon", "icon");
    i.addEventListener("click", deleteTask);
    return i;
}

const deleteTask = (event) => {
    console.log("Eliminar Tarea");
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
    const parent = event.target.parentElement;
    parent.remove();
}

/**Exportando función principal */
export default deleteIcon;