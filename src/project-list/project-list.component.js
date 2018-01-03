'use strict';

import angular from 'angular';
// import uiRouter from '@uirouter/angularjs/release/angular-ui-router';

// import template from '!ngtemplate-loader?requireAngular!html-loader!project-list/project-list.template.html';
// import projectCore from 'core/project/project.module';
import { apiUrl } from 'app.config';
import template from './project-list.template.html';

export default function() {
  return {
    bindings: { projects: '<', activeProjectId: '<' },
    templateUrl: template,
    controller: ProjectListCtrl
  }
}

class ProjectListCtrl {
  constructor() {
    // this.projects = Project.query(
    //   function(success) {
    //     console.log('All cool!');
    //   },
    //   function(error) {
    //     console.log('Error receiving data from API!' + error.status);
    //   });
    // this.orderProp = 'name';
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

  // setActiveProject(prjId) {
  //   // .go('main.project', { projectId: prjId } );
  //   this.activeProjectId = prjId;
  // }
}

// ProjectListCtrl.$inject = ['$stateProvider'];
// ProjectListCtrl.$inject = ['Project'];






// class ProjectListCtrl {
//   constructor($http) {
//     var projects = this;
//     $http.get(apiUrl + '/projects',
//         { headers: { 'Accept': 'application/json' }})
//       .then(function(success) {
//         projects.projects = success.data
//       }, function(error) {
//         console.log('Error receiving data from API!' + error.status)
//       });
//     this.orderProp = 'name';
//   }
// }
//
// ProjectListCtrl.$inject = ['$http'];
