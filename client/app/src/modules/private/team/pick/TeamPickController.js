var TeamPickController = function(team, week, games, $rootScope, $scope, $log, $location, $anchorScroll, userModel, dateUtils) {

  $scope.team = team.data;

  $scope.week = week.data;

  $scope.games = games.data;

  $scope.scrollToTop = function() {
    $anchorScroll(); // hacky?
  };

  $scope.numPicks = function(team) {
    if (team.league.max_picks_per_week >= $scope.games.length) {
      return 'Pick all games';
    }
    var msg = 'Pick up to ' + team.league.max_picks_per_week + ' loser'
    if (team.league.max_picks_per_week > 1) {
      msg += 's';
    }
    return msg;
  };

  $scope.savePicks = function() {
    $rootScope.$broadcast('TeamPickController::savePicks');
  };

  $scope.getScore = function(game, index) {
    // warning: magic numbers ahead
    var score = (index === 0) ? game.visiting_squad_score : game.home_squad_score;
    return score;
  };

  $scope.starts = function(game) {
    var startsLabel = (game.started) ? 'Started ' : 'Starts ';
    return startsLabel + dateUtils.dateFormat(game.starts_at, "ddd, mmm d h:MM TT (Z)");
  };

  $scope.showTeam = function(team, showCurrentWeek) {
    var teamPath = '/season/' + team.league.season_id + '/league/' + team.league.id + '/team/' + team.id;
    if (showCurrentWeek) {
      teamPath += '?week=' + $scope.week.slug;
    }
    $location.url(teamPath);
  };

  $scope.isCoach = function(team) {
    return team.coach_ids.indexOf(userModel.user.id) > -1;
  };

  /**
   * Invoked on startup, like a constructor.
   */
  var init = function () {
    $log.debug("make pick controller");
  };
  init();
};

TeamPickController.$inject = ['team', 'week', 'games', '$rootScope', '$scope', '$log', '$location', '$anchorScroll', 'userModel', 'dateUtils'];
module.exports = TeamPickController;
