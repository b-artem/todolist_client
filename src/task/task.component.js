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
    // this.state = {
    //   open: false,
    //   edit: false
    // }
  }

  $onInit() {
    this.task = new this.taskService(this.task);
  }
  //
  // toggleOpen() {
  //   this.state.open = !this.state.open;
  // }
  //
  // toggleEdit() {
  //   this.state.edit = !this.state.edit;
  // }
  //
  // submitEdit() {
  //   var self = this;
  //   this.project.$update(function() {
  //     self.initialName = self.project.name;
  //     self.resetForm();
  //     console.log('new name saved');
  //   }, function(response) {
  //     self.project.name = self.initialName;
  //     console.log(response.data.error);
  //   });
  // }
  //
  // resetForm() {
  //   this.editProjectForm.$setPristine();
  //   this.state.edit = false;
  // }
  //
  // cancelEdit() {
  //   this.project.name = this.initialName;
  //   this.resetForm();
  // }
  //
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
