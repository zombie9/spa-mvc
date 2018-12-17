'use strict';

  function app(){
    var model = new Model();
    var controller = new Controller(model);
    var view = new View(controller);
  }
