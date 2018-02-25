'use strict';

import task from './task.module';

describe('Component project', function() {
  var bindings;
  var ctrl;
  var onDeleteSpy = jasmine.createSpy('onDelete');
  var onToggleDoneSpy = jasmine.createSpy('onToggleDone');
  var onChangePrioritySpy = jasmine.createSpy('onChangePriority');

  beforeEach(angular.mock.module(task));
  beforeEach(inject(function($componentController) {
    bindings = {
      task: { name: 'Initial task' },
      onDelete: onDeleteSpy,
      onToggleDone: onToggleDoneSpy,
      onChangePriority: onChangePrioritySpy
    };
    ctrl = $componentController('task', null, bindings);
  }));


  describe('TaskCtrl', function() {
    it('sets bindings properly', function() {
      expect(ctrl.task).toEqual(bindings.task);
      expect(ctrl.onDelete).toEqual(onDeleteSpy);
      expect(ctrl.onToggleDone).toEqual(onToggleDoneSpy);
      expect(ctrl.onChangePriority).toEqual(onChangePrioritySpy);
    });

    it('sets default values properly', function() {
      expect(ctrl.errors).toEqual([]);
      expect(ctrl.state.edit).toBe(false);
      expect(ctrl.state.urgent).toBe(false);
    });

    it('sets `initialName` variable in $onInit', function() {
      ctrl.$onInit();
      expect(ctrl.initialName).toEqual(bindings.task.name);
    });

    it('calls `setUrgency()` in $onInit', function() {
      spyOn(ctrl, 'setUrgency');
      expect(ctrl.setUrgency.calls.count()).toEqual(0);
      ctrl.$onInit();
      expect(ctrl.setUrgency.calls.count()).toEqual(1);
    });

    it('toggles `state.edit`', function() {
      expect(ctrl.state.edit).toBe(false);
      ctrl.toggleEdit();
      expect(ctrl.state.edit).toBe(true);
      ctrl.toggleEdit();
      expect(ctrl.state.edit).toBe(false);
    });

    describe('resetForm()', function() {
      beforeEach(function() {
        var editTaskForm = jasmine.createSpyObj('editTaskForm', ['$setPristine']);
        ctrl.editTaskForm = editTaskForm;
      });

      it('resets the corresponding variables', function() {
        ctrl.errors = ['some error'];
        ctrl.state.edit = true;
        ctrl.resetForm();
        expect(ctrl.errors).toEqual([]);
        expect(ctrl.state.edit).toBe(false);
      });

      it('resets the form', function(){
        expect(ctrl.editTaskForm.$setPristine.calls.count()).toEqual(0);
        ctrl.resetForm();
        expect(ctrl.editTaskForm.$setPristine.calls.count()).toEqual(1);
      });
    });

    it('cancels `edit` state', function() {
      var editTaskForm = jasmine.createSpyObj('editTaskForm', ['$setPristine']);
      ctrl.editTaskForm = editTaskForm;
      ctrl.task.name = 'Edited name';
      spyOn(ctrl, 'resetForm');
      expect(ctrl.resetForm.calls.count()).toEqual(0);

      ctrl.cancelEdit();
      expect(ctrl.task.name).toEqual(bindings.task.name);
      expect(ctrl.resetForm.calls.count()).toEqual(1);
    });

    it('sets urgency to `true` when a deadline is today or earlier', function() {
      ctrl.task.deadline = '2018-01-25T10:00:23.021Z';
      ctrl.setUrgency();
      expect(ctrl.state.urgent).toBe(true);
    });

    it('sets urgency to `false` when a deadline is tomorrow or after', function() {
      ctrl.task.deadline = '2038-01-25T10:00:23.021Z';
      ctrl.setUrgency();
      expect(ctrl.state.urgent).toBe(false);
    });
  });
});
