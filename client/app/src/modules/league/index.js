
module.exports = angular.module('loghApp.league', [])
    .controller('LeaguesController', require('./LeaguesController'))
    .controller('LeagueController', require('./LeagueController'))
    .controller('CreateLeagueController', require('./CreateLeagueController'))
    .controller('EditLeagueController', require('./EditLeagueController'))
    .config(function($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('app.leagues', {
                url: 'season/{seasonId}/leagues',
                views: {
                    header: {
                        templateUrl: 'common/modules/header/header.tpl.html',
                        controller: 'HeaderController'
                    },
                    message: {
                        templateUrl: 'common/modules/message/message.tpl.html',
                        controller: 'MessageController'
                    },
                    content: {
                        templateUrl: 'modules/league/leagues.tpl.html',
                        controller: 'LeaguesController'
                    },
                    footer: {
                        templateUrl: 'common/templates/footer.tpl.html'
                    }
                }
            })
            .state('app.league', {
                abstract: true,
                url: 'season/{seasonId}/league',
                views: {
                    header: {
                        templateUrl: 'common/modules/header/header.tpl.html',
                        controller: 'HeaderController'
                    },
                    message: {
                        templateUrl: 'common/modules/message/message.tpl.html',
                        controller: 'MessageController'
                    },
                    content: {
                        templateUrl: 'modules/league/league.tpl.html',
                        controller: 'LeagueController'
                    },
                    footer: {
                        templateUrl: 'common/templates/footer.tpl.html'
                    }
                },
                resolve: {
                    weeks: ['weekService', '$stateParams', function(weekService, $stateParams) {
                        return weekService.getAvailableWeeks($stateParams.seasonId);
                    }]
                }
            })
            .state('app.league.new', {
                url: '/new',
                views: {
                    leagueContent: {
                        templateUrl: 'modules/league/league.new.tpl.html',
                        controller: 'CreateLeagueController'
                    }
                }
            })
            .state('app.league.edit', {
                url: '/{leagueId}/edit',
                views: {
                    leagueContent: {
                        templateUrl: 'modules/league/league.edit.tpl.html',
                        controller: 'EditLeagueController'
                    }
                },
                resolve: {
                    league: ['leagueService', '$stateParams', function(leagueService, $stateParams) {
                        return leagueService.getLeague($stateParams.seasonId, $stateParams.leagueId);
                    }]
                }

            })
        ;
        $urlRouterProvider.otherwise('/');
    });
