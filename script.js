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
    const content = `<div>
    <i class="far fa-check-square icon"></i>
    <span class="task">${value}</span>
    </div>
    <i class="fas fa-trash-alt trashIcon icon"></i>`;
    task.innerHTML = content;
    list.appendChild(task);
    console.log(content);
}

/**Esta es una Arrow Function o Función anónima */
btn.addEventListener("click", createTask);