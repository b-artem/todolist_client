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
    // this.activeProjectId = -1;
    // this.projects = Projects.query();
    // this.project = Project.get({ id: 1 });
  }

  toggle() {
    this.state.open = !this.state.open;
  }

  delete() {
    this.onDelete({ project: this.project })
  }

  setActiveProject(prjId) {
    this.activeProjectId = prjId;
  }
}

// ProjectCtrl.$inject = ['Project'];
