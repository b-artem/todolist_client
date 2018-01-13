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
    this.orderProp = 'priority';
    this.taskService = Task;
  }

  createTask(task) {
    this.tasks.push(task);
    this.onUpdate(this.tasks);
  }

  deleteTask(task) {
    var index = this.tasks.indexOf(task);
    if (index >= 0) {
      this.tasks.splice(index, 1);
      this.onUpdate(this.tasks);
    }
  }

  toggleDone(task) {
    var index = this.tasks.indexOf(task);
    if (index >= 0) {
      this.tasks[index].done = !this.tasks[index].done;
      this.onUpdate(this.tasks);
    }
  }

  refreshTasks() {
    var self = this;
    var updatedTasks = this.taskService.query({ project_id: self.projectId }, function() {
      self.tasks = updatedTasks;
      self.onUpdate(self.tasks);
    });
  }
}

TaskListCtrl.$inject = ['Task'];
