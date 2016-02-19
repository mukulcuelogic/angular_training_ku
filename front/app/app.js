'use strict';

// Declare app level module which depends on views, and components
angular.module('angular_test_app', [
  'ngRoute',
  'employee',
  'activity',
  'paginator',
  'directives'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/employees'});
}])
.value('DEFAULT_VAL', {
    'RECORDS_PER_PAGE' :  10,
});
