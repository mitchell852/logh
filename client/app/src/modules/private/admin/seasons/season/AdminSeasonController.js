var AdminWeeksController = function(season, weeks, leagues, $scope, $location, $modal, seasonService) {

  $scope.season = season.data;

  $scope.weeks = weeks.data;

  $scope.privateQuery = '';

  $scope.publicQuery = '';

  $scope.publicLeagues = _.filter(leagues.data, function(league) {
    return league.public;
  });

  $scope.privateLeagues = _.filter(leagues.data, function(league) {
    return !league.public;
  });

  $scope.editSeason = function(season) {

    var modalInstance = $modal.open({
      templateUrl: 'modules/private/admin/seasons/season/edit/admin.season.edit.tpl.html',
      controller: 'AdminSeasonEditController',
      resolve: {
        season: function() {
          return season;
        }
      }
    });

    modalInstance.result.then(function(season) {
      seasonService.updateSeason(season);
    }, function () {
      $log.debug('Edit season modal dismissed...');
      messageModel.setMessage({ type: 'warning', content: 'Edit season cancelled' }, false);
    });

  };

  $scope.showWeek = function(week) {
    $location.url($location.path() + '/weeks/' + week.id);
  };

  $scope.showLeague = function(league) {
    $location.url('/season/' + league.season_id + '/league/' + league.id);
  };

  /**
   * Invoked on startup, like a constructor.
   */
  var init = function () {
  };
  init();
};

AdminWeeksController.$inject = ['season', 'weeks', 'leagues', '$scope', '$location', '$modal', 'seasonService'];
module.exports = AdminWeeksController;
