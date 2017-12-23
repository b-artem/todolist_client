'use strict';

import angular from 'angular';

import template from './project.template.html';
import projectCore from 'core/project/project.module';

export default function() {
  return {
    templateUrl: template,
    controller: ProjectCtrl
  }
}

class ProjectCtrl {
  constructor(Project) {

    this.project = Project.query();

    // console.log(Projectrrr);
    // var project = Projectrrr;
    // this.project = Projectrrr.get({ id: 1 });

    // var projects = this;
    // $http.get(apiUrl + '/projects',
    //     { headers: { 'Accept': 'application/json' }})
    //   .then(function(success) {
    //     projects.projects = success.data
    //   }, function(error) {
    //     console.log('Error receiving data from API!' + error.status)
    //   });
    // this.orderProp = 'name';
  }
}

ProjectCtrl.$inject = ['Project'];
