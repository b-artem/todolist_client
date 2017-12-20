'use strict';

import angular from 'angular';
import ngTokenAuth from 'ng-token-auth';
import ngRoute from 'angular-route';
import ngCookie from 'angular-cookie';

import { apiUrl } from 'app.module';


configs.$inject = ['$authProvider', '$locationProvider', '$routeProvider'];


export default function configs($authProvider, $locationProvider, $routeProvider) {

  $authProvider.configure({
    apiUrl: apiUrl
    // validateOnPageLoad: false
  });

  $locationProvider.hashPrefix('!');

  $routeProvider.
    when('/', {
      // template: '<login></login>'
      template: '<project-list></project-list>'
    }).
    when('/sign_in', {
      template: '<login></login>'
    }).
    otherwise('/');
}
