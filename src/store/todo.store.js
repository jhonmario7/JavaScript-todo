import { Todo } from "../todo/models/todo.model";

const Filters = {

  All: 'all',
  Completed: 'completed',
  Pending: 'pending' 

};

const state = {
  todos: [
    new Todo("Piedra del alma"),
    new Todo("Piedra del infinito"),
    new Todo("Piedra de marfil"),
    new Todo("Piedra del tiempo"),
  ],

  filter: Filters.All,
};



const initStore = () => {

  concole.log(state);
  console.log(' InitStore 🥑');

}

export default {  

  initStore,

}