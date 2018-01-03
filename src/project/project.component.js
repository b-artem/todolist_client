'use strict';

import angular from 'angular';

// import uiModal from 'angular-ui-bootstrap/src/modal';

import template from './project.template.html';
// import projectCore from 'core/project/project.module';
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
    this.openModal();
    project.$delete(function(project) {
      self.onDelete({ project: project })
    }, function(response) {
      console.log(response.data.error);
    });
  }

  setActiveProject(prjId) {
    this.activeProjectId = prjId;
  }

  openModal() {
    var modalInstance = this.$uibModal.open({
      // animation: $ctrl.animationsEnabled,
      component: 'modal'
    });

    modalInstance.result.then(function() {
      this.confirmed = true;
      console.log('true');
    }, function () {
      this.confirmed = true;
      console.log('false');
    });
  };
}

ProjectCtrl.$inject = ['$uibModal'];
