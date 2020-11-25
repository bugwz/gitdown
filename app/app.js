/***********************************************************
 * Developer: Minhas Kamal (minhaskamal024@gmail.com)       *
 * SourceWebsite: https://github.com/MinhasKamal/DownGit    *
 * ForkWebsite: http://gitdown.bugwz.com                    *
 * License: MIT License                                     *
 ***********************************************************/

var siteHeaderText = {};

var gitDown = angular.module('gitDown', [
    'ngRoute',
    'homeModule',
    'toastr',
]);

gitDown.config([
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

gitDown.config([
    'toastrConfig',

    function(toastrConfig) {
        angular.extend(toastrConfig, {
            positionClass: 'toast-bottom-right',
            maxOpened: 3,
        });
    }
]);