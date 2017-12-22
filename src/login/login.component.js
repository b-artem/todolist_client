'use strict';

import angular from 'angular';
import ngTokenAuth from 'ng-token-auth';

import { apiUrl } from 'app';
import template from './login.template.html';

export default function() {
  return {
    templateUrl: template,
    controller: loginCtrl
  }
}

class loginCtrl {
  constructor($auth) {
    this.loginForm = {};
    this.$auth = $auth;
    this.errors = [];
  }

  submitLogin(loginForm) {
    var self = this;
    this.$auth.submitLogin(loginForm)
      .then(function(response) {
        console.log('Success login!');
      })
      .catch(function(response) {
        self.errors = response.errors;
        console.log('Login failed!!! ' + response.errors);
      });
  }

}

loginCtrl.$inject = ['$auth'];
