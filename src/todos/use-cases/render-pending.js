import todoStore, { Filters } from "../../store/todo.store";


let element; 

/**
 * 
 * @param {String} elementId Es elemento donde vamos a construir y guardar los pendientes.
 */
export const renderPending = (elementId) => {

  if (!element )
    element = document.querySelector(elementId);

  if (!element)
    throw Error(`Element ${elementId} not found `);

  element.innerHTML = todoStore.getTodos(Filters.Pending).length;


}