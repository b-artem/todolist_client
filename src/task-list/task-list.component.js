'use strict';

import angular from 'angular';

import template from './task-list.template.html';
import taskService from 'core/task/task.module';

export default function() {
  return {
    bindings: {
      projectId: '<',
      tasks: '<',
      onUpdate: '&'
    },
    templateUrl: template,
    controller: TaskListCtrl
  }
}

class TaskListCtrl {
  constructor(Task) {
    this.taskService = Task;
    this.orderProp = 'priority';
  }

  createTask(task) {
    this.tasks.push(task);
    this.onUpdate({ tasks: this.tasks });
  }

  deleteTask(task) {
    var index = this.tasks.indexOf(task);
    if (index >= 0) {
      this.tasks.splice(index, 1);
      this.onUpdate({ tasks: this.tasks });
    }
  }

  toggleDone(task) {
    var index = this.tasks.indexOf(task);
    if (index >= 0) {
      this.tasks[index].done = !this.tasks[index].done;
      this.onUpdate({ tasks: this.tasks });
    }
  }

  refreshTasks() {
    var self = this;
    var updatedTasks = this.taskService.query({ project_id: self.projectId }, function() {
      self.tasks = updatedTasks;
      self.onUpdate({ tasks: self.tasks });
    });
  }
}

TaskListCtrl.$inject = ['Task'];
