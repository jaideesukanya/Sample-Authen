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
	/*$scope.getToken2 = function(resource){
		 //adalService.getToken22();
		 //console.log('Call getCachedToken = '+adalService.getCachedToken('/App/Views/Home.html'));
		 
		 //eb4c0c67-7376-4a50-b9fe-ed01fe020b58
		 console.log('Call homeCtrl getCachedToken = '+adalService.getCachedToken(resource));
		 return adalService.getCachedToken('/App/Views/Home.html');
	};*/
}]);