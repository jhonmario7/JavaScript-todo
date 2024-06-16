

export class Todo { 

  /**
   * 
   * @param {String} description esto crea una nueva instancia. 
   */

  constructor ( description ){
    
    this.id = 1;
    this.description = description;
    this.done = false;
    this.createAt = new Date();

  }  
}

