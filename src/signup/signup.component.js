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
  constructor($auth, Flash, $state) {
    this.signupForm = {};
    this.$auth = $auth;
    this.flash = Flash;
    this.$state = $state;
    this.errors = [];
  }

  submitSignup(signupForm) {
    var self = this;
    this.$auth.submitRegistration(signupForm)
      .then(function() {
        self.errors = [];
        self.showSuccessMessage();
        setTimeout(function() { self.$state.go('main') }, 2000);
      })
      .catch(function(response) {
        self.errors = response.data.errors.full_messages;
      });
  }

  showSuccessMessage() {
    var message = "<strong>Well done!</strong> You have successfully registered.";
    this.flash.create('success', message, 3000, { class: 'pb-10 mb-20' });
  }
}

SignupCtrl.$inject = ['$auth', 'Flash', '$state'];
