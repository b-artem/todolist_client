'use strict';

import angular from 'angular';

import { apiUrl } from 'app.config';
import template from './project-list.template.html';

export default function() {
  return {
    bindings: {
      projects: '<'
    },
    templateUrl: template,
    controller: ProjectListCtrl
  }
}

class ProjectListCtrl {
  constructor() {
    this.orderProp = 'created_at';
  }

  createProject(project) {
    this.projects.push(project);
  }

  deleteProject(project) {
    var index = this.projects.indexOf(project);
    if (index >= 0) {
      this.projects.splice(index, 1);
    }
  }
}
