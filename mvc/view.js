'use strict';

function View(controller){
  this.controller = controller;
  this.heading = document.getElementById('heading');
  this.heading.innerText = controller.getModelHeading();
  this.heading.addEventListener('click', controller);
}
