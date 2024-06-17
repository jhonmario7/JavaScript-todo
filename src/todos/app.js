
import html from './app.html?raw';
import  todoStore  from '../store/todo.store';
import { renderTodos } from './use-cases/render-todos';


const ElementIDs = {

  TodoList: '.todo-list',
  NewTodoInput: '#new-todo-input',
}

/**
 *
 * @param {String} elementId  es mi elemento como tal voy a renderizar mi aplicación.
 *
 */
export const App = (elementId) => {


  const displayTodos = () => {

    const todos = todoStore.getTodos(  todoStore.getCurrentFilter()  );
    renderTodos( ElementIDs.TodoList, todos );

  }

  //función anonima auto-invocada, cuando la función App() se llama.
  (() => {
    const app = document.createElement("div");
    app.innerHTML = html;
    document.querySelector(elementId).append(app);
    displayTodos(); //Es lo que voy a querer llamar.
  })();


  //Referencias HTML
  const newDescriptionInput = document.querySelector(ElementIDs.NewTodoInput);


  //Listeners
  newDescriptionInput.addEventListener('keyup' , ( event ) => {

    if ( event.keyCode !== 13) return;
    if (event.target.value.trim().length === 0) return;

    todoStore.addTodo(event.target.value);
    displayTodos();

    event.target.value = '';


  });



};

