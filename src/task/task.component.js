'use strict';

import angular from 'angular';

import template from './task.template.html';
import { formatDate, formatTime } from 'utils/datetime';

export default function() {
  return {
    bindings: {
      task: '<',
      onDelete: '&',
      onToggleDone: '&',
      onChangePriority: '&'
    },
    templateUrl: template,
    controller: TaskCtrl
  }
}

class TaskCtrl {
  constructor(Task, $uibModal) {
    this.taskService = Task;
    this.$uibModal = $uibModal;
    this.state = {
      edit: false,
      urgent: false
    }
  }

  $onInit() {
    this.task = new this.taskService(this.task);
    this.initialName = this.task.name;
    this.setUrgency();
  }

  toggleEdit() {
    this.state.edit = !this.state.edit;
  }

  toggleDone() {
    var self = this;
    this.task.$update(function() {
      self.onToggleDone();
    }, function(response) {
      console.log(response.data.error);
    })
  }

  submitEdit() {
    var self = this;
    this.task.$update(function() {
      self.initialName = self.task.name;
      self.resetForm();
    }, function(response) {
      self.task.name = self.initialName;
      console.log(response.data);
    });
  }

  resetForm() {
    this.editTaskForm.$setPristine();
    this.state.edit = false;
  }

  cancelEdit() {
    this.task.name = this.initialName;
    this.resetForm();
  }

  delete() {
    var self = this;
    this.deleteModal().result.then(function() {
      self.task.$delete(function() {
        self.onDelete(self.task);
      }, function(response) {
        console.log(response.data.error);
      });
    }, function () {
    });
  }

  deleteModal() {
    var self = this;
    return this.$uibModal.open({
      component: 'modal',
      resolve: {
        headerText: function() { return 'Delete task' },
        mainText: function() { return `Do you really want to delete "${self.task.name}" task?` },
      }
    });
  }

  setDeadline() {
    var self = this;
    this.deadlineModal(this.task.deadline).result.then(function(newDeadline) {
      self.task.deadline = newDeadline;
      self.task.$update(function() {
        self.setUrgency();
      }, function(response) {
        console.log(response.data.error);
      });
      }, function() {
    });
  }

  deadlineModal(deadline) {
    return this.$uibModal.open({
      component: 'deadlineModal',
      resolve: {
        headerText: function() { return 'Deadline' },
        deadline: function() { return deadline }
      }
    });
  }

  setUrgency() {
    if (this.task.deadline) {
      var deadline = Date.parse(this.task.deadline);
      var today = new Date();
      var tomorrow = (new Date(today.setDate(today.getDate() + 1))).setHours(0,0,1);
      if (deadline > tomorrow) return this.state.urgent = false;
      this.state.urgent = true;
    }
  }

  getDate() {
    return formatDate(this.task.deadline);
  }

  getTime() {
    return formatTime(this.task.deadline);
  }

  changePriority(direction) {
    self = this;
    if (direction != 'up' && direction != 'down') return false;
    this.task.change_priority = direction;
    this.task.$update(function() {
      self.onChangePriority();
    }, function(response) {
      console.log(response.data);
    });
  }
}

TaskCtrl.$inject = ['Task', '$uibModal'];
