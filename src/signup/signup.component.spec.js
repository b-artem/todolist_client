'use strict';

import signup from './signup.module';

describe('Component signup', function() {
  var ctrl;
  var $auth;

  beforeEach(angular.mock.module(signup));
  beforeEach(inject(function($componentController, _$auth_) {
    $auth = _$auth_;
    ctrl = $componentController('signup', null, null);
  }));

  describe('SignupCtrl', function() {
    it('sets default values properly', function() {
      expect(ctrl.signupForm).toEqual({});
      expect(ctrl.errors).toEqual([]);
    });

    describe('submitSignup()', function() {
      it('calls $auth.submitRegistration() method with loginForm data', function() {
        var signupForm = { email: '1@mail.com', password: '12345678',
          password_confirmation: '12345678' };
        spyOn($auth, 'submitRegistration').and.returnValue( { then:
          function() { return { catch: function() {} }}});
        expect($auth.submitRegistration.calls.count()).toEqual(0);

        ctrl.submitSignup(signupForm);
        expect($auth.submitRegistration.calls.count()).toEqual(1);
        expect($auth.submitRegistration).toHaveBeenCalledWith(signupForm);
      });
    });
  });
});
