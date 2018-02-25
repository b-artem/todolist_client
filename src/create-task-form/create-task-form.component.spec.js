'use strict';

import createTaskForm from './create-task-form.module';

describe('Component createTaskForm', function() {
  var bindings;
  var onCreateSpy = jasmine.createSpy('onCreate');
  var ctrl;
  var taskService;

  beforeEach(angular.mock.module(createTaskForm));
  beforeEach(inject(function($componentController, Task) {
    bindings = {
      projectId: 47,
      onCreate: onCreateSpy
    };
    taskService = Task;
    ctrl = $componentController('createTaskForm', null, bindings);
  }));

  describe('CreateTaskFormCtrl', function() {
    it('sets bindings properly', function() {
      expect(ctrl.projectId).toEqual(47);
      expect(ctrl.onCreate).toEqual(onCreateSpy);
    });

    it('sets default values properly', function() {
      expect(ctrl.taskName).toBe('');
      expect(ctrl.errors).toEqual([]);
      expect(ctrl.state).toEqual({ showButtons: false });
    });

    it(`calls task resource $save() method in 'submitCreate()'`, function() {
      spyOn(taskService.prototype, '$save');
      expect(taskService.prototype.$save.calls.count()).toEqual(0);
      ctrl.submitCreate();
      expect(taskService.prototype.$save.calls.count()).toEqual(1);
    });

    describe('resetForm()', function() {
      beforeEach(function() {
        var createTaskForm = jasmine.createSpyObj('createTaskForm', ['$setPristine']);
        ctrl.createTaskForm = createTaskForm;
      });

      it('resets the corresponding variables', function() {
        ctrl.errors = ['some error'];
        ctrl.taskName = 'a new name';
        ctrl.state.showButtons = true;
        ctrl.resetForm();
        expect(ctrl.errors).toEqual([]);
        expect(ctrl.taskName).toBe('');
        expect(ctrl.state.showButtons).toBe(false);
      });

      it('resets the form', function(){
        expect(ctrl.createTaskForm.$setPristine.calls.count()).toEqual(0);
        ctrl.resetForm();
        expect(ctrl.createTaskForm.$setPristine.calls.count()).toEqual(1);
      });
    });
  });
});
