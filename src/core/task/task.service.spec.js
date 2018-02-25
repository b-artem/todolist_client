'use strict';

import task from './task.module';
import { apiUrl } from 'app.config';

describe('Service Task', function() {
  var $httpBackend;
  var Task;
  var tasksData = [
    { name: 'the first task', id: 1 },
    { name: 'the second task', id: 2 },
    { name: 'the third task', id: 3 }
  ];

  beforeEach(angular.mock.module(task));
  beforeEach(inject(function(_$httpBackend_, _Task_) {
    $httpBackend = _$httpBackend_;
    Task = _Task_;
  }));
  beforeEach(function() {
    jasmine.addCustomEqualityTester(angular.equals);
  });

  afterEach(function () {
    $httpBackend.verifyNoOutstandingExpectation();
    $httpBackend.verifyNoOutstandingRequest();
  });

  it('fetches the tasks data from `/projects/:project_id/tasks`', function() {
    $httpBackend.expectGET(apiUrl + '/projects/1/tasks').respond(tasksData);
    var tasks = Task.query({ project_id: 1 });
    expect(tasks).toEqual([]);
    $httpBackend.flush();
    expect(tasks).toEqual(tasksData);
  });

  it('creates a new task at `/projects/:project_id/tasks`', function() {
    var newTask = { name: 'a new task', project_id: 2 };
    var createdTask;
    $httpBackend.expectPOST(apiUrl + '/projects/2/tasks', newTask).respond(newTask);
    Task.save(newTask, function(createdTsk) {
      createdTask = createdTsk;
    });
    expect(createdTask).toBeUndefined();
    $httpBackend.flush();
    expect(createdTask).toEqual(newTask);
  });

  it('updates the task at `/projects/:project_id/tasks/:id`', function() {
    var taskToUpdate = { name: 'updated task', id: 3, project_id: 1 };
    var updatedTask;
    $httpBackend.expect('PATCH', apiUrl + '/projects/1/tasks/3', taskToUpdate)
      .respond(taskToUpdate);
    Task.update(taskToUpdate, function(updatedTsk) {
      updatedTask = updatedTsk;
    });
    expect(updatedTask).toBeUndefined();
    $httpBackend.flush();
    expect(updatedTask).toEqual(taskToUpdate);
  });

  it('deletes the task at `/projects/:project_id/tasks/:id`', function() {
    var taskToDelete = { name: 'Task to delete', id: 2, project_id: 3 };
    var deletedTask;
    $httpBackend.expectDELETE(apiUrl + '/projects/3/tasks/2').respond(taskToDelete);
    Task.delete({ project_id: 3, id: 2 }, function(deletedTsk) {
      deletedTask = deletedTsk;
    });
    expect(deletedTask).toBeUndefined();
    $httpBackend.flush();
    expect(deletedTask).toEqual(taskToDelete);
  });
});
