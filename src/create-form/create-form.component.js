'use strict';

import angular from 'angular';

import projectCore from 'core/project/project.module';
import template from './create-form.template.html';

export default function() {
  return {
    templateUrl: template,
    controller: CreateFormCtrl,
    bindings: {
      onCreate: '&'
    }
  }
}

class CreateFormCtrl {
  constructor(Project) {
    this.projectService = Project;
    this.projectName = '';
    this.state = { showButtons: false };
  }

  submitCreate() {
    var self = this;
    var newProject = new this.projectService({ name: this.projectName });
    newProject.$save(function(project) {
      self.resetForm();
      self.onCreate({ project: project });
      // console.log('New project name is: ' + project.name);
    }, function(response) {
      console.log(response.data.errors.name);
    });
  }

  resetForm() {
    this.projectName = '';
    this.createForm.$setPristine();
    this.state = { showButtons: false };
  }
}

CreateFormCtrl.$inject = ['Project'];
