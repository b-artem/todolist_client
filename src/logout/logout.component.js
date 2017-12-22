'use strict';

import angular from 'angular';
import ngTokenAuth from 'ng-token-auth';

import { apiUrl } from 'app';
import template from './logout.template.html';

export default function() {
  return {
    templateUrl: template,
    controller: logoutCtrl
  }
}

class logoutCtrl {
  constructor($auth) {
    this.$auth = $auth;
  }

  logout() {
    this.$auth.signOut()
      .then(function(success) {
        console.log('Success logout!');
      })
      .catch(function(error) {
        console.log('Logout failed!');
      });
  }
}

logoutCtrl.$inject = ['$auth'];
