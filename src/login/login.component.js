'use strict';

import angular from 'angular';
import ngTokenAuth from 'ng-token-auth';

import { apiUrl } from 'app.module';
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
  }

  submitLogin(loginForm) {
    this.$auth.submitLogin(loginForm)
      .then(function(success) {
        // handle success response
        console.log('Success login!');
      })
      .catch(function(error) {
        // handle error response
        console.log('Login failed!');
      });
  }
}

loginCtrl.$inject = ['$auth'];
