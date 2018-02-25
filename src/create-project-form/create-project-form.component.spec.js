'use strict';

import createProjectForm from './create-project-form.module';

describe('Component createProjectForm', function() {
  var bindings;
  var onCreateSpy = jasmine.createSpy('onCreate');
  var ctrl;
  var projectService;

  beforeEach(angular.mock.module(createProjectForm));
  beforeEach(inject(function($componentController, Project) {
    bindings = { onCreate: onCreateSpy };
    projectService = Project;
    ctrl = $componentController('createProjectForm', null, bindings);
  }));

  describe('CreateProjectFormCtrl', function() {
    it('sets bindings properly', function() {
      expect(ctrl.onCreate).toEqual(onCreateSpy);
    });

    it('sets default values properly', function() {
      expect(ctrl.projectName).toBe('');
      expect(ctrl.errors).toEqual([]);
      expect(ctrl.state).toEqual({ showButtons: false });
    });

    it(`calls project resource $save() method in 'submitCreate()'`, function() {
      spyOn(projectService.prototype, '$save');
      expect(projectService.prototype.$save.calls.count()).toEqual(0);
      ctrl.submitCreate();
      expect(projectService.prototype.$save.calls.count()).toEqual(1);
    });

    describe('resetForm()', function() {
      beforeEach(function() {
        var createProjectForm = jasmine.createSpyObj('createProjectForm', ['$setPristine']);
        ctrl.createProjectForm = createProjectForm;
      });

      it('resets the corresponding variables', function() {
        ctrl.errors = ['some error'];
        ctrl.projectName = 'a new name';
        ctrl.state.showButtons = true;
        ctrl.resetForm();
        expect(ctrl.errors).toEqual([]);
        expect(ctrl.projectName).toBe('');
        expect(ctrl.state.showButtons).toBe(false);
      });

      it('resets the form', function(){
        expect(ctrl.createProjectForm.$setPristine.calls.count()).toEqual(0);
        ctrl.resetForm();
        expect(ctrl.createProjectForm.$setPristine.calls.count()).toEqual(1);
      });
    });
  });
});
