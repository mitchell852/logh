var LeagueService = function($http, $log, $location, apiConfig, leagueModel, messageModel) {

    this.getLeague = function(seasonId, leagueId) {
        $log.log('LeagueService: getLeague');
        var promise = $http.get(apiConfig.baseURL + "seasons/" + seasonId + "/leagues/" + leagueId)
            .success(function(data) {
                $log.log("LeagueService: getLeague success");
                leagueModel.setLeague(data.payload.league);
                return data;
            })
            .error(function(data) {
                $log.log("LeagueService: getLeague failed");
                return data;
            });

        return promise;
    };

    this.createLeague = function(leagueParams) {
        $log.log('LeagueService: createLeague');
        var promise = $http.post(apiConfig.baseURL + "seasons/" + leagueParams.season_id + "/leagues",
            { league: leagueParams })
            .success(function(data) {
                $log.log("LeagueService: createLeague success");
                // todo: change to this? $state.go('app.league.detail', { leagueId: data.payload.league.id, seasonId: data.payload.league.season_id });
                $location.path('/season/' + leagueParams.season_id + '/league/' + data.payload.league_id + '/edit' );
                messageModel.setMessage(data.message);
                return data;
            })
            .error(function(data) {
                $log.log("LeagueService: createLeague failed");
                return data;
            });

        return promise;
    };

    this.updateLeague = function(leagueParams) {
        $log.log('LeagueService: updateLeague');
        var promise = $http.put(apiConfig.baseURL + "seasons/" + leagueParams.season_id + "/leagues/" + leagueParams.id,
            { league: leagueParams })
            .success(function(data) {
                $log.log("LeagueService: updateLeague success");
                leagueModel.setLeague(leagueParams);
                messageModel.setMessage(data.message);
                return data;
            })
            .error(function(data) {
                $log.log("LeagueService: updateLeague failed");
                return data;
            });

        return promise;
    };

};

LeagueService.$inject = ['$http', '$log', '$location', 'apiConfig', 'leagueModel', 'messageModel'];
module.exports = LeagueService;