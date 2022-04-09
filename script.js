(() => {
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
        const content = `<i class="fas fa-trash-alt trashIcon icon"></i>`;
        //task.innerHTML = content;
        task.appendChild(taskContent);
        list.appendChild(task);
        console.log(content);
    }

    /**Esta es una Arrow Function o Función anónima */
    btn.addEventListener("click", createTask);

    const checkComplete = () => {
        const i = document.createElement("i");
        i.classList.add('far', 'fa-check-square', 'icon');
        i.addEventListener("click", completeTask);
        return i;
    }

    //Inmediately invoked function expression IIFE
    /** Funciones que en cuanto se declaran se ejecutan
     * La ventaja de ellas es que no quedan al alcance
     * del usuario, por lo que tanto las funciones como
     * las propiedades no podrán ser accedidas a través
     * de la consola del navegador.
     * Sintáxis:
     * (() => {})();
    */
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
})();