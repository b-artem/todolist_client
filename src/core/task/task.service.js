'use strict';

import angular from 'angular';

import { apiUrl } from 'app.config';
import ngResource from 'angular-resource';

taskService.$inject = ['$resource'];

export default function taskService($resource) {
  return $resource(apiUrl + '/projects/:project_id/tasks/:id',
    { project_id: '@project_id', id: '@id' },
    { 'update': { method: 'PATCH' } }
  );
}
