'use strict';

import angular from 'angular';
import ngTokenAuth from 'ng-token-auth';

import { apiUrl } from 'app.module';
import template from './signup.template.html';

export default function() {
  return {
    templateUrl: template,
    controller: signupCtrl
  }
}

class signupCtrl {
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

signupCtrl.$inject = ['$auth'];
