'use strict';

import angular from 'angular';

import template from './task-list.template.html';

export default function() {
  return {
    bindings: {
      projectId: '<',
      tasks: '<'
    },
    templateUrl: template,
    controller: TaskListCtrl
  }
}

class TaskListCtrl {
  constructor() {
    this.orderProp = 'created_at';
  }

  createTask(task) {
    this.tasks.push(task);
  }

  deleteTask(task) {
    var index = this.tasks.indexOf(task);
    if (index >= 0) {
      this.tasks.splice(index, 1);
    }
  }
}
