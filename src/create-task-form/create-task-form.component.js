'use strict';

import angular from 'angular';

import taskService from 'core/task/task.module';
import template from './create-task-form.template.html';

export default function() {
  return {
    templateUrl: template,
    controller: CreateTaskFormCtrl,
    bindings: {
      projectId: '<',
      onCreate: '&'
    }
  }
}

class CreateTaskFormCtrl {
  constructor(Task) {
    this.taskService = Task;
    this.taskName = '';
    this.errors = [];
    this.state = { showButtons: false };
  }

  submitCreate() {
    var self = this;
    var newTask = new this.taskService({ project_id: this.projectId, name: this.taskName });
    newTask.$save(function(task) {
      self.resetForm();
      self.onCreate({ task: task });
    }, function(response) {
      self.errors = response.data;
    });
  }

  resetForm() {
    this.errors = [];
    this.taskName = '';
    this.createTaskForm.$setPristine();
    this.state = { showButtons: false };
  }
}

CreateTaskFormCtrl.$inject = ['Task'];
