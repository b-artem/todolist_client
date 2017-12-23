'use strict';

import angular from 'angular';

import { apiUrl } from 'app.config';
import ngResource from 'angular-resource';

projectService.$inject = ['$resource'];

// $resource(url, [paramDefaults], [actions], options);
export default function projectService($resource) {
  return $resource(apiUrl + '/projects', {}, {});
}



// export default class ProjectService {
//   constructor($resource) {
//     this.$resource = $resource;
//   }
//
//   loadData() {
//     this.data = this.$resource(apiUrl + '/projects/:id.json', {}, { id: '@id' } );
//   }
// }

// ProjectService.$inject = [ngResource];
