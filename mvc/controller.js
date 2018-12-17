'use strict';

function Controller(model) {
  var self = this;
  this.model = model;

  // event listener interface
  // can add different events
  this.handleEvent = function(event) {
    event.preventDefault();
    switch(event.type) {
      case "click":
        self.clickHandler(event.target);
        break;
      default:
      console.log(event.target);
    }
  }

  // get the model. heading function
  this.getModelHeading = function() {
    return self.model.heading;
  }

  //change the model heading on click depending
  // on what is current
  this.clickHandler = function(target) {
    if (self.model.heading === 'KING') {
      self.model.heading = 'ZOMBIE';
    }
    else {
      self.model.heading = 'KING';
    }
    target.innerText = self.getModelHeading();
  }
}
