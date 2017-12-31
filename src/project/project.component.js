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
    this.state = {
      open: false
    }
    console.log(this.activeProjectId);
    this.activeProjectId = -1;
    // this.projects = Projects.query();
    // this.project = Project.get({ id: 1 });
  }

  toggle() {
    this.state.open = !this.state.open;
    console.log('project open ' + this.project.id + ' ' + this.state.open);
  }

  setActiveProject(prjId) {
    this.activeProjectId = prjId;
  }
}

// ProjectCtrl.$inject = ['Project'];
