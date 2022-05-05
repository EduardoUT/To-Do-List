/**Importando módulos */
import checkComplete from "./checkComplete.js";
import deleteIcon from "./deleteIcon.js";

/**
 * Spread Operator:
 * Hacer una copia de seguridad.
 */
export const addTask = (evento) => {
    evento.preventDefault();
    const list = document.querySelector("[data-list]");
    const input = document.querySelector("[data-form-input]");
    const calendar = document.querySelector("[data-form-date]");
    
    const value = input.value;
    const date = calendar.value;
    const dateFormat = moment(date).format("DD/MM/YYYY");

    if (value == "" || date == "") {
        //Al índicar return, el código que sigue no se ejecutará.
        return;
    }
    
    input.value = "";
    calendar.value = "";
    const taskObj = {
        value,
        dateFormat
    }
    /**
     * Uso de pipe ( || ) o evaluación de corto cirtcuito (short circuit evaluation).
     * Con eso, le decimos a la aplicación que en caso de que localStorage 
     * este con datos se comporte de una manera, si en caso contrario estuviera vacío, 
     * la constante tasks empezaría como un arreglo vacío. Las expresiones lógicas son 
     * evaluadas de izquierda a derecha, luego, si la primera declaración sea verdadera 
     * se ejecuta normalmente y la segunda declaración no es aplicada, y si el primer 
     * es evaluado como falso, ejecutamos el segundo caso.
     * true || false // true
     * false || true // true
     */
    const taskList = JSON.parse(localStorage.getItem("tasks")) || [];
          //Aquí se irán agregando value, dateFormat [{"value": "Hacer curso", "dateFormat":"05/05/2022"},{...},{...}]
          taskList.push(taskObj);
    //Ahora los valores a almacenar el localStorage son los que posea el array.
    localStorage.setItem("tasks", JSON.stringify(taskList));
    const task = createTask(taskObj);
          list.appendChild(task);
}

export const createTask = ({ value, dateFormat }) => {
    /**
     * En el navegador para mantener los console.log antes de
     * evitar que se recargue la página seleccionamos en el
     * icono de engrane la opción Persist Logs
     */
    const task = document.createElement("li");
          task.classList.add("card");

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
    const dateElement = document.createElement("span");
          dateElement.innerHTML = dateFormat;
          task.appendChild(taskContent);
          task.appendChild(dateElement);
          task.appendChild(deleteIcon());
    return task;
}