'use strict';

import angular from 'angular';

import { apiUrl } from 'app.config';
import ngResource from 'angular-resource';

commentService.$inject = ['$resource'];

export default function commentService($resource) {
  return $resource(apiUrl + '/projects/:project_id/tasks/:task_id/comments/:id',
    { project_id: '@project_id', task_id: '@task_id', id: '@id' },
    { 'update': { method: 'PATCH' } }
  );
}
