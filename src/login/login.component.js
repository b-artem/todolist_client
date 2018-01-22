'use strict';

import angular from 'angular';
import ngTokenAuth from 'ng-token-auth';

import { apiUrl } from 'app.config';
import template from './login.template.html';

export default function() {
  return {
    templateUrl: template,
    controller: LoginCtrl
  }
}

class LoginCtrl {
  constructor($auth, $state) {
    this.loginForm = {};
    this.$state = $state;
    this.$auth = $auth;
    this.errors = [];
  }

  submitLogin(loginForm) {
    var self = this;
    this.$auth.submitLogin(loginForm)
      .then(function(response) {
        self.$state.go('main');
      })
      .catch(function(response) {
        if (response.reason === 'unauthorized') {
          self.errors = ['Incorrect login or(and) password'];
        } else {
          self.errors = response.errors;
        }
        console.log(response);
      });
  }
}

LoginCtrl.$inject = ['$auth', '$state'];
