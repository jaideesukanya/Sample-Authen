﻿'use strict';
angular.module('catApp')
.controller('calcCtrl', ['$scope', 'adalAuthenticationService', function ($scope, adalService) {
	$scope.getToken2 = function(resource){
		 //adalService.getToken22();
		 //console.log('Call getCachedToken = '+adalService.getCachedToken('/App/Views/Home.html'));
		 
		 //eb4c0c67-7376-4a50-b9fe-ed01fe020b58
		 console.log('Call homeCtrl getCachedToken = '+adalService.getCachedToken(resource));
		 return adalService.getCachedToken('/App/Views/Home.html');
	};

}]);