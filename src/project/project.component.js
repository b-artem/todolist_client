'use strict';

import angular from 'angular';

import template from './project.template.html';
// import projectCore from 'core/project/project.module';

export default function() {
  return {
    bindings: { project: '<' },
    templateUrl: template,
    controller: ProjectCtrl
  }
}

class ProjectCtrl {
  constructor(/*Project*/) {
    // this.projects = Projects.query();
    // this.project = Project.get({ id: 1 });
  }
}

// ProjectCtrl.$inject = ['Project'];
