/***********************************************************
* Developer: Minhas Kamal (minhaskamal024@gmail.com)       *
* SourceWebsite: https://github.com/MinhasKamal/DownGit    *
* ForkWebsite: http://gitdown.bugwz.com                    *
* License: MIT License                                     *
***********************************************************/

var siteHeaderText = {};

var downGit = angular.module('downGit', [
    'ngRoute',
    'homeModule',
    'toastr',
]);

downGit.config([
    '$routeProvider',
    
    function($routeProvider) {
        $routeProvider
            .when('/', {
                redirectTo: '/home',
            })
            .otherwise({
                redirectTo: '/home',
            });
    }
]);

downGit.config([
    'toastrConfig',
    
    function(toastrConfig) {
        angular.extend(toastrConfig, {
            positionClass: 'toast-bottom-right',
            maxOpened: 3,
        });
    }
]);
