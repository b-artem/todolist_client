'use strict';

import angular from 'angular';

// import template from '!ngtemplate-loader?requireAngular!html-loader!project-list/project-list.template.html';
import { apiUrl } from 'app.config';
import template from './project-list.template.html';

export default function() {
  return {
    templateUrl: template,
    controller: ProjectListCtrl
  }
}

class ProjectListCtrl {
  constructor(Project) {
    this.projects = Project.query(
      function(success) {
        console.log('All cool!');
      },
      function(error) {
        console.log('Error receiving data from API!' + error.status);
      });
    this.orderProp = 'name';
  }
}

ProjectListCtrl.$inject = ['Project'];






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
