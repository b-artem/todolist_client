'use strict';

export const apiUrl = 'http://localhost:3000/api/v1';

import angular from 'angular';
import ngTokenAuth from 'ng-token-auth';
import ngCookie from 'angular-cookie';
import uiRouter from '@uirouter/angularjs/release/angular-ui-router';

import projectCore from 'core/project/project.module';

config.$inject = ['$authProvider', '$stateProvider'];

export default function config($authProvider, $stateProvider) {

  var mainState = {
    name: 'main',
    url: '/projects',
    component: 'projectList',
    resolve: {
      projects: ['Project', function(Project) {
        return Project.query();
      }],
      activeProjectId: ['$stateParams', function($stateParams) {
        return parseInt($stateParams.projectId);
      }]
    }
  }

  var projectState = {
    name: 'main.project',
    url: '/{projectId}',
    component: 'project',
    resolve: {
      // project: ['Project', '$stateParams', function(Project, $stateParams) {
      //   return Project.get({ id: $stateParams.projectId });
      // }]

      // projectId: ['$stateParams', function($stateParams) {
      //   return parseInt($stateParams.projectId);
      // }],

      project: ['projects', '$stateParams', function(projects, $stateParams) {
        return projects.find(function(project) {
          return project.id === parseInt($stateParams.projectId);
        })
      }],

      activeProjectId: ['$stateParams', function($stateParams) {
        console.log(parseInt($stateParams.projectId));
        return parseInt($stateParams.projectId);
      }]

      // project: function(projects, $stateParams) {
      //   return projects.find(function(project) {
      //     return project.id == $stateParams.projectId;
      //   });
      // }
    }
  }

  var loginState = {
    name: 'login',
    url: '/sign_in',
    component: 'login'
  }

  var signupState = {
    name: 'signup',
    url: '/sign_up',
    component: 'signup'
  }


  $authProvider.configure({
    apiUrl: apiUrl
    // validateOnPageLoad: false
  });

  // $locationProvider.hashPrefix('!');
  // $locationProvider.html5Mode(true);

  $stateProvider.state(mainState);
  $stateProvider.state(loginState);
  $stateProvider.state(signupState);
  $stateProvider.state(projectState)

  // $routeProvider.
  //   when('/', {
  //     // template: '<login></login>'
  //     template: '<project-list></project-list>'
  //   }).
  //   when('/sign_up', {
  //     template: '<signup></signup>'
  //   }).
  //   when('/sign_in', {
  //     template: '<login></login>'
  //   }).
  //   otherwise('/');
}
