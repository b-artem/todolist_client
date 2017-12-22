'use strict';

export const apiUrl = 'http://localhost:3000/api/v1';

import angular from 'angular';
import ngTokenAuth from 'ng-token-auth';
import ngCookie from 'angular-cookie';
import uiRouter from 'angular-ui-router';

configs.$inject = ['$authProvider', '$stateProvider'];


export default function configs($authProvider, $stateProvider) {

  var mainState = {
    name: 'main',
    url: '/',
    component: 'projectList'
    // resolve: {
    //   projects: function(ProjectsService) {
    //     ProjectsService.getAll();
    //   }
    // }
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
