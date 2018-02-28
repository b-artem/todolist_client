'use strict';

import taskList from './task-list.module';

describe('Component taskList', function() {
  var bindings;
  var ctrl;
  var onUpdateSpy = jasmine.createSpy('onUpdate');

  beforeEach(angular.mock.module(taskList));
  beforeEach(inject(function($componentController) {
    bindings = {
      projectId: 47,
      tasks: [ { name: 'Initial task', done: false } ],
      onUpdate: onUpdateSpy
    };
    ctrl = $componentController('taskList', null, bindings);
  }));

  describe('TaskListCtrl', function() {
    it('sets bindings properly', function() {
      expect(ctrl.tasks.length).toBe(1);
      expect(ctrl.tasks).toEqual(bindings.tasks);
      expect(ctrl.projectId).toEqual(bindings.projectId);
      expect(ctrl.onUpdate).toEqual(bindings.onUpdate);
    });

    it('sets a value for the `orderProp` to `priority`', function() {
      expect(ctrl.orderProp).toBe('priority');
    });

    it('creates a task', function() {
      expect(ctrl.tasks.length).toBe(1);
      var newTask = { name: 'My second task' };
      ctrl.createTask(newTask);
      expect(ctrl.tasks.length).toBe(2);
      expect(ctrl.tasks[1]).toEqual(newTask);
    });

    it('calls `onUpdate` binding, when creating a task', function() {
      var newTask = { name: 'My second task' };
      ctrl.createTask(newTask);
      expect(onUpdateSpy).toHaveBeenCalledWith({ tasks: ctrl.tasks });
    });

    it('deletes a task', function() {
      expect(ctrl.tasks.length).toBe(1);
      var task = bindings.tasks[0];
      ctrl.deleteTask(task);
      expect(ctrl.tasks.length).toBe(0);
    });

    it('calls `onUpdate` binding, when deleting a task', function() {
      var task = bindings.tasks[0];
      ctrl.deleteTask(task);
      expect(onUpdateSpy).toHaveBeenCalledWith({ tasks: ctrl.tasks })
    });

    it('toggles `Done`', function() {
      var task = bindings.tasks[0]
      expect(ctrl.tasks[0].done).toBe(false);
      ctrl.toggleDone(task);
      expect(ctrl.tasks[0].done).toBe(true);
      ctrl.toggleDone(task);
      expect(ctrl.tasks[0].done).toBe(false);
    });

    it('calls `onUpdate` binding, when toggling Done property', function() {
      var task = bindings.tasks[0];
      ctrl.toggleDone(task);
      expect(onUpdateSpy).toHaveBeenCalledWith({ tasks: ctrl.tasks })
    });

    it('calls `onUpdate` binding, when refreshing a task', function() {
      ctrl.refreshTasks();
      expect(onUpdateSpy).toHaveBeenCalledWith({ tasks: ctrl.tasks })
    });
  });
});
