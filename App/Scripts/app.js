'use strict';
angular.module('catApp', ['ngRoute','AdalAngular'])
.config(['$routeProvider', '$httpProvider', 'adalAuthenticationServiceProvider', function ($routeProvider, $httpProvider, adalProvider) {

    $routeProvider.when("/Home", {
        controller: "homeCtrl",
        templateUrl: "/App/Views/Home.html",
    }).when("/CatList", {
        controller: "catListCtrl",
        templateUrl: "/App/Views/CatList.html",
        requireADLogin: true,
	}).when("/Calc", {
        controller: "userDataCtrl",
        templateUrl: "/App/Views/Calc.html",
    }).when("/UserData", {
        controller: "userDataCtrl",
        templateUrl: "/App/Views/UserData.html",
    }).otherwise({ redirectTo: "/Home" });

    adalProvider.init(
        {
            instance: 'https://login.microsoftonline.com/', 
            tenant: 'together.at',
			//tenant: '3e0b6cbd-4959-4d01-81bf-ce883ddabd96',
			//clientId: '0a07a77d-ee2e-477e-93ca-fd7f59421237', Old clientID
			
			//My clientID
			clientId: 'eb4c0c67-7376-4a50-b9fe-ed01fe020b58',
			
			//clientId: '5829dae7-8f84-470a-b11c-6cf32545f074',
            extraQueryParameter: 'nux=1',
            //cacheLocation: 'localStorage', // enable this for IE, as sessionStorage does not work for localhost.
        },
        $httpProvider
        );
   
}]);