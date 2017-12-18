'use strict';

// import template from '!ngtemplate-loader?requireAngular!html-loader!project-list/project-list.template.html';
import template from './project-list.template.html';

export default function() {
  return {
    templateUrl: template,
    controller: Ctrl
  }
}

class Ctrl {
  constructor() {
    this.projects = [
      { name: '1 Task' },
      { name: '2 Task' },
      { name: 'Drive bicycle' }
    ]
    this.orderProp = 'name'
  }
}
