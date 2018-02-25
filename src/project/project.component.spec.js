'use strict';

import project from './project.module';

describe('Component project', function() {
  var bindings;
  var ctrl;
  var onDeleteSpy = jasmine.createSpy('onDelete');

  beforeEach(angular.mock.module(project));
  beforeEach(inject(function($componentController) {
    bindings = {
      project: { name: 'Initial project', tasks: [] },
      onDelete: onDeleteSpy
    };
    ctrl = $componentController('project', null, bindings);
  }));

  describe('ProjectCtrl', function() {
    it('sets bindings properly', function() {
      expect(ctrl.project).toEqual(bindings.project);
      expect(ctrl.onDelete).toEqual(onDeleteSpy);
    });

    it('sets default values properly', function() {
      expect(ctrl.errors).toEqual([]);
      expect(ctrl.state.open).toBe(false);
      expect(ctrl.state.edit).toBe(false);
      expect(ctrl.state.allDone).toBe(false);
    });

    it('sets `initialName` variable in $onInit', function() {
      ctrl.$onInit();
      expect(ctrl.initialName).toEqual(bindings.project.name);
    });

    it('calls `checkAllDone` in $onInit', function() {
      spyOn(ctrl, 'checkAllDone');
      expect(ctrl.checkAllDone.calls.count()).toEqual(0);
      ctrl.$onInit();
      expect(ctrl.checkAllDone.calls.count()).toEqual(1);
      expect(ctrl.checkAllDone.calls.argsFor(0)).toEqual([bindings.project.tasks]);
    });

    it('toggles `state.open`', function() {
      expect(ctrl.state.open).toBe(false);
      ctrl.toggleOpen();
      expect(ctrl.state.open).toBe(true);
      ctrl.toggleOpen();
      expect(ctrl.state.open).toBe(false);
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
        var editProjectForm = jasmine.createSpyObj('editProjectForm', ['$setPristine']);
        ctrl.editProjectForm = editProjectForm;
      });

      it('resets the corresponding variables', function() {
        ctrl.errors = ['some error'];
        ctrl.state.edit = true;
        ctrl.resetForm();
        expect(ctrl.errors).toEqual([]);
        expect(ctrl.state.edit).toBe(false);
      });

      it('resets the form', function(){
        expect(ctrl.editProjectForm.$setPristine.calls.count()).toEqual(0);
        ctrl.resetForm();
        expect(ctrl.editProjectForm.$setPristine.calls.count()).toEqual(1);
      });
    });

    it('cancels `edit` state', function() {
      var editProjectForm = jasmine.createSpyObj('editProjectForm', ['$setPristine']);
      ctrl.editProjectForm = editProjectForm;
      ctrl.project.name = 'Edited name';
      spyOn(ctrl, 'resetForm');
      ctrl.cancelEdit();
      expect(ctrl.project.name).toEqual(bindings.project.name);
      expect(ctrl.resetForm.calls.count()).toEqual(1);
    });
  });
});
