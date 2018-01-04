'use strict';

import angular from 'angular';

import template from './task.template.html';
// import modal from 'modal/modal.module';

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
  constructor(/*$uibModal*/) {
    // this.$uibModal = $uibModal;
    // this.state = {
    //   open: false,
    //   edit: false
    // }
  }

  // $onInit() {
  //   this.initialName = this.project.name;
  // }
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
  // delete() {
  //   var self = this;
  //   this.deleteModal().result.then(function() {
  //     self.project.$delete(function() {
  //       self.onDelete({ project: self.project })
  //     }, function(response) {
  //       console.log(response.data.error);
  //     });
  //     // console.log('result = true');
  //   }, function () {
  //     // console.log('result = false');
  //   });
  // }
  //
  // deleteModal() {
  //   var self = this;
  //   return this.$uibModal.open({
  //     component: 'modal',
  //     resolve: {
  //       headerText: function() { return 'Delete project' },
  //       mainText: function() { return `Do you really want to delete "${self.project.name}" ?` },
  //     }
  //   });
  // }
}

// TaskCtrl.$inject = ['$uibModal'];
