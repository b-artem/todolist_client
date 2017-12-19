'use strict';

import angular from 'angular';
import { apiUrl } from 'app.module';

// import template from '!ngtemplate-loader?requireAngular!html-loader!project-list/project-list.template.html';
import template from './project-list.template.html';

export default function() {
  return {
    templateUrl: template,
    controller: projectListCtrl
  }
}

class projectListCtrl {
  constructor($http) {
    var projects = this;
    $http.get(apiUrl + 'projects',
        { headers: { 'Accept': 'application/json' }})
      .then(function(success) {
        projects.projects = success.data
      }, function(error) {
        console.log('Error receiving data from API!' + error.status)
      });
    this.orderProp = 'name';
  }
}

projectListCtrl.$inject = ['$http'];
