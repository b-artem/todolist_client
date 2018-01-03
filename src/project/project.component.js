'use strict';

import angular from 'angular';

import template from './project.template.html';
import modal from 'modal/modal.module';

export default function() {
  return {
    bindings: {
      project: '<',
      onDelete: '&'
    },
    templateUrl: template,
    controller: ProjectCtrl
  }
}

class ProjectCtrl {
  constructor($uibModal) {
    this.$uibModal = $uibModal;
    this.state = {
      open: false
    }
  }

  toggle() {
    this.state.open = !this.state.open;
  }

  delete(project) {
    var self = this;
    this.deleteModal().result.then(function() {
      project.$delete(function(project) {
        self.onDelete({ project: project })
      }, function(response) {
        console.log(response.data.error);
      });
      // console.log('result = true');
    }, function () {
      // console.log('result = false');
    });
  }

  deleteModal() {
    var self = this;
    return this.$uibModal.open({
      component: 'modal',
      resolve: {
        headerText: function() { return 'Delete project' },
        mainText: function() { return `Do you really want to delete "${self.project.name}" ?` },
      }
    });
  }
}

ProjectCtrl.$inject = ['$uibModal'];
