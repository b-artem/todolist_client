'use strict';

import angular from 'angular';
import ngTokenAuth from 'ng-token-auth';

import { apiUrl } from 'app.config';
import template from './signup.template.html';

export default function() {
  return {
    templateUrl: template,
    controller: SignupCtrl
  }
}

class SignupCtrl {
  constructor($auth) {
    this.signupForm = {};
    this.$auth = $auth;
  }

  submitSignup(signupForm) {
    this.$auth.submitRegistration(signupForm)
      .then(function(success) {
        console.log('Success sign up!');
      })
      .catch(function(error) {
        console.log('Sign up failed!');
      });
  }
}

SignupCtrl.$inject = ['$auth'];
