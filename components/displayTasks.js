import { orderDates, uniqueDates } from "../services/date.js";
import { createTask } from "./addTask.js";
import dateElement from "./dateElement.js";

export const displayTasks = () => {
    const list = document.querySelector("[data-list]");
    const taskList = JSON.parse(localStorage.getItem("tasks")) || [];
    const dates = uniqueDates(taskList);
    orderDates(dates);
    dates.forEach((date) => {
        const dateMoment = moment(date, "DD/MM/YYYY");
        list.appendChild(dateElement(date));
        taskList.forEach((task) => {
            const dateTask = moment(task.dateFormat, "DD/MM/YYYY");
            /**
             * Con la función moment, tomamos 2 fechas, la primera de los
             * encabezados con la fecha, y la segunda con la fecha 
             * de cada tarea, con la función diff comprobamos que la
             * diferencia sea 0 y cree cada tarea en la fecha que
             * corresponda, de lo contrario no se crea.
             */
            const diff = dateMoment.diff(dateTask);
            if (diff == 0) {
                list.appendChild(createTask(task));
            }
            /**
             * Tips:
             * Ordenar fechas de menor a mayor:
             * dates.sort((a, b) => {
             *      const firstDate = moment(a, 'DD/MM/YYYY')
             *      const secondDate = moment(b, 'DD/MM/YYYY')
             *      return firstDate - secondDate
             * })}
             */
        });
    });
}
