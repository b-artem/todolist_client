'use strict';

import angular from 'angular';

// import taskCore from 'core/task/task.module';
import template from './create-task-form.template.html';

export default function() {
  return {
    templateUrl: template,
    controller: createTaskFormCtrl,
    bindings: {
      onCreate: '&'
    }
  }
}

class createTaskFormCtrl {
  constructor(/*Task*/) {
    // this.taskService = Task;
    this.taskName = '';
    this.state = { showButtons: false };
  }

  submitCreate() {
    var self = this;
    var newTask = new this.taskService({ name: this.taskName });
    newTask.$save(function(task) {
      self.resetForm();
      self.onCreate({ task: task });
    }, function(response) {
      console.log(response.data.errors.name);
    });
  }

  resetForm() {
    this.taskName = '';
    this.createTaskForm.$setPristine();
    this.state = { showButtons: false };
  }
}

// createTaskFormCtrl.$inject = ['Task'];
