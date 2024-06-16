
import html from './app.html?raw';


/**
 *
 * @param {String} elementId  es mi elemento como tal voy a renderizar mi aplicación.
 *
 */

export const App = (elementId) => {



  //función anonima auto-invocada, uando la función App se llama.
  (() => {
    const app = document.createElement("div");
    app.innerHTML = html;
    document.querySelector(elementId).append(app);
  })();

};

