'use strict';

import angular from 'angular';

import projectService from 'core/project/project.module';
import template from './create-project-form.template.html';

export default function() {
  return {
    templateUrl: template,
    controller: CreateProjectFormCtrl,
    bindings: {
      onCreate: '&'
    }
  }
}

class CreateProjectFormCtrl {
  constructor(Project) {
    this.projectService = Project;
    this.projectName = '';
    this.errors = [];
    this.state = { showButtons: false };
  }

  submitCreate() {
    var self = this;
    var newProject = new this.projectService({ name: this.projectName });
    newProject.$save(function(project) {
      self.resetForm();
      self.onCreate({ project: project });
    }, function(response) {
      self.errors = response.data;
    });
  }

  resetForm() {
    this.errors = [];
    this.projectName = '';
    this.createProjectForm.$setPristine();
    this.state = { showButtons: false };
  }
}

CreateProjectFormCtrl.$inject = ['Project'];
