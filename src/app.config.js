'use strict';

import angular from 'angular';
// import ngTokenAuth from 'ng-token-auth';
import ngRoute from 'angular-route';
// import ngCookie from 'angular-cookie';


configs.$inject = ['$locationProvider', '$routeProvider'];


export default function configs( $locationProvider, $routeProvider) {

  // $authProvider.configure({
  //   apiUrl: 'http://api.example.com'
  // });

  $locationProvider.hashPrefix('!');

  $routeProvider.
    when('/', {
      template: '<login></login>'
      // template: '<project-list></project-list>'
    }).
    when('/sign_in', {
      template: '<login></login>'
    }).
    otherwise('/');
}
