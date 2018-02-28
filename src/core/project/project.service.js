'use strict';

import angular from 'angular';

import { apiUrl } from 'app.config';
import ngResource from 'angular-resource';

projectService.$inject = ['$resource'];

export default function projectService($resource) {
  return $resource(apiUrl + '/projects/:id',
    { id: '@id' },
    { 'update': { method: 'PATCH' } }
  );
}
