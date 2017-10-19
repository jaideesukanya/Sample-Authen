'use strict';
angular.module('catApp', ['ngRoute','AdalAngular'])
.config(['$routeProvider', '$httpProvider', 'adalAuthenticationServiceProvider', function ($routeProvider, $httpProvider, adalProvider) {

    $routeProvider.when("/Home", {
        controller: "homeCtrl",
        templateUrl: "/App/Views/Home.html",
    }).when("/Calc", {
        controller: "calcCtrl",
        templateUrl: "/App/Views/Calc.html",
		requireADLogin: true,
    }).when("/UserData", {
        controller: "userDataCtrl",
        templateUrl: "/App/Views/UserData.html",
    }).when("/Second", {
        controller: "SecondCDNCtrl",
        templateUrl: "/App/Views/sub/second.html",
    }).otherwise({ redirectTo: "/Home" });

    adalProvider.init(
        {
            instance: 'https://login.microsoftonline.com/', 
            tenant: 'together.at',
			//tenant: '3e0b6cbd-4959-4d01-81bf-ce883ddabd96',
			//clientId: '0a07a77d-ee2e-477e-93ca-fd7f59421237', Old clientID
			// clientId: '84a30349-7c6d-42fc-a92e-fa7b774f66e9',
			//My clientID
			//clientId: 'eb4c0c67-7376-4a50-b9fe-ed01fe020b58',
			
			//clientId: '5829dae7-8f84-470a-b11c-6cf32545f074',
			clientId: '8307d66e-184f-437f-af73-88729009b293',
            extraQueryParameter: 'nux=1',
            //cacheLocation: 'localStorage', // enable this for IE, as sessionStorage does not work for localhost.
        },
        $httpProvider
        );
   
}]);
