'use strict';

// var templateUrl = require('!ngtemplate-loader?requireAngular!html-loader!project-list/project-list.template.html');
import angular from 'angular';

import projectListComponent from './project-list.component';
import createFormComponent from 'create-form/create-form.module';

export default angular.module('todoList.projectList', [createFormComponent]).
  component('projectList', projectListComponent()).
  name;


// angular.module('projectList', []).
//   component('projectList', {
//     templateUrl: templateUrl,
//     controller: [
//       function ProjectListController() {
//         this.projects = projs;
//         this.orderProp = 'name';
//
//         var projs = [
//           { name: '1 Task' },
//           { name: '2 Task' },
//           { name: 'Drive bicycle' }
//         ]
//         return this;
//       }
//     ]
//   })
