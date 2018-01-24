'use strict';

import angular from 'angular';
import ngTokenAuth from 'ng-token-auth';

import { apiUrl } from 'app.config';
import template from './logout.template.html';

export default function() {
  return {
    templateUrl: template,
    controller: LogoutCtrl
  }
}

class LogoutCtrl {
  constructor($auth, $state) {
    this.$auth = $auth;
    this.$state = $state;
  }

  logout() {
    var self = this;
    this.$auth.signOut()
      .then(function(response) {
        self.$state.go('login');
      })
      .catch(function(response) {
        console.log(response.data.errors);
      });
  }

  visible() {
    return this.$state.current.name === 'main';
  }
}

LogoutCtrl.$inject = ['$auth', '$state'];
