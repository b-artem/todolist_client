'use strict';

import angular from 'angular';

import { apiUrl } from 'app.config';
import ngResource from 'angular-resource';

projectService.$inject = ['$resource'];

// $resource(url, [paramDefaults], [actions], options);
export default function projectService($resource) {
  return $resource(apiUrl + '/projects/:id', { id: '@id' })
}
