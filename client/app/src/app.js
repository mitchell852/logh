'use strict';
require('app-templates');


var App = function($urlRouterProvider) {
    // unmatched urls should be directed back to the start
    $urlRouterProvider.otherwise('/home');
};

App.$inject = ['$urlRouterProvider'];

var loghApp = angular.module('loghApp', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngRoute',
    'commangular',
    'ui.router',
    'ui.bootstrap',
    'app.templates',
    'ui.router.stateHelper',

    // public modules
    require('./modules/public/home').name,
    require('./modules/public/register').name,

    // app modules
    require('./modules/user').name,
    require('./modules/league').name,
    require('./modules/league/leagues').name,
    require('./modules/team').name,
    require('./modules/team/teams').name,

    // helper modules
    require('./common/modules/header').name,
    require('./common/modules/message').name,

    require('./common/aspects').name,
    require('./common/models').name,
    require('./common/api').name,
    require('./common/command').name,

    require('./common/service/application').name,

    //directives
    require('./common/directives/focus').name,
    require('./common/directives/match').name,
    require('./common/directives/requiredPattern').name,

    //modals

    //filters
    require('./common/filters').name

    ], App)

    .config(function($stateProvider, $locationProvider, $logProvider, $uiViewScrollProvider, $anchorScrollProvider) {
        // use the HTML5 History API
        $locationProvider.html5Mode(false);

        // disables auto-scroll
        $uiViewScrollProvider.useAnchorScroll();
        $anchorScrollProvider.disableAutoScrolling();

        // turns on/off debug console log statements
        $logProvider.debugEnabled(true);

        // defines root states
        $stateProvider
        .state('public', {
            abstract: true,
            url: '/',
            templateUrl: 'common/templates/master.tpl.html',
            resolve: {
                loadSeason: function(seasonService) {
                    return seasonService.getCurrentSeason();
                }
            }
        })
        .state('app', {
            abstract: true,
            url: '/',
            templateUrl: 'common/templates/master.tpl.html',
            resolve: {
                loadSeason: function(seasonService) {
                    return seasonService.getCurrentSeason();
                },
                loadUser: function(userService) {
                    return userService.getCurrentUser();
                }
            }
        })
    })

    .run(function($rootScope, $urlRouter, $log, applicationService) {
        $log.debug("Application starting up...");
        applicationService.startup();
    })
;

loghApp.factory('authInterceptor', function ($rootScope, $q, $window, messageModel, userModel) {
    return {
        request: function (config) {
            config.headers = config.headers || {};
            if ($window.sessionStorage.token) {
                config.headers.Authorization = $window.sessionStorage.token;
            }
            return config;
        },
        responseError: function (rejection) {
            messageModel.setMessage(rejection.data.message, false);
            if (rejection.status === 401) {
                userModel.resetUser();
            }
            return $q.reject(rejection);
        }
    };
});

loghApp.config(function ($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
});









