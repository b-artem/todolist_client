'use strict';

import angular from 'angular';
import { apiUrl } from 'app.module';

import template from './login.template.html';

export default function() {
  return {
    templateUrl: template,
    controller: loginCtrl
  }
}

class loginCtrl {
  constructor() {
    // var projects = this;
    // $http.get(apiUrl + 'projects',
    //     { headers: { 'Accept': 'application/json' }})
    //   .then(function(success) {
    //     projects.projects = success.data
    //   }, function(error) {
    //     console.log('Error receiving data from API!' + error.status)
    //   });
    // this.orderProp = 'name';
  }
}
