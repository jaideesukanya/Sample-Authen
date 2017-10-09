'use strict';
angular.module('catApp')
.controller('homeCtrl', ['$scope', 'adalAuthenticationService','$location', function ($scope, adalService, $location) {
    $scope.login = function () {
        adalService.login();
    };
    $scope.logout = function () {
        adalService.logOut();
    };
    $scope.isActive = function (viewLocation) {        
        return viewLocation === $location.path();
    };
	$scope.getToken2 = function(){
		 //adalService.getToken22();
		 console.log('Call getCachedToken = '+adalService.getCachedToken('/App/Views/Home.html'));
		 return adalService.getCachedToken('/App/Views/Home.html');
	};
}]);