'use strict';

export const apiUrl = 'https://todolist-api-artem.herokuapp.com/api/v1';
// export const apiUrl = 'http://localhost:3000/api/v1';

import angular from 'angular';
import ngTokenAuth from 'ng-token-auth';
import ngCookie from 'angular-cookie';
import uiRouter from '@uirouter/angularjs/release/angular-ui-router';

import projectService from 'core/project/project.module';

config.$inject = ['$authProvider', '$stateProvider', '$urlRouterProvider'];

export default function config($authProvider, $stateProvider, $urlRouterProvider) {
  $urlRouterProvider.when('', '/projects');
  $urlRouterProvider.otherwise('/projects');
  $authProvider.configure({
    apiUrl: apiUrl
  });

  var mainState = {
    name: 'main',
    url: '/projects',
    component: 'projectList',
    resolve: {
      projects: ['Project', '$state', function(Project, $state) {
        return Project.query(function() {
        }, function(response) {
          if (response.status === 401) { $state.go('login'); };
        });
      }]
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

  $stateProvider.state(mainState);
  $stateProvider.state(loginState);
  $stateProvider.state(signupState);
}
