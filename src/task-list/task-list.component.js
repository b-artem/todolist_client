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
    console.log(this.taskService);
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

  toggleDone(task) {
    var index = this.tasks.indexOf(task);
    if (index >= 0) {
      this.tasks[index].done = !this.tasks[index].done;
      this.onUpdate(this.tasks);
    }
  }

  refreshTasks() {
    var self = this;
    var project_id = this.tasks[0].project_id;
    var updatedTasks = this.taskService.query({ project_id: project_id }, function() {
      self.tasks = updatedTasks;
    });
    console.log(self.tasks);
  }

  priorityUp(priority) {
    this.refreshTasks();
    // var taskUp = this.tasks.find(function(task) {
    //   return task.priority === priority;
    // });
    // var taskDown = this.tasks.find(function(task) {
    //   return task.priority === priority - 1;
    // })
    // taskUp.priority--;
    // taskDown.priority++;
  }

  priorityDown(priority) {
    var taskDown = this.tasks.find(function(task) {
      return task.priority === priority;
    });
    var taskUp = this.tasks.find(function(task) {
      return task.priority === priority +1;
    })
    taskUp.priority--;
    taskDown.priority++;
  }
}

TaskListCtrl.$inject = ['Task'];
