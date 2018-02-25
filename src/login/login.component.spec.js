'use strict';

import login from './login.module';

describe('Component login', function() {
  var ctrl;
  var $auth;

  beforeEach(angular.mock.module(login));
  beforeEach(inject(function($componentController, _$auth_) {
    $auth = _$auth_;
    ctrl = $componentController('login', null, null);
  }));

  describe('LoginCtrl', function() {
    it('sets default values properly', function() {
      expect(ctrl.loginForm).toEqual({});
      expect(ctrl.errors).toEqual([]);
    });

    describe('submitLogin()', function() {
      it('calls $auth.submitLogin() method with loginForm data', function() {
        var loginForm = { email: '1@mail.com', password: '12345678' };
        spyOn($auth, 'submitLogin').and.returnValue( { then:
          function() { return { catch: function() {} }}});
        expect($auth.submitLogin.calls.count()).toEqual(0);

        ctrl.submitLogin(loginForm);
        expect($auth.submitLogin.calls.count()).toEqual(1);
        expect($auth.submitLogin).toHaveBeenCalledWith(loginForm);
      });
    });
  });
});
