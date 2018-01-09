'use strict';

import angular from 'angular';

import template from './task.template.html';
import modal from 'modal/modal.module';

export default function() {
  return {
    bindings: {
      task: '<',
      onDelete: '&',
      onToggleDone: '&'
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
      edit: false
    }
  }

  $onInit() {
    this.task = new this.taskService(this.task);
    this.initialName = this.task.name;
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
      console.log(response.data.error);
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
}

TaskCtrl.$inject = ['Task', '$uibModal'];
