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
     console.log(input.value);
}

/**Esta es una Arrow Function o Función anónima */
btn.addEventListener("click", createTask);