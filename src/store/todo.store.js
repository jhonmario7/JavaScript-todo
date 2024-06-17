import { Todo } from "../todos/models/todo.model";

const Filters = {
  All: "all",
  Completed: "Completed",
  Pending: "Pending",
};

const state = {
  todos: [
    new Todo("Piedra del alma"),
    new Todo("Piedra del Infinito"),
    new Todo("Piedra del tiempo"),
    new Todo("Piedra del realidad"),
  ],

  filter: Filters.All,
};

const InitStore = () => {
  console.log(state);
  console.log("InitStore 🥑");
};

const loadStore = () => {
  throw new Error("Not Implemented");
};

const getTodos = (filter = Filters.All) => {
  switch (filter) {
    case Filters.All:
      return [...state.todos];

    case Filters.Completed:
      return state.todos.filter((todo) => todo.done);

    case Filters.Pending:
      return state.todos.filter((todo) => !todo.done);

    default:
      throw new Error(`Option ${filter} is not valid.`);
  }
};

/**
 *
 * @param {String} description
 */
const addTodo = (description) => {
  if (!description) throw new Error("Description is required");
  state.todos.push(new Todo(description));
};

/**
 *
 * @param {String} todoId identificador del todo.
 */
const toggleTodo = (todoId) => {
  state.todos = state.todos.map((todo) => {
    if (todo.id === todoId) {
      todo.done = !todo.done;
    }
    return todo;
  });
};

/**
 * @param {String} deleteTodo es quien va elimiar el Id del todo. (actualización)
 */
const deleteTodo = (todoId) => {
  state.todos = state.todos.filter((todo) => todo.id !== todo.id);
};

/**
 * @param {String} delateComplete Borrar todos los todos que tengo.
 */
const delateComplete = () => {
  state.todos = state.todos.filter((todo) => todo.done);
};

/**
 * @param {Filters} newFilter Saber cual es el filtro seleccionado.
 */
const setFilter = (newFilter = Filters.All) => {
  state.filter = newFilter;
};

/**
 * @param {String} getCurrentFilter funcion que nos permite que no malipulen el State.
 */
const getCurrentFilter = () => {
  return state.filter;
};

//funciones para hacer la manipulación de nuestro Storage:
export default {
  addTodo,
  delateComplete,
  deleteTodo,
  getCurrentFilter,
  
  getTodos,
  InitStore,
  loadStore,
  setFilter,
  toggleTodo,
};
