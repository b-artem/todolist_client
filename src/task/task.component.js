'use strict';

import angular from 'angular';

import template from './task.template.html';
import modal from 'modal/modal.module';

export default function() {
  return {
    bindings: {
      task: '<',
      onDelete: '&'
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
      // open: false,
      edit: false
    }
  }

  $onInit() {
    this.task = new this.taskService(this.task);
    this.initialName = this.task.name;
  }
  //
  // toggleOpen() {
  //   this.state.open = !this.state.open;
  // }
  //
  toggleEdit() {
    this.state.edit = !this.state.edit;
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
}

TaskCtrl.$inject = ['Task', '$uibModal'];
