import angular from 'angular';
import 'angular-mocks';

var testsContext = require.context("../src", true, /\.spec\.js$/);
testsContext.keys().forEach(testsContext);
