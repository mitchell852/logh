require=(function(e,t,n){function i(n,s){if(!t[n]){if(!e[n]){var o=typeof require=="function"&&require;if(!s&&o)return o(n,!0);if(r)return r(n,!0);throw new Error("Cannot find module '"+n+"'")}var u=t[n]={exports:{}};e[n][0].call(u.exports,function(t){var r=e[n][1][t];return i(r?r:t)},u,u.exports)}return t[n].exports}var r=typeof require=="function"&&require;for(var s=0;s<n.length;s++)i(n[s]);return i})({"app-templates":[function(require,module,exports){
module.exports=require('0VoVTq');
},{}],"0VoVTq":[function(require,module,exports){
angular.module('app.templates', ['common/modules/confirm/confirm.tpl.html', 'common/modules/footer/footer.tpl.html', 'common/modules/header/header.tpl.html', 'common/modules/message/message.tpl.html', 'common/templates/master.tpl.html', 'modules/private/admin/admin.tpl.html', 'modules/private/admin/game/edit/admin.game.edit.tpl.html', 'modules/private/admin/game/new/admin.game.new.tpl.html', 'modules/private/admin/seasons/admin.seasons.tpl.html', 'modules/private/admin/seasons/season/admin.season.tpl.html', 'modules/private/admin/seasons/season/edit/admin.season.edit.tpl.html', 'modules/private/admin/seasons/season/new/admin.season.new.tpl.html', 'modules/private/admin/squads/admin.squads.tpl.html', 'modules/private/admin/squads/edit/admin.squads.edit.tpl.html', 'modules/private/admin/squads/new/admin.squads.new.tpl.html', 'modules/private/admin/week/admin.week.tpl.html', 'modules/private/admin/week/edit/admin.week.edit.tpl.html', 'modules/private/admin/week/new/admin.week.new.tpl.html', 'modules/private/league/contact/league.contact.tpl.html', 'modules/private/league/edit/league.edit.tpl.html', 'modules/private/league/invite/league.invite.tpl.html', 'modules/private/league/invite/request/league.invite.request.tpl.html', 'modules/private/league/join/league.join.tpl.html', 'modules/private/league/league.tpl.html', 'modules/private/league/message/league.message.tpl.html', 'modules/private/league/new/league.new.tpl.html', 'modules/private/league/view/league.view.tpl.html', 'modules/private/leagues/join/leagues.join.tpl.html', 'modules/private/leagues/join/private/leagues.join.private.tpl.html', 'modules/private/leagues/join/public/leagues.join.public.tpl.html', 'modules/private/leagues/leagues.tpl.html', 'modules/private/leagues/manage/leagues.manage.tpl.html', 'modules/private/leagues/my/leagues.my.tpl.html', 'modules/private/play/leagues/play.leagues.tpl.html', 'modules/private/play/play.tpl.html', 'modules/private/play/teams/play.teams.tpl.html', 'modules/private/team/edit/team.edit.tpl.html', 'modules/private/team/message/team.message.tpl.html', 'modules/private/team/pick/many/team.pick.many.tpl.html', 'modules/private/team/pick/one/team.pick.one.tpl.html', 'modules/private/team/pick/team.pick.tpl.html', 'modules/private/team/team.tpl.html', 'modules/private/team/view/picks/team.view.picks.tpl.html', 'modules/private/team/view/team.view.tpl.html', 'modules/private/user/reset/user.reset.tpl.html', 'modules/private/user/user.tpl.html', 'modules/public/abuse/abuse.tpl.html', 'modules/public/faq/faq.tpl.html', 'modules/public/faq/general/faq.general.tpl.html', 'modules/public/faq/pickem/faq.pickem.tpl.html', 'modules/public/faq/survivor/faq.survivor.tpl.html', 'modules/public/home/home.tpl.html', 'modules/public/register/register.tpl.html', 'modules/public/register/terms/register.terms.tpl.html', 'modules/public/signin/signin.tpl.html']);

angular.module("common/modules/confirm/confirm.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("common/modules/confirm/confirm.tpl.html",
    "<div class=\"modal-header\">\n" +
    "  <button type=\"button\" class=\"close\" ng-click=\"cancel()\"><span aria-hidden=\"true\">&times;</span><span class=\"sr-only\">Close</span></button>\n" +
    "  <h4 class=\"modal-title\">Confirm Action</h4>\n" +
    "</div>\n" +
    "<div class=\"modal-body\">\n" +
    "  <p>{{message}}</p>\n" +
    "</div>\n" +
    "<div class=\"modal-footer\">\n" +
    "  <button class=\"btn btn-primary\" ng-click=\"cancel()\">No</button>\n" +
    "  <button class=\"btn btn-default\" ng-click=\"confirm()\">Yes</button>\n" +
    "</div>");
}]);

angular.module("common/modules/footer/footer.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("common/modules/footer/footer.tpl.html",
    "<div id=\"menu\">\n" +
    "  <h1><a ng-click=\"home()\">LOGH</a></h1>\n" +
    "  <div class=\"links\">\n" +
    "    <span style=\"text-transform: none;\">© 2015 Flexdevelopers.com LLC</span>\n" +
    "  </div>\n" +
    "</div>");
}]);

angular.module("common/modules/header/header.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("common/modules/header/header.tpl.html",
    "<div class=\"container\">\n" +
    "  <div class=\"navbar-header\">\n" +
    "    <button class=\"navbar-toggle\" type=\"button\" ng-click=\"isCollapsed = !isCollapsed\">\n" +
    "      <span class=\"sr-only\">Toggle navigation</span>\n" +
    "      <span class=\"icon-bar\"></span>\n" +
    "      <span class=\"icon-bar\"></span>\n" +
    "      <span class=\"icon-bar\"></span>\n" +
    "    </button>\n" +
    "    <a class=\"navbar-brand\" ng-click=\"home()\"><b>LOSE</b>OR<b>GO</b>HOME</a>\n" +
    "  </div>\n" +
    "  <div collapse=\"isCollapsed\" class=\"navbar-collapse\">\n" +
    "    <ul ng-show=\"userData.user.loaded\" class=\"nav navbar-nav navbar-right\">\n" +
    "      <li ng-class=\"{'active': isState(['private.play.teams', 'private.play.leagues'])}\"><a ng-click=\"play(selectedSeasonId)\">My Teams & Leagues</a></li>\n" +
    "      <li ng-class=\"{'active': isState(['private.leagues.join.public', 'private.leagues.join.private'])}\"><a ng-click=\"joinLeague()\">Join League</a></li>\n" +
    "      <li><a ng-click=\"createLeague()\">Create League</a></li>\n" +
    "      <li><a ng-click=\"faq()\">FAQ</a></li>\n" +
    "      <li class=\"dropdown\">\n" +
    "        <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\"><i class=\"fa fa-cog fa-fw settings-icon\" title=\"User Settings\"></i> <b class=\"caret\"></b></a>\n" +
    "        <ul class=\"dropdown-menu\">\n" +
    "          <li><a ng-click=\"contactUs()\">Contact Us</a></li>\n" +
    "          <li class=\"divider\"></li>\n" +
    "          <li><a ng-click=\"userProfile()\">User Profile</a></li>\n" +
    "          <li><a ng-click=\"signout()\">Sign Out</a></li>\n" +
    "        </ul>\n" +
    "      </li>\n" +
    "    </ul>\n" +
    "    <ul ng-show=\"!userData.user.loaded\" class=\"nav navbar-nav navbar-right\">\n" +
    "      <li><a ng-click=\"faq()\">FAQ</a></li>\n" +
    "      <li><a ng-click=\"register()\">Register</a></li>\n" +
    "      <li class=\"dropdown\">\n" +
    "        <a class=\"dropdown-toggle\" href=\"#\" data-toggle=\"dropdown\">Sign In</strong></a>\n" +
    "        <div class=\"dropdown-menu panel panel-default\">\n" +
    "          <div class=\"inline-signin-form panel-body\">\n" +
    "            <form name=\"inlineSigninForm\" role=\"form\" ng-submit=\"signin({ email: credentials.email.toLowerCase(), password: credentials.password }); $event.stopPropagation();\" novalidate>\n" +
    "              <div class=\"form-group\">\n" +
    "                <div class=\"input-group\">\n" +
    "                  <span class=\"input-group-addon\"><i class=\"fa fa-envelope fa-fw\"></i></span>\n" +
    "                  <input type=\"email\" class=\"form-control\" autocomplete=\"off\" style=\"cursor:auto;\" placeholder=\"Email\" ng-model=\"credentials.email\" ng-click=\"$event.stopPropagation();\" rc-verify-set autofocus required>\n" +
    "                </div>\n" +
    "              </div>\n" +
    "              <div class=\"form-group\">\n" +
    "                <div class=\"input-group\">\n" +
    "                  <span class=\"input-group-addon\"><i class=\"fa fa-key fa-fw\"></i></span>\n" +
    "                  <input type=\"password\" class=\"form-control\" autocomplete=\"off\" style=\"cursor:auto;\" placeholder=\"Password\" ng-model=\"credentials.password\" ng-click=\"$event.stopPropagation();\" rc-verify-set required>\n" +
    "                </div>\n" +
    "              </div>\n" +
    "              <button type=\"submit\" class=\"btn btn-block btn-primary\">Sign in with email</button>\n" +
    "              <div class=\"orDiv\"><span>or</span></div>\n" +
    "            </form>\n" +
    "            <button class=\"btn btn-block btn-primary\" ng-click=\"signinGuest()\">Sign in as guest</button>\n" +
    "            <hr>\n" +
    "            <div class=\"signin-other-container\"><a ng-click=\"register()\">Register</a> | <a ng-click=\"resetPassword()\">Reset Password</a></div>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "      </li>\n" +
    "    </ul>\n" +
    "  </div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("common/modules/message/message.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("common/modules/message/message.tpl.html",
    "<div class=\"alert alert-dismissable alert-{{messageData.message.type}}\" ng-show=\"messageData.message.loaded\">\n" +
    "  <button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-hidden=\"true\" ng-click=\"dismissMessage(messageData)\">&times;</button>\n" +
    "  {{messageData.message.content}}\n" +
    "  <a ng-show=\"messageData.message.shareLeague\" ng-click=\"shareLeagueFB()\" class=\"alert-link\">[ share on facebook ]</a>\n" +
    "  <a ng-show=\"messageData.message.shareTeam\" ng-click=\"shareTeamFB()\" class=\"alert-link\">[ share on facebook ]</a>\n" +
    "  <a ng-show=\"messageData.message.shareUser\" ng-click=\"shareUserFB()\" class=\"alert-link\">[ share on facebook ]</a>\n" +
    "</div>\n" +
    "");
}]);

angular.module("common/templates/master.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("common/templates/master.tpl.html",
    "<!-- Header -->\n" +
    "<nav class=\"navbar navbar-inverse\" ui-view=\"header\"></nav>\n" +
    "\n" +
    "<div class=\"container\">\n" +
    "\n" +
    "  <!-- Message -->\n" +
    "  <div ui-view=\"message\"></div>\n" +
    "\n" +
    "  <!-- Content -->\n" +
    "  <div ui-view=\"content\"></div>\n" +
    "\n" +
    "</div>\n" +
    "\n" +
    "<!-- Message -->\n" +
    "<div ui-view=\"landingMessage\" class=\"landing-message container\"></div>\n" +
    "\n" +
    "<!-- Landing -->\n" +
    "<div ui-view=\"landing\" class=\"landing\"></div>\n" +
    "\n" +
    "<!-- Footer -->\n" +
    "<footer class=\"footer\" ui-view=\"footer\"></footer>\n" +
    "\n" +
    "");
}]);

angular.module("modules/private/admin/admin.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("modules/private/admin/admin.tpl.html",
    "<div ui-view=\"adminContent\" class=\"admin-content\"></div>\n" +
    "");
}]);

angular.module("modules/private/admin/game/edit/admin.game.edit.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("modules/private/admin/game/edit/admin.game.edit.tpl.html",
    "<div class=\"modal-header\">\n" +
    "  <button type=\"button\" class=\"close\" ng-click=\"cancel()\"><span aria-hidden=\"true\">&times;</span><span class=\"sr-only\">Close</span></button>\n" +
    "  <h3 class=\"modal-title\">Edit Game [ID: {{gameData.id}} ]}</h3>\n" +
    "</div>\n" +
    "<div class=\"modal-body\">\n" +
    "  <form style=\"padding: 10px;\" name=\"editGameForm\" class=\"edit-game-form form-horizontal\" role=\"form\" novalidate>\n" +
    "    <div class=\"form-group\">\n" +
    "      <label class=\"col-sm-6 control-label\">Starts At (Local Time):</label>\n" +
    "      <div class=\"col-sm-6\">\n" +
    "        <div class=\"dropdown\" is-open=\"startsAtDropdown.isopen\">\n" +
    "          <a class=\"dropdown-toggle\" role=\"button\" data-toggle=\"dropdown\" data-target=\"#\" href=\"#\">\n" +
    "            <div class=\"input-group\">\n" +
    "              <input type=\"text\" class=\"form-control\" formatted-date data-ng-model=\"gameData.starts_at\" ng-required=\"true\" ng-disabled=\"true\">\n" +
    "              <span class=\"input-group-addon\"><i class=\"glyphicon glyphicon-calendar\"></i></span>\n" +
    "            </div>\n" +
    "          </a>\n" +
    "          <ul class=\"dropdown-menu\" role=\"menu\" aria-labelledby=\"dLabel\">\n" +
    "            <datetimepicker data-ng-model=\"gameData.starts_at\" data-on-set-time=\"closeStartsAt()\" data-datetimepicker-config=\"{ minuteStep: 1 }\"/>\n" +
    "          </ul>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "    <div class=\"form-group\">\n" +
    "      <label for=\"note\" class=\"col-sm-6 control-label\">Note:</label>\n" +
    "      <div class=\"col-sm-6\">\n" +
    "        <input id=\"note\" name=\"note\" type=\"text\" class=\"form-control\" ng-model=\"gameData.note\">\n" +
    "      </div>\n" +
    "    </div>\n" +
    "    <div class=\"form-group\">\n" +
    "      <label for=\"visitingSquad\" class=\"col-sm-6 control-label\">Visiting Squad:</label>\n" +
    "      <div class=\"col-sm-6\">\n" +
    "        <select id=\"visitingSquad\" name=\"visitingSquad\" class=\"form-control\" ng-model=\"gameData.visiting_squad_id\" ng-options=\"visitingSquad.id as visitingSquad.name for visitingSquad in squads\"></select>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "    <div class=\"form-group\">\n" +
    "      <label for=\"homeSquad\" class=\"col-sm-6 control-label\" >Home Squad:</label>\n" +
    "      <div class=\"col-sm-6\">\n" +
    "        <select id=\"homeSquad\" name=\"homeSquad\" class=\"form-control\" ng-model=\"gameData.home_squad_id\" ng-options=\"homeSquad.id as homeSquad.name for homeSquad in squads\"></select>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "    <div class=\"form-group\">\n" +
    "      <label for=\"visitorScore\" class=\"col-sm-6 control-label\">{{getSquad(gameData.visiting_squad_id).name}} Score:</label>\n" +
    "      <div class=\"col-sm-6\">\n" +
    "        <input id=\"visitorScore\" name=\"visitorScore\" type=\"number\" min=\"0\" class=\"form-control\" ng-model=\"gameData.visiting_squad_score\" select-on-click required>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "    <div class=\"form-group\">\n" +
    "      <label for=\"homeScore\" class=\"col-sm-6 control-label\">{{getSquad(gameData.home_squad_id).name}} Score:</label>\n" +
    "      <div class=\"col-sm-6\">\n" +
    "        <input id=\"homeScore\" name=\"homeScore\" type=\"number\" min=\"0\" class=\"form-control\" ng-model=\"gameData.home_squad_score\" select-on-click required>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "    <div class=\"form-group\">\n" +
    "      <label for=\"complete\" class=\"col-sm-6 control-label\">Completed:</label>\n" +
    "      <div class=\"col-sm-6\">\n" +
    "        <input id=\"complete\" name=\"complete\" type=\"checkbox\" ng-model=\"gameData.complete\">\n" +
    "      </div>\n" +
    "    </div>\n" +
    "    <hr>\n" +
    "    <a ng-show=\"!showOptions\" ng-click=\"showOptions = true\">Show Options</a>\n" +
    "    <a ng-show=\"showOptions\" ng-click=\"showOptions = false\">Hide Options</a>\n" +
    "    <div ng-show=\"showOptions\">\n" +
    "      <div class=\"form-group\">\n" +
    "        <label for=\"shootout\" class=\"col-sm-6 control-label\">Shootout:</label>\n" +
    "        <div class=\"col-sm-6\">\n" +
    "          <input id=\"shootout\" name=\"shootout\" type=\"checkbox\" ng-model=\"gameData.shootout\">\n" +
    "        </div>\n" +
    "      </div>\n" +
    "      <div class=\"form-group\">\n" +
    "        <label for=\"overtimes\" class=\"col-sm-6 control-label\">Overtimes:</label>\n" +
    "        <div class=\"col-sm-6\">\n" +
    "          <input id=\"overtimes\" name=\"overtimes\" type=\"number\" class=\"form-control\" ng-model=\"gameData.overtimes\" select-on-click required>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "      <div class=\"form-group\">\n" +
    "        <label for=\"innings\" class=\"col-sm-6 control-label\">Innings:</label>\n" +
    "        <div class=\"col-sm-6\">\n" +
    "          <input id=\"innings\" name=\"innings\" type=\"number\" class=\"form-control\" ng-model=\"gameData.innings\" select-on-click required>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "      <div class=\"form-group\">\n" +
    "        <label for=\"postponed\" class=\"col-sm-6 control-label\">Postponed:</label>\n" +
    "        <div class=\"col-sm-6\">\n" +
    "          <input id=\"postponed\" name=\"postponed\" type=\"checkbox\" ng-model=\"gameData.postponed\">\n" +
    "        </div>\n" +
    "      </div>\n" +
    "      <div class=\"form-group\">\n" +
    "        <label for=\"playoff\" class=\"col-sm-6 control-label\">Playoffs:</label>\n" +
    "        <div class=\"col-sm-6\">\n" +
    "          <input id=\"playoff\" name=\"playoff\" type=\"checkbox\" ng-model=\"gameData.playoff\">\n" +
    "        </div>\n" +
    "      </div>\n" +
    "      <div class=\"form-group\">\n" +
    "        <label for=\"tbd\" class=\"col-sm-6 control-label\">TBD:</label>\n" +
    "        <div class=\"col-sm-6\">\n" +
    "          <input id=\"tbd\" name=\"tbd\" type=\"checkbox\" ng-model=\"gameData.tbd\">\n" +
    "        </div>\n" +
    "      </div>\n" +
    "      <div class=\"form-group\">\n" +
    "        <label for=\"if_necessary\" class=\"col-sm-6 control-label\">If Necessary:</label>\n" +
    "        <div class=\"col-sm-6\">\n" +
    "          <input id=\"if_necessary\" name=\"if_necessary\" type=\"checkbox\" ng-model=\"gameData.if_necessary\">\n" +
    "        </div>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "\n" +
    "  </form>\n" +
    "</div>\n" +
    "<div class=\"modal-footer\">\n" +
    "  <button class=\"btn btn-default\" ng-click=\"cancel()\">Cancel</button>\n" +
    "  <button class=\"btn btn-primary\" ng-disabled=\"editGameForm.$invalid\" ng-click=\"editGame(gameData)\">Update</button>\n" +
    "</div>");
}]);

angular.module("modules/private/admin/game/new/admin.game.new.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("modules/private/admin/game/new/admin.game.new.tpl.html",
    "<div class=\"modal-header\">\n" +
    "  <button type=\"button\" class=\"close\" ng-click=\"cancel()\"><span aria-hidden=\"true\">&times;</span><span class=\"sr-only\">Close</span></button>\n" +
    "  <h3 class=\"modal-title\">Create Game</h3>\n" +
    "</div>\n" +
    "<div class=\"modal-body\">\n" +
    "  <h4>{{weekData.display}} | {{weekData.type}}</h4>\n" +
    "  <hr>\n" +
    "  <form name=\"newGameForm\" role=\"form\" novalidate>\n" +
    "    <div class=\"form-group\">\n" +
    "      <label class=\"control-label\" for=\"note\">Note:</label>\n" +
    "      <input id=\"note\" name=\"note\" type=\"text\" class=\"form-control\" ng-model=\"newGameData.note\">\n" +
    "    </div>\n" +
    "    <div class=\"form-group\">\n" +
    "      <label class=\"control-label\" for=\"visitingSquad\">Visiting Squad:</label>\n" +
    "      <select id=\"visitingSquad\" name=\"visitingSquad\" class=\"form-control\" ng-model=\"newGameData.visiting_squad_id\" ng-options=\"squad.id as squad.name for squad in squads\"></select>\n" +
    "    </div>\n" +
    "    <div class=\"form-group\">\n" +
    "      <label class=\"control-label\" for=\"homeSquad\">Home Squad:</label>\n" +
    "      <select id=\"homeSquad\" name=\"homeSquad\" class=\"form-control\" ng-model=\"newGameData.home_squad_id\" ng-options=\"squad.id as squad.name for squad in squads\"></select>\n" +
    "    </div>\n" +
    "    <div class=\"form-group\">\n" +
    "      <label class=\"control-label\">Starts At (Local Time):</label>\n" +
    "      <div class=\"dropdown\" is-open=\"startsAtDropdown.isopen\">\n" +
    "        <a class=\"dropdown-toggle\" role=\"button\" data-toggle=\"dropdown\" data-target=\"#\" href=\"#\">\n" +
    "          <div class=\"input-group\">\n" +
    "            <input type=\"text\" class=\"form-control\" formatted-date data-ng-model=\"newGameData.starts_at\" ng-required=\"true\" ng-disabled=\"true\">\n" +
    "            <span class=\"input-group-addon\"><i class=\"glyphicon glyphicon-calendar\"></i></span>\n" +
    "          </div>\n" +
    "        </a>\n" +
    "        <ul class=\"dropdown-menu\" role=\"menu\" aria-labelledby=\"dLabel\">\n" +
    "          <datetimepicker data-ng-model=\"newGameData.starts_at\" data-on-set-time=\"closeStartsAt()\" data-datetimepicker-config=\"{ minuteStep: 1 }\"/>\n" +
    "        </ul>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "    <div class=\"form-group\">\n" +
    "        <input id=\"playoff\" name=\"playoff\" type=\"checkbox\" ng-model=\"newGameData.playoff\"> Playoffs\n" +
    "    </div>\n" +
    "    <div class=\"form-group\">\n" +
    "        <input id=\"tbd\" name=\"tbd\" type=\"checkbox\" ng-model=\"newGameData.tbd\"> TBD\n" +
    "    </div>\n" +
    "    <div class=\"form-group\">\n" +
    "        <input id=\"if_necessary\" name=\"if_necessary\" type=\"checkbox\" ng-model=\"newGameData.if_necessary\"> If Necessary\n" +
    "    </div>\n" +
    "  </form>\n" +
    "</div>\n" +
    "<div class=\"modal-footer\">\n" +
    "  <button class=\"btn btn-default\" ng-click=\"cancel()\">Cancel</button>\n" +
    "  <button class=\"btn btn-primary\" ng-disabled=\"newGameForm.$invalid\" ng-click=\"createGame(newGameData)\">Create</button>\n" +
    "</div>");
}]);

angular.module("modules/private/admin/seasons/admin.seasons.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("modules/private/admin/seasons/admin.seasons.tpl.html",
    "<div class=\"seasons-header-row row\">\n" +
    "  <div class=\"col-sm-6 col-md-6\">\n" +
    "    <h3>Seasons</h3>\n" +
    "  </div>\n" +
    "  <div class=\"col-sm-6 col-md-6\">\n" +
    "    <div class=\"seasons-btn-group\">\n" +
    "      <button type=\"button\" class=\"create-season-btn btn btn-primary\" ng-click=\"createSeason()\">Create Season</button>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "</div>\n" +
    "<div class=\"seasons list-group\">\n" +
    "  <a ng-repeat=\"season in seasons\" ng-click=\"showSeason(season)\" class=\"list-group-item\">\n" +
    "    <div class=\"row\">\n" +
    "      <div class=\"col-sm-6 col-md-6\"><i class=\"fa fa-check fa-fw\" ng-show=\"season.current === true\" title=\"current season\"></i> {{season.name}}<br><span class=\"start-end\">Starts: {{season.start_display}} | Ends: {{season.end_display}}</span></div>\n" +
    "      <div class=\"col-sm-6 col-md-6\">\n" +
    "        <span class=\"badge\">{{season.week_count}} week<span ng-show=\"season.week_count !== 1\">s</span></span>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </a>\n" +
    "</div>");
}]);

angular.module("modules/private/admin/seasons/season/admin.season.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("modules/private/admin/seasons/season/admin.season.tpl.html",
    "<div class=\"page-header\">\n" +
    "  <h3>{{season.name}} ({{season.start_display}} - {{season.end_display}}) <small><a ng-click=\"editSeason(season)\">[ edit ]</a></small></h3>\n" +
    "</div>\n" +
    "<div class=\"season-weeks-header-row row\">\n" +
    "  <div class=\"col-sm-12 col-md-12\">\n" +
    "    <h4>Weeks [ {{weeks.length}} ] <small><a ng-click=\"createWeek(season)\">[ create ]</a></small></h4>\n" +
    "    <hr>\n" +
    "  </div>\n" +
    "</div>\n" +
    "<div class=\"season-weeks list-group\">\n" +
    "  <a ng-repeat=\"week in weeks\" ng-click=\"showWeek(week)\" class=\"list-group-item\">\n" +
    "    <div class=\"row\">\n" +
    "      <div class=\"col-sm-6 col-md-6\"><i class=\"fa fa-check fa-fw\" ng-show=\"week.complete === true\" title=\"complete week\"></i> {{week.display}}<span style=\"color:#FF0000;\" ng-show=\"week.game_tbd_count > 0\"> - {{week.game_tbd_count}} TBD</span></div>\n" +
    "      <div class=\"start-end col-sm-6 col-md-6\">\n" +
    "        <span class=\"badge\">{{week.game_complete_count}} / {{week.game_count}} game<span ng-show=\"week.game_count !== 1\">s</span></span>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </a>\n" +
    "</div>\n" +
    "<div class=\"season-leagues-header-row row\">\n" +
    "  <div class=\"col-sm-12 col-md-12\">\n" +
    "    <h4>Public Leagues [ {{publicLeagues.length}} ]</h4>\n" +
    "    <hr>\n" +
    "    <div class=\"input-group\">\n" +
    "      <input type=\"text\" class=\"form-control\" placeholder=\"Filter public leagues...\" ng-model=\"publicQuery\">\n" +
    "      <span class=\"input-group-btn\">\n" +
    "          <button class=\"btn btn-default\" type=\"button\"><span class=\"glyphicon glyphicon-search\"></span></button>\n" +
    "      </span>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "</div>\n" +
    "<div class=\"season-leagues list-group\">\n" +
    "  <a ng-repeat=\"publicLeague in publicLeagues | filter:publicQuery:strict\" ng-click=\"showLeague(publicLeague)\" class=\"list-group-item\">\n" +
    "    <div class=\"row\">\n" +
    "      <div class=\"league-name col-sm-6 col-md-6\">{{publicLeague.name}}<br><span class=\"team-count league-commish\">Commish: {{publicLeague.commish_names.join(', ')}}</span></div>\n" +
    "      <div class=\"col-sm-6 col-md-6\">\n" +
    "        <span class=\"public-league-meta\">{{publicLeague.format}}<br>Starts {{publicLeague.start_week}}</span>\n" +
    "        <span class=\"badge\"><span ng-show=\"publicLeague.elimination\">{{publicLeague.alive_team_count}}/</span>{{publicLeague.team_count}} team<span ng-show=\"publicLeague.team_count !== 1\">s</span></span>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </a>\n" +
    "</div><div class=\"season-leagues-header-row row\">\n" +
    "  <div class=\"col-sm-12 col-md-12\">\n" +
    "    <h4>Private Leagues [ {{privateLeagues.length}} ]</h4>\n" +
    "    <hr>\n" +
    "    <div class=\"input-group\">\n" +
    "      <input type=\"text\" class=\"form-control\" placeholder=\"Filter private leagues...\" ng-model=\"privateQuery\">\n" +
    "      <span class=\"input-group-btn\">\n" +
    "          <button class=\"btn btn-default\" type=\"button\"><span class=\"glyphicon glyphicon-search\"></span></button>\n" +
    "      </span>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "</div>\n" +
    "<div class=\"season-leagues list-group\">\n" +
    "  <a ng-repeat=\"privateLeague in privateLeagues | filter:privateQuery:strict\" ng-click=\"showLeague(privateLeague)\" class=\"list-group-item\">\n" +
    "    <div class=\"row\">\n" +
    "      <div class=\"league-name col-sm-6 col-md-6\">{{privateLeague.name}}<br><span class=\"team-count league-commish\">Commish: {{privateLeague.commish_names.join(', ')}}</span></div>\n" +
    "      <div class=\"col-sm-6 col-md-6\">\n" +
    "        <span class=\"private-league-meta\">{{privateLeague.format}}<br>Starts {{privateLeague.start_week}}</span>\n" +
    "        <span class=\"badge\"><span ng-show=\"privateLeague.elimination\">{{privateLeague.alive_team_count}}/</span>{{privateLeague.team_count}} team<span ng-show=\"privateLeague.team_count !== 1\">s</span></span>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </a>\n" +
    "</div>");
}]);

angular.module("modules/private/admin/seasons/season/edit/admin.season.edit.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("modules/private/admin/seasons/season/edit/admin.season.edit.tpl.html",
    "<div class=\"modal-header\">\n" +
    "  <button type=\"button\" class=\"close\" ng-click=\"cancel()\"><span aria-hidden=\"true\">&times;</span><span class=\"sr-only\">Close</span></button>\n" +
    "  <h3 class=\"modal-title\">Edit Season</h3>\n" +
    "</div>\n" +
    "<div class=\"modal-body\">\n" +
    "  <form name=\"seasonForm\" role=\"form\" novalidate>\n" +
    "    <div class=\"form-group\" ng-class=\"{'has-error': hasError(seasonForm.seasonName), 'has-feedback': hasError(seasonForm.seasonName)}\">\n" +
    "      <label class=\"control-label\" for=\"seasonName\">Season name:\n" +
    "        <small ng-show=\"hasPropertyError(seasonForm.seasonName, 'required')\">[ Required ]</small>\n" +
    "        <small ng-show=\"hasPropertyError(seasonForm.seasonName, 'maxlength')\">[ Too Long ]</small>\n" +
    "      </label>\n" +
    "      <input id=\"seasonName\" name=\"seasonName\" type=\"text\" class=\"form-control\" ng-model=\"seasonData.name\" ng-maxlength=\"20\" required>\n" +
    "      <span ng-show=\"hasError(seasonForm.seasonName)\" class=\"glyphicon glyphicon-remove form-control-feedback\"></span>\n" +
    "    </div>\n" +
    "    <div class=\"form-group\" ng-class=\"{'has-error': hasError(seasonForm.seasonType), 'has-feedback': hasError(seasonForm.seasonType)}\">\n" +
    "      <label class=\"control-label\" for=\"seasonType\">Season type (NBA, NFL, etc):\n" +
    "        <small ng-show=\"hasPropertyError(seasonForm.seasonType, 'required')\">[ Required ]</small>\n" +
    "        <small ng-show=\"hasPropertyError(seasonForm.seasonType, 'maxlength')\">[ Too Long ]</small>\n" +
    "      </label>\n" +
    "      <input id=\"seasonType\" name=\"seasonType\" type=\"text\" class=\"form-control\" ng-model=\"seasonData.season_type\" ng-maxlength=\"10\" required>\n" +
    "      <span ng-show=\"hasError(seasonForm.seasonType)\" class=\"glyphicon glyphicon-remove form-control-feedback\"></span>\n" +
    "    </div>\n" +
    "    <div class=\"form-group\">\n" +
    "      <label class=\"control-label\">Starts At (Local Time):</label>\n" +
    "      <div class=\"dropdown\" is-open=\"startsAtDropdown.isopen\">\n" +
    "        <a class=\"dropdown-toggle\" role=\"button\" data-toggle=\"dropdown\" data-target=\"#\" href=\"#\">\n" +
    "          <div class=\"input-group\">\n" +
    "            <input type=\"text\" class=\"form-control\" formatted-date data-ng-model=\"seasonData.starts_at\" ng-required=\"true\" ng-disabled=\"true\">\n" +
    "            <span class=\"input-group-addon\"><i class=\"glyphicon glyphicon-calendar\"></i></span>\n" +
    "          </div>\n" +
    "          <small>Set to future if season is not ready to go live yet</small>\n" +
    "        </a>\n" +
    "        <ul class=\"dropdown-menu\" role=\"menu\" aria-labelledby=\"dLabel\">\n" +
    "          <datetimepicker data-ng-model=\"seasonData.starts_at\" data-on-set-time=\"closeStartsAt()\" data-datetimepicker-config=\"{ minuteStep: 5 }\"/>\n" +
    "        </ul>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "    <div class=\"form-group\">\n" +
    "      <label class=\"control-label\">Ends At (Local Time):</label>\n" +
    "      <div class=\"dropdown\" is-open=\"endsAtDropdown.isopen\">\n" +
    "        <a class=\"dropdown-toggle\" role=\"button\" data-toggle=\"dropdown\" data-target=\"#\" href=\"#\">\n" +
    "          <div class=\"input-group\">\n" +
    "            <input type=\"text\" class=\"form-control\" formatted-date data-ng-model=\"seasonData.ends_at\" ng-required=\"true\" ng-disabled=\"true\">\n" +
    "            <span class=\"input-group-addon\"><i class=\"glyphicon glyphicon-calendar\"></i></span>\n" +
    "          </div>\n" +
    "          <small>Should be the end date of the season's last week</small>\n" +
    "        </a>\n" +
    "        <ul class=\"dropdown-menu\" role=\"menu\" aria-labelledby=\"dLabel\">\n" +
    "          <datetimepicker data-ng-model=\"seasonData.ends_at\" data-on-set-time=\"closeEndsAt()\" data-datetimepicker-config=\"{ minuteStep: 5 }\"/>\n" +
    "        </ul>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "    <div class=\"form-group\">\n" +
    "      <input id=\"archive\" name=\"archive\" type=\"checkbox\" ng-model=\"seasonData.archive\"> Archive this season\n" +
    "    </div>\n" +
    "  </form>\n" +
    "</div>\n" +
    "<div class=\"modal-footer\">\n" +
    "  <button class=\"btn btn-default\" ng-click=\"cancel()\">Cancel</button>\n" +
    "  <button class=\"btn btn-primary\" ng-disabled=\"seasonForm.$invalid\" ng-click=\"updateSeason(seasonData)\">Update</button>\n" +
    "</div>");
}]);

angular.module("modules/private/admin/seasons/season/new/admin.season.new.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("modules/private/admin/seasons/season/new/admin.season.new.tpl.html",
    "<div class=\"modal-header\">\n" +
    "  <button type=\"button\" class=\"close\" ng-click=\"cancel()\"><span aria-hidden=\"true\">&times;</span><span class=\"sr-only\">Close</span></button>\n" +
    "  <h3 class=\"modal-title\">Create Season</h3>\n" +
    "</div>\n" +
    "<div class=\"modal-body\">\n" +
    "  <form name=\"newSeasonForm\" role=\"form\" novalidate>\n" +
    "    <div class=\"form-group\" ng-class=\"{'has-error': hasError(newSeasonForm.seasonName), 'has-feedback': hasError(newSeasonForm.seasonName)}\">\n" +
    "      <label class=\"control-label\" for=\"seasonName\">Season name:\n" +
    "        <small ng-show=\"hasPropertyError(newSeasonForm.seasonName, 'required')\">[ Required ]</small>\n" +
    "        <small ng-show=\"hasPropertyError(newSeasonForm.seasonName, 'maxlength')\">[ Too Long ]</small>\n" +
    "      </label>\n" +
    "      <input id=\"seasonName\" name=\"seasonName\" type=\"text\" class=\"form-control\" ng-model=\"newSeasonData.name\" ng-maxlength=\"20\" required>\n" +
    "      <span ng-show=\"hasError(newSeasonForm.seasonName)\" class=\"glyphicon glyphicon-remove form-control-feedback\"></span>\n" +
    "    </div>\n" +
    "    <div class=\"form-group\" ng-class=\"{'has-error': hasError(newSeasonForm.seasonType), 'has-feedback': hasError(newSeasonForm.seasonType)}\">\n" +
    "      <label class=\"control-label\" for=\"seasonType\">Season type (NBA, NFL, etc):\n" +
    "        <small ng-show=\"hasPropertyError(newSeasonForm.seasonType, 'required')\">[ Required ]</small>\n" +
    "        <small ng-show=\"hasPropertyError(newSeasonForm.seasonType, 'maxlength')\">[ Too Long ]</small>\n" +
    "      </label>\n" +
    "      <input id=\"seasonType\" name=\"seasonType\" type=\"text\" class=\"form-control\" ng-model=\"newSeasonData.season_type\" ng-maxlength=\"10\" required>\n" +
    "      <span ng-show=\"hasError(newSeasonForm.seasonType)\" class=\"glyphicon glyphicon-remove form-control-feedback\"></span>\n" +
    "    </div>\n" +
    "    <div class=\"form-group\">\n" +
    "      <label class=\"control-label\">Starts At (Local Time):</label>\n" +
    "      <div class=\"dropdown\" is-open=\"startsAtDropdown.isopen\">\n" +
    "        <a class=\"dropdown-toggle\" role=\"button\" data-toggle=\"dropdown\" data-target=\"#\" href=\"#\">\n" +
    "          <div class=\"input-group\">\n" +
    "            <input type=\"text\" class=\"form-control\" formatted-date data-ng-model=\"newSeasonData.starts_at\" ng-required=\"true\" ng-disabled=\"true\">\n" +
    "            <span class=\"input-group-addon\"><i class=\"glyphicon glyphicon-calendar\"></i></span>\n" +
    "          </div>\n" +
    "          <small>Set to future if season is not ready to go live yet</small>\n" +
    "        </a>\n" +
    "        <ul class=\"dropdown-menu\" role=\"menu\" aria-labelledby=\"dLabel\">\n" +
    "          <datetimepicker data-ng-model=\"newSeasonData.starts_at\" data-on-set-time=\"closeStartsAt()\" data-datetimepicker-config=\"{ minuteStep: 5 }\"/>\n" +
    "        </ul>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "    <div class=\"form-group\">\n" +
    "      <label class=\"control-label\">Ends At (Local Time):</label>\n" +
    "      <div class=\"dropdown\" is-open=\"endsAtDropdown.isopen\">\n" +
    "        <a class=\"dropdown-toggle\" role=\"button\" data-toggle=\"dropdown\" data-target=\"#\" href=\"#\">\n" +
    "          <div class=\"input-group\">\n" +
    "            <input type=\"text\" class=\"form-control\" formatted-date data-ng-model=\"newSeasonData.ends_at\" ng-required=\"true\" ng-disabled=\"true\">\n" +
    "            <span class=\"input-group-addon\"><i class=\"glyphicon glyphicon-calendar\"></i></span>\n" +
    "          </div>\n" +
    "          <small>Should be the end date of the season's last week</small>\n" +
    "        </a>\n" +
    "        <ul class=\"dropdown-menu\" role=\"menu\" aria-labelledby=\"dLabel\">\n" +
    "          <datetimepicker data-ng-model=\"newSeasonData.ends_at\" data-on-set-time=\"closeEndsAt()\" data-datetimepicker-config=\"{ minuteStep: 5 }\"/>\n" +
    "        </ul>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </form>\n" +
    "</div>\n" +
    "<div class=\"modal-footer\">\n" +
    "  <button class=\"btn btn-default\" ng-click=\"cancel()\">Cancel</button>\n" +
    "  <button class=\"btn btn-primary\" ng-disabled=\"newSeasonForm.$invalid\" ng-click=\"createSeason(newSeasonData)\">Create</button>\n" +
    "</div>");
}]);

angular.module("modules/private/admin/squads/admin.squads.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("modules/private/admin/squads/admin.squads.tpl.html",
    "<div class=\"squads-header-row row\">\n" +
    "  <div class=\"col-sm-9 col-md-9\">\n" +
    "    <h3 class=\"squads-header\">Manage Squads</h3>\n" +
    "  </div>\n" +
    "  <div class=\"col-sm-3 col-md-3\">\n" +
    "    <div class=\"squads-btn-group\">\n" +
    "      <button type=\"button\" class=\"create-squad-btn btn btn-primary\" ng-click=\"createSquad()\">Create Squad</button>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "</div>\n" +
    "<hr>\n" +
    "<div class=\"squads-tabs\">\n" +
    "  <ul class=\"nav nav-tabs\">\n" +
    "    <li class=\"active\"><a>Squads [ {{(squads | filter:search:strict).length}} ]</a></li>\n" +
    "  </ul>\n" +
    "  <div class=\"squad-types\">\n" +
    "    <select class=\"form-control\" ng-model=\"selectedSquadType\" ng-options=\"squadType as squadType for squadType in squadTypes\">\n" +
    "      <option value=\"\">All Squad Types</option>\n" +
    "    </select>\n" +
    "  </div>\n" +
    "  <div class=\"input-group custom-search-form\">\n" +
    "    <input type=\"text\" class=\"form-control\" placeholder=\"Search...\" ng-model=\"query\">\n" +
    "    <span class=\"input-group-btn\">\n" +
    "      <button class=\"btn btn-default\" type=\"button\"><span class=\"glyphicon glyphicon-search\"></span></button>\n" +
    "    </span>\n" +
    "  </div>\n" +
    "</div>\n" +
    "<div class=\"squads list-group\">\n" +
    "  <a ng-repeat=\"squad in squads | filter:search:strict\" ng-click=\"editSquad(squad)\" class=\"list-group-item\">\n" +
    "    <div class=\"row\">\n" +
    "      <div class=\"squad-display-name col-sm-6 col-md-6\">{{squad.name}} [ {{squad.abbrev}} ]<br><span class=\"squad-record\">{{squad.record}}</span></div>\n" +
    "      <div class=\"squad-type col-sm-6 col-md-6\">{{squad.squad_type}}<br>Seed: {{squad.seed}}</div>\n" +
    "    </div>\n" +
    "  </a>\n" +
    "</div>");
}]);

angular.module("modules/private/admin/squads/edit/admin.squads.edit.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("modules/private/admin/squads/edit/admin.squads.edit.tpl.html",
    "<div class=\"modal-header\">\n" +
    "  <button type=\"button\" class=\"close\" ng-click=\"cancel()\"><span aria-hidden=\"true\">&times;</span><span class=\"sr-only\">Close</span></button>\n" +
    "  <h3 class=\"modal-title\">Edit Squad</h3>\n" +
    "</div>\n" +
    "<div class=\"modal-body\">\n" +
    "  <form name=\"squadForm\" role=\"form\" novalidate>\n" +
    "    <div class=\"form-group\" ng-class=\"{'has-error': hasError(squadForm.squadName), 'has-feedback': hasError(squadForm.squadName)}\">\n" +
    "      <label class=\"control-label\" for=\"squadName\">Squad name\n" +
    "        <small ng-show=\"hasPropertyError(squadForm.squadName, 'required')\">[ Required ]</small>\n" +
    "        <small ng-show=\"hasPropertyError(squadForm.squadName, 'maxlength')\">[ Too Long ]</small>\n" +
    "      </label>\n" +
    "      <input id=\"squadName\" name=\"squadName\" type=\"text\" class=\"form-control\" ng-model=\"squadData.name\" ng-maxlength=\"30\" required>\n" +
    "      <span ng-show=\"hasError(squadForm.squadName)\" class=\"glyphicon glyphicon-remove form-control-feedback\"></span>\n" +
    "    </div>\n" +
    "    <div class=\"form-group\" ng-class=\"{'has-error': hasError(squadForm.squadShort), 'has-feedback': hasError(squadForm.squadShort)}\">\n" +
    "      <label class=\"control-label\" for=\"squadShort\">Short Name\n" +
    "        <small ng-show=\"hasPropertyError(squadForm.squadShort, 'required')\">[ Required ]</small>\n" +
    "        <small ng-show=\"hasPropertyError(squadForm.squadShort, 'maxlength')\">[ Too Long ]</small>\n" +
    "      </label>\n" +
    "      <input id=\"squadShort\" name=\"squadShort\" type=\"text\" class=\"form-control\" ng-model=\"squadData.short\" ng-maxlength=\"30\" required>\n" +
    "      <span ng-show=\"hasError(squadForm.squadShort)\" class=\"glyphicon glyphicon-remove form-control-feedback\"></span>\n" +
    "    </div>\n" +
    "    <div class=\"form-group\" ng-class=\"{'has-error': hasError(squadForm.squadAbbrev), 'has-feedback': hasError(squadForm.squadAbbrev)}\">\n" +
    "      <label class=\"control-label\" for=\"squadAbbrev\">Abbreviation\n" +
    "        <small ng-show=\"hasPropertyError(squadForm.squadAbbrev, 'required')\">[ Required ]</small>\n" +
    "        <small ng-show=\"hasPropertyError(squadForm.squadAbbrev, 'maxlength')\">[ Too Long ]</small>\n" +
    "      </label>\n" +
    "      <input id=\"squadAbbrev\" name=\"squadAbbrev\" type=\"text\" class=\"form-control\" ng-model=\"squadData.abbrev\" ng-maxlength=\"30\" required>\n" +
    "      <span ng-show=\"hasError(squadForm.squadAbbrev)\" class=\"glyphicon glyphicon-remove form-control-feedback\"></span>\n" +
    "    </div>\n" +
    "    <div class=\"form-group\" ng-class=\"{'has-error': hasError(squadForm.squadType), 'has-feedback': hasError(squadForm.squadType)}\">\n" +
    "      <label class=\"control-label\" for=\"squadType\">Type (NBA, NFL, etc)\n" +
    "        <small ng-show=\"hasPropertyError(squadForm.squadType, 'required')\">[ Required ]</small>\n" +
    "        <small ng-show=\"hasPropertyError(squadForm.squadType, 'maxlength')\">[ Too Long ]</small>\n" +
    "      </label>\n" +
    "      <input id=\"squadType\" name=\"squadType\" type=\"text\" class=\"form-control\" ng-model=\"squadData.squad_type\" ng-maxlength=\"30\" required>\n" +
    "      <span ng-show=\"hasError(squadForm.squadType)\" class=\"glyphicon glyphicon-remove form-control-feedback\"></span>\n" +
    "    </div>\n" +
    "    <div class=\"form-group\" ng-class=\"{'has-error': hasError(squadForm.wins), 'has-feedback': hasError(squadForm.wins)}\">\n" +
    "      <label class=\"control-label\" for=\"wins\">Wins\n" +
    "        <small ng-show=\"hasPropertyError(squadForm.wins, 'required')\">[ Number Required ]</small>\n" +
    "        <small ng-show=\"hasPropertyError(squadForm.wins, 'min')\">[ Zero or greater ]</small>\n" +
    "      </label>\n" +
    "      <input id=\"wins\" name=\"wins\" type=\"number\" placeholder=\"Greater than zero\" min=\"0\" class=\"form-control\" ng-model=\"squadData.wins\" select-on-click required>\n" +
    "      <span ng-show=\"hasError(squadForm.wins)\" class=\"glyphicon glyphicon-remove form-control-feedback\"></span>\n" +
    "    </div>\n" +
    "    <div class=\"form-group\" ng-class=\"{'has-error': hasError(squadForm.losses), 'has-feedback': hasError(squadForm.losses)}\">\n" +
    "      <label class=\"control-label\" for=\"wins\">Losses\n" +
    "        <small ng-show=\"hasPropertyError(squadForm.losses, 'required')\">[ Number Required ]</small>\n" +
    "        <small ng-show=\"hasPropertyError(squadForm.losses, 'min')\">[ Zero or greater ]</small>\n" +
    "      </label>\n" +
    "      <input id=\"losses\" name=\"losses\" type=\"number\" placeholder=\"Greater than zero\" min=\"0\" class=\"form-control\" ng-model=\"squadData.losses\" select-on-click required>\n" +
    "      <span ng-show=\"hasError(squadForm.losses)\" class=\"glyphicon glyphicon-remove form-control-feedback\"></span>\n" +
    "    </div>\n" +
    "    <div class=\"form-group\" ng-class=\"{'has-error': hasError(squadForm.ties), 'has-feedback': hasError(squadForm.ties)}\">\n" +
    "      <label class=\"control-label\" for=\"ties\">Ties\n" +
    "        <small ng-show=\"hasPropertyError(squadForm.ties, 'required')\">[ Number Required ]</small>\n" +
    "        <small ng-show=\"hasPropertyError(squadForm.ties, 'min')\">[ Zero or greater ]</small>\n" +
    "      </label>\n" +
    "      <input id=\"ties\" name=\"ties\" type=\"number\" placeholder=\"Greater than zero\" min=\"0\" class=\"form-control\" ng-model=\"squadData.ties\" select-on-click required>\n" +
    "      <span ng-show=\"hasError(squadForm.ties)\" class=\"glyphicon glyphicon-remove form-control-feedback\"></span>\n" +
    "    </div>\n" +
    "    <div class=\"form-group\" ng-class=\"{'has-error': hasError(squadForm.seed), 'has-feedback': hasError(squadForm.seed)}\">\n" +
    "      <label class=\"control-label\" for=\"seed\">Seed\n" +
    "        <small ng-show=\"hasPropertyError(squadForm.seed, 'required')\">[ Number Required ]</small>\n" +
    "        <small ng-show=\"hasPropertyError(squadForm.seed, 'min')\">[ Zero or greater ]</small>\n" +
    "      </label>\n" +
    "      <input id=\"seed\" name=\"seed\" type=\"number\" placeholder=\"Greater than zero\" min=\"0\" class=\"form-control\" ng-model=\"squadData.seed\" select-on-click required>\n" +
    "      <span ng-show=\"hasError(squadForm.seed)\" class=\"glyphicon glyphicon-remove form-control-feedback\"></span>\n" +
    "    </div>\n" +
    "  </form>\n" +
    "</div>\n" +
    "<div class=\"modal-footer\">\n" +
    "  <button class=\"btn btn-default\" ng-click=\"cancel()\">Cancel</button>\n" +
    "  <button class=\"btn btn-primary\" ng-disabled=\"squadForm.$invalid\" ng-click=\"editSquad(squadData)\">Edit</button>\n" +
    "</div>");
}]);

angular.module("modules/private/admin/squads/new/admin.squads.new.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("modules/private/admin/squads/new/admin.squads.new.tpl.html",
    "<div class=\"modal-header\">\n" +
    "  <button type=\"button\" class=\"close\" ng-click=\"cancel()\"><span aria-hidden=\"true\">&times;</span><span class=\"sr-only\">Close</span></button>\n" +
    "  <h3 class=\"modal-title\">Create Squad</h3>\n" +
    "</div>\n" +
    "<div class=\"modal-body\">\n" +
    "  <form name=\"squadForm\" role=\"form\" novalidate>\n" +
    "    <div class=\"form-group\" ng-class=\"{'has-error': hasError(squadForm.squadName), 'has-feedback': hasError(squadForm.squadName)}\">\n" +
    "      <label class=\"control-label\" for=\"squadName\">Squad name\n" +
    "        <small ng-show=\"hasPropertyError(squadForm.squadName, 'required')\">[ Required ]</small>\n" +
    "        <small ng-show=\"hasPropertyError(squadForm.squadName, 'maxlength')\">[ Too Long ]</small>\n" +
    "      </label>\n" +
    "      <input id=\"squadName\" name=\"squadName\" type=\"text\" class=\"form-control\" ng-model=\"squadData.name\" ng-maxlength=\"30\" required>\n" +
    "      <span ng-show=\"hasError(squadForm.squadName)\" class=\"glyphicon glyphicon-remove form-control-feedback\"></span>\n" +
    "    </div>\n" +
    "    <div class=\"form-group\" ng-class=\"{'has-error': hasError(squadForm.squadShort), 'has-feedback': hasError(squadForm.squadShort)}\">\n" +
    "      <label class=\"control-label\" for=\"squadShort\">Short Name\n" +
    "        <small ng-show=\"hasPropertyError(squadForm.squadShort, 'required')\">[ Required ]</small>\n" +
    "        <small ng-show=\"hasPropertyError(squadForm.squadShort, 'maxlength')\">[ Too Long ]</small>\n" +
    "      </label>\n" +
    "      <input id=\"squadShort\" name=\"squadShort\" type=\"text\" class=\"form-control\" ng-model=\"squadData.short\" ng-maxlength=\"30\" required>\n" +
    "      <span ng-show=\"hasError(squadForm.squadShort)\" class=\"glyphicon glyphicon-remove form-control-feedback\"></span>\n" +
    "    </div>\n" +
    "    <div class=\"form-group\" ng-class=\"{'has-error': hasError(squadForm.squadAbbrev), 'has-feedback': hasError(squadForm.squadAbbrev)}\">\n" +
    "      <label class=\"control-label\" for=\"squadAbbrev\">Abbreviation\n" +
    "        <small ng-show=\"hasPropertyError(squadForm.squadAbbrev, 'required')\">[ Required ]</small>\n" +
    "        <small ng-show=\"hasPropertyError(squadForm.squadAbbrev, 'maxlength')\">[ Too Long ]</small>\n" +
    "      </label>\n" +
    "      <input id=\"squadAbbrev\" name=\"squadAbbrev\" type=\"text\" class=\"form-control\" ng-model=\"squadData.abbrev\" ng-maxlength=\"30\" required>\n" +
    "      <span ng-show=\"hasError(squadForm.squadAbbrev)\" class=\"glyphicon glyphicon-remove form-control-feedback\"></span>\n" +
    "    </div>\n" +
    "    <div class=\"form-group\" ng-class=\"{'has-error': hasError(squadForm.squadType), 'has-feedback': hasError(squadForm.squadType)}\">\n" +
    "      <label class=\"control-label\" for=\"squadType\">Type (NBA, NFL, etc)\n" +
    "        <small ng-show=\"hasPropertyError(squadForm.squadType, 'required')\">[ Required ]</small>\n" +
    "        <small ng-show=\"hasPropertyError(squadForm.squadType, 'maxlength')\">[ Too Long ]</small>\n" +
    "      </label>\n" +
    "      <input id=\"squadType\" name=\"squadType\" type=\"text\" class=\"form-control\" ng-model=\"squadData.squad_type\" ng-maxlength=\"30\" required>\n" +
    "      <span ng-show=\"hasError(squadForm.squadType)\" class=\"glyphicon glyphicon-remove form-control-feedback\"></span>\n" +
    "    </div>\n" +
    "  </form>\n" +
    "</div>\n" +
    "<div class=\"modal-footer\">\n" +
    "  <button class=\"btn btn-default\" ng-click=\"cancel()\">Cancel</button>\n" +
    "  <button class=\"btn btn-primary\" ng-disabled=\"squadForm.$invalid\" ng-click=\"createSquad(squadData)\">Create</button>\n" +
    "</div>");
}]);

angular.module("modules/private/admin/week/admin.week.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("modules/private/admin/week/admin.week.tpl.html",
    "<div class=\"games-header-row row\">\n" +
    "  <div class=\"col-sm-6 col-md-6\">\n" +
    "    <h3><i class=\"fa fa-check fa-fw\" ng-show=\"weekData.complete === true\" title=\"Week complete\"></i> {{weekData.season_type}} {{weekData.display}} <small><a ng-click=\"editWeek(weekData)\">[ edit ]</a></small><br>\n" +
    "      <small>Reminder Sent: <span ng-show=\"!weekData.reminder_sent_at\">N/A</span><span ng-show=\"weekData.reminder_sent_at\">{{dateFormat(weekData.reminder_sent_at, \"ddd mmm d h:MM TT (Z)\")}}</span></small>\n" +
    "    </h3>\n" +
    "  </div>\n" +
    "  <div class=\"col-sm-6 col-md-6\">\n" +
    "    <div class=\"week-btn-group\">\n" +
    "      <button type=\"button\" class=\"send-reminder-btn btn btn-default\" ng-click=\"confirmSendReminder(weekData)\">Send Reminder</button>\n" +
    "      <button type=\"button\" class=\"create-game-btn btn btn-primary\" ng-click=\"createGame(weekData, games)\">Create Game</button>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "</div>\n" +
    "<div class=\"games-tab\">\n" +
    "  <ul class=\"nav nav-tabs\">\n" +
    "    <li class=\"active\"><a>Games [ {{games.length}} ]</a></li>\n" +
    "  </ul>\n" +
    "  <div class=\"input-group custom-search-form filter-league-join\">\n" +
    "    <input type=\"text\" class=\"form-control\" placeholder=\"Search games...\" ng-model=\"gameQuery\">\n" +
    "    <span class=\"input-group-btn\">\n" +
    "      <button class=\"btn btn-default\" type=\"button\"><span class=\"glyphicon glyphicon-search\"></span></button>\n" +
    "    </span>\n" +
    "  </div>\n" +
    "</div>\n" +
    "<div class=\"week-games list-group\">\n" +
    "  <a ng-repeat=\"game in games | filter:search:strict\" ng-click=\"editGame(game, weekData)\" class=\"list-group-item\">\n" +
    "    <div class=\"row\">\n" +
    "      <div class=\"game-display-name col-sm-6 col-md-6\">\n" +
    "        <i class=\"fa fa-check fa-fw\" ng-show=\"game.complete\" title=\"Game complete\"></i>\n" +
    "        <i class=\"fa fa-clock-o fa-fw\" style=\"color: #ff472e;\" ng-show=\"game.postponed && !game.complete\" title=\"Game postponed\"></i>\n" +
    "        <span ng-show=\"game.playoff\">*</span>{{game.display}}<br>\n" +
    "        <span class=\"game-starts\"><span style=\"color:#FF0000;\" ng-show=\"game.tbd\">TBD</span><span ng-show=\"!game.tbd\">{{dateFormat(game.starts_at, \"ddd, mmm d yyyy h:MM TT (Z)\")}}</span><span ng-show=\"game.if_necessary\"> *If Necessary</span><span ng-show=\"game.postponed\"> | *PPD</span></span></div>\n" +
    "      <div class=\"game-score col-sm-6 col-md-6\">\n" +
    "        <span ng-show=\"game.note.length > 0\">{{game.note}} - </span>{{game.squads[0].name}}: {{game.visiting_squad_score}} | {{game.squads[1].name}}: {{game.home_squad_score}} <span>{{game.ot_display}}</span><br>\n" +
    "        Picks: {{game.pick_count}}\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </a>\n" +
    "</div>\n" +
    "<hr>\n" +
    "<div class=\"complete-week-btn-group\">\n" +
    "  <button type=\"button\" class=\"complete-week-btn btn btn-danger\" ng-click=\"confirmWeekComplete(weekData)\">Complete Week</button>\n" +
    "</div>\n" +
    "");
}]);

angular.module("modules/private/admin/week/edit/admin.week.edit.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("modules/private/admin/week/edit/admin.week.edit.tpl.html",
    "<div class=\"modal-header\">\n" +
    "  <button type=\"button\" class=\"close\" ng-click=\"cancel()\"><span aria-hidden=\"true\">&times;</span><span class=\"sr-only\">Close</span></button>\n" +
    "  <h3 class=\"modal-title\">Edit Week</h3>\n" +
    "</div>\n" +
    "<div class=\"modal-body\">\n" +
    "  <form name=\"editWeekForm\" class=\"edit-week-form form-horizontal\" role=\"form\" novalidate>\n" +
    "    <div class=\"form-group\" ng-class=\"{'has-error': hasError(editWeekForm.weekName), 'has-feedback': hasError(editWeekForm.weekName)}\">\n" +
    "      <label for=\"weekName\" class=\"col-sm-3 control-label\">Name:</label>\n" +
    "      <div class=\"col-sm-9\">\n" +
    "        <input id=\"weekName\" name=\"weekName\" type=\"text\" class=\"form-control\" ng-model=\"weekData.name\" ng-maxlength=\"30\" required>\n" +
    "        <small class=\"input-error\" ng-show=\"hasPropertyError(editWeekForm.weekName, 'required')\">Required</small>\n" +
    "        <small class=\"input-error\" ng-show=\"hasPropertyError(editWeekForm.weekName, 'maxlength')\">Too Long</small>\n" +
    "        <span ng-show=\"hasError(editWeekForm.weekName)\" class=\"glyphicon glyphicon-remove form-control-feedback\"></span>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "    <div class=\"form-group\">\n" +
    "      <label for=\"weekType\" class=\"col-sm-3 control-label\">Week Type:</label>\n" +
    "      <div class=\"col-sm-9\">\n" +
    "        <select id=\"weekType\" name=\"weekType\" class=\"form-control\" ng-model=\"weekData.week_type_id\" ng-options=\"weekType.id as weekType.description for weekType in weekTypes\"></select>\n" +
    "        <small>week_type_id: {{weekData.week_type_id}}</small>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "    <div class=\"form-group\">\n" +
    "      <label class=\"col-sm-3 control-label\">Starts At:</label>\n" +
    "      <div class=\"col-sm-9\">\n" +
    "        <div class=\"dropdown\" is-open=\"startsAtDropdown.isopen\">\n" +
    "          <a class=\"dropdown-toggle\" role=\"button\" data-toggle=\"dropdown\" data-target=\"#\" href=\"#\">\n" +
    "            <div class=\"input-group\">\n" +
    "              <input type=\"text\" class=\"form-control\" formatted-date data-ng-model=\"weekData.starts_at\" ng-required=\"true\" ng-disabled=\"true\">\n" +
    "              <span class=\"input-group-addon\"><i class=\"glyphicon glyphicon-calendar\"></i></span>\n" +
    "            </div>\n" +
    "          </a>\n" +
    "          <ul class=\"dropdown-menu\" role=\"menu\" aria-labelledby=\"dLabel\">\n" +
    "            <datetimepicker data-ng-model=\"weekData.starts_at\" data-on-set-time=\"closeStartsAt()\" data-datetimepicker-config=\"{ minuteStep: 5 }\"/>\n" +
    "          </ul>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "    <div class=\"form-group\">\n" +
    "      <label class=\"col-sm-3 control-label\">Ends At:</label>\n" +
    "      <div class=\"col-sm-9\">\n" +
    "        <div class=\"dropdown\" is-open=\"endsAtDropdown.isopen\">\n" +
    "          <a class=\"dropdown-toggle\" role=\"button\" data-toggle=\"dropdown\" data-target=\"#\" href=\"#\">\n" +
    "            <div class=\"input-group\">\n" +
    "              <input type=\"text\" class=\"form-control\" formatted-date data-ng-model=\"weekData.ends_at\" ng-required=\"true\" ng-disabled=\"true\">\n" +
    "              <span class=\"input-group-addon\"><i class=\"glyphicon glyphicon-calendar\"></i></span>\n" +
    "            </div>\n" +
    "          </a>\n" +
    "          <ul class=\"dropdown-menu\" role=\"menu\" aria-labelledby=\"dLabel\">\n" +
    "            <datetimepicker data-ng-model=\"weekData.ends_at\" data-on-set-time=\"closeEndsAt()\" data-datetimepicker-config=\"{ minuteStep: 5 }\"/>\n" +
    "          </ul>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </form>\n" +
    "</div>\n" +
    "<div class=\"modal-footer\">\n" +
    "  <button class=\"btn btn-default\" ng-click=\"cancel()\">Cancel</button>\n" +
    "  <button class=\"btn btn-primary\" ng-disabled=\"editWeekForm.$invalid\" ng-click=\"editWeek(weekData)\">Update</button>\n" +
    "</div>");
}]);

angular.module("modules/private/admin/week/new/admin.week.new.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("modules/private/admin/week/new/admin.week.new.tpl.html",
    "<div class=\"modal-header\">\n" +
    "  <button type=\"button\" class=\"close\" ng-click=\"cancel()\"><span aria-hidden=\"true\">&times;</span><span class=\"sr-only\">Close</span></button>\n" +
    "  <h3 class=\"modal-title\">Create Week</h3>\n" +
    "</div>\n" +
    "<div class=\"modal-body\">\n" +
    "  <form name=\"weekForm\" class=\"new-week-form form-horizontal\" role=\"form\" novalidate>\n" +
    "    <div class=\"form-group\" ng-class=\"{'has-error': hasError(weekForm.weekName), 'has-feedback': hasError(weekForm.weekName)}\">\n" +
    "      <label for=\"weekName\" class=\"col-sm-3 control-label\">Name:</label>\n" +
    "      <div class=\"col-sm-9\">\n" +
    "        <input id=\"weekName\" name=\"weekName\" type=\"text\" class=\"form-control\" ng-model=\"weekData.name\" ng-maxlength=\"30\" required>\n" +
    "        <small class=\"input-error\" ng-show=\"hasPropertyError(weekForm.weekName, 'required')\">Required</small>\n" +
    "        <small class=\"input-error\" ng-show=\"hasPropertyError(weekForm.weekName, 'maxlength')\">Too Long</small>\n" +
    "        <span ng-show=\"hasError(weekForm.weekName)\" class=\"glyphicon glyphicon-remove form-control-feedback\"></span>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "    <div class=\"form-group\">\n" +
    "      <label for=\"weekType\" class=\"col-sm-3 control-label\">Week Type (Use 1 & 2):</label>\n" +
    "      <div class=\"col-sm-9\">\n" +
    "        <select id=\"weekType\" name=\"weekType\" class=\"form-control\" ng-model=\"weekData.week_type_id\" ng-options=\"weekType.id as weekType.description for weekType in weekTypes\"></select>\n" +
    "        <small>week_type_id: {{weekData.week_type_id}}</small>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "    <div class=\"form-group\">\n" +
    "      <label class=\"col-sm-3 control-label\">Starts At:</label>\n" +
    "      <div class=\"col-sm-9\">\n" +
    "        <div class=\"dropdown\" is-open=\"startsAtDropdown.isopen\">\n" +
    "          <a class=\"dropdown-toggle\" role=\"button\" data-toggle=\"dropdown\" data-target=\"#\" href=\"#\">\n" +
    "            <div class=\"input-group\">\n" +
    "              <input type=\"text\" class=\"form-control\" formatted-date data-ng-model=\"weekData.starts_at\" ng-required=\"true\" ng-disabled=\"true\">\n" +
    "              <span class=\"input-group-addon\"><i class=\"glyphicon glyphicon-calendar\"></i></span>\n" +
    "            </div>\n" +
    "          </a>\n" +
    "          <ul class=\"dropdown-menu\" role=\"menu\" aria-labelledby=\"dLabel\">\n" +
    "            <datetimepicker data-ng-model=\"weekData.starts_at\" data-on-set-time=\"closeStartsAt()\" data-datetimepicker-config=\"{ minuteStep: 5 }\"/>\n" +
    "          </ul>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "    <div class=\"form-group\">\n" +
    "      <label class=\"col-sm-3 control-label\">Ends At:</label>\n" +
    "      <div class=\"col-sm-9\">\n" +
    "        <div class=\"dropdown\" is-open=\"endsAtDropdown.isopen\">\n" +
    "          <a class=\"dropdown-toggle\" role=\"button\" data-toggle=\"dropdown\" data-target=\"#\" href=\"#\">\n" +
    "            <div class=\"input-group\">\n" +
    "              <input type=\"text\" class=\"form-control\" formatted-date data-ng-model=\"weekData.ends_at\" ng-required=\"true\" ng-disabled=\"true\">\n" +
    "              <span class=\"input-group-addon\"><i class=\"glyphicon glyphicon-calendar\"></i></span>\n" +
    "            </div>\n" +
    "          </a>\n" +
    "          <ul class=\"dropdown-menu\" role=\"menu\" aria-labelledby=\"dLabel\">\n" +
    "            <datetimepicker data-ng-model=\"weekData.ends_at\" data-on-set-time=\"closeEndsAt()\" data-datetimepicker-config=\"{ minuteStep: 5 }\"/>\n" +
    "          </ul>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </form>\n" +
    "</div>\n" +
    "<div class=\"modal-footer\">\n" +
    "  <button class=\"btn btn-default\" ng-click=\"cancel()\">Cancel</button>\n" +
    "  <button class=\"btn btn-primary\" ng-disabled=\"weekForm.$invalid\" ng-click=\"createWeek(weekData)\">Create</button>\n" +
    "</div>");
}]);

angular.module("modules/private/league/contact/league.contact.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("modules/private/league/contact/league.contact.tpl.html",
    "<div class=\"modal-header\">\n" +
    "  <button type=\"button\" class=\"close\" ng-click=\"cancel()\"><span aria-hidden=\"true\">&times;</span><span class=\"sr-only\">Close</span></button>\n" +
    "  <h3 class=\"modal-title\">Contact Commish</h3>\n" +
    "</div>\n" +
    "<div class=\"modal-body\">\n" +
    "  <form name=\"contactForm\" class=\"contact-form form-horizontal\" role=\"form\" novalidate>\n" +
    "    <div class=\"form-group\" ng-class=\"{'has-error': hasError(contactForm.message), 'has-feedback': hasError(contactForm.message)}\">\n" +
    "      <label for=\"message\" class=\"col-sm-2 control-label\">Message:</label>\n" +
    "      <div class=\"col-sm-10\">\n" +
    "        <textarea id=\"message\" name=\"message\" class=\"form-control\" placeholder=\"Send a direct message to the commish...\" rows=\"3\" maxlength=\"200\" ng-model=\"commishMessage\" required></textarea>\n" +
    "        <small class=\"input-error\" ng-show=\"hasPropertyError(contactForm.message, 'required')\">Required</small>\n" +
    "        <small class=\"input-error\" ng-show=\"hasPropertyError(contactForm.message, 'maxlength')\">Too Long</small>\n" +
    "        <span ng-show=\"hasError(contactForm.message)\" class=\"glyphicon glyphicon-remove form-control-feedback\"></span>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </form>\n" +
    "</div>\n" +
    "<div class=\"modal-footer\">\n" +
    "  <button class=\"btn btn-default\" ng-click=\"cancel()\">Cancel</button>\n" +
    "  <button class=\"btn btn-primary\" ng-disabled=\"contactForm.$pristine || contactForm.$invalid\" ng-click=\"contactCommish(leagueData, commishMessage)\">Send</button>\n" +
    "</div>");
}]);

angular.module("modules/private/league/edit/league.edit.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("modules/private/league/edit/league.edit.tpl.html",
    "<div class=\"edit-league-header-row row\">\n" +
    "  <div class=\"col-sm-12 col-md-12\">\n" +
    "    <h3>Edit {{leagueData.name}}</h3>\n" +
    "  </div>\n" +
    "</div>\n" +
    "<hr>\n" +
    "<form name=\"leagueForm\" class=\"edit-league-form\" role=\"form\" novalidate>\n" +
    "  <div class=\"row form-group product-chooser\">\n" +
    "    <div class=\"col-xs-12 col-sm-12 col-md-6 col-lg-6\">\n" +
    "      <div class=\"product-chooser-item\" ng-class=\"{'selected': leagueData.public == true}\" ng-click=\"leagueData.public = true\">\n" +
    "        <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\">\n" +
    "          <span class=\"title\"><i class=\"fa fa-unlock icon\"></i> Public League</span>\n" +
    "          <span class=\"description\">Anyone can join a public league. Members of a public league can also invite others to join the league.</span>\n" +
    "        </div>\n" +
    "        <div class=\"clear\"></div>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "    <div class=\"col-xs-12 col-sm-12 col-md-6 col-lg-6\">\n" +
    "      <div class=\"product-chooser-item\" ng-class=\"{'selected': leagueData.public == false}\" ng-click=\"leagueData.public = false\">\n" +
    "        <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\">\n" +
    "          <span class=\"title\"><i class=\"fa fa-lock icon\"></i> Private League</span>\n" +
    "          <span class=\"description\">An invite from the commish is required to join a private league. Only the commish can invite people to join the league.</span>\n" +
    "        </div>\n" +
    "        <div class=\"clear\"></div>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "  <div class=\"row form-group product-chooser\" ng-show=\"!leagueData.started\">\n" +
    "    <div class=\"col-xs-12 col-sm-12 col-md-6 col-lg-6\">\n" +
    "      <div class=\"product-chooser-item\" ng-class=\"{'selected': leagueData.elimination == false}\" ng-click=\"leagueData.max_picks_per_week = null; leagueData.elimination = false\">\n" +
    "        <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\">\n" +
    "          <span class=\"title\"><i class=\"fa fa-th-list\"></i> Pick'em Format</span>\n" +
    "          <span class=\"description\">Pick'em format allows teams to make one or more picks each week. The commish determines how many picks can be made each week.</span>\n" +
    "        </div>\n" +
    "        <div class=\"clear\"></div>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "    <div class=\"col-xs-12 col-sm-12 col-md-6 col-lg-6\">\n" +
    "      <div class=\"product-chooser-item\" ng-class=\"{'selected': leagueData.elimination == true}\" ng-click=\"leagueData.max_picks_per_week = 1; leagueData.elimination = true\">\n" +
    "        <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\">\n" +
    "          <span class=\"title\"><i class=\"fa fa-check\"></i> Survivor Format</span>\n" +
    "          <span class=\"description\">Survivor format requires a team to make a different pick each week. If you fail to pick a loser, your team is eliminated. The team with the most picks wins.</span>\n" +
    "        </div>\n" +
    "        <div class=\"clear\"></div>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "  <div class=\"edit-league-details\">\n" +
    "    <div class=\"row\" ng-show=\"leagueData.started\">\n" +
    "      <div class=\"col-sm-12 col-md-12\">\n" +
    "        <div class=\"form-group\">\n" +
    "          <label class=\"control-label\">League format</label>\n" +
    "          <input type=\"text\" class=\"form-control\" value=\"Pick'em [ no elimination ]\" ng-show=\"!leagueData.elimination\" ng-disabled=\"true\">\n" +
    "          <input type=\"text\" class=\"form-control\" value=\"Survivor [ single elimination ]\" ng-show=\"leagueData.elimination\" ng-disabled=\"true\">\n" +
    "        </div>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "    <div class=\"row\">\n" +
    "      <div class=\"col-sm-12 col-md-12\">\n" +
    "        <div class=\"form-group\">\n" +
    "          <label class=\"control-label\" for=\"maxPicks\">Picks per week</label>\n" +
    "          <select id=\"maxPicks\" name=\"maxPicks\" class=\"form-control\" ng-disabled=\"leagueData.elimination\" ng-model=\"leagueData.max_picks_per_week\" ng-options=\"maxPick.number as maxPick.display for maxPick in maxPicksPerWeek\"></select>\n" +
    "          <small class=\"input-error\" ng-show=\"leagueData.elimination\"><i class=\"fa fa-warning fa-fw\" title=\"Warning\"></i> Survivor leagues only allow 1 pick per week, no repeats</small>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "    <div class=\"row\" ng-show=\"leagueData.elimination\">\n" +
    "      <div class=\"col-sm-12 col-md-12\">\n" +
    "        <div class=\"form-group\">\n" +
    "          <label>\n" +
    "            <input type=\"checkbox\" ng-model=\"leagueData.eliminate_on_tie\" ng-disabled=\"leagueData.started\"> eliminate a team that picks a tie\n" +
    "          </label>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "    <hr>\n" +
    "    <div class=\"row\">\n" +
    "      <div class=\"col-sm-12 col-md-12\">\n" +
    "        <div class=\"form-group\" ng-class=\"{'has-error': hasError(leagueForm.leagueName), 'has-feedback': hasError(leagueForm.leagueName)}\">\n" +
    "          <label class=\"control-label\" for=\"leagueName\">League name\n" +
    "            <small ng-show=\"hasPropertyError(leagueForm.leagueName, 'required')\">[ Required ]</small>\n" +
    "            <small ng-show=\"hasPropertyError(leagueForm.leagueName, 'maxlength')\">[ Too Long ]</small>\n" +
    "          </label>\n" +
    "          <input id=\"leagueName\" name=\"leagueName\" type=\"text\" class=\"form-control\" ng-model=\"leagueData.name\" ng-maxlength=\"30\" required>\n" +
    "          <span ng-show=\"hasError(leagueForm.leagueName)\" class=\"glyphicon glyphicon-remove form-control-feedback\"></span>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "    <div class=\"row\">\n" +
    "      <div class=\"col-sm-12 col-md-12\">\n" +
    "        <div class=\"form-group\">\n" +
    "          <label class=\"control-label\">Season</label>\n" +
    "          <input id=\"seasonName\" name=\"seasonName\" type=\"text\" class=\"form-control\" ng-model=\"leagueData.season_name\" ng-disabled=\"true\">\n" +
    "        </div>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "    <div class=\"row\">\n" +
    "      <div class=\"col-sm-12 col-md-12\">\n" +
    "        <div class=\"form-group\">\n" +
    "          <label class=\"control-label\" for=\"startWeek\">Start week</label>\n" +
    "          <select id=\"startWeek\" name=\"startWeek\" class=\"form-control\" ng-show=\"!leagueData.started\" ng-model=\"leagueData.start_week_id\" ng-options=\"week.id as week.display for week in weeks\"></select>\n" +
    "          <input id=\"startWeekDisplay\" name=\"startWeekDisplay\" type=\"text\" class=\"form-control\" ng-show=\"leagueData.started\" ng-model=\"leagueData.start_week_display\" ng-disabled=\"true\">\n" +
    "        </div>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "    <div class=\"row\">\n" +
    "      <div class=\"col-sm-12 col-md-12\">\n" +
    "        <div class=\"form-group\" ng-class=\"{'has-error': hasError(leagueForm.maxTeams), 'has-feedback': hasError(leagueForm.maxTeams)}\">\n" +
    "          <label class=\"control-label\" for=\"maxTeams\">How many times can a user join?\n" +
    "            <small ng-show=\"hasPropertyError(leagueForm.maxTeams, 'required')\">[ Number Required ]</small>\n" +
    "            <small ng-show=\"hasPropertyError(leagueForm.maxTeams, 'min')\">[ 1 - 10 ]</small>\n" +
    "            <small ng-show=\"hasPropertyError(leagueForm.maxTeams, 'max')\">[ 1 - 10 ]</small>\n" +
    "          </label>\n" +
    "          <input id=\"maxTeams\" name=\"maxTeams\" type=\"number\" placeholder=\"Between 1 and 10 times\" min=\"1\" max=\"10\" class=\"form-control\" ng-model=\"leagueData.max_teams_per_user\" logh-focus required>\n" +
    "          <span ng-show=\"hasError(leagueForm.maxTeams)\" class=\"glyphicon glyphicon-remove form-control-feedback\"></span>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "    <div class=\"row\">\n" +
    "      <div class=\"col-sm-12 col-md-12\">\n" +
    "        <div class=\"form-group\">\n" +
    "          <label class=\"control-label\" for=\"message\">Message [ Optional ]</label>\n" +
    "          <textarea id=\"message\" name=\"message\" class=\"form-control\" placeholder=\"Enter a message for your league here. You can change it at any time.\" rows=\"2\" maxlength=\"500\" ng-model=\"leagueData.message\"></textarea>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "    <div class=\"edit-league-btn-group\">\n" +
    "      <button class=\"edit-league-btn btn btn-primary\" ng-disabled=\"leagueForm.$invalid || editBtnDisabled\" ng-click=\"updateLeague(leagueData)\">Update League</button>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "</form>\n" +
    "");
}]);

angular.module("modules/private/league/invite/league.invite.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("modules/private/league/invite/league.invite.tpl.html",
    "<div class=\"modal-header\">\n" +
    "  <button type=\"button\" class=\"close\" ng-click=\"cancel()\"><span aria-hidden=\"true\">&times;</span><span class=\"sr-only\">Close</span></button>\n" +
    "  <h3 class=\"modal-title\"><span ng-show=\"!leagueClosed\">Invite Friends</span><span ng-show=\"leagueClosed\">Invitations</span></h3>\n" +
    "</div>\n" +
    "<div class=\"modal-body\">\n" +
    "  <div ng-show=\"!leagueClosed\">\n" +
    "    <form name=\"inviteForm\" class=\"invite-form\" role=\"form\" novalidate>\n" +
    "      <div class=\"row\">\n" +
    "        <div class=\"col-sm-12 col-md-12\">\n" +
    "          <div class=\"form-group\" ng-class=\"{'has-error': hasError(inviteForm.emails), 'has-feedback': hasError(inviteForm.emails)}\">\n" +
    "            <label for=\"emails\" class=\"control-label\">Email(s):</label>\n" +
    "            <input id=\"emails\" name=\"emails\" type=\"text\" class=\"form-control\" placeholder=\"Seperate emails with a space...\" ng-model=\"invitation.email\" required>\n" +
    "            <small class=\"input-error\" ng-show=\"hasPropertyError(inviteForm.emails, 'required')\">Required</small>\n" +
    "            <span ng-show=\"hasError(inviteForm.emails)\" class=\"glyphicon glyphicon-remove form-control-feedback\"></span>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "      <div class=\"row\">\n" +
    "        <div class=\"col-sm-12 col-md-12\">\n" +
    "          <div class=\"form-group\" ng-class=\"{'has-error': hasError(inviteForm.message), 'has-feedback': hasError(inviteForm.message)}\">\n" +
    "            <label for=\"message\" class=\"control-label\">Message:</label>\n" +
    "            <textarea id=\"message\" name=\"message\" class=\"form-control\" placeholder=\"Enter a optional message to deliver with the invitation...\" rows=\"3\" maxlength=\"500\" ng-model=\"invitation.message\"></textarea>\n" +
    "            <small class=\"input-error\" ng-show=\"hasPropertyError(inviteForm.message, 'maxlength')\">Too Long</small>\n" +
    "            <span ng-show=\"hasError(inviteForm.message)\" class=\"glyphicon glyphicon-remove form-control-feedback\"></span>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "      <div class=\"row\">\n" +
    "        <div class=\"col-sm-6 col-md-6\">\n" +
    "          <button class=\"invite-reset-btn btn btn-default btn-block\" ng-click=\"resetInvite()\">Clear</button>\n" +
    "        </div>\n" +
    "        <div class=\"col-sm-6 col-md-6\">\n" +
    "          <button class=\"invite-send-btn btn btn-primary btn-block\" ng-disabled=\"inviteForm.$invalid\" ng-click=\"sendInvite(invitation)\">Send</button>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "    </form>\n" +
    "    <hr>\n" +
    "  </div>\n" +
    "  <div ng-show=\"isCommish\">\n" +
    "    <div class=\"invites-tab\">\n" +
    "      <ul class=\"nav nav-tabs\">\n" +
    "        <li class=\"active\"><a>Invites [ {{invitations.length}} ]</a></li>\n" +
    "      </ul>\n" +
    "      <span class=\"click-to-edit\" ng-show=\"!leagueClosed\">[ click invite to edit ]</span>\n" +
    "    </div>\n" +
    "    <div class=\"league-invites\">\n" +
    "      <div class=\"list-group\">\n" +
    "        <a ng-repeat=\"invite in invitations\" class=\"list-group-item\" ng-click=\"populateInvite(invite)\">\n" +
    "          <div class=\"row\">\n" +
    "            <div class=\"col-sm-12 col-md-12\">\n" +
    "              <i class=\"fa fa-check fa-fw\" ng-show=\"invite.accepted_at\" title=\"Accepted\"></i> {{invite.email}}\n" +
    "              <br>\n" +
    "              <span class=\"sent-date\"><span ng-show=\"!invite.accepted_at\">Sent: {{invite.updated_at}}</span><span ng-show=\"invite.accepted_at\">Joined: {{invite.accepted_at}}</span></span>\n" +
    "              <br>\n" +
    "              <span class=\"invitee\" ng-show=\"invite.invitee.length > 0\">Invitee: {{invite.invitee}}</span>\n" +
    "            </div>\n" +
    "          </div>\n" +
    "        </a>\n" +
    "      </div>\n" +
    "      <div class=\"no-picks-alert alert alert-info\" ng-show=\"invitations.length == 0\">\n" +
    "        No invites\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "</div>\n" +
    "<div class=\"modal-footer\">\n" +
    "  <button class=\"btn btn-default\" ng-click=\"cancel()\">Close</button>\n" +
    "</div>");
}]);

angular.module("modules/private/league/invite/request/league.invite.request.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("modules/private/league/invite/request/league.invite.request.tpl.html",
    "<div class=\"modal-header\">\n" +
    "  <button type=\"button\" class=\"close\" ng-click=\"cancel()\"><span aria-hidden=\"true\">&times;</span><span class=\"sr-only\">Close</span></button>\n" +
    "  <h3 class=\"modal-title\">Request Invite</h3>\n" +
    "</div>\n" +
    "<div class=\"modal-body\">\n" +
    "  <form name=\"requestInviteForm\" class=\"request-invite-form form-horizontal\" role=\"form\" novalidate>\n" +
    "    <div class=\"form-group\" ng-class=\"{'has-error': hasError(requestInviteForm.email), 'has-feedback': hasError(requestInviteForm.email)}\">\n" +
    "      <label for=\"email\" class=\"col-sm-2 control-label\">For:</label>\n" +
    "      <div class=\"col-sm-10\">\n" +
    "        <input id=\"email\" name=\"email\" type=\"email\" class=\"form-control\" placeholder=\"Enter email\" ng-model=\"invitation.email\" required>\n" +
    "        <small class=\"input-error\" ng-show=\"hasPropertyError(requestInviteForm.email, 'required')\">Required</small>\n" +
    "        <small class=\"input-error\" ng-show=\"hasPropertyError(requestInviteForm.email, 'email')\">Invalid email</small>\n" +
    "        <span ng-show=\"hasError(requestInviteForm.email)\" class=\"glyphicon glyphicon-remove form-control-feedback\"></span>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "    <div class=\"form-group\" ng-class=\"{'has-error': hasError(requestInviteForm.message), 'has-feedback': hasError(requestInviteForm.message)}\">\n" +
    "      <label for=\"message\" class=\"col-sm-2 control-label\">Message:</label>\n" +
    "      <div class=\"col-sm-10\">\n" +
    "        <textarea id=\"message\" name=\"message\" class=\"form-control\" placeholder=\"Enter a optional message for the commish of the league...\" rows=\"3\" maxlength=\"200\" ng-model=\"invitation.message\"></textarea>\n" +
    "        <small class=\"input-error\" ng-show=\"hasPropertyError(requestInviteForm.message, 'maxlength')\">Too Long</small>\n" +
    "        <span ng-show=\"hasError(requestInviteForm.message)\" class=\"glyphicon glyphicon-remove form-control-feedback\"></span>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </form>\n" +
    "</div>\n" +
    "<div class=\"modal-footer\">\n" +
    "  <button class=\"btn btn-default\" ng-click=\"cancel()\">Cancel</button>\n" +
    "  <button class=\"btn btn-primary\" ng-disabled=\"requestInviteForm.$invalid\" ng-click=\"requestInvite(invitation)\">Request Invite</button>\n" +
    "</div>");
}]);

angular.module("modules/private/league/join/league.join.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("modules/private/league/join/league.join.tpl.html",
    "<div class=\"modal-header\">\n" +
    "  <button type=\"button\" class=\"close\" ng-click=\"cancel()\"><span aria-hidden=\"true\">&times;</span><span class=\"sr-only\">Close</span></button>\n" +
    "  <h3 class=\"modal-title\">Join League</h3>\n" +
    "</div>\n" +
    "<div class=\"modal-body\">\n" +
    "  <form name=\"joinForm\" class=\"join-form form-horizontal\" role=\"form\" novalidate>\n" +
    "    <div class=\"form-group\" ng-class=\"{'has-error': hasError(joinForm.teamName), 'has-feedback': hasError(joinForm.teamName)}\">\n" +
    "      <label for=\"teamName\" class=\"col-sm-4 col-md-4 control-label\">Give your team a name:</label>\n" +
    "      <div class=\"col-sm-8 col-md-8\">\n" +
    "        <input id=\"teamName\" name=\"teamName\" type=\"text\" class=\"form-control\" placeholder=\"Enter name...\" ng-model=\"newTeamData.name\" ng-maxlength=\"30\" required>\n" +
    "        <small class=\"input-error\" ng-show=\"hasPropertyError(joinForm.teamName, 'required')\">Required</small>\n" +
    "        <small class=\"input-error\" ng-show=\"hasPropertyError(joinForm.teamName, 'maxlength')\">Too Long</small>\n" +
    "        <span ng-show=\"hasError(joinForm.teamName)\" class=\"glyphicon glyphicon-remove form-control-feedback\"></span>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </form>\n" +
    "</div>\n" +
    "<div class=\"modal-footer\">\n" +
    "  <button class=\"btn btn-default\" ng-click=\"cancel()\">Cancel</button>\n" +
    "  <button class=\"btn btn-primary\" ng-disabled=\"joinForm.$pristine || joinForm.$invalid\" ng-click=\"joinLeague(newTeamData)\">Join</button>\n" +
    "</div>");
}]);

angular.module("modules/private/league/league.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("modules/private/league/league.tpl.html",
    "<div ui-view=\"leagueContent\" class=\"league-content\"></div>\n" +
    "");
}]);

angular.module("modules/private/league/message/league.message.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("modules/private/league/message/league.message.tpl.html",
    "<div class=\"modal-header\">\n" +
    "  <button type=\"button\" class=\"close\" ng-click=\"cancel()\"><span aria-hidden=\"true\">&times;</span><span class=\"sr-only\">Close</span></button>\n" +
    "  <h3 class=\"modal-title\">Update Message</h3>\n" +
    "</div>\n" +
    "<div class=\"modal-body\">\n" +
    "  <form name=\"messageForm\" class=\"league-message-form form-horizontal\" role=\"form\" novalidate>\n" +
    "    <div class=\"form-group\" ng-class=\"{'has-error': hasError(messageForm.message), 'has-feedback': hasError(messageForm.message)}\">\n" +
    "      <label for=\"message\" class=\"col-sm-4 control-label\">\n" +
    "        League Message: <br>\n" +
    "        <small class=\"input-error\" ng-show=\"hasPropertyError(messageForm.message, 'maxlength')\">[ Too Long ]</small>\n" +
    "      </label>\n" +
    "      <div class=\"col-sm-8\">\n" +
    "        <textarea id=\"message\" name=\"message\" class=\"form-control\" placeholder=\"Enter a message for your league to see or leave it blank.\" rows=\"3\" ng-maxlength=\"500\" ng-model=\"leagueData.message\"></textarea>\n" +
    "        <div class=\"email-league-message-checkbox\" ng-show=\"leagueData.elimination\">\n" +
    "          <label><input type=\"checkbox\" ng-model=\"messageOptions.sendAlive\"> email message to alive teams</label>\n" +
    "        </div>\n" +
    "        <div class=\"email-league-message-checkbox\">\n" +
    "          <label><input type=\"checkbox\" ng-model=\"messageOptions.sendAll\"> email message to all teams</label>\n" +
    "        </div>\n" +
    "        <span ng-show=\"hasError(messageForm.message)\" class=\"glyphicon glyphicon-remove form-control-feedback\"></span>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </form>\n" +
    "</div>\n" +
    "<div class=\"modal-footer\">\n" +
    "  <button class=\"btn btn-default\" ng-click=\"cancel()\">Cancel</button>\n" +
    "  <button class=\"btn btn-primary\" ng-disabled=\"messageForm.$pristine || messageForm.$invalid\" ng-click=\"updateMessage(leagueData, messageOptions.sendAlive, messageOptions.sendAll)\">Update</button>\n" +
    "</div>");
}]);

angular.module("modules/private/league/new/league.new.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("modules/private/league/new/league.new.tpl.html",
    "<div class=\"create-league-header-row row\">\n" +
    "  <div class=\"col-sm-12 col-md-12\">\n" +
    "    <h3>Create League</h3>\n" +
    "  </div>\n" +
    "</div>\n" +
    "<hr>\n" +
    "<form name=\"leagueForm\" class=\"create-league-form\" role=\"form\" novalidate>\n" +
    "  <div class=\"row form-group product-chooser\">\n" +
    "    <div class=\"col-xs-12 col-sm-12 col-md-6 col-lg-6\">\n" +
    "        <div class=\"product-chooser-item\" ng-class=\"{'selected': leagueData.public == true}\" ng-click=\"leagueData.public = true\">\n" +
    "          <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\">\n" +
    "            <span class=\"title\"><i class=\"fa fa-unlock icon\"></i> Public League</span>\n" +
    "            <span class=\"description\">Anyone can join a public league. Members of a public league can also invite others to join the league.</span>\n" +
    "          </div>\n" +
    "          <div class=\"clear\"></div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <div class=\"col-xs-12 col-sm-12 col-md-6 col-lg-6\">\n" +
    "      <div class=\"product-chooser-item\" ng-class=\"{'selected': leagueData.public == false}\" ng-click=\"leagueData.public = false\">\n" +
    "        <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\">\n" +
    "          <span class=\"title\"><i class=\"fa fa-lock icon\"></i> Private League</span>\n" +
    "          <span class=\"description\">An invite from the commish is required to join a private league. Only the commish can invite people to join the league.</span>\n" +
    "        </div>\n" +
    "        <div class=\"clear\"></div>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "  <div class=\"row form-group product-chooser\">\n" +
    "    <div class=\"col-xs-12 col-sm-12 col-md-6 col-lg-6\">\n" +
    "        <div class=\"product-chooser-item\" ng-class=\"{'selected': leagueData.elimination == false}\" ng-click=\"leagueData.max_picks_per_week = null; leagueData.elimination = false\">\n" +
    "          <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\">\n" +
    "            <span class=\"title\"><i class=\"fa fa-th-list\"></i> Pick'em Format</span>\n" +
    "            <span class=\"description\">Pick'em format allows teams to make one or more picks each week. No elimination. The most correct picks for the week wins.</span>\n" +
    "          </div>\n" +
    "          <div class=\"clear\"></div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <div class=\"col-xs-12 col-sm-12 col-md-6 col-lg-6\">\n" +
    "      <div class=\"product-chooser-item\" ng-class=\"{'selected': leagueData.elimination == true}\" ng-click=\"leagueData.max_picks_per_week = 1; leagueData.elimination = true\">\n" +
    "        <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\">\n" +
    "          <span class=\"title\"><i class=\"fa fa-check\"></i> Survivor Format</span>\n" +
    "          <span class=\"description\">Survivor format requires a team to make a different pick each week. If you fail to pick a loser, your team is eliminated. The team with the most picks wins.</span>\n" +
    "        </div>\n" +
    "        <div class=\"clear\"></div>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "  <div class=\"create-league-details\">\n" +
    "    <div class=\"row\">\n" +
    "      <div class=\"col-sm-12 col-md-12\">\n" +
    "        <div class=\"form-group\">\n" +
    "          <label class=\"control-label\" for=\"maxPicks\">Picks per week</label>\n" +
    "          <select id=\"maxPicks\" name=\"maxPicks\" class=\"form-control\" ng-disabled=\"leagueData.elimination\" ng-model=\"leagueData.max_picks_per_week\" ng-options=\"maxPick.number as maxPick.display for maxPick in maxPicksPerWeek\"></select>\n" +
    "          <small class=\"input-error\" ng-show=\"leagueData.elimination\"><i class=\"fa fa-warning fa-fw\" title=\"Warning\"></i> Survivor leagues only allow 1 pick per week, no repeats</small>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "    <div class=\"row\" ng-show=\"leagueData.elimination\">\n" +
    "      <div class=\"col-sm-12 col-md-12\">\n" +
    "        <div class=\"form-group\">\n" +
    "          <label>\n" +
    "            <input type=\"checkbox\" ng-model=\"leagueData.eliminate_on_tie\"> eliminate a team that picks a tie\n" +
    "          </label>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "    <hr>\n" +
    "    <div class=\"row\">\n" +
    "      <div class=\"col-sm-12 col-md-12\">\n" +
    "        <div class=\"form-group\" ng-class=\"{'has-error': hasError(leagueForm.leagueName), 'has-feedback': hasError(leagueForm.leagueName)}\">\n" +
    "          <label class=\"control-label\" for=\"leagueName\">League name\n" +
    "            <small ng-show=\"hasPropertyError(leagueForm.leagueName, 'required')\">[ Required ]</small>\n" +
    "            <small ng-show=\"hasPropertyError(leagueForm.leagueName, 'maxlength')\">[ Too Long ]</small>\n" +
    "          </label>\n" +
    "          <input id=\"leagueName\" name=\"leagueName\" type=\"text\" class=\"form-control\" ng-model=\"leagueData.name\" ng-maxlength=\"30\" required>\n" +
    "          <span ng-show=\"hasError(leagueForm.leagueName)\" class=\"glyphicon glyphicon-remove form-control-feedback\"></span>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "    <div class=\"league-nickname row\">\n" +
    "      <div class=\"col-sm-12 col-md-12\">\n" +
    "        <div class=\"form-group\">\n" +
    "          <label class=\"control-label\" for=\"nickname\">Nickname</label>\n" +
    "          <input id=\"nickname\" name=\"nickname\" type=\"text\" class=\"form-control\" ng-model=\"leagueData.nickname\">\n" +
    "        </div>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "    <div class=\"row\">\n" +
    "      <div class=\"col-sm-12 col-md-12\">\n" +
    "        <div class=\"form-group\">\n" +
    "          <label class=\"control-label\" for=\"season\">Season</label>\n" +
    "          <select id=\"season\" name=\"season\" class=\"form-control\" ng-change=\"changeSeason()\" ng-model=\"leagueData.season_id\" ng-options=\"season.id as season.name for season in seasons\"></select>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "    <div class=\"row\">\n" +
    "      <div class=\"col-sm-12 col-md-12\">\n" +
    "        <div class=\"form-group\">\n" +
    "          <label class=\"control-label\" for=\"startWeek\">Start week</label>\n" +
    "          <select id=\"startWeek\" name=\"startWeek\" class=\"form-control\" ng-disabled=\"fetchingSeasonWeeks\" ng-model=\"leagueData.start_week_id\" ng-options=\"week.id as week.display for week in weeks\" required></select>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "    <div class=\"row\">\n" +
    "      <div class=\"col-sm-12 col-md-12\">\n" +
    "        <div class=\"form-group\" ng-class=\"{'has-error': hasError(leagueForm.maxTeams), 'has-feedback': hasError(leagueForm.maxTeams)}\">\n" +
    "          <label class=\"control-label\" for=\"maxTeams\">How many times can a user join?\n" +
    "            <small ng-show=\"hasPropertyError(leagueForm.maxTeams, 'required')\">[ Number Required ]</small>\n" +
    "            <small ng-show=\"hasPropertyError(leagueForm.maxTeams, 'min')\">[ 1 - 10 ]</small>\n" +
    "            <small ng-show=\"hasPropertyError(leagueForm.maxTeams, 'max')\">[ 1 - 10 ]</small>\n" +
    "          </label>\n" +
    "          <input id=\"maxTeams\" name=\"maxTeams\" type=\"number\" placeholder=\"Between 1 and 10 times\" min=\"1\" max=\"10\" class=\"form-control\" ng-model=\"leagueData.max_teams_per_user\" logh-focus required>\n" +
    "          <span ng-show=\"hasError(leagueForm.maxTeams)\" class=\"glyphicon glyphicon-remove form-control-feedback\"></span>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "    <div class=\"row\">\n" +
    "      <div class=\"col-sm-12 col-md-12\">\n" +
    "        <div class=\"form-group\">\n" +
    "          <label class=\"control-label\" for=\"message\">Message [ Optional ]</label>\n" +
    "          <textarea id=\"message\" name=\"message\" class=\"form-control\" placeholder=\"Enter a message for your league here. You can change it at any time.\" rows=\"2\" maxlength=\"500\" ng-model=\"leagueData.message\"></textarea>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "    <div class=\"create-league-btn-group\">\n" +
    "      <button class=\"create-league-btn btn btn-primary\" ng-disabled=\"leagueForm.$invalid || fetchingSeasonWeeks\" ng-click=\"createLeague(leagueData)\">Save League</button>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "</form>");
}]);

angular.module("modules/private/league/view/league.view.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("modules/private/league/view/league.view.tpl.html",
    "<div class=\"header-row row\">\n" +
    "  <div class=\"col-sm-7 col-md-7\">\n" +
    "    <div class=\"btn-group leagues-dropdown\" dropdown is-open=\"leagueDropdown.isopen\">\n" +
    "      <button type=\"button\" class=\"leagues-btn-link btn btn-link dropdown-toggle\" ng-disabled=\"!isCommish(leagueData) && !isAdmin()\">\n" +
    "        <span class=\"league-name\" ng-class=\"{'disabled': !isCommish(leagueData) && !isAdmin()}\">\n" +
    "        <i class=\"fa fa-lock icon\" title=\"Private league\" ng-show=\"!leagueData.public\"></i>\n" +
    "        <i class=\"fa fa-unlock icon\" title=\"Public league\" ng-show=\"leagueData.public\"></i>\n" +
    "        <strong>{{leagueData.name}}</strong></span> <span ng-show=\"isCommish(leagueData) || isAdmin()\" class=\"caret\"></span>\n" +
    "      </button>\n" +
    "      <ul class=\"dropdown-menu league-actions-menu\" role=\"menu\">\n" +
    "        <li><a ng-show=\"isCommish(leagueData) || isAdmin()\" ng-click=\"toggleDropdown($event);editLeague(leagueData)\">Edit league</a></li>\n" +
    "        <li><a ng-show=\"isCommish(leagueData)\" ng-click=\"toggleDropdown($event);updateMessage(leagueData)\">Edit league message</a></li>\n" +
    "        <li><a ng-show=\"isCommish(leagueData)\" ng-click=\"toggleDropdown($event);invite(leagueData.id, isCommish(leagueData), leagueData.closed)\">Manage invitations</a></li>\n" +
    "        <li><a ng-show=\"isCommish(leagueData) && teamOptions.inactive == true\" ng-click=\"toggleDropdown($event);showDeactivatedTeams(false);\">Hide deactivated teams</a></li>\n" +
    "        <li><a ng-show=\"isCommish(leagueData) && teamOptions.inactive == false\" ng-click=\"toggleDropdown($event);showDeactivatedTeams(true);\">Show deactivated teams</a></li>\n" +
    "      </ul>\n" +
    "    </div>\n" +
    "    <h3 style=\"margin-top: 0;\">\n" +
    "      <div class=\"league-meta\" ng-class=\"{'show-meta': !leagueData.closed}\">\n" +
    "        <small>Commish [ {{leagueData.commish_names.join(', ')}} ]</small><br>\n" +
    "        <small>{{leagueData.format}}</small>\n" +
    "      </div>\n" +
    "      <small>{{starts(leagueData)}}</small>\n" +
    "    </h3>\n" +
    "  </div>\n" +
    "  <div class=\"col-sm-5 col-md-5\">\n" +
    "    <button type=\"button\" class=\"join-btn btn btn-primary\" ng-show=\"!leagueData.closed\" ng-click=\"joinLeague(leagueData)\">Join ({{leagueData.max_teams_per_user}}X max)</button>\n" +
    "    <button type=\"button\" class=\"invite-btn btn btn-default\" ng-show=\"!leagueData.closed && (leagueData.public || isCommish(leagueData))\" ng-click=\"invite(leagueData.id, isCommish(leagueData), leagueData.closed)\">Invite</button>\n" +
    "    <button type=\"button\" class=\"request-invite-btn btn btn-default\" ng-show=\"!leagueData.closed && !leagueData.public && !isCommish(leagueData)\" ng-click=\"requestInvite(leagueData)\">Request Invite</button>\n" +
    "    <h3 class=\"league-meta-right\" ng-show=\"leagueData.closed\">\n" +
    "      <small>{{leagueData.format}}</small><br>\n" +
    "      <small>Commish [ {{leagueData.commish_names.join(', ')}} ]</small>\n" +
    "    </h3>\n" +
    "  </div>\n" +
    "</div>\n" +
    "<hr>\n" +
    "<div class=\"league-message\" ng-show=\"!leagueData.closed || hasTeamInLeague() || isCommish(leagueData)\">\n" +
    "  <accordion close-others=\"true\">\n" +
    "    <accordion-group is-open=\"userModel.leagueMessageOpen[leagueData.id]\">\n" +
    "      <accordion-heading>\n" +
    "        <i class=\"fa fa-comment fa-fw\"></i> Messages to league [ <span ng-show=\"leagueData.message.length > 0\">1</span><span ng-show=\"!leagueData.message || leagueData.message.length == 0\">0</span> ] <i class=\"pull-right glyphicon\" ng-class=\"{'glyphicon-chevron-down': userModel.leagueMessageOpen[leagueData.id], 'glyphicon-chevron-right': !userModel.leagueMessageOpen[leagueData.id]}\"></i>\n" +
    "      </accordion-heading>\n" +
    "      <p class=\"league-message-text\" ng-show=\"!leagueData.message || leagueData.message.length == 0\">no messages</p><p class=\"league-message-text\" ng-show=\"leagueData.message.length > 0\" ng-bind-html=\"leagueData.message | linky:'_blank'\"></p> <a class=\"alert-link\" ng-show=\"isCommish(leagueData)\" ng-click=\"updateMessage(leagueData)\">[ edit ]</a><a class=\"alert-link\" ng-show=\"!isCommish(leagueData) && hasTeamInLeague()\" ng-click=\"contactCommish(leagueData)\">[ contact commish ]</a>\n" +
    "    </accordion-group>\n" +
    "  </accordion>\n" +
    "  <hr>\n" +
    "</div>\n" +
    "<div class=\"teams-tab\">\n" +
    "  <ul class=\"nav nav-tabs\">\n" +
    "    <li class=\"active\"><a>Teams [ <span ng-show=\"leagueData.elimination\">{{aliveTeamCount(leagueTeams)}} / </span>{{leagueData.team_count}} ]</a></li>\n" +
    "    <li class=\"dropdown\">\n" +
    "      <a class=\"dropdown-toggle\" data-toggle=\"dropdown\" href=\"#\" role=\"button\" aria-expanded=\"false\">\n" +
    "        Rules <span class=\"caret\"></span>\n" +
    "      </a>\n" +
    "      <div class=\"dropdown-menu panel panel-default\">\n" +
    "        <div class=\"panel-body rules-panel scrollable-rules-panel scrollable\" ng-click=\"$event.stopPropagation()\">\n" +
    "          <accordion close-others=\"true\" ng-show=\"!leagueData.elimination\">\n" +
    "            <accordion-group heading=\"How do I play?\">\n" +
    "              <ol>\n" +
    "                <li>{{(leagueData.max_picks_per_week) ? 'Pick ' + leagueData.max_picks_per_week + ' loser(s) each week.' : 'Each week, pick one loser for every game.'}}</li>\n" +
    "                <li>Root for your losers to lose...duh</li>\n" +
    "              </ol>\n" +
    "            </accordion-group>\n" +
    "            <accordion-group heading=\"How do I win?\">\n" +
    "              Pick the most correct losers for the week and win the week.\n" +
    "            </accordion-group>\n" +
    "            <accordion-group heading=\"What do I win?\">\n" +
    "              That is between you and the commish of the league. However, please be careful when dealing with money. Don’t send money to anyone you don’t know. Common sense, please.\n" +
    "            </accordion-group>\n" +
    "            <accordion-group heading=\"How many losers do I pick each week?\">\n" +
    "              {{(leagueData.max_picks_per_week) ? leagueData.max_picks_per_week : 'Pick one loser for every game.'}}\n" +
    "            </accordion-group>\n" +
    "            <accordion-group heading=\"When is the deadline to make my picks?\">\n" +
    "              As long as a game hasn't started, you can make a pick for that game.\n" +
    "            </accordion-group>\n" +
    "            <accordion-group heading=\"Can I pick the same loser twice?\">\n" +
    "              Yes sir.\n" +
    "            </accordion-group>\n" +
    "            <accordion-group heading=\"Do ties count as a loss?\">\n" +
    "              No ma'am.\n" +
    "            </accordion-group>\n" +
    "            <accordion-group heading=\"When is the deadline to join this league?\">\n" +
    "              Join anytime.\n" +
    "            </accordion-group>\n" +
    "            <accordion-group heading=\"What if I fail to make picks for a week?\">\n" +
    "              I'm guessing you won't win that week.\n" +
    "            </accordion-group>\n" +
    "            <accordion-group heading=\"Is there anything else I should know?\">\n" +
    "              Not really, but you can read the general <a ng-click=\"readFaq()\">faq</a> if you like.\n" +
    "            </accordion-group>\n" +
    "          </accordion>\n" +
    "          <accordion close-others=\"true\" ng-show=\"leagueData.elimination\">\n" +
    "            <accordion-group heading=\"How do I play?\">\n" +
    "              <ol>\n" +
    "                <li>Pick a different loser each week.</li>\n" +
    "                <li>Root for your loser to lose...duh</li>\n" +
    "                <li>If you are wrong, you are out.</li>\n" +
    "                <li>If you are right, you move on to the next week.</li>\n" +
    "              </ol>\n" +
    "            </accordion-group>\n" +
    "            <accordion-group heading=\"How do I win?\">\n" +
    "              {{(leagueData.eliminate_on_tie) ? 'The team that last the longest wins.' : 'The team with the most correct losers at the end of the season wins.'}}\n" +
    "            </accordion-group>\n" +
    "            <accordion-group heading=\"What do I win?\">\n" +
    "              That is between you and the commish of the league. However, please be careful when dealing with money. Don’t send money to anyone you don’t know. Common sense, please.\n" +
    "            </accordion-group>\n" +
    "            <accordion-group heading=\"How many losers do I pick each week?\">\n" +
    "              1\n" +
    "            </accordion-group>\n" +
    "            <accordion-group heading=\"When is the deadline to make my pick?\">\n" +
    "              As long as a game hasn't started, you can make a pick for that game. Make sure you make a pick before the end of the week.\n" +
    "            </accordion-group>\n" +
    "            <accordion-group heading=\"During the season, can I pick the same loser twice?\">\n" +
    "              Nope. Unless you make the playoffs where all losers are once again available to pick.\n" +
    "            </accordion-group>\n" +
    "            <accordion-group heading=\"Do ties count as a loss?\">\n" +
    "              Negative. {{(leagueData.eliminate_on_tie) ? 'A tie will result in elimination.' : 'However, a tie will not result in elimination.'}}\n" +
    "            </accordion-group>\n" +
    "            <accordion-group heading=\"When is the deadline to join the league?\">\n" +
    "              Join before the end of this league's start week.\n" +
    "            </accordion-group>\n" +
    "            <accordion-group heading=\"What if I fail to make a pick for a week?\">\n" +
    "              Pack your bags. You're going home.\n" +
    "            </accordion-group>\n" +
    "            <accordion-group heading=\"Is there anything else I should know?\">\n" +
    "              Not really, but you can read the general <a ng-click=\"readFaq()\">faq</a> if you like.\n" +
    "            </accordion-group>\n" +
    "          </accordion>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "    </li>\n" +
    "    <li class=\"dropdown\" ng-show=\"hasTeamInLeague() || isCommish(leagueData)\">\n" +
    "      <a class=\"dropdown-toggle\" data-toggle=\"dropdown\" href=\"#\" role=\"button\" aria-expanded=\"false\">\n" +
    "        Share <span class=\"caret\"></span>\n" +
    "      </a>\n" +
    "      <ul class=\"dropdown-menu\" role=\"menu\">\n" +
    "        <li><a ng-click=\"shareLeagueFB()\">Share on Facebook</a></li>\n" +
    "      </ul>\n" +
    "    </li>\n" +
    "  </ul>\n" +
    "  <div class=\"weeks\">\n" +
    "    <select class=\"form-control\" ng-change=\"changeWeek(selectedWeekSlug)\" ng-model=\"selectedWeekSlug\" ng-options=\"leagueWeek.slug as leagueWeek.display for leagueWeek in leagueWeeks\">\n" +
    "      <option value=\"\">All Weeks</option>\n" +
    "    </select>\n" +
    "  </div>\n" +
    "  <div class=\"input-group custom-search-form filter-league-join\">\n" +
    "    <input type=\"text\" class=\"form-control\" placeholder=\"Search...\" ng-model=\"teamQuery\">\n" +
    "    <span class=\"input-group-btn\">\n" +
    "      <button class=\"btn btn-default\" type=\"button\"><span class=\"glyphicon glyphicon-search\"></span></button>\n" +
    "    </span>\n" +
    "  </div>\n" +
    "</div>\n" +
    "<div class=\"league-container\">\n" +
    "  <div class=\"league-teams list-group\">\n" +
    "    <a class=\"list-group-item\" ng-repeat=\"team in leagueTeams | orderBy:[inPlay, '-correct_picks_count', 'name'] | activeTeamFilter:teamOptions | filter:search:strict | offsetFilter:(currentTeamPage-1)*teamsPerPage | limitTo:teamsPerPage\" ng-click=\"showTeam(team)\">\n" +
    "      <div class=\"row\">\n" +
    "        <div class=\"league-name col-sm-5 col-md-5\">\n" +
    "          <i class=\"fa fa-user fa-fw\" ng-show=\"isCoach(team)\" title=\"My team\"></i> <span class=\"team-name\" ng-class=\"{'inactive': !team.active || isEliminated(team)}\">{{team.name}}</span>\n" +
    "          <br>\n" +
    "          <span class=\"coach-name\">Coach: {{coachName(team)}}</span>\n" +
    "        </div>\n" +
    "        <div class=\"col-sm-7 col-md-7\">\n" +
    "          <span class=\"current-pick\" ng-class=\"{'no-pick': team.current_pick.warning == true}\" ng-show=\"team.active && team.started\">\n" +
    "            <i class=\"fa fa-{{pickStatus(team.current_pick)}} fa-fw\"></i>\n" +
    "            [ <span class=\"current-loser-name\">{{team.current_pick.name}}</span><span class=\"current-loser-abbrev\">{{team.current_pick.abbrev}}</span> ]\n" +
    "          </span>\n" +
    "          <span class=\"current-pick\" ng-show=\"team.active && !team.started\">Starts {{team.start_week}}</span>\n" +
    "          <span class=\"inactive-team current-pick\" ng-show=\"!team.active\">Team has been deactivated</span>\n" +
    "          <span class=\"badge\">{{team.correct_picks_count}} loser<span ng-show=\"team.correct_picks_count != 1\">s</span></span>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "    </a>\n" +
    "  </div>\n" +
    "  <div>\n" +
    "    <div class=\"alert alert-info\" ng-show=\"(leagueTeams | activeTeamFilter:teamOptions | filter:search:strict).length == 0\">\n" +
    "      No teams found\n" +
    "    </div>\n" +
    "    <div class=\"league-teams-pagination\" ng-show=\"leagueTeams.length > teamsPerPage && (leagueTeams | activeTeamFilter:teamOptions | filter:search:strict).length > 0\">\n" +
    "      <pagination boundary-links=\"true\" max-size=\"4\" total-items=\"(leagueTeams | activeTeamFilter:teamOptions | filter:search:strict).length\" items-per-page=\"teamsPerPage\" ng-model=\"currentTeamPage\" class=\"pagination-md\" previous-text=\"&lsaquo;\" next-text=\"&rsaquo;\" first-text=\"&laquo;\" last-text=\"&raquo;\"></pagination>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("modules/private/leagues/join/leagues.join.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("modules/private/leagues/join/leagues.join.tpl.html",
    "<div class=\"join-leagues-header-row row\">\n" +
    "  <div class=\"col-sm-9 col-md-9\">\n" +
    "    <h3>Join a league...</h3>\n" +
    "  </div>\n" +
    "  <div class=\"col-sm-3 col-md-3\">\n" +
    "    <div class=\"join-leagues-btn-group\">\n" +
    "      <button type=\"button\" class=\"create-league-btn btn btn-primary\" ng-click=\"createLeague()\">Create League</button>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "</div>\n" +
    "<hr>\n" +
    "<div class=\"join-leagues-tabs\">\n" +
    "  <ul class=\"nav nav-tabs\">\n" +
    "    <li ng-class=\"{'active': isPublic()}\" ng-click=\"resetSearch()\">\n" +
    "      <a ng-click=\"publicLeagues(selectedSeasonId)\"><i class=\"fa fa-unlock fa-fw\" title=\"Public leagues\"></i> Public <span class=\"leagues\">Leagues</span></a>\n" +
    "    </li>\n" +
    "    <li ng-class=\"{'active': !isPublic()}\" ng-click=\"resetSearch()\">\n" +
    "      <a ng-click=\"privateLeagues(selectedSeasonId)\"><i class=\"fa fa-lock fa-fw\" title=\"Private leagues\"></i> Private <span class=\"leagues\">Leagues</span></a>\n" +
    "    </li>\n" +
    "  </ul>\n" +
    "  <div class=\"seasons\">\n" +
    "    <select class=\"form-control\" ng-change=\"changeSeason(selectedSeasonId)\" ng-model=\"selectedSeasonId\" ng-options=\"currentSeason.id as currentSeason.name for currentSeason in currentSeasons\"></select>\n" +
    "  </div>\n" +
    "  <div class=\"input-group custom-search-form filter-league-join\">\n" +
    "    <input type=\"text\" class=\"form-control\" placeholder=\"Search...\" ng-model=\"leagueQuery\">\n" +
    "    <span class=\"input-group-btn\">\n" +
    "      <button class=\"btn btn-default\" type=\"button\"><span class=\"glyphicon glyphicon-search\"></span></button>\n" +
    "    </span>\n" +
    "  </div>\n" +
    "</div>\n" +
    "<div class=\"leagues-content\" ui-view=\"joinLeaguesContent\"></div>\n" +
    "\n" +
    "");
}]);

angular.module("modules/private/leagues/join/private/leagues.join.private.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("modules/private/leagues/join/private/leagues.join.private.tpl.html",
    "<div class=\"private-leagues list-group\">\n" +
    "    <a ng-repeat=\"league in privateLeagues | filter:search:strict | offsetFilter:(currentLeaguePage-1)*leaguesPerPage | limitTo:leaguesPerPage\" ng-click=\"showLeague(league)\" class=\"list-group-item\">\n" +
    "      <div class=\"row\">\n" +
    "        <div class=\"league-name col-sm-5 col-md-5\">{{league.name}}<br><span class=\"private-league-meta\">{{starts(league)}}</span></div>\n" +
    "        <div class=\"col-sm-7 col-md-7\">\n" +
    "          <span class=\"private-league-meta\">{{league.format}}<br>Commish: {{league.commish_names.join(', ')}}</span>\n" +
    "          <span class=\"badge\">{{league.team_count}} team<span ng-show=\"league.team_count !== 1\">s</span></span>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "    </a>\n" +
    "</div>\n" +
    "\n" +
    "<div class=\"private-league-pagination\" ng-show=\"privateLeagues.length > leaguesPerPage && (privateLeagues | filter:search:strict).length > 0\">\n" +
    "    <pagination boundary-links=\"true\" max-size=\"4\" total-items=\"(privateLeagues | filter:search:strict).length\" items-per-page=\"leaguesPerPage\" ng-model=\"currentLeaguePage\" class=\"pagination-md\" previous-text=\"&lsaquo;\" next-text=\"&rsaquo;\" first-text=\"&laquo;\" last-text=\"&raquo;\"></pagination>\n" +
    "</div>\n" +
    "<div class=\"alert alert-info\" ng-show=\"(privateLeagues | filter:search:strict).length == 0\">\n" +
    "  No leagues found\n" +
    "</div>\n" +
    "");
}]);

angular.module("modules/private/leagues/join/public/leagues.join.public.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("modules/private/leagues/join/public/leagues.join.public.tpl.html",
    "<div class=\"public-leagues list-group\">\n" +
    "    <a ng-repeat=\"league in publicLeagues | filter:search:strict | offsetFilter:(currentLeaguePage-1)*leaguesPerPage | limitTo:leaguesPerPage\" ng-click=\"showLeague(league)\" class=\"list-group-item\">\n" +
    "        <div class=\"row\">\n" +
    "            <div class=\"league-name col-sm-5 col-md-5\">{{league.name}}<br><span class=\"public-league-meta\">{{starts(league)}}</span></div>\n" +
    "            <div class=\"col-sm-7 col-md-7\">\n" +
    "                <span class=\"public-league-meta\">{{league.format}}<br>Commish: {{league.commish_names.join(', ')}}</span>\n" +
    "                <span class=\"badge\">{{league.team_count}} team<span ng-show=\"league.team_count !== 1\">s</span></span>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </a>\n" +
    "</div>\n" +
    "\n" +
    "<div class=\"public-league-pagination\" ng-show=\"publicLeagues.length > leaguesPerPage && (publicLeagues | filter:search:strict).length > 0\">\n" +
    "    <pagination boundary-links=\"true\" max-size=\"4\" total-items=\"(publicLeagues |filter:search:strict).length\" items-per-page=\"leaguesPerPage\" ng-model=\"currentLeaguePage\" class=\"pagination-md\" previous-text=\"&lsaquo;\" next-text=\"&rsaquo;\" first-text=\"&laquo;\" last-text=\"&raquo;\"></pagination>\n" +
    "</div>\n" +
    "<div class=\"alert alert-info\" ng-show=\"(publicLeagues | filter:search:strict).length == 0\">\n" +
    "  No leagues found\n" +
    "</div>\n" +
    "");
}]);

angular.module("modules/private/leagues/leagues.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("modules/private/leagues/leagues.tpl.html",
    "<div ui-view=\"leaguesContent\"></div>\n" +
    "");
}]);

angular.module("modules/private/leagues/manage/leagues.manage.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("modules/private/leagues/manage/leagues.manage.tpl.html",
    "<div class=\"manage-leagues-header-row row\">\n" +
    "  <div class=\"col-sm-9 col-md-9\">\n" +
    "    <h3>I manage these leagues...</h3>\n" +
    "  </div>\n" +
    "  <div class=\"col-sm-3 col-md-3\">\n" +
    "    <div class=\"manage-leagues-btn-group\">\n" +
    "      <button type=\"button\" class=\"create-league-btn btn btn-primary\" ng-click=\"createLeague()\">Create League</button>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "</div>\n" +
    "<hr>\n" +
    "\n" +
    "<!--if you have managed leagues (i.e. if you're a commish)-->\n" +
    "<div ng-show=\"managedLeagues.length > 0\" class=\"leagues-container\">\n" +
    "\n" +
    "    <div class=\"managed-leagues list-group\">\n" +
    "        <a ng-repeat=\"league in managedLeagues | offsetFilter:(currentLeaguePage-1)*leaguesPerPage | limitTo:leaguesPerPage\" ng-click=\"viewLeague(league)\" class=\"list-group-item\">\n" +
    "            <div class=\"row\">\n" +
    "                <div class=\"league-name col-sm-6 col-md-6\">\n" +
    "                  <i class=\"fa fa-unlock fa-fw\" title=\"My Public league\" ng-show=\"league.public\"></i>\n" +
    "                  <i class=\"fa fa-lock fa-fw\" title=\"My Private league\" ng-show=\"!league.public\"></i> {{league.name}}</div>\n" +
    "                <div class=\"col-sm-6 col-md-6\">\n" +
    "                    <span class=\"start-week\">{{starts(league)}}</span>\n" +
    "                    <span class=\"badge\">{{league.team_count}} teams</span>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </a>\n" +
    "    </div>\n" +
    "\n" +
    "    <!--dynamic pagination-->\n" +
    "    <div class=\"manage-league-pagination\" ng-show=\"managedLeagues.length > leaguesPerPage\">\n" +
    "        <pagination boundary-links=\"true\" max-size=\"4\" total-items=\"managedLeagues.length\" items-per-page=\"leaguesPerPage\" ng-model=\"currentLeaguePage\" class=\"pagination-md\" previous-text=\"&lsaquo;\" next-text=\"&rsaquo;\" first-text=\"&laquo;\" last-text=\"&raquo;\"></pagination>\n" +
    "    </div>\n" +
    "    <div style=\"clear: both;\"></div>\n" +
    "</div>\n" +
    "\n" +
    "<!--if you have no managed leagues-->\n" +
    "<div class=\"alert alert-info\" ng-show=\"managedLeagues.length == 0\">\n" +
    "  You are not the commish of any leagues. <a class=\"alert-link\" ng-click=\"createLeague(season)\">Create one</a> and invite all your friends.\n" +
    "</div>\n" +
    "");
}]);

angular.module("modules/private/leagues/my/leagues.my.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("modules/private/leagues/my/leagues.my.tpl.html",
    "<div class=\"my-leagues-header-row row\">\n" +
    "  <div class=\"col-sm-9 col-md-9\">\n" +
    "    <h3>I am in these leagues...</h3>\n" +
    "  </div>\n" +
    "  <div class=\"col-sm-3 col-md-3\">\n" +
    "    <div class=\"my-leagues-btn-group\">\n" +
    "      <button type=\"button\" class=\"join-league-btn btn btn-primary\" ng-click=\"joinLeague()\">Join League</button>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "</div>\n" +
    "<hr>\n" +
    "\n" +
    "<div ng-show=\"leagues.length > 0\" class=\"leagues-container\">\n" +
    "\n" +
    "  <div class=\"my-leagues list-group\">\n" +
    "    <a ng-repeat=\"league in leagues | offsetFilter:(currentLeaguePage-1)*leaguesPerPage | limitTo:leaguesPerPage\" ng-click=\"viewLeague(league)\" class=\"list-group-item\">\n" +
    "      <div class=\"row\">\n" +
    "        <div class=\"league-name col-sm-6 col-md-6\">\n" +
    "          <i class=\"fa fa-unlock fa-fw\" title=\"My Public league\" ng-show=\"league.public\"></i>\n" +
    "          <i class=\"fa fa-lock fa-fw\" title=\"My Private league\" ng-show=\"!league.public\"></i> {{league.name}}</div>\n" +
    "        <div class=\"col-sm-6 col-md-6\">\n" +
    "          <span class=\"start-week\">{{starts(league)}}</span>\n" +
    "          <span class=\"badge\">{{league.team_count}} teams</span>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "    </a>\n" +
    "  </div>\n" +
    "\n" +
    "  <div class=\"my-league-pagination\" ng-show=\"leagues.length > leaguesPerPage\">\n" +
    "    <pagination boundary-links=\"true\" max-size=\"4\" total-items=\"leagues.length\" items-per-page=\"leaguesPerPage\" ng-model=\"currentLeaguePage\" class=\"pagination-md\" previous-text=\"&lsaquo;\" next-text=\"&rsaquo;\" first-text=\"&laquo;\" last-text=\"&raquo;\"></pagination>\n" +
    "  </div>\n" +
    "  <div style=\"clear: both;\"></div>\n" +
    "</div>\n" +
    "\n" +
    "<!--if you have no leagues-->\n" +
    "<div class=\"alert alert-info\" ng-show=\"leagues.length == 0\">\n" +
    "  You are in no leagues. <a class=\"alert-link\" ng-click=\"joinLeague(season)\">Join</a> one today.\n" +
    "</div>\n" +
    "");
}]);

angular.module("modules/private/play/leagues/play.leagues.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("modules/private/play/leagues/play.leagues.tpl.html",
    "<div ng-show=\"leagues.length > 0\" class=\"leagues-container\">\n" +
    "  <div class=\"my-leagues list-group\">\n" +
    "    <a ng-repeat=\"league in leagues | managedLeagueFilter:leagueOptions | filter:search:strict | offsetFilter:(currentLeaguePage-1)*leaguesPerPage | limitTo:leaguesPerPage\" ng-click=\"viewLeague(league)\" class=\"list-group-item\">\n" +
    "      <div class=\"row\">\n" +
    "        <div class=\"league-name col-sm-5 col-md-5\">\n" +
    "          <i class=\"fa fa-comment fa-fw\" ng-show=\"!isCommish(league) && league.message.length > 0\" title=\"Has message from commish\"></i>\n" +
    "          <i class=\"fa fa-user fa-fw\" title=\"My league\" ng-show=\"isCommish(league)\"></i> {{league.name}}<br><span class=\"my-league-meta\">{{starts(league)}}</span>\n" +
    "        </div>\n" +
    "        <div class=\"col-sm-7 col-md-7\">\n" +
    "          <span class=\"my-league-meta\">{{league.format}}<br>Commish: {{league.commish_names.join(', ')}}</span>\n" +
    "          <span class=\"badge\"><span ng-show=\"league.elimination\">{{league.alive_team_count}}/</span>{{league.team_count}} team<span ng-show=\"league.team_count !== 1\">s</span></span>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "    </a>\n" +
    "  </div>\n" +
    "\n" +
    "  <div class=\"my-league-pagination\" ng-show=\"leagues.length > leaguesPerPage\">\n" +
    "    <pagination boundary-links=\"true\" max-size=\"4\" total-items=\"leagues.length\" items-per-page=\"leaguesPerPage\" ng-model=\"currentLeaguePage\" class=\"pagination-md\" previous-text=\"&lsaquo;\" next-text=\"&rsaquo;\" first-text=\"&laquo;\" last-text=\"&raquo;\"></pagination>\n" +
    "  </div>\n" +
    "  <div style=\"clear: both;\"></div>\n" +
    "</div>\n" +
    "\n" +
    "<!--if you have no leagues-->\n" +
    "<div class=\"leagues-alert alert alert-info\" ng-show=\"(leagues | managedLeagueFilter:leagueOptions | filter:search:strict).length == 0\">\n" +
    "  No leagues found\n" +
    "</div>\n" +
    "\n" +
    "");
}]);

angular.module("modules/private/play/play.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("modules/private/play/play.tpl.html",
    "<div class=\"play-header-row row\">\n" +
    "  <div class=\"col-sm-7 col-md-7\">\n" +
    "    <h3 class=\"my-teams-header\">My Teams & Leagues</h3>\n" +
    "  </div>\n" +
    "  <div class=\"col-sm-5 col-md-5\">\n" +
    "    <div class=\"play-btn-group\">\n" +
    "      <button type=\"button\" class=\"join-league-btn btn btn-primary\" ng-click=\"joinLeague()\">Join League</button>\n" +
    "      <button type=\"button\" class=\"create-league-btn btn btn-primary\" ng-click=\"createLeague()\">Create League</button>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "</div>\n" +
    "<hr>\n" +
    "<div class=\"teams-leagues-tabs\">\n" +
    "  <ul class=\"nav nav-tabs\">\n" +
    "    <li ng-class=\"{'active': isState(['private.play.teams'])}\" ng-click=\"resetSearch()\">\n" +
    "      <a ng-click=\"myTeams(selectedSeasonId)\"><span class=\"my-teams\">My Teams</span></a>\n" +
    "    </li>\n" +
    "    <li ng-class=\"{'active': isState(['private.play.leagues'])}\" ng-click=\"resetSearch()\">\n" +
    "      <a ng-click=\"myLeagues(selectedSeasonId)\"><span class=\"my-leagues\">My Leagues</span></a>\n" +
    "    </li>\n" +
    "  </ul>\n" +
    "  <div class=\"seasons\">\n" +
    "    <div class=\"form-control\" dropdown-select=\"startedSeasons\" dropdown-model=\"selectedSeason\" dropdown-item-label=\"name\" dropdown-onchange=\"changeSeason(selected)\"></div>\n" +
    "  </div>\n" +
    "  <div class=\"input-group custom-search-form filter-team-league\">\n" +
    "    <input type=\"text\" class=\"form-control\" placeholder=\"Search...\" ng-model=\"query\">\n" +
    "    <span class=\"input-group-btn\">\n" +
    "      <button class=\"btn btn-default\" type=\"button\"><span class=\"glyphicon glyphicon-search\"></span></button>\n" +
    "    </span>\n" +
    "  </div>\n" +
    "</div>\n" +
    "<div class=\"play-content\" ui-view=\"playContent\"></div>\n" +
    "\n" +
    "");
}]);

angular.module("modules/private/play/teams/play.teams.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("modules/private/play/teams/play.teams.tpl.html",
    "<div ng-show=\"teams.length > 0\" class=\"leagues-container\">\n" +
    "  <div class=\"my-teams list-group\">\n" +
    "    <a class=\"list-group-item\" ng-class=\"{'inactive': !team.active || !team.alive}\" ng-repeat=\"team in teams | orderBy:[inPlay, 'name'] | filter:search:strict | offsetFilter:(currentTeamPage-1)*teamsPerPage | limitTo:teamsPerPage\" ng-click=\"showTeam(team)\">\n" +
    "      <div class=\"row\">\n" +
    "        <div class=\"league-name col-sm-5 col-md-5\">\n" +
    "          <i class=\"fa fa-comment fa-fw\" ng-show=\"team.message.length > 0\" title=\"Has message from commish\"></i>\n" +
    "          <span ng-class=\"{'dead-team-name': !team.active || !team.alive}\">{{team.name}}</span><br><span class=\"team-league\">{{team.league.name}}</span></div>\n" +
    "        <div class=\"col-sm-7 col-md-7\">\n" +
    "          <span class=\"current-pick\" ng-class=\"{'no-pick': team.current_pick.warning == true}\" ng-show=\"team.active && team.started\">\n" +
    "            <i class=\"fa fa-{{pickStatus(team.current_pick)}} fa-fw\"></i>\n" +
    "            [ <span class=\"current-loser-name\">{{team.current_pick.name}}</span><span class=\"current-loser-abbrev\">{{team.current_pick.abbrev}}</span> ]\n" +
    "            <br>\n" +
    "            <span class=\"current-pick\">{{team.league.format}}</span>\n" +
    "          </span>\n" +
    "          <span class=\"current-pick\" ng-show=\"team.active && !team.started\">Starts {{team.start_week}}<br>{{team.league.format}}</span>\n" +
    "          <span class=\"inactive-team current-pick\" ng-show=\"!team.active\">Team has been deactivated</span>\n" +
    "          <span class=\"badge\">{{team.correct_picks_count}} loser<span ng-show=\"team.correct_picks_count !== 1\">s</span></span>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "    </a>\n" +
    "  </div>\n" +
    "\n" +
    "  <div class=\"my-league-pagination\" ng-show=\"teams.length > teamsPerPage && (teams | filter:search:strict).length > 0\">\n" +
    "    <pagination boundary-links=\"true\" max-size=\"4\" total-items=\"(teams | filter:search:strict).length\" items-per-page=\"teamsPerPage\" ng-model=\"currentTeamPage\" class=\"pagination-md\" previous-text=\"&lsaquo;\" next-text=\"&rsaquo;\" first-text=\"&laquo;\" last-text=\"&raquo;\"></pagination>\n" +
    "  </div>\n" +
    "  <div style=\"clear: both;\"></div>\n" +
    "</div>\n" +
    "\n" +
    "<div class=\"teams-alert alert alert-info\" ng-show=\"(teams | filter:search:strict).length == 0\">\n" +
    "  No teams found\n" +
    "</div>\n" +
    "");
}]);

angular.module("modules/private/team/edit/team.edit.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("modules/private/team/edit/team.edit.tpl.html",
    "<div class=\"modal-header\">\n" +
    "  <button type=\"button\" class=\"close\" ng-click=\"cancel()\"><span aria-hidden=\"true\">&times;</span><span class=\"sr-only\">Close</span></button>\n" +
    "  <h3 class=\"modal-title\">Edit Team</h3>\n" +
    "</div>\n" +
    "<div class=\"modal-body\">\n" +
    "  <form name=\"editTeamForm\" class=\"edit-team-form form-horizontal\" role=\"form\" novalidate>\n" +
    "    <div class=\"form-group\" ng-class=\"{'has-error': hasError(editTeamForm.teamName), 'has-feedback': hasError(editTeamForm.teamName)}\">\n" +
    "      <label for=\"teamName\" class=\"col-sm-3 control-label\">Team Name:</label>\n" +
    "      <div class=\"col-sm-9\">\n" +
    "        <input id=\"teamName\" name=\"teamName\" type=\"text\" class=\"form-control\" placeholder=\"Enter a team name\" ng-model=\"teamData.name\" ng-maxlength=\"30\" required>\n" +
    "        <small class=\"input-error\" ng-show=\"hasPropertyError(editTeamForm.teamName, 'required')\">Required</small>\n" +
    "        <small class=\"input-error\" ng-show=\"hasPropertyError(editTeamForm.teamName, 'maxlength')\">Too Long</small>\n" +
    "        <span ng-show=\"hasError(editTeamForm.teamName)\" class=\"glyphicon glyphicon-remove form-control-feedback\"></span>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </form>\n" +
    "</div>\n" +
    "<div class=\"modal-footer\">\n" +
    "  <button class=\"btn btn-default\" ng-click=\"cancel()\">Cancel</button>\n" +
    "  <button class=\"btn btn-primary\" ng-disabled=\"editTeamForm.$invalid\" ng-click=\"editTeam(teamData)\">Update</button>\n" +
    "</div>");
}]);

angular.module("modules/private/team/message/team.message.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("modules/private/team/message/team.message.tpl.html",
    "<div class=\"modal-header\">\n" +
    "  <button type=\"button\" class=\"close\" ng-click=\"cancel()\"><span aria-hidden=\"true\">&times;</span><span class=\"sr-only\">Close</span></button>\n" +
    "  <h3 class=\"modal-title\">Update Message</h3>\n" +
    "</div>\n" +
    "<div class=\"modal-body\">\n" +
    "  <form name=\"messageForm\" class=\"team-message-form form-horizontal\" role=\"form\" novalidate>\n" +
    "    <div class=\"form-group\" ng-class=\"{'has-error': hasError(messageForm.message), 'has-feedback': hasError(messageForm.message)}\">\n" +
    "      <label for=\"message\" class=\"col-sm-4 control-label\">\n" +
    "        Team Message: <br>\n" +
    "        <small class=\"input-error\" ng-show=\"hasPropertyError(messageForm.message, 'maxlength')\">[ Too Long ]</small>\n" +
    "      </label>\n" +
    "      <div class=\"col-sm-8\">\n" +
    "        <textarea id=\"message\" name=\"message\" class=\"form-control\" placeholder=\"Enter a message to put on the team's wall...\" rows=\"3\" ng-maxlength=\"500\" ng-model=\"teamData.message\"></textarea>\n" +
    "        <div class=\"email-team-message-checkbox\">\n" +
    "          <label><input type=\"checkbox\" ng-model=\"messageOptions.sendEmail\"> email message to coach</label>\n" +
    "        </div>\n" +
    "        <span ng-show=\"hasError(messageForm.message)\" class=\"glyphicon glyphicon-remove form-control-feedback\"></span>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </form>\n" +
    "</div>\n" +
    "<div class=\"modal-footer\">\n" +
    "  <button class=\"btn btn-default\" ng-click=\"cancel()\">Cancel</button>\n" +
    "  <button class=\"btn btn-primary\" ng-disabled=\"messageForm.$pristine || messageForm.$invalid\" ng-click=\"updateMessage(teamData, messageOptions.sendEmail)\">Update</button>\n" +
    "</div>");
}]);

angular.module("modules/private/team/pick/many/team.pick.many.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("modules/private/team/pick/many/team.pick.many.tpl.html",
    "<div ng-repeat=\"game in games | filter:search:strict\" class=\"week-games list-group\">\n" +
    "  <div class=\"row\">\n" +
    "    <div class=\"col-sm-12 col-md-12\"><h5 class=\"game-display\"><small class=\"start-date\">{{starts(game)}}</small></h5></div>\n" +
    "  </div>\n" +
    "  <div class=\"row game-squads\">\n" +
    "    <div class=\"col-sm-6 col-md-6 game-squad\" ng-repeat=\"squad in game.squads\">\n" +
    "      <a ng-click=\"togglePick(game, squad)\" class=\"list-group-item\" ng-class=\"{'disabled': isDisabled(game, squad)}\">\n" +
    "        <div class=\"row game-row\">\n" +
    "          <span><span ng-show=\"($index === 1)\">@ </span><span ng-show=\"squad.seed > 0\">({{squad.seed}}) </span>{{squad.name}} <span class=\"record-score\" ng-show=\"!game.complete\">[ {{squad.record}} ]</span><span class=\"record-score\" ng-show=\"game.complete\">[ {{getScore(game, $index)}} ] <span ng-show=\"$index === 1\">{{game.ot_display}}</span></span></span>\n" +
    "          <i class=\"fa fa-{{pickStatus(game, squad)}} pull-right\"></i>\n" +
    "        </div>\n" +
    "      </a>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "</div>\n" +
    "<div class=\"alert alert-info\" ng-show=\"(games | filter:search:strict).length == 0\">\n" +
    "  No games found\n" +
    "</div>\n" +
    "<button type=\"button\" class=\"save-pick-btn btn btn-primary\" ng-show=\"isCoach(team)\" ng-disabled=\"!savePicksEnabled\" ng-click=\"savePicks()\">Save Picks</button>\n" +
    "\n" +
    "\n" +
    "\n" +
    "");
}]);

angular.module("modules/private/team/pick/one/team.pick.one.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("modules/private/team/pick/one/team.pick.one.tpl.html",
    "<div class=\"team-message alert alert-warning\" ng-show=\"isCoach(team) && isCurrentPickLocked()\"><p class=\"team-message-text\">Your pick for {{week.name}} ({{week.type}}) is locked [ {{currentPick.squad.name}} ]</p></div>\n" +
    "<div ng-repeat=\"game in games | filter:search:strict\" class=\"week-games list-group\">\n" +
    "  <div class=\"row\">\n" +
    "    <div class=\"col-sm-12 col-md-12\"><h5 class=\"game-display\"><small class=\"start-date\">{{starts(game)}}</small></h5></div>\n" +
    "  </div>\n" +
    "  <div class=\"row game-squads\">\n" +
    "    <div class=\"col-sm-6 col-md-6 game-squad\" ng-repeat=\"squad in game.squads\">\n" +
    "      <a ng-click=\"makePick(game, squad)\" class=\"list-group-item\" ng-class=\"{'disabled': isDisabled(game, squad)}\">\n" +
    "        <div class=\"row game-row\">\n" +
    "          <span ng-show=\"($index === 1)\">@ </span><span ng-class=\"{'invalid-squad': hasSquadBeenUsed(game, squad)}\"><span ng-show=\"squad.seed > 0\">({{squad.seed}}) </span>{{squad.name}} <span class=\"record-score\" ng-show=\"!game.complete\">[ {{squad.record}} ]</span><span class=\"record-score\" ng-show=\"game.complete\">[ {{getScore(game, $index)}} ] <span ng-show=\"$index === 1\">{{game.ot_display}}</span></span></span>\n" +
    "          <i class=\"fa fa-{{pickStatus(game, squad)}} pull-right\"></i>\n" +
    "        </div>\n" +
    "      </a>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "</div>\n" +
    "<div class=\"alert alert-info\" ng-show=\"(games | filter:search:strict).length == 0\">\n" +
    "  No games found\n" +
    "</div>\n" +
    "\n" +
    "\n" +
    "");
}]);

angular.module("modules/private/team/pick/team.pick.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("modules/private/team/pick/team.pick.tpl.html",
    "<div class=\"make-picks-header-row row\">\n" +
    "  <div class=\"col-sm-7 col-md-7\">\n" +
    "    <h3 class=\"week-display\">\n" +
    "      {{week.name}}\n" +
    "    </h3>\n" +
    "    <h6><a ng-click=\"showTeam(team)\"><i class=\"fa fa-chevron-left fa-fw\"></i> <span class=\"team-league-name\">{{team.name}}</span></a></h6>\n" +
    "  </div>\n" +
    "  <div class=\"col-sm-5 col-md-5\">\n" +
    "    <button type=\"button\" class=\"save-pick-btn btn btn-primary\" ng-show=\"team.league.max_picks_per_week != 1 && isCoach(team)\" ng-disabled=\"!savePicksEnabled\" ng-click=\"savePicks()\">Save Picks</button>\n" +
    "  </div>\n" +
    "</div>\n" +
    "<div class=\"pick-message alert alert-info\" ng-show=\"isCoach(team)\"><p class=\"pick-message-text\">{{pickMessage(team, week)}}</p></div>\n" +
    "<div class=\"picks-tab\">\n" +
    "  <ul class=\"nav nav-tabs\">\n" +
    "    <li class=\"active\"><a>Picks [ {{pickCount}}<span ng-show=\"savePicksEnabled\">*</span> ]</a></li>\n" +
    "  </ul>\n" +
    "  <div class=\"input-group custom-search-form filter-league-join\">\n" +
    "    <input type=\"text\" class=\"form-control\" placeholder=\"Search games...\" ng-model=\"gameQuery\">\n" +
    "    <span class=\"input-group-btn\">\n" +
    "      <button class=\"btn btn-default\" type=\"button\"><span class=\"glyphicon glyphicon-search\"></span></button>\n" +
    "    </span>\n" +
    "  </div>\n" +
    "</div>\n" +
    "<div ui-view=\"pickContent\" class=\"pick-content\"></div>\n" +
    "\n" +
    "");
}]);

angular.module("modules/private/team/team.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("modules/private/team/team.tpl.html",
    "<div ui-view=\"teamContent\" class=\"team-content\"></div>\n" +
    "");
}]);

angular.module("modules/private/team/view/picks/team.view.picks.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("modules/private/team/view/picks/team.view.picks.tpl.html",
    "<div class=\"losers-tab\">\n" +
    "  <ul class=\"nav nav-tabs\">\n" +
    "    <li class=\"active\"><a>Losers [ {{correctPickCount((picks | weekPicksFilter:selectedWeek:teamData.league.elimination))}} / {{(picks | weekPicksFilter:selectedWeek:teamData.league.elimination).length}} ]</a></li>\n" +
    "    <li class=\"dropdown\" ng-show=\"isCoach(teamData)\">\n" +
    "      <a class=\"dropdown-toggle\" data-toggle=\"dropdown\" href=\"#\" role=\"button\" aria-expanded=\"false\">\n" +
    "        Share <span class=\"caret\"></span>\n" +
    "      </a>\n" +
    "      <ul class=\"dropdown-menu\" role=\"menu\">\n" +
    "        <li><a ng-click=\"shareTeamFB()\">Share on Facebook</a></li>\n" +
    "      </ul>\n" +
    "    </li>\n" +
    "  </ul>\n" +
    "  <div class=\"weeks\">\n" +
    "    <select class=\"form-control\" ng-change=\"changeWeek(selectedWeekSlug)\" ng-model=\"selectedWeekSlug\" ng-options=\"leagueWeek.slug as leagueWeek.display for leagueWeek in leagueWeeks\">\n" +
    "      <option value=\"\">All Weeks</option>\n" +
    "    </select>\n" +
    "  </div>\n" +
    "</div>\n" +
    "<div class=\"team-container\" style=\"clear:both;\">\n" +
    "  <div class=\"team-picks list-group\">\n" +
    "    <a ng-repeat=\"pick in picks | weekPicksFilter:selectedWeek:teamData.league.elimination\" class=\"team-pick list-group-item\" ng-click=\"makePick(teamData, pick)\" ng-class=\"{'locked': !isCoach(teamData) || pick.locked, 'incorrect': pick.correct === false || (pick.game && pick.game.incomplete === true)}\">\n" +
    "      <div class=\"row\">\n" +
    "        <div class=\"week-name col-sm-7 col-md-7\">\n" +
    "          <i class=\"fa fa-{{pickStatus(pick)}} fa-fw pick-icon\"></i> <span class=\"pick-squad\"><span class=\"pick-squad-name\">[ {{pick.squad.name}} ]</span><span class=\"pick-squad-abbrev\">[ {{pick.squad.abbrev}} ]</span></span> <span class=\"game-start\">{{pickMeta(pick)}}</span></span>\n" +
    "        </div>\n" +
    "        <div class=\"game-column col-sm-5 col-md-5\">\n" +
    "          <span class=\"game\">{{pick.game.display}}</span>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "    </a>\n" +
    "  </div>\n" +
    "  <div class=\"no-picks-alert alert alert-info\" ng-show=\"(picks | weekPicksFilter:selectedWeek:teamData.league.elimination).length == 0\">\n" +
    "    No picks\n" +
    "  </div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("modules/private/team/view/team.view.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("modules/private/team/view/team.view.tpl.html",
    "<div class=\"alert alert-danger\" ng-show=\"!teamData.active\">This team has been deactivated by the commish and will be unable to pick losers. <a class=\"alert-link\" ng-click=\"contactCommish(teamData)\">Contact the commish</a> if you have questions.</div>\n" +
    "<div class=\"alert alert-danger\" ng-show=\"(isCoach(teamData) || isCommish(teamData)) && teamData.active && teamData.alive && teamData.started && hasNotEnoughPicks(teamData)\">{{pickSummary(teamData)}} losers picked for {{teamData.current_week_name}}</div>\n" +
    "<div class=\"alert alert-danger\" ng-show=\"teamData.active && !teamData.alive\">This team is DEAD. So sorry.</div>\n" +
    "<div class=\"alert alert-warning\" ng-show=\"isCoach(teamData) && teamData.active && !teamData.started\">You can pick losers when the league starts - {{teamData.start_week_display}}</div>\n" +
    "<div class=\"header-row row\">\n" +
    "  <div class=\"col-sm-7 col-md-7\">\n" +
    "    <div class=\"btn-group teams-dropdown\" dropdown is-open=\"teamDropdown.isopen\">\n" +
    "      <button type=\"button\" class=\"teams-btn-link btn btn-link dropdown-toggle\" ng-disabled=\"!isCoach(teamData) && !isCommish(teamData) && !isAdmin()\">\n" +
    "        <strong><span class=\"team-name\" ng-class=\"{'team-inactive': !teamData.active || !teamData.alive, 'disabled': !isCoach(teamData) && !isCommish(teamData) && !isAdmin()}\">{{teamData.name}}</span> <span ng-show=\"isCoach(teamData) || isCommish(teamData) || isAdmin()\" class=\"caret\"></span></strong>\n" +
    "      </button>\n" +
    "      <ul class=\"dropdown-menu teams-btn-menu\" role=\"menu\">\n" +
    "        <li><a ng-click=\"toggleDropdown($event);editTeam(teamData)\">Edit {{teamData.name}}</a></li>\n" +
    "        <li><a ng-show=\"isCommish(teamData)\" ng-click=\"toggleDropdown($event);updateMessage(teamData)\">Edit team message</a></li>\n" +
    "        <li ng-show=\"isCommish(teamData) && !teamData.active\"><a ng-click=\"toggleDropdown($event);confirmActivate(teamData)\">Reactivate this team</a></li>\n" +
    "        <li ng-show=\"isCommish(teamData) && teamData.active\"><a ng-click=\"toggleDropdown($event);confirmDeactivate(teamData)\">Deactivate this team</a></li>\n" +
    "        <li ng-show=\"!isCommish(teamData)\"><a ng-click=\"toggleDropdown($event);contactCommish(teamData)\">Contact the commish</a></li>\n" +
    "        <li class=\"divider\" ng-show=\"leagueTeams.length > 1\"></li>\n" +
    "        <li ng-repeat=\"team in leagueTeams\" ng-show=\"team.id != teamData.id\"><a ng-click=\"showTeam(team)\"><span class=\"other-team-name\" ng-class=\"{'team-inactive': !team.active || !team.alive}\">{{team.name}}</span> <span class=\"other-team-pick\">{{team.current_pick.abbrev}}</span></a></li>\n" +
    "      </ul>\n" +
    "    </div>\n" +
    "    <h6><a ng-click=\"showLeague(teamData)\"><i class=\"fa fa-chevron-left fa-fw\"></i> <span class=\"team-league-name\">{{teamData.league.name}}</span></a></h6>\n" +
    "  </div>\n" +
    "  <div class=\"col-sm-5 col-md-5\">\n" +
    "    <button type=\"button\" class=\"make-picks-btn btn btn-primary\" ng-show=\"isCoach(teamData)\" ng-click=\"makePick(teamData)\" ng-disabled=\"teamData.current_pick.locked || !teamData.started || !teamData.active || !teamData.alive\"><span>Pick Loser</span><span ng-show=\"teamData.league.max_picks_per_week != 1\">s</span></button>\n" +
    "  </div>\n" +
    "</div>\n" +
    "<hr>\n" +
    "<div class=\"team-message\" ng-show=\"isCommish(teamData) || isCoach(teamData)\">\n" +
    "  <accordion close-others=\"true\">\n" +
    "    <accordion-group is-open=\"userModel.teamMessageOpen[teamData.id]\">\n" +
    "      <accordion-heading>\n" +
    "        <i class=\"fa fa-comment fa-fw\"></i> Messages to team [ <span ng-show=\"teamData.message.length > 0\">1</span><span ng-show=\"!teamData.message || teamData.message.length == 0\">0</span> ] <i class=\"pull-right glyphicon\" ng-class=\"{'glyphicon-chevron-down': userModel.teamMessageOpen[teamData.id], 'glyphicon-chevron-right': !userModel.teamMessageOpen[teamData.id]}\"></i>\n" +
    "      </accordion-heading>\n" +
    "      <p class=\"team-message-text\" ng-show=\"!teamData.message || teamData.message.length == 0\">no messages</p><p class=\"team-message-text\" ng-show=\"teamData.message.length > 0\" ng-bind-html=\"teamData.message | linky:'_blank'\"></p> <a class=\"alert-link\" ng-show=\"isCommish(teamData)\" ng-click=\"updateMessage(teamData)\">[ edit ]</a><a class=\"alert-link\" ng-show=\"!isCommish(teamData)\" ng-click=\"contactCommish(teamData)\">[ contact commish ]</a>\n" +
    "    </accordion-group>\n" +
    "  </accordion>\n" +
    "  <hr>\n" +
    "</div>\n" +
    "<div ui-view=\"teamPicksContent\" class=\"picks-content\"></div>");
}]);

angular.module("modules/private/user/reset/user.reset.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("modules/private/user/reset/user.reset.tpl.html",
    "<div class=\"modal-header\">\n" +
    "  <button type=\"button\" class=\"close\" ng-click=\"cancel()\"><span aria-hidden=\"true\">&times;</span><span class=\"sr-only\">Close</span></button>\n" +
    "  <h3 class=\"modal-title\">Reset Password</h3>\n" +
    "</div>\n" +
    "<div class=\"modal-body\">\n" +
    "  <form name=\"resetPasswordForm\" class=\"reset-password-form form-horizontal\" role=\"form\" novalidate>\n" +
    "    <div class=\"form-group\" ng-class=\"{'has-error': hasError(resetPasswordForm.email), 'has-feedback': hasError(resetPasswordForm.email)}\">\n" +
    "      <label for=\"email\" class=\"col-sm-2 control-label\">Email:</label>\n" +
    "      <div class=\"col-sm-10\">\n" +
    "        <input id=\"email\" name=\"email\" type=\"email\" class=\"form-control\" placeholder=\"Enter your email\" ng-model=\"userData.email\" required>\n" +
    "        <small class=\"input-error\" ng-show=\"hasPropertyError(resetPasswordForm.email, 'required')\">Required</small>\n" +
    "        <small class=\"input-error\" ng-show=\"hasPropertyError(resetPasswordForm.email, 'email')\">Invalid email</small>\n" +
    "        <span ng-show=\"hasError(resetPasswordForm.email)\" class=\"glyphicon glyphicon-remove form-control-feedback\"></span>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </form>\n" +
    "</div>\n" +
    "<div class=\"modal-footer\">\n" +
    "  <button class=\"btn btn-default\" ng-click=\"cancel()\">Cancel</button>\n" +
    "  <button class=\"btn btn-primary\" ng-disabled=\"resetPasswordForm.$pristine || resetPasswordForm.$invalid\" ng-click=\"reset(userData.email)\">Reset</button>\n" +
    "</div>");
}]);

angular.module("modules/private/user/user.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("modules/private/user/user.tpl.html",
    "<div class=\"panel panel-default\">\n" +
    "  <div class=\"panel-heading\">\n" +
    "      <h3 class=\"panel-title\">User Profile</h3>\n" +
    "  </div>\n" +
    "  <div class=\"panel-body\">\n" +
    "      <form name=\"editUserForm\" role=\"form\" novalidate>\n" +
    "          <div class=\"row\">\n" +
    "              <div class=\"col-sm-6 col-md-6\">\n" +
    "                  <div class=\"form-group\" ng-class=\"{'has-error': hasError(editUserForm.firstName), 'has-feedback': hasError(editUserForm.firstName)}\">\n" +
    "                      <label class=\"control-label\" for=\"firstName\">First Name\n" +
    "                          <small ng-show=\"hasPropertyError(editUserForm.firstName, 'required')\">[ Required ]</small>\n" +
    "                          <small ng-show=\"hasPropertyError(editUserForm.firstName, 'maxlength')\">[ Too Long ]</small>\n" +
    "                      </label>\n" +
    "                      <input id=\"firstName\" name=\"firstName\" type=\"text\" class=\"form-control\" ng-model=\"userData.user.first_name\" ng-maxlength=\"15\" required>\n" +
    "                      <span ng-show=\"hasError(editUserForm.firstName)\" class=\"glyphicon glyphicon-remove form-control-feedback\"></span>\n" +
    "                  </div>\n" +
    "              </div>\n" +
    "              <div class=\"col-sm-6 col-md-6\">\n" +
    "                  <div class=\"form-group\" ng-class=\"{'has-error': hasError(editUserForm.lastName), 'has-feedback': hasError(editUserForm.lastName)}\">\n" +
    "                      <label class=\"control-label\" for=\"lastName\">Last Name\n" +
    "                          <small ng-show=\"hasPropertyError(editUserForm.lastName, 'required')\">[ Required ]</small>\n" +
    "                          <small ng-show=\"hasPropertyError(editUserForm.lastName, 'maxlength')\">[ Too Long ]</small>\n" +
    "                      </label>\n" +
    "                      <input id=\"lastName\" name=\"lastName\" type=\"text\" class=\"form-control\" ng-model=\"userData.user.last_name\" ng-maxlength=\"20\" required>\n" +
    "                      <span ng-show=\"hasError(editUserForm.lastName)\" class=\"glyphicon glyphicon-remove form-control-feedback\"></span>\n" +
    "                  </div>\n" +
    "              </div>\n" +
    "          </div>\n" +
    "          <div class=\"form-group\">\n" +
    "              <label class=\"control-label\" for=\"email\">Email</label>\n" +
    "              <input id=\"email\" name=\"email\" type=\"email\" class=\"form-control\" ng-disabled=\"true\" ng-model=\"userData.user.email\">\n" +
    "          </div>\n" +
    "          <div class=\"row\">\n" +
    "              <div class=\"col-sm-6 col-md-6\">\n" +
    "                  <div class=\"form-group\" ng-class=\"{'has-error': hasError(editUserForm.password), 'has-feedback': hasError(editUserForm.password)}\">\n" +
    "                      <label class=\"control-label\" for=\"password\">New Password\n" +
    "                          <small ng-show=\"hasPropertyError(editUserForm.password, 'minlength')\">[ 8 - 50 Characters ]</small>\n" +
    "                          <small ng-show=\"hasPropertyError(editUserForm.password, 'maxlength')\">[ 8 - 50 Characters ]</small>\n" +
    "                      </label>\n" +
    "                      <input id=\"password\" name=\"password\" type=\"password\" class=\"form-control\" ng-model=\"userData.user.password\" ng-minlength=\"8\" ng-maxlength=\"50\">\n" +
    "                      <span ng-show=\"hasError(editUserForm.password)\" class=\"glyphicon glyphicon-remove form-control-feedback\"></span>\n" +
    "                  </div>\n" +
    "              </div>\n" +
    "              <div class=\"col-sm-6 col-md-6\">\n" +
    "                  <div class=\"form-group\" ng-class=\"{'has-error': hasError(editUserForm.confirmPassword), 'has-feedback': hasError(editUserForm.confirmPassword)}\">\n" +
    "                      <label class=\"control-label\" for=\"confirmPassword\">Confirm New Password\n" +
    "                          <small ng-show=\"hasPropertyError(editUserForm.confirmPassword, 'match')\">[ No Match ]</small>\n" +
    "                      </label>\n" +
    "                      <input id=\"confirmPassword\" name=\"confirmPassword\" type=\"password\" class=\"form-control\" ng-model=\"userData.user.password_confirmation\" match=\"userData.user.password\">\n" +
    "                      <span ng-show=\"hasError(editUserForm.confirmPassword)\" class=\"glyphicon glyphicon-remove form-control-feedback\"></span>\n" +
    "                  </div>\n" +
    "              </div>\n" +
    "          </div>\n" +
    "          <button type=\"submit\" class=\"btn btn-info btn-block\" ng-disabled=\"editUserForm.$pristine || editUserForm.$invalid\" ng-click=\"update(userData.user)\">Update</button>\n" +
    "      </form>\n" +
    "  </div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("modules/public/abuse/abuse.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("modules/public/abuse/abuse.tpl.html",
    "<div class=\"modal-header\">\n" +
    "  <button type=\"button\" class=\"close\" ng-click=\"cancel()\"><span aria-hidden=\"true\">&times;</span><span class=\"sr-only\">Close</span></button>\n" +
    "  <h3 class=\"modal-title\">Contact Us</h3>\n" +
    "</div>\n" +
    "<div class=\"modal-body\">\n" +
    "  <form name=\"abuseForm\" class=\"contact-form form-horizontal\" role=\"form\" novalidate>\n" +
    "    <div class=\"form-group\" ng-class=\"{'has-error': hasError(abuseForm.message), 'has-feedback': hasError(abuseForm.message)}\">\n" +
    "      <label for=\"message\" class=\"col-sm-2 control-label\">Message:</label>\n" +
    "      <div class=\"col-sm-10\">\n" +
    "        <textarea id=\"message\" name=\"message\" class=\"form-control\" placeholder=\"What's on your mind?\" rows=\"3\" maxlength=\"200\" ng-model=\"abuseMessage\" required></textarea>\n" +
    "        <small class=\"input-error\" ng-show=\"hasPropertyError(abuseForm.message, 'required')\">Required</small>\n" +
    "        <small class=\"input-error\" ng-show=\"hasPropertyError(abuseForm.message, 'maxlength')\">Too Long</small>\n" +
    "        <span ng-show=\"hasError(abuseForm.message)\" class=\"glyphicon glyphicon-remove form-control-feedback\"></span>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </form>\n" +
    "</div>\n" +
    "<div class=\"modal-footer\">\n" +
    "  <button class=\"btn btn-default\" ng-click=\"cancel()\">Cancel</button>\n" +
    "  <button class=\"btn btn-primary\" ng-disabled=\"abuseForm.$pristine || abuseForm.$invalid\" ng-click=\"contactUs(abuseMessage)\">Send</button>\n" +
    "</div>");
}]);

angular.module("modules/public/faq/faq.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("modules/public/faq/faq.tpl.html",
    "<div class=\"container faq-container\">\n" +
    "  <div class=\"page-header\"><h2>FAQ</h2></div>\n" +
    "  <div class=\"row\">\n" +
    "    <div class=\"col-md-3 column topic-column\">\n" +
    "      <ul class=\"nav nav-pills nav-stacked\">\n" +
    "        <li><a ng-class=\"{'selected-topic': isState('public.faq.general')}\" ui-sref=\"public.faq.general\"><i class=\"fa fa-chevron-right fa-fw\"></i> General</a></li>\n" +
    "        <li><a ng-class=\"{'selected-topic': isState('public.faq.pickem')}\" ui-sref=\"public.faq.pickem\"><i class=\"fa fa-chevron-right fa-fw\"></i> Pick'em Leagues</a></li>\n" +
    "        <li><a ng-class=\"{'selected-topic': isState('public.faq.survivor')}\" ui-sref=\"public.faq.survivor\"><i class=\"fa fa-chevron-right fa-fw\"></i> Survivor Leagues</a></li>\n" +
    "      </ul>\n" +
    "    </div>\n" +
    "    <div class=\"col-md-9\">\n" +
    "      <div class=\"faq-section\" ui-view=\"faqContent\"></div>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "</div>\n" +
    "  ");
}]);

angular.module("modules/public/faq/general/faq.general.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("modules/public/faq/general/faq.general.tpl.html",
    "<div class=\"section\">\n" +
    "  <h3 class=\"section-header\">General</h3>\n" +
    "  <accordion close-others=\"false\">\n" +
    "    <accordion-group heading=\"Which sports are available?\">\n" +
    "      NFL, NBA, NHL, MLB or MLS.\n" +
    "    </accordion-group>\n" +
    "    <accordion-group heading=\"How much does it cost?\">\n" +
    "      Zip. Zilch. Nada. Freeeeeeeeeeee...\n" +
    "    </accordion-group>\n" +
    "    <accordion-group heading=\"The season has already started, can I still play?\">\n" +
    "      Yep. There’s always an open league to <a ng-click=\"joinLeague(selectedSeasonId)\">join</a> or <a ng-click=\"createLeague(selectedSeasonId)\">create</a> your own league to start anytime during the season.\n" +
    "    </accordion-group>\n" +
    "    <accordion-group heading=\"How many times can I join a league?\">\n" +
    "      As much as the commish allows (with a max of 10 times).\n" +
    "    </accordion-group>\n" +
    "    <accordion-group heading=\"When is the deadline to make my pick(s)?\">\n" +
    "      Just make a pick before the game starts.\n" +
    "    </accordion-group>\n" +
    "    <accordion-group heading=\"Can the commish make picks for me?\">\n" +
    "      Negative.\n" +
    "    </accordion-group>\n" +
    "    <accordion-group heading=\"Can I see the picks of others in my league?\">\n" +
    "      Only after the games have started.\n" +
    "    </accordion-group>\n" +
    "    <accordion-group heading=\"Can the commish see my picks?\">\n" +
    "      Only after the games have started.\n" +
    "    </accordion-group>\n" +
    "    <accordion-group heading=\"Can I create my own league?\">\n" +
    "      You betcha. <a ng-click=\"createLeague(selectedSeasonId)\">Create</a> a Survivor or Pick'em league anytime.\n" +
    "    </accordion-group>\n" +
    "    <accordion-group heading=\"What is the difference between a public and private league?\">\n" +
    "      Public leagues allow anyone to join. Private leagues require an invitation from the commish.\n" +
    "    </accordion-group>\n" +
    "    <accordion-group heading=\"How do I invite my friends to join my league?\">\n" +
    "      On your league page you’ll find an 'Invite' button. Use it. You’ll just need their email address.\n" +
    "    </accordion-group>\n" +
    "    <accordion-group heading=\"How many friends can join my league?\">\n" +
    "      As many as you like.\n" +
    "    </accordion-group>\n" +
    "    <accordion-group heading=\"Can I set a limit on how many times a friend can join my league?\">\n" +
    "      You sure can. 1 - 10 times.\n" +
    "    </accordion-group>\n" +
    "    <accordion-group heading=\"How do I stop people from joining my league?\">\n" +
    "      Change the league to private.\n" +
    "    </accordion-group>\n" +
    "    <accordion-group heading=\"How can I remove people from my league?\">\n" +
    "      You can’t but you can deactivate (or reactivate) their team. A deactivated team is hidden from view and can’t make any picks.\n" +
    "    </accordion-group>\n" +
    "    <accordion-group heading=\"Can I edit my league?\">\n" +
    "      Yes, but you can't change the sport, start week or format (Survivor or Pick'em) after the league starts.\n" +
    "    </accordion-group>\n" +
    "    <accordion-group heading=\"Can I edit a team name in my league?\">\n" +
    "      Yes, the team's coach or the commish can edit a team name at any time.\n" +
    "    </accordion-group>\n" +
    "    <accordion-group heading=\"What if i still have questions?\">\n" +
    "      Find the Contact Us button. We'll get right back to you.\n" +
    "    </accordion-group>\n" +
    "  </accordion>\n" +
    "</div>");
}]);

angular.module("modules/public/faq/pickem/faq.pickem.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("modules/public/faq/pickem/faq.pickem.tpl.html",
    "<div class=\"section\">\n" +
    "  <h3 class=\"section-header\">Pick'em Leagues</h3>\n" +
    "  <accordion close-others=\"false\">\n" +
    "    <accordion-group heading=\"How do I play?\">\n" +
    "      <ol>\n" +
    "        <li><a ng-click=\"joinLeague(selectedSeasonId)\">Join</a> an existing Pick'em league or <a ng-click=\"createLeague(selectedSeasonId)\">create</a> your own.</li>\n" +
    "        <li>Pick losers each week.</li>\n" +
    "        <li>Root for your losers to lose...duh</li>\n" +
    "        <li>Have fun!</li>\n" +
    "      </ol>\n" +
    "    </accordion-group>\n" +
    "    <accordion-group heading=\"How do I win?\">\n" +
    "      Pick the most losers for the week and win the week.\n" +
    "    </accordion-group>\n" +
    "    <accordion-group heading=\"What do I win?\">\n" +
    "      That is between you and the commish of the league. However, please be careful when dealing with money. Don’t send money to anyone you don’t know. Common sense, please.\n" +
    "    </accordion-group>\n" +
    "    <accordion-group heading=\"How many losers do I pick each week?\">\n" +
    "      That is up to the commish. Check your league rules.\n" +
    "    </accordion-group>\n" +
    "    <accordion-group heading=\"When is the deadline to make my picks?\">\n" +
    "      As long as the game hasn't started, you can make a pick for that game.\n" +
    "    </accordion-group>\n" +
    "    <accordion-group heading=\"Can I pick the same loser twice?\">\n" +
    "      Yes sir.\n" +
    "    </accordion-group>\n" +
    "    <accordion-group heading=\"Do ties count as a loss?\">\n" +
    "      No ma'am. But, for NHL, overtime or shootout losses will be treated as a loss and not a tie.\n" +
    "    </accordion-group>\n" +
    "    <accordion-group heading=\"When is the deadline to join a Pick'em league?\">\n" +
    "      <a ng-click=\"joinLeague(selectedSeasonId)\">Join</a> anytime.\n" +
    "    </accordion-group>\n" +
    "    <accordion-group heading=\"What if I fail to make picks for a week?\">\n" +
    "      I'm guessing you won't win that week.\n" +
    "    </accordion-group>\n" +
    "  </accordion>\n" +
    "</div>");
}]);

angular.module("modules/public/faq/survivor/faq.survivor.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("modules/public/faq/survivor/faq.survivor.tpl.html",
    "<div class=\"section\">\n" +
    "  <h3 class=\"section-header\">Survivor Leagues</h3>\n" +
    "  <accordion close-others=\"false\">\n" +
    "    <accordion-group heading=\"How do I play?\">\n" +
    "      <ol>\n" +
    "        <li><a ng-click=\"joinLeague(selectedSeasonId)\">Join</a> an existing Survivor league or <a ng-click=\"createLeague(selectedSeasonId)\">create</a> your own.</li>\n" +
    "        <li>Pick a different loser each week.</li>\n" +
    "        <li>Root for your loser to lose...duh</li>\n" +
    "        <li>If you are wrong, you are out.</li>\n" +
    "        <li>If you are right, you move on to the next week.</li>\n" +
    "        <li>Have fun!</li>\n" +
    "      </ol>\n" +
    "    </accordion-group>\n" +
    "    <accordion-group heading=\"How do I win?\">\n" +
    "      The team with the most losers at the end of the season wins.\n" +
    "    </accordion-group>\n" +
    "    <accordion-group heading=\"What do I win?\">\n" +
    "      That is between you and the commish of the league. However, please be careful when dealing with money. Don’t send money to anyone you don’t know. Common sense, please.\n" +
    "    </accordion-group>\n" +
    "    <accordion-group heading=\"When is the deadline to make my pick?\">\n" +
    "      As long as a game hasn't started, you can make a pick for that game. But make sure you make a pick before the week ends.\n" +
    "    </accordion-group>\n" +
    "    <accordion-group heading=\"Can I pick the same loser twice?\">\n" +
    "      Nope. Unless you make the playoffs where all losers are once again available to pick.\n" +
    "    </accordion-group>\n" +
    "    <accordion-group heading=\"Do ties count as a loss?\">\n" +
    "      Negative. But, in some Survivor leagues you will not get eliminated for a tie. Check your league rules.\n" +
    "    </accordion-group>\n" +
    "    <accordion-group heading=\"When is the deadline to join a Survivor league?\">\n" +
    "      <a ng-click=\"joinLeague(selectedSeasonId)\">Join</a> before the end of the league's first week.\n" +
    "    </accordion-group>\n" +
    "    <accordion-group heading=\"What if I fail to make a pick for a week?\">\n" +
    "      Pack your bags. You're going home.\n" +
    "    </accordion-group>\n" +
    "  </accordion>\n" +
    "</div>");
}]);

angular.module("modules/public/home/home.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("modules/public/home/home.tpl.html",
    "<header class=\"header\">\n" +
    "  <div class=\"text-vertical-center\">\n" +
    "    <h1>{{tagline}}</h1>\n" +
    "    <h4 class=\"tagline\">Free NFL, NBA, NHL, MLB or MLS pick'em and survivor leagues.</h4>\n" +
    "    <br>\n" +
    "    <a class=\"cta btn btn-light btn-lg\" role=\"button\" ng-click=\"joinLeague(selectedSeasonId)\">Join a League</a>\n" +
    "    <a class=\"cta btn btn-dark btn-lg\" role=\"button\" ng-click=\"createLeague(selectedSeasonId)\">Create a League</a>\n" +
    "  </div>\n" +
    "  <div class=\"more-arrow\">\n" +
    "    <i class=\"fa fa-chevron-down fa-2x\"></i>\n" +
    "  </div>\n" +
    "</header>\n" +
    "<section class=\"about\">\n" +
    "  <div class=\"container\">\n" +
    "    <div class=\"row\">\n" +
    "      <div class=\"col-lg-6 text-center format-desc\">\n" +
    "        <h2>Pick'em Leagues</h2>\n" +
    "        <p class=\"lead\">Pick one or more losers each week. No elimination. The most correct picks for the week wins.</p>\n" +
    "      </div>\n" +
    "      <hr class=\"format-divider\">\n" +
    "      <div class=\"col-lg-6 text-center format-desc\">\n" +
    "        <h2>Survivor Leagues</h2>\n" +
    "        <p class=\"lead\">Pick a different loser each week. Get one wrong, and you're done. The most correct picks wins.</p>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "</section>\n" +
    "<section class=\"services bg-primary\">\n" +
    "  <div class=\"container\">\n" +
    "    <div class=\"row text-center\">\n" +
    "      <div class=\"col-lg-10 col-lg-offset-1\">\n" +
    "        <div class=\"row\">\n" +
    "          <div class=\"col-md-3 col-sm-6 col-xs-12\">\n" +
    "            <div class=\"service-item\">\n" +
    "              <h1>{{stats.pickem*3 | number:0}}</h1>\n" +
    "              <h4><strong>Pick'em Leagues</strong></h4>\n" +
    "            </div>\n" +
    "          </div>\n" +
    "          <div class=\"col-md-3 col-sm-6 col-xs-12\">\n" +
    "            <div class=\"service-item\">\n" +
    "              <h1>{{stats.survivor*3 | number:0}}</h1>\n" +
    "              <h4><strong>Survivor Leagues</strong></h4>\n" +
    "            </div>\n" +
    "          </div>\n" +
    "          <div class=\"col-md-3 col-sm-6 col-xs-12\">\n" +
    "            <div class=\"service-item\">\n" +
    "              <h1>{{stats.teams*3 | number:0}}</h1>\n" +
    "              <h4><strong>Teams</strong></h4>\n" +
    "            </div>\n" +
    "          </div>\n" +
    "          <div class=\"col-md-3 col-sm-6 col-xs-12\">\n" +
    "            <div class=\"service-item\">\n" +
    "              <h1>{{stats.picks*3 | number:0}}</h1>\n" +
    "              <h4><strong>Picks</strong></h4>\n" +
    "            </div>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "</section>\n" +
    "<aside class=\"call-to-action bg-info\">\n" +
    "  <div class=\"container\">\n" +
    "    <div class=\"row\">\n" +
    "      <div class=\"col-lg-12 text-center\">\n" +
    "        <h3>Don't worry. It's free.</h3>\n" +
    "        <a class=\"cta btn btn-dark btn-lg\" role=\"button\" ng-click=\"register()\">Register</a>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "</aside>\n" +
    "<footer>\n" +
    "  <div class=\"container\">\n" +
    "    <div class=\"row\">\n" +
    "      <div class=\"col-lg-10 col-lg-offset-1 text-center\">\n" +
    "        <ul class=\"list-inline\">\n" +
    "          <li>\n" +
    "            <a href=\"https://www.facebook.com/loseorgohome\" target=\"_blank\"><i class=\"fa fa-facebook fa-fw fa-3x\"></i></a>\n" +
    "          </li>\n" +
    "          <li>\n" +
    "            <a href=\"https://twitter.com/loseorgohome\" target=\"_blank\"><i class=\"fa fa-twitter fa-fw fa-3x\"></i></a>\n" +
    "          </li>\n" +
    "        </ul>\n" +
    "        <hr class=\"small\">\n" +
    "        <p class=\"text-muted\">FOR ENTERTAINMENT PURPOSES ONLY</p>\n" +
    "        <p class=\"text-muted trademark-disclosure\">NFL is a registered trademark of the National Football League. This site is not affiliated with the National Football League (NFL) or any of its teams.</p>\n" +
    "        <p class=\"text-muted trademark-disclosure\">NBA is a registered trademark of NBA Properties, Inc. This site is not affiliated with the National Basketball Association (NBA) or any of its teams.</p>\n" +
    "        <p class=\"text-muted trademark-disclosure\">NHL is a registered trademark of the National Hockey League. This site is not affiliated with the National Hockey League (NHL) or any of its teams.</p>\n" +
    "        <p class=\"text-muted trademark-disclosure\">MLB is a registered trademark of Major League Baseball Properties, Inc. This site is not affiliated with Major League Baseball (MLB) or any of its teams.</p>\n" +
    "        <p class=\"text-muted trademark-disclosure\">MLS is a registered trademark of Major League Soccer, LLC. This site is not affiliated with Major League Soccer (MLS) or any of its teams.</p>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "</footer>\n" +
    "");
}]);

angular.module("modules/public/register/register.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("modules/public/register/register.tpl.html",
    "<div class=\"modal-header\">\n" +
    "  <button type=\"button\" class=\"close\" ng-click=\"cancel()\"><span aria-hidden=\"true\">&times;</span><span class=\"sr-only\">Close</span></button>\n" +
    "  <h3 class=\"modal-title\">Register</h3>\n" +
    "</div>\n" +
    "<div class=\"modal-body\">\n" +
    "  <form name=\"newUserForm\" role=\"form\" novalidate>\n" +
    "    <div class=\"row\">\n" +
    "      <div class=\"col-sm-12 col-md-12\">\n" +
    "        <div class=\"form-group\" ng-class=\"{'has-error': hasError(newUserForm.firstName), 'has-feedback': hasError(newUserForm.firstName)}\">\n" +
    "          <label class=\"control-label\" for=\"firstName\">First name\n" +
    "            <small ng-show=\"hasPropertyError(newUserForm.firstName, 'required')\">[ Required ]</small>\n" +
    "            <small ng-show=\"hasPropertyError(newUserForm.firstName, 'maxlength')\">[ Too Long ]</small>\n" +
    "          </label>\n" +
    "          <input id=\"firstName\" name=\"firstName\" type=\"text\" class=\"form-control\" ng-model=\"newUserData.first_name\" ng-maxlength=\"15\" required>\n" +
    "          <span ng-show=\"hasError(newUserForm.firstName)\" class=\"glyphicon glyphicon-remove form-control-feedback\"></span>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "    <div class=\"row\">\n" +
    "      <div class=\"col-sm-12 col-md-12\">\n" +
    "        <div class=\"form-group\" ng-class=\"{'has-error': hasError(newUserForm.lastName), 'has-feedback': hasError(newUserForm.lastName)}\">\n" +
    "          <label class=\"control-label\" for=\"lastName\">Last name\n" +
    "            <small ng-show=\"hasPropertyError(newUserForm.lastName, 'required')\">[ Required ]</small>\n" +
    "            <small ng-show=\"hasPropertyError(newUserForm.lastName, 'maxlength')\">[ Too Long ]</small>\n" +
    "          </label>\n" +
    "          <input id=\"lastName\" name=\"lastName\" type=\"text\" class=\"form-control\" ng-model=\"newUserData.last_name\" ng-maxlength=\"20\" required>\n" +
    "          <span ng-show=\"hasError(newUserForm.lastName)\" class=\"glyphicon glyphicon-remove form-control-feedback\"></span>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "    <div class=\"user-nickname row\">\n" +
    "      <div class=\"col-sm-12 col-md-12\">\n" +
    "        <div class=\"form-group\">\n" +
    "          <label class=\"control-label\" for=\"nickname\">Nickname</label>\n" +
    "          <input id=\"nickname\" name=\"nickname\" type=\"text\" class=\"form-control\" ng-model=\"newUserData.nickname\">\n" +
    "        </div>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "    <div class=\"row\">\n" +
    "      <div class=\"col-sm-12 col-md-12\">\n" +
    "        <div class=\"form-group\" ng-class=\"{'has-error': hasError(newUserForm.email), 'has-feedback': hasError(newUserForm.email)}\">\n" +
    "          <label class=\"control-label\" for=\"email\">Email address\n" +
    "            <small ng-show=\"hasPropertyError(newUserForm.email, 'required')\">[ Required ]</small>\n" +
    "            <small ng-show=\"hasPropertyError(newUserForm.email, 'email')\">[ Invalid Email ]</small>\n" +
    "          </label>\n" +
    "          <input id=\"email\" name=\"email\" type=\"email\" class=\"form-control\" ng-model=\"newUserData.email\" logh-focus required>\n" +
    "          <span ng-show=\"hasError(newUserForm.email)\" class=\"glyphicon glyphicon-remove form-control-feedback\"></span>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "    <div class=\"row\">\n" +
    "      <div class=\"col-sm-12 col-md-12\">\n" +
    "        <div class=\"form-group\" ng-class=\"{'has-error': hasError(newUserForm.password), 'has-feedback': hasError(newUserForm.password)}\">\n" +
    "          <label class=\"control-label\" for=\"password\">Password\n" +
    "            <small ng-show=\"hasPropertyError(newUserForm.password, 'required')\">[ Required ]</small>\n" +
    "            <small ng-show=\"hasPropertyError(newUserForm.password, 'minlength')\">[ 8 - 50 Characters ]</small>\n" +
    "            <small ng-show=\"hasPropertyError(newUserForm.password, 'maxlength')\">[ 8 - 50 Characters ]</small>\n" +
    "          </label>\n" +
    "          <input id=\"password\" name=\"password\" type=\"password\" class=\"form-control\" ng-model=\"newUserData.password\" ng-minlength=\"8\" ng-maxlength=\"50\" required>\n" +
    "          <span ng-show=\"hasError(newUserForm.password)\" class=\"glyphicon glyphicon-remove form-control-feedback\"></span>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "    <!--<div class=\"terms well well-sm\"><strong>By clicking register, you agree to the <a ng-click=\"showTerms()\">terms of use.</a></strong></div>-->\n" +
    "  </form>\n" +
    "</div>\n" +
    "<div class=\"modal-footer\">\n" +
    "  <!--<button class=\"btn btn-default\" ng-click=\"cancel()\">Cancel</button>-->\n" +
    "  <button type=\"submit\" class=\"btn btn-block btn-primary\" ng-disabled=\"newUserForm.$invalid\" ng-click=\"register(newUserData)\">Play Now</button>\n" +
    "</div>");
}]);

angular.module("modules/public/register/terms/register.terms.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("modules/public/register/terms/register.terms.tpl.html",
    "<div class=\"modal-header\">\n" +
    "  <button type=\"button\" class=\"close\" ng-click=\"close()\"><span aria-hidden=\"true\">&times;</span><span class=\"sr-only\">Close</span></button>\n" +
    "  <h3 class=\"modal-title\">Terms of Use</h3>\n" +
    "</div>\n" +
    "<div class=\"modal-body\">\n" +
    "  <p>If you choose to use this site for gambling purposes, you assume all risks. Don't be a dummy and send money to people you don't know and trust. Use your cabeza.</p>\n" +
    "</div>\n" +
    "<div class=\"modal-footer\">\n" +
    "  <button class=\"btn btn-default\" ng-click=\"close()\">Close</button>\n" +
    "</div>");
}]);

angular.module("modules/public/signin/signin.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("modules/public/signin/signin.tpl.html",
    "<div class=\"signin-box panel panel-default\">\n" +
    "  <div class=\"panel-body\">\n" +
    "    <form name=\"signinForm\" role=\"form\" ng-submit=\"signin({ email: credentials.email.toLowerCase(), password: credentials.password })\" novalidate>\n" +
    "      <div class=\"form-group\">\n" +
    "        <div class=\"input-group\">\n" +
    "          <span class=\"input-group-addon\"><i class=\"fa fa-envelope fa-fw\"></i></span>\n" +
    "          <input type=\"email\" class=\"form-control\" autocomplete=\"off\" placeholder=\"Email\" ng-model=\"credentials.email\" rc-verify-set autofocus required>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "      <div class=\"form-group\">\n" +
    "        <div class=\"input-group\">\n" +
    "          <span class=\"input-group-addon\"><i class=\"fa fa-key fa-fw\"></i></span>\n" +
    "          <input type=\"password\" class=\"form-control\" autocomplete=\"off\" placeholder=\"Password\" ng-model=\"credentials.password\" rc-verify-set required>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "      <button type=\"submit\" class=\"btn btn-block btn-primary\">Sign in with email</button>\n" +
    "      <div class=\"orDiv\"><span>or</span></div>\n" +
    "    </form>\n" +
    "    <button class=\"btn btn-block btn-primary\" ng-click=\"signinGuest()\">Sign in as guest</button>\n" +
    "    <hr>\n" +
    "    <div class=\"signin-other-container\"><a ng-click=\"register()\">Register</a> | <a ng-click=\"resetPassword()\">Reset Password</a></div>\n" +
    "  </div>\n" +
    "</div>\n" +
    "");
}]);

},{}],1:[function(require,module,exports){
'use strict';
require('app-templates');


var App = function($urlRouterProvider) {
    // unmatched urls should be directed back to the start
    $urlRouterProvider.otherwise('/');
};

App.$inject = ['$urlRouterProvider'];

var loghApp = angular.module('loghApp', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngRoute',
    'ngDropdowns',
    'commangular',
    'ui.router',
    'ui.bootstrap',
    'ui.bootstrap.datetimepicker',
    'app.templates',
    'ui.router.stateHelper',
    'angular-loading-bar',
    'angulartics',
    'angulartics.google.analytics',

    // public modules
    require('./modules/public/home').name,
    require('./modules/public/faq').name,
    require('./modules/public/faq/general').name,
    require('./modules/public/faq/pickem').name,
    require('./modules/public/faq/survivor').name,
    require('./modules/public/abuse').name,
    require('./modules/public/signin').name,
    require('./modules/public/register').name,
    require('./modules/public/register/terms').name,

    // private modules
    // user
    require('./modules/private/user').name,
    require('./modules/private/user/reset').name,

    // league
    require('./modules/private/league').name,
    require('./modules/private/league/new').name,
    require('./modules/private/league/view').name,
    require('./modules/private/league/edit').name,
    require('./modules/private/league/contact').name,
    require('./modules/private/league/message').name,
    require('./modules/private/league/join').name,
    require('./modules/private/league/invite').name,
    require('./modules/private/league/invite/request').name,

    // leagues
    require('./modules/private/leagues').name,
    require('./modules/private/leagues/join').name,
    require('./modules/private/leagues/join/public').name,
    require('./modules/private/leagues/join/private').name,
    require('./modules/private/leagues/manage').name,
    require('./modules/private/leagues/my').name,

    // team
    require('./modules/private/team').name,
    require('./modules/private/team/view').name,
    require('./modules/private/team/view/picks').name,
    require('./modules/private/team/edit').name,
    require('./modules/private/team/message').name,
    require('./modules/private/team/pick').name,
    require('./modules/private/team/pick/one').name,
    require('./modules/private/team/pick/many').name,

    // play
    require('./modules/private/play').name,
    require('./modules/private/play/leagues').name,
    require('./modules/private/play/teams').name,

    // admin
    require('./modules/private/admin').name,
    require('./modules/private/admin/game/edit').name,
    require('./modules/private/admin/game/new').name,
    require('./modules/private/admin/seasons').name,
    require('./modules/private/admin/seasons/season').name,
    require('./modules/private/admin/seasons/season/new').name,
    require('./modules/private/admin/seasons/season/edit').name,
    require('./modules/private/admin/week').name,
    require('./modules/private/admin/week/new').name,
    require('./modules/private/admin/week/edit').name,
    require('./modules/private/admin/squads').name,
    require('./modules/private/admin/squads/new').name,
    require('./modules/private/admin/squads/edit').name,

    // helper modules
    require('./common/modules/header').name,
    require('./common/modules/message').name,
    require('./common/modules/footer').name,
    require('./common/modules/confirm').name,

    require('./common/models').name,
    require('./common/api').name,
    require('./common/command').name,

    // services
    require('./common/service/application').name,
    require('./common/service/utils').name,

    //directives
    require('./common/directives/focus').name,
    require('./common/directives/formattedDate').name,
    require('./common/directives/match').name,
    require('./common/directives/rcSubmit').name,
    require('./common/directives/rcVerifySet').name,
    require('./common/directives/requiredPattern').name,
    require('./common/directives/selectOnClick').name,

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
                    seasons: function(seasonService, seasonModel) {
                        if (!seasonModel.loaded) {
                            return seasonService.getSeasons();
                        }
                    }
                }
            })
            .state('private', {
                abstract: true,
                url: '/',
                templateUrl: 'common/templates/master.tpl.html',
                resolve: {
                    user: function(userService, userModel) {
                        if (userModel.user.loaded) {
                            return userModel.user;
                        } else {
                            return userService.getCurrentUser();
                        }
                    },
                    seasons: function(seasonService, seasonModel) {
                        if (!seasonModel.loaded) {
                            return seasonService.getSeasons();
                        }
                    }
                }
            })
    })

    .run(function($rootScope, $urlRouter, $log, applicationService) {
        $log.debug("Application starting up...");
        applicationService.startup();
    })
;

loghApp.factory('authInterceptor', function ($q, $window, $location, $timeout, userModel, messageModel) {
    return {
        request: function (config) {
            config.headers = config.headers || {};
            if ($window.sessionStorage.token) {
                config.headers.Authorization = $window.sessionStorage.token;
            }
            return config;
        },
        responseError: function (rejection) {
          var message;
          if (rejection.status === 401) {
                var url = $location.url();
                message = rejection.data.message;
                $timeout(function () {
                  userModel.resetUser();
                    if ($location.path() == '/signin') {
                        messageModel.setMessage(message, false);
                    } else {
                        messageModel.setMessage(message, true);
                        $location.url('/signin').search({ redirect: encodeURIComponent(url) });
                    }
                }, 200);
          } else if (rejection.status === 404) {
              message = { type: 'danger', content: 'Houston, we have a problem. Page not found.' };
              $timeout(function () {
                  messageModel.setMessage(message, true);
                  $location.url('/');
              }, 200);
          } else if (rejection.status.toString().match(/^5\d{2}$/)) {
            // matches 5xx
            message = { type: 'danger', content: 'Internal Server Error' };
            $timeout(function () {
              messageModel.setMessage(message, false);
            }, 200);
          }
          return $q.reject(rejection);
        }
    };
});

loghApp.config(function ($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
});










},{"app-templates":"0VoVTq","./modules/public/home":2,"./modules/public/faq":3,"./modules/public/faq/general":4,"./modules/public/faq/pickem":5,"./modules/public/faq/survivor":6,"./modules/public/abuse":7,"./modules/public/signin":8,"./modules/public/register":9,"./modules/public/register/terms":10,"./modules/private/user":11,"./modules/private/user/reset":12,"./modules/private/league":13,"./modules/private/league/view":14,"./modules/private/league/new":15,"./modules/private/league/edit":16,"./modules/private/league/contact":17,"./modules/private/league/message":18,"./modules/private/league/join":19,"./modules/private/league/invite":20,"./modules/private/league/invite/request":21,"./modules/private/leagues":22,"./modules/private/leagues/join":23,"./modules/private/leagues/join/public":24,"./modules/private/leagues/join/private":25,"./modules/private/leagues/manage":26,"./modules/private/leagues/my":27,"./modules/private/team":28,"./modules/private/team/view":29,"./modules/private/team/view/picks":30,"./modules/private/team/message":31,"./modules/private/team/edit":32,"./modules/private/team/pick":33,"./modules/private/team/pick/one":34,"./modules/private/team/pick/many":35,"./modules/private/play":36,"./modules/private/play/leagues":37,"./modules/private/play/teams":38,"./modules/private/admin":39,"./modules/private/admin/game/edit":40,"./modules/private/admin/game/new":41,"./modules/private/admin/seasons":42,"./modules/private/admin/seasons/season":43,"./modules/private/admin/seasons/season/new":44,"./modules/private/admin/seasons/season/edit":45,"./modules/private/admin/week":46,"./modules/private/admin/week/new":47,"./modules/private/admin/week/edit":48,"./modules/private/admin/squads":49,"./modules/private/admin/squads/new":50,"./modules/private/admin/squads/edit":51,"./common/modules/header":52,"./common/modules/message":53,"./common/modules/footer":54,"./common/modules/confirm":55,"./common/models":56,"./common/api":57,"./common/command":58,"./common/service/application":59,"./common/service/utils":60,"./common/directives/focus":61,"./common/directives/formattedDate":62,"./common/directives/match":63,"./common/directives/rcSubmit":64,"./common/directives/rcVerifySet":65,"./common/directives/requiredPattern":66,"./common/directives/selectOnClick":67,"./common/filters":68}],4:[function(require,module,exports){
module.exports = angular.module('loghApp.public.faq.general', [])
  .config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('public.faq.general', {
        url: '',
        views: {
          faqContent: {
            templateUrl: 'modules/public/faq/general/faq.general.tpl.html'
          }
        }
      });
    $urlRouterProvider.otherwise('/');
  });

},{}],5:[function(require,module,exports){
module.exports = angular.module('loghApp.public.faq.pickem', [])
  .config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('public.faq.pickem', {
        url: '/pickem',
        views: {
          faqContent: {
            templateUrl: 'modules/public/faq/pickem/faq.pickem.tpl.html'
          }
        }
      });
    $urlRouterProvider.otherwise('/');
  });

},{}],6:[function(require,module,exports){
module.exports = angular.module('loghApp.public.faq.survivor', [])
  .config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('public.faq.survivor', {
        url: '/survivor',
        views: {
          faqContent: {
            templateUrl: 'modules/public/faq/survivor/faq.survivor.tpl.html'
          }
        }
      });
    $urlRouterProvider.otherwise('/');
  });

},{}],56:[function(require,module,exports){
/**
 * Define the application models
 */
module.exports = angular.module('loghApp.models', [])
    //models
    .service('userModel', require('./UserModel'))
    .service('messageModel', require('./MessageModel'))
    .service('seasonModel', require('./SeasonModel'))
;
},{"./UserModel":69,"./MessageModel":70,"./SeasonModel":71}],57:[function(require,module,exports){
/**
 * Define the remote services
 */
module.exports = angular.module('loghApp.api', [])
      .constant('apiConfig', require('./ApiConfig'))
      .service('gameService', require('./GameService'))
      .service('leagueService', require('./LeagueService'))
      .service('pickService', require('./PickService'))
      .service('seasonService', require('./SeasonService'))
      .service('squadService', require('./SquadService'))
      .service('statsService', require('./StatsService'))
      .service('teamService', require('./TeamService'))
      .service('userService', require('./UserService'))
      .service('weekService', require('./WeekService'))
;

},{"./ApiConfig":72,"./GameService":73,"./LeagueService":74,"./PickService":75,"./SeasonService":76,"./SquadService":77,"./StatsService":78,"./TeamService":79,"./UserService":80,"./WeekService":81}],58:[function(require,module,exports){
// session commands
require('./session/SigninCommand');
require('./session/SignoutCommand');

// user commands
require('./user/GetCurrentUserCommand');

module.exports = angular.module('loghApp.commandConfig', [])
    .config(function($commangularProvider) {

        // session events
        $commangularProvider.mapTo('SigninEvent').asSequence()
            .add('SigninCommand');
        $commangularProvider.mapTo('SignoutEvent').asSequence()
            .add('SignoutCommand');

        // user events
        $commangularProvider.mapTo('GetCurrentUserEvent').asSequence()
            .add('GetCurrentUserCommand');

    }
);


},{"./session/SigninCommand":82,"./session/SignoutCommand":83,"./user/GetCurrentUserCommand":84}],3:[function(require,module,exports){
module.exports = angular.module('loghApp.public.faq', [])
  .controller('FaqController', require('./FaqController'))
  .config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('public.faq', {
        url: 'faq',
        abstract: true,
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
            templateUrl: 'modules/public/faq/faq.tpl.html',
            controller: 'FaqController'
          },
          footer: {
            templateUrl: 'common/modules/footer/footer.tpl.html',
            controller: 'FooterController'
          }
        }
      });
    $urlRouterProvider.otherwise('/');
  });

},{"./FaqController":85}],2:[function(require,module,exports){

module.exports = angular.module('loghApp.public.home', [])
    .controller('HomeController', require('./HomeController'))
    .config(function($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('public.home', {
                url: '',
                views: {
                    header: {
                        templateUrl: 'common/modules/header/header.tpl.html',
                        controller: 'HeaderController'
                    },
                    landingMessage: {
                        templateUrl: 'common/modules/message/message.tpl.html',
                        controller: 'MessageController'
                    },
                    landing: {
                        templateUrl: 'modules/public/home/home.tpl.html',
                        controller: 'HomeController'
                    }
                }
            });
        $urlRouterProvider.otherwise('/');
    });
},{"./HomeController":86}],68:[function(require,module,exports){
/**
 * Define the application filters
 */
module.exports = angular.module('loghApp.filters', [])
    //filters
    .filter('offsetFilter', require('./OffsetFilter'))
    .filter('activeTeamFilter', require('./ActiveTeamFilter'))
    .filter('managedLeagueFilter', require('./ManagedLeagueFilter'))
    .filter('timeFilter', require('./TimeFilter'))
    .filter('weekPicksFilter', require('./WeekPicksFilter'))
;

},{"./OffsetFilter":87,"./ActiveTeamFilter":88,"./ManagedLeagueFilter":89,"./TimeFilter":90,"./WeekPicksFilter":91}],7:[function(require,module,exports){
module.exports = angular.module('loghApp.abuse', [])
  .controller('AbuseController', require('./AbuseController'));

},{"./AbuseController":92}],8:[function(require,module,exports){
module.exports = angular.module('loghApp.public.signin', [])
  .controller('SigninController', require('./SigninController'))
  .config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('public.signin', {
        url: 'signin',
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
            templateUrl: 'modules/public/signin/signin.tpl.html',
            controller: 'SigninController'
          },
          footer: {
            templateUrl: 'common/modules/footer/footer.tpl.html',
            controller: 'FooterController'
          }
        }
      });
    $urlRouterProvider.otherwise('/');
  });

},{"./SigninController":93}],9:[function(require,module,exports){
module.exports = angular.module('loghApp.register', [])
  .controller('RegisterController', require('./RegisterController'));

},{"./RegisterController":94}],11:[function(require,module,exports){
module.exports = angular.module('loghApp.user', [])
    .controller('UserController', require('./UserController'))
    .config(function($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('private.user', {
                url: 'user',
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
                        templateUrl: 'modules/private/user/user.tpl.html',
                        controller: 'UserController'
                    },
                    footer: {
                        templateUrl: 'common/modules/footer/footer.tpl.html',
                        controller: 'FooterController'
                    }
                }
            });
        $urlRouterProvider.otherwise('/');
    });

},{"./UserController":95}],13:[function(require,module,exports){
module.exports = angular.module('loghApp.league', [])
    .controller('LeagueController', require('./LeagueController'))
    .config(function($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('private.league', {
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
                        templateUrl: 'modules/private/league/league.tpl.html',
                        controller: 'LeagueController'
                    },
                    footer: {
                        templateUrl: 'common/modules/footer/footer.tpl.html',
                        controller: 'FooterController'
                    }
                }
            });
        $urlRouterProvider.otherwise('/');
    });

},{"./LeagueController":96}],22:[function(require,module,exports){
module.exports = angular.module('loghApp.leagues', [])
    .controller('LeaguesController', require('./LeaguesController'))
    .config(function($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('private.leagues', {
                abstract: true,
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
                        templateUrl: 'modules/private/leagues/leagues.tpl.html',
                        controller: 'LeaguesController'
                    },
                    footer: {
                        templateUrl: 'common/modules/footer/footer.tpl.html',
                        controller: 'FooterController'
                    }
                }
            });
        $urlRouterProvider.otherwise('/');
    });


},{"./LeaguesController":97}],28:[function(require,module,exports){
module.exports = angular.module('loghApp.team', [])
    .controller('TeamController', require('./TeamController'))
    .config(function($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('private.team', {
                abstract: true,
                url: 'season/{seasonId}/league/{leagueId}/team',
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
                        templateUrl: 'modules/private/team/team.tpl.html',
                        controller: 'TeamController'
                    },
                    footer: {
                        templateUrl: 'common/modules/footer/footer.tpl.html',
                        controller: 'FooterController'
                    }
                }
            })
        $urlRouterProvider.otherwise('/');
    });

},{"./TeamController":98}],36:[function(require,module,exports){
module.exports = angular.module('loghApp.play', [])
  .controller('PlayController', require('./PlayController'))
  .config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('private.play', {
        abstract: true,
        url: 'season/{seasonId}/my',
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
            templateUrl: 'modules/private/play/play.tpl.html',
            controller: 'PlayController'
          },
          footer: {
            templateUrl: 'common/modules/footer/footer.tpl.html',
            controller: 'FooterController'
          }
        }
      });
    $urlRouterProvider.otherwise('/');
  });


},{"./PlayController":99}],39:[function(require,module,exports){
module.exports = angular.module('loghApp.admin', [])
  .controller('AdminController', require('./AdminController'))
  .config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('private.admin', {
        abstract: true,
        url: 'admin/',
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
            templateUrl: 'modules/private/admin/admin.tpl.html',
            controller: 'AdminController'
          },
          footer: {
            templateUrl: 'common/modules/footer/footer.tpl.html',
            controller: 'FooterController'
          }
        }
      });
    $urlRouterProvider.otherwise('/');
  });

},{"./AdminController":100}],52:[function(require,module,exports){
module.exports = angular.module('loghApp.header', [])
    .controller('HeaderController', require('./HeaderController'))
},{"./HeaderController":101}],53:[function(require,module,exports){
module.exports = angular.module('loghApp.message', [])
    .controller('MessageController', require('./MessageController'));
},{"./MessageController":102}],54:[function(require,module,exports){
module.exports = angular.module('loghApp.footer', [])
  .controller('FooterController', require('./FooterController'))
},{"./FooterController":103}],55:[function(require,module,exports){
module.exports = angular.module('logh.confirm', [])
  .controller('ConfirmController', require('./ConfirmController'));

},{"./ConfirmController":104}],59:[function(require,module,exports){
/**
 * Define the application service
 */
module.exports = angular.module('logh.application', [])
    .service('applicationService', require('./ApplicationService'));
},{"./ApplicationService":105}],60:[function(require,module,exports){
module.exports = angular.module('logh.utils', [])
  .service('dateUtils', require('./DateUtils'));
},{"./DateUtils":106}],61:[function(require,module,exports){
//application directives
module.exports = angular.module('loghApp.directives.focus',[])
    .directive('loghFocus', require('./FocusDirective'))
;

},{"./FocusDirective":107}],62:[function(require,module,exports){
//application directives
module.exports = angular.module('logh.directives.formattedDate',[])
  .directive('formattedDate', require('./FormattedDateDirective'))
;

},{"./FormattedDateDirective":108}],63:[function(require,module,exports){
//application directives
module.exports = angular.module('loghApp.directives.match',[])
    .directive('match', require('./MatchDirective'))
;

},{"./MatchDirective":109}],64:[function(require,module,exports){
//application directives
module.exports = angular.module('logh.directives.rcSubmit',[])
  .directive('rcSubmit', require('./RCSubmitDirective'));

},{"./RCSubmitDirective":110}],65:[function(require,module,exports){
//application directives
module.exports = angular.module('logh.directives.rcVerifySet',[])
  .directive('rcVerifySet', require('./RCVerifySetDirective'));

},{"./RCVerifySetDirective":111}],66:[function(require,module,exports){
//application directives
module.exports = angular.module('loghApp.directives.requiredPattern',[])
    .directive('rpattern', require('./RequiredPatternDirective'))
;

},{"./RequiredPatternDirective":112}],67:[function(require,module,exports){
//application directives
module.exports = angular.module('loghApp.directives.selectOnClick',[])
  .directive('selectOnClick', require('./SelectOnClickDirective'))
;

},{"./SelectOnClickDirective":113}],10:[function(require,module,exports){
module.exports = angular.module('loghApp.register.terms', [])
  .controller('RegisterTermsController', require('./RegisterTermsController'));

},{"./RegisterTermsController":114}],12:[function(require,module,exports){
module.exports = angular.module('loghApp.user.reset', [])
  .controller('UserResetController', require('./UserResetController'));

},{"./UserResetController":115}],14:[function(require,module,exports){
module.exports = angular.module('loghApp.league.view', [])
  .controller('ViewLeagueController', require('./ViewLeagueController'))
  .config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('private.league.view', {
        url: '/{leagueId}?week',
        views: {
          leagueContent: {
            templateUrl: 'modules/private/league/view/league.view.tpl.html',
            controller: 'ViewLeagueController'
          }
        },
        resolve: {
          league: function(leagueService, $stateParams) {
            return leagueService.getLeague($stateParams.seasonId, $stateParams.leagueId);
          },
          leagueWeeks: function(league, weekService) {
            return weekService.getLeagueWeeks({ seasonId: league.data.season_id, leagueId: league.data.id });
          },
          leagueTeams: function(league, teamService, $stateParams) {
            return teamService.getAllLeagueTeams({ seasonId: league.data.season_id, leagueId: league.data.id, weekSlug: $stateParams.week });
          }
        }
      });
    $urlRouterProvider.otherwise('/');
  });

},{"./ViewLeagueController":116}],15:[function(require,module,exports){
module.exports = angular.module('loghApp.league.new', [])
  .controller('NewLeagueController', require('./NewLeagueController'))
  .config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('private.league.new', {
        url: '/new',
        views: {
          leagueContent: {
            templateUrl: 'modules/private/league/new/league.new.tpl.html',
            controller: 'NewLeagueController'
          }
        },
        resolve: {
          seasonId: function($stateParams) {
            return parseInt($stateParams.seasonId);
          }
        },
        reloadOnSearch: false
      });
    $urlRouterProvider.otherwise('/');
  });

},{"./NewLeagueController":117}],16:[function(require,module,exports){
module.exports = angular.module('loghApp.league.edit', [])
  .controller('EditLeagueController', require('./EditLeagueController'))
  .config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('private.league.edit', {
        url: '/{leagueId}/edit',
        views: {
          leagueContent: {
            templateUrl: 'modules/private/league/edit/league.edit.tpl.html',
            controller: 'EditLeagueController'
          }
        },
        resolve: {
          league: function(leagueService, $stateParams) {
            return leagueService.getLeague($stateParams.seasonId, $stateParams.leagueId);
          }
        }
      });
    $urlRouterProvider.otherwise('/');
  });

},{"./EditLeagueController":118}],17:[function(require,module,exports){
module.exports = angular.module('loghApp.league.contact', [])
  .controller('LeagueContactController', require('./LeagueContactController'));

},{"./LeagueContactController":119}],18:[function(require,module,exports){
module.exports = angular.module('loghApp.league.message', [])
  .controller('LeagueMessageController', require('./LeagueMessageController'));

},{"./LeagueMessageController":120}],19:[function(require,module,exports){
module.exports = angular.module('loghApp.league.join', [])
  .controller('LeagueJoinController', require('./LeagueJoinController'));

},{"./LeagueJoinController":121}],20:[function(require,module,exports){
module.exports = angular.module('loghApp.league.invite', [])
  .controller('LeagueInviteController', require('./LeagueInviteController'));

},{"./LeagueInviteController":122}],23:[function(require,module,exports){
module.exports = angular.module('loghApp.leagues.join', [])
  .controller('JoinLeaguesController', require('./JoinLeaguesController'))
  .config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('private.leagues.join', {
        url: '/',
        abstract: true,
        views: {
          leaguesContent: {
            templateUrl: 'modules/private/leagues/join/leagues.join.tpl.html',
            controller: 'JoinLeaguesController'
          }
        }
      })
    ;
    $urlRouterProvider.otherwise('/');
  });


},{"./JoinLeaguesController":123}],26:[function(require,module,exports){
module.exports = angular.module('loghApp.leagues.manage', [])
  .controller('ManageLeaguesController', require('./ManageLeaguesController'))
  .config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('private.leagues.manage', {
        url: '/managed',
        views: {
          leaguesContent: {
            templateUrl: 'modules/private/leagues/manage/leagues.manage.tpl.html',
            controller: 'ManageLeaguesController'
          }
        },
        resolve: {
          managedLeagues: function(user, leagueService, $stateParams) {
            return leagueService.getManagedLeagues($stateParams.seasonId);
          }
        }
      })
    ;
    $urlRouterProvider.otherwise('/');
  });


},{"./ManageLeaguesController":124}],27:[function(require,module,exports){
module.exports = angular.module('loghApp.leagues.my', [])
  .controller('MyLeaguesController', require('./MyLeaguesController'))
  .config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('private.leagues.my', {
        url: '',
        views: {
          leaguesContent: {
            templateUrl: 'modules/private/leagues/my/leagues.my.tpl.html',
            controller: 'MyLeaguesController'
          }
        },
        resolve: {
          leagues: function(user, leagueService, $stateParams) {
            return leagueService.getLeagues($stateParams.seasonId);
          }
        }
      })
    ;
    $urlRouterProvider.otherwise('/');
  });


},{"./MyLeaguesController":125}],29:[function(require,module,exports){
module.exports = angular.module('loghApp.team.view', [])
  .controller('ViewTeamController', require('./ViewTeamController'))
  .config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('private.team.view', {
        url: '/{teamId}',
        abstract: true,
        views: {
          teamContent: {
            templateUrl: 'modules/private/team/view/team.view.tpl.html',
            controller: 'ViewTeamController'
          }
        },
        resolve: {
          team: function(user, teamService, $stateParams) {
            return teamService.getTeam($stateParams.leagueId, $stateParams.teamId);
          },
          leagueTeams: function(team, teamService, $stateParams, userModel) {
            if (team.data.coach_ids.indexOf(userModel.user.id) > -1) {
              return teamService.getLeagueTeams($stateParams.leagueId);
            } else {
              return { data: [] };
            }
          }
        }
      });
    $urlRouterProvider.otherwise('/');
  });

},{"./ViewTeamController":126}],31:[function(require,module,exports){
module.exports = angular.module('loghApp.team.message', [])
  .controller('TeamMessageController', require('./TeamMessageController'));

},{"./TeamMessageController":127}],32:[function(require,module,exports){
module.exports = angular.module('loghApp.team.edit', [])
  .controller('EditTeamController', require('./EditTeamController'));

},{"./EditTeamController":128}],33:[function(require,module,exports){
module.exports = angular.module('loghApp.team.pick', [])
  .controller('TeamPickController', require('./TeamPickController'))
  .config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('private.team.pick', {
        url: '/{teamId}',
        abstract: true,
        views: {
          teamContent: {
            templateUrl: 'modules/private/team/pick/team.pick.tpl.html',
            controller: 'TeamPickController'
          }
        },
        resolve: {
          team: function($stateParams, teamService) {
            return teamService.getTeam($stateParams.leagueId, $stateParams.teamId);
          },
          week: function($stateParams, weekService) {
            return weekService.getCurrentWeek($stateParams.seasonId, $stateParams.leagueId);
          },
          games: function($stateParams, gameService) {
            return gameService.getCurrentGames($stateParams.leagueId);
          },
          picks: function($stateParams, pickService) {
            return pickService.getSelectedPicks({ teamId: $stateParams.teamId });
          }
        }
      });
    $urlRouterProvider.otherwise('/');
  });

},{"./TeamPickController":129}],37:[function(require,module,exports){
module.exports = angular.module('loghApp.play.leagues', [])
  .controller('PlayLeaguesController', require('./PlayLeaguesController'))
  .config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('private.play.leagues', {
        url: '/leagues',
        views: {
          playContent: {
            templateUrl: 'modules/private/play/leagues/play.leagues.tpl.html',
            controller: 'PlayLeaguesController'
          }
        },
        resolve: {
          leagues: function(user, $stateParams, leagueService) {
            return leagueService.getLeagues($stateParams.seasonId);
          }
        }
      })
    ;
    $urlRouterProvider.otherwise('/');
  });


},{"./PlayLeaguesController":130}],38:[function(require,module,exports){
module.exports = angular.module('loghApp.play.teams', [])
  .controller('PlayTeamsController', require('./PlayTeamsController'))
  .config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('private.play.teams', {
        url: '/teams',
        views: {
          playContent: {
            templateUrl: 'modules/private/play/teams/play.teams.tpl.html',
            controller: 'PlayTeamsController'
          }
        },
        resolve: {
          teams: function(user, $stateParams, teamService) {
            return teamService.getAllTeams({ seasonId: $stateParams.seasonId });
          }
        }

      })
    ;
    $urlRouterProvider.otherwise('/');
  });


},{"./PlayTeamsController":131}],42:[function(require,module,exports){
module.exports = angular.module('loghApp.admin.seasons', [])
  .controller('AdminSeasonsController', require('./AdminSeasonsController'))
  .config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('private.admin.seasons', {
        url: 'seasons',
        views: {
          adminContent: {
            templateUrl: 'modules/private/admin/seasons/admin.seasons.tpl.html',
            controller: 'AdminSeasonsController'
          }
        }
      });
    $urlRouterProvider.otherwise('/');
  });

},{"./AdminSeasonsController":132}],46:[function(require,module,exports){
module.exports = angular.module('loghApp.admin.week', [])
  .controller('AdminWeekController', require('./AdminWeekController'))
  .config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('private.admin.week', {
        url: 'seasons/{seasonId}/weeks/{weekId}',
        views: {
          adminContent: {
            templateUrl: 'modules/private/admin/week/admin.week.tpl.html',
            controller: 'AdminWeekController',
            resolve: {
              week: function($stateParams, weekService) {
                return weekService.getWeek($stateParams.seasonId, $stateParams.weekId);
              },
              games: function(week, gameService) {
                return gameService.getWeekGames(week.data.id);
              }
            }
          }
        }
      });
    $urlRouterProvider.otherwise('/');
  });

},{"./AdminWeekController":133}],49:[function(require,module,exports){
module.exports = angular.module('loghApp.admin.squads', [])
  .controller('AdminSquadsController', require('./AdminSquadsController'))
  .config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('private.admin.squads', {
        url: 'squads',
        views: {
          adminContent: {
            templateUrl: 'modules/private/admin/squads/admin.squads.tpl.html',
            controller: 'AdminSquadsController',
            resolve: {
              squads: function($stateParams, squadService) {
                return squadService.getSquads();
              }
            }
          }
        }
      });
    $urlRouterProvider.otherwise('/');
  });

},{"./AdminSquadsController":134}],21:[function(require,module,exports){
module.exports = angular.module('loghApp.league.invite.request', [])
  .controller('LeagueInviteRequestController', require('./LeagueInviteRequestController'));

},{"./LeagueInviteRequestController":135}],24:[function(require,module,exports){
module.exports = angular.module('loghApp.leagues.join.public', [])
  .controller('PublicLeaguesController', require('./PublicLeaguesController'))
  .config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('private.leagues.join.public', {
        url: 'public',
        views: {
          joinLeaguesContent: {
            templateUrl: 'modules/private/leagues/join/public/leagues.join.public.tpl.html',
            controller: 'PublicLeaguesController'
          }
        },
        resolve: {
          publicLeagues: function(user, leagueService, $stateParams) {
            return leagueService.getPublicLeagues($stateParams.seasonId);
          }
        }
      })
    ;
    $urlRouterProvider.otherwise('/');
  });


},{"./PublicLeaguesController":136}],25:[function(require,module,exports){
module.exports = angular.module('loghApp.leagues.join.private', [])
  .controller('PrivateLeaguesController', require('./PrivateLeaguesController'))
  .config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('private.leagues.join.private', {
        url: 'private',
        views: {
          joinLeaguesContent: {
            templateUrl: 'modules/private/leagues/join/private/leagues.join.private.tpl.html',
            controller: 'PrivateLeaguesController'
          }
        },
        resolve: {
          privateLeagues: function(user, leagueService, $stateParams) {
            return leagueService.getPrivateLeagues($stateParams.seasonId);
          }
        }
      })
    ;
    $urlRouterProvider.otherwise('/');
  });


},{"./PrivateLeaguesController":137}],30:[function(require,module,exports){
module.exports = angular.module('loghApp.team.view.picks', [])
  .controller('ViewTeamPicksController', require('./ViewTeamPicksController'))
  .config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('private.team.view.picks', {
        url: '?week',
        views: {
          teamPicksContent: {
            templateUrl: 'modules/private/team/view/picks/team.view.picks.tpl.html',
            controller: 'ViewTeamPicksController'
          }
        },
        resolve: {
          leagueWeeks: function(team, weekService, $stateParams) {
            return weekService.getLeagueWeeks({ seasonId: $stateParams.seasonId, leagueId: $stateParams.leagueId });
          },
          picks: function(team, pickService) {
            return pickService.getPicks({ teamId: team.data.id });
          },
          currentWeek: function(team, $stateParams, weekService) {
            if (!$stateParams.week) {
              return weekService.getCurrentWeek($stateParams.seasonId, $stateParams.leagueId);
            } else {
              return null;
            }
          }
        },
        reloadOnSearch: false
      });
    $urlRouterProvider.otherwise('/');
  });

},{"./ViewTeamPicksController":138}],34:[function(require,module,exports){
module.exports = angular.module('loghApp.team.pick.one', [])
  .controller('TeamPickOneController', require('./TeamPickOneController'))
  .config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('private.team.pick.one', {
        url: '/pick',
        views: {
          pickContent: {
            templateUrl: 'modules/private/team/pick/one/team.pick.one.tpl.html',
            controller: 'TeamPickOneController'
          }
        }
      });
    $urlRouterProvider.otherwise('/');
  });

},{"./TeamPickOneController":139}],35:[function(require,module,exports){
module.exports = angular.module('loghApp.team.pick.many', [])
  .controller('TeamPickManyController', require('./TeamPickManyController'))
  .config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('private.team.pick.many', {
        url: '/picks',
        views: {
          pickContent: {
            templateUrl: 'modules/private/team/pick/many/team.pick.many.tpl.html',
            controller: 'TeamPickManyController'
          }
        }
      });
    $urlRouterProvider.otherwise('/');
  });

},{"./TeamPickManyController":140}],40:[function(require,module,exports){
module.exports = angular.module('loghApp.admin.game.edit', [])
  .controller('AdminGameEditController', require('./AdminGameEditController'));

},{"./AdminGameEditController":141}],41:[function(require,module,exports){
module.exports = angular.module('loghApp.admin.game.new', [])
  .controller('AdminGameNewController', require('./AdminGameNewController'));

},{"./AdminGameNewController":142}],43:[function(require,module,exports){
module.exports = angular.module('loghApp.admin.season', [])
  .controller('AdminSeasonController', require('./AdminSeasonController'))
  .config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('private.admin.season', {
        url: 'seasons/{seasonId}',
        views: {
          adminContent: {
            templateUrl: 'modules/private/admin/seasons/season/admin.season.tpl.html',
            controller: 'AdminSeasonController',
            resolve: {
              season: function($stateParams, seasonService) {
                return seasonService.getSeason($stateParams.seasonId);
              },
              weeks: function($stateParams, weekService) {
                return weekService.getSeasonWeeks($stateParams.seasonId);
              },
              leagues: function($stateParams, leagueService) {
                return leagueService.getAllLeagues($stateParams.seasonId);
              }
            }
          }
        }
      });
    $urlRouterProvider.otherwise('/');
  });

},{"./AdminSeasonController":143}],47:[function(require,module,exports){
module.exports = angular.module('loghApp.admin.week.new', [])
  .controller('AdminWeekNewController', require('./AdminWeekNewController'));

},{"./AdminWeekNewController":144}],48:[function(require,module,exports){
module.exports = angular.module('loghApp.admin.week.edit', [])
  .controller('AdminWeekEditController', require('./AdminWeekEditController'));

},{"./AdminWeekEditController":145}],50:[function(require,module,exports){
module.exports = angular.module('loghApp.admin.squads.new', [])
  .controller('AdminSquadsNewController', require('./AdminSquadsNewController'));

},{"./AdminSquadsNewController":146}],51:[function(require,module,exports){
module.exports = angular.module('loghApp.admin.squads.edit', [])
  .controller('AdminSquadsEditController', require('./AdminSquadsEditController'));

},{"./AdminSquadsEditController":147}],44:[function(require,module,exports){
module.exports = angular.module('loghApp.admin.season.new', [])
  .controller('AdminSeasonNewController', require('./AdminSeasonNewController'));

},{"./AdminSeasonNewController":148}],45:[function(require,module,exports){
module.exports = angular.module('loghApp.admin.season.edit', [])
  .controller('AdminSeasonEditController', require('./AdminSeasonEditController'));

},{"./AdminSeasonEditController":149}],69:[function(require,module,exports){

var UserModel = function($rootScope, $window, $log) {

    var user = {};
    user.loaded = false;
    user.id = '';
    user.email = '';
    user.first_name = '';
    user.last_name = '';
    user.admin = false;
    this.user = user;

    var teamMessageOpen = {};
    this.teamMessageOpen = teamMessageOpen;

    var leagueMessageOpen = {};
    this.leagueMessageOpen = leagueMessageOpen;

    this.setUser = function(userData) {
        user.loaded = true;
        user = angular.extend(user, userData);
        $rootScope.$broadcast('userModel::userUpdated', user);
        $log.debug("UserModel: setUser: " + user.id);
        $log.debug("UserModel: setUser: " + user.email);
    };

    this.resetUser = function() {
        $window.sessionStorage.removeItem('token');

        user = {};
        user.loaded = false;
        user.id = '';
        user.email = '';
        user.first_name = '';
        user.last_name = '';
        user.admin = false;

        this.user = user;
    };

    /**
     * Invoked on startup, like a constructor.
     */
    var init = function () {
        $log.debug("creating user model...");
    };
    init();

};

UserModel.$inject = ['$rootScope', '$window', '$log'];
module.exports = UserModel;
},{}],70:[function(require,module,exports){

var MessageModel = function($rootScope, $log) {

    var model = this;
    var queue = [];

    var message = {};
    message.loaded = false;
    message.type = ''; // can be success, info, warning or danger
    message.content = '';
    message.shareLeague = false;
    message.shareTeam = false;
    message.shareUser = false;

    this.message = message;

    this.setMessage = function(messageData, delay) {
        var message = {};
        message.loaded = true;
        message = angular.extend(message, messageData);
        if (delay) {
            queue[0] = message; // queue it up for after a location change
        } else {
            model.message = message; // show the message asap
            queue = []; // clear the queue as message will be showed immediately
        }
        $log.debug("MessageModel: content: " + message.content);
    };

    this.resetMessage = function() {
        message = {};
        message.loaded = false;
        message.type = '';
        message.content = '';
        message.shareLeague = false;
        message.shareTeam = false;
        message.shareUser = false;

        this.message = message;
    };

    $rootScope.$on("$locationChangeStart", function() {
        model.resetMessage();
    });

    $rootScope.$on("$locationChangeSuccess", function() {
        model.message = queue.shift() || {};
    });

    /**
     * Invoked on startup, like a constructor.
     */
    var init = function () {
        $log.debug("creating message model...");
    };
    init();

};

MessageModel.$inject = ['$rootScope', '$log'];
module.exports = MessageModel;

},{}],71:[function(require,module,exports){
var SeasonModel = function() {

  var model = this;

  var seasons = [];
  var currentSeasons = [];
  var startedSeasons = [];
  var endedSeasons = [];
  var selectedSeasonId;
  var loaded = false;

  this.seasons = seasons;
  this.currentSeasons = currentSeasons;
  this.startedSeasons = startedSeasons;
  this.endedSeasons = endedSeasons;
  this.selectedSeasonId = selectedSeasonId;
  this.loaded = loaded;

  this.getCurrentSeason = function() {
    return model.currentSeasons[0];
  };

  this.setSeasons = function(seasonsArray) {
    if (!angular.isArray(seasonsArray)) return;
    model.seasons = seasonsArray;
    model.currentSeasons = _.filter(seasonsArray, function(season) {
      return season.current;
    });
    model.startedSeasons = _.filter(seasonsArray, function(season) {
      return season.started;
    });
    model.endedSeasons = _.filter(seasonsArray, function(season) {
      return season.ended;
    });
    model.setSelectedSeasonId(model.getCurrentSeason().id);
    model.loaded = true;
  };

  this.setSelectedSeasonId = function(seasonId) {
    model.selectedSeasonId = seasonId;
  };

};

SeasonModel.$inject = [];
module.exports = SeasonModel;
},{}],72:[function(require,module,exports){
/*
 *  Global config for remote services
 */

var ApiConfig =  {
    baseURL: '/api/'
};

module.exports = ApiConfig;

},{}],73:[function(require,module,exports){
var GameService = function($http, $log, $state, apiConfig, messageModel) {

  this.getCurrentGames = function(leagueId) {
    var apiUrl = apiConfig.baseURL + "games/current?league_id=" + leagueId;

    var promise = $http.get(apiUrl)
      .success(function(data) {
        $log.debug("GameService: getCurrentGames success");
        return data;
      })
      .error(function(data) {
        $log.debug("GameService: getCurrentGames failed");
        return data;
      });

    return promise;
  };

  this.getWeekGames = function(weekId) {
    var apiUrl = apiConfig.baseURL + "weeks/" + weekId + "/games";

    var promise = $http.get(apiUrl)
      .success(function(data) {
        $log.debug("GameService: getWeekGames success");
        return data;
      })
      .error(function(data) {
        $log.debug("GameService: getWeekGames failed");
        return data;
      });

    return promise;
  };

  this.createGame = function(gameParams) {
    var promise = $http.post(apiConfig.baseURL + "admin/weeks/" + gameParams.week_id + "/games",
      { game: gameParams })
      .success(function(data) {
        $log.debug("GameService: createGame success");
        // todo: this relies on a monkey patch at the moment - https://github.com/angular-ui/ui-router/issues/582
        // but may be resolved with future releases of angular-ui-router
        $state.reload(); // reloads all the resolves for the view league page and reinstantiates the controller
        messageModel.setMessage(data.message, false);
        return data;
      })
      .error(function(data) {
        $log.debug("GameService: createGame failed");
        messageModel.setMessage(data.message, false);
        return data;
      });

    return promise;
  };

  this.updateGame = function(gameParams) {
    var promise = $http.put(apiConfig.baseURL + "admin/weeks/" + gameParams.week_id + "/games/" + gameParams.id,
      { game: gameParams })
      .success(function(data) {
        $log.debug("GameService: updateGame success");
        // todo: this relies on a monkey patch at the moment - https://github.com/angular-ui/ui-router/issues/582
        // but may be resolved with future releases of angular-ui-router
        $state.reload(); // reloads all the resolves for the view league page and reinstantiates the controller
        messageModel.setMessage(data.message, false);
        return data;
      })
      .error(function(data) {
        $log.debug("GameService: updateGame failed");
        messageModel.setMessage(data.message, false);
        return data;
      });

    return promise;
  };

};

GameService.$inject = ['$http', '$log', '$state', 'apiConfig', 'messageModel'];
module.exports = GameService;
},{}],74:[function(require,module,exports){
var LeagueService = function($http, $log, $q, $state, apiConfig, messageModel) {

    this.getLeague = function(seasonId, leagueId) {
        var promise = $http.get(apiConfig.baseURL + "seasons/" + seasonId + "/leagues/" + leagueId)
            .success(function(data) {
                $log.debug("LeagueService: getLeague success");
                return data;
            })
            .error(function(data) {
                $log.debug("LeagueService: getLeague failed");
                return data;
            });

        return promise;
    };

    this.getAllLeagues = function(seasonId) {
        var promise = $http.get(apiConfig.baseURL + "admin/seasons/" + seasonId + "/leagues")
            .success(function(data) {
                $log.debug("LeagueService: getAllLeagues success");
                return data;
            })
            .error(function(data) {
                $log.debug("LeagueService: getAllLeagues failed");
                return data;
            });

        return promise;
    };

    this.getLeagues = function(seasonId) {
        var promise = $http.get(apiConfig.baseURL + "seasons/" + seasonId + "/leagues")
            .success(function(data) {
                $log.debug("LeagueService: getLeagues success");
                return data;
            })
            .error(function(data) {
                $log.debug("LeagueService: getLeagues failed");
                return data;
            });

        return promise;
    };

    this.getManagedLeagues = function(seasonId) {
        var promise = $http.get(apiConfig.baseURL + "seasons/" + seasonId + "/leagues/managed")
            .success(function(data) {
                $log.debug("LeagueService: getManagedLeagues success");
                return data;
            })
            .error(function(data) {
                $log.debug("LeagueService: getManagedLeagues failed");
                return data;
            });

        return promise;
    };

    this.getPublicLeagues = function(seasonId) {
        var promise = $http.get(apiConfig.baseURL + "seasons/" + seasonId + "/leagues/public")
            .success(function(data) {
                $log.debug("LeagueService: getPublicLeagues success");
                return data;
            })
            .error(function(data) {
                $log.debug("LeagueService: getPublicLeagues failed");
                return data;
            });

        return promise;
    };

    this.getPrivateLeagues = function(seasonId) {
        var promise = $http.get(apiConfig.baseURL + "seasons/" + seasonId + "/leagues/private")
            .success(function(data) {
                $log.debug("LeagueService: getPrivateLeagues success");
                return data;
            })
            .error(function(data) {
                $log.debug("LeagueService: getPrivateLeagues failed");
                return data;
            });

        return promise;
    };

    this.createLeague = function(leagueParams) {
        var deferred = $q.defer();
        $http.post(apiConfig.baseURL + "seasons/" + leagueParams.season_id + "/leagues",
            { league: leagueParams })
            .success(function(data) {
                $log.debug("LeagueService: createLeague success");
                messageModel.setMessage({ type: data.message.type, content: data.message.content, shareLeague: true  }, true);
                deferred.resolve(data);
            })
            .error(function(data) {
                $log.debug("LeagueService: createLeague failed");
                messageModel.setMessage(data.message, false);
                deferred.reject(data);
            });

        return deferred.promise;
    };

    this.updateLeague = function(leagueParams) {
        var deferred = $q.defer();
        $http.put(apiConfig.baseURL + "seasons/" + leagueParams.season_id + "/leagues/" + leagueParams.id,
            { league: leagueParams })
            .success(function(data) {
                $log.debug("LeagueService: updateLeague success");
                messageModel.setMessage(data.message, true);
                deferred.resolve(data);
            })
            .error(function(data) {
                $log.debug("LeagueService: updateLeague failed");
                messageModel.setMessage(data.message, false);
                deferred.reject(data);
            });

        return deferred.promise;
    };

    this.closeLeague = function(leagueParams) {
      var promise = $http.get(apiConfig.baseURL + "seasons/" + leagueParams.season_id + "/leagues/" + leagueParams.id + "/close")
        .success(function(data) {
          $log.debug("LeagueService: closeLeague success");
          // todo: this relies on a monkey patch at the moment - https://github.com/angular-ui/ui-router/issues/582
          // but may be resolved with future releases of angular-ui-router
          $state.reload(); // reloads all the resolves for the view league page and reinstantiates the controller
          messageModel.setMessage(data.message, false);
          return data;
        })
        .error(function(data) {
          $log.debug("LeagueService: closeLeague failed");
          messageModel.setMessage(data.message, false);
          return data;
        });

      return promise;
    };

    this.updateLeagueMessage = function(leagueParams, emailAlive, emailAll) {
      var deferred = $q.defer();
      $http.put(apiConfig.baseURL + "seasons/" + leagueParams.season_id + "/leagues/" + leagueParams.id + "/message",
            { league: leagueParams, emailAlive: emailAlive, emailAll: emailAll })
            .success(function(data) {
                $log.debug("LeagueService: updateLeagueMessage success");
                messageModel.setMessage(data.message, false);
                deferred.resolve(leagueParams.message);
            })
            .error(function(data) {
                $log.debug("LeagueService: updateLeagueMessage failed");
                messageModel.setMessage(data.message, false);
                deferred.reject();
            });

        return deferred.promise;
    };

    this.sendCommishMessage = function(leagueParams, message) {
        var deferred = $q.defer();
        $http.put(apiConfig.baseURL + "seasons/" + leagueParams.season_id + "/leagues/" + leagueParams.id + "/contact",
            { contact: message })
              .success(function(data) {
                  $log.debug("LeagueService: sendCommishMessage success");
                  messageModel.setMessage(data.message, false);
                  deferred.resolve();
              })
              .error(function(data) {
                  $log.debug("LeagueService: sendCommishMessage failed");
                  messageModel.setMessage(data.message, false);
                  deferred.reject();
              });

        return deferred.promise;
    };

    this.getInvites = function(leagueId) {
      var promise = $http.get(apiConfig.baseURL + "leagues/" + leagueId + "/invitations")
        .success(function(data) {
          $log.debug("LeagueService: getInvites success");
          return data;
        })
        .error(function(data) {
          $log.debug("LeagueService: getInvites failed");
          messageModel.setMessage(data.message, false);
          return data;
        });

      return promise;
    };

    this.createInvite = function(inviteParams) {
        var promise = $http.post(apiConfig.baseURL + "leagues/" + inviteParams.league_id + "/invitations",
            { invitation: inviteParams })
            .success(function(data) {
                $log.debug("LeagueService: createInvite success");
                messageModel.setMessage(data.message, false);
                return data;
            })
            .error(function(data) {
                $log.debug("LeagueService: createInvite failed");
                messageModel.setMessage(data.message, false);
                return data;
            });

        return promise;
    };

    this.requestInvite = function(inviteParams) {
      var promise = $http.post(apiConfig.baseURL + "leagues/" + inviteParams.league_id + "/invitations/new",
            { invitation: inviteParams })
            .success(function(data) {
                $log.debug("LeagueService: requestInvite success");
                messageModel.setMessage(data.message, false);
                return data;
            })
            .error(function(data) {
                $log.debug("LeagueService: requestInvite failed");
                messageModel.setMessage(data.message, false);
                return data;
            });

        return promise;
    };

};

LeagueService.$inject = ['$http', '$log', '$q', '$state', 'apiConfig', 'messageModel'];
module.exports = LeagueService;
},{}],75:[function(require,module,exports){
var PickService = function($http, $log, $q, apiConfig, messageModel) {

  this.getPicks = function(params) {
    var apiUrl = apiConfig.baseURL + "teams/" + params.teamId + "/picks";

    var promise = $http.get(apiUrl)
      .success(function(data) {
        $log.debug("PickService: getPicks success");
        return data;
      })
      .error(function(data) {
        $log.debug("PickService: getPicks failed");
        return data;
      });

    return promise;
  };

  this.getSelectedPicks = function(params) {
    var apiUrl = apiConfig.baseURL + "teams/" + params.teamId + "/picks/selected";

    var promise = $http.get(apiUrl)
      .success(function(data) {
        $log.debug("PickService: getSelectedPicks success");
        return data;
      })
      .error(function(data) {
        $log.debug("PickService: getSelectedPicks failed");
        return data;
      });

    return promise;
  };

  this.savePick = function(pickParams) {
    var deferred = $q.defer(),
        apiUrl = apiConfig.baseURL + "teams/" + pickParams.team_id + "/picks";

    $http.post(apiUrl, { pick: pickParams })
      .success(function(data) {
        $log.debug("PickService: savePick success");
        messageModel.setMessage(data.message, true);
        deferred.resolve(data);
      })
      .error(function(data) {
        $log.debug("PickService: savePick failed");
        messageModel.setMessage(data.message, true);
        deferred.reject();
      });

    return deferred.promise;
  };

  this.savePicks = function(teamId, picks) {
    var deferred = $q.defer(),
        apiUrl = apiConfig.baseURL + "teams/" + teamId + "/picks/many";

    $http.post(apiUrl, { picks: picks })
      .success(function(data) {
        $log.debug("PickService: savePicks success");
        messageModel.setMessage(data.message, true);
        deferred.resolve(data);
      })
      .error(function(data) {
        $log.debug("PickService: savePicks failed");
        messageModel.setMessage(data.message, true);
        deferred.reject();
      });

    return deferred.promise;
  };

};

PickService.$inject = ['$http', '$log', '$q', 'apiConfig', 'messageModel'];
module.exports = PickService;
},{}],76:[function(require,module,exports){
var SeasonService = function($http, $log, $state, $q, apiConfig, messageModel, seasonModel) {

  var service = this;

  this.getSeasons = function() {
        var deferred = $q.defer();
        $http.get(apiConfig.baseURL + "seasons")
            .success(function(data) {
                $log.debug("SeasonService: getSeasons success");
                seasonModel.setSeasons(data);
                deferred.resolve(data);
            })
            .error(function(data) {
                $log.debug("SeasonService: getSeasons failed");
                deferred.reject();
            });
        return deferred.promise;
    };

    this.getSeason = function(seasonId) {
        var promise = $http.get(apiConfig.baseURL + "admin/seasons/" + seasonId)
            .success(function(data) {
                $log.debug("SeasonService: getSeason success");
                return data;
            })
            .error(function(data) {
                $log.debug("SeasonService: getSeason failed");
                messageModel.setMessage(data.message, true);
                return data;
            });
        return promise;
    };

    this.createSeason = function(seasonParams) {
      var promise = $http.post(apiConfig.baseURL + "admin/seasons/",
        { season: seasonParams })
        .success(function(data) {
          $log.debug("SeasonService: createSeason success");
          messageModel.setMessage(data.message, false);
          // need to call getSeasons() again to reset the seasonmodel
          service.getSeasons()
            .then(
              function(response) {
                // todo: this relies on a monkey patch at the moment - https://github.com/angular-ui/ui-router/issues/582
                // but may be resolved with future releases of angular-ui-router
                $state.reload(); // reloads all the resolves for the view league page and reinstantiates the controller
              }
            );
          return data;
        })
        .error(function(data) {
          $log.debug("SeasonService: createSeason failed");
          messageModel.setMessage(data.message, false);
          return data;
        });

      return promise;
    };

    this.updateSeason = function(seasonParams) {
      var promise = $http.put(apiConfig.baseURL + "admin/seasons/" + seasonParams.id,
        { season: seasonParams })
        .success(function(data) {
          $log.debug("SeasonService: updateSeason success");
          // todo: this relies on a monkey patch at the moment - https://github.com/angular-ui/ui-router/issues/582
          // but may be resolved with future releases of angular-ui-router
          $state.reload(); // reloads all the resolves for the view league page and reinstantiates the controller
          messageModel.setMessage(data.message, false);
          return data;
        })
        .error(function(data) {
          $log.debug("SeasonService: updateSeason failed");
          messageModel.setMessage(data.message, false);
          return data;
        });

      return promise;
    };

};

SeasonService.$inject = ['$http', '$log', '$state', '$q', 'apiConfig', 'messageModel', 'seasonModel'];
module.exports = SeasonService;
},{}],77:[function(require,module,exports){
var SquadService = function($http, $log, $state, apiConfig, messageModel) {

  this.getSquads = function() {
    var apiUrl = apiConfig.baseURL + "admin/squads/all";

    var promise = $http.get(apiUrl)
      .success(function(data) {
        $log.debug("SquadService: getSquads success");
        return data;
      })
      .error(function(data) {
        $log.debug("SquadService: getSquads failed");
        return data;
      });

    return promise;
  };

  this.getWeekSquads = function(week) {
    var apiUrl = apiConfig.baseURL + "admin/weeks/" + week.id + "/squads";

    var promise = $http.get(apiUrl)
      .success(function(data) {
        $log.debug("SquadService: getWeekSquads success");
        return data;
      })
      .error(function(data) {
        $log.debug("SquadService: getWeekSquads failed");
        return data;
      });

    return promise;
  };

  this.createSquad = function(squadParams) {
    var promise = $http.post(apiConfig.baseURL + "admin/squads/",
      { squad: squadParams })
      .success(function(data) {
        $log.debug("SquadService: createSquad success");
        // todo: this relies on a monkey patch at the moment - https://github.com/angular-ui/ui-router/issues/582
        // but may be resolved with future releases of angular-ui-router
        $state.reload(); // reloads all the resolves for the view league page and reinstantiates the controller
        messageModel.setMessage(data.message, false);
        return data;
      })
      .error(function(data) {
        $log.debug("SquadService: createSquad failed");
        messageModel.setMessage(data.message, false);
        return data;
      });

    return promise;
  };

  this.updateSquad = function(squadParams) {
    var promise = $http.put(apiConfig.baseURL + "admin/squads/" + squadParams.id,
      { squad: squadParams })
      .success(function(data) {
        $log.debug("SquadService: updateSquad success");
        // todo: this relies on a monkey patch at the moment - https://github.com/angular-ui/ui-router/issues/582
        // but may be resolved with future releases of angular-ui-router
        $state.reload(); // reloads all the resolves for the view league page and reinstantiates the controller
        messageModel.setMessage(data.message, false);
        return data;
      })
      .error(function(data) {
        $log.debug("SquadService: updateSquad failed");
        messageModel.setMessage(data.message, false);
        return data;
      });

    return promise;
  };

};

SquadService.$inject = ['$http', '$log', '$state', 'apiConfig', 'messageModel'];
module.exports = SquadService;
},{}],78:[function(require,module,exports){
var StatsService = function($http, $log, $q, apiConfig) {

  this.getStats = function() {
    var deferred = $q.defer();
    $http.get(apiConfig.baseURL + "stats")
      .success(function(data) {
        $log.debug("StatsService: getStats success");
        deferred.resolve(data);
      })
      .error(function(data) {
        $log.debug("StatsService: getStats failed");
        deferred.reject();
      });
    return deferred.promise;
  };

};

StatsService.$inject = ['$http', '$log', '$q', 'apiConfig'];
module.exports = StatsService;
},{}],79:[function(require,module,exports){
var TeamService = function($http, $log, $q, apiConfig, messageModel) {

    this.getTeam = function(leagueId, teamId) {
        var promise = $http.get(apiConfig.baseURL + "leagues/" + leagueId + "/teams/" + teamId)
            .success(function(data) {
                $log.debug("TeamService: getTeam success");
                return data;
            })
            .error(function(data) {
                $log.debug("TeamService: getTeam failed");
                return data;
            });

        return promise;
    };

    this.getAllTeams = function(params) {
        var apiUrl = apiConfig.baseURL + "seasons/" + params.seasonId + "/teams/all";
        var promise = $http.get(apiUrl)
            .success(function(data) {
                $log.debug("TeamService: getAllTeams success");
                return data;
            })
            .error(function(data) {
                $log.debug("TeamService: getAllTeams failed");
                return data;
            });

        return promise;
    };

    this.getAllLeagueTeams = function(params) {
        var apiUrl = apiConfig.baseURL + "seasons/" + params.seasonId + "/teams/all?league_id=" + params.leagueId;
        if (params.weekSlug) {
            apiUrl += "&week_slug=" + params.weekSlug;
        }

        var promise = $http.get(apiUrl)
            .success(function(data) {
                $log.debug("TeamService: getAllLeagueTeams success");
                return data;
            })
            .error(function(data) {
                $log.debug("TeamService: getAllLeagueTeams failed");
                return data;
            });

        return promise;
    };

    this.getLeagueTeams = function(leagueId) {
        var apiUrl = apiConfig.baseURL + "leagues/" + leagueId + "/teams";
        var promise = $http.get(apiUrl)
            .success(function(data) {
                $log.debug("TeamService: getLeagueTeams success");
                return data;
            })
            .error(function(data) {
                $log.debug("TeamService: getLeagueTeams failed");
                return data;
            });

        return promise;
    };


    this.createTeam = function(teamParams) {
      var deferred = $q.defer();

      $http.post(apiConfig.baseURL + "leagues/" + teamParams.league_id + "/teams",
            { team: teamParams })
            .success(function(data) {
                $log.debug("TeamService: createTeam success");
                deferred.resolve(data);
            })
            .error(function(data) {
                $log.debug("TeamService: createTeam failed");
                deferred.reject(data);
            });

        return deferred.promise;
    };

    this.updateTeam = function(team) {
        var promise = $http.put(apiConfig.baseURL + "leagues/" + team.league.id + "/teams/" + team.id,
            { team: team })
            .success(function(data) {
                $log.debug("TeamService: updateTeam success");
                messageModel.setMessage(data.message, false);
                return data;
            })
            .error(function(data) {
                $log.debug("TeamService: updateTeam failed");
                messageModel.setMessage(data.message, false);
                return data;
            });

        return promise;
    };

    this.updateTeamMessage = function(teamParams, emailMessage) {
      var deferred = $q.defer();
      $http.put(apiConfig.baseURL + "leagues/" + teamParams.league.id + "/teams/" + teamParams.id + "/message",
        { team: teamParams, emailMessage: emailMessage })
        .success(function(data) {
          $log.debug("TeamService: updateTeamMessage success");
          messageModel.setMessage(data.message, false);
          deferred.resolve(teamParams.message);
        })
        .error(function(data) {
          $log.debug("TeamService: updateTeamMessage failed");
          messageModel.setMessage(data.message, false);
          deferred.reject();
        });

      return deferred.promise;
    };

    this.sendCommishMessage = function(teamParams, message) {
      var deferred = $q.defer();
      $http.put(apiConfig.baseURL + "leagues/" + teamParams.league.id + "/teams/" + teamParams.id + "/contact",
        { contact: message })
        .success(function(data) {
          $log.debug("TeamService: sendCommishMessage success");
          messageModel.setMessage(data.message, false);
          deferred.resolve();
        })
        .error(function(data) {
          $log.debug("TeamService: sendCommishMessage failed");
          messageModel.setMessage(data.message, false);
          deferred.reject();
        });

      return deferred.promise;
    };

    this.activateTeam = function(team) {
        var deferred = $q.defer();
        $http.put(apiConfig.baseURL + "leagues/" + team.league.id + "/teams/" + team.id + "/activate")
            .success(function(data) {
                $log.debug("TeamService: activateTeam success");
                messageModel.setMessage(data.message, false);
                deferred.resolve(true);
            })
            .error(function(data) {
                $log.debug("TeamService: activateTeam failed");
                messageModel.setMessage(data.message, false);
                deferred.reject();
            });

        return deferred.promise;
    };

    this.deactivateTeam = function(team) {
        var deferred = $q.defer();
        $http.put(apiConfig.baseURL + "leagues/" + team.league.id + "/teams/" + team.id + "/deactivate")
            .success(function(data) {
                $log.debug("TeamService: deactivateTeam success");
                messageModel.setMessage(data.message, false);
                deferred.resolve(false);
            })
            .error(function(data) {
                $log.debug("TeamService: deactivateTeam failed");
                messageModel.setMessage(data.message, false);
                deferred.reject();
            });

      return deferred.promise;
    };

};

TeamService.$inject = ['$http', '$log', '$q', 'apiConfig', 'messageModel'];
module.exports = TeamService;
},{}],80:[function(require,module,exports){
var UserService = function($http, $log, $state, $location, $window, $timeout, apiConfig, messageModel, userModel, seasonModel) {

    var userService = this;

    this.signin = function(email, password) {
      userModel.resetUser();
      var promise = $http.post(
            apiConfig.baseURL + "sessions",
            { email: email, password: password })
            .success(function(data) {
                $log.debug("UserService: signin success");
                $window.sessionStorage.token = data.token;
                var redirect = decodeURIComponent($location.search().redirect);
                if (redirect !== 'undefined') {
                    $location.search('redirect', null); // remove the redirect query param
                    $location.url(redirect);
                    if (['/', '/signin', '/register'].indexOf(redirect) !== -1) {
                      userService.getCurrentUser();
                    }
                } else  {
                  $location.url('/season/' + seasonModel.selectedSeasonId + '/my/teams');
                }
                return data;
            })
            .error(function(data) {
                $log.debug("UserService: signin failure");
                return data;
            });
        return promise;
    };

    this.signinGuest = function() {
      userModel.resetUser();
      var promise = $http.post(
            apiConfig.baseURL + "sessions/guest")
            .success(function(data) {
                $window.sessionStorage.token = data.token;
                var redirect = decodeURIComponent($location.search().redirect);
                if (redirect !== 'undefined') {
                    $location.search('redirect', null); // remove the redirect query param
                    $location.url(redirect);
                    if (['/', '/signin', '/register'].indexOf(redirect) !== -1) {
                      userService.getCurrentUser();
                    }
                } else  {
                  $location.url('/season/' + seasonModel.selectedSeasonId + '/my/teams');
                }
                return data;
            })
            .error(function(data) {
                return data;
            });
        return promise;
    };

    this.signout = function() {
      userModel.resetUser();
      var promise = $http.delete(apiConfig.baseURL + 'sessions/destroy')
            .success(function(data) {
                $log.debug("UserService: signout success");
                if ($state.current.name == 'public.signin') {
                    messageModel.setMessage(data.message, false);
                } else {
                    messageModel.setMessage(data.message, true);
                    $state.go('public.signin');
                }
                return data;
            })
            .error(function(data) {
                $log.debug("UserService: signout failure");
                messageModel.setMessage(data.message, false);
                return data;
            });

        return promise;
    };

    this.resetUser = function(email) {
      var promise = $http.post(apiConfig.baseURL + "sessions/reset", { email: email })
          .success(function(data) {
            $log.debug("UserService: reset success");
            messageModel.setMessage(data.message, false);
            return data;
          })
          .error(function(data) {
            $log.debug("UserService: reset failure");
            messageModel.setMessage(data.message, false);
            return data;
          });

      return promise;
    };

    this.getCurrentUser = function() {
        var token = $location.search().token;
        if (!_.isUndefined(token)) {
          $window.sessionStorage.token = token;
          $location.search('token', null); // remove the token query param
        }
        var promise = $http.get(apiConfig.baseURL + "users/current")
            .success(function(data) {
                $log.debug("UserService: getCurrentUser success");
                userModel.setUser(data);
                return data;
            })
            .error(function(data) {
                $log.debug("UserService: getCurrentUser failed");
          });

        return promise;
    };

    this.createUser = function(userParams) {
      userModel.resetUser();
      var promise = $http.post(apiConfig.baseURL + "users",
            { user: userParams })
            .success(function(data) {
                $log.debug("UserService: createUser success");
                $window.sessionStorage.token = data.token;
                messageModel.setMessage({ type: data.message.type, content: data.message.content, shareUser: true  }, true);
                var redirect = decodeURIComponent($location.search().redirect);
                if (redirect !== 'undefined') {
                    $location.search('redirect', null); // remove the redirect query param
                    $location.url(redirect);
                    if (['/', '/signin', '/register'].indexOf(redirect) !== -1) {
                      userService.getCurrentUser();
                    }
                } else  {
                  $location.url('/season/' + seasonModel.selectedSeasonId + '/my/teams');
                }
                return data;
            })
            .error(function(data) {
                $log.debug("UserService: createUser failed");
                messageModel.setMessage(data.message, false);
                return data;
            });

        return promise;
    };

    this.updateUser = function(userParams) {
        var promise = $http.put(apiConfig.baseURL + "users/current",
            { user: userParams })
            .success(function(data) {
                $log.debug("UserService: updateUser success");
                userModel.setUser(userParams);
                messageModel.setMessage(data.message, false);
                return data;
            })
            .error(function(data) {
                $log.debug("UserService: updateUser failed");
                messageModel.setMessage(data.message, false);
                return data;
            });

        return promise;
    };

    this.contactUs = function(message) {
        var promise = $http.put(apiConfig.baseURL + "users/contact",
            { message: message })
            .success(function(data) {
                $log.debug("UserService: contactUs success");
                messageModel.setMessage(data.message, false);
                return data;
            })
            .error(function(data) {
                $log.debug("UserService: contactUs failed");
                messageModel.setMessage(data.message, false);
                return data;
            });

        return promise;
    };

};

UserService.$inject = ['$http', '$log', '$state', '$location', '$window', '$timeout', 'apiConfig', 'messageModel', 'userModel', 'seasonModel'];
module.exports = UserService;
},{}],81:[function(require,module,exports){
var WeekService = function($http, $log, $q, $state, apiConfig, messageModel) {

    this.getAvailableWeeks = function(seasonId) {
        var promise = $http.get(apiConfig.baseURL + "seasons/" + seasonId + "/weeks/available")
            .success(function(data) {
                $log.debug("WeekService: getAvailableWeeks success");
                return data;
            })
            .error(function(data) {
                $log.debug("WeekService: getAvailableWeeks failed");
                return data;
            });

        return promise;
    };

    this.getSeasonWeeks = function(seasonId) {
        var promise = $http.get(apiConfig.baseURL + "seasons/" + seasonId + "/weeks")
            .success(function(data) {
                $log.debug("WeekService: getSeasonWeeks success");
                return data;
            })
            .error(function(data) {
                $log.debug("WeekService: getSeasonWeeks failed");
                return data;
            });

        return promise;
    };

    this.getLeagueWeeks = function(options) {
        var promise = $http.get(apiConfig.baseURL + "seasons/" + options.seasonId + "/weeks?league_id=" + options.leagueId)
            .success(function(data) {
                $log.debug("WeekService: getLeagueWeeks success");
                return data;
            })
            .error(function(data) {
                $log.debug("WeekService: getLeagueWeeks failed");
                return data;
            });

        return promise;
    };

    this.getWeek = function(seasonId, weekId) {
        var promise = $http.get(apiConfig.baseURL + "seasons/" + seasonId + "/weeks/" + weekId)
            .success(function(data) {
                $log.debug("WeekService: getWeek success");
                return data;
            })
            .error(function(data) {
                $log.debug("WeekService: getWeek failed");
                return data;
            });

        return promise;
    };

    this.getCurrentWeek = function(seasonId, leagueId) {
        var promise = $http.get(apiConfig.baseURL + "seasons/" + seasonId + "/weeks/current?league_id=" + leagueId)
            .success(function(data) {
                $log.debug("WeekService: getCurrentWeek success");
                return data;
            })
            .error(function(data) {
                $log.debug("WeekService: getCurrentWeek failed");
                return data;
            });

        return promise;
    };

    this.getWeekTypes = function() {
        var apiUrl = apiConfig.baseURL + "admin/week_types";

        var promise = $http.get(apiUrl)
          .success(function(data) {
            $log.debug("WeekService: getWeekTypes success");
            return data;
          })
          .error(function(data) {
            $log.debug("WeekService: getWeekTypes failed");
            return data;
        });

      return promise;
    };

    this.createWeek = function(weekParams) {
      var promise = $http.post(apiConfig.baseURL + "admin/seasons/" + weekParams.season_id + "/weeks",
        { week: weekParams })
        .success(function(data) {
          $log.debug("WeekService: createWeek success");
          // todo: this relies on a monkey patch at the moment - https://github.com/angular-ui/ui-router/issues/582
          // but may be resolved with future releases of angular-ui-router
          $state.reload(); // reloads all the resolves for the view league page and reinstantiates the controller
          messageModel.setMessage(data.message, false);
          return data;
        })
        .error(function(data) {
          $log.debug("WeekService: createWeek failed");
          messageModel.setMessage(data.message, false);
          return data;
        });

      return promise;
    };

    this.updateWeek = function(weekParams) {
      var promise = $http.put(apiConfig.baseURL + "admin/seasons/" + weekParams.season_id + "/weeks/" + weekParams.id,
        { week: weekParams })
        .success(function(data) {
          $log.debug("WeekService: updateWeek success");
          // todo: this relies on a monkey patch at the moment - https://github.com/angular-ui/ui-router/issues/582
          // but may be resolved with future releases of angular-ui-router
          $state.reload(); // reloads all the resolves for the view league page and reinstantiates the controller
          messageModel.setMessage(data.message, false);
          return data;
        })
        .error(function(data) {
          $log.debug("WeekService: updateWeek failed");
          messageModel.setMessage(data.message, false);
          return data;
        });

      return promise;
    };

    this.sendReminder = function(week) {
        var promise = $http.put(apiConfig.baseURL + "admin/seasons/" + week.season_id + "/weeks/" + week.id + "/remind")
            .success(function(data) {
                $log.debug("WeekService: sendReminder success");
                $state.reload();
                messageModel.setMessage(data.message, false);
                return data;
            })
            .error(function(data) {
                $log.debug("WeekService: sendReminder failed");
                messageModel.setMessage(data.message, false);
                return data;
            });

        return promise;
    };

    this.completeWeek = function(week) {
      var deferred = $q.defer();
      $http.put(apiConfig.baseURL + "admin/seasons/" + week.season_id + "/weeks/" + week.id + "/complete")
            .success(function(data) {
                $log.debug("WeekService: completeWeek success");
                messageModel.setMessage(data.message, false);
                deferred.resolve();
            })
            .error(function(data) {
                $log.debug("WeekService: completeWeek failed");
                messageModel.setMessage(data.message, false);
                deferred.reject();
            });

        return deferred.promise;
    };

};

WeekService.$inject = ['$http', '$log', '$q', '$state', 'apiConfig', 'messageModel'];
module.exports = WeekService;

},{}],82:[function(require,module,exports){
commangular.create('SigninCommand',
    function($log, userService) {

    return {

        execute: function(email, password) {
            $log.debug('SigninCommand: authenticating user...');
            return userService.signin(email, password);
        },
        onError: function(error) {
            $log.debug("SigninCommand: failure: " + error.data);
        },
        onResult: function(result) {
            $log.debug("SigninCommand: success ");
        }

    }
});

},{}],83:[function(require,module,exports){
commangular.create('SignoutCommand',
    function($log, userService) {

        return {

            execute: function() {
                $log.debug('SignoutCommand: signing out user...');
                return userService.signout();
            },
            onError: function(error) {
                $log.debug("SignoutCommand: failure: " + error.data);
            },
            onResult: function(result) {
                $log.debug("SignoutCommand: success");
            }

        }
    });

},{}],84:[function(require,module,exports){

commangular.create('GetCurrentUserCommand',
   function($log, userService, userModel) {

    return {

        execute: function() {
            $log.debug('GetCurrentUserCommand: getting current user details...');
            var userPromise = userService.getCurrentUser();
            return userPromise;
        },
        onError: function(error) {
            $log.debug("GetCurrentUserCommand: failure: " + error.data);
        },
        onResult: function(result) {
            $log.debug("GetCurrentUserCommand: success");
        }

    }
});
},{}],85:[function(require,module,exports){
var FaqController = function($scope, $state, $location, seasonModel) {

  $scope.selectedSeasonId = seasonModel.selectedSeasonId;

  $scope.isState = function(state) {
    return $state.current.name == state;
  };

  $scope.createLeague = function(seasonId) {
    $location.url('/season/' + seasonId + '/league/new');
  };

  $scope.joinLeague = function(seasonId) {
    $location.url('/season/' + seasonId + '/leagues/public');
  };

  var init = function() {};
  init();
};

FaqController.$inject = ['$scope', '$state', '$location', 'seasonModel'];
module.exports = FaqController;

},{}],86:[function(require,module,exports){
var HomeController = function($scope, $location, $modal, statsService, userService, seasonModel) {

    var getStats = function() {
      statsService.getStats()
        .then(function(data) {
          $scope.stats = data;
        });
    };

    $scope.tagline = '';

    $scope.selectedSeasonId = seasonModel.selectedSeasonId;

    $scope.stats = {
      pickem: 0,
      survivor: 0,
      teams: 0,
      picks: 0
    };

    $scope.createLeague = function(seasonId) {
      $location.url('/season/' + seasonId + '/league/new');
    };

    $scope.joinLeague = function(seasonId) {
      $location.url('/season/' + seasonId + '/leagues/public');
    };

    $scope.joinPromoLeague = function(path) {
      $location.url(path);
    };

    $scope.register = function() {

      var modalInstance = $modal.open({
        templateUrl: 'modules/public/register/register.tpl.html',
        controller: 'RegisterController',
        size: 'sm'
      });

      modalInstance.result.then(function(newUser) {
        userService.createUser(newUser);
      }, function () {
      });

    };

    var generateRandomTagline = function() {
      var taglines = [];
      taglines[0] = 'Losing is Everything';
      taglines[1] = 'Sprinkles are for Losers';

      $scope.tagline = taglines[Math.round(Math.random()*(taglines.length - 1))];
    };

    var init = function () {
      generateRandomTagline();
      getStats();
  };
    init();
};

HomeController.$inject = ['$scope', '$location', '$modal', 'statsService', 'userService', 'seasonModel'];
module.exports = HomeController;

},{}],87:[function(require,module,exports){

var OffsetFilter = function($log) {
    return function(input, start) {
        start = parseInt(start, 10);
        return input.slice(start);
    };
};

OffsetFilter.$inject = ['$log'];
module.exports = OffsetFilter;

},{}],88:[function(require,module,exports){
var ActiveTeamFilter = function() {
  return function(teams, options) {
    if (options.inactive == true) {
      return teams;
    }
    var activeTeams = _.filter(teams, function(team) {
      return team.active;
    });
    return activeTeams;
  };
};

ActiveTeamFilter.$inject = [];
module.exports = ActiveTeamFilter;

},{}],89:[function(require,module,exports){
var ManagedLeagueFilter = function(userModel) {
  return function(leagues, options) {
    if (options.managed == true) {
      return leagues;
    }
    var inLeagues = _.filter(leagues, function(league) {
      return league.commish_ids.indexOf(userModel.user.id) == -1;
    });
    return inLeagues;
  };
};

ManagedLeagueFilter.$inject = ['userModel'];
module.exports = ManagedLeagueFilter;

},{}],90:[function(require,module,exports){

var TimeFilter = function($log) {
   return function(input) {

       if (input < 1) {
           return "00:00:00";
       }

       function format(val) {
           return (val<10 ? '0' : '') + val;
       }

       var h = Math.floor((input / 1000) / 3600);
       var m = Math.floor(((input / 1000) % 3600) / 60);
       var s = Math.floor((input / 1000) % 60);
       return format(h) + ":" + format(m) + ":" + format(s);
   }

};

TimeFilter.$inject = ['$log'];
module.exports = TimeFilter;

},{}],91:[function(require,module,exports){
var WeekPicksFilter = function() {
  return function(picks, week, elimination) {
    if (!week) {
      return picks;
    }
    var weekPicks = [];
    if (elimination) {
      // for survivor leagues, gonna show picks up to the week you selected...
      weekPicks = _.filter(picks, function(pick) {
        return moment(pick.week.date).isBefore(week.starts_at) || moment(pick.week.date).isSame(week.starts_at);
      });
    } else {
      // for pick'em leagues, gonna show ONLY picks for the week you selected...
      weekPicks = _.filter(picks, function(pick) {
        return pick.week.slug == week.slug;
      });
    }
    return weekPicks;
  };
};

WeekPicksFilter.$inject = [];
module.exports = WeekPicksFilter;

},{}],92:[function(require,module,exports){
var AbuseController = function($modalInstance, $scope, $log) {

  $scope.abuseMessage = '';

  $scope.contactUs = function(message) {
    $modalInstance.close(message);
  };

  $scope.cancel = function() {
    $modalInstance.dismiss('cancel');
  };

  $scope.hasError = function(input) {
    return !input.$focused && input.$dirty && input.$invalid;
  };

  $scope.hasPropertyError = function(input, property) {
    return !input.$focused && input.$dirty && input.$error[property];
  };

  /**
   * Invoked on startup, like a constructor.
   */
  var init = function () {
    $log.debug("report abuse controller");
  };
  init();
};

AbuseController.$inject = ['$modalInstance', '$scope', '$log'];
module.exports = AbuseController;

},{}],93:[function(require,module,exports){
var SigninController = function($scope, $log, $location, $modal, messageModel, userService) {

    $scope.credentials = {
        email: '',
        password: ''
    };

    $scope.signin = function(credentials) {
        $scope.dispatch("SigninEvent", credentials);
    };

    $scope.signinGuest = function() {
      userService.signinGuest();
    };

    $scope.resetPassword = function() {

      var modalInstance = $modal.open({
        templateUrl: 'modules/private/user/reset/user.reset.tpl.html',
        controller: 'UserResetController'
      });

      modalInstance.result.then(function (email) {
        userService.resetUser(email);
      }, function () {
        messageModel.setMessage({ type: 'warning', content: 'Reset password cancelled' }, false);
      });
    };

    $scope.register = function() {

      var modalInstance = $modal.open({
        templateUrl: 'modules/public/register/register.tpl.html',
        controller: 'RegisterController',
        size: 'sm'
      });

      modalInstance.result.then(function(newUser) {
        userService.createUser(newUser);
      }, function () {
        $log.debug('Register modal dismissed...');
        messageModel.setMessage({ type: 'warning', content: 'Register cancelled' }, false);
      });

    };

    var init = function () {
    };
    init();

};

SigninController.$inject = ['$scope', '$log', '$location', '$modal', 'messageModel', 'userService'];
module.exports = SigninController;

},{}],94:[function(require,module,exports){
var RegisterController = function($scope, $modal, $modalInstance) {

    $scope.newUserData = {
        first_name: '',
        last_name: '',
        nickname: '',
        email: '',
        password: ''
    };

    $scope.register = function (newUser) {
      $scope.newUserData.password_confirmation = $scope.newUserData.password;
      $modalInstance.close(newUser);
    };

    $scope.cancel = function () {
      $modalInstance.dismiss('cancel');
    };

    $scope.hasError = function(input) {
        return !input.$focused && input.$dirty && input.$invalid;
    };

    $scope.hasPropertyError = function(input, property) {
        return !input.$focused && input.$dirty && input.$error[property];
    };

    $scope.showTerms = function() {

      var modalInstance = $modal.open({
        templateUrl: 'modules/public/register/terms/register.terms.tpl.html',
        controller: 'RegisterTermsController'
      });

      modalInstance.result.then(function () {
      }, function () {
      });

    };

    var init = function () {
    };
    init();

};

RegisterController.$inject = ['$scope', '$modal', '$modalInstance'];
module.exports = RegisterController;

},{}],95:[function(require,module,exports){

var UserController = function($scope, $log, userModel, userService) {

    $scope.userData = angular.copy(userModel);

    $scope.update = function(user) {
        userService.updateUser(user);
    };

    $scope.hasError = function(input) {
        return !input.$focused && input.$dirty && input.$invalid;
    };

    $scope.hasPropertyError = function(input, property) {
        return !input.$focused && input.$dirty && input.$error[property];
    };

    $scope.$on('userModel::userUpdated', function(event) {
        $scope.userData = angular.copy(userModel);
    });

    /**
     * Invoked on startup, like a constructor.
     */
    var init = function () {
        $log.debug("user controller");
    };
    init();

};

UserController.$inject = ['$scope', '$log', 'userModel', 'userService'];
module.exports = UserController;

},{}],96:[function(require,module,exports){

var LeagueController = function($scope, $log) {

    $scope.hasError = function(input) {
        return !input.$focused && input.$dirty && input.$invalid;
    };

    $scope.hasPropertyError = function(input, property) {
        return !input.$focused && input.$dirty && input.$error[property];
    };

    /**
     * Invoked on startup, like a constructor.
     */
    var init = function () {
        $log.debug("league controller");
    };
    init();

};

LeagueController.$inject = ['$scope', '$log'];
module.exports = LeagueController;

},{}],97:[function(require,module,exports){
var LeaguesController = function($scope, $log, $state) {

    // pagination
    $scope.currentLeaguePage = 1;
    $scope.leaguesPerPage = 100;

    $scope.isPublic = function() {
        return $state.current.name == 'private.leagues.join.public';
    };

    /**
     * Invoked on startup, like a constructor.
     */
    var init = function () {
        $log.debug("leagues controller");
    };
    init();

};

LeaguesController.$inject = ['$scope', '$log', '$state'];
module.exports = LeaguesController;


},{}],98:[function(require,module,exports){
var TeamController = function($scope, $log) {

    $scope.hasError = function(input) {
        return !input.$focused && input.$dirty && input.$invalid;
    };

    $scope.hasPropertyError = function(input, property) {
        return !input.$focused && input.$dirty && input.$error[property];
    };

    /**
     * Invoked on startup, like a constructor.
     */
    var init = function () {
        $log.debug("team controller");
    };
    init();

};

TeamController.$inject = ['$scope', '$log'];
module.exports = TeamController;

},{}],99:[function(require,module,exports){
var PlayController = function($scope, $location, $state, $stateParams, messageModel, seasonModel) {

	var buildSeasonDropdown = function() {
		var currentSeasons = angular.copy(seasonModel.currentSeasons),
		    endedSeasons = angular.copy(seasonModel.endedSeasons);
    // first push in current seasons
		_.each(currentSeasons, function(currentSeason) {
			$scope.startedSeasons.push({ name: currentSeason.name, value: currentSeason.id });
		});
    // then a divider
    $scope.startedSeasons.push({ divider: true });
    // and then ended seasons
    _.each(endedSeasons, function(endedSeason) {
      $scope.startedSeasons.push({ name: endedSeason.name, value: endedSeason.id });
    });
    // and set the selected season based on what is in url
    $scope.selectedSeason = _.find($scope.startedSeasons, function(startedSeason) { return startedSeason.value === $scope.selectedSeasonId });
	};

	$scope.selectedSeasonId = parseInt($stateParams.seasonId);

  $scope.startedSeasons = [];

  $scope.selectedSeason = {};

  $scope.leagueOptions = { managed: true };

  $scope.query = '';

  $scope.changeSeason = function(season) {
    $scope.selectedSeasonId = season.value;
    seasonModel.setSelectedSeasonId(season.value);
    var newPath = $location.path().replace(/(\/season\/)\d*/, '$1' + season.value);
    $location.url(newPath);
  };

  $scope.myTeams = function(seasonId) {
    $location.url('/season/' + seasonId + '/my/teams');
  };

  $scope.myLeagues = function(seasonId) {
    $location.url('/season/' + seasonId + '/my/leagues');
  };

  $scope.resetSearch = function() {
    $scope.query = '';
  };

  $scope.isState = function(states) {
    return _.indexOf(states, $state.current.name) > -1;
  };

  $scope.createLeague = function() {
    var season = seasonModel.getCurrentSeason();
    $location.url('/season/' + season.id + '/league/new');
  };

  $scope.joinLeague = function() {
    var season = seasonModel.getCurrentSeason();
    $location.url('/season/' + season.id + '/leagues/public');
  };

  var init = function () {
    buildSeasonDropdown();
  };
  init();

};

PlayController.$inject = ['$scope', '$location', '$state', '$stateParams', 'messageModel', 'seasonModel'];
module.exports = PlayController;

},{}],100:[function(require,module,exports){
var AdminController = function($scope) {

  /**
   * Invoked on startup, like a constructor.
   */
  var init = function () {
  };
  init();
};

AdminController.$inject = ['$scope'];
module.exports = AdminController;

},{}],101:[function(require,module,exports){
var HeaderController = function($rootScope, $scope, $log, $location, $modal, $state, $anchorScroll, $stateParams, userService, leagueService, userModel, messageModel, seasonModel) {

    var scrollToTop = function() {
      $anchorScroll(); // hacky?
    };

    var checkHtml5Storage = function() {

      try {
        localStorage.test = Math.floor(Math.random() * 6000000) + 1;
      } catch (e) {
        messageModel.setMessage({ type: 'danger', content: 'You are in Privacy Mode. This app will not function properly. Turn off Privacy Mode.'}, false);
      }

    };

    $scope.selectedSeasonId = (angular.isDefined($stateParams.seasonId)) ? parseInt($stateParams.seasonId) : seasonModel.selectedSeasonId;

    $scope.isCollapsed = true;

    $scope.userData = userModel;

    $scope.credentials = {
        email: '',
        password: ''
    };

    $scope.isState = function(states) {
      return _.indexOf(states, $state.current.name) > -1;
    };

    $scope.home = function() {
        $location.url('/');
    };

    $scope.faq = function() {
        $state.go('public.faq.general');
    };

    $scope.contactUs = function() {

      var modalInstance = $modal.open({
        templateUrl: 'modules/public/abuse/abuse.tpl.html',
        controller: 'AbuseController'
      });

      modalInstance.result.then(function(message) {
        userService.contactUs(message);
      }, function () {
        messageModel.setMessage({ type: 'warning', content: 'Contact us cancelled' }, false);
      });

    };

    $scope.register = function() {

      var modalInstance = $modal.open({
        templateUrl: 'modules/public/register/register.tpl.html',
        controller: 'RegisterController',
        size: 'sm'
      });

      modalInstance.result.then(function(newUser) {
        userService.createUser(newUser);
      }, function () {
        $log.debug('Register modal dismissed...');
      });

    };

    $scope.play = function(seasonId) {
      $location.url('/season/' + seasonId + '/my/teams');
    };

    $scope.joinLeague = function() {
      var season = seasonModel.getCurrentSeason();
      $location.url('/season/' + season.id + '/leagues/public');
    };

    $scope.createLeague = function() {
      var season = seasonModel.getCurrentSeason();
      $location.url('/season/' + season.id + '/league/new');
    };

    $scope.userProfile = function() {
        $location.url('/user');
    };

    $scope.signin = function(credentials) {
        $scope.dispatch("SigninEvent", credentials);
    };

    $scope.signinGuest = function() {
        userService.signinGuest();
    };

    $scope.signout = function() {
        $scope.credentials = {
            email: '',
            password: ''
        };
        $scope.dispatch("SignoutEvent");
    };

    $scope.resetPassword = function() {

      var modalInstance = $modal.open({
        templateUrl: 'modules/private/user/reset/user.reset.tpl.html',
        controller: 'UserResetController'
      });

      modalInstance.result.then(function (email) {
        userService.resetUser(email);
      }, function () {
        messageModel.setMessage({ type: 'warning', content: 'Reset password cancelled' }, false);
      });
    };

    $rootScope.$on("$viewContentLoaded", function() {
//      scrollToTop();
    });

    var init = function () {
        checkHtml5Storage();
    };
    init();
};

HeaderController.$inject = ['$rootScope', '$scope', '$log', '$location', '$modal', '$state', '$anchorScroll', '$stateParams', 'userService', 'leagueService', 'userModel', 'messageModel', 'seasonModel'];
module.exports = HeaderController;

},{}],102:[function(require,module,exports){
var MessageController = function($rootScope, $scope, $log, messageModel) {

    $scope.messageData = messageModel;

    $scope.dismissMessage = function(message) {
        message.resetMessage();
    };

    $scope.shareLeagueFB = function() {
      $rootScope.$broadcast('messageController::shareLeagueFB');
    };

    $scope.shareTeamFB = function() {
      $rootScope.$broadcast('messageController::shareTeamFB');
    };

    $scope.shareUserFB = function() {
      var options = {
        method: "feed",
        link: "https://www.loseorgohome.com",
        picture: "https://www.loseorgohome.com/resources/assets/images/background-small.jpg",
        name: "Losing is Everything",
        description: "Free NFL, NBA, NHL, MLB or MLS survivor and pick'em leagues are waiting for you."
      };
      FB.ui(options);
    };

    /**
     * Invoked on startup, like a constructor.
     */
    var init = function () {
        $log.debug("message controller");
    };
    init();
};

MessageController.$inject = ['$rootScope', '$scope', '$log', 'messageModel'];
module.exports = MessageController;

},{}],103:[function(require,module,exports){
var FooterController = function($scope, $log, $location) {

  $scope.home = function() {
    $location.url('/');
  };

  /**
   * Invoked on startup, like a constructor.
   */
  var init = function () {
    $log.debug("footer controller");
  };
  init();
};

FooterController.$inject = ['$scope', '$log', '$location'];
module.exports = FooterController;

},{}],104:[function(require,module,exports){
var ConfirmController = function(message, $scope, $log, $modalInstance) {

  $scope.message = message;

  $scope.confirm = function() {
    $modalInstance.close();
  };

  $scope.cancel = function () {
    $modalInstance.dismiss('cancel');
  };

  /**
   * Invoked on startup, like a constructor.
   */
  var init = function () {
    $log.debug("confirm controller");
  };
  init();

};

ConfirmController.$inject = ['message', '$scope', '$log', '$modalInstance'];
module.exports = ConfirmController;

},{}],105:[function(require,module,exports){
var ApplicationService = function($window, $location) {

        /**
         *  Application Startup Process
         */
        this.startup = function() {
            startupProcess();
        };

        var startupProcess = function() {
          forceSsl();
        };

        var forceSsl = function () {
          if ($location.host() == 'localhost') return;
          if ($location.protocol() != 'https') {
            $window.location.href = $location.absUrl().replace('http', 'https');
          }
        };

    };

ApplicationService.$inject = ['$window', '$location'];
module.exports = ApplicationService;

},{}],106:[function(require,module,exports){
var DateUtils = function() {

  this.dateFormat = function () {
    // source: http://blog.stevenlevithan.com/archives/date-time-format
    var	token = /d{1,4}|m{1,4}|yy(?:yy)?|([HhMsTt])\1?|[LloSZ]|"[^"]*"|'[^']*'/g,
      timezone = /\b(?:[PMCEA][SDP]T|(?:Pacific|Mountain|Central|Eastern|Atlantic) (?:Standard|Daylight|Prevailing) Time|(?:GMT|UTC)(?:[-+]\d{4})?)\b/g,
      timezoneClip = /[^-+\dA-Z]/g,
      pad = function (val, len) {
        val = String(val);
        len = len || 2;
        while (val.length < len) val = "0" + val;
        return val;
      };

    // Regexes and supporting functions are cached through closure
    return function (date, mask, utc) {
      var dF = this.dateFormat;

      // You can't provide utc if you skip other args (use the "UTC:" mask prefix)
      if (arguments.length == 1 && Object.prototype.toString.call(date) == "[object String]" && !/\d/.test(date)) {
        mask = date;
        date = undefined;
      }

      // Passing date through Date applies Date.parse, if necessary
      date = date ? new Date(date) : new Date;
      if (isNaN(date)) throw SyntaxError("invalid date");

      mask = String(dF.masks[mask] || mask || dF.masks["default"]);

      // Allow setting the utc argument via the mask
      if (mask.slice(0, 4) == "UTC:") {
        mask = mask.slice(4);
        utc = true;
      }

      var	_ = utc ? "getUTC" : "get",
        d = date[_ + "Date"](),
        D = date[_ + "Day"](),
        m = date[_ + "Month"](),
        y = date[_ + "FullYear"](),
        H = date[_ + "Hours"](),
        M = date[_ + "Minutes"](),
        s = date[_ + "Seconds"](),
        L = date[_ + "Milliseconds"](),
        o = utc ? 0 : date.getTimezoneOffset(),
        flags = {
          d:    d,
          dd:   pad(d),
          ddd:  dF.i18n.dayNames[D],
          dddd: dF.i18n.dayNames[D + 7],
          m:    m + 1,
          mm:   pad(m + 1),
          mmm:  dF.i18n.monthNames[m],
          mmmm: dF.i18n.monthNames[m + 12],
          yy:   String(y).slice(2),
          yyyy: y,
          h:    H % 12 || 12,
          hh:   pad(H % 12 || 12),
          H:    H,
          HH:   pad(H),
          M:    M,
          MM:   pad(M),
          s:    s,
          ss:   pad(s),
          l:    pad(L, 3),
          L:    pad(L > 99 ? Math.round(L / 10) : L),
          t:    H < 12 ? "a"  : "p",
          tt:   H < 12 ? "am" : "pm",
          T:    H < 12 ? "A"  : "P",
          TT:   H < 12 ? "AM" : "PM",
          Z:    utc ? "UTC" : (String(date).match(timezone) || [""]).pop().replace(timezoneClip, ""),
          o:    (o > 0 ? "-" : "+") + pad(Math.floor(Math.abs(o) / 60) * 100 + Math.abs(o) % 60, 4),
          S:    ["th", "st", "nd", "rd"][d % 10 > 3 ? 0 : (d % 100 - d % 10 != 10) * d % 10]
        };

      return mask.replace(token, function ($0) {
        return $0 in flags ? flags[$0] : $0.slice(1, $0.length - 1);
      });
    };
  }();

  this.dateFormat.masks = {
    "default":      "ddd mmm dd yyyy HH:MM:ss",
    shortDate:      "m/d/yy",
    mediumDate:     "mmm d, yyyy",
    longDate:       "mmmm d, yyyy",
    fullDate:       "dddd, mmmm d, yyyy",
    shortTime:      "h:MM TT",
    mediumTime:     "h:MM:ss TT",
    longTime:       "h:MM:ss TT Z",
    isoDate:        "yyyy-mm-dd",
    isoTime:        "HH:MM:ss",
    isoDateTime:    "yyyy-mm-dd'T'HH:MM:ss",
    isoUtcDateTime: "UTC:yyyy-mm-dd'T'HH:MM:ss'Z'"
  };

  this.dateFormat.i18n = {
    dayNames: [
      "Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat",
      "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
    ],
    monthNames: [
      "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
      "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"
    ]
  };

};

DateUtils.$inject = [];
module.exports = DateUtils;

},{}],107:[function(require,module,exports){
var FocusDirective = function() {
    var FOCUS_CLASS = 'ng-focused';
    return {
        restrict: 'A',
        require: 'ngModel',
        link: function(scope, element, attrs, ctrl) {
            ctrl.$focused = false;
            element.bind('focus', function(evt) {
                element.addClass(FOCUS_CLASS);
                scope.$apply(function() {
                    ctrl.$focused = true;
                });
            }).bind('blur', function(evt) {
                element.removeClass(FOCUS_CLASS);
                scope.$apply(function() {
                    ctrl.$focused = false;
                });
            });
        }
    }
};

module.exports = FocusDirective;

},{}],108:[function(require,module,exports){
var FormattedDateDirective = function(dateUtils) {
  return {
    link: function (scope, element, attrs, ctrl) {
      ctrl.$formatters.unshift(function (modelValue) {
        return dateUtils.dateFormat(modelValue, "ddd m/d/yy h:MM tt (Z)")
      });

      ctrl.$parsers.unshift(function (viewValue) {
        return dateUtils.dateFormat(modelValue, "ddd m/d/yy h:MM tt (Z)")
      });
    },
    restrict: 'A',
    require: 'ngModel'
  }
};

module.exports = FormattedDateDirective;

},{}],110:[function(require,module,exports){
var rcSubmitDirective = {
  'rcSubmit': ['$parse', function ($parse) {
    return {
      restrict: 'A',
      require: ['rcSubmit', '?form'],
      controller: ['$scope', function ($scope) {

        var formController = null;
        var attemptHandlers = [];

        this.attempted = false;

        this.onAttempt = function(handler) {
          attemptHandlers.push(handler);
        };

        this.setAttempted = function() {
          this.attempted = true;

          angular.forEach(attemptHandlers, function (handler) {
            handler();
          });
        };

        this.setFormController = function(controller) {
          formController = controller;
        };

        this.needsAttention = function (fieldModelController) {
          if (!formController) return false;

          if (fieldModelController) {
            return fieldModelController.$invalid &&
              (fieldModelController.$dirty || this.attempted);
          } else {
            return formController && formController.$invalid &&
              (formController.$dirty || this.attempted);
          }
        };
      }],
      compile: function(cElement, cAttributes, transclude) {
        return {
          pre: function(scope, formElement, attributes, controllers) {

            var submitController = controllers[0];
            var formController = (controllers.length > 1) ? controllers[1] : null;

            submitController.setFormController(formController);

            scope.rc = scope.rc || {};
            scope.rc[attributes.name] = submitController;
          },
          post: function(scope, formElement, attributes, controllers) {

            var submitController = controllers[0];
            var formController = (controllers.length > 1) ? controllers[1] : null;
            var fn = $parse(attributes.rcSubmit);

            formElement.bind('submit', function () {
              submitController.setAttempted();
              if (!scope.$$phase) scope.$apply();

              if (!formController.$valid) return false;

              scope.$apply(function() {
                fn(scope, {$event:event});
              });
            });
          }
        };
      }
    };
  }]
};
},{}],111:[function(require,module,exports){
var rcVerifySetDirective = {
  'rcVerifySet': function () {
    return {
      restrict: 'A',
      require: ['^rcSubmit', 'ngModel'],
      link: function (scope, element, attributes, controllers) {
        var submitController = controllers[0];
        var modelController = controllers[1];

        submitController.onAttempt(function() {
          modelController.$setViewValue(element.val());
        });
      }
    };
  }
};
},{}],112:[function(require,module,exports){
/* attribute will enforce a reg ex pattern if the field is marked as ng-required */
var RequiredPatternDirective = function() {
    return {
        restrict: "A",
        require: "ngModel",
        link: function(scope, el, attrs, ngModel) {
            var validator, patternValidator,
                pattern = attrs.rpattern,
                required = true;

            if( pattern ) {
                if (pattern.match(/^\/(.*)\/$/)) {
                    pattern = new RegExp(pattern.substr(1, pattern.length - 2));
                    patternValidator = function(value) {
                        return validate(pattern, value)
                    };
                }
                else {
                    patternValidator = function(value) {
                        var patternObj = scope.$eval(pattern);
                        if (!patternObj || !patternObj.test) {
                            throw new Error('Expected ' + pattern + ' to be a RegExp but was ' + patternObj);
                        }
                        return validate(patternObj, value);
                    };
                }
            }

            ngModel.$formatters.push(patternValidator);
            ngModel.$parsers.push(patternValidator);

            attrs.$observe("required", function(newval) {
                required = newval;
                patternValidator(ngModel.$viewValue);
            });

            function validate(regexp, value) {
                if( value == null || value === "" || !required || regexp.test(value) ) {
                    ngModel.$setValidity('pattern', true);
                    return value;
                }
                else {
                    ngModel.$setValidity('pattern', false);
                    return;
                }
            }
        }
    }
};

module.exports = RequiredPatternDirective;
},{}],109:[function(require,module,exports){
var MatchDirective = function() {
    return {
        require: 'ngModel',
        link: function (scope, elem, attrs, ctrl) {
            scope.$watch('[' + attrs.ngModel + ', ' + attrs.match + ']', function(value) {
                var a = value[0] || '';
                var b = value[1] || '';
                ctrl.$setValidity('match', a === b);
            }, true);
        }
    }
};

module.exports = MatchDirective;

},{}],113:[function(require,module,exports){
var SelectOnClickDirective = function() {
  return {
    restrict: 'A',
    link: function (scope, element, attrs) {
      element.on('click', function () {
        this.select();
      });
    }
  };
};

module.exports = SelectOnClickDirective;

},{}],114:[function(require,module,exports){
var RegisterTermsController = function($modalInstance, $scope, $log) {

  $scope.close = function () {
    $modalInstance.dismiss('close');
  };

  /**
   * Invoked on startup, like a constructor.
   */
  var init = function () {
    $log.debug("register terms and conditions controller");
  };
  init();
};

RegisterTermsController.$inject = ['$modalInstance', '$scope', '$log'];
module.exports = RegisterTermsController;

},{}],115:[function(require,module,exports){
var UserResetController = function($modalInstance, $scope, $log) {

  $scope.userData = {
    email: ""
  };

  $scope.reset = function (email) {
    $modalInstance.close(email);
  };

  $scope.cancel = function () {
    $modalInstance.dismiss('cancel');
  };

  $scope.hasError = function(input) {
    return !input.$focused && input.$dirty && input.$invalid;
  };

  $scope.hasPropertyError = function(input, property) {
    return !input.$focused && input.$dirty && input.$error[property];
  };

  /**
   * Invoked on startup, like a constructor.
   */
  var init = function () {
    $log.debug("user reset controller");
  };
  init();
};

UserResetController.$inject = ['$modalInstance', '$scope', '$log'];
module.exports = UserResetController;

},{}],117:[function(require,module,exports){
var NewLeagueController = function(seasonId, $scope, $location, weekService, leagueService, seasonModel) {

    var getSeasonWeeks = function() {
      $scope.fetchingSeasonWeeks = true;
      weekService.getAvailableWeeks($scope.leagueData.season_id)
        .then(function(response) {
          $scope.weeks = response.data;
          $scope.leagueData.start_week_id = $scope.weeks[0].id;
          $scope.fetchingSeasonWeeks = false;
        });
    };

    $scope.seasons = angular.copy(seasonModel.currentSeasons);

    $scope.maxPicksPerWeek = [
      { number: null, display: 'Pick every game' },
      { number: 25, display: 'Pick 25 losers' },
      { number: 15, display: 'Pick 15 losers' },
      { number: 10, display: 'Pick 10 losers' },
      { number: 5, display: 'Pick 5 losers' },
      { number: 2, display: 'Pick 2 losers' },
      { number: 1, display: 'Pick 1 loser' }
    ];

    $scope.leagueData = {
        name: '',
        nickname: '',
        season_id: seasonId,
        start_week_id: '',
        public: true,
        elimination: false,
        eliminate_on_tie: true,
        max_teams_per_user: '',
        max_picks_per_week: $scope.maxPicksPerWeek[0].number
    };

    $scope.changeSeason = function() {
      $location.path('/season/' + $scope.leagueData.season_id + '/league/new'); // will not reload page due to reloadOnSearch: false
      getSeasonWeeks();
    };

    $scope.createLeague = function(league) {
      leagueService.createLeague(league)
        .then(function(data) {
          $location.url('/season/' + league.season_id + '/league/' + data.league_id);
        });
    };

    $scope.hasError = function(input) {
      return !input.$focused && input.$dirty && input.$invalid;
    };

    $scope.hasPropertyError = function(input, property) {
      return !input.$focused && input.$dirty && input.$error[property];
    };

    var init = function () {
        getSeasonWeeks();
    };
    init();

};

NewLeagueController.$inject = ['seasonId', '$scope', '$location', 'weekService', 'leagueService', 'seasonModel'];
module.exports = NewLeagueController;

},{}],118:[function(require,module,exports){
var EditLeagueController = function(league, $scope, $location, weekService, leagueService, seasonModel) {

    var showLeague = function(league) {
      $location.url('/season/' + league.season_id + '/league/' + league.id);
    };

    var getSeasonWeeks = function() {
      $scope.editBtnDisabled = true;
      weekService.getAvailableWeeks($scope.leagueData.season_id)
        .then(function(response) {
          $scope.weeks = response.data;
          $scope.editBtnDisabled = false;
        });
    };

    $scope.seasons = angular.copy(seasonModel.currentSeasons);

    $scope.leagueData = angular.copy(league.data);

    $scope.maxPicksPerWeek = [
      { number: null, display: 'Pick every game' },
      { number: 25, display: 'Pick 25 losers' },
      { number: 15, display: 'Pick 15 losers' },
      { number: 10, display: 'Pick 10 losers' },
      { number: 5, display: 'Pick 5 losers' },
      { number: 2, display: 'Pick 2 losers' },
      { number: 1, display: 'Pick 1 loser' }
    ];

    $scope.updateLeague = function(league) {
      leagueService.updateLeague(league)
        .then(function(data) {
          showLeague(league);
        });
    };

    $scope.hasError = function(input) {
      return !input.$focused && input.$dirty && input.$invalid;
    };

    $scope.hasPropertyError = function(input, property) {
      return !input.$focused && input.$dirty && input.$error[property];
    };

    var init = function () {
      if (!$scope.leagueData.started) {
          getSeasonWeeks();
        }
    };
    init();

};

EditLeagueController.$inject = ['league', '$scope', '$location', 'weekService', 'leagueService', 'seasonModel'];
module.exports = EditLeagueController;

},{}],119:[function(require,module,exports){
var LeagueContactController = function(league, $modalInstance, $scope, $log) {

  $scope.leagueData = league;

  $scope.commishMessage = '';

  $scope.contactCommish = function(league, message) {
    $modalInstance.close({ league: league, message: message });
  };

  $scope.cancel = function() {
    $modalInstance.dismiss('cancel');
  };

  $scope.hasError = function(input) {
    return !input.$focused && input.$dirty && input.$invalid;
  };

  $scope.hasPropertyError = function(input, property) {
    return !input.$focused && input.$dirty && input.$error[property];
  };

  /**
   * Invoked on startup, like a constructor.
   */
  var init = function () {
    $log.debug("league contact controller");
  };
  init();
};

LeagueContactController.$inject = ['league', '$modalInstance', '$scope', '$log'];
module.exports = LeagueContactController;

},{}],120:[function(require,module,exports){
var LeagueMessageController = function(league, $modalInstance, $scope, $log) {

  $scope.leagueData = angular.copy(league);

  $scope.messageOptions = {
    sendAlive: false,
    sendAll: false
  };

  $scope.updateMessage = function(league, sendAlive, sendAll) {
    $modalInstance.close({ league: league, sendAlive: sendAlive, sendAll: sendAll });
  };

  $scope.cancel = function() {
    $modalInstance.dismiss('cancel');
  };

  $scope.hasError = function(input) {
    return !input.$focused && input.$dirty && input.$invalid;
  };

  $scope.hasPropertyError = function(input, property) {
    return !input.$focused && input.$dirty && input.$error[property];
  };

  /**
   * Invoked on startup, like a constructor.
   */
  var init = function () {
    $log.debug("league message controller");
  };
  init();
};

LeagueMessageController.$inject = ['league', '$modalInstance', '$scope', '$log'];
module.exports = LeagueMessageController;

},{}],121:[function(require,module,exports){
var LeagueJoinController = function(league, $modalInstance, $scope, $log) {

  $scope.leagueData = league;

  $scope.newTeamData = {
    name: '',
    season_id: league.season_id,
    league_id: league.id
  };

  $scope.joinLeague = function (newTeam) {
    $modalInstance.close(newTeam);
  };

  $scope.cancel = function () {
    $modalInstance.dismiss('cancel');
  };

  $scope.hasError = function(input) {
    return !input.$focused && input.$dirty && input.$invalid;
  };

  $scope.hasPropertyError = function(input, property) {
    return !input.$focused && input.$dirty && input.$error[property];
  };

  /**
   * Invoked on startup, like a constructor.
   */
  var init = function () {
    $log.debug("league join controller");
  };
  init();
};

LeagueJoinController.$inject = ['league', '$modalInstance', '$scope', '$log'];
module.exports = LeagueJoinController;

},{}],122:[function(require,module,exports){
var LeagueInviteController = function(leagueId, isCommish, leagueClosed, invitations, $modal, $modalInstance, $scope, $log) {

  $scope.isCommish = isCommish;

  $scope.leagueClosed = leagueClosed;

  $scope.invitations = invitations.data;

  $scope.resetInvite = function() {
    $scope.invitation = {
      league_id: leagueId,
      email: "",
      message: ""
    }
  };
  $scope.resetInvite();

  $scope.populateInvite = function(invitation) {
    $scope.invitation = {
      league_id: invitation.league_id,
      email: invitation.email,
      message: invitation.message
    }
  };

  $scope.sendInvite = function(invitation) {
    $modalInstance.close(invitation);
  };

  $scope.cancel = function() {
    $modalInstance.dismiss('cancel');
  };

  $scope.hasError = function(input) {
    return !input.$focused && input.$dirty && input.$invalid;
  };

  $scope.hasPropertyError = function(input, property) {
    return !input.$focused && input.$dirty && input.$error[property];
  };

  /**
   * Invoked on startup, like a constructor.
   */
  var init = function () {
    $log.debug("league invite controller");
  };
  init();
};

LeagueInviteController.$inject = ['leagueId', 'isCommish', 'leagueClosed', 'invitations', '$modal', '$modalInstance', '$scope', '$log'];
module.exports = LeagueInviteController;

},{}],116:[function(require,module,exports){
var ViewLeagueController = function(league, leagueWeeks, leagueTeams, $scope, $log, $modal, $location, $state, $stateParams, $timeout, userModel, messageModel, userService, weekService, teamService, leagueService) {

  var setMessageState = function() {
    if (!_.has($scope.userModel.leagueMessageOpen, $scope.leagueData.id)) {
      $scope.userModel.leagueMessageOpen[$scope.leagueData.id] = $scope.leagueData.message && $scope.leagueData.message.length > 0;
    }
  };

  $scope.leagueData = league.data;

  $scope.leagueWeeks = leagueWeeks.data;
  $scope.leagueTeams = leagueTeams.data;

  // pagination
  $scope.currentTeamPage = 1;
  $scope.teamsPerPage = 100;

  $scope.teamOptions = { active: true, inactive: false };

  $scope.teamQuery = '';

  $scope.leagueDropdown = {
    isopen: false
  };

  $scope.selectedWeekSlug = $stateParams.week;

  $scope.userModel = userModel;

  $scope.inPlay = function(team) {
    return (team.active && !$scope.isEliminated(team)) ? 0 : 1;
  };

  $scope.isEliminated = function(team) {
    var eliminated = false;
    if (team.eliminated_at) {
      eliminated = true;
      if (team.week_ends_at) {
        eliminated = (moment(team.eliminated_at).isBefore(team.week_ends_at) || moment(team.eliminated_at).isSame(team.week_ends_at));
      }
    }
    return eliminated;
  };

  $scope.aliveTeamCount = function(teams) {
    var aliveTeams = _.filter(teams, function(team) {
      return team.active && !$scope.isEliminated(team);
    });
    return aliveTeams.length;
  };

  $scope.toggleDropdown = function($event) {
    $event.preventDefault();
    $event.stopPropagation();
    $scope.leagueDropdown.isopen = !$scope.leagueDropdown.isopen;
  };

  $scope.changeWeek = function(slug) {
    if (slug) {
      $location.search('week', slug); // add / replace the week query param
    } else {
      $location.search('week', null); // remove week query param
    }
  };

  $scope.search = function(item) {
    if (item.name.indexOf($scope.teamQuery.toLowerCase()) != -1 || item.coach_names.join(', ').indexOf($scope.teamQuery.toLowerCase()) != -1) {
      return true;
    }
    return false;
  };

  $scope.starts = function(league) {
    var startsLabel = (league.started) ? 'Started ' : 'Starts ';
    return startsLabel + league.start_week_display;
  };

  $scope.isCommish = function(league) {
    return league.commish_ids.indexOf(userModel.user.id) > -1;
  };

  $scope.isAdmin = function() {
    return userModel.user.admin;
  };

  $scope.hasTeamInLeague = function() {
    var found = false;
    _.each($scope.leagueTeams, function(team) {
      if (team.coach_ids.indexOf(userModel.user.id) > -1) {
        found = true;
      }
    });
    return found;
  };

  $scope.hasDeactivatedTeams = function() {
    var foundDeactivated = false;
    _.each($scope.leagueTeams, function(team) {
      if (team.active == false) {
        foundDeactivated = true;
      }
    });
    return foundDeactivated;
  };

  $scope.isCoach = function(team) {
    return team.coach_ids.indexOf(userModel.user.id) > -1;
  };

  $scope.coachName = function(team) {
    return team.coach_names.join(', ');
  };

  $scope.editLeague = function(league) {
    $location.url('/season/' + league.season_id + '/league/' + league.id + '/edit');
  };

  $scope.openLeague = function(league) {
    leagueService.openLeague(league)
  };

  $scope.closeLeague = function(league) {
    leagueService.closeLeague(league)
  };

  $scope.showTeam = function(team) {
    $location.path($location.path() + '/team/' + team.id); // path will retain query params
  };

  $scope.contactCommish = function(league) {

    var modalInstance = $modal.open({
      templateUrl: 'modules/private/league/contact/league.contact.tpl.html',
      controller: 'LeagueContactController',
      resolve: {
        league: function() {
          return league;
        }
      }
    });

    modalInstance.result.then(function(params) {
      leagueService.sendCommishMessage(params.league, params.message)
    }, function () {
      $log.debug('Contact league modal dismissed...');
      messageModel.setMessage({ type: 'warning', content: 'Contact commish cancelled' }, false);
    });

  };

  $scope.reportAbuse = function() {

    var modalInstance = $modal.open({
      templateUrl: 'modules/public/abuse/abuse.tpl.html',
      controller: 'AbuseController'
    });

    modalInstance.result.then(function(message) {
      userService.contactUs(message);
    }, function () {
      messageModel.setMessage({ type: 'warning', content: 'Contact us cancelled' }, false);
      $log.debug('contact us dismissed...');
    });

  };

  $scope.readFaq = function() {
    $location.url('/faq');
  };

  $scope.updateMessage = function(league) {

    var modalInstance = $modal.open({
      templateUrl: 'modules/private/league/message/league.message.tpl.html',
      controller: 'LeagueMessageController',
      resolve: {
        league: function() {
          return league;
        }
      }
    });

    modalInstance.result.then(function(params) {
      leagueService.updateLeagueMessage(params.league, params.sendAlive, params.sendAll)
        .then(function(message) {
          $scope.leagueData.message = message;
        });

    }, function () {
      $log.debug('League message modal dismissed...');
      messageModel.setMessage({ type: 'warning', content: 'Update league message cancelled' }, false);
    });

  };

  $scope.joinLeague = function(league) {

    var modalInstance = $modal.open({
      templateUrl: 'modules/private/league/join/league.join.tpl.html',
      controller: 'LeagueJoinController',
      resolve: {
        league: function() {
          return league;
        }
      }
    });

    modalInstance.result.then(function(team) {
      teamService.createTeam(team)
        .then(
          function(data) {
            var newTeamPath = $location.path() + '/team/' + data.team_id;
            $location.path(newTeamPath); // navigate to the new team page
            $timeout(function () {
              messageModel.setMessage({ type: data.message.type, content: data.message.content, shareTeam: true  }, true);
            }, 500);
          },
          function(data) {
            messageModel.setMessage(data.message, false);
          });
    }, function () {
      $log.debug('Join league modal dismissed...');
      messageModel.setMessage({ type: 'warning', content: 'Join league cancelled' }, false);
    });

  };

  $scope.requestInvite = function(league) {

    var modalInstance = $modal.open({
      templateUrl: 'modules/private/league/invite/request/league.invite.request.tpl.html',
      controller: 'LeagueInviteRequestController',
      resolve: {
        leagueId: function() {
          return league.id;
        }
      }
    });

    modalInstance.result.then(function (invitation) {
      leagueService.requestInvite(invitation);
    }, function () {
      $log.debug('Request invite modal dismissed...');
      messageModel.setMessage({ type: 'warning', content: 'Request invite cancelled' }, false);
    });

  };

  $scope.invite = function(leagueId, isCommish, leagueClosed) {

    var modalInstance = $modal.open({
      templateUrl: 'modules/private/league/invite/league.invite.tpl.html',
      controller: 'LeagueInviteController',
      resolve: {
        leagueId: function() {
          return leagueId;
        },
        isCommish: function() {
          return isCommish;
        },
        leagueClosed: function() {
          return leagueClosed;
        },
        invitations: function() {
          if (isCommish) {
            return leagueService.getInvites(leagueId);
          } else {
            return { data: [] };
          }
        }
      }
    });

    modalInstance.result.then(function(invitation) {
      leagueService.createInvite(invitation);
    }, function () {
      $log.debug('Invite coach modal dismissed...');
    });
  };

  $scope.showDeactivatedTeams = function(show) {
    $scope.teamOptions.inactive = show;
    if (show) {
      messageModel.setMessage({ type: 'info', content: 'Showing deactivated teams (if any)' }, false);
    } else {
      messageModel.setMessage({ type: 'info', content: 'Hiding deactivated teams (if any)' }, false);
    }
  };

  $scope.pickStatus = function(pick) {
    var status = '';
    if (pick.warning === true) {
      status = 'warning';
    } else if (pick.correct === true) {
      status = 'check';
    } else if (pick.tie === true || pick.incomplete === true) {
      status = 'minus';
    } else if (pick.correct === false) {
      status = 'times';
    } else if (pick.locked === true) {
      status = 'lock';
    } else if (pick.locked === false) {
      status = 'unlock';
    } else {
      status = 'th-list';
    }
    return status;
  };

  $scope.resetSearch = function() {
    $scope.teamQuery = '';
    $scope.currentTeamPage = 1;
  };

  $scope.shareLeagueFB = function() {
    var options = {
      method: 'feed',
      link: $location.absUrl(),
      picture: "https://www.loseorgohome.com/resources/assets/images/background-small.jpg",
      name: $scope.leagueData.name,
      description: $scope.leagueData.format,
      caption: $scope.leagueData.season_name
    };
    FB.ui(options);
  };

  $scope.$on('messageController::shareLeagueFB', function(event, args) {
    $scope.shareLeagueFB();
  });

  /**
   * Invoked on startup, like a constructor.
   */
  var init = function () {
    $log.debug("view league controller");
    setMessageState();
  };
  init();

};

ViewLeagueController.$inject = ['league','leagueWeeks', 'leagueTeams', '$scope', '$log', '$modal', '$location', '$state', '$stateParams', '$timeout', 'userModel', 'messageModel', 'userService', 'weekService', 'teamService', 'leagueService'];
module.exports = ViewLeagueController;

},{}],123:[function(require,module,exports){
var JoinLeaguesController = function($scope, $log, $location, $stateParams, userModel, messageModel, seasonModel) {

  $scope.selectedSeasonId = parseInt($stateParams.seasonId);

  $scope.currentSeasons = angular.copy(seasonModel.currentSeasons);

  $scope.leagueQuery = '';

  $scope.publicLeagues = function(seasonId) {
    $location.url('/season/' + seasonId + '/leagues/public');
  };

  $scope.privateLeagues = function(seasonId) {
    $location.url('/season/' + seasonId + '/leagues/private');
  };

  $scope.changeSeason = function(seasonId) {
    seasonModel.setSelectedSeasonId(seasonId);
    var newPath = $location.path().replace(/(\/season\/)\d*/, '$1' + seasonId);
    $location.url(newPath);
  };

  $scope.search = function(item) {
    if (item.name.indexOf($scope.leagueQuery.toLowerCase()) != -1 || item.commish_names.join(', ').indexOf($scope.leagueQuery.toLowerCase()) != -1) {
      return true;
    }
    return false;
  };

  $scope.resetSearch = function() {
    $scope.leagueQuery = '';
  };

  $scope.starts = function(league) {
    var startsLabel = (league.started) ? 'Started ' : 'Starts ';
    return startsLabel + league.start_week;
  };

  $scope.isCommish = function(league) {
    return league.commish_ids.indexOf(userModel.user.id) > -1;
  };

  $scope.createLeague = function() {
    var season = seasonModel.getCurrentSeason();
    $location.url('/season/' + season.id + '/league/new');
  };

  /**
   * Invoked on startup, like a constructor.
   */
  var init = function () {
    $log.debug("join leagues controller");
  };
  init();

};

JoinLeaguesController.$inject = ['$scope', '$log', '$location', '$stateParams', 'userModel', 'messageModel', 'seasonModel'];
module.exports = JoinLeaguesController;

},{}],124:[function(require,module,exports){
var ManagedLeaguesController = function(managedLeagues, $scope, $log, $location, $modal, messageModel, leagueService) {

    $scope.managedLeagues = managedLeagues.data;

    $scope.createLeague = function(season) {

      var modalInstance = $modal.open({
        templateUrl: 'modules/private/league/new/league.new.tpl.html',
        controller: 'NewLeagueController'
      });

      modalInstance.result.then(function(league) {
        leagueService.createLeague(league);
      }, function () {
        $log.debug('Create league modal dismissed...');
        messageModel.setMessage({ type: 'warning', content: 'Create league cancelled' }, false);
      });

    };

    $scope.viewLeague = function(league) {
        $location.url('/season/' + league.season_id + '/league/' + league.id);
    };

    $scope.starts = function(league) {
      var startsLabel = (league.started) ? 'Started ' : 'Starts ';
      return startsLabel + league.start_week;
    };

    /**
     * Invoked on startup, like a constructor.
     */
    var init = function () {
        $log.debug("managed leagues controller");
    };
    init();

};

ManagedLeaguesController.$inject = ['managedLeagues', '$scope', '$log', '$location', '$modal', 'messageModel', 'leagueService'];
module.exports = ManagedLeaguesController;


},{}],125:[function(require,module,exports){
var MyLeaguesController = function(leagues, $scope, $log, $location, $modal, messageModel, seasonModel, leagueService) {

  $scope.leagues = leagues.data;

  $scope.createLeague = function() {

    var modalInstance = $modal.open({
      templateUrl: 'modules/private/league/new/league.new.tpl.html',
      controller: 'NewLeagueController'
    });

    modalInstance.result.then(function(league) {
      leagueService.createLeague(league);
    }, function () {
      $log.debug('Create league modal dismissed...');
      messageModel.setMessage({ type: 'warning', content: 'Create league cancelled' }, false);
    });

  };

  $scope.joinLeague = function() {
    var season = seasonModel.getCurrentSeason();
    $location.url('/season/' + season.id + '/leagues/public');
  };

  $scope.viewLeague = function(league) {
    $location.url('/season/' + league.season_id + '/league/' + league.id);
  };

  $scope.starts = function(league) {
    var startsLabel = (league.started) ? 'Started ' : 'Starts ';
    return startsLabel + league.start_week;
  };

  /**
   * Invoked on startup, like a constructor.
   */
  var init = function () {
    $log.debug("my leagues controller");
  };
  init();

};

MyLeaguesController.$inject = ['leagues', '$scope', '$log', '$location', '$modal', 'messageModel', 'seasonModel', 'leagueService'];
module.exports = MyLeaguesController;


},{}],126:[function(require,module,exports){
var ViewTeamController = function(team, leagueTeams, $scope, $modal, $window, $timeout, $location, $state, $stateParams, $anchorScroll, messageModel, userModel, userService, teamService) {

  var activate = function(team) {
    teamService.activateTeam(team)
      .then(function(active) {
        team.active = active;
      });
  };

  var deactivate = function(team) {
    teamService.deactivateTeam(team)
      .then(function(active) {
        team.active = active;
      });
  };

  var setMessageState = function() {
    if (!_.has($scope.userModel.teamMessageOpen, $scope.teamData.id)) {
      $scope.userModel.teamMessageOpen[$scope.teamData.id] = $scope.teamData.message && $scope.teamData.message.length > 0;
    }
  };

  $scope.teamData = team.data;
  $scope.leagueTeams = leagueTeams.data;

  $scope.teamDropdown = {
    isopen: false
  };

  $scope.userModel = userModel;

  $scope.toggleDropdown = function($event) {
    $event.preventDefault();
    $event.stopPropagation();
    $scope.teamDropdown.isopen = !$scope.teamDropdown.isopen;
  };

  $scope.contactCommish = function(team) {

    var modalInstance = $modal.open({
      templateUrl: 'modules/private/league/contact/league.contact.tpl.html',
      controller: 'LeagueContactController',
      resolve: {
        league: function() {
          return team.league;
        }
      }
    });

    modalInstance.result.then(function(params) {
      teamService.sendCommishMessage(team, params.message)
    }, function () {
      messageModel.setMessage({ type: 'warning', content: 'Contact commish cancelled' }, false);
    });

  };

  $scope.updateMessage = function(team) {

    var modalInstance = $modal.open({
      templateUrl: 'modules/private/team/message/team.message.tpl.html',
      controller: 'TeamMessageController',
      resolve: {
        team: function() {
          return team;
        }
      }
    });

    modalInstance.result.then(function(params) {
      teamService.updateTeamMessage(params.team, params.sendEmail)
        .then(function(message) {
          $scope.teamData.message = message;
        });

    }, function () {
      messageModel.setMessage({ type: 'warning', content: 'Update team message cancelled' }, false);
    });

  };

  $scope.confirmActivate = function(team) {
    var modalInstance = $modal.open({
      templateUrl: 'common/modules/confirm/confirm.tpl.html',
      controller: 'ConfirmController',
      size: 'sm',
      resolve: {
        message: function() {
          return 'Reactivate ' + team.name + '?';
        }
      }
    });
    modalInstance.result.then(function() {
      activate(team);
    }, function () {
      messageModel.setMessage({ type: 'warning', content: 'Team reactivation cancelled' }, false);
    });
  };

  $scope.confirmDeactivate = function(team) {
    var modalInstance = $modal.open({
      templateUrl: 'common/modules/confirm/confirm.tpl.html',
      controller: 'ConfirmController',
      size: 'sm',
      resolve: {
        message: function() {
          return 'Deactivate ' + team.name + '?';
        }
      }
    });
    modalInstance.result.then(function() {
      deactivate(team);
    }, function () {
      messageModel.setMessage({ type: 'warning', content: 'Team deactivation cancelled' }, false);
    });
  };

  $scope.hasNotEnoughPicks = function(team) {
    var hasNotMetPickCount = team.current_picks_count != team.league.max_picks_per_week;
    var hasNotMetGameCount = team.current_picks_count != team.current_week_game_count;
    return hasNotMetPickCount && hasNotMetGameCount;
  };

  $scope.pickSummary = function(team) {
    var msg = '';
    if (team.league.max_picks_per_week && team.league.max_picks_per_week <= team.current_week_game_count) {
      msg = team.current_picks_count + ' of ' + team.league.max_picks_per_week;
    } else {
      msg = team.current_picks_count + ' of ' + team.current_week_game_count;
    }
    return msg;
  };

  $scope.isCommish = function(team) {
    return team.commish_ids.indexOf(userModel.user.id) > -1;
  };

  $scope.isCoach = function(team) {
    return team.coach_ids.indexOf(userModel.user.id) > -1;
  };

  $scope.isAdmin = function() {
    return userModel.user.admin;
  };

  $scope.showTeam = function(team) {
    // omg what a sin this is. refreshes the browser window. talk about using a big ass hammer...
    // have to do this because of reloadOnSearch: false inside of view/picks/index.js needed to prevent controller reinit when using the week filter
    $timeout(function () {
      $window.location.href = $location.absUrl().replace(/[^\/]*$/, team.id);
      location.reload();
    }, 200);
  };

  $scope.showLeague = function(team) {
    $location.path('/season/' + team.league.season_id + '/league/' + team.league.id);
  };

  $scope.editTeam = function(team) {

    var modalInstance = $modal.open({
      templateUrl: 'modules/private/team/edit/team.edit.tpl.html',
      controller: 'EditTeamController',
      resolve: {
        team: function() {
          return team;
        }
      }
    });

    modalInstance.result.then(function(team) {
      teamService.updateTeam(team)
        .then(function() {
          $scope.teamData = team;
        });
    }, function () {
      messageModel.setMessage({ type: 'warning', content: 'Edit team cancelled' }, false);
    });

  };

  $scope.makePick = function(team, pick) {
    if (!$scope.isCoach(team) || (pick && pick.locked)) {
      return;
    }
    if (team.league.max_picks_per_week == 1) {
      $location.url($location.path() + '/pick');
    } else {
      $location.url($location.path() + '/picks');
    }
  };

  $scope.shareTeamFB = function() {
    var options = {
      method: 'feed',
      link: $location.absUrl(),
      picture: "https://www.loseorgohome.com/resources/assets/images/background-small.jpg",
      name: $scope.teamData.name + ' [ ' + $scope.teamData.league.name + ' ]',
      description: $scope.teamData.league.format,
      caption: $scope.teamData.league.season_name
    };
    FB.ui(options);
  };

  $scope.$on('messageController::shareTeamFB', function(event, args) {
    $scope.shareTeamFB();
  });

  var init = function () {
    $anchorScroll(); // makes sure page loads at the top
    setMessageState();
  };
  init();

};

ViewTeamController.$inject = ['team', 'leagueTeams', '$scope', '$modal', '$window', '$timeout', '$location', '$state', '$stateParams', '$anchorScroll', 'messageModel', 'userModel', 'userService', 'teamService'];
module.exports = ViewTeamController;

},{}],127:[function(require,module,exports){
var TeamMessageController = function(team, $modalInstance, $scope, $log) {

  $scope.teamData = angular.copy(team);

  $scope.messageOptions = { sendEmail: false };

  $scope.updateMessage = function(team, sendEmail) {
    $modalInstance.close({ team: team, sendEmail: sendEmail});
  };

  $scope.cancel = function() {
    $modalInstance.dismiss('cancel');
  };

  $scope.hasError = function(input) {
    return !input.$focused && input.$dirty && input.$invalid;
  };

  $scope.hasPropertyError = function(input, property) {
    return !input.$focused && input.$dirty && input.$error[property];
  };

  /**
   * Invoked on startup, like a constructor.
   */
  var init = function () {
    $log.debug("team message controller");
  };
  init();
};

TeamMessageController.$inject = ['team', '$modalInstance', '$scope', '$log'];
module.exports = TeamMessageController;

},{}],128:[function(require,module,exports){
var EditTeamController = function(team, $scope, $log, $modalInstance) {

    $scope.teamData = angular.copy(team);

    $scope.editTeam = function(team) {
      team.name = team.name.toLowerCase();
      $modalInstance.close(team);
    };

    $scope.cancel = function () {
      $modalInstance.dismiss('cancel');
    };

    $scope.hasError = function(input) {
      return !input.$focused && input.$dirty && input.$invalid;
    };

    $scope.hasPropertyError = function(input, property) {
      return !input.$focused && input.$dirty && input.$error[property];
    };

    /**
     * Invoked on startup, like a constructor.
     */
    var init = function () {
        $log.debug("edit team controller");
    };
    init();

};

EditTeamController.$inject = ['team', '$scope', '$log', '$modalInstance'];
module.exports = EditTeamController;

},{}],129:[function(require,module,exports){
var TeamPickController = function(team, week, games, picks, $rootScope, $scope, $log, $location, userModel, dateUtils) {

  var updatePickCount = function(picks) {
    var weekPicks = _.filter(picks, function(pick) {
      return pick.week_id === $scope.week.id;
    });
    $scope.pickCount = weekPicks.length;
  };

  $scope.team = team.data;

  $scope.week = week.data;

  $scope.games = games.data;

  $scope.picks = picks.data;
  updatePickCount($scope.picks);

  $scope.savePicksEnabled = false;

  $scope.gameQuery = '';

  $scope.pickMessage = function(team, week) {
    var msg = '';
    if (!team.league.max_picks_per_week || team.league.max_picks_per_week >= $scope.games.length) {
      msg = 'Pick a loser for all games';
    } else {
      msg = 'Pick ' + team.league.max_picks_per_week + ' loser';
      if (team.league.max_picks_per_week > 1) {
        msg += 's';
      }
    }
    msg += ' for ' + week.name;
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
    var startsLabel = '';
    if (game.note && game.note.length > 0) {
      startsLabel += game.note + ' - ';
    }
    if (game.tbd) {
      startsLabel += 'TBD';
    } else {
      startsLabel += (game.started) ? 'Started ' : 'Starts ';
      startsLabel += dateUtils.dateFormat(game.starts_at, "ddd, mmm d h:MM TT Z");
    }
    if (game.if_necessary) {
      startsLabel += ' *If Necessary';
    }
    if (game.postponed) {
      startsLabel += ' [ *PPD ]';
    }
    return startsLabel;
  };

  $scope.showTeam = function(team) {
    var teamPath = '/season/' + team.league.season_id + '/league/' + team.league.id + '/team/' + team.id + '?week=' + $scope.week.slug;
    $location.url(teamPath);
  };

  $scope.isCoach = function(team) {
    return team.coach_ids.indexOf(userModel.user.id) > -1;
  };

  $scope.search = function(game) {
    var match = false;
    _.each(game.squads, function(squad) {
      if (squad.name.toLowerCase().indexOf($scope.gameQuery.toLowerCase()) != -1) {
        match = true;
      }
    });
    return match;
  };

  $scope.$on('TeamPickController::picksChanged', function(event, args) {
    $scope.savePicksEnabled = true;
    updatePickCount(args.picks);
  });

};

TeamPickController.$inject = ['team', 'week', 'games', 'picks', '$rootScope', '$scope', '$log', '$location', 'userModel', 'dateUtils'];
module.exports = TeamPickController;

},{}],130:[function(require,module,exports){
var PlayLeaguesController = function(leagues, $scope, $log, $location, $modal, userModel, messageModel, seasonModel, leagueService) {

  $scope.leagues = leagues.data;

  // pagination
  $scope.currentLeaguePage = 1;
  $scope.leaguesPerPage = 100;

  $scope.createLeague = function(season) {

    var modalInstance = $modal.open({
      templateUrl: 'modules/private/league/new/league.new.tpl.html',
      controller: 'NewLeagueController'
    });

    modalInstance.result.then(function(league) {
      leagueService.createLeague(league);
    }, function () {
      $log.debug('Create league modal dismissed...');
      messageModel.setMessage({ type: 'warning', content: 'Create league cancelled' }, false);
    });

  };

  $scope.joinLeague = function(season) {
    var season = seasonModel.getCurrentSeason();
    $location.url('/season/' + season.id + '/leagues/public');
  };

  $scope.viewLeague = function(league) {
    $location.url('/season/' + league.season_id + '/league/' + league.id);
  };

  $scope.starts = function(league) {
    var startsLabel = (league.started) ? 'Started ' : 'Starts ';
    return startsLabel + league.start_week;
  };

  $scope.isCommish = function(league) {
    return league.commish_ids.indexOf(userModel.user.id) > -1;
  };

  $scope.search = function(item) {
    if (item.name.indexOf($scope.query.toLowerCase()) != -1 || item.commish_names.join(', ').indexOf($scope.query.toLowerCase()) != -1) {
      return true;
    }
    return false;
  };

  /**
   * Invoked on startup, like a constructor.
   */
  var init = function () {
    $log.debug("my leagues controller");
  };
  init();

};

PlayLeaguesController.$inject = ['leagues', '$scope', '$log', '$location', '$modal', 'userModel', 'messageModel', 'seasonModel', 'leagueService'];
module.exports = PlayLeaguesController;


},{}],131:[function(require,module,exports){
var PlayTeamsController = function(teams, $scope, $log, $stateParams, $location) {

  $scope.teams = teams.data;

  // pagination
  $scope.currentTeamPage = 1;
  $scope.teamsPerPage = 100;

  $scope.inPlay = function(team) {
    return (team.active && team.alive) ? 0 : 1;
  };

  $scope.showTeam = function(team) {
    $location.url('/season/' + $stateParams.seasonId + '/league/' + team.league.id + '/team/' + team.id);
  };

  $scope.search = function(item) {
    if (item.name.indexOf($scope.query.toLowerCase()) != -1 || item.league.name.indexOf($scope.query.toLowerCase()) != -1) {
      return true;
    }
    return false;
  };

  $scope.pickStatus = function(pick) {
    var status = '';
    if (pick.warning === true) {
      status = 'warning';
    } else if (pick.correct === true) {
      status = 'check';
    } else if (pick.game && (pick.game.tie === true || pick.game.incomplete === true)) {
      status = 'minus';
    } else if (pick.correct === false) {
      status = 'times';
    } else if (pick.locked === true) {
      status = 'lock';
    } else if (pick.locked === false) {
      status = 'unlock';
    } else {
      status = 'th-list';
    }
    return status;
  };

  /**
   * Invoked on startup, like a constructor.
   */
  var init = function () {
    $log.debug("play teams controller");
  };
  init();

};

PlayTeamsController.$inject = ['teams', '$scope', '$log', '$stateParams', '$location'];
module.exports = PlayTeamsController;

},{}],132:[function(require,module,exports){
var AdminSeasonsController = function($scope, $location, $modal, seasonModel, seasonService) {

  $scope.seasons = seasonModel.seasons;

  $scope.showSeason = function(season) {
    $location.url($location.path() + '/' + season.id);
  };

  $scope.createSeason = function() {

    var modalInstance = $modal.open({
      templateUrl: 'modules/private/admin/seasons/season/new/admin.season.new.tpl.html',
      controller: 'AdminSeasonNewController'
    });

    modalInstance.result.then(function(season) {
      seasonService.createSeason(season);
    }, function () {
      $log.debug('Create season modal dismissed...');
      messageModel.setMessage({ type: 'warning', content: 'Create season cancelled' }, false);
    });

  };

  /**
   * Invoked on startup, like a constructor.
   */
  var init = function () {
  };
  init();
};

AdminSeasonsController.$inject = ['$scope', '$location', '$modal', 'seasonModel', 'seasonService'];
module.exports = AdminSeasonsController;

},{}],133:[function(require,module,exports){
var AdminWeekController = function(week, games, $scope, $log, $modal, dateUtils, gameService, squadService, weekService, messageModel) {

  var completeWeek = function(week) {
    weekService.completeWeek(week)
      .then(function() {
        $scope.weekData.complete = true;
      });
  };

  var sendReminder = function(week) {
    weekService.sendReminder(week);
  };

  $scope.weekData = week.data;

  $scope.games = games.data;

  $scope.dateFormat = dateUtils.dateFormat;

  $scope.gameQuery = '';

  $scope.editWeek = function(week) {

    var modalInstance = $modal.open({
      templateUrl: 'modules/private/admin/week/edit/admin.week.edit.tpl.html',
      controller: 'AdminWeekEditController',
      resolve: {
        week: function() {
          return week;
        },
        weekTypes: function() {
          return weekService.getWeekTypes();
        }
      }
    });

    modalInstance.result.then(function(week) {
      weekService.updateWeek(week);
    }, function () {
      $log.debug('Week update cancelled...');
      messageModel.setMessage({ type: 'warning', content: 'Week update cancelled' }, false);
    });

  };

  $scope.editGame = function(game, week) {

    var modalInstance = $modal.open({
      templateUrl: 'modules/private/admin/game/edit/admin.game.edit.tpl.html',
      controller: 'AdminGameEditController',
      resolve: {
        game: function() {
          return game;
        },
        squads: function() {
          return squadService.getWeekSquads(week);
        }
      }
    });

    modalInstance.result.then(function(game) {
      gameService.updateGame(game);
    }, function () {
      $log.debug('Game update cancelled...');
      messageModel.setMessage({ type: 'warning', content: 'Game update cancelled' }, false);
    });

  };

  $scope.createGame = function(week, games) {

    var modalInstance = $modal.open({
      templateUrl: 'modules/private/admin/game/new/admin.game.new.tpl.html',
      controller: 'AdminGameNewController',
      resolve: {
        week: function() {
          return week;
        },
        lastGame: function() {
          if (games.length > 0) {
            return games[games.length - 1]
          } else {
            return null
          }
        },
        squads: function() {
          return squadService.getWeekSquads(week);
        }
      }
    });

    modalInstance.result.then(function(game) {
      gameService.createGame(game);
    }, function () {
      $log.debug('Create game modal dismissed...');
      messageModel.setMessage({ type: 'warning', content: 'Create game cancelled' }, false);
    });

  };

  $scope.confirmSendReminder = function(week) {
    var modalInstance = $modal.open({
      templateUrl: 'common/modules/confirm/confirm.tpl.html',
      controller: 'ConfirmController',
      resolve: {
        message: function() {
          return 'Are you sure you want to send weekly reminder?';
        }
      }
    });
    modalInstance.result.then(function() {
      sendReminder(week);
    }, function () {
      $log.debug('Send reminder cancelled...');
      messageModel.setMessage({ type: 'warning', content: 'Send reminder cancelled' }, false);
    });
  };

  $scope.confirmWeekComplete = function(week) {
    var modalInstance = $modal.open({
      templateUrl: 'common/modules/confirm/confirm.tpl.html',
      controller: 'ConfirmController',
      resolve: {
        message: function() {
          return 'Are you sure you want to mark this week as complete?';
        }
      }
    });
    modalInstance.result.then(function() {
      completeWeek(week);
    }, function () {
      $log.debug('Complete week cancelled...');
      messageModel.setMessage({ type: 'warning', content: 'Week complete cancelled' }, false);
    });
  };

  $scope.search = function(game) {
    var match = false;
    _.each(game.squads, function(squad) {
      if (squad.name.toLowerCase().indexOf($scope.gameQuery.toLowerCase()) != -1) {
        match = true;
      }
    });
    return match;
  };

  /**
   * Invoked on startup, like a constructor.
   */
  var init = function () {
  };
  init();
};

AdminWeekController.$inject = ['week', 'games', '$scope', '$log', '$modal', 'dateUtils', 'gameService', 'squadService', 'weekService', 'messageModel'];
module.exports = AdminWeekController;

},{}],134:[function(require,module,exports){
var AdminSquadsController = function(squads, $scope, $log, $modal, squadService, messageModel) {

  $scope.squads = squads.data;

  $scope.selectedSquadType = null;

  $scope.squadTypes = _.compact(_.uniq(_.map($scope.squads, function(squad) {
      return squad.squad_type;
  })));

  $scope.query = '';

  $scope.createSquad = function() {

    var modalInstance = $modal.open({
      templateUrl: 'modules/private/admin/squads/new/admin.squads.new.tpl.html',
      controller: 'AdminSquadsNewController'
    });

    modalInstance.result.then(function(squad) {
      squadService.createSquad(squad);
    }, function () {
      $log.debug('Create squad modal dismissed...');
      messageModel.setMessage({ type: 'warning', content: 'Create squad cancelled' }, false);
    });

  };

  $scope.editSquad = function(squad) {

    var modalInstance = $modal.open({
      templateUrl: 'modules/private/admin/squads/edit/admin.squads.edit.tpl.html',
      controller: 'AdminSquadsEditController',
      resolve: {
        squad: function() {
          return squad;
        }
      }
    });

    modalInstance.result.then(function(squad) {
      squadService.updateSquad(squad);
    }, function () {
      $log.debug('Squad update cancelled...');
      messageModel.setMessage({ type: 'warning', content: 'Squad update cancelled' }, false);
    });

  };


  $scope.search = function(item) {
    if (item.name.toLowerCase().indexOf($scope.query.toLowerCase()) != -1 && (!$scope.selectedSquadType || item.squad_type == $scope.selectedSquadType)) {
      return true;
    }
    return false;
  };

  /**
   * Invoked on startup, like a constructor.
   */
  var init = function () {
  };
  init();
};

AdminSquadsController.$inject = ['squads', '$scope', '$log', '$modal', 'squadService', 'messageModel'];
module.exports = AdminSquadsController;

},{}],135:[function(require,module,exports){
var LeagueInviteRequestController = function(leagueId, $modalInstance, $scope, $log, userModel) {

  $scope.invitation = {
    league_id: leagueId,
    email: userModel.user.email,
    message: ""
  };

  $scope.requestInvite = function (invitation) {
    $modalInstance.close(invitation);
  };

  $scope.cancel = function () {
    $modalInstance.dismiss('cancel');
  };

  $scope.hasError = function(input) {
    return !input.$focused && input.$dirty && input.$invalid;
  };

  $scope.hasPropertyError = function(input, property) {
    return !input.$focused && input.$dirty && input.$error[property];
  };

  /**
   * Invoked on startup, like a constructor.
   */
  var init = function () {
    $log.debug("league invite request controller");
  };
  init();
};

LeagueInviteRequestController.$inject = ['leagueId', '$modalInstance', '$scope', '$log', 'userModel'];
module.exports = LeagueInviteRequestController;

},{}],136:[function(require,module,exports){

var PublicLeaguesController = function($scope, $log, $location, publicLeagues) {

    $scope.publicLeagues = publicLeagues.data;

    $scope.showLeague = function(league) {
      $location.url('/season/' + league.season_id + '/league/' + league.id);
    };

    /**
     * Invoked on startup, like a constructor.
     */
    var init = function () {
        $log.debug("public leagues controller");
    };
    init();

};

PublicLeaguesController.$inject = ['$scope', '$log', '$location', 'publicLeagues'];
module.exports = PublicLeaguesController;


},{}],137:[function(require,module,exports){
var PrivateLeaguesController = function(privateLeagues, $scope, $log, $location) {

    $scope.privateLeagues = privateLeagues.data;

    $scope.showLeague = function(league) {
      $location.url('/season/' + league.season_id + '/league/' + league.id);
    };

    /**
     * Invoked on startup, like a constructor.
     */
    var init = function () {
        $log.debug("private leagues controller");
    };
    init();

};

PrivateLeaguesController.$inject = ['privateLeagues', '$scope', '$log', '$location'];
module.exports = PrivateLeaguesController;


},{}],138:[function(require,module,exports){
var ViewTeamPicksController = function(leagueWeeks, currentWeek, picks, $scope, $log, $location, $stateParams, dateUtils) {

  var createFakeNonePicks = function() {
    if ($scope.picks.length < $scope.leagueWeeks.length) {
      // important that weeks are in ascending order for this to work
      for (i = $scope.picks.length; i < $scope.leagueWeeks.length; i++) {
        createFakeNonePick($scope.leagueWeeks[i]);
      }
    }
  };

  var createFakeNonePick = function(week) {
    var pick = {
      squad: {
        id: 0,
        name: "None",
        abbrev: "None",
        short: "None"
      },
      correct: (!$scope.teamData.alive) ? false : null,
      locked: (!$scope.teamData.alive) ? true : false,
      week: {
        name: week.name,
        slug: week.slug,
        date: week.starts_at
      }
    };
    $scope.picks.push(pick);
  };

  $scope.leagueWeeks = leagueWeeks.data;

  $scope.picks = picks.data;

  $scope.selectedWeekSlug = $stateParams.week;

  $scope.selectedWeek = _.find($scope.leagueWeeks, function(leagueWeek) { return leagueWeek.slug === $scope.selectedWeekSlug });

  $scope.correctPickCount = function(picks) {
    var correctPicks = _.filter(picks, function(pick) {
      return pick.correct;
    });
    return correctPicks.length;
  };

  $scope.changeWeek = function(slug) {
    if (slug) {
      $location.search('week', slug); // add / replace the week query param
      $scope.selectedWeek = _.find($scope.leagueWeeks, function(leagueWeek) { return leagueWeek.slug === slug });
    } else {
      $location.search('week', null); // remove week query param
      $scope.selectedWeek = null;
    }
  };

  $scope.pickStatus = function(pick) {
    var status = '';
    if (pick.correct === true) {
      status = 'check';
    } else if (pick.game && (pick.game.tie === true || pick.game.incomplete === true)) {
      status = 'minus';
    } else if (pick.correct === false) {
      status = 'times';
    } else if (pick.locked) {
      status = 'lock';
    } else {
      status = 'unlock';
    }
    return status;
  };

  $scope.pickMeta = function(pick) {
    var meta = pick.week.name;
    if (pick.game) {
      if (pick.game.note && pick.game.note.length > 0) {
        meta += ' | ' + pick.game.note;
      } else if (pick.game.tbd) {
        meta += ' | TBD';
      } else {
        meta += ' | ' + dateUtils.dateFormat(pick.game.start, "mmm d") + ' | ' + dateUtils.dateFormat(pick.game.start, "h:MM TT Z");
      }
      if (pick.game.postponed) {
        meta += ' | *PPD';
      }
    }
    return meta;
  };

  /**
   * Invoked on startup, like a constructor.
   */
  var init = function () {
    if ($scope.teamData.league.elimination) {
      createFakeNonePicks();
    }
    if (currentWeek) {
      $scope.selectedWeekSlug = currentWeek.data.slug;
      $scope.changeWeek($scope.selectedWeekSlug);
    }
  };
  init();
};

ViewTeamPicksController.$inject = ['leagueWeeks', 'currentWeek', 'picks', '$scope', '$log', '$location', '$stateParams', 'dateUtils'];
module.exports = ViewTeamPicksController;

},{}],139:[function(require,module,exports){
var TeamPickOneController = function($scope, $log, pickService) {

  $scope.currentPick = _.find($scope.picks, function(pick){ return pick.week_id === $scope.week.id });

  $scope.makePick = function(game, squad) {
    if ($scope.isDisabled(game, squad)) {
      // ignore it
      return;
    }
    $scope.currentPick = {
      week_id: game.week_id,
      week_type_id: game.week_type_id,
      game_id: game.id,
      team_id: $scope.team.id,
      squad_id: squad.id,
      game: game,
      squad: squad
    };
    $scope.savePick();
  };

  $scope.savePick = function() {
    pickService.savePick($scope.currentPick)
      .finally(function() {
        $scope.showTeam($scope.team);
      });
  };

  $scope.hasSquadBeenUsed = function(game, squad) {
    if ($scope.team.league.allow_dups) {
      return false;
    } else {
      var squadHasBeenUsed = false;
      _.each($scope.picks, function(pick) {
        if (pick.squad.id == squad.id && pick.week_type_id == game.week_type_id && pick.week_id != game.week_id) {
          squadHasBeenUsed = true;
        }
      });
      return squadHasBeenUsed;
    }
  };

  $scope.isCurrentPickLocked = function() {
    return $scope.currentPick && $scope.currentPick.locked;
  };

  $scope.isDisabled = function(game, squad) {
    var isDisabled = false;
    if (game.locked || $scope.hasSquadBeenUsed(game, squad) || $scope.isCurrentPickLocked()) {
      isDisabled = true;
    }
    return isDisabled;
  };

  $scope.pickStatus = function(game, squad) {
    var status = '';
    if (!_.isUndefined($scope.currentPick) && $scope.currentPick.game_id == game.id && $scope.currentPick.squad_id == squad.id) {
      if ($scope.currentPick.correct === true) {
        status = 'check';
      } else if ($scope.currentPick.game && ($scope.currentPick.game.tie === true || $scope.currentPick.game.incomplete === true)) {
        status = 'minus';
      } else if ($scope.currentPick.correct === false) {
        status = 'times';
      } else if ($scope.currentPick.locked) {
        status = 'lock';
      } else {
        status = 'unlock';
      }
    }
    return status;
  };

  /**
   * Invoked on startup, like a constructor.
   */
  var init = function () {
    $log.debug("pick one controller");
  };
  init();
};

TeamPickOneController.$inject = ['$scope', '$log', 'pickService'];
module.exports = TeamPickOneController;

},{}],140:[function(require,module,exports){
var TeamPickManyController = function($rootScope, $scope, $log, $anchorScroll, messageModel, pickService) {

  var scrollToTop = function() {
    $anchorScroll(); // hacky?
  };

  var allPicksMade = function() {
    return $scope.picks.length == $scope.team.league.max_picks_per_week || $scope.picks.length >= $scope.games.length;
  };

  var getPick = function(game, squad) {
    var pick = _.find($scope.picks, function(pick) { return pick.game_id === game.id && pick.squad_id === squad.id });
    return pick;
  };

  var removePick = function(pickToRemove) {
    $scope.picks = _.reject($scope.picks, function(pick) { return pick.game_id === pickToRemove.game_id && pick.squad_id === pickToRemove.squad_id })
  };

  var removeGamePicks = function(game) {
    $scope.picks = _.reject($scope.picks, function(pick) { return pick.game_id === game.id })
  };

  var addPick = function(game, squad) {
    if (allPicksMade()) {
      var message = 'No more picks allowed. Unselect a pick if necessary.';
      var maxPicks = $scope.team.league.max_picks_per_week;
      if (maxPicks) {
        message = 'Only ' + maxPicks + ' picks allowed. Unselect a pick if necessary.';
      }
      messageModel.setMessage({ type: 'danger', content: message }, false);
      scrollToTop();
      return;
    }
    var pick = {
      week_id: game.week_id,
      week_type_id: game.week_type_id,
      game_id: game.id,
      team_id: $scope.team.id,
      squad_id: squad.id
    };
    $scope.picks.push(pick);
  };

  $scope.togglePick = function(game, squad) {
    if (!$scope.isCoach($scope.team) || game.locked) return;
    var pick = getPick(game, squad);
    if (!_.isUndefined(pick) && pick.locked) {
      return; // no toggling locked picks
    }
    if (!_.isUndefined(pick)) {
      // if a pick exists already, then you are attempting to de-select it
      removePick(pick);
    } else {
      removeGamePicks(game); // no 2 picks for the same game
      addPick(game, squad);
    }
    $rootScope.$broadcast('TeamPickController::picksChanged', { picks: $scope.picks });
  };

  $scope.savePicks = function() {
    pickService.savePicks($scope.team.id, $scope.picks)
      .finally(function(result) {
        $scope.showTeam($scope.team);
      });
  };

  $scope.isDisabled = function(game) {
    var isDisabled = false;
    if (game.locked) {
      isDisabled = true;
    }
    return isDisabled;
  };

  $scope.pickStatus = function(game, squad) {
    var status = '',
      pick = getPick(game, squad);
    if (!_.isUndefined(pick)) {
      if (pick.correct === true) {
        status = 'check';
      } else if (pick.game && (pick.game.tie === true || pick.game.incomplete === true)) {
        status = 'minus';
      } else if (pick.correct === false) {
        status = 'times';
      } else if (pick.locked === true) {
        status = 'lock';
      } else {
        status = 'unlock';
      }
    }
    return status;
  };

  $scope.$on('TeamPickController::savePicks', function(event) {
    $scope.savePicks();
  });
  
  /**
   * Invoked on startup, like a constructor.
   */
  var init = function () {
    $log.debug("pick many controller");
  };
  init();
};

TeamPickManyController.$inject = ['$rootScope', '$scope', '$log', '$anchorScroll', 'messageModel', 'pickService'];
module.exports = TeamPickManyController;

},{}],141:[function(require,module,exports){
var AdminGameEditController = function(game, squads, $scope, $modalInstance) {

  $scope.gameData = angular.copy(game);

  $scope.squads = squads.data;

  $scope.closeStartsAt = function() {
    $scope.startsAtDropdown = {
      isopen: false
    };
  };
  $scope.closeStartsAt();

  $scope.getSquad = function(squadId) {
    var squad = _.find($scope.squads, function(squad) { return squad.id === squadId });
    return squad;
  };

  $scope.editGame = function(game) {
    $modalInstance.close(game);
  };

  $scope.cancel = function () {
    $modalInstance.dismiss('cancel');
  };

  /**
   * Invoked on startup, like a constructor.
   */
  var init = function () {
  };
  init();
};

AdminGameEditController.$inject = ['game', 'squads', '$scope', '$modalInstance'];
module.exports = AdminGameEditController;

},{}],142:[function(require,module,exports){
var AdminGameNewController = function(week, lastGame, squads, $scope, $modalInstance) {

  $scope.weekData = week;

  $scope.squads = squads.data;

  $scope.newGameData = {
    week_id: week.id,
    note: '',
    home_squad_id: squads.data[0].id,
    visiting_squad_id: squads.data[0].id,
    starts_at: (lastGame) ? lastGame.starts_at : moment().format(),
    playoff: false,
    tbd: false,
    if_necessary: false
  };

  $scope.closeStartsAt = function() {
    $scope.startsAtDropdown = {
      isopen: false
    };
  };
  $scope.closeStartsAt();

  $scope.createGame = function(game) {
    $modalInstance.close(game);
  };

  $scope.cancel = function () {
    $modalInstance.dismiss('cancel');
  };

  /**
   * Invoked on startup, like a constructor.
   */
  var init = function () {
  };
  init();
};

AdminGameNewController.$inject = ['week', 'lastGame', 'squads', '$scope', '$modalInstance'];
module.exports = AdminGameNewController;

},{}],143:[function(require,module,exports){
var AdminWeeksController = function(season, weeks, leagues, $scope, $location, $modal, seasonService, weekService) {

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

  $scope.createWeek = function(season) {

    var modalInstance = $modal.open({
      templateUrl: 'modules/private/admin/week/new/admin.week.new.tpl.html',
      controller: 'AdminWeekNewController',
      resolve: {
        season: function() {
          return season;
        },
        weekTypes: function() {
          return weekService.getWeekTypes();
        }
      }
    });

    modalInstance.result.then(function(week) {
      weekService.createWeek(week);
    }, function () {
      $log.debug('Week create cancelled...');
      messageModel.setMessage({ type: 'warning', content: 'Week create cancelled' }, false);
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

AdminWeeksController.$inject = ['season', 'weeks', 'leagues', '$scope', '$location', '$modal', 'seasonService', 'weekService'];
module.exports = AdminWeeksController;

},{}],144:[function(require,module,exports){
var AdminWeekNewController = function(season, weekTypes, $scope, $modalInstance) {

  $scope.weekTypes = weekTypes.data;

  $scope.weekData = {
    season_id: season.id,
    name: '',
    week_type_id: weekTypes.data[0].id,
    starts_at: moment().format(),
    ends_at: moment().format()
  };

  $scope.closeStartsAt = function() {
    $scope.startsAtDropdown = {
      isopen: false
    };
  };
  $scope.closeStartsAt();

  $scope.closeEndsAt = function() {
    $scope.endsAtDropdown = {
      isopen: false
    };
  };
  $scope.closeEndsAt();

  $scope.createWeek = function(week) {
    $modalInstance.close(week);
  };

  $scope.cancel = function () {
    $modalInstance.dismiss('cancel');
  };

  $scope.hasError = function(input) {
    return !input.$focused && input.$dirty && input.$invalid;
  };

  $scope.hasPropertyError = function(input, property) {
    return !input.$focused && input.$dirty && input.$error[property];
  };

  /**
   * Invoked on startup, like a constructor.
   */
  var init = function () {
  };
  init();
};

AdminWeekNewController.$inject = ['season', 'weekTypes', '$scope', '$modalInstance'];
module.exports = AdminWeekNewController;

},{}],145:[function(require,module,exports){
var AdminWeekEditController = function(week, weekTypes, $scope, $modalInstance) {

  $scope.weekData = angular.copy(week);

  $scope.weekTypes = weekTypes.data;

  $scope.closeStartsAt = function() {
    $scope.startsAtDropdown = {
      isopen: false
    };
  };
  $scope.closeStartsAt();

  $scope.closeEndsAt = function() {
    $scope.endsAtDropdown = {
      isopen: false
    };
  };
  $scope.closeEndsAt();

  $scope.editWeek = function(week) {
    $modalInstance.close(week);
  };

  $scope.cancel = function () {
    $modalInstance.dismiss('cancel');
  };

  $scope.hasError = function(input) {
    return !input.$focused && input.$dirty && input.$invalid;
  };

  $scope.hasPropertyError = function(input, property) {
    return !input.$focused && input.$dirty && input.$error[property];
  };

  /**
   * Invoked on startup, like a constructor.
   */
  var init = function () {
  };
  init();
};

AdminWeekEditController.$inject = ['week', 'weekTypes', '$scope', '$modalInstance'];
module.exports = AdminWeekEditController;

},{}],146:[function(require,module,exports){
var AdminSquadsNewController = function($scope, $modalInstance) {

  $scope.squadData = {
    name: '',
    abbrev: '',
    short: '',
    squad_type: ''
  };

  $scope.createSquad = function(squad) {
    $modalInstance.close(squad);
  };

  $scope.cancel = function () {
    $modalInstance.dismiss('cancel');
  };

  $scope.hasError = function(input) {
    return !input.$focused && input.$dirty && input.$invalid;
  };

  $scope.hasPropertyError = function(input, property) {
    return !input.$focused && input.$dirty && input.$error[property];
  };

  /**
   * Invoked on startup, like a constructor.
   */
  var init = function () {
  };
  init();
};

AdminSquadsNewController.$inject = ['$scope', '$modalInstance'];
module.exports = AdminSquadsNewController;

},{}],147:[function(require,module,exports){
var AdminSquadsEditController = function(squad, $scope, $modalInstance) {

  $scope.squadData = angular.copy(squad);

  $scope.editSquad = function(squad) {
    $modalInstance.close(squad);
  };

  $scope.cancel = function () {
    $modalInstance.dismiss('cancel');
  };

  $scope.hasError = function(input) {
    return !input.$focused && input.$dirty && input.$invalid;
  };

  $scope.hasPropertyError = function(input, property) {
    return !input.$focused && input.$dirty && input.$error[property];
  };

  /**
   * Invoked on startup, like a constructor.
   */
  var init = function () {
  };
  init();
};

AdminSquadsEditController.$inject = ['squad', '$scope', '$modalInstance'];
module.exports = AdminSquadsEditController;

},{}],148:[function(require,module,exports){
var AdminSeasonNewController = function($scope, $modalInstance) {

  $scope.newSeasonData = {
    name: '',
    season_type: '',
    starts_at: moment().format(),
    ends_at: moment().format()
  };

  $scope.closeStartsAt = function() {
    $scope.startsAtDropdown = {
      isopen: false
    };
  };
  $scope.closeStartsAt();

  $scope.closeEndsAt = function() {
    $scope.endsAtDropdown = {
      isopen: false
    };
  };
  $scope.closeEndsAt();

  $scope.createSeason = function(season) {
    $modalInstance.close(season);
  };

  $scope.cancel = function () {
    $modalInstance.dismiss('cancel');
  };

  $scope.hasError = function(input) {
    return !input.$focused && input.$dirty && input.$invalid;
  };

  $scope.hasPropertyError = function(input, property) {
    return !input.$focused && input.$dirty && input.$error[property];
  };

  /**
   * Invoked on startup, like a constructor.
   */
  var init = function () {
  };
  init();
};

AdminSeasonNewController.$inject = ['$scope', '$modalInstance'];
module.exports = AdminSeasonNewController;

},{}],149:[function(require,module,exports){
var AdminSeasonEditController = function(season, $scope, $modalInstance) {

  $scope.seasonData = angular.copy(season);

  $scope.closeStartsAt = function() {
    $scope.startsAtDropdown = {
      isopen: false
    };
  };
  $scope.closeStartsAt();

  $scope.closeEndsAt = function() {
    $scope.endsAtDropdown = {
      isopen: false
    };
  };
  $scope.closeEndsAt();

  $scope.updateSeason = function(season) {
    $modalInstance.close(season);
  };

  $scope.cancel = function () {
    $modalInstance.dismiss('cancel');
  };

  $scope.hasError = function(input) {
    return !input.$focused && input.$dirty && input.$invalid;
  };

  $scope.hasPropertyError = function(input, property) {
    return !input.$focused && input.$dirty && input.$error[property];
  };

  /**
   * Invoked on startup, like a constructor.
   */
  var init = function () {
  };
  init();
};

AdminSeasonEditController.$inject = ['season', '$scope', '$modalInstance'];
module.exports = AdminSeasonEditController;

},{}]},{},[1])
//@ sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy84NTIvY29kZS9sb2doL2NsaWVudC8udG1wL2FwcC10ZW1wbGF0ZXMuanMiLCIvVXNlcnMvODUyL2NvZGUvbG9naC9jbGllbnQvYXBwL3NyYy9hcHAuanMiLCIvVXNlcnMvODUyL2NvZGUvbG9naC9jbGllbnQvYXBwL3NyYy9tb2R1bGVzL3B1YmxpYy9mYXEvZ2VuZXJhbC9pbmRleC5qcyIsIi9Vc2Vycy84NTIvY29kZS9sb2doL2NsaWVudC9hcHAvc3JjL21vZHVsZXMvcHVibGljL2ZhcS9waWNrZW0vaW5kZXguanMiLCIvVXNlcnMvODUyL2NvZGUvbG9naC9jbGllbnQvYXBwL3NyYy9tb2R1bGVzL3B1YmxpYy9mYXEvc3Vydml2b3IvaW5kZXguanMiLCIvVXNlcnMvODUyL2NvZGUvbG9naC9jbGllbnQvYXBwL3NyYy9jb21tb24vbW9kZWxzL2luZGV4LmpzIiwiL1VzZXJzLzg1Mi9jb2RlL2xvZ2gvY2xpZW50L2FwcC9zcmMvY29tbW9uL2FwaS9pbmRleC5qcyIsIi9Vc2Vycy84NTIvY29kZS9sb2doL2NsaWVudC9hcHAvc3JjL2NvbW1vbi9jb21tYW5kL2luZGV4LmpzIiwiL1VzZXJzLzg1Mi9jb2RlL2xvZ2gvY2xpZW50L2FwcC9zcmMvbW9kdWxlcy9wdWJsaWMvZmFxL2luZGV4LmpzIiwiL1VzZXJzLzg1Mi9jb2RlL2xvZ2gvY2xpZW50L2FwcC9zcmMvbW9kdWxlcy9wdWJsaWMvaG9tZS9pbmRleC5qcyIsIi9Vc2Vycy84NTIvY29kZS9sb2doL2NsaWVudC9hcHAvc3JjL2NvbW1vbi9maWx0ZXJzL2luZGV4LmpzIiwiL1VzZXJzLzg1Mi9jb2RlL2xvZ2gvY2xpZW50L2FwcC9zcmMvbW9kdWxlcy9wdWJsaWMvYWJ1c2UvaW5kZXguanMiLCIvVXNlcnMvODUyL2NvZGUvbG9naC9jbGllbnQvYXBwL3NyYy9tb2R1bGVzL3B1YmxpYy9zaWduaW4vaW5kZXguanMiLCIvVXNlcnMvODUyL2NvZGUvbG9naC9jbGllbnQvYXBwL3NyYy9tb2R1bGVzL3B1YmxpYy9yZWdpc3Rlci9pbmRleC5qcyIsIi9Vc2Vycy84NTIvY29kZS9sb2doL2NsaWVudC9hcHAvc3JjL21vZHVsZXMvcHJpdmF0ZS91c2VyL2luZGV4LmpzIiwiL1VzZXJzLzg1Mi9jb2RlL2xvZ2gvY2xpZW50L2FwcC9zcmMvbW9kdWxlcy9wcml2YXRlL2xlYWd1ZS9pbmRleC5qcyIsIi9Vc2Vycy84NTIvY29kZS9sb2doL2NsaWVudC9hcHAvc3JjL21vZHVsZXMvcHJpdmF0ZS9sZWFndWVzL2luZGV4LmpzIiwiL1VzZXJzLzg1Mi9jb2RlL2xvZ2gvY2xpZW50L2FwcC9zcmMvbW9kdWxlcy9wcml2YXRlL3RlYW0vaW5kZXguanMiLCIvVXNlcnMvODUyL2NvZGUvbG9naC9jbGllbnQvYXBwL3NyYy9tb2R1bGVzL3ByaXZhdGUvcGxheS9pbmRleC5qcyIsIi9Vc2Vycy84NTIvY29kZS9sb2doL2NsaWVudC9hcHAvc3JjL21vZHVsZXMvcHJpdmF0ZS9hZG1pbi9pbmRleC5qcyIsIi9Vc2Vycy84NTIvY29kZS9sb2doL2NsaWVudC9hcHAvc3JjL2NvbW1vbi9tb2R1bGVzL2hlYWRlci9pbmRleC5qcyIsIi9Vc2Vycy84NTIvY29kZS9sb2doL2NsaWVudC9hcHAvc3JjL2NvbW1vbi9tb2R1bGVzL21lc3NhZ2UvaW5kZXguanMiLCIvVXNlcnMvODUyL2NvZGUvbG9naC9jbGllbnQvYXBwL3NyYy9jb21tb24vbW9kdWxlcy9mb290ZXIvaW5kZXguanMiLCIvVXNlcnMvODUyL2NvZGUvbG9naC9jbGllbnQvYXBwL3NyYy9jb21tb24vbW9kdWxlcy9jb25maXJtL2luZGV4LmpzIiwiL1VzZXJzLzg1Mi9jb2RlL2xvZ2gvY2xpZW50L2FwcC9zcmMvY29tbW9uL3NlcnZpY2UvYXBwbGljYXRpb24vaW5kZXguanMiLCIvVXNlcnMvODUyL2NvZGUvbG9naC9jbGllbnQvYXBwL3NyYy9jb21tb24vc2VydmljZS91dGlscy9pbmRleC5qcyIsIi9Vc2Vycy84NTIvY29kZS9sb2doL2NsaWVudC9hcHAvc3JjL2NvbW1vbi9kaXJlY3RpdmVzL2ZvY3VzL2luZGV4LmpzIiwiL1VzZXJzLzg1Mi9jb2RlL2xvZ2gvY2xpZW50L2FwcC9zcmMvY29tbW9uL2RpcmVjdGl2ZXMvZm9ybWF0dGVkRGF0ZS9pbmRleC5qcyIsIi9Vc2Vycy84NTIvY29kZS9sb2doL2NsaWVudC9hcHAvc3JjL2NvbW1vbi9kaXJlY3RpdmVzL21hdGNoL2luZGV4LmpzIiwiL1VzZXJzLzg1Mi9jb2RlL2xvZ2gvY2xpZW50L2FwcC9zcmMvY29tbW9uL2RpcmVjdGl2ZXMvcmNTdWJtaXQvaW5kZXguanMiLCIvVXNlcnMvODUyL2NvZGUvbG9naC9jbGllbnQvYXBwL3NyYy9jb21tb24vZGlyZWN0aXZlcy9yY1ZlcmlmeVNldC9pbmRleC5qcyIsIi9Vc2Vycy84NTIvY29kZS9sb2doL2NsaWVudC9hcHAvc3JjL2NvbW1vbi9kaXJlY3RpdmVzL3JlcXVpcmVkUGF0dGVybi9pbmRleC5qcyIsIi9Vc2Vycy84NTIvY29kZS9sb2doL2NsaWVudC9hcHAvc3JjL2NvbW1vbi9kaXJlY3RpdmVzL3NlbGVjdE9uQ2xpY2svaW5kZXguanMiLCIvVXNlcnMvODUyL2NvZGUvbG9naC9jbGllbnQvYXBwL3NyYy9tb2R1bGVzL3B1YmxpYy9yZWdpc3Rlci90ZXJtcy9pbmRleC5qcyIsIi9Vc2Vycy84NTIvY29kZS9sb2doL2NsaWVudC9hcHAvc3JjL21vZHVsZXMvcHJpdmF0ZS91c2VyL3Jlc2V0L2luZGV4LmpzIiwiL1VzZXJzLzg1Mi9jb2RlL2xvZ2gvY2xpZW50L2FwcC9zcmMvbW9kdWxlcy9wcml2YXRlL2xlYWd1ZS92aWV3L2luZGV4LmpzIiwiL1VzZXJzLzg1Mi9jb2RlL2xvZ2gvY2xpZW50L2FwcC9zcmMvbW9kdWxlcy9wcml2YXRlL2xlYWd1ZS9uZXcvaW5kZXguanMiLCIvVXNlcnMvODUyL2NvZGUvbG9naC9jbGllbnQvYXBwL3NyYy9tb2R1bGVzL3ByaXZhdGUvbGVhZ3VlL2VkaXQvaW5kZXguanMiLCIvVXNlcnMvODUyL2NvZGUvbG9naC9jbGllbnQvYXBwL3NyYy9tb2R1bGVzL3ByaXZhdGUvbGVhZ3VlL2NvbnRhY3QvaW5kZXguanMiLCIvVXNlcnMvODUyL2NvZGUvbG9naC9jbGllbnQvYXBwL3NyYy9tb2R1bGVzL3ByaXZhdGUvbGVhZ3VlL21lc3NhZ2UvaW5kZXguanMiLCIvVXNlcnMvODUyL2NvZGUvbG9naC9jbGllbnQvYXBwL3NyYy9tb2R1bGVzL3ByaXZhdGUvbGVhZ3VlL2pvaW4vaW5kZXguanMiLCIvVXNlcnMvODUyL2NvZGUvbG9naC9jbGllbnQvYXBwL3NyYy9tb2R1bGVzL3ByaXZhdGUvbGVhZ3VlL2ludml0ZS9pbmRleC5qcyIsIi9Vc2Vycy84NTIvY29kZS9sb2doL2NsaWVudC9hcHAvc3JjL21vZHVsZXMvcHJpdmF0ZS9sZWFndWVzL2pvaW4vaW5kZXguanMiLCIvVXNlcnMvODUyL2NvZGUvbG9naC9jbGllbnQvYXBwL3NyYy9tb2R1bGVzL3ByaXZhdGUvbGVhZ3Vlcy9tYW5hZ2UvaW5kZXguanMiLCIvVXNlcnMvODUyL2NvZGUvbG9naC9jbGllbnQvYXBwL3NyYy9tb2R1bGVzL3ByaXZhdGUvbGVhZ3Vlcy9teS9pbmRleC5qcyIsIi9Vc2Vycy84NTIvY29kZS9sb2doL2NsaWVudC9hcHAvc3JjL21vZHVsZXMvcHJpdmF0ZS90ZWFtL3ZpZXcvaW5kZXguanMiLCIvVXNlcnMvODUyL2NvZGUvbG9naC9jbGllbnQvYXBwL3NyYy9tb2R1bGVzL3ByaXZhdGUvdGVhbS9tZXNzYWdlL2luZGV4LmpzIiwiL1VzZXJzLzg1Mi9jb2RlL2xvZ2gvY2xpZW50L2FwcC9zcmMvbW9kdWxlcy9wcml2YXRlL3RlYW0vZWRpdC9pbmRleC5qcyIsIi9Vc2Vycy84NTIvY29kZS9sb2doL2NsaWVudC9hcHAvc3JjL21vZHVsZXMvcHJpdmF0ZS90ZWFtL3BpY2svaW5kZXguanMiLCIvVXNlcnMvODUyL2NvZGUvbG9naC9jbGllbnQvYXBwL3NyYy9tb2R1bGVzL3ByaXZhdGUvcGxheS9sZWFndWVzL2luZGV4LmpzIiwiL1VzZXJzLzg1Mi9jb2RlL2xvZ2gvY2xpZW50L2FwcC9zcmMvbW9kdWxlcy9wcml2YXRlL3BsYXkvdGVhbXMvaW5kZXguanMiLCIvVXNlcnMvODUyL2NvZGUvbG9naC9jbGllbnQvYXBwL3NyYy9tb2R1bGVzL3ByaXZhdGUvYWRtaW4vc2Vhc29ucy9pbmRleC5qcyIsIi9Vc2Vycy84NTIvY29kZS9sb2doL2NsaWVudC9hcHAvc3JjL21vZHVsZXMvcHJpdmF0ZS9hZG1pbi93ZWVrL2luZGV4LmpzIiwiL1VzZXJzLzg1Mi9jb2RlL2xvZ2gvY2xpZW50L2FwcC9zcmMvbW9kdWxlcy9wcml2YXRlL2FkbWluL3NxdWFkcy9pbmRleC5qcyIsIi9Vc2Vycy84NTIvY29kZS9sb2doL2NsaWVudC9hcHAvc3JjL21vZHVsZXMvcHJpdmF0ZS9sZWFndWUvaW52aXRlL3JlcXVlc3QvaW5kZXguanMiLCIvVXNlcnMvODUyL2NvZGUvbG9naC9jbGllbnQvYXBwL3NyYy9tb2R1bGVzL3ByaXZhdGUvbGVhZ3Vlcy9qb2luL3B1YmxpYy9pbmRleC5qcyIsIi9Vc2Vycy84NTIvY29kZS9sb2doL2NsaWVudC9hcHAvc3JjL21vZHVsZXMvcHJpdmF0ZS9sZWFndWVzL2pvaW4vcHJpdmF0ZS9pbmRleC5qcyIsIi9Vc2Vycy84NTIvY29kZS9sb2doL2NsaWVudC9hcHAvc3JjL21vZHVsZXMvcHJpdmF0ZS90ZWFtL3ZpZXcvcGlja3MvaW5kZXguanMiLCIvVXNlcnMvODUyL2NvZGUvbG9naC9jbGllbnQvYXBwL3NyYy9tb2R1bGVzL3ByaXZhdGUvdGVhbS9waWNrL29uZS9pbmRleC5qcyIsIi9Vc2Vycy84NTIvY29kZS9sb2doL2NsaWVudC9hcHAvc3JjL21vZHVsZXMvcHJpdmF0ZS90ZWFtL3BpY2svbWFueS9pbmRleC5qcyIsIi9Vc2Vycy84NTIvY29kZS9sb2doL2NsaWVudC9hcHAvc3JjL21vZHVsZXMvcHJpdmF0ZS9hZG1pbi9nYW1lL2VkaXQvaW5kZXguanMiLCIvVXNlcnMvODUyL2NvZGUvbG9naC9jbGllbnQvYXBwL3NyYy9tb2R1bGVzL3ByaXZhdGUvYWRtaW4vZ2FtZS9uZXcvaW5kZXguanMiLCIvVXNlcnMvODUyL2NvZGUvbG9naC9jbGllbnQvYXBwL3NyYy9tb2R1bGVzL3ByaXZhdGUvYWRtaW4vc2Vhc29ucy9zZWFzb24vaW5kZXguanMiLCIvVXNlcnMvODUyL2NvZGUvbG9naC9jbGllbnQvYXBwL3NyYy9tb2R1bGVzL3ByaXZhdGUvYWRtaW4vd2Vlay9uZXcvaW5kZXguanMiLCIvVXNlcnMvODUyL2NvZGUvbG9naC9jbGllbnQvYXBwL3NyYy9tb2R1bGVzL3ByaXZhdGUvYWRtaW4vd2Vlay9lZGl0L2luZGV4LmpzIiwiL1VzZXJzLzg1Mi9jb2RlL2xvZ2gvY2xpZW50L2FwcC9zcmMvbW9kdWxlcy9wcml2YXRlL2FkbWluL3NxdWFkcy9uZXcvaW5kZXguanMiLCIvVXNlcnMvODUyL2NvZGUvbG9naC9jbGllbnQvYXBwL3NyYy9tb2R1bGVzL3ByaXZhdGUvYWRtaW4vc3F1YWRzL2VkaXQvaW5kZXguanMiLCIvVXNlcnMvODUyL2NvZGUvbG9naC9jbGllbnQvYXBwL3NyYy9tb2R1bGVzL3ByaXZhdGUvYWRtaW4vc2Vhc29ucy9zZWFzb24vbmV3L2luZGV4LmpzIiwiL1VzZXJzLzg1Mi9jb2RlL2xvZ2gvY2xpZW50L2FwcC9zcmMvbW9kdWxlcy9wcml2YXRlL2FkbWluL3NlYXNvbnMvc2Vhc29uL2VkaXQvaW5kZXguanMiLCIvVXNlcnMvODUyL2NvZGUvbG9naC9jbGllbnQvYXBwL3NyYy9jb21tb24vbW9kZWxzL1VzZXJNb2RlbC5qcyIsIi9Vc2Vycy84NTIvY29kZS9sb2doL2NsaWVudC9hcHAvc3JjL2NvbW1vbi9tb2RlbHMvTWVzc2FnZU1vZGVsLmpzIiwiL1VzZXJzLzg1Mi9jb2RlL2xvZ2gvY2xpZW50L2FwcC9zcmMvY29tbW9uL21vZGVscy9TZWFzb25Nb2RlbC5qcyIsIi9Vc2Vycy84NTIvY29kZS9sb2doL2NsaWVudC9hcHAvc3JjL2NvbW1vbi9hcGkvQXBpQ29uZmlnLmpzIiwiL1VzZXJzLzg1Mi9jb2RlL2xvZ2gvY2xpZW50L2FwcC9zcmMvY29tbW9uL2FwaS9HYW1lU2VydmljZS5qcyIsIi9Vc2Vycy84NTIvY29kZS9sb2doL2NsaWVudC9hcHAvc3JjL2NvbW1vbi9hcGkvTGVhZ3VlU2VydmljZS5qcyIsIi9Vc2Vycy84NTIvY29kZS9sb2doL2NsaWVudC9hcHAvc3JjL2NvbW1vbi9hcGkvUGlja1NlcnZpY2UuanMiLCIvVXNlcnMvODUyL2NvZGUvbG9naC9jbGllbnQvYXBwL3NyYy9jb21tb24vYXBpL1NlYXNvblNlcnZpY2UuanMiLCIvVXNlcnMvODUyL2NvZGUvbG9naC9jbGllbnQvYXBwL3NyYy9jb21tb24vYXBpL1NxdWFkU2VydmljZS5qcyIsIi9Vc2Vycy84NTIvY29kZS9sb2doL2NsaWVudC9hcHAvc3JjL2NvbW1vbi9hcGkvU3RhdHNTZXJ2aWNlLmpzIiwiL1VzZXJzLzg1Mi9jb2RlL2xvZ2gvY2xpZW50L2FwcC9zcmMvY29tbW9uL2FwaS9UZWFtU2VydmljZS5qcyIsIi9Vc2Vycy84NTIvY29kZS9sb2doL2NsaWVudC9hcHAvc3JjL2NvbW1vbi9hcGkvVXNlclNlcnZpY2UuanMiLCIvVXNlcnMvODUyL2NvZGUvbG9naC9jbGllbnQvYXBwL3NyYy9jb21tb24vYXBpL1dlZWtTZXJ2aWNlLmpzIiwiL1VzZXJzLzg1Mi9jb2RlL2xvZ2gvY2xpZW50L2FwcC9zcmMvY29tbW9uL2NvbW1hbmQvc2Vzc2lvbi9TaWduaW5Db21tYW5kLmpzIiwiL1VzZXJzLzg1Mi9jb2RlL2xvZ2gvY2xpZW50L2FwcC9zcmMvY29tbW9uL2NvbW1hbmQvc2Vzc2lvbi9TaWdub3V0Q29tbWFuZC5qcyIsIi9Vc2Vycy84NTIvY29kZS9sb2doL2NsaWVudC9hcHAvc3JjL2NvbW1vbi9jb21tYW5kL3VzZXIvR2V0Q3VycmVudFVzZXJDb21tYW5kLmpzIiwiL1VzZXJzLzg1Mi9jb2RlL2xvZ2gvY2xpZW50L2FwcC9zcmMvbW9kdWxlcy9wdWJsaWMvZmFxL0ZhcUNvbnRyb2xsZXIuanMiLCIvVXNlcnMvODUyL2NvZGUvbG9naC9jbGllbnQvYXBwL3NyYy9tb2R1bGVzL3B1YmxpYy9ob21lL0hvbWVDb250cm9sbGVyLmpzIiwiL1VzZXJzLzg1Mi9jb2RlL2xvZ2gvY2xpZW50L2FwcC9zcmMvY29tbW9uL2ZpbHRlcnMvT2Zmc2V0RmlsdGVyLmpzIiwiL1VzZXJzLzg1Mi9jb2RlL2xvZ2gvY2xpZW50L2FwcC9zcmMvY29tbW9uL2ZpbHRlcnMvQWN0aXZlVGVhbUZpbHRlci5qcyIsIi9Vc2Vycy84NTIvY29kZS9sb2doL2NsaWVudC9hcHAvc3JjL2NvbW1vbi9maWx0ZXJzL01hbmFnZWRMZWFndWVGaWx0ZXIuanMiLCIvVXNlcnMvODUyL2NvZGUvbG9naC9jbGllbnQvYXBwL3NyYy9jb21tb24vZmlsdGVycy9UaW1lRmlsdGVyLmpzIiwiL1VzZXJzLzg1Mi9jb2RlL2xvZ2gvY2xpZW50L2FwcC9zcmMvY29tbW9uL2ZpbHRlcnMvV2Vla1BpY2tzRmlsdGVyLmpzIiwiL1VzZXJzLzg1Mi9jb2RlL2xvZ2gvY2xpZW50L2FwcC9zcmMvbW9kdWxlcy9wdWJsaWMvYWJ1c2UvQWJ1c2VDb250cm9sbGVyLmpzIiwiL1VzZXJzLzg1Mi9jb2RlL2xvZ2gvY2xpZW50L2FwcC9zcmMvbW9kdWxlcy9wdWJsaWMvc2lnbmluL1NpZ25pbkNvbnRyb2xsZXIuanMiLCIvVXNlcnMvODUyL2NvZGUvbG9naC9jbGllbnQvYXBwL3NyYy9tb2R1bGVzL3B1YmxpYy9yZWdpc3Rlci9SZWdpc3RlckNvbnRyb2xsZXIuanMiLCIvVXNlcnMvODUyL2NvZGUvbG9naC9jbGllbnQvYXBwL3NyYy9tb2R1bGVzL3ByaXZhdGUvdXNlci9Vc2VyQ29udHJvbGxlci5qcyIsIi9Vc2Vycy84NTIvY29kZS9sb2doL2NsaWVudC9hcHAvc3JjL21vZHVsZXMvcHJpdmF0ZS9sZWFndWUvTGVhZ3VlQ29udHJvbGxlci5qcyIsIi9Vc2Vycy84NTIvY29kZS9sb2doL2NsaWVudC9hcHAvc3JjL21vZHVsZXMvcHJpdmF0ZS9sZWFndWVzL0xlYWd1ZXNDb250cm9sbGVyLmpzIiwiL1VzZXJzLzg1Mi9jb2RlL2xvZ2gvY2xpZW50L2FwcC9zcmMvbW9kdWxlcy9wcml2YXRlL3RlYW0vVGVhbUNvbnRyb2xsZXIuanMiLCIvVXNlcnMvODUyL2NvZGUvbG9naC9jbGllbnQvYXBwL3NyYy9tb2R1bGVzL3ByaXZhdGUvcGxheS9QbGF5Q29udHJvbGxlci5qcyIsIi9Vc2Vycy84NTIvY29kZS9sb2doL2NsaWVudC9hcHAvc3JjL21vZHVsZXMvcHJpdmF0ZS9hZG1pbi9BZG1pbkNvbnRyb2xsZXIuanMiLCIvVXNlcnMvODUyL2NvZGUvbG9naC9jbGllbnQvYXBwL3NyYy9jb21tb24vbW9kdWxlcy9oZWFkZXIvSGVhZGVyQ29udHJvbGxlci5qcyIsIi9Vc2Vycy84NTIvY29kZS9sb2doL2NsaWVudC9hcHAvc3JjL2NvbW1vbi9tb2R1bGVzL21lc3NhZ2UvTWVzc2FnZUNvbnRyb2xsZXIuanMiLCIvVXNlcnMvODUyL2NvZGUvbG9naC9jbGllbnQvYXBwL3NyYy9jb21tb24vbW9kdWxlcy9mb290ZXIvRm9vdGVyQ29udHJvbGxlci5qcyIsIi9Vc2Vycy84NTIvY29kZS9sb2doL2NsaWVudC9hcHAvc3JjL2NvbW1vbi9tb2R1bGVzL2NvbmZpcm0vQ29uZmlybUNvbnRyb2xsZXIuanMiLCIvVXNlcnMvODUyL2NvZGUvbG9naC9jbGllbnQvYXBwL3NyYy9jb21tb24vc2VydmljZS9hcHBsaWNhdGlvbi9BcHBsaWNhdGlvblNlcnZpY2UuanMiLCIvVXNlcnMvODUyL2NvZGUvbG9naC9jbGllbnQvYXBwL3NyYy9jb21tb24vc2VydmljZS91dGlscy9EYXRlVXRpbHMuanMiLCIvVXNlcnMvODUyL2NvZGUvbG9naC9jbGllbnQvYXBwL3NyYy9jb21tb24vZGlyZWN0aXZlcy9mb2N1cy9Gb2N1c0RpcmVjdGl2ZS5qcyIsIi9Vc2Vycy84NTIvY29kZS9sb2doL2NsaWVudC9hcHAvc3JjL2NvbW1vbi9kaXJlY3RpdmVzL2Zvcm1hdHRlZERhdGUvRm9ybWF0dGVkRGF0ZURpcmVjdGl2ZS5qcyIsIi9Vc2Vycy84NTIvY29kZS9sb2doL2NsaWVudC9hcHAvc3JjL2NvbW1vbi9kaXJlY3RpdmVzL3JjU3VibWl0L1JDU3VibWl0RGlyZWN0aXZlLmpzIiwiL1VzZXJzLzg1Mi9jb2RlL2xvZ2gvY2xpZW50L2FwcC9zcmMvY29tbW9uL2RpcmVjdGl2ZXMvcmNWZXJpZnlTZXQvUkNWZXJpZnlTZXREaXJlY3RpdmUuanMiLCIvVXNlcnMvODUyL2NvZGUvbG9naC9jbGllbnQvYXBwL3NyYy9jb21tb24vZGlyZWN0aXZlcy9yZXF1aXJlZFBhdHRlcm4vUmVxdWlyZWRQYXR0ZXJuRGlyZWN0aXZlLmpzIiwiL1VzZXJzLzg1Mi9jb2RlL2xvZ2gvY2xpZW50L2FwcC9zcmMvY29tbW9uL2RpcmVjdGl2ZXMvbWF0Y2gvTWF0Y2hEaXJlY3RpdmUuanMiLCIvVXNlcnMvODUyL2NvZGUvbG9naC9jbGllbnQvYXBwL3NyYy9jb21tb24vZGlyZWN0aXZlcy9zZWxlY3RPbkNsaWNrL1NlbGVjdE9uQ2xpY2tEaXJlY3RpdmUuanMiLCIvVXNlcnMvODUyL2NvZGUvbG9naC9jbGllbnQvYXBwL3NyYy9tb2R1bGVzL3B1YmxpYy9yZWdpc3Rlci90ZXJtcy9SZWdpc3RlclRlcm1zQ29udHJvbGxlci5qcyIsIi9Vc2Vycy84NTIvY29kZS9sb2doL2NsaWVudC9hcHAvc3JjL21vZHVsZXMvcHJpdmF0ZS91c2VyL3Jlc2V0L1VzZXJSZXNldENvbnRyb2xsZXIuanMiLCIvVXNlcnMvODUyL2NvZGUvbG9naC9jbGllbnQvYXBwL3NyYy9tb2R1bGVzL3ByaXZhdGUvbGVhZ3VlL25ldy9OZXdMZWFndWVDb250cm9sbGVyLmpzIiwiL1VzZXJzLzg1Mi9jb2RlL2xvZ2gvY2xpZW50L2FwcC9zcmMvbW9kdWxlcy9wcml2YXRlL2xlYWd1ZS9lZGl0L0VkaXRMZWFndWVDb250cm9sbGVyLmpzIiwiL1VzZXJzLzg1Mi9jb2RlL2xvZ2gvY2xpZW50L2FwcC9zcmMvbW9kdWxlcy9wcml2YXRlL2xlYWd1ZS9jb250YWN0L0xlYWd1ZUNvbnRhY3RDb250cm9sbGVyLmpzIiwiL1VzZXJzLzg1Mi9jb2RlL2xvZ2gvY2xpZW50L2FwcC9zcmMvbW9kdWxlcy9wcml2YXRlL2xlYWd1ZS9tZXNzYWdlL0xlYWd1ZU1lc3NhZ2VDb250cm9sbGVyLmpzIiwiL1VzZXJzLzg1Mi9jb2RlL2xvZ2gvY2xpZW50L2FwcC9zcmMvbW9kdWxlcy9wcml2YXRlL2xlYWd1ZS9qb2luL0xlYWd1ZUpvaW5Db250cm9sbGVyLmpzIiwiL1VzZXJzLzg1Mi9jb2RlL2xvZ2gvY2xpZW50L2FwcC9zcmMvbW9kdWxlcy9wcml2YXRlL2xlYWd1ZS9pbnZpdGUvTGVhZ3VlSW52aXRlQ29udHJvbGxlci5qcyIsIi9Vc2Vycy84NTIvY29kZS9sb2doL2NsaWVudC9hcHAvc3JjL21vZHVsZXMvcHJpdmF0ZS9sZWFndWUvdmlldy9WaWV3TGVhZ3VlQ29udHJvbGxlci5qcyIsIi9Vc2Vycy84NTIvY29kZS9sb2doL2NsaWVudC9hcHAvc3JjL21vZHVsZXMvcHJpdmF0ZS9sZWFndWVzL2pvaW4vSm9pbkxlYWd1ZXNDb250cm9sbGVyLmpzIiwiL1VzZXJzLzg1Mi9jb2RlL2xvZ2gvY2xpZW50L2FwcC9zcmMvbW9kdWxlcy9wcml2YXRlL2xlYWd1ZXMvbWFuYWdlL01hbmFnZUxlYWd1ZXNDb250cm9sbGVyLmpzIiwiL1VzZXJzLzg1Mi9jb2RlL2xvZ2gvY2xpZW50L2FwcC9zcmMvbW9kdWxlcy9wcml2YXRlL2xlYWd1ZXMvbXkvTXlMZWFndWVzQ29udHJvbGxlci5qcyIsIi9Vc2Vycy84NTIvY29kZS9sb2doL2NsaWVudC9hcHAvc3JjL21vZHVsZXMvcHJpdmF0ZS90ZWFtL3ZpZXcvVmlld1RlYW1Db250cm9sbGVyLmpzIiwiL1VzZXJzLzg1Mi9jb2RlL2xvZ2gvY2xpZW50L2FwcC9zcmMvbW9kdWxlcy9wcml2YXRlL3RlYW0vbWVzc2FnZS9UZWFtTWVzc2FnZUNvbnRyb2xsZXIuanMiLCIvVXNlcnMvODUyL2NvZGUvbG9naC9jbGllbnQvYXBwL3NyYy9tb2R1bGVzL3ByaXZhdGUvdGVhbS9lZGl0L0VkaXRUZWFtQ29udHJvbGxlci5qcyIsIi9Vc2Vycy84NTIvY29kZS9sb2doL2NsaWVudC9hcHAvc3JjL21vZHVsZXMvcHJpdmF0ZS90ZWFtL3BpY2svVGVhbVBpY2tDb250cm9sbGVyLmpzIiwiL1VzZXJzLzg1Mi9jb2RlL2xvZ2gvY2xpZW50L2FwcC9zcmMvbW9kdWxlcy9wcml2YXRlL3BsYXkvbGVhZ3Vlcy9QbGF5TGVhZ3Vlc0NvbnRyb2xsZXIuanMiLCIvVXNlcnMvODUyL2NvZGUvbG9naC9jbGllbnQvYXBwL3NyYy9tb2R1bGVzL3ByaXZhdGUvcGxheS90ZWFtcy9QbGF5VGVhbXNDb250cm9sbGVyLmpzIiwiL1VzZXJzLzg1Mi9jb2RlL2xvZ2gvY2xpZW50L2FwcC9zcmMvbW9kdWxlcy9wcml2YXRlL2FkbWluL3NlYXNvbnMvQWRtaW5TZWFzb25zQ29udHJvbGxlci5qcyIsIi9Vc2Vycy84NTIvY29kZS9sb2doL2NsaWVudC9hcHAvc3JjL21vZHVsZXMvcHJpdmF0ZS9hZG1pbi93ZWVrL0FkbWluV2Vla0NvbnRyb2xsZXIuanMiLCIvVXNlcnMvODUyL2NvZGUvbG9naC9jbGllbnQvYXBwL3NyYy9tb2R1bGVzL3ByaXZhdGUvYWRtaW4vc3F1YWRzL0FkbWluU3F1YWRzQ29udHJvbGxlci5qcyIsIi9Vc2Vycy84NTIvY29kZS9sb2doL2NsaWVudC9hcHAvc3JjL21vZHVsZXMvcHJpdmF0ZS9sZWFndWUvaW52aXRlL3JlcXVlc3QvTGVhZ3VlSW52aXRlUmVxdWVzdENvbnRyb2xsZXIuanMiLCIvVXNlcnMvODUyL2NvZGUvbG9naC9jbGllbnQvYXBwL3NyYy9tb2R1bGVzL3ByaXZhdGUvbGVhZ3Vlcy9qb2luL3B1YmxpYy9QdWJsaWNMZWFndWVzQ29udHJvbGxlci5qcyIsIi9Vc2Vycy84NTIvY29kZS9sb2doL2NsaWVudC9hcHAvc3JjL21vZHVsZXMvcHJpdmF0ZS9sZWFndWVzL2pvaW4vcHJpdmF0ZS9Qcml2YXRlTGVhZ3Vlc0NvbnRyb2xsZXIuanMiLCIvVXNlcnMvODUyL2NvZGUvbG9naC9jbGllbnQvYXBwL3NyYy9tb2R1bGVzL3ByaXZhdGUvdGVhbS92aWV3L3BpY2tzL1ZpZXdUZWFtUGlja3NDb250cm9sbGVyLmpzIiwiL1VzZXJzLzg1Mi9jb2RlL2xvZ2gvY2xpZW50L2FwcC9zcmMvbW9kdWxlcy9wcml2YXRlL3RlYW0vcGljay9vbmUvVGVhbVBpY2tPbmVDb250cm9sbGVyLmpzIiwiL1VzZXJzLzg1Mi9jb2RlL2xvZ2gvY2xpZW50L2FwcC9zcmMvbW9kdWxlcy9wcml2YXRlL3RlYW0vcGljay9tYW55L1RlYW1QaWNrTWFueUNvbnRyb2xsZXIuanMiLCIvVXNlcnMvODUyL2NvZGUvbG9naC9jbGllbnQvYXBwL3NyYy9tb2R1bGVzL3ByaXZhdGUvYWRtaW4vZ2FtZS9lZGl0L0FkbWluR2FtZUVkaXRDb250cm9sbGVyLmpzIiwiL1VzZXJzLzg1Mi9jb2RlL2xvZ2gvY2xpZW50L2FwcC9zcmMvbW9kdWxlcy9wcml2YXRlL2FkbWluL2dhbWUvbmV3L0FkbWluR2FtZU5ld0NvbnRyb2xsZXIuanMiLCIvVXNlcnMvODUyL2NvZGUvbG9naC9jbGllbnQvYXBwL3NyYy9tb2R1bGVzL3ByaXZhdGUvYWRtaW4vc2Vhc29ucy9zZWFzb24vQWRtaW5TZWFzb25Db250cm9sbGVyLmpzIiwiL1VzZXJzLzg1Mi9jb2RlL2xvZ2gvY2xpZW50L2FwcC9zcmMvbW9kdWxlcy9wcml2YXRlL2FkbWluL3dlZWsvbmV3L0FkbWluV2Vla05ld0NvbnRyb2xsZXIuanMiLCIvVXNlcnMvODUyL2NvZGUvbG9naC9jbGllbnQvYXBwL3NyYy9tb2R1bGVzL3ByaXZhdGUvYWRtaW4vd2Vlay9lZGl0L0FkbWluV2Vla0VkaXRDb250cm9sbGVyLmpzIiwiL1VzZXJzLzg1Mi9jb2RlL2xvZ2gvY2xpZW50L2FwcC9zcmMvbW9kdWxlcy9wcml2YXRlL2FkbWluL3NxdWFkcy9uZXcvQWRtaW5TcXVhZHNOZXdDb250cm9sbGVyLmpzIiwiL1VzZXJzLzg1Mi9jb2RlL2xvZ2gvY2xpZW50L2FwcC9zcmMvbW9kdWxlcy9wcml2YXRlL2FkbWluL3NxdWFkcy9lZGl0L0FkbWluU3F1YWRzRWRpdENvbnRyb2xsZXIuanMiLCIvVXNlcnMvODUyL2NvZGUvbG9naC9jbGllbnQvYXBwL3NyYy9tb2R1bGVzL3ByaXZhdGUvYWRtaW4vc2Vhc29ucy9zZWFzb24vbmV3L0FkbWluU2Vhc29uTmV3Q29udHJvbGxlci5qcyIsIi9Vc2Vycy84NTIvY29kZS9sb2doL2NsaWVudC9hcHAvc3JjL21vZHVsZXMvcHJpdmF0ZS9hZG1pbi9zZWFzb25zL3NlYXNvbi9lZGl0L0FkbWluU2Vhc29uRWRpdENvbnRyb2xsZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbDlFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbk9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDYkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNiQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNSQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNmQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDNUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN2QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1hBO0FBQ0E7QUFDQTs7QUNGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMzQkE7QUFDQTtBQUNBOztBQ0ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzNCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzVCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDN0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDNUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM3QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM1QkE7QUFDQTs7QUNEQTtBQUNBOztBQ0RBO0FBQ0E7O0FDREE7QUFDQTtBQUNBOztBQ0ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDSkE7QUFDQTs7QUNEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ0pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNKQTtBQUNBO0FBQ0E7QUFDQTs7QUNIQTtBQUNBO0FBQ0E7QUFDQTs7QUNIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ0pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDSkE7QUFDQTtBQUNBOztBQ0ZBO0FBQ0E7QUFDQTs7QUNGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDMUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3JCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDcEJBO0FBQ0E7QUFDQTs7QUNGQTtBQUNBO0FBQ0E7O0FDRkE7QUFDQTtBQUNBOztBQ0ZBO0FBQ0E7QUFDQTs7QUNGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNsQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN0QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN0QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM1QkE7QUFDQTtBQUNBOztBQ0ZBO0FBQ0E7QUFDQTs7QUNGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM5QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN0QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3ZCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNmQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNwQkE7QUFDQTtBQUNBOztBQ0ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDL0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2ZBO0FBQ0E7QUFDQTs7QUNGQTtBQUNBO0FBQ0E7O0FDRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzFCQTtBQUNBO0FBQ0E7O0FDRkE7QUFDQTtBQUNBOztBQ0ZBO0FBQ0E7QUFDQTs7QUNGQTtBQUNBO0FBQ0E7O0FDRkE7QUFDQTtBQUNBOztBQ0ZBO0FBQ0E7QUFDQTs7QUNGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNuREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM3REE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDN0NBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM3RUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNyT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDM0VBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbEZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM3RUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNuQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzdLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbkxBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdEtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2xCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNsQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNuQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN0QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNoRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNWQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDZEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN2QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMvQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdERBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2hEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNqQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3ZCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN2RUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDWkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNsSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3RDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDakJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3hCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN4QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNoSEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3ZCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDakJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDekVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNsREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNqQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDakNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNqRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN2REE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDakNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3BDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3JDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3BEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3ZWQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDM0RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDL0NBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMxTkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDakNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2pDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzlGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDOURBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdkRBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzVKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ25FQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbkNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3JCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN6R0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ25GQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzdHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNwQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDMUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2pGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3BEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzlDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbkNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzlCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2pEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbImFuZ3VsYXIubW9kdWxlKCdhcHAudGVtcGxhdGVzJywgWydjb21tb24vbW9kdWxlcy9jb25maXJtL2NvbmZpcm0udHBsLmh0bWwnLCAnY29tbW9uL21vZHVsZXMvZm9vdGVyL2Zvb3Rlci50cGwuaHRtbCcsICdjb21tb24vbW9kdWxlcy9oZWFkZXIvaGVhZGVyLnRwbC5odG1sJywgJ2NvbW1vbi9tb2R1bGVzL21lc3NhZ2UvbWVzc2FnZS50cGwuaHRtbCcsICdjb21tb24vdGVtcGxhdGVzL21hc3Rlci50cGwuaHRtbCcsICdtb2R1bGVzL3ByaXZhdGUvYWRtaW4vYWRtaW4udHBsLmh0bWwnLCAnbW9kdWxlcy9wcml2YXRlL2FkbWluL2dhbWUvZWRpdC9hZG1pbi5nYW1lLmVkaXQudHBsLmh0bWwnLCAnbW9kdWxlcy9wcml2YXRlL2FkbWluL2dhbWUvbmV3L2FkbWluLmdhbWUubmV3LnRwbC5odG1sJywgJ21vZHVsZXMvcHJpdmF0ZS9hZG1pbi9zZWFzb25zL2FkbWluLnNlYXNvbnMudHBsLmh0bWwnLCAnbW9kdWxlcy9wcml2YXRlL2FkbWluL3NlYXNvbnMvc2Vhc29uL2FkbWluLnNlYXNvbi50cGwuaHRtbCcsICdtb2R1bGVzL3ByaXZhdGUvYWRtaW4vc2Vhc29ucy9zZWFzb24vZWRpdC9hZG1pbi5zZWFzb24uZWRpdC50cGwuaHRtbCcsICdtb2R1bGVzL3ByaXZhdGUvYWRtaW4vc2Vhc29ucy9zZWFzb24vbmV3L2FkbWluLnNlYXNvbi5uZXcudHBsLmh0bWwnLCAnbW9kdWxlcy9wcml2YXRlL2FkbWluL3NxdWFkcy9hZG1pbi5zcXVhZHMudHBsLmh0bWwnLCAnbW9kdWxlcy9wcml2YXRlL2FkbWluL3NxdWFkcy9lZGl0L2FkbWluLnNxdWFkcy5lZGl0LnRwbC5odG1sJywgJ21vZHVsZXMvcHJpdmF0ZS9hZG1pbi9zcXVhZHMvbmV3L2FkbWluLnNxdWFkcy5uZXcudHBsLmh0bWwnLCAnbW9kdWxlcy9wcml2YXRlL2FkbWluL3dlZWsvYWRtaW4ud2Vlay50cGwuaHRtbCcsICdtb2R1bGVzL3ByaXZhdGUvYWRtaW4vd2Vlay9lZGl0L2FkbWluLndlZWsuZWRpdC50cGwuaHRtbCcsICdtb2R1bGVzL3ByaXZhdGUvYWRtaW4vd2Vlay9uZXcvYWRtaW4ud2Vlay5uZXcudHBsLmh0bWwnLCAnbW9kdWxlcy9wcml2YXRlL2xlYWd1ZS9jb250YWN0L2xlYWd1ZS5jb250YWN0LnRwbC5odG1sJywgJ21vZHVsZXMvcHJpdmF0ZS9sZWFndWUvZWRpdC9sZWFndWUuZWRpdC50cGwuaHRtbCcsICdtb2R1bGVzL3ByaXZhdGUvbGVhZ3VlL2ludml0ZS9sZWFndWUuaW52aXRlLnRwbC5odG1sJywgJ21vZHVsZXMvcHJpdmF0ZS9sZWFndWUvaW52aXRlL3JlcXVlc3QvbGVhZ3VlLmludml0ZS5yZXF1ZXN0LnRwbC5odG1sJywgJ21vZHVsZXMvcHJpdmF0ZS9sZWFndWUvam9pbi9sZWFndWUuam9pbi50cGwuaHRtbCcsICdtb2R1bGVzL3ByaXZhdGUvbGVhZ3VlL2xlYWd1ZS50cGwuaHRtbCcsICdtb2R1bGVzL3ByaXZhdGUvbGVhZ3VlL21lc3NhZ2UvbGVhZ3VlLm1lc3NhZ2UudHBsLmh0bWwnLCAnbW9kdWxlcy9wcml2YXRlL2xlYWd1ZS9uZXcvbGVhZ3VlLm5ldy50cGwuaHRtbCcsICdtb2R1bGVzL3ByaXZhdGUvbGVhZ3VlL3ZpZXcvbGVhZ3VlLnZpZXcudHBsLmh0bWwnLCAnbW9kdWxlcy9wcml2YXRlL2xlYWd1ZXMvam9pbi9sZWFndWVzLmpvaW4udHBsLmh0bWwnLCAnbW9kdWxlcy9wcml2YXRlL2xlYWd1ZXMvam9pbi9wcml2YXRlL2xlYWd1ZXMuam9pbi5wcml2YXRlLnRwbC5odG1sJywgJ21vZHVsZXMvcHJpdmF0ZS9sZWFndWVzL2pvaW4vcHVibGljL2xlYWd1ZXMuam9pbi5wdWJsaWMudHBsLmh0bWwnLCAnbW9kdWxlcy9wcml2YXRlL2xlYWd1ZXMvbGVhZ3Vlcy50cGwuaHRtbCcsICdtb2R1bGVzL3ByaXZhdGUvbGVhZ3Vlcy9tYW5hZ2UvbGVhZ3Vlcy5tYW5hZ2UudHBsLmh0bWwnLCAnbW9kdWxlcy9wcml2YXRlL2xlYWd1ZXMvbXkvbGVhZ3Vlcy5teS50cGwuaHRtbCcsICdtb2R1bGVzL3ByaXZhdGUvcGxheS9sZWFndWVzL3BsYXkubGVhZ3Vlcy50cGwuaHRtbCcsICdtb2R1bGVzL3ByaXZhdGUvcGxheS9wbGF5LnRwbC5odG1sJywgJ21vZHVsZXMvcHJpdmF0ZS9wbGF5L3RlYW1zL3BsYXkudGVhbXMudHBsLmh0bWwnLCAnbW9kdWxlcy9wcml2YXRlL3RlYW0vZWRpdC90ZWFtLmVkaXQudHBsLmh0bWwnLCAnbW9kdWxlcy9wcml2YXRlL3RlYW0vbWVzc2FnZS90ZWFtLm1lc3NhZ2UudHBsLmh0bWwnLCAnbW9kdWxlcy9wcml2YXRlL3RlYW0vcGljay9tYW55L3RlYW0ucGljay5tYW55LnRwbC5odG1sJywgJ21vZHVsZXMvcHJpdmF0ZS90ZWFtL3BpY2svb25lL3RlYW0ucGljay5vbmUudHBsLmh0bWwnLCAnbW9kdWxlcy9wcml2YXRlL3RlYW0vcGljay90ZWFtLnBpY2sudHBsLmh0bWwnLCAnbW9kdWxlcy9wcml2YXRlL3RlYW0vdGVhbS50cGwuaHRtbCcsICdtb2R1bGVzL3ByaXZhdGUvdGVhbS92aWV3L3BpY2tzL3RlYW0udmlldy5waWNrcy50cGwuaHRtbCcsICdtb2R1bGVzL3ByaXZhdGUvdGVhbS92aWV3L3RlYW0udmlldy50cGwuaHRtbCcsICdtb2R1bGVzL3ByaXZhdGUvdXNlci9yZXNldC91c2VyLnJlc2V0LnRwbC5odG1sJywgJ21vZHVsZXMvcHJpdmF0ZS91c2VyL3VzZXIudHBsLmh0bWwnLCAnbW9kdWxlcy9wdWJsaWMvYWJ1c2UvYWJ1c2UudHBsLmh0bWwnLCAnbW9kdWxlcy9wdWJsaWMvZmFxL2ZhcS50cGwuaHRtbCcsICdtb2R1bGVzL3B1YmxpYy9mYXEvZ2VuZXJhbC9mYXEuZ2VuZXJhbC50cGwuaHRtbCcsICdtb2R1bGVzL3B1YmxpYy9mYXEvcGlja2VtL2ZhcS5waWNrZW0udHBsLmh0bWwnLCAnbW9kdWxlcy9wdWJsaWMvZmFxL3N1cnZpdm9yL2ZhcS5zdXJ2aXZvci50cGwuaHRtbCcsICdtb2R1bGVzL3B1YmxpYy9ob21lL2hvbWUudHBsLmh0bWwnLCAnbW9kdWxlcy9wdWJsaWMvcmVnaXN0ZXIvcmVnaXN0ZXIudHBsLmh0bWwnLCAnbW9kdWxlcy9wdWJsaWMvcmVnaXN0ZXIvdGVybXMvcmVnaXN0ZXIudGVybXMudHBsLmh0bWwnLCAnbW9kdWxlcy9wdWJsaWMvc2lnbmluL3NpZ25pbi50cGwuaHRtbCddKTtcblxuYW5ndWxhci5tb2R1bGUoXCJjb21tb24vbW9kdWxlcy9jb25maXJtL2NvbmZpcm0udHBsLmh0bWxcIiwgW10pLnJ1bihbXCIkdGVtcGxhdGVDYWNoZVwiLCBmdW5jdGlvbigkdGVtcGxhdGVDYWNoZSkge1xuICAkdGVtcGxhdGVDYWNoZS5wdXQoXCJjb21tb24vbW9kdWxlcy9jb25maXJtL2NvbmZpcm0udHBsLmh0bWxcIixcbiAgICBcIjxkaXYgY2xhc3M9XFxcIm1vZGFsLWhlYWRlclxcXCI+XFxuXCIgK1xuICAgIFwiICA8YnV0dG9uIHR5cGU9XFxcImJ1dHRvblxcXCIgY2xhc3M9XFxcImNsb3NlXFxcIiBuZy1jbGljaz1cXFwiY2FuY2VsKClcXFwiPjxzcGFuIGFyaWEtaGlkZGVuPVxcXCJ0cnVlXFxcIj4mdGltZXM7PC9zcGFuPjxzcGFuIGNsYXNzPVxcXCJzci1vbmx5XFxcIj5DbG9zZTwvc3Bhbj48L2J1dHRvbj5cXG5cIiArXG4gICAgXCIgIDxoNCBjbGFzcz1cXFwibW9kYWwtdGl0bGVcXFwiPkNvbmZpcm0gQWN0aW9uPC9oND5cXG5cIiArXG4gICAgXCI8L2Rpdj5cXG5cIiArXG4gICAgXCI8ZGl2IGNsYXNzPVxcXCJtb2RhbC1ib2R5XFxcIj5cXG5cIiArXG4gICAgXCIgIDxwPnt7bWVzc2FnZX19PC9wPlxcblwiICtcbiAgICBcIjwvZGl2PlxcblwiICtcbiAgICBcIjxkaXYgY2xhc3M9XFxcIm1vZGFsLWZvb3RlclxcXCI+XFxuXCIgK1xuICAgIFwiICA8YnV0dG9uIGNsYXNzPVxcXCJidG4gYnRuLXByaW1hcnlcXFwiIG5nLWNsaWNrPVxcXCJjYW5jZWwoKVxcXCI+Tm88L2J1dHRvbj5cXG5cIiArXG4gICAgXCIgIDxidXR0b24gY2xhc3M9XFxcImJ0biBidG4tZGVmYXVsdFxcXCIgbmctY2xpY2s9XFxcImNvbmZpcm0oKVxcXCI+WWVzPC9idXR0b24+XFxuXCIgK1xuICAgIFwiPC9kaXY+XCIpO1xufV0pO1xuXG5hbmd1bGFyLm1vZHVsZShcImNvbW1vbi9tb2R1bGVzL2Zvb3Rlci9mb290ZXIudHBsLmh0bWxcIiwgW10pLnJ1bihbXCIkdGVtcGxhdGVDYWNoZVwiLCBmdW5jdGlvbigkdGVtcGxhdGVDYWNoZSkge1xuICAkdGVtcGxhdGVDYWNoZS5wdXQoXCJjb21tb24vbW9kdWxlcy9mb290ZXIvZm9vdGVyLnRwbC5odG1sXCIsXG4gICAgXCI8ZGl2IGlkPVxcXCJtZW51XFxcIj5cXG5cIiArXG4gICAgXCIgIDxoMT48YSBuZy1jbGljaz1cXFwiaG9tZSgpXFxcIj5MT0dIPC9hPjwvaDE+XFxuXCIgK1xuICAgIFwiICA8ZGl2IGNsYXNzPVxcXCJsaW5rc1xcXCI+XFxuXCIgK1xuICAgIFwiICAgIDxzcGFuIHN0eWxlPVxcXCJ0ZXh0LXRyYW5zZm9ybTogbm9uZTtcXFwiPsKpIDIwMTUgRmxleGRldmVsb3BlcnMuY29tIExMQzwvc3Bhbj5cXG5cIiArXG4gICAgXCIgIDwvZGl2PlxcblwiICtcbiAgICBcIjwvZGl2PlwiKTtcbn1dKTtcblxuYW5ndWxhci5tb2R1bGUoXCJjb21tb24vbW9kdWxlcy9oZWFkZXIvaGVhZGVyLnRwbC5odG1sXCIsIFtdKS5ydW4oW1wiJHRlbXBsYXRlQ2FjaGVcIiwgZnVuY3Rpb24oJHRlbXBsYXRlQ2FjaGUpIHtcbiAgJHRlbXBsYXRlQ2FjaGUucHV0KFwiY29tbW9uL21vZHVsZXMvaGVhZGVyL2hlYWRlci50cGwuaHRtbFwiLFxuICAgIFwiPGRpdiBjbGFzcz1cXFwiY29udGFpbmVyXFxcIj5cXG5cIiArXG4gICAgXCIgIDxkaXYgY2xhc3M9XFxcIm5hdmJhci1oZWFkZXJcXFwiPlxcblwiICtcbiAgICBcIiAgICA8YnV0dG9uIGNsYXNzPVxcXCJuYXZiYXItdG9nZ2xlXFxcIiB0eXBlPVxcXCJidXR0b25cXFwiIG5nLWNsaWNrPVxcXCJpc0NvbGxhcHNlZCA9ICFpc0NvbGxhcHNlZFxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgPHNwYW4gY2xhc3M9XFxcInNyLW9ubHlcXFwiPlRvZ2dsZSBuYXZpZ2F0aW9uPC9zcGFuPlxcblwiICtcbiAgICBcIiAgICAgIDxzcGFuIGNsYXNzPVxcXCJpY29uLWJhclxcXCI+PC9zcGFuPlxcblwiICtcbiAgICBcIiAgICAgIDxzcGFuIGNsYXNzPVxcXCJpY29uLWJhclxcXCI+PC9zcGFuPlxcblwiICtcbiAgICBcIiAgICAgIDxzcGFuIGNsYXNzPVxcXCJpY29uLWJhclxcXCI+PC9zcGFuPlxcblwiICtcbiAgICBcIiAgICA8L2J1dHRvbj5cXG5cIiArXG4gICAgXCIgICAgPGEgY2xhc3M9XFxcIm5hdmJhci1icmFuZFxcXCIgbmctY2xpY2s9XFxcImhvbWUoKVxcXCI+PGI+TE9TRTwvYj5PUjxiPkdPPC9iPkhPTUU8L2E+XFxuXCIgK1xuICAgIFwiICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgIDxkaXYgY29sbGFwc2U9XFxcImlzQ29sbGFwc2VkXFxcIiBjbGFzcz1cXFwibmF2YmFyLWNvbGxhcHNlXFxcIj5cXG5cIiArXG4gICAgXCIgICAgPHVsIG5nLXNob3c9XFxcInVzZXJEYXRhLnVzZXIubG9hZGVkXFxcIiBjbGFzcz1cXFwibmF2IG5hdmJhci1uYXYgbmF2YmFyLXJpZ2h0XFxcIj5cXG5cIiArXG4gICAgXCIgICAgICA8bGkgbmctY2xhc3M9XFxcInsnYWN0aXZlJzogaXNTdGF0ZShbJ3ByaXZhdGUucGxheS50ZWFtcycsICdwcml2YXRlLnBsYXkubGVhZ3VlcyddKX1cXFwiPjxhIG5nLWNsaWNrPVxcXCJwbGF5KHNlbGVjdGVkU2Vhc29uSWQpXFxcIj5NeSBUZWFtcyAmIExlYWd1ZXM8L2E+PC9saT5cXG5cIiArXG4gICAgXCIgICAgICA8bGkgbmctY2xhc3M9XFxcInsnYWN0aXZlJzogaXNTdGF0ZShbJ3ByaXZhdGUubGVhZ3Vlcy5qb2luLnB1YmxpYycsICdwcml2YXRlLmxlYWd1ZXMuam9pbi5wcml2YXRlJ10pfVxcXCI+PGEgbmctY2xpY2s9XFxcImpvaW5MZWFndWUoKVxcXCI+Sm9pbiBMZWFndWU8L2E+PC9saT5cXG5cIiArXG4gICAgXCIgICAgICA8bGk+PGEgbmctY2xpY2s9XFxcImNyZWF0ZUxlYWd1ZSgpXFxcIj5DcmVhdGUgTGVhZ3VlPC9hPjwvbGk+XFxuXCIgK1xuICAgIFwiICAgICAgPGxpPjxhIG5nLWNsaWNrPVxcXCJmYXEoKVxcXCI+RkFRPC9hPjwvbGk+XFxuXCIgK1xuICAgIFwiICAgICAgPGxpIGNsYXNzPVxcXCJkcm9wZG93blxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgICA8YSBocmVmPVxcXCIjXFxcIiBjbGFzcz1cXFwiZHJvcGRvd24tdG9nZ2xlXFxcIiBkYXRhLXRvZ2dsZT1cXFwiZHJvcGRvd25cXFwiPjxpIGNsYXNzPVxcXCJmYSBmYS1jb2cgZmEtZncgc2V0dGluZ3MtaWNvblxcXCIgdGl0bGU9XFxcIlVzZXIgU2V0dGluZ3NcXFwiPjwvaT4gPGIgY2xhc3M9XFxcImNhcmV0XFxcIj48L2I+PC9hPlxcblwiICtcbiAgICBcIiAgICAgICAgPHVsIGNsYXNzPVxcXCJkcm9wZG93bi1tZW51XFxcIj5cXG5cIiArXG4gICAgXCIgICAgICAgICAgPGxpPjxhIG5nLWNsaWNrPVxcXCJjb250YWN0VXMoKVxcXCI+Q29udGFjdCBVczwvYT48L2xpPlxcblwiICtcbiAgICBcIiAgICAgICAgICA8bGkgY2xhc3M9XFxcImRpdmlkZXJcXFwiPjwvbGk+XFxuXCIgK1xuICAgIFwiICAgICAgICAgIDxsaT48YSBuZy1jbGljaz1cXFwidXNlclByb2ZpbGUoKVxcXCI+VXNlciBQcm9maWxlPC9hPjwvbGk+XFxuXCIgK1xuICAgIFwiICAgICAgICAgIDxsaT48YSBuZy1jbGljaz1cXFwic2lnbm91dCgpXFxcIj5TaWduIE91dDwvYT48L2xpPlxcblwiICtcbiAgICBcIiAgICAgICAgPC91bD5cXG5cIiArXG4gICAgXCIgICAgICA8L2xpPlxcblwiICtcbiAgICBcIiAgICA8L3VsPlxcblwiICtcbiAgICBcIiAgICA8dWwgbmctc2hvdz1cXFwiIXVzZXJEYXRhLnVzZXIubG9hZGVkXFxcIiBjbGFzcz1cXFwibmF2IG5hdmJhci1uYXYgbmF2YmFyLXJpZ2h0XFxcIj5cXG5cIiArXG4gICAgXCIgICAgICA8bGk+PGEgbmctY2xpY2s9XFxcImZhcSgpXFxcIj5GQVE8L2E+PC9saT5cXG5cIiArXG4gICAgXCIgICAgICA8bGk+PGEgbmctY2xpY2s9XFxcInJlZ2lzdGVyKClcXFwiPlJlZ2lzdGVyPC9hPjwvbGk+XFxuXCIgK1xuICAgIFwiICAgICAgPGxpIGNsYXNzPVxcXCJkcm9wZG93blxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgICA8YSBjbGFzcz1cXFwiZHJvcGRvd24tdG9nZ2xlXFxcIiBocmVmPVxcXCIjXFxcIiBkYXRhLXRvZ2dsZT1cXFwiZHJvcGRvd25cXFwiPlNpZ24gSW48L3N0cm9uZz48L2E+XFxuXCIgK1xuICAgIFwiICAgICAgICA8ZGl2IGNsYXNzPVxcXCJkcm9wZG93bi1tZW51IHBhbmVsIHBhbmVsLWRlZmF1bHRcXFwiPlxcblwiICtcbiAgICBcIiAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJpbmxpbmUtc2lnbmluLWZvcm0gcGFuZWwtYm9keVxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgICAgICAgPGZvcm0gbmFtZT1cXFwiaW5saW5lU2lnbmluRm9ybVxcXCIgcm9sZT1cXFwiZm9ybVxcXCIgbmctc3VibWl0PVxcXCJzaWduaW4oeyBlbWFpbDogY3JlZGVudGlhbHMuZW1haWwudG9Mb3dlckNhc2UoKSwgcGFzc3dvcmQ6IGNyZWRlbnRpYWxzLnBhc3N3b3JkIH0pOyAkZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XFxcIiBub3ZhbGlkYXRlPlxcblwiICtcbiAgICBcIiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImlucHV0LWdyb3VwXFxcIj5cXG5cIiArXG4gICAgXCIgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwiaW5wdXQtZ3JvdXAtYWRkb25cXFwiPjxpIGNsYXNzPVxcXCJmYSBmYS1lbnZlbG9wZSBmYS1md1xcXCI+PC9pPjwvc3Bhbj5cXG5cIiArXG4gICAgXCIgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cXFwiZW1haWxcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIGF1dG9jb21wbGV0ZT1cXFwib2ZmXFxcIiBzdHlsZT1cXFwiY3Vyc29yOmF1dG87XFxcIiBwbGFjZWhvbGRlcj1cXFwiRW1haWxcXFwiIG5nLW1vZGVsPVxcXCJjcmVkZW50aWFscy5lbWFpbFxcXCIgbmctY2xpY2s9XFxcIiRldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcXFwiIHJjLXZlcmlmeS1zZXQgYXV0b2ZvY3VzIHJlcXVpcmVkPlxcblwiICtcbiAgICBcIiAgICAgICAgICAgICAgICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgICAgICAgICAgICAgIDwvZGl2PlxcblwiICtcbiAgICBcIiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImlucHV0LWdyb3VwXFxcIj5cXG5cIiArXG4gICAgXCIgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwiaW5wdXQtZ3JvdXAtYWRkb25cXFwiPjxpIGNsYXNzPVxcXCJmYSBmYS1rZXkgZmEtZndcXFwiPjwvaT48L3NwYW4+XFxuXCIgK1xuICAgIFwiICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XFxcInBhc3N3b3JkXFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBhdXRvY29tcGxldGU9XFxcIm9mZlxcXCIgc3R5bGU9XFxcImN1cnNvcjphdXRvO1xcXCIgcGxhY2Vob2xkZXI9XFxcIlBhc3N3b3JkXFxcIiBuZy1tb2RlbD1cXFwiY3JlZGVudGlhbHMucGFzc3dvcmRcXFwiIG5nLWNsaWNrPVxcXCIkZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XFxcIiByYy12ZXJpZnktc2V0IHJlcXVpcmVkPlxcblwiICtcbiAgICBcIiAgICAgICAgICAgICAgICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgICAgICAgICAgICAgIDwvZGl2PlxcblwiICtcbiAgICBcIiAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVxcXCJzdWJtaXRcXFwiIGNsYXNzPVxcXCJidG4gYnRuLWJsb2NrIGJ0bi1wcmltYXJ5XFxcIj5TaWduIGluIHdpdGggZW1haWw8L2J1dHRvbj5cXG5cIiArXG4gICAgXCIgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIm9yRGl2XFxcIj48c3Bhbj5vcjwvc3Bhbj48L2Rpdj5cXG5cIiArXG4gICAgXCIgICAgICAgICAgICA8L2Zvcm0+XFxuXCIgK1xuICAgIFwiICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cXFwiYnRuIGJ0bi1ibG9jayBidG4tcHJpbWFyeVxcXCIgbmctY2xpY2s9XFxcInNpZ25pbkd1ZXN0KClcXFwiPlNpZ24gaW4gYXMgZ3Vlc3Q8L2J1dHRvbj5cXG5cIiArXG4gICAgXCIgICAgICAgICAgICA8aHI+XFxuXCIgK1xuICAgIFwiICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwic2lnbmluLW90aGVyLWNvbnRhaW5lclxcXCI+PGEgbmctY2xpY2s9XFxcInJlZ2lzdGVyKClcXFwiPlJlZ2lzdGVyPC9hPiB8IDxhIG5nLWNsaWNrPVxcXCJyZXNldFBhc3N3b3JkKClcXFwiPlJlc2V0IFBhc3N3b3JkPC9hPjwvZGl2PlxcblwiICtcbiAgICBcIiAgICAgICAgICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgICAgICAgIDwvZGl2PlxcblwiICtcbiAgICBcIiAgICAgIDwvbGk+XFxuXCIgK1xuICAgIFwiICAgIDwvdWw+XFxuXCIgK1xuICAgIFwiICA8L2Rpdj5cXG5cIiArXG4gICAgXCI8L2Rpdj5cXG5cIiArXG4gICAgXCJcIik7XG59XSk7XG5cbmFuZ3VsYXIubW9kdWxlKFwiY29tbW9uL21vZHVsZXMvbWVzc2FnZS9tZXNzYWdlLnRwbC5odG1sXCIsIFtdKS5ydW4oW1wiJHRlbXBsYXRlQ2FjaGVcIiwgZnVuY3Rpb24oJHRlbXBsYXRlQ2FjaGUpIHtcbiAgJHRlbXBsYXRlQ2FjaGUucHV0KFwiY29tbW9uL21vZHVsZXMvbWVzc2FnZS9tZXNzYWdlLnRwbC5odG1sXCIsXG4gICAgXCI8ZGl2IGNsYXNzPVxcXCJhbGVydCBhbGVydC1kaXNtaXNzYWJsZSBhbGVydC17e21lc3NhZ2VEYXRhLm1lc3NhZ2UudHlwZX19XFxcIiBuZy1zaG93PVxcXCJtZXNzYWdlRGF0YS5tZXNzYWdlLmxvYWRlZFxcXCI+XFxuXCIgK1xuICAgIFwiICA8YnV0dG9uIHR5cGU9XFxcImJ1dHRvblxcXCIgY2xhc3M9XFxcImNsb3NlXFxcIiBkYXRhLWRpc21pc3M9XFxcImFsZXJ0XFxcIiBhcmlhLWhpZGRlbj1cXFwidHJ1ZVxcXCIgbmctY2xpY2s9XFxcImRpc21pc3NNZXNzYWdlKG1lc3NhZ2VEYXRhKVxcXCI+JnRpbWVzOzwvYnV0dG9uPlxcblwiICtcbiAgICBcIiAge3ttZXNzYWdlRGF0YS5tZXNzYWdlLmNvbnRlbnR9fVxcblwiICtcbiAgICBcIiAgPGEgbmctc2hvdz1cXFwibWVzc2FnZURhdGEubWVzc2FnZS5zaGFyZUxlYWd1ZVxcXCIgbmctY2xpY2s9XFxcInNoYXJlTGVhZ3VlRkIoKVxcXCIgY2xhc3M9XFxcImFsZXJ0LWxpbmtcXFwiPlsgc2hhcmUgb24gZmFjZWJvb2sgXTwvYT5cXG5cIiArXG4gICAgXCIgIDxhIG5nLXNob3c9XFxcIm1lc3NhZ2VEYXRhLm1lc3NhZ2Uuc2hhcmVUZWFtXFxcIiBuZy1jbGljaz1cXFwic2hhcmVUZWFtRkIoKVxcXCIgY2xhc3M9XFxcImFsZXJ0LWxpbmtcXFwiPlsgc2hhcmUgb24gZmFjZWJvb2sgXTwvYT5cXG5cIiArXG4gICAgXCIgIDxhIG5nLXNob3c9XFxcIm1lc3NhZ2VEYXRhLm1lc3NhZ2Uuc2hhcmVVc2VyXFxcIiBuZy1jbGljaz1cXFwic2hhcmVVc2VyRkIoKVxcXCIgY2xhc3M9XFxcImFsZXJ0LWxpbmtcXFwiPlsgc2hhcmUgb24gZmFjZWJvb2sgXTwvYT5cXG5cIiArXG4gICAgXCI8L2Rpdj5cXG5cIiArXG4gICAgXCJcIik7XG59XSk7XG5cbmFuZ3VsYXIubW9kdWxlKFwiY29tbW9uL3RlbXBsYXRlcy9tYXN0ZXIudHBsLmh0bWxcIiwgW10pLnJ1bihbXCIkdGVtcGxhdGVDYWNoZVwiLCBmdW5jdGlvbigkdGVtcGxhdGVDYWNoZSkge1xuICAkdGVtcGxhdGVDYWNoZS5wdXQoXCJjb21tb24vdGVtcGxhdGVzL21hc3Rlci50cGwuaHRtbFwiLFxuICAgIFwiPCEtLSBIZWFkZXIgLS0+XFxuXCIgK1xuICAgIFwiPG5hdiBjbGFzcz1cXFwibmF2YmFyIG5hdmJhci1pbnZlcnNlXFxcIiB1aS12aWV3PVxcXCJoZWFkZXJcXFwiPjwvbmF2PlxcblwiICtcbiAgICBcIlxcblwiICtcbiAgICBcIjxkaXYgY2xhc3M9XFxcImNvbnRhaW5lclxcXCI+XFxuXCIgK1xuICAgIFwiXFxuXCIgK1xuICAgIFwiICA8IS0tIE1lc3NhZ2UgLS0+XFxuXCIgK1xuICAgIFwiICA8ZGl2IHVpLXZpZXc9XFxcIm1lc3NhZ2VcXFwiPjwvZGl2PlxcblwiICtcbiAgICBcIlxcblwiICtcbiAgICBcIiAgPCEtLSBDb250ZW50IC0tPlxcblwiICtcbiAgICBcIiAgPGRpdiB1aS12aWV3PVxcXCJjb250ZW50XFxcIj48L2Rpdj5cXG5cIiArXG4gICAgXCJcXG5cIiArXG4gICAgXCI8L2Rpdj5cXG5cIiArXG4gICAgXCJcXG5cIiArXG4gICAgXCI8IS0tIE1lc3NhZ2UgLS0+XFxuXCIgK1xuICAgIFwiPGRpdiB1aS12aWV3PVxcXCJsYW5kaW5nTWVzc2FnZVxcXCIgY2xhc3M9XFxcImxhbmRpbmctbWVzc2FnZSBjb250YWluZXJcXFwiPjwvZGl2PlxcblwiICtcbiAgICBcIlxcblwiICtcbiAgICBcIjwhLS0gTGFuZGluZyAtLT5cXG5cIiArXG4gICAgXCI8ZGl2IHVpLXZpZXc9XFxcImxhbmRpbmdcXFwiIGNsYXNzPVxcXCJsYW5kaW5nXFxcIj48L2Rpdj5cXG5cIiArXG4gICAgXCJcXG5cIiArXG4gICAgXCI8IS0tIEZvb3RlciAtLT5cXG5cIiArXG4gICAgXCI8Zm9vdGVyIGNsYXNzPVxcXCJmb290ZXJcXFwiIHVpLXZpZXc9XFxcImZvb3RlclxcXCI+PC9mb290ZXI+XFxuXCIgK1xuICAgIFwiXFxuXCIgK1xuICAgIFwiXCIpO1xufV0pO1xuXG5hbmd1bGFyLm1vZHVsZShcIm1vZHVsZXMvcHJpdmF0ZS9hZG1pbi9hZG1pbi50cGwuaHRtbFwiLCBbXSkucnVuKFtcIiR0ZW1wbGF0ZUNhY2hlXCIsIGZ1bmN0aW9uKCR0ZW1wbGF0ZUNhY2hlKSB7XG4gICR0ZW1wbGF0ZUNhY2hlLnB1dChcIm1vZHVsZXMvcHJpdmF0ZS9hZG1pbi9hZG1pbi50cGwuaHRtbFwiLFxuICAgIFwiPGRpdiB1aS12aWV3PVxcXCJhZG1pbkNvbnRlbnRcXFwiIGNsYXNzPVxcXCJhZG1pbi1jb250ZW50XFxcIj48L2Rpdj5cXG5cIiArXG4gICAgXCJcIik7XG59XSk7XG5cbmFuZ3VsYXIubW9kdWxlKFwibW9kdWxlcy9wcml2YXRlL2FkbWluL2dhbWUvZWRpdC9hZG1pbi5nYW1lLmVkaXQudHBsLmh0bWxcIiwgW10pLnJ1bihbXCIkdGVtcGxhdGVDYWNoZVwiLCBmdW5jdGlvbigkdGVtcGxhdGVDYWNoZSkge1xuICAkdGVtcGxhdGVDYWNoZS5wdXQoXCJtb2R1bGVzL3ByaXZhdGUvYWRtaW4vZ2FtZS9lZGl0L2FkbWluLmdhbWUuZWRpdC50cGwuaHRtbFwiLFxuICAgIFwiPGRpdiBjbGFzcz1cXFwibW9kYWwtaGVhZGVyXFxcIj5cXG5cIiArXG4gICAgXCIgIDxidXR0b24gdHlwZT1cXFwiYnV0dG9uXFxcIiBjbGFzcz1cXFwiY2xvc2VcXFwiIG5nLWNsaWNrPVxcXCJjYW5jZWwoKVxcXCI+PHNwYW4gYXJpYS1oaWRkZW49XFxcInRydWVcXFwiPiZ0aW1lczs8L3NwYW4+PHNwYW4gY2xhc3M9XFxcInNyLW9ubHlcXFwiPkNsb3NlPC9zcGFuPjwvYnV0dG9uPlxcblwiICtcbiAgICBcIiAgPGgzIGNsYXNzPVxcXCJtb2RhbC10aXRsZVxcXCI+RWRpdCBHYW1lIFtJRDoge3tnYW1lRGF0YS5pZH19IF19PC9oMz5cXG5cIiArXG4gICAgXCI8L2Rpdj5cXG5cIiArXG4gICAgXCI8ZGl2IGNsYXNzPVxcXCJtb2RhbC1ib2R5XFxcIj5cXG5cIiArXG4gICAgXCIgIDxmb3JtIHN0eWxlPVxcXCJwYWRkaW5nOiAxMHB4O1xcXCIgbmFtZT1cXFwiZWRpdEdhbWVGb3JtXFxcIiBjbGFzcz1cXFwiZWRpdC1nYW1lLWZvcm0gZm9ybS1ob3Jpem9udGFsXFxcIiByb2xlPVxcXCJmb3JtXFxcIiBub3ZhbGlkYXRlPlxcblwiICtcbiAgICBcIiAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj5cXG5cIiArXG4gICAgXCIgICAgICA8bGFiZWwgY2xhc3M9XFxcImNvbC1zbS02IGNvbnRyb2wtbGFiZWxcXFwiPlN0YXJ0cyBBdCAoTG9jYWwgVGltZSk6PC9sYWJlbD5cXG5cIiArXG4gICAgXCIgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtc20tNlxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgICA8ZGl2IGNsYXNzPVxcXCJkcm9wZG93blxcXCIgaXMtb3Blbj1cXFwic3RhcnRzQXREcm9wZG93bi5pc29wZW5cXFwiPlxcblwiICtcbiAgICBcIiAgICAgICAgICA8YSBjbGFzcz1cXFwiZHJvcGRvd24tdG9nZ2xlXFxcIiByb2xlPVxcXCJidXR0b25cXFwiIGRhdGEtdG9nZ2xlPVxcXCJkcm9wZG93blxcXCIgZGF0YS10YXJnZXQ9XFxcIiNcXFwiIGhyZWY9XFxcIiNcXFwiPlxcblwiICtcbiAgICBcIiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImlucHV0LWdyb3VwXFxcIj5cXG5cIiArXG4gICAgXCIgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVxcXCJ0ZXh0XFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBmb3JtYXR0ZWQtZGF0ZSBkYXRhLW5nLW1vZGVsPVxcXCJnYW1lRGF0YS5zdGFydHNfYXRcXFwiIG5nLXJlcXVpcmVkPVxcXCJ0cnVlXFxcIiBuZy1kaXNhYmxlZD1cXFwidHJ1ZVxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwiaW5wdXQtZ3JvdXAtYWRkb25cXFwiPjxpIGNsYXNzPVxcXCJnbHlwaGljb24gZ2x5cGhpY29uLWNhbGVuZGFyXFxcIj48L2k+PC9zcGFuPlxcblwiICtcbiAgICBcIiAgICAgICAgICAgIDwvZGl2PlxcblwiICtcbiAgICBcIiAgICAgICAgICA8L2E+XFxuXCIgK1xuICAgIFwiICAgICAgICAgIDx1bCBjbGFzcz1cXFwiZHJvcGRvd24tbWVudVxcXCIgcm9sZT1cXFwibWVudVxcXCIgYXJpYS1sYWJlbGxlZGJ5PVxcXCJkTGFiZWxcXFwiPlxcblwiICtcbiAgICBcIiAgICAgICAgICAgIDxkYXRldGltZXBpY2tlciBkYXRhLW5nLW1vZGVsPVxcXCJnYW1lRGF0YS5zdGFydHNfYXRcXFwiIGRhdGEtb24tc2V0LXRpbWU9XFxcImNsb3NlU3RhcnRzQXQoKVxcXCIgZGF0YS1kYXRldGltZXBpY2tlci1jb25maWc9XFxcInsgbWludXRlU3RlcDogMSB9XFxcIi8+XFxuXCIgK1xuICAgIFwiICAgICAgICAgIDwvdWw+XFxuXCIgK1xuICAgIFwiICAgICAgICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgICAgICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgICAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPlxcblwiICtcbiAgICBcIiAgICAgIDxsYWJlbCBmb3I9XFxcIm5vdGVcXFwiIGNsYXNzPVxcXCJjb2wtc20tNiBjb250cm9sLWxhYmVsXFxcIj5Ob3RlOjwvbGFiZWw+XFxuXCIgK1xuICAgIFwiICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXNtLTZcXFwiPlxcblwiICtcbiAgICBcIiAgICAgICAgPGlucHV0IGlkPVxcXCJub3RlXFxcIiBuYW1lPVxcXCJub3RlXFxcIiB0eXBlPVxcXCJ0ZXh0XFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBuZy1tb2RlbD1cXFwiZ2FtZURhdGEubm90ZVxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICAgIDwvZGl2PlxcblwiICtcbiAgICBcIiAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj5cXG5cIiArXG4gICAgXCIgICAgICA8bGFiZWwgZm9yPVxcXCJ2aXNpdGluZ1NxdWFkXFxcIiBjbGFzcz1cXFwiY29sLXNtLTYgY29udHJvbC1sYWJlbFxcXCI+VmlzaXRpbmcgU3F1YWQ6PC9sYWJlbD5cXG5cIiArXG4gICAgXCIgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtc20tNlxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgICA8c2VsZWN0IGlkPVxcXCJ2aXNpdGluZ1NxdWFkXFxcIiBuYW1lPVxcXCJ2aXNpdGluZ1NxdWFkXFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBuZy1tb2RlbD1cXFwiZ2FtZURhdGEudmlzaXRpbmdfc3F1YWRfaWRcXFwiIG5nLW9wdGlvbnM9XFxcInZpc2l0aW5nU3F1YWQuaWQgYXMgdmlzaXRpbmdTcXVhZC5uYW1lIGZvciB2aXNpdGluZ1NxdWFkIGluIHNxdWFkc1xcXCI+PC9zZWxlY3Q+XFxuXCIgK1xuICAgIFwiICAgICAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICAgIDwvZGl2PlxcblwiICtcbiAgICBcIiAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj5cXG5cIiArXG4gICAgXCIgICAgICA8bGFiZWwgZm9yPVxcXCJob21lU3F1YWRcXFwiIGNsYXNzPVxcXCJjb2wtc20tNiBjb250cm9sLWxhYmVsXFxcIiA+SG9tZSBTcXVhZDo8L2xhYmVsPlxcblwiICtcbiAgICBcIiAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1zbS02XFxcIj5cXG5cIiArXG4gICAgXCIgICAgICAgIDxzZWxlY3QgaWQ9XFxcImhvbWVTcXVhZFxcXCIgbmFtZT1cXFwiaG9tZVNxdWFkXFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBuZy1tb2RlbD1cXFwiZ2FtZURhdGEuaG9tZV9zcXVhZF9pZFxcXCIgbmctb3B0aW9ucz1cXFwiaG9tZVNxdWFkLmlkIGFzIGhvbWVTcXVhZC5uYW1lIGZvciBob21lU3F1YWQgaW4gc3F1YWRzXFxcIj48L3NlbGVjdD5cXG5cIiArXG4gICAgXCIgICAgICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgICAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPlxcblwiICtcbiAgICBcIiAgICAgIDxsYWJlbCBmb3I9XFxcInZpc2l0b3JTY29yZVxcXCIgY2xhc3M9XFxcImNvbC1zbS02IGNvbnRyb2wtbGFiZWxcXFwiPnt7Z2V0U3F1YWQoZ2FtZURhdGEudmlzaXRpbmdfc3F1YWRfaWQpLm5hbWV9fSBTY29yZTo8L2xhYmVsPlxcblwiICtcbiAgICBcIiAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1zbS02XFxcIj5cXG5cIiArXG4gICAgXCIgICAgICAgIDxpbnB1dCBpZD1cXFwidmlzaXRvclNjb3JlXFxcIiBuYW1lPVxcXCJ2aXNpdG9yU2NvcmVcXFwiIHR5cGU9XFxcIm51bWJlclxcXCIgbWluPVxcXCIwXFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBuZy1tb2RlbD1cXFwiZ2FtZURhdGEudmlzaXRpbmdfc3F1YWRfc2NvcmVcXFwiIHNlbGVjdC1vbi1jbGljayByZXF1aXJlZD5cXG5cIiArXG4gICAgXCIgICAgICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgICAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPlxcblwiICtcbiAgICBcIiAgICAgIDxsYWJlbCBmb3I9XFxcImhvbWVTY29yZVxcXCIgY2xhc3M9XFxcImNvbC1zbS02IGNvbnRyb2wtbGFiZWxcXFwiPnt7Z2V0U3F1YWQoZ2FtZURhdGEuaG9tZV9zcXVhZF9pZCkubmFtZX19IFNjb3JlOjwvbGFiZWw+XFxuXCIgK1xuICAgIFwiICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXNtLTZcXFwiPlxcblwiICtcbiAgICBcIiAgICAgICAgPGlucHV0IGlkPVxcXCJob21lU2NvcmVcXFwiIG5hbWU9XFxcImhvbWVTY29yZVxcXCIgdHlwZT1cXFwibnVtYmVyXFxcIiBtaW49XFxcIjBcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIG5nLW1vZGVsPVxcXCJnYW1lRGF0YS5ob21lX3NxdWFkX3Njb3JlXFxcIiBzZWxlY3Qtb24tY2xpY2sgcmVxdWlyZWQ+XFxuXCIgK1xuICAgIFwiICAgICAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICAgIDwvZGl2PlxcblwiICtcbiAgICBcIiAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj5cXG5cIiArXG4gICAgXCIgICAgICA8bGFiZWwgZm9yPVxcXCJjb21wbGV0ZVxcXCIgY2xhc3M9XFxcImNvbC1zbS02IGNvbnRyb2wtbGFiZWxcXFwiPkNvbXBsZXRlZDo8L2xhYmVsPlxcblwiICtcbiAgICBcIiAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1zbS02XFxcIj5cXG5cIiArXG4gICAgXCIgICAgICAgIDxpbnB1dCBpZD1cXFwiY29tcGxldGVcXFwiIG5hbWU9XFxcImNvbXBsZXRlXFxcIiB0eXBlPVxcXCJjaGVja2JveFxcXCIgbmctbW9kZWw9XFxcImdhbWVEYXRhLmNvbXBsZXRlXFxcIj5cXG5cIiArXG4gICAgXCIgICAgICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgICAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICAgIDxocj5cXG5cIiArXG4gICAgXCIgICAgPGEgbmctc2hvdz1cXFwiIXNob3dPcHRpb25zXFxcIiBuZy1jbGljaz1cXFwic2hvd09wdGlvbnMgPSB0cnVlXFxcIj5TaG93IE9wdGlvbnM8L2E+XFxuXCIgK1xuICAgIFwiICAgIDxhIG5nLXNob3c9XFxcInNob3dPcHRpb25zXFxcIiBuZy1jbGljaz1cXFwic2hvd09wdGlvbnMgPSBmYWxzZVxcXCI+SGlkZSBPcHRpb25zPC9hPlxcblwiICtcbiAgICBcIiAgICA8ZGl2IG5nLXNob3c9XFxcInNob3dPcHRpb25zXFxcIj5cXG5cIiArXG4gICAgXCIgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj5cXG5cIiArXG4gICAgXCIgICAgICAgIDxsYWJlbCBmb3I9XFxcInNob290b3V0XFxcIiBjbGFzcz1cXFwiY29sLXNtLTYgY29udHJvbC1sYWJlbFxcXCI+U2hvb3RvdXQ6PC9sYWJlbD5cXG5cIiArXG4gICAgXCIgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1zbS02XFxcIj5cXG5cIiArXG4gICAgXCIgICAgICAgICAgPGlucHV0IGlkPVxcXCJzaG9vdG91dFxcXCIgbmFtZT1cXFwic2hvb3RvdXRcXFwiIHR5cGU9XFxcImNoZWNrYm94XFxcIiBuZy1tb2RlbD1cXFwiZ2FtZURhdGEuc2hvb3RvdXRcXFwiPlxcblwiICtcbiAgICBcIiAgICAgICAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICAgICAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgICA8bGFiZWwgZm9yPVxcXCJvdmVydGltZXNcXFwiIGNsYXNzPVxcXCJjb2wtc20tNiBjb250cm9sLWxhYmVsXFxcIj5PdmVydGltZXM6PC9sYWJlbD5cXG5cIiArXG4gICAgXCIgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1zbS02XFxcIj5cXG5cIiArXG4gICAgXCIgICAgICAgICAgPGlucHV0IGlkPVxcXCJvdmVydGltZXNcXFwiIG5hbWU9XFxcIm92ZXJ0aW1lc1xcXCIgdHlwZT1cXFwibnVtYmVyXFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBuZy1tb2RlbD1cXFwiZ2FtZURhdGEub3ZlcnRpbWVzXFxcIiBzZWxlY3Qtb24tY2xpY2sgcmVxdWlyZWQ+XFxuXCIgK1xuICAgIFwiICAgICAgICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgICAgICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj5cXG5cIiArXG4gICAgXCIgICAgICAgIDxsYWJlbCBmb3I9XFxcImlubmluZ3NcXFwiIGNsYXNzPVxcXCJjb2wtc20tNiBjb250cm9sLWxhYmVsXFxcIj5Jbm5pbmdzOjwvbGFiZWw+XFxuXCIgK1xuICAgIFwiICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtc20tNlxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgICAgIDxpbnB1dCBpZD1cXFwiaW5uaW5nc1xcXCIgbmFtZT1cXFwiaW5uaW5nc1xcXCIgdHlwZT1cXFwibnVtYmVyXFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBuZy1tb2RlbD1cXFwiZ2FtZURhdGEuaW5uaW5nc1xcXCIgc2VsZWN0LW9uLWNsaWNrIHJlcXVpcmVkPlxcblwiICtcbiAgICBcIiAgICAgICAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICAgICAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgICA8bGFiZWwgZm9yPVxcXCJwb3N0cG9uZWRcXFwiIGNsYXNzPVxcXCJjb2wtc20tNiBjb250cm9sLWxhYmVsXFxcIj5Qb3N0cG9uZWQ6PC9sYWJlbD5cXG5cIiArXG4gICAgXCIgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1zbS02XFxcIj5cXG5cIiArXG4gICAgXCIgICAgICAgICAgPGlucHV0IGlkPVxcXCJwb3N0cG9uZWRcXFwiIG5hbWU9XFxcInBvc3Rwb25lZFxcXCIgdHlwZT1cXFwiY2hlY2tib3hcXFwiIG5nLW1vZGVsPVxcXCJnYW1lRGF0YS5wb3N0cG9uZWRcXFwiPlxcblwiICtcbiAgICBcIiAgICAgICAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICAgICAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgICA8bGFiZWwgZm9yPVxcXCJwbGF5b2ZmXFxcIiBjbGFzcz1cXFwiY29sLXNtLTYgY29udHJvbC1sYWJlbFxcXCI+UGxheW9mZnM6PC9sYWJlbD5cXG5cIiArXG4gICAgXCIgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1zbS02XFxcIj5cXG5cIiArXG4gICAgXCIgICAgICAgICAgPGlucHV0IGlkPVxcXCJwbGF5b2ZmXFxcIiBuYW1lPVxcXCJwbGF5b2ZmXFxcIiB0eXBlPVxcXCJjaGVja2JveFxcXCIgbmctbW9kZWw9XFxcImdhbWVEYXRhLnBsYXlvZmZcXFwiPlxcblwiICtcbiAgICBcIiAgICAgICAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICAgICAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgICA8bGFiZWwgZm9yPVxcXCJ0YmRcXFwiIGNsYXNzPVxcXCJjb2wtc20tNiBjb250cm9sLWxhYmVsXFxcIj5UQkQ6PC9sYWJlbD5cXG5cIiArXG4gICAgXCIgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1zbS02XFxcIj5cXG5cIiArXG4gICAgXCIgICAgICAgICAgPGlucHV0IGlkPVxcXCJ0YmRcXFwiIG5hbWU9XFxcInRiZFxcXCIgdHlwZT1cXFwiY2hlY2tib3hcXFwiIG5nLW1vZGVsPVxcXCJnYW1lRGF0YS50YmRcXFwiPlxcblwiICtcbiAgICBcIiAgICAgICAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICAgICAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgICA8bGFiZWwgZm9yPVxcXCJpZl9uZWNlc3NhcnlcXFwiIGNsYXNzPVxcXCJjb2wtc20tNiBjb250cm9sLWxhYmVsXFxcIj5JZiBOZWNlc3Nhcnk6PC9sYWJlbD5cXG5cIiArXG4gICAgXCIgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1zbS02XFxcIj5cXG5cIiArXG4gICAgXCIgICAgICAgICAgPGlucHV0IGlkPVxcXCJpZl9uZWNlc3NhcnlcXFwiIG5hbWU9XFxcImlmX25lY2Vzc2FyeVxcXCIgdHlwZT1cXFwiY2hlY2tib3hcXFwiIG5nLW1vZGVsPVxcXCJnYW1lRGF0YS5pZl9uZWNlc3NhcnlcXFwiPlxcblwiICtcbiAgICBcIiAgICAgICAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICAgICAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICAgIDwvZGl2PlxcblwiICtcbiAgICBcIlxcblwiICtcbiAgICBcIiAgPC9mb3JtPlxcblwiICtcbiAgICBcIjwvZGl2PlxcblwiICtcbiAgICBcIjxkaXYgY2xhc3M9XFxcIm1vZGFsLWZvb3RlclxcXCI+XFxuXCIgK1xuICAgIFwiICA8YnV0dG9uIGNsYXNzPVxcXCJidG4gYnRuLWRlZmF1bHRcXFwiIG5nLWNsaWNrPVxcXCJjYW5jZWwoKVxcXCI+Q2FuY2VsPC9idXR0b24+XFxuXCIgK1xuICAgIFwiICA8YnV0dG9uIGNsYXNzPVxcXCJidG4gYnRuLXByaW1hcnlcXFwiIG5nLWRpc2FibGVkPVxcXCJlZGl0R2FtZUZvcm0uJGludmFsaWRcXFwiIG5nLWNsaWNrPVxcXCJlZGl0R2FtZShnYW1lRGF0YSlcXFwiPlVwZGF0ZTwvYnV0dG9uPlxcblwiICtcbiAgICBcIjwvZGl2PlwiKTtcbn1dKTtcblxuYW5ndWxhci5tb2R1bGUoXCJtb2R1bGVzL3ByaXZhdGUvYWRtaW4vZ2FtZS9uZXcvYWRtaW4uZ2FtZS5uZXcudHBsLmh0bWxcIiwgW10pLnJ1bihbXCIkdGVtcGxhdGVDYWNoZVwiLCBmdW5jdGlvbigkdGVtcGxhdGVDYWNoZSkge1xuICAkdGVtcGxhdGVDYWNoZS5wdXQoXCJtb2R1bGVzL3ByaXZhdGUvYWRtaW4vZ2FtZS9uZXcvYWRtaW4uZ2FtZS5uZXcudHBsLmh0bWxcIixcbiAgICBcIjxkaXYgY2xhc3M9XFxcIm1vZGFsLWhlYWRlclxcXCI+XFxuXCIgK1xuICAgIFwiICA8YnV0dG9uIHR5cGU9XFxcImJ1dHRvblxcXCIgY2xhc3M9XFxcImNsb3NlXFxcIiBuZy1jbGljaz1cXFwiY2FuY2VsKClcXFwiPjxzcGFuIGFyaWEtaGlkZGVuPVxcXCJ0cnVlXFxcIj4mdGltZXM7PC9zcGFuPjxzcGFuIGNsYXNzPVxcXCJzci1vbmx5XFxcIj5DbG9zZTwvc3Bhbj48L2J1dHRvbj5cXG5cIiArXG4gICAgXCIgIDxoMyBjbGFzcz1cXFwibW9kYWwtdGl0bGVcXFwiPkNyZWF0ZSBHYW1lPC9oMz5cXG5cIiArXG4gICAgXCI8L2Rpdj5cXG5cIiArXG4gICAgXCI8ZGl2IGNsYXNzPVxcXCJtb2RhbC1ib2R5XFxcIj5cXG5cIiArXG4gICAgXCIgIDxoND57e3dlZWtEYXRhLmRpc3BsYXl9fSB8IHt7d2Vla0RhdGEudHlwZX19PC9oND5cXG5cIiArXG4gICAgXCIgIDxocj5cXG5cIiArXG4gICAgXCIgIDxmb3JtIG5hbWU9XFxcIm5ld0dhbWVGb3JtXFxcIiByb2xlPVxcXCJmb3JtXFxcIiBub3ZhbGlkYXRlPlxcblwiICtcbiAgICBcIiAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj5cXG5cIiArXG4gICAgXCIgICAgICA8bGFiZWwgY2xhc3M9XFxcImNvbnRyb2wtbGFiZWxcXFwiIGZvcj1cXFwibm90ZVxcXCI+Tm90ZTo8L2xhYmVsPlxcblwiICtcbiAgICBcIiAgICAgIDxpbnB1dCBpZD1cXFwibm90ZVxcXCIgbmFtZT1cXFwibm90ZVxcXCIgdHlwZT1cXFwidGV4dFxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgbmctbW9kZWw9XFxcIm5ld0dhbWVEYXRhLm5vdGVcXFwiPlxcblwiICtcbiAgICBcIiAgICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgPGxhYmVsIGNsYXNzPVxcXCJjb250cm9sLWxhYmVsXFxcIiBmb3I9XFxcInZpc2l0aW5nU3F1YWRcXFwiPlZpc2l0aW5nIFNxdWFkOjwvbGFiZWw+XFxuXCIgK1xuICAgIFwiICAgICAgPHNlbGVjdCBpZD1cXFwidmlzaXRpbmdTcXVhZFxcXCIgbmFtZT1cXFwidmlzaXRpbmdTcXVhZFxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgbmctbW9kZWw9XFxcIm5ld0dhbWVEYXRhLnZpc2l0aW5nX3NxdWFkX2lkXFxcIiBuZy1vcHRpb25zPVxcXCJzcXVhZC5pZCBhcyBzcXVhZC5uYW1lIGZvciBzcXVhZCBpbiBzcXVhZHNcXFwiPjwvc2VsZWN0PlxcblwiICtcbiAgICBcIiAgICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgPGxhYmVsIGNsYXNzPVxcXCJjb250cm9sLWxhYmVsXFxcIiBmb3I9XFxcImhvbWVTcXVhZFxcXCI+SG9tZSBTcXVhZDo8L2xhYmVsPlxcblwiICtcbiAgICBcIiAgICAgIDxzZWxlY3QgaWQ9XFxcImhvbWVTcXVhZFxcXCIgbmFtZT1cXFwiaG9tZVNxdWFkXFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBuZy1tb2RlbD1cXFwibmV3R2FtZURhdGEuaG9tZV9zcXVhZF9pZFxcXCIgbmctb3B0aW9ucz1cXFwic3F1YWQuaWQgYXMgc3F1YWQubmFtZSBmb3Igc3F1YWQgaW4gc3F1YWRzXFxcIj48L3NlbGVjdD5cXG5cIiArXG4gICAgXCIgICAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPlxcblwiICtcbiAgICBcIiAgICAgIDxsYWJlbCBjbGFzcz1cXFwiY29udHJvbC1sYWJlbFxcXCI+U3RhcnRzIEF0IChMb2NhbCBUaW1lKTo8L2xhYmVsPlxcblwiICtcbiAgICBcIiAgICAgIDxkaXYgY2xhc3M9XFxcImRyb3Bkb3duXFxcIiBpcy1vcGVuPVxcXCJzdGFydHNBdERyb3Bkb3duLmlzb3BlblxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgICA8YSBjbGFzcz1cXFwiZHJvcGRvd24tdG9nZ2xlXFxcIiByb2xlPVxcXCJidXR0b25cXFwiIGRhdGEtdG9nZ2xlPVxcXCJkcm9wZG93blxcXCIgZGF0YS10YXJnZXQ9XFxcIiNcXFwiIGhyZWY9XFxcIiNcXFwiPlxcblwiICtcbiAgICBcIiAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJpbnB1dC1ncm91cFxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgICAgICAgPGlucHV0IHR5cGU9XFxcInRleHRcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIGZvcm1hdHRlZC1kYXRlIGRhdGEtbmctbW9kZWw9XFxcIm5ld0dhbWVEYXRhLnN0YXJ0c19hdFxcXCIgbmctcmVxdWlyZWQ9XFxcInRydWVcXFwiIG5nLWRpc2FibGVkPVxcXCJ0cnVlXFxcIj5cXG5cIiArXG4gICAgXCIgICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwiaW5wdXQtZ3JvdXAtYWRkb25cXFwiPjxpIGNsYXNzPVxcXCJnbHlwaGljb24gZ2x5cGhpY29uLWNhbGVuZGFyXFxcIj48L2k+PC9zcGFuPlxcblwiICtcbiAgICBcIiAgICAgICAgICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgICAgICAgIDwvYT5cXG5cIiArXG4gICAgXCIgICAgICAgIDx1bCBjbGFzcz1cXFwiZHJvcGRvd24tbWVudVxcXCIgcm9sZT1cXFwibWVudVxcXCIgYXJpYS1sYWJlbGxlZGJ5PVxcXCJkTGFiZWxcXFwiPlxcblwiICtcbiAgICBcIiAgICAgICAgICA8ZGF0ZXRpbWVwaWNrZXIgZGF0YS1uZy1tb2RlbD1cXFwibmV3R2FtZURhdGEuc3RhcnRzX2F0XFxcIiBkYXRhLW9uLXNldC10aW1lPVxcXCJjbG9zZVN0YXJ0c0F0KClcXFwiIGRhdGEtZGF0ZXRpbWVwaWNrZXItY29uZmlnPVxcXCJ7IG1pbnV0ZVN0ZXA6IDEgfVxcXCIvPlxcblwiICtcbiAgICBcIiAgICAgICAgPC91bD5cXG5cIiArXG4gICAgXCIgICAgICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgICAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPlxcblwiICtcbiAgICBcIiAgICAgICAgPGlucHV0IGlkPVxcXCJwbGF5b2ZmXFxcIiBuYW1lPVxcXCJwbGF5b2ZmXFxcIiB0eXBlPVxcXCJjaGVja2JveFxcXCIgbmctbW9kZWw9XFxcIm5ld0dhbWVEYXRhLnBsYXlvZmZcXFwiPiBQbGF5b2Zmc1xcblwiICtcbiAgICBcIiAgICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgICA8aW5wdXQgaWQ9XFxcInRiZFxcXCIgbmFtZT1cXFwidGJkXFxcIiB0eXBlPVxcXCJjaGVja2JveFxcXCIgbmctbW9kZWw9XFxcIm5ld0dhbWVEYXRhLnRiZFxcXCI+IFRCRFxcblwiICtcbiAgICBcIiAgICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgICA8aW5wdXQgaWQ9XFxcImlmX25lY2Vzc2FyeVxcXCIgbmFtZT1cXFwiaWZfbmVjZXNzYXJ5XFxcIiB0eXBlPVxcXCJjaGVja2JveFxcXCIgbmctbW9kZWw9XFxcIm5ld0dhbWVEYXRhLmlmX25lY2Vzc2FyeVxcXCI+IElmIE5lY2Vzc2FyeVxcblwiICtcbiAgICBcIiAgICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgIDwvZm9ybT5cXG5cIiArXG4gICAgXCI8L2Rpdj5cXG5cIiArXG4gICAgXCI8ZGl2IGNsYXNzPVxcXCJtb2RhbC1mb290ZXJcXFwiPlxcblwiICtcbiAgICBcIiAgPGJ1dHRvbiBjbGFzcz1cXFwiYnRuIGJ0bi1kZWZhdWx0XFxcIiBuZy1jbGljaz1cXFwiY2FuY2VsKClcXFwiPkNhbmNlbDwvYnV0dG9uPlxcblwiICtcbiAgICBcIiAgPGJ1dHRvbiBjbGFzcz1cXFwiYnRuIGJ0bi1wcmltYXJ5XFxcIiBuZy1kaXNhYmxlZD1cXFwibmV3R2FtZUZvcm0uJGludmFsaWRcXFwiIG5nLWNsaWNrPVxcXCJjcmVhdGVHYW1lKG5ld0dhbWVEYXRhKVxcXCI+Q3JlYXRlPC9idXR0b24+XFxuXCIgK1xuICAgIFwiPC9kaXY+XCIpO1xufV0pO1xuXG5hbmd1bGFyLm1vZHVsZShcIm1vZHVsZXMvcHJpdmF0ZS9hZG1pbi9zZWFzb25zL2FkbWluLnNlYXNvbnMudHBsLmh0bWxcIiwgW10pLnJ1bihbXCIkdGVtcGxhdGVDYWNoZVwiLCBmdW5jdGlvbigkdGVtcGxhdGVDYWNoZSkge1xuICAkdGVtcGxhdGVDYWNoZS5wdXQoXCJtb2R1bGVzL3ByaXZhdGUvYWRtaW4vc2Vhc29ucy9hZG1pbi5zZWFzb25zLnRwbC5odG1sXCIsXG4gICAgXCI8ZGl2IGNsYXNzPVxcXCJzZWFzb25zLWhlYWRlci1yb3cgcm93XFxcIj5cXG5cIiArXG4gICAgXCIgIDxkaXYgY2xhc3M9XFxcImNvbC1zbS02IGNvbC1tZC02XFxcIj5cXG5cIiArXG4gICAgXCIgICAgPGgzPlNlYXNvbnM8L2gzPlxcblwiICtcbiAgICBcIiAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICA8ZGl2IGNsYXNzPVxcXCJjb2wtc20tNiBjb2wtbWQtNlxcXCI+XFxuXCIgK1xuICAgIFwiICAgIDxkaXYgY2xhc3M9XFxcInNlYXNvbnMtYnRuLWdyb3VwXFxcIj5cXG5cIiArXG4gICAgXCIgICAgICA8YnV0dG9uIHR5cGU9XFxcImJ1dHRvblxcXCIgY2xhc3M9XFxcImNyZWF0ZS1zZWFzb24tYnRuIGJ0biBidG4tcHJpbWFyeVxcXCIgbmctY2xpY2s9XFxcImNyZWF0ZVNlYXNvbigpXFxcIj5DcmVhdGUgU2Vhc29uPC9idXR0b24+XFxuXCIgK1xuICAgIFwiICAgIDwvZGl2PlxcblwiICtcbiAgICBcIiAgPC9kaXY+XFxuXCIgK1xuICAgIFwiPC9kaXY+XFxuXCIgK1xuICAgIFwiPGRpdiBjbGFzcz1cXFwic2Vhc29ucyBsaXN0LWdyb3VwXFxcIj5cXG5cIiArXG4gICAgXCIgIDxhIG5nLXJlcGVhdD1cXFwic2Vhc29uIGluIHNlYXNvbnNcXFwiIG5nLWNsaWNrPVxcXCJzaG93U2Vhc29uKHNlYXNvbilcXFwiIGNsYXNzPVxcXCJsaXN0LWdyb3VwLWl0ZW1cXFwiPlxcblwiICtcbiAgICBcIiAgICA8ZGl2IGNsYXNzPVxcXCJyb3dcXFwiPlxcblwiICtcbiAgICBcIiAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1zbS02IGNvbC1tZC02XFxcIj48aSBjbGFzcz1cXFwiZmEgZmEtY2hlY2sgZmEtZndcXFwiIG5nLXNob3c9XFxcInNlYXNvbi5jdXJyZW50ID09PSB0cnVlXFxcIiB0aXRsZT1cXFwiY3VycmVudCBzZWFzb25cXFwiPjwvaT4ge3tzZWFzb24ubmFtZX19PGJyPjxzcGFuIGNsYXNzPVxcXCJzdGFydC1lbmRcXFwiPlN0YXJ0czoge3tzZWFzb24uc3RhcnRfZGlzcGxheX19IHwgRW5kczoge3tzZWFzb24uZW5kX2Rpc3BsYXl9fTwvc3Bhbj48L2Rpdj5cXG5cIiArXG4gICAgXCIgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtc20tNiBjb2wtbWQtNlxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgICA8c3BhbiBjbGFzcz1cXFwiYmFkZ2VcXFwiPnt7c2Vhc29uLndlZWtfY291bnR9fSB3ZWVrPHNwYW4gbmctc2hvdz1cXFwic2Vhc29uLndlZWtfY291bnQgIT09IDFcXFwiPnM8L3NwYW4+PC9zcGFuPlxcblwiICtcbiAgICBcIiAgICAgIDwvZGl2PlxcblwiICtcbiAgICBcIiAgICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgIDwvYT5cXG5cIiArXG4gICAgXCI8L2Rpdj5cIik7XG59XSk7XG5cbmFuZ3VsYXIubW9kdWxlKFwibW9kdWxlcy9wcml2YXRlL2FkbWluL3NlYXNvbnMvc2Vhc29uL2FkbWluLnNlYXNvbi50cGwuaHRtbFwiLCBbXSkucnVuKFtcIiR0ZW1wbGF0ZUNhY2hlXCIsIGZ1bmN0aW9uKCR0ZW1wbGF0ZUNhY2hlKSB7XG4gICR0ZW1wbGF0ZUNhY2hlLnB1dChcIm1vZHVsZXMvcHJpdmF0ZS9hZG1pbi9zZWFzb25zL3NlYXNvbi9hZG1pbi5zZWFzb24udHBsLmh0bWxcIixcbiAgICBcIjxkaXYgY2xhc3M9XFxcInBhZ2UtaGVhZGVyXFxcIj5cXG5cIiArXG4gICAgXCIgIDxoMz57e3NlYXNvbi5uYW1lfX0gKHt7c2Vhc29uLnN0YXJ0X2Rpc3BsYXl9fSAtIHt7c2Vhc29uLmVuZF9kaXNwbGF5fX0pIDxzbWFsbD48YSBuZy1jbGljaz1cXFwiZWRpdFNlYXNvbihzZWFzb24pXFxcIj5bIGVkaXQgXTwvYT48L3NtYWxsPjwvaDM+XFxuXCIgK1xuICAgIFwiPC9kaXY+XFxuXCIgK1xuICAgIFwiPGRpdiBjbGFzcz1cXFwic2Vhc29uLXdlZWtzLWhlYWRlci1yb3cgcm93XFxcIj5cXG5cIiArXG4gICAgXCIgIDxkaXYgY2xhc3M9XFxcImNvbC1zbS0xMiBjb2wtbWQtMTJcXFwiPlxcblwiICtcbiAgICBcIiAgICA8aDQ+V2Vla3MgWyB7e3dlZWtzLmxlbmd0aH19IF0gPHNtYWxsPjxhIG5nLWNsaWNrPVxcXCJjcmVhdGVXZWVrKHNlYXNvbilcXFwiPlsgY3JlYXRlIF08L2E+PC9zbWFsbD48L2g0PlxcblwiICtcbiAgICBcIiAgICA8aHI+XFxuXCIgK1xuICAgIFwiICA8L2Rpdj5cXG5cIiArXG4gICAgXCI8L2Rpdj5cXG5cIiArXG4gICAgXCI8ZGl2IGNsYXNzPVxcXCJzZWFzb24td2Vla3MgbGlzdC1ncm91cFxcXCI+XFxuXCIgK1xuICAgIFwiICA8YSBuZy1yZXBlYXQ9XFxcIndlZWsgaW4gd2Vla3NcXFwiIG5nLWNsaWNrPVxcXCJzaG93V2Vlayh3ZWVrKVxcXCIgY2xhc3M9XFxcImxpc3QtZ3JvdXAtaXRlbVxcXCI+XFxuXCIgK1xuICAgIFwiICAgIDxkaXYgY2xhc3M9XFxcInJvd1xcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXNtLTYgY29sLW1kLTZcXFwiPjxpIGNsYXNzPVxcXCJmYSBmYS1jaGVjayBmYS1md1xcXCIgbmctc2hvdz1cXFwid2Vlay5jb21wbGV0ZSA9PT0gdHJ1ZVxcXCIgdGl0bGU9XFxcImNvbXBsZXRlIHdlZWtcXFwiPjwvaT4ge3t3ZWVrLmRpc3BsYXl9fTxzcGFuIHN0eWxlPVxcXCJjb2xvcjojRkYwMDAwO1xcXCIgbmctc2hvdz1cXFwid2Vlay5nYW1lX3RiZF9jb3VudCA+IDBcXFwiPiAtIHt7d2Vlay5nYW1lX3RiZF9jb3VudH19IFRCRDwvc3Bhbj48L2Rpdj5cXG5cIiArXG4gICAgXCIgICAgICA8ZGl2IGNsYXNzPVxcXCJzdGFydC1lbmQgY29sLXNtLTYgY29sLW1kLTZcXFwiPlxcblwiICtcbiAgICBcIiAgICAgICAgPHNwYW4gY2xhc3M9XFxcImJhZGdlXFxcIj57e3dlZWsuZ2FtZV9jb21wbGV0ZV9jb3VudH19IC8ge3t3ZWVrLmdhbWVfY291bnR9fSBnYW1lPHNwYW4gbmctc2hvdz1cXFwid2Vlay5nYW1lX2NvdW50ICE9PSAxXFxcIj5zPC9zcGFuPjwvc3Bhbj5cXG5cIiArXG4gICAgXCIgICAgICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgICAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICA8L2E+XFxuXCIgK1xuICAgIFwiPC9kaXY+XFxuXCIgK1xuICAgIFwiPGRpdiBjbGFzcz1cXFwic2Vhc29uLWxlYWd1ZXMtaGVhZGVyLXJvdyByb3dcXFwiPlxcblwiICtcbiAgICBcIiAgPGRpdiBjbGFzcz1cXFwiY29sLXNtLTEyIGNvbC1tZC0xMlxcXCI+XFxuXCIgK1xuICAgIFwiICAgIDxoND5QdWJsaWMgTGVhZ3VlcyBbIHt7cHVibGljTGVhZ3Vlcy5sZW5ndGh9fSBdPC9oND5cXG5cIiArXG4gICAgXCIgICAgPGhyPlxcblwiICtcbiAgICBcIiAgICA8ZGl2IGNsYXNzPVxcXCJpbnB1dC1ncm91cFxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgPGlucHV0IHR5cGU9XFxcInRleHRcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIHBsYWNlaG9sZGVyPVxcXCJGaWx0ZXIgcHVibGljIGxlYWd1ZXMuLi5cXFwiIG5nLW1vZGVsPVxcXCJwdWJsaWNRdWVyeVxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgPHNwYW4gY2xhc3M9XFxcImlucHV0LWdyb3VwLWJ0blxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgICAgIDxidXR0b24gY2xhc3M9XFxcImJ0biBidG4tZGVmYXVsdFxcXCIgdHlwZT1cXFwiYnV0dG9uXFxcIj48c3BhbiBjbGFzcz1cXFwiZ2x5cGhpY29uIGdseXBoaWNvbi1zZWFyY2hcXFwiPjwvc3Bhbj48L2J1dHRvbj5cXG5cIiArXG4gICAgXCIgICAgICA8L3NwYW4+XFxuXCIgK1xuICAgIFwiICAgIDwvZGl2PlxcblwiICtcbiAgICBcIiAgPC9kaXY+XFxuXCIgK1xuICAgIFwiPC9kaXY+XFxuXCIgK1xuICAgIFwiPGRpdiBjbGFzcz1cXFwic2Vhc29uLWxlYWd1ZXMgbGlzdC1ncm91cFxcXCI+XFxuXCIgK1xuICAgIFwiICA8YSBuZy1yZXBlYXQ9XFxcInB1YmxpY0xlYWd1ZSBpbiBwdWJsaWNMZWFndWVzIHwgZmlsdGVyOnB1YmxpY1F1ZXJ5OnN0cmljdFxcXCIgbmctY2xpY2s9XFxcInNob3dMZWFndWUocHVibGljTGVhZ3VlKVxcXCIgY2xhc3M9XFxcImxpc3QtZ3JvdXAtaXRlbVxcXCI+XFxuXCIgK1xuICAgIFwiICAgIDxkaXYgY2xhc3M9XFxcInJvd1xcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgPGRpdiBjbGFzcz1cXFwibGVhZ3VlLW5hbWUgY29sLXNtLTYgY29sLW1kLTZcXFwiPnt7cHVibGljTGVhZ3VlLm5hbWV9fTxicj48c3BhbiBjbGFzcz1cXFwidGVhbS1jb3VudCBsZWFndWUtY29tbWlzaFxcXCI+Q29tbWlzaDoge3twdWJsaWNMZWFndWUuY29tbWlzaF9uYW1lcy5qb2luKCcsICcpfX08L3NwYW4+PC9kaXY+XFxuXCIgK1xuICAgIFwiICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXNtLTYgY29sLW1kLTZcXFwiPlxcblwiICtcbiAgICBcIiAgICAgICAgPHNwYW4gY2xhc3M9XFxcInB1YmxpYy1sZWFndWUtbWV0YVxcXCI+e3twdWJsaWNMZWFndWUuZm9ybWF0fX08YnI+U3RhcnRzIHt7cHVibGljTGVhZ3VlLnN0YXJ0X3dlZWt9fTwvc3Bhbj5cXG5cIiArXG4gICAgXCIgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJiYWRnZVxcXCI+PHNwYW4gbmctc2hvdz1cXFwicHVibGljTGVhZ3VlLmVsaW1pbmF0aW9uXFxcIj57e3B1YmxpY0xlYWd1ZS5hbGl2ZV90ZWFtX2NvdW50fX0vPC9zcGFuPnt7cHVibGljTGVhZ3VlLnRlYW1fY291bnR9fSB0ZWFtPHNwYW4gbmctc2hvdz1cXFwicHVibGljTGVhZ3VlLnRlYW1fY291bnQgIT09IDFcXFwiPnM8L3NwYW4+PC9zcGFuPlxcblwiICtcbiAgICBcIiAgICAgIDwvZGl2PlxcblwiICtcbiAgICBcIiAgICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgIDwvYT5cXG5cIiArXG4gICAgXCI8L2Rpdj48ZGl2IGNsYXNzPVxcXCJzZWFzb24tbGVhZ3Vlcy1oZWFkZXItcm93IHJvd1xcXCI+XFxuXCIgK1xuICAgIFwiICA8ZGl2IGNsYXNzPVxcXCJjb2wtc20tMTIgY29sLW1kLTEyXFxcIj5cXG5cIiArXG4gICAgXCIgICAgPGg0PlByaXZhdGUgTGVhZ3VlcyBbIHt7cHJpdmF0ZUxlYWd1ZXMubGVuZ3RofX0gXTwvaDQ+XFxuXCIgK1xuICAgIFwiICAgIDxocj5cXG5cIiArXG4gICAgXCIgICAgPGRpdiBjbGFzcz1cXFwiaW5wdXQtZ3JvdXBcXFwiPlxcblwiICtcbiAgICBcIiAgICAgIDxpbnB1dCB0eXBlPVxcXCJ0ZXh0XFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBwbGFjZWhvbGRlcj1cXFwiRmlsdGVyIHByaXZhdGUgbGVhZ3Vlcy4uLlxcXCIgbmctbW9kZWw9XFxcInByaXZhdGVRdWVyeVxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgPHNwYW4gY2xhc3M9XFxcImlucHV0LWdyb3VwLWJ0blxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgICAgIDxidXR0b24gY2xhc3M9XFxcImJ0biBidG4tZGVmYXVsdFxcXCIgdHlwZT1cXFwiYnV0dG9uXFxcIj48c3BhbiBjbGFzcz1cXFwiZ2x5cGhpY29uIGdseXBoaWNvbi1zZWFyY2hcXFwiPjwvc3Bhbj48L2J1dHRvbj5cXG5cIiArXG4gICAgXCIgICAgICA8L3NwYW4+XFxuXCIgK1xuICAgIFwiICAgIDwvZGl2PlxcblwiICtcbiAgICBcIiAgPC9kaXY+XFxuXCIgK1xuICAgIFwiPC9kaXY+XFxuXCIgK1xuICAgIFwiPGRpdiBjbGFzcz1cXFwic2Vhc29uLWxlYWd1ZXMgbGlzdC1ncm91cFxcXCI+XFxuXCIgK1xuICAgIFwiICA8YSBuZy1yZXBlYXQ9XFxcInByaXZhdGVMZWFndWUgaW4gcHJpdmF0ZUxlYWd1ZXMgfCBmaWx0ZXI6cHJpdmF0ZVF1ZXJ5OnN0cmljdFxcXCIgbmctY2xpY2s9XFxcInNob3dMZWFndWUocHJpdmF0ZUxlYWd1ZSlcXFwiIGNsYXNzPVxcXCJsaXN0LWdyb3VwLWl0ZW1cXFwiPlxcblwiICtcbiAgICBcIiAgICA8ZGl2IGNsYXNzPVxcXCJyb3dcXFwiPlxcblwiICtcbiAgICBcIiAgICAgIDxkaXYgY2xhc3M9XFxcImxlYWd1ZS1uYW1lIGNvbC1zbS02IGNvbC1tZC02XFxcIj57e3ByaXZhdGVMZWFndWUubmFtZX19PGJyPjxzcGFuIGNsYXNzPVxcXCJ0ZWFtLWNvdW50IGxlYWd1ZS1jb21taXNoXFxcIj5Db21taXNoOiB7e3ByaXZhdGVMZWFndWUuY29tbWlzaF9uYW1lcy5qb2luKCcsICcpfX08L3NwYW4+PC9kaXY+XFxuXCIgK1xuICAgIFwiICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXNtLTYgY29sLW1kLTZcXFwiPlxcblwiICtcbiAgICBcIiAgICAgICAgPHNwYW4gY2xhc3M9XFxcInByaXZhdGUtbGVhZ3VlLW1ldGFcXFwiPnt7cHJpdmF0ZUxlYWd1ZS5mb3JtYXR9fTxicj5TdGFydHMge3twcml2YXRlTGVhZ3VlLnN0YXJ0X3dlZWt9fTwvc3Bhbj5cXG5cIiArXG4gICAgXCIgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJiYWRnZVxcXCI+PHNwYW4gbmctc2hvdz1cXFwicHJpdmF0ZUxlYWd1ZS5lbGltaW5hdGlvblxcXCI+e3twcml2YXRlTGVhZ3VlLmFsaXZlX3RlYW1fY291bnR9fS88L3NwYW4+e3twcml2YXRlTGVhZ3VlLnRlYW1fY291bnR9fSB0ZWFtPHNwYW4gbmctc2hvdz1cXFwicHJpdmF0ZUxlYWd1ZS50ZWFtX2NvdW50ICE9PSAxXFxcIj5zPC9zcGFuPjwvc3Bhbj5cXG5cIiArXG4gICAgXCIgICAgICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgICAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICA8L2E+XFxuXCIgK1xuICAgIFwiPC9kaXY+XCIpO1xufV0pO1xuXG5hbmd1bGFyLm1vZHVsZShcIm1vZHVsZXMvcHJpdmF0ZS9hZG1pbi9zZWFzb25zL3NlYXNvbi9lZGl0L2FkbWluLnNlYXNvbi5lZGl0LnRwbC5odG1sXCIsIFtdKS5ydW4oW1wiJHRlbXBsYXRlQ2FjaGVcIiwgZnVuY3Rpb24oJHRlbXBsYXRlQ2FjaGUpIHtcbiAgJHRlbXBsYXRlQ2FjaGUucHV0KFwibW9kdWxlcy9wcml2YXRlL2FkbWluL3NlYXNvbnMvc2Vhc29uL2VkaXQvYWRtaW4uc2Vhc29uLmVkaXQudHBsLmh0bWxcIixcbiAgICBcIjxkaXYgY2xhc3M9XFxcIm1vZGFsLWhlYWRlclxcXCI+XFxuXCIgK1xuICAgIFwiICA8YnV0dG9uIHR5cGU9XFxcImJ1dHRvblxcXCIgY2xhc3M9XFxcImNsb3NlXFxcIiBuZy1jbGljaz1cXFwiY2FuY2VsKClcXFwiPjxzcGFuIGFyaWEtaGlkZGVuPVxcXCJ0cnVlXFxcIj4mdGltZXM7PC9zcGFuPjxzcGFuIGNsYXNzPVxcXCJzci1vbmx5XFxcIj5DbG9zZTwvc3Bhbj48L2J1dHRvbj5cXG5cIiArXG4gICAgXCIgIDxoMyBjbGFzcz1cXFwibW9kYWwtdGl0bGVcXFwiPkVkaXQgU2Vhc29uPC9oMz5cXG5cIiArXG4gICAgXCI8L2Rpdj5cXG5cIiArXG4gICAgXCI8ZGl2IGNsYXNzPVxcXCJtb2RhbC1ib2R5XFxcIj5cXG5cIiArXG4gICAgXCIgIDxmb3JtIG5hbWU9XFxcInNlYXNvbkZvcm1cXFwiIHJvbGU9XFxcImZvcm1cXFwiIG5vdmFsaWRhdGU+XFxuXCIgK1xuICAgIFwiICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiIG5nLWNsYXNzPVxcXCJ7J2hhcy1lcnJvcic6IGhhc0Vycm9yKHNlYXNvbkZvcm0uc2Vhc29uTmFtZSksICdoYXMtZmVlZGJhY2snOiBoYXNFcnJvcihzZWFzb25Gb3JtLnNlYXNvbk5hbWUpfVxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgPGxhYmVsIGNsYXNzPVxcXCJjb250cm9sLWxhYmVsXFxcIiBmb3I9XFxcInNlYXNvbk5hbWVcXFwiPlNlYXNvbiBuYW1lOlxcblwiICtcbiAgICBcIiAgICAgICAgPHNtYWxsIG5nLXNob3c9XFxcImhhc1Byb3BlcnR5RXJyb3Ioc2Vhc29uRm9ybS5zZWFzb25OYW1lLCAncmVxdWlyZWQnKVxcXCI+WyBSZXF1aXJlZCBdPC9zbWFsbD5cXG5cIiArXG4gICAgXCIgICAgICAgIDxzbWFsbCBuZy1zaG93PVxcXCJoYXNQcm9wZXJ0eUVycm9yKHNlYXNvbkZvcm0uc2Vhc29uTmFtZSwgJ21heGxlbmd0aCcpXFxcIj5bIFRvbyBMb25nIF08L3NtYWxsPlxcblwiICtcbiAgICBcIiAgICAgIDwvbGFiZWw+XFxuXCIgK1xuICAgIFwiICAgICAgPGlucHV0IGlkPVxcXCJzZWFzb25OYW1lXFxcIiBuYW1lPVxcXCJzZWFzb25OYW1lXFxcIiB0eXBlPVxcXCJ0ZXh0XFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBuZy1tb2RlbD1cXFwic2Vhc29uRGF0YS5uYW1lXFxcIiBuZy1tYXhsZW5ndGg9XFxcIjIwXFxcIiByZXF1aXJlZD5cXG5cIiArXG4gICAgXCIgICAgICA8c3BhbiBuZy1zaG93PVxcXCJoYXNFcnJvcihzZWFzb25Gb3JtLnNlYXNvbk5hbWUpXFxcIiBjbGFzcz1cXFwiZ2x5cGhpY29uIGdseXBoaWNvbi1yZW1vdmUgZm9ybS1jb250cm9sLWZlZWRiYWNrXFxcIj48L3NwYW4+XFxuXCIgK1xuICAgIFwiICAgIDwvZGl2PlxcblwiICtcbiAgICBcIiAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIiBuZy1jbGFzcz1cXFwieydoYXMtZXJyb3InOiBoYXNFcnJvcihzZWFzb25Gb3JtLnNlYXNvblR5cGUpLCAnaGFzLWZlZWRiYWNrJzogaGFzRXJyb3Ioc2Vhc29uRm9ybS5zZWFzb25UeXBlKX1cXFwiPlxcblwiICtcbiAgICBcIiAgICAgIDxsYWJlbCBjbGFzcz1cXFwiY29udHJvbC1sYWJlbFxcXCIgZm9yPVxcXCJzZWFzb25UeXBlXFxcIj5TZWFzb24gdHlwZSAoTkJBLCBORkwsIGV0Yyk6XFxuXCIgK1xuICAgIFwiICAgICAgICA8c21hbGwgbmctc2hvdz1cXFwiaGFzUHJvcGVydHlFcnJvcihzZWFzb25Gb3JtLnNlYXNvblR5cGUsICdyZXF1aXJlZCcpXFxcIj5bIFJlcXVpcmVkIF08L3NtYWxsPlxcblwiICtcbiAgICBcIiAgICAgICAgPHNtYWxsIG5nLXNob3c9XFxcImhhc1Byb3BlcnR5RXJyb3Ioc2Vhc29uRm9ybS5zZWFzb25UeXBlLCAnbWF4bGVuZ3RoJylcXFwiPlsgVG9vIExvbmcgXTwvc21hbGw+XFxuXCIgK1xuICAgIFwiICAgICAgPC9sYWJlbD5cXG5cIiArXG4gICAgXCIgICAgICA8aW5wdXQgaWQ9XFxcInNlYXNvblR5cGVcXFwiIG5hbWU9XFxcInNlYXNvblR5cGVcXFwiIHR5cGU9XFxcInRleHRcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIG5nLW1vZGVsPVxcXCJzZWFzb25EYXRhLnNlYXNvbl90eXBlXFxcIiBuZy1tYXhsZW5ndGg9XFxcIjEwXFxcIiByZXF1aXJlZD5cXG5cIiArXG4gICAgXCIgICAgICA8c3BhbiBuZy1zaG93PVxcXCJoYXNFcnJvcihzZWFzb25Gb3JtLnNlYXNvblR5cGUpXFxcIiBjbGFzcz1cXFwiZ2x5cGhpY29uIGdseXBoaWNvbi1yZW1vdmUgZm9ybS1jb250cm9sLWZlZWRiYWNrXFxcIj48L3NwYW4+XFxuXCIgK1xuICAgIFwiICAgIDwvZGl2PlxcblwiICtcbiAgICBcIiAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj5cXG5cIiArXG4gICAgXCIgICAgICA8bGFiZWwgY2xhc3M9XFxcImNvbnRyb2wtbGFiZWxcXFwiPlN0YXJ0cyBBdCAoTG9jYWwgVGltZSk6PC9sYWJlbD5cXG5cIiArXG4gICAgXCIgICAgICA8ZGl2IGNsYXNzPVxcXCJkcm9wZG93blxcXCIgaXMtb3Blbj1cXFwic3RhcnRzQXREcm9wZG93bi5pc29wZW5cXFwiPlxcblwiICtcbiAgICBcIiAgICAgICAgPGEgY2xhc3M9XFxcImRyb3Bkb3duLXRvZ2dsZVxcXCIgcm9sZT1cXFwiYnV0dG9uXFxcIiBkYXRhLXRvZ2dsZT1cXFwiZHJvcGRvd25cXFwiIGRhdGEtdGFyZ2V0PVxcXCIjXFxcIiBocmVmPVxcXCIjXFxcIj5cXG5cIiArXG4gICAgXCIgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiaW5wdXQtZ3JvdXBcXFwiPlxcblwiICtcbiAgICBcIiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVxcXCJ0ZXh0XFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBmb3JtYXR0ZWQtZGF0ZSBkYXRhLW5nLW1vZGVsPVxcXCJzZWFzb25EYXRhLnN0YXJ0c19hdFxcXCIgbmctcmVxdWlyZWQ9XFxcInRydWVcXFwiIG5nLWRpc2FibGVkPVxcXCJ0cnVlXFxcIj5cXG5cIiArXG4gICAgXCIgICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwiaW5wdXQtZ3JvdXAtYWRkb25cXFwiPjxpIGNsYXNzPVxcXCJnbHlwaGljb24gZ2x5cGhpY29uLWNhbGVuZGFyXFxcIj48L2k+PC9zcGFuPlxcblwiICtcbiAgICBcIiAgICAgICAgICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgICAgICAgICAgPHNtYWxsPlNldCB0byBmdXR1cmUgaWYgc2Vhc29uIGlzIG5vdCByZWFkeSB0byBnbyBsaXZlIHlldDwvc21hbGw+XFxuXCIgK1xuICAgIFwiICAgICAgICA8L2E+XFxuXCIgK1xuICAgIFwiICAgICAgICA8dWwgY2xhc3M9XFxcImRyb3Bkb3duLW1lbnVcXFwiIHJvbGU9XFxcIm1lbnVcXFwiIGFyaWEtbGFiZWxsZWRieT1cXFwiZExhYmVsXFxcIj5cXG5cIiArXG4gICAgXCIgICAgICAgICAgPGRhdGV0aW1lcGlja2VyIGRhdGEtbmctbW9kZWw9XFxcInNlYXNvbkRhdGEuc3RhcnRzX2F0XFxcIiBkYXRhLW9uLXNldC10aW1lPVxcXCJjbG9zZVN0YXJ0c0F0KClcXFwiIGRhdGEtZGF0ZXRpbWVwaWNrZXItY29uZmlnPVxcXCJ7IG1pbnV0ZVN0ZXA6IDUgfVxcXCIvPlxcblwiICtcbiAgICBcIiAgICAgICAgPC91bD5cXG5cIiArXG4gICAgXCIgICAgICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgICAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPlxcblwiICtcbiAgICBcIiAgICAgIDxsYWJlbCBjbGFzcz1cXFwiY29udHJvbC1sYWJlbFxcXCI+RW5kcyBBdCAoTG9jYWwgVGltZSk6PC9sYWJlbD5cXG5cIiArXG4gICAgXCIgICAgICA8ZGl2IGNsYXNzPVxcXCJkcm9wZG93blxcXCIgaXMtb3Blbj1cXFwiZW5kc0F0RHJvcGRvd24uaXNvcGVuXFxcIj5cXG5cIiArXG4gICAgXCIgICAgICAgIDxhIGNsYXNzPVxcXCJkcm9wZG93bi10b2dnbGVcXFwiIHJvbGU9XFxcImJ1dHRvblxcXCIgZGF0YS10b2dnbGU9XFxcImRyb3Bkb3duXFxcIiBkYXRhLXRhcmdldD1cXFwiI1xcXCIgaHJlZj1cXFwiI1xcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImlucHV0LWdyb3VwXFxcIj5cXG5cIiArXG4gICAgXCIgICAgICAgICAgICA8aW5wdXQgdHlwZT1cXFwidGV4dFxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgZm9ybWF0dGVkLWRhdGUgZGF0YS1uZy1tb2RlbD1cXFwic2Vhc29uRGF0YS5lbmRzX2F0XFxcIiBuZy1yZXF1aXJlZD1cXFwidHJ1ZVxcXCIgbmctZGlzYWJsZWQ9XFxcInRydWVcXFwiPlxcblwiICtcbiAgICBcIiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJpbnB1dC1ncm91cC1hZGRvblxcXCI+PGkgY2xhc3M9XFxcImdseXBoaWNvbiBnbHlwaGljb24tY2FsZW5kYXJcXFwiPjwvaT48L3NwYW4+XFxuXCIgK1xuICAgIFwiICAgICAgICAgIDwvZGl2PlxcblwiICtcbiAgICBcIiAgICAgICAgICA8c21hbGw+U2hvdWxkIGJlIHRoZSBlbmQgZGF0ZSBvZiB0aGUgc2Vhc29uJ3MgbGFzdCB3ZWVrPC9zbWFsbD5cXG5cIiArXG4gICAgXCIgICAgICAgIDwvYT5cXG5cIiArXG4gICAgXCIgICAgICAgIDx1bCBjbGFzcz1cXFwiZHJvcGRvd24tbWVudVxcXCIgcm9sZT1cXFwibWVudVxcXCIgYXJpYS1sYWJlbGxlZGJ5PVxcXCJkTGFiZWxcXFwiPlxcblwiICtcbiAgICBcIiAgICAgICAgICA8ZGF0ZXRpbWVwaWNrZXIgZGF0YS1uZy1tb2RlbD1cXFwic2Vhc29uRGF0YS5lbmRzX2F0XFxcIiBkYXRhLW9uLXNldC10aW1lPVxcXCJjbG9zZUVuZHNBdCgpXFxcIiBkYXRhLWRhdGV0aW1lcGlja2VyLWNvbmZpZz1cXFwieyBtaW51dGVTdGVwOiA1IH1cXFwiLz5cXG5cIiArXG4gICAgXCIgICAgICAgIDwvdWw+XFxuXCIgK1xuICAgIFwiICAgICAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICAgIDwvZGl2PlxcblwiICtcbiAgICBcIiAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj5cXG5cIiArXG4gICAgXCIgICAgICA8aW5wdXQgaWQ9XFxcImFyY2hpdmVcXFwiIG5hbWU9XFxcImFyY2hpdmVcXFwiIHR5cGU9XFxcImNoZWNrYm94XFxcIiBuZy1tb2RlbD1cXFwic2Vhc29uRGF0YS5hcmNoaXZlXFxcIj4gQXJjaGl2ZSB0aGlzIHNlYXNvblxcblwiICtcbiAgICBcIiAgICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgIDwvZm9ybT5cXG5cIiArXG4gICAgXCI8L2Rpdj5cXG5cIiArXG4gICAgXCI8ZGl2IGNsYXNzPVxcXCJtb2RhbC1mb290ZXJcXFwiPlxcblwiICtcbiAgICBcIiAgPGJ1dHRvbiBjbGFzcz1cXFwiYnRuIGJ0bi1kZWZhdWx0XFxcIiBuZy1jbGljaz1cXFwiY2FuY2VsKClcXFwiPkNhbmNlbDwvYnV0dG9uPlxcblwiICtcbiAgICBcIiAgPGJ1dHRvbiBjbGFzcz1cXFwiYnRuIGJ0bi1wcmltYXJ5XFxcIiBuZy1kaXNhYmxlZD1cXFwic2Vhc29uRm9ybS4kaW52YWxpZFxcXCIgbmctY2xpY2s9XFxcInVwZGF0ZVNlYXNvbihzZWFzb25EYXRhKVxcXCI+VXBkYXRlPC9idXR0b24+XFxuXCIgK1xuICAgIFwiPC9kaXY+XCIpO1xufV0pO1xuXG5hbmd1bGFyLm1vZHVsZShcIm1vZHVsZXMvcHJpdmF0ZS9hZG1pbi9zZWFzb25zL3NlYXNvbi9uZXcvYWRtaW4uc2Vhc29uLm5ldy50cGwuaHRtbFwiLCBbXSkucnVuKFtcIiR0ZW1wbGF0ZUNhY2hlXCIsIGZ1bmN0aW9uKCR0ZW1wbGF0ZUNhY2hlKSB7XG4gICR0ZW1wbGF0ZUNhY2hlLnB1dChcIm1vZHVsZXMvcHJpdmF0ZS9hZG1pbi9zZWFzb25zL3NlYXNvbi9uZXcvYWRtaW4uc2Vhc29uLm5ldy50cGwuaHRtbFwiLFxuICAgIFwiPGRpdiBjbGFzcz1cXFwibW9kYWwtaGVhZGVyXFxcIj5cXG5cIiArXG4gICAgXCIgIDxidXR0b24gdHlwZT1cXFwiYnV0dG9uXFxcIiBjbGFzcz1cXFwiY2xvc2VcXFwiIG5nLWNsaWNrPVxcXCJjYW5jZWwoKVxcXCI+PHNwYW4gYXJpYS1oaWRkZW49XFxcInRydWVcXFwiPiZ0aW1lczs8L3NwYW4+PHNwYW4gY2xhc3M9XFxcInNyLW9ubHlcXFwiPkNsb3NlPC9zcGFuPjwvYnV0dG9uPlxcblwiICtcbiAgICBcIiAgPGgzIGNsYXNzPVxcXCJtb2RhbC10aXRsZVxcXCI+Q3JlYXRlIFNlYXNvbjwvaDM+XFxuXCIgK1xuICAgIFwiPC9kaXY+XFxuXCIgK1xuICAgIFwiPGRpdiBjbGFzcz1cXFwibW9kYWwtYm9keVxcXCI+XFxuXCIgK1xuICAgIFwiICA8Zm9ybSBuYW1lPVxcXCJuZXdTZWFzb25Gb3JtXFxcIiByb2xlPVxcXCJmb3JtXFxcIiBub3ZhbGlkYXRlPlxcblwiICtcbiAgICBcIiAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIiBuZy1jbGFzcz1cXFwieydoYXMtZXJyb3InOiBoYXNFcnJvcihuZXdTZWFzb25Gb3JtLnNlYXNvbk5hbWUpLCAnaGFzLWZlZWRiYWNrJzogaGFzRXJyb3IobmV3U2Vhc29uRm9ybS5zZWFzb25OYW1lKX1cXFwiPlxcblwiICtcbiAgICBcIiAgICAgIDxsYWJlbCBjbGFzcz1cXFwiY29udHJvbC1sYWJlbFxcXCIgZm9yPVxcXCJzZWFzb25OYW1lXFxcIj5TZWFzb24gbmFtZTpcXG5cIiArXG4gICAgXCIgICAgICAgIDxzbWFsbCBuZy1zaG93PVxcXCJoYXNQcm9wZXJ0eUVycm9yKG5ld1NlYXNvbkZvcm0uc2Vhc29uTmFtZSwgJ3JlcXVpcmVkJylcXFwiPlsgUmVxdWlyZWQgXTwvc21hbGw+XFxuXCIgK1xuICAgIFwiICAgICAgICA8c21hbGwgbmctc2hvdz1cXFwiaGFzUHJvcGVydHlFcnJvcihuZXdTZWFzb25Gb3JtLnNlYXNvbk5hbWUsICdtYXhsZW5ndGgnKVxcXCI+WyBUb28gTG9uZyBdPC9zbWFsbD5cXG5cIiArXG4gICAgXCIgICAgICA8L2xhYmVsPlxcblwiICtcbiAgICBcIiAgICAgIDxpbnB1dCBpZD1cXFwic2Vhc29uTmFtZVxcXCIgbmFtZT1cXFwic2Vhc29uTmFtZVxcXCIgdHlwZT1cXFwidGV4dFxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgbmctbW9kZWw9XFxcIm5ld1NlYXNvbkRhdGEubmFtZVxcXCIgbmctbWF4bGVuZ3RoPVxcXCIyMFxcXCIgcmVxdWlyZWQ+XFxuXCIgK1xuICAgIFwiICAgICAgPHNwYW4gbmctc2hvdz1cXFwiaGFzRXJyb3IobmV3U2Vhc29uRm9ybS5zZWFzb25OYW1lKVxcXCIgY2xhc3M9XFxcImdseXBoaWNvbiBnbHlwaGljb24tcmVtb3ZlIGZvcm0tY29udHJvbC1mZWVkYmFja1xcXCI+PC9zcGFuPlxcblwiICtcbiAgICBcIiAgICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCIgbmctY2xhc3M9XFxcInsnaGFzLWVycm9yJzogaGFzRXJyb3IobmV3U2Vhc29uRm9ybS5zZWFzb25UeXBlKSwgJ2hhcy1mZWVkYmFjayc6IGhhc0Vycm9yKG5ld1NlYXNvbkZvcm0uc2Vhc29uVHlwZSl9XFxcIj5cXG5cIiArXG4gICAgXCIgICAgICA8bGFiZWwgY2xhc3M9XFxcImNvbnRyb2wtbGFiZWxcXFwiIGZvcj1cXFwic2Vhc29uVHlwZVxcXCI+U2Vhc29uIHR5cGUgKE5CQSwgTkZMLCBldGMpOlxcblwiICtcbiAgICBcIiAgICAgICAgPHNtYWxsIG5nLXNob3c9XFxcImhhc1Byb3BlcnR5RXJyb3IobmV3U2Vhc29uRm9ybS5zZWFzb25UeXBlLCAncmVxdWlyZWQnKVxcXCI+WyBSZXF1aXJlZCBdPC9zbWFsbD5cXG5cIiArXG4gICAgXCIgICAgICAgIDxzbWFsbCBuZy1zaG93PVxcXCJoYXNQcm9wZXJ0eUVycm9yKG5ld1NlYXNvbkZvcm0uc2Vhc29uVHlwZSwgJ21heGxlbmd0aCcpXFxcIj5bIFRvbyBMb25nIF08L3NtYWxsPlxcblwiICtcbiAgICBcIiAgICAgIDwvbGFiZWw+XFxuXCIgK1xuICAgIFwiICAgICAgPGlucHV0IGlkPVxcXCJzZWFzb25UeXBlXFxcIiBuYW1lPVxcXCJzZWFzb25UeXBlXFxcIiB0eXBlPVxcXCJ0ZXh0XFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBuZy1tb2RlbD1cXFwibmV3U2Vhc29uRGF0YS5zZWFzb25fdHlwZVxcXCIgbmctbWF4bGVuZ3RoPVxcXCIxMFxcXCIgcmVxdWlyZWQ+XFxuXCIgK1xuICAgIFwiICAgICAgPHNwYW4gbmctc2hvdz1cXFwiaGFzRXJyb3IobmV3U2Vhc29uRm9ybS5zZWFzb25UeXBlKVxcXCIgY2xhc3M9XFxcImdseXBoaWNvbiBnbHlwaGljb24tcmVtb3ZlIGZvcm0tY29udHJvbC1mZWVkYmFja1xcXCI+PC9zcGFuPlxcblwiICtcbiAgICBcIiAgICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgPGxhYmVsIGNsYXNzPVxcXCJjb250cm9sLWxhYmVsXFxcIj5TdGFydHMgQXQgKExvY2FsIFRpbWUpOjwvbGFiZWw+XFxuXCIgK1xuICAgIFwiICAgICAgPGRpdiBjbGFzcz1cXFwiZHJvcGRvd25cXFwiIGlzLW9wZW49XFxcInN0YXJ0c0F0RHJvcGRvd24uaXNvcGVuXFxcIj5cXG5cIiArXG4gICAgXCIgICAgICAgIDxhIGNsYXNzPVxcXCJkcm9wZG93bi10b2dnbGVcXFwiIHJvbGU9XFxcImJ1dHRvblxcXCIgZGF0YS10b2dnbGU9XFxcImRyb3Bkb3duXFxcIiBkYXRhLXRhcmdldD1cXFwiI1xcXCIgaHJlZj1cXFwiI1xcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImlucHV0LWdyb3VwXFxcIj5cXG5cIiArXG4gICAgXCIgICAgICAgICAgICA8aW5wdXQgdHlwZT1cXFwidGV4dFxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgZm9ybWF0dGVkLWRhdGUgZGF0YS1uZy1tb2RlbD1cXFwibmV3U2Vhc29uRGF0YS5zdGFydHNfYXRcXFwiIG5nLXJlcXVpcmVkPVxcXCJ0cnVlXFxcIiBuZy1kaXNhYmxlZD1cXFwidHJ1ZVxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcImlucHV0LWdyb3VwLWFkZG9uXFxcIj48aSBjbGFzcz1cXFwiZ2x5cGhpY29uIGdseXBoaWNvbi1jYWxlbmRhclxcXCI+PC9pPjwvc3Bhbj5cXG5cIiArXG4gICAgXCIgICAgICAgICAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICAgICAgICAgIDxzbWFsbD5TZXQgdG8gZnV0dXJlIGlmIHNlYXNvbiBpcyBub3QgcmVhZHkgdG8gZ28gbGl2ZSB5ZXQ8L3NtYWxsPlxcblwiICtcbiAgICBcIiAgICAgICAgPC9hPlxcblwiICtcbiAgICBcIiAgICAgICAgPHVsIGNsYXNzPVxcXCJkcm9wZG93bi1tZW51XFxcIiByb2xlPVxcXCJtZW51XFxcIiBhcmlhLWxhYmVsbGVkYnk9XFxcImRMYWJlbFxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgICAgIDxkYXRldGltZXBpY2tlciBkYXRhLW5nLW1vZGVsPVxcXCJuZXdTZWFzb25EYXRhLnN0YXJ0c19hdFxcXCIgZGF0YS1vbi1zZXQtdGltZT1cXFwiY2xvc2VTdGFydHNBdCgpXFxcIiBkYXRhLWRhdGV0aW1lcGlja2VyLWNvbmZpZz1cXFwieyBtaW51dGVTdGVwOiA1IH1cXFwiLz5cXG5cIiArXG4gICAgXCIgICAgICAgIDwvdWw+XFxuXCIgK1xuICAgIFwiICAgICAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICAgIDwvZGl2PlxcblwiICtcbiAgICBcIiAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj5cXG5cIiArXG4gICAgXCIgICAgICA8bGFiZWwgY2xhc3M9XFxcImNvbnRyb2wtbGFiZWxcXFwiPkVuZHMgQXQgKExvY2FsIFRpbWUpOjwvbGFiZWw+XFxuXCIgK1xuICAgIFwiICAgICAgPGRpdiBjbGFzcz1cXFwiZHJvcGRvd25cXFwiIGlzLW9wZW49XFxcImVuZHNBdERyb3Bkb3duLmlzb3BlblxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgICA8YSBjbGFzcz1cXFwiZHJvcGRvd24tdG9nZ2xlXFxcIiByb2xlPVxcXCJidXR0b25cXFwiIGRhdGEtdG9nZ2xlPVxcXCJkcm9wZG93blxcXCIgZGF0YS10YXJnZXQ9XFxcIiNcXFwiIGhyZWY9XFxcIiNcXFwiPlxcblwiICtcbiAgICBcIiAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJpbnB1dC1ncm91cFxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgICAgICAgPGlucHV0IHR5cGU9XFxcInRleHRcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIGZvcm1hdHRlZC1kYXRlIGRhdGEtbmctbW9kZWw9XFxcIm5ld1NlYXNvbkRhdGEuZW5kc19hdFxcXCIgbmctcmVxdWlyZWQ9XFxcInRydWVcXFwiIG5nLWRpc2FibGVkPVxcXCJ0cnVlXFxcIj5cXG5cIiArXG4gICAgXCIgICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwiaW5wdXQtZ3JvdXAtYWRkb25cXFwiPjxpIGNsYXNzPVxcXCJnbHlwaGljb24gZ2x5cGhpY29uLWNhbGVuZGFyXFxcIj48L2k+PC9zcGFuPlxcblwiICtcbiAgICBcIiAgICAgICAgICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgICAgICAgICAgPHNtYWxsPlNob3VsZCBiZSB0aGUgZW5kIGRhdGUgb2YgdGhlIHNlYXNvbidzIGxhc3Qgd2Vlazwvc21hbGw+XFxuXCIgK1xuICAgIFwiICAgICAgICA8L2E+XFxuXCIgK1xuICAgIFwiICAgICAgICA8dWwgY2xhc3M9XFxcImRyb3Bkb3duLW1lbnVcXFwiIHJvbGU9XFxcIm1lbnVcXFwiIGFyaWEtbGFiZWxsZWRieT1cXFwiZExhYmVsXFxcIj5cXG5cIiArXG4gICAgXCIgICAgICAgICAgPGRhdGV0aW1lcGlja2VyIGRhdGEtbmctbW9kZWw9XFxcIm5ld1NlYXNvbkRhdGEuZW5kc19hdFxcXCIgZGF0YS1vbi1zZXQtdGltZT1cXFwiY2xvc2VFbmRzQXQoKVxcXCIgZGF0YS1kYXRldGltZXBpY2tlci1jb25maWc9XFxcInsgbWludXRlU3RlcDogNSB9XFxcIi8+XFxuXCIgK1xuICAgIFwiICAgICAgICA8L3VsPlxcblwiICtcbiAgICBcIiAgICAgIDwvZGl2PlxcblwiICtcbiAgICBcIiAgICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgIDwvZm9ybT5cXG5cIiArXG4gICAgXCI8L2Rpdj5cXG5cIiArXG4gICAgXCI8ZGl2IGNsYXNzPVxcXCJtb2RhbC1mb290ZXJcXFwiPlxcblwiICtcbiAgICBcIiAgPGJ1dHRvbiBjbGFzcz1cXFwiYnRuIGJ0bi1kZWZhdWx0XFxcIiBuZy1jbGljaz1cXFwiY2FuY2VsKClcXFwiPkNhbmNlbDwvYnV0dG9uPlxcblwiICtcbiAgICBcIiAgPGJ1dHRvbiBjbGFzcz1cXFwiYnRuIGJ0bi1wcmltYXJ5XFxcIiBuZy1kaXNhYmxlZD1cXFwibmV3U2Vhc29uRm9ybS4kaW52YWxpZFxcXCIgbmctY2xpY2s9XFxcImNyZWF0ZVNlYXNvbihuZXdTZWFzb25EYXRhKVxcXCI+Q3JlYXRlPC9idXR0b24+XFxuXCIgK1xuICAgIFwiPC9kaXY+XCIpO1xufV0pO1xuXG5hbmd1bGFyLm1vZHVsZShcIm1vZHVsZXMvcHJpdmF0ZS9hZG1pbi9zcXVhZHMvYWRtaW4uc3F1YWRzLnRwbC5odG1sXCIsIFtdKS5ydW4oW1wiJHRlbXBsYXRlQ2FjaGVcIiwgZnVuY3Rpb24oJHRlbXBsYXRlQ2FjaGUpIHtcbiAgJHRlbXBsYXRlQ2FjaGUucHV0KFwibW9kdWxlcy9wcml2YXRlL2FkbWluL3NxdWFkcy9hZG1pbi5zcXVhZHMudHBsLmh0bWxcIixcbiAgICBcIjxkaXYgY2xhc3M9XFxcInNxdWFkcy1oZWFkZXItcm93IHJvd1xcXCI+XFxuXCIgK1xuICAgIFwiICA8ZGl2IGNsYXNzPVxcXCJjb2wtc20tOSBjb2wtbWQtOVxcXCI+XFxuXCIgK1xuICAgIFwiICAgIDxoMyBjbGFzcz1cXFwic3F1YWRzLWhlYWRlclxcXCI+TWFuYWdlIFNxdWFkczwvaDM+XFxuXCIgK1xuICAgIFwiICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgIDxkaXYgY2xhc3M9XFxcImNvbC1zbS0zIGNvbC1tZC0zXFxcIj5cXG5cIiArXG4gICAgXCIgICAgPGRpdiBjbGFzcz1cXFwic3F1YWRzLWJ0bi1ncm91cFxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgPGJ1dHRvbiB0eXBlPVxcXCJidXR0b25cXFwiIGNsYXNzPVxcXCJjcmVhdGUtc3F1YWQtYnRuIGJ0biBidG4tcHJpbWFyeVxcXCIgbmctY2xpY2s9XFxcImNyZWF0ZVNxdWFkKClcXFwiPkNyZWF0ZSBTcXVhZDwvYnV0dG9uPlxcblwiICtcbiAgICBcIiAgICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgIDwvZGl2PlxcblwiICtcbiAgICBcIjwvZGl2PlxcblwiICtcbiAgICBcIjxocj5cXG5cIiArXG4gICAgXCI8ZGl2IGNsYXNzPVxcXCJzcXVhZHMtdGFic1xcXCI+XFxuXCIgK1xuICAgIFwiICA8dWwgY2xhc3M9XFxcIm5hdiBuYXYtdGFic1xcXCI+XFxuXCIgK1xuICAgIFwiICAgIDxsaSBjbGFzcz1cXFwiYWN0aXZlXFxcIj48YT5TcXVhZHMgWyB7eyhzcXVhZHMgfCBmaWx0ZXI6c2VhcmNoOnN0cmljdCkubGVuZ3RofX0gXTwvYT48L2xpPlxcblwiICtcbiAgICBcIiAgPC91bD5cXG5cIiArXG4gICAgXCIgIDxkaXYgY2xhc3M9XFxcInNxdWFkLXR5cGVzXFxcIj5cXG5cIiArXG4gICAgXCIgICAgPHNlbGVjdCBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBuZy1tb2RlbD1cXFwic2VsZWN0ZWRTcXVhZFR5cGVcXFwiIG5nLW9wdGlvbnM9XFxcInNxdWFkVHlwZSBhcyBzcXVhZFR5cGUgZm9yIHNxdWFkVHlwZSBpbiBzcXVhZFR5cGVzXFxcIj5cXG5cIiArXG4gICAgXCIgICAgICA8b3B0aW9uIHZhbHVlPVxcXCJcXFwiPkFsbCBTcXVhZCBUeXBlczwvb3B0aW9uPlxcblwiICtcbiAgICBcIiAgICA8L3NlbGVjdD5cXG5cIiArXG4gICAgXCIgIDwvZGl2PlxcblwiICtcbiAgICBcIiAgPGRpdiBjbGFzcz1cXFwiaW5wdXQtZ3JvdXAgY3VzdG9tLXNlYXJjaC1mb3JtXFxcIj5cXG5cIiArXG4gICAgXCIgICAgPGlucHV0IHR5cGU9XFxcInRleHRcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIHBsYWNlaG9sZGVyPVxcXCJTZWFyY2guLi5cXFwiIG5nLW1vZGVsPVxcXCJxdWVyeVxcXCI+XFxuXCIgK1xuICAgIFwiICAgIDxzcGFuIGNsYXNzPVxcXCJpbnB1dC1ncm91cC1idG5cXFwiPlxcblwiICtcbiAgICBcIiAgICAgIDxidXR0b24gY2xhc3M9XFxcImJ0biBidG4tZGVmYXVsdFxcXCIgdHlwZT1cXFwiYnV0dG9uXFxcIj48c3BhbiBjbGFzcz1cXFwiZ2x5cGhpY29uIGdseXBoaWNvbi1zZWFyY2hcXFwiPjwvc3Bhbj48L2J1dHRvbj5cXG5cIiArXG4gICAgXCIgICAgPC9zcGFuPlxcblwiICtcbiAgICBcIiAgPC9kaXY+XFxuXCIgK1xuICAgIFwiPC9kaXY+XFxuXCIgK1xuICAgIFwiPGRpdiBjbGFzcz1cXFwic3F1YWRzIGxpc3QtZ3JvdXBcXFwiPlxcblwiICtcbiAgICBcIiAgPGEgbmctcmVwZWF0PVxcXCJzcXVhZCBpbiBzcXVhZHMgfCBmaWx0ZXI6c2VhcmNoOnN0cmljdFxcXCIgbmctY2xpY2s9XFxcImVkaXRTcXVhZChzcXVhZClcXFwiIGNsYXNzPVxcXCJsaXN0LWdyb3VwLWl0ZW1cXFwiPlxcblwiICtcbiAgICBcIiAgICA8ZGl2IGNsYXNzPVxcXCJyb3dcXFwiPlxcblwiICtcbiAgICBcIiAgICAgIDxkaXYgY2xhc3M9XFxcInNxdWFkLWRpc3BsYXktbmFtZSBjb2wtc20tNiBjb2wtbWQtNlxcXCI+e3tzcXVhZC5uYW1lfX0gWyB7e3NxdWFkLmFiYnJldn19IF08YnI+PHNwYW4gY2xhc3M9XFxcInNxdWFkLXJlY29yZFxcXCI+e3tzcXVhZC5yZWNvcmR9fTwvc3Bhbj48L2Rpdj5cXG5cIiArXG4gICAgXCIgICAgICA8ZGl2IGNsYXNzPVxcXCJzcXVhZC10eXBlIGNvbC1zbS02IGNvbC1tZC02XFxcIj57e3NxdWFkLnNxdWFkX3R5cGV9fTxicj5TZWVkOiB7e3NxdWFkLnNlZWR9fTwvZGl2PlxcblwiICtcbiAgICBcIiAgICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgIDwvYT5cXG5cIiArXG4gICAgXCI8L2Rpdj5cIik7XG59XSk7XG5cbmFuZ3VsYXIubW9kdWxlKFwibW9kdWxlcy9wcml2YXRlL2FkbWluL3NxdWFkcy9lZGl0L2FkbWluLnNxdWFkcy5lZGl0LnRwbC5odG1sXCIsIFtdKS5ydW4oW1wiJHRlbXBsYXRlQ2FjaGVcIiwgZnVuY3Rpb24oJHRlbXBsYXRlQ2FjaGUpIHtcbiAgJHRlbXBsYXRlQ2FjaGUucHV0KFwibW9kdWxlcy9wcml2YXRlL2FkbWluL3NxdWFkcy9lZGl0L2FkbWluLnNxdWFkcy5lZGl0LnRwbC5odG1sXCIsXG4gICAgXCI8ZGl2IGNsYXNzPVxcXCJtb2RhbC1oZWFkZXJcXFwiPlxcblwiICtcbiAgICBcIiAgPGJ1dHRvbiB0eXBlPVxcXCJidXR0b25cXFwiIGNsYXNzPVxcXCJjbG9zZVxcXCIgbmctY2xpY2s9XFxcImNhbmNlbCgpXFxcIj48c3BhbiBhcmlhLWhpZGRlbj1cXFwidHJ1ZVxcXCI+JnRpbWVzOzwvc3Bhbj48c3BhbiBjbGFzcz1cXFwic3Itb25seVxcXCI+Q2xvc2U8L3NwYW4+PC9idXR0b24+XFxuXCIgK1xuICAgIFwiICA8aDMgY2xhc3M9XFxcIm1vZGFsLXRpdGxlXFxcIj5FZGl0IFNxdWFkPC9oMz5cXG5cIiArXG4gICAgXCI8L2Rpdj5cXG5cIiArXG4gICAgXCI8ZGl2IGNsYXNzPVxcXCJtb2RhbC1ib2R5XFxcIj5cXG5cIiArXG4gICAgXCIgIDxmb3JtIG5hbWU9XFxcInNxdWFkRm9ybVxcXCIgcm9sZT1cXFwiZm9ybVxcXCIgbm92YWxpZGF0ZT5cXG5cIiArXG4gICAgXCIgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCIgbmctY2xhc3M9XFxcInsnaGFzLWVycm9yJzogaGFzRXJyb3Ioc3F1YWRGb3JtLnNxdWFkTmFtZSksICdoYXMtZmVlZGJhY2snOiBoYXNFcnJvcihzcXVhZEZvcm0uc3F1YWROYW1lKX1cXFwiPlxcblwiICtcbiAgICBcIiAgICAgIDxsYWJlbCBjbGFzcz1cXFwiY29udHJvbC1sYWJlbFxcXCIgZm9yPVxcXCJzcXVhZE5hbWVcXFwiPlNxdWFkIG5hbWVcXG5cIiArXG4gICAgXCIgICAgICAgIDxzbWFsbCBuZy1zaG93PVxcXCJoYXNQcm9wZXJ0eUVycm9yKHNxdWFkRm9ybS5zcXVhZE5hbWUsICdyZXF1aXJlZCcpXFxcIj5bIFJlcXVpcmVkIF08L3NtYWxsPlxcblwiICtcbiAgICBcIiAgICAgICAgPHNtYWxsIG5nLXNob3c9XFxcImhhc1Byb3BlcnR5RXJyb3Ioc3F1YWRGb3JtLnNxdWFkTmFtZSwgJ21heGxlbmd0aCcpXFxcIj5bIFRvbyBMb25nIF08L3NtYWxsPlxcblwiICtcbiAgICBcIiAgICAgIDwvbGFiZWw+XFxuXCIgK1xuICAgIFwiICAgICAgPGlucHV0IGlkPVxcXCJzcXVhZE5hbWVcXFwiIG5hbWU9XFxcInNxdWFkTmFtZVxcXCIgdHlwZT1cXFwidGV4dFxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgbmctbW9kZWw9XFxcInNxdWFkRGF0YS5uYW1lXFxcIiBuZy1tYXhsZW5ndGg9XFxcIjMwXFxcIiByZXF1aXJlZD5cXG5cIiArXG4gICAgXCIgICAgICA8c3BhbiBuZy1zaG93PVxcXCJoYXNFcnJvcihzcXVhZEZvcm0uc3F1YWROYW1lKVxcXCIgY2xhc3M9XFxcImdseXBoaWNvbiBnbHlwaGljb24tcmVtb3ZlIGZvcm0tY29udHJvbC1mZWVkYmFja1xcXCI+PC9zcGFuPlxcblwiICtcbiAgICBcIiAgICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCIgbmctY2xhc3M9XFxcInsnaGFzLWVycm9yJzogaGFzRXJyb3Ioc3F1YWRGb3JtLnNxdWFkU2hvcnQpLCAnaGFzLWZlZWRiYWNrJzogaGFzRXJyb3Ioc3F1YWRGb3JtLnNxdWFkU2hvcnQpfVxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgPGxhYmVsIGNsYXNzPVxcXCJjb250cm9sLWxhYmVsXFxcIiBmb3I9XFxcInNxdWFkU2hvcnRcXFwiPlNob3J0IE5hbWVcXG5cIiArXG4gICAgXCIgICAgICAgIDxzbWFsbCBuZy1zaG93PVxcXCJoYXNQcm9wZXJ0eUVycm9yKHNxdWFkRm9ybS5zcXVhZFNob3J0LCAncmVxdWlyZWQnKVxcXCI+WyBSZXF1aXJlZCBdPC9zbWFsbD5cXG5cIiArXG4gICAgXCIgICAgICAgIDxzbWFsbCBuZy1zaG93PVxcXCJoYXNQcm9wZXJ0eUVycm9yKHNxdWFkRm9ybS5zcXVhZFNob3J0LCAnbWF4bGVuZ3RoJylcXFwiPlsgVG9vIExvbmcgXTwvc21hbGw+XFxuXCIgK1xuICAgIFwiICAgICAgPC9sYWJlbD5cXG5cIiArXG4gICAgXCIgICAgICA8aW5wdXQgaWQ9XFxcInNxdWFkU2hvcnRcXFwiIG5hbWU9XFxcInNxdWFkU2hvcnRcXFwiIHR5cGU9XFxcInRleHRcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIG5nLW1vZGVsPVxcXCJzcXVhZERhdGEuc2hvcnRcXFwiIG5nLW1heGxlbmd0aD1cXFwiMzBcXFwiIHJlcXVpcmVkPlxcblwiICtcbiAgICBcIiAgICAgIDxzcGFuIG5nLXNob3c9XFxcImhhc0Vycm9yKHNxdWFkRm9ybS5zcXVhZFNob3J0KVxcXCIgY2xhc3M9XFxcImdseXBoaWNvbiBnbHlwaGljb24tcmVtb3ZlIGZvcm0tY29udHJvbC1mZWVkYmFja1xcXCI+PC9zcGFuPlxcblwiICtcbiAgICBcIiAgICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCIgbmctY2xhc3M9XFxcInsnaGFzLWVycm9yJzogaGFzRXJyb3Ioc3F1YWRGb3JtLnNxdWFkQWJicmV2KSwgJ2hhcy1mZWVkYmFjayc6IGhhc0Vycm9yKHNxdWFkRm9ybS5zcXVhZEFiYnJldil9XFxcIj5cXG5cIiArXG4gICAgXCIgICAgICA8bGFiZWwgY2xhc3M9XFxcImNvbnRyb2wtbGFiZWxcXFwiIGZvcj1cXFwic3F1YWRBYmJyZXZcXFwiPkFiYnJldmlhdGlvblxcblwiICtcbiAgICBcIiAgICAgICAgPHNtYWxsIG5nLXNob3c9XFxcImhhc1Byb3BlcnR5RXJyb3Ioc3F1YWRGb3JtLnNxdWFkQWJicmV2LCAncmVxdWlyZWQnKVxcXCI+WyBSZXF1aXJlZCBdPC9zbWFsbD5cXG5cIiArXG4gICAgXCIgICAgICAgIDxzbWFsbCBuZy1zaG93PVxcXCJoYXNQcm9wZXJ0eUVycm9yKHNxdWFkRm9ybS5zcXVhZEFiYnJldiwgJ21heGxlbmd0aCcpXFxcIj5bIFRvbyBMb25nIF08L3NtYWxsPlxcblwiICtcbiAgICBcIiAgICAgIDwvbGFiZWw+XFxuXCIgK1xuICAgIFwiICAgICAgPGlucHV0IGlkPVxcXCJzcXVhZEFiYnJldlxcXCIgbmFtZT1cXFwic3F1YWRBYmJyZXZcXFwiIHR5cGU9XFxcInRleHRcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIG5nLW1vZGVsPVxcXCJzcXVhZERhdGEuYWJicmV2XFxcIiBuZy1tYXhsZW5ndGg9XFxcIjMwXFxcIiByZXF1aXJlZD5cXG5cIiArXG4gICAgXCIgICAgICA8c3BhbiBuZy1zaG93PVxcXCJoYXNFcnJvcihzcXVhZEZvcm0uc3F1YWRBYmJyZXYpXFxcIiBjbGFzcz1cXFwiZ2x5cGhpY29uIGdseXBoaWNvbi1yZW1vdmUgZm9ybS1jb250cm9sLWZlZWRiYWNrXFxcIj48L3NwYW4+XFxuXCIgK1xuICAgIFwiICAgIDwvZGl2PlxcblwiICtcbiAgICBcIiAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIiBuZy1jbGFzcz1cXFwieydoYXMtZXJyb3InOiBoYXNFcnJvcihzcXVhZEZvcm0uc3F1YWRUeXBlKSwgJ2hhcy1mZWVkYmFjayc6IGhhc0Vycm9yKHNxdWFkRm9ybS5zcXVhZFR5cGUpfVxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgPGxhYmVsIGNsYXNzPVxcXCJjb250cm9sLWxhYmVsXFxcIiBmb3I9XFxcInNxdWFkVHlwZVxcXCI+VHlwZSAoTkJBLCBORkwsIGV0YylcXG5cIiArXG4gICAgXCIgICAgICAgIDxzbWFsbCBuZy1zaG93PVxcXCJoYXNQcm9wZXJ0eUVycm9yKHNxdWFkRm9ybS5zcXVhZFR5cGUsICdyZXF1aXJlZCcpXFxcIj5bIFJlcXVpcmVkIF08L3NtYWxsPlxcblwiICtcbiAgICBcIiAgICAgICAgPHNtYWxsIG5nLXNob3c9XFxcImhhc1Byb3BlcnR5RXJyb3Ioc3F1YWRGb3JtLnNxdWFkVHlwZSwgJ21heGxlbmd0aCcpXFxcIj5bIFRvbyBMb25nIF08L3NtYWxsPlxcblwiICtcbiAgICBcIiAgICAgIDwvbGFiZWw+XFxuXCIgK1xuICAgIFwiICAgICAgPGlucHV0IGlkPVxcXCJzcXVhZFR5cGVcXFwiIG5hbWU9XFxcInNxdWFkVHlwZVxcXCIgdHlwZT1cXFwidGV4dFxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgbmctbW9kZWw9XFxcInNxdWFkRGF0YS5zcXVhZF90eXBlXFxcIiBuZy1tYXhsZW5ndGg9XFxcIjMwXFxcIiByZXF1aXJlZD5cXG5cIiArXG4gICAgXCIgICAgICA8c3BhbiBuZy1zaG93PVxcXCJoYXNFcnJvcihzcXVhZEZvcm0uc3F1YWRUeXBlKVxcXCIgY2xhc3M9XFxcImdseXBoaWNvbiBnbHlwaGljb24tcmVtb3ZlIGZvcm0tY29udHJvbC1mZWVkYmFja1xcXCI+PC9zcGFuPlxcblwiICtcbiAgICBcIiAgICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCIgbmctY2xhc3M9XFxcInsnaGFzLWVycm9yJzogaGFzRXJyb3Ioc3F1YWRGb3JtLndpbnMpLCAnaGFzLWZlZWRiYWNrJzogaGFzRXJyb3Ioc3F1YWRGb3JtLndpbnMpfVxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgPGxhYmVsIGNsYXNzPVxcXCJjb250cm9sLWxhYmVsXFxcIiBmb3I9XFxcIndpbnNcXFwiPldpbnNcXG5cIiArXG4gICAgXCIgICAgICAgIDxzbWFsbCBuZy1zaG93PVxcXCJoYXNQcm9wZXJ0eUVycm9yKHNxdWFkRm9ybS53aW5zLCAncmVxdWlyZWQnKVxcXCI+WyBOdW1iZXIgUmVxdWlyZWQgXTwvc21hbGw+XFxuXCIgK1xuICAgIFwiICAgICAgICA8c21hbGwgbmctc2hvdz1cXFwiaGFzUHJvcGVydHlFcnJvcihzcXVhZEZvcm0ud2lucywgJ21pbicpXFxcIj5bIFplcm8gb3IgZ3JlYXRlciBdPC9zbWFsbD5cXG5cIiArXG4gICAgXCIgICAgICA8L2xhYmVsPlxcblwiICtcbiAgICBcIiAgICAgIDxpbnB1dCBpZD1cXFwid2luc1xcXCIgbmFtZT1cXFwid2luc1xcXCIgdHlwZT1cXFwibnVtYmVyXFxcIiBwbGFjZWhvbGRlcj1cXFwiR3JlYXRlciB0aGFuIHplcm9cXFwiIG1pbj1cXFwiMFxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgbmctbW9kZWw9XFxcInNxdWFkRGF0YS53aW5zXFxcIiBzZWxlY3Qtb24tY2xpY2sgcmVxdWlyZWQ+XFxuXCIgK1xuICAgIFwiICAgICAgPHNwYW4gbmctc2hvdz1cXFwiaGFzRXJyb3Ioc3F1YWRGb3JtLndpbnMpXFxcIiBjbGFzcz1cXFwiZ2x5cGhpY29uIGdseXBoaWNvbi1yZW1vdmUgZm9ybS1jb250cm9sLWZlZWRiYWNrXFxcIj48L3NwYW4+XFxuXCIgK1xuICAgIFwiICAgIDwvZGl2PlxcblwiICtcbiAgICBcIiAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIiBuZy1jbGFzcz1cXFwieydoYXMtZXJyb3InOiBoYXNFcnJvcihzcXVhZEZvcm0ubG9zc2VzKSwgJ2hhcy1mZWVkYmFjayc6IGhhc0Vycm9yKHNxdWFkRm9ybS5sb3NzZXMpfVxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgPGxhYmVsIGNsYXNzPVxcXCJjb250cm9sLWxhYmVsXFxcIiBmb3I9XFxcIndpbnNcXFwiPkxvc3Nlc1xcblwiICtcbiAgICBcIiAgICAgICAgPHNtYWxsIG5nLXNob3c9XFxcImhhc1Byb3BlcnR5RXJyb3Ioc3F1YWRGb3JtLmxvc3NlcywgJ3JlcXVpcmVkJylcXFwiPlsgTnVtYmVyIFJlcXVpcmVkIF08L3NtYWxsPlxcblwiICtcbiAgICBcIiAgICAgICAgPHNtYWxsIG5nLXNob3c9XFxcImhhc1Byb3BlcnR5RXJyb3Ioc3F1YWRGb3JtLmxvc3NlcywgJ21pbicpXFxcIj5bIFplcm8gb3IgZ3JlYXRlciBdPC9zbWFsbD5cXG5cIiArXG4gICAgXCIgICAgICA8L2xhYmVsPlxcblwiICtcbiAgICBcIiAgICAgIDxpbnB1dCBpZD1cXFwibG9zc2VzXFxcIiBuYW1lPVxcXCJsb3NzZXNcXFwiIHR5cGU9XFxcIm51bWJlclxcXCIgcGxhY2Vob2xkZXI9XFxcIkdyZWF0ZXIgdGhhbiB6ZXJvXFxcIiBtaW49XFxcIjBcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIG5nLW1vZGVsPVxcXCJzcXVhZERhdGEubG9zc2VzXFxcIiBzZWxlY3Qtb24tY2xpY2sgcmVxdWlyZWQ+XFxuXCIgK1xuICAgIFwiICAgICAgPHNwYW4gbmctc2hvdz1cXFwiaGFzRXJyb3Ioc3F1YWRGb3JtLmxvc3NlcylcXFwiIGNsYXNzPVxcXCJnbHlwaGljb24gZ2x5cGhpY29uLXJlbW92ZSBmb3JtLWNvbnRyb2wtZmVlZGJhY2tcXFwiPjwvc3Bhbj5cXG5cIiArXG4gICAgXCIgICAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiIG5nLWNsYXNzPVxcXCJ7J2hhcy1lcnJvcic6IGhhc0Vycm9yKHNxdWFkRm9ybS50aWVzKSwgJ2hhcy1mZWVkYmFjayc6IGhhc0Vycm9yKHNxdWFkRm9ybS50aWVzKX1cXFwiPlxcblwiICtcbiAgICBcIiAgICAgIDxsYWJlbCBjbGFzcz1cXFwiY29udHJvbC1sYWJlbFxcXCIgZm9yPVxcXCJ0aWVzXFxcIj5UaWVzXFxuXCIgK1xuICAgIFwiICAgICAgICA8c21hbGwgbmctc2hvdz1cXFwiaGFzUHJvcGVydHlFcnJvcihzcXVhZEZvcm0udGllcywgJ3JlcXVpcmVkJylcXFwiPlsgTnVtYmVyIFJlcXVpcmVkIF08L3NtYWxsPlxcblwiICtcbiAgICBcIiAgICAgICAgPHNtYWxsIG5nLXNob3c9XFxcImhhc1Byb3BlcnR5RXJyb3Ioc3F1YWRGb3JtLnRpZXMsICdtaW4nKVxcXCI+WyBaZXJvIG9yIGdyZWF0ZXIgXTwvc21hbGw+XFxuXCIgK1xuICAgIFwiICAgICAgPC9sYWJlbD5cXG5cIiArXG4gICAgXCIgICAgICA8aW5wdXQgaWQ9XFxcInRpZXNcXFwiIG5hbWU9XFxcInRpZXNcXFwiIHR5cGU9XFxcIm51bWJlclxcXCIgcGxhY2Vob2xkZXI9XFxcIkdyZWF0ZXIgdGhhbiB6ZXJvXFxcIiBtaW49XFxcIjBcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIG5nLW1vZGVsPVxcXCJzcXVhZERhdGEudGllc1xcXCIgc2VsZWN0LW9uLWNsaWNrIHJlcXVpcmVkPlxcblwiICtcbiAgICBcIiAgICAgIDxzcGFuIG5nLXNob3c9XFxcImhhc0Vycm9yKHNxdWFkRm9ybS50aWVzKVxcXCIgY2xhc3M9XFxcImdseXBoaWNvbiBnbHlwaGljb24tcmVtb3ZlIGZvcm0tY29udHJvbC1mZWVkYmFja1xcXCI+PC9zcGFuPlxcblwiICtcbiAgICBcIiAgICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCIgbmctY2xhc3M9XFxcInsnaGFzLWVycm9yJzogaGFzRXJyb3Ioc3F1YWRGb3JtLnNlZWQpLCAnaGFzLWZlZWRiYWNrJzogaGFzRXJyb3Ioc3F1YWRGb3JtLnNlZWQpfVxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgPGxhYmVsIGNsYXNzPVxcXCJjb250cm9sLWxhYmVsXFxcIiBmb3I9XFxcInNlZWRcXFwiPlNlZWRcXG5cIiArXG4gICAgXCIgICAgICAgIDxzbWFsbCBuZy1zaG93PVxcXCJoYXNQcm9wZXJ0eUVycm9yKHNxdWFkRm9ybS5zZWVkLCAncmVxdWlyZWQnKVxcXCI+WyBOdW1iZXIgUmVxdWlyZWQgXTwvc21hbGw+XFxuXCIgK1xuICAgIFwiICAgICAgICA8c21hbGwgbmctc2hvdz1cXFwiaGFzUHJvcGVydHlFcnJvcihzcXVhZEZvcm0uc2VlZCwgJ21pbicpXFxcIj5bIFplcm8gb3IgZ3JlYXRlciBdPC9zbWFsbD5cXG5cIiArXG4gICAgXCIgICAgICA8L2xhYmVsPlxcblwiICtcbiAgICBcIiAgICAgIDxpbnB1dCBpZD1cXFwic2VlZFxcXCIgbmFtZT1cXFwic2VlZFxcXCIgdHlwZT1cXFwibnVtYmVyXFxcIiBwbGFjZWhvbGRlcj1cXFwiR3JlYXRlciB0aGFuIHplcm9cXFwiIG1pbj1cXFwiMFxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgbmctbW9kZWw9XFxcInNxdWFkRGF0YS5zZWVkXFxcIiBzZWxlY3Qtb24tY2xpY2sgcmVxdWlyZWQ+XFxuXCIgK1xuICAgIFwiICAgICAgPHNwYW4gbmctc2hvdz1cXFwiaGFzRXJyb3Ioc3F1YWRGb3JtLnNlZWQpXFxcIiBjbGFzcz1cXFwiZ2x5cGhpY29uIGdseXBoaWNvbi1yZW1vdmUgZm9ybS1jb250cm9sLWZlZWRiYWNrXFxcIj48L3NwYW4+XFxuXCIgK1xuICAgIFwiICAgIDwvZGl2PlxcblwiICtcbiAgICBcIiAgPC9mb3JtPlxcblwiICtcbiAgICBcIjwvZGl2PlxcblwiICtcbiAgICBcIjxkaXYgY2xhc3M9XFxcIm1vZGFsLWZvb3RlclxcXCI+XFxuXCIgK1xuICAgIFwiICA8YnV0dG9uIGNsYXNzPVxcXCJidG4gYnRuLWRlZmF1bHRcXFwiIG5nLWNsaWNrPVxcXCJjYW5jZWwoKVxcXCI+Q2FuY2VsPC9idXR0b24+XFxuXCIgK1xuICAgIFwiICA8YnV0dG9uIGNsYXNzPVxcXCJidG4gYnRuLXByaW1hcnlcXFwiIG5nLWRpc2FibGVkPVxcXCJzcXVhZEZvcm0uJGludmFsaWRcXFwiIG5nLWNsaWNrPVxcXCJlZGl0U3F1YWQoc3F1YWREYXRhKVxcXCI+RWRpdDwvYnV0dG9uPlxcblwiICtcbiAgICBcIjwvZGl2PlwiKTtcbn1dKTtcblxuYW5ndWxhci5tb2R1bGUoXCJtb2R1bGVzL3ByaXZhdGUvYWRtaW4vc3F1YWRzL25ldy9hZG1pbi5zcXVhZHMubmV3LnRwbC5odG1sXCIsIFtdKS5ydW4oW1wiJHRlbXBsYXRlQ2FjaGVcIiwgZnVuY3Rpb24oJHRlbXBsYXRlQ2FjaGUpIHtcbiAgJHRlbXBsYXRlQ2FjaGUucHV0KFwibW9kdWxlcy9wcml2YXRlL2FkbWluL3NxdWFkcy9uZXcvYWRtaW4uc3F1YWRzLm5ldy50cGwuaHRtbFwiLFxuICAgIFwiPGRpdiBjbGFzcz1cXFwibW9kYWwtaGVhZGVyXFxcIj5cXG5cIiArXG4gICAgXCIgIDxidXR0b24gdHlwZT1cXFwiYnV0dG9uXFxcIiBjbGFzcz1cXFwiY2xvc2VcXFwiIG5nLWNsaWNrPVxcXCJjYW5jZWwoKVxcXCI+PHNwYW4gYXJpYS1oaWRkZW49XFxcInRydWVcXFwiPiZ0aW1lczs8L3NwYW4+PHNwYW4gY2xhc3M9XFxcInNyLW9ubHlcXFwiPkNsb3NlPC9zcGFuPjwvYnV0dG9uPlxcblwiICtcbiAgICBcIiAgPGgzIGNsYXNzPVxcXCJtb2RhbC10aXRsZVxcXCI+Q3JlYXRlIFNxdWFkPC9oMz5cXG5cIiArXG4gICAgXCI8L2Rpdj5cXG5cIiArXG4gICAgXCI8ZGl2IGNsYXNzPVxcXCJtb2RhbC1ib2R5XFxcIj5cXG5cIiArXG4gICAgXCIgIDxmb3JtIG5hbWU9XFxcInNxdWFkRm9ybVxcXCIgcm9sZT1cXFwiZm9ybVxcXCIgbm92YWxpZGF0ZT5cXG5cIiArXG4gICAgXCIgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCIgbmctY2xhc3M9XFxcInsnaGFzLWVycm9yJzogaGFzRXJyb3Ioc3F1YWRGb3JtLnNxdWFkTmFtZSksICdoYXMtZmVlZGJhY2snOiBoYXNFcnJvcihzcXVhZEZvcm0uc3F1YWROYW1lKX1cXFwiPlxcblwiICtcbiAgICBcIiAgICAgIDxsYWJlbCBjbGFzcz1cXFwiY29udHJvbC1sYWJlbFxcXCIgZm9yPVxcXCJzcXVhZE5hbWVcXFwiPlNxdWFkIG5hbWVcXG5cIiArXG4gICAgXCIgICAgICAgIDxzbWFsbCBuZy1zaG93PVxcXCJoYXNQcm9wZXJ0eUVycm9yKHNxdWFkRm9ybS5zcXVhZE5hbWUsICdyZXF1aXJlZCcpXFxcIj5bIFJlcXVpcmVkIF08L3NtYWxsPlxcblwiICtcbiAgICBcIiAgICAgICAgPHNtYWxsIG5nLXNob3c9XFxcImhhc1Byb3BlcnR5RXJyb3Ioc3F1YWRGb3JtLnNxdWFkTmFtZSwgJ21heGxlbmd0aCcpXFxcIj5bIFRvbyBMb25nIF08L3NtYWxsPlxcblwiICtcbiAgICBcIiAgICAgIDwvbGFiZWw+XFxuXCIgK1xuICAgIFwiICAgICAgPGlucHV0IGlkPVxcXCJzcXVhZE5hbWVcXFwiIG5hbWU9XFxcInNxdWFkTmFtZVxcXCIgdHlwZT1cXFwidGV4dFxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgbmctbW9kZWw9XFxcInNxdWFkRGF0YS5uYW1lXFxcIiBuZy1tYXhsZW5ndGg9XFxcIjMwXFxcIiByZXF1aXJlZD5cXG5cIiArXG4gICAgXCIgICAgICA8c3BhbiBuZy1zaG93PVxcXCJoYXNFcnJvcihzcXVhZEZvcm0uc3F1YWROYW1lKVxcXCIgY2xhc3M9XFxcImdseXBoaWNvbiBnbHlwaGljb24tcmVtb3ZlIGZvcm0tY29udHJvbC1mZWVkYmFja1xcXCI+PC9zcGFuPlxcblwiICtcbiAgICBcIiAgICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCIgbmctY2xhc3M9XFxcInsnaGFzLWVycm9yJzogaGFzRXJyb3Ioc3F1YWRGb3JtLnNxdWFkU2hvcnQpLCAnaGFzLWZlZWRiYWNrJzogaGFzRXJyb3Ioc3F1YWRGb3JtLnNxdWFkU2hvcnQpfVxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgPGxhYmVsIGNsYXNzPVxcXCJjb250cm9sLWxhYmVsXFxcIiBmb3I9XFxcInNxdWFkU2hvcnRcXFwiPlNob3J0IE5hbWVcXG5cIiArXG4gICAgXCIgICAgICAgIDxzbWFsbCBuZy1zaG93PVxcXCJoYXNQcm9wZXJ0eUVycm9yKHNxdWFkRm9ybS5zcXVhZFNob3J0LCAncmVxdWlyZWQnKVxcXCI+WyBSZXF1aXJlZCBdPC9zbWFsbD5cXG5cIiArXG4gICAgXCIgICAgICAgIDxzbWFsbCBuZy1zaG93PVxcXCJoYXNQcm9wZXJ0eUVycm9yKHNxdWFkRm9ybS5zcXVhZFNob3J0LCAnbWF4bGVuZ3RoJylcXFwiPlsgVG9vIExvbmcgXTwvc21hbGw+XFxuXCIgK1xuICAgIFwiICAgICAgPC9sYWJlbD5cXG5cIiArXG4gICAgXCIgICAgICA8aW5wdXQgaWQ9XFxcInNxdWFkU2hvcnRcXFwiIG5hbWU9XFxcInNxdWFkU2hvcnRcXFwiIHR5cGU9XFxcInRleHRcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIG5nLW1vZGVsPVxcXCJzcXVhZERhdGEuc2hvcnRcXFwiIG5nLW1heGxlbmd0aD1cXFwiMzBcXFwiIHJlcXVpcmVkPlxcblwiICtcbiAgICBcIiAgICAgIDxzcGFuIG5nLXNob3c9XFxcImhhc0Vycm9yKHNxdWFkRm9ybS5zcXVhZFNob3J0KVxcXCIgY2xhc3M9XFxcImdseXBoaWNvbiBnbHlwaGljb24tcmVtb3ZlIGZvcm0tY29udHJvbC1mZWVkYmFja1xcXCI+PC9zcGFuPlxcblwiICtcbiAgICBcIiAgICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCIgbmctY2xhc3M9XFxcInsnaGFzLWVycm9yJzogaGFzRXJyb3Ioc3F1YWRGb3JtLnNxdWFkQWJicmV2KSwgJ2hhcy1mZWVkYmFjayc6IGhhc0Vycm9yKHNxdWFkRm9ybS5zcXVhZEFiYnJldil9XFxcIj5cXG5cIiArXG4gICAgXCIgICAgICA8bGFiZWwgY2xhc3M9XFxcImNvbnRyb2wtbGFiZWxcXFwiIGZvcj1cXFwic3F1YWRBYmJyZXZcXFwiPkFiYnJldmlhdGlvblxcblwiICtcbiAgICBcIiAgICAgICAgPHNtYWxsIG5nLXNob3c9XFxcImhhc1Byb3BlcnR5RXJyb3Ioc3F1YWRGb3JtLnNxdWFkQWJicmV2LCAncmVxdWlyZWQnKVxcXCI+WyBSZXF1aXJlZCBdPC9zbWFsbD5cXG5cIiArXG4gICAgXCIgICAgICAgIDxzbWFsbCBuZy1zaG93PVxcXCJoYXNQcm9wZXJ0eUVycm9yKHNxdWFkRm9ybS5zcXVhZEFiYnJldiwgJ21heGxlbmd0aCcpXFxcIj5bIFRvbyBMb25nIF08L3NtYWxsPlxcblwiICtcbiAgICBcIiAgICAgIDwvbGFiZWw+XFxuXCIgK1xuICAgIFwiICAgICAgPGlucHV0IGlkPVxcXCJzcXVhZEFiYnJldlxcXCIgbmFtZT1cXFwic3F1YWRBYmJyZXZcXFwiIHR5cGU9XFxcInRleHRcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIG5nLW1vZGVsPVxcXCJzcXVhZERhdGEuYWJicmV2XFxcIiBuZy1tYXhsZW5ndGg9XFxcIjMwXFxcIiByZXF1aXJlZD5cXG5cIiArXG4gICAgXCIgICAgICA8c3BhbiBuZy1zaG93PVxcXCJoYXNFcnJvcihzcXVhZEZvcm0uc3F1YWRBYmJyZXYpXFxcIiBjbGFzcz1cXFwiZ2x5cGhpY29uIGdseXBoaWNvbi1yZW1vdmUgZm9ybS1jb250cm9sLWZlZWRiYWNrXFxcIj48L3NwYW4+XFxuXCIgK1xuICAgIFwiICAgIDwvZGl2PlxcblwiICtcbiAgICBcIiAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIiBuZy1jbGFzcz1cXFwieydoYXMtZXJyb3InOiBoYXNFcnJvcihzcXVhZEZvcm0uc3F1YWRUeXBlKSwgJ2hhcy1mZWVkYmFjayc6IGhhc0Vycm9yKHNxdWFkRm9ybS5zcXVhZFR5cGUpfVxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgPGxhYmVsIGNsYXNzPVxcXCJjb250cm9sLWxhYmVsXFxcIiBmb3I9XFxcInNxdWFkVHlwZVxcXCI+VHlwZSAoTkJBLCBORkwsIGV0YylcXG5cIiArXG4gICAgXCIgICAgICAgIDxzbWFsbCBuZy1zaG93PVxcXCJoYXNQcm9wZXJ0eUVycm9yKHNxdWFkRm9ybS5zcXVhZFR5cGUsICdyZXF1aXJlZCcpXFxcIj5bIFJlcXVpcmVkIF08L3NtYWxsPlxcblwiICtcbiAgICBcIiAgICAgICAgPHNtYWxsIG5nLXNob3c9XFxcImhhc1Byb3BlcnR5RXJyb3Ioc3F1YWRGb3JtLnNxdWFkVHlwZSwgJ21heGxlbmd0aCcpXFxcIj5bIFRvbyBMb25nIF08L3NtYWxsPlxcblwiICtcbiAgICBcIiAgICAgIDwvbGFiZWw+XFxuXCIgK1xuICAgIFwiICAgICAgPGlucHV0IGlkPVxcXCJzcXVhZFR5cGVcXFwiIG5hbWU9XFxcInNxdWFkVHlwZVxcXCIgdHlwZT1cXFwidGV4dFxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgbmctbW9kZWw9XFxcInNxdWFkRGF0YS5zcXVhZF90eXBlXFxcIiBuZy1tYXhsZW5ndGg9XFxcIjMwXFxcIiByZXF1aXJlZD5cXG5cIiArXG4gICAgXCIgICAgICA8c3BhbiBuZy1zaG93PVxcXCJoYXNFcnJvcihzcXVhZEZvcm0uc3F1YWRUeXBlKVxcXCIgY2xhc3M9XFxcImdseXBoaWNvbiBnbHlwaGljb24tcmVtb3ZlIGZvcm0tY29udHJvbC1mZWVkYmFja1xcXCI+PC9zcGFuPlxcblwiICtcbiAgICBcIiAgICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgIDwvZm9ybT5cXG5cIiArXG4gICAgXCI8L2Rpdj5cXG5cIiArXG4gICAgXCI8ZGl2IGNsYXNzPVxcXCJtb2RhbC1mb290ZXJcXFwiPlxcblwiICtcbiAgICBcIiAgPGJ1dHRvbiBjbGFzcz1cXFwiYnRuIGJ0bi1kZWZhdWx0XFxcIiBuZy1jbGljaz1cXFwiY2FuY2VsKClcXFwiPkNhbmNlbDwvYnV0dG9uPlxcblwiICtcbiAgICBcIiAgPGJ1dHRvbiBjbGFzcz1cXFwiYnRuIGJ0bi1wcmltYXJ5XFxcIiBuZy1kaXNhYmxlZD1cXFwic3F1YWRGb3JtLiRpbnZhbGlkXFxcIiBuZy1jbGljaz1cXFwiY3JlYXRlU3F1YWQoc3F1YWREYXRhKVxcXCI+Q3JlYXRlPC9idXR0b24+XFxuXCIgK1xuICAgIFwiPC9kaXY+XCIpO1xufV0pO1xuXG5hbmd1bGFyLm1vZHVsZShcIm1vZHVsZXMvcHJpdmF0ZS9hZG1pbi93ZWVrL2FkbWluLndlZWsudHBsLmh0bWxcIiwgW10pLnJ1bihbXCIkdGVtcGxhdGVDYWNoZVwiLCBmdW5jdGlvbigkdGVtcGxhdGVDYWNoZSkge1xuICAkdGVtcGxhdGVDYWNoZS5wdXQoXCJtb2R1bGVzL3ByaXZhdGUvYWRtaW4vd2Vlay9hZG1pbi53ZWVrLnRwbC5odG1sXCIsXG4gICAgXCI8ZGl2IGNsYXNzPVxcXCJnYW1lcy1oZWFkZXItcm93IHJvd1xcXCI+XFxuXCIgK1xuICAgIFwiICA8ZGl2IGNsYXNzPVxcXCJjb2wtc20tNiBjb2wtbWQtNlxcXCI+XFxuXCIgK1xuICAgIFwiICAgIDxoMz48aSBjbGFzcz1cXFwiZmEgZmEtY2hlY2sgZmEtZndcXFwiIG5nLXNob3c9XFxcIndlZWtEYXRhLmNvbXBsZXRlID09PSB0cnVlXFxcIiB0aXRsZT1cXFwiV2VlayBjb21wbGV0ZVxcXCI+PC9pPiB7e3dlZWtEYXRhLnNlYXNvbl90eXBlfX0ge3t3ZWVrRGF0YS5kaXNwbGF5fX0gPHNtYWxsPjxhIG5nLWNsaWNrPVxcXCJlZGl0V2Vlayh3ZWVrRGF0YSlcXFwiPlsgZWRpdCBdPC9hPjwvc21hbGw+PGJyPlxcblwiICtcbiAgICBcIiAgICAgIDxzbWFsbD5SZW1pbmRlciBTZW50OiA8c3BhbiBuZy1zaG93PVxcXCIhd2Vla0RhdGEucmVtaW5kZXJfc2VudF9hdFxcXCI+Ti9BPC9zcGFuPjxzcGFuIG5nLXNob3c9XFxcIndlZWtEYXRhLnJlbWluZGVyX3NlbnRfYXRcXFwiPnt7ZGF0ZUZvcm1hdCh3ZWVrRGF0YS5yZW1pbmRlcl9zZW50X2F0LCBcXFwiZGRkIG1tbSBkIGg6TU0gVFQgKFopXFxcIil9fTwvc3Bhbj48L3NtYWxsPlxcblwiICtcbiAgICBcIiAgICA8L2gzPlxcblwiICtcbiAgICBcIiAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICA8ZGl2IGNsYXNzPVxcXCJjb2wtc20tNiBjb2wtbWQtNlxcXCI+XFxuXCIgK1xuICAgIFwiICAgIDxkaXYgY2xhc3M9XFxcIndlZWstYnRuLWdyb3VwXFxcIj5cXG5cIiArXG4gICAgXCIgICAgICA8YnV0dG9uIHR5cGU9XFxcImJ1dHRvblxcXCIgY2xhc3M9XFxcInNlbmQtcmVtaW5kZXItYnRuIGJ0biBidG4tZGVmYXVsdFxcXCIgbmctY2xpY2s9XFxcImNvbmZpcm1TZW5kUmVtaW5kZXIod2Vla0RhdGEpXFxcIj5TZW5kIFJlbWluZGVyPC9idXR0b24+XFxuXCIgK1xuICAgIFwiICAgICAgPGJ1dHRvbiB0eXBlPVxcXCJidXR0b25cXFwiIGNsYXNzPVxcXCJjcmVhdGUtZ2FtZS1idG4gYnRuIGJ0bi1wcmltYXJ5XFxcIiBuZy1jbGljaz1cXFwiY3JlYXRlR2FtZSh3ZWVrRGF0YSwgZ2FtZXMpXFxcIj5DcmVhdGUgR2FtZTwvYnV0dG9uPlxcblwiICtcbiAgICBcIiAgICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgIDwvZGl2PlxcblwiICtcbiAgICBcIjwvZGl2PlxcblwiICtcbiAgICBcIjxkaXYgY2xhc3M9XFxcImdhbWVzLXRhYlxcXCI+XFxuXCIgK1xuICAgIFwiICA8dWwgY2xhc3M9XFxcIm5hdiBuYXYtdGFic1xcXCI+XFxuXCIgK1xuICAgIFwiICAgIDxsaSBjbGFzcz1cXFwiYWN0aXZlXFxcIj48YT5HYW1lcyBbIHt7Z2FtZXMubGVuZ3RofX0gXTwvYT48L2xpPlxcblwiICtcbiAgICBcIiAgPC91bD5cXG5cIiArXG4gICAgXCIgIDxkaXYgY2xhc3M9XFxcImlucHV0LWdyb3VwIGN1c3RvbS1zZWFyY2gtZm9ybSBmaWx0ZXItbGVhZ3VlLWpvaW5cXFwiPlxcblwiICtcbiAgICBcIiAgICA8aW5wdXQgdHlwZT1cXFwidGV4dFxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgcGxhY2Vob2xkZXI9XFxcIlNlYXJjaCBnYW1lcy4uLlxcXCIgbmctbW9kZWw9XFxcImdhbWVRdWVyeVxcXCI+XFxuXCIgK1xuICAgIFwiICAgIDxzcGFuIGNsYXNzPVxcXCJpbnB1dC1ncm91cC1idG5cXFwiPlxcblwiICtcbiAgICBcIiAgICAgIDxidXR0b24gY2xhc3M9XFxcImJ0biBidG4tZGVmYXVsdFxcXCIgdHlwZT1cXFwiYnV0dG9uXFxcIj48c3BhbiBjbGFzcz1cXFwiZ2x5cGhpY29uIGdseXBoaWNvbi1zZWFyY2hcXFwiPjwvc3Bhbj48L2J1dHRvbj5cXG5cIiArXG4gICAgXCIgICAgPC9zcGFuPlxcblwiICtcbiAgICBcIiAgPC9kaXY+XFxuXCIgK1xuICAgIFwiPC9kaXY+XFxuXCIgK1xuICAgIFwiPGRpdiBjbGFzcz1cXFwid2Vlay1nYW1lcyBsaXN0LWdyb3VwXFxcIj5cXG5cIiArXG4gICAgXCIgIDxhIG5nLXJlcGVhdD1cXFwiZ2FtZSBpbiBnYW1lcyB8IGZpbHRlcjpzZWFyY2g6c3RyaWN0XFxcIiBuZy1jbGljaz1cXFwiZWRpdEdhbWUoZ2FtZSwgd2Vla0RhdGEpXFxcIiBjbGFzcz1cXFwibGlzdC1ncm91cC1pdGVtXFxcIj5cXG5cIiArXG4gICAgXCIgICAgPGRpdiBjbGFzcz1cXFwicm93XFxcIj5cXG5cIiArXG4gICAgXCIgICAgICA8ZGl2IGNsYXNzPVxcXCJnYW1lLWRpc3BsYXktbmFtZSBjb2wtc20tNiBjb2wtbWQtNlxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgICA8aSBjbGFzcz1cXFwiZmEgZmEtY2hlY2sgZmEtZndcXFwiIG5nLXNob3c9XFxcImdhbWUuY29tcGxldGVcXFwiIHRpdGxlPVxcXCJHYW1lIGNvbXBsZXRlXFxcIj48L2k+XFxuXCIgK1xuICAgIFwiICAgICAgICA8aSBjbGFzcz1cXFwiZmEgZmEtY2xvY2stbyBmYS1md1xcXCIgc3R5bGU9XFxcImNvbG9yOiAjZmY0NzJlO1xcXCIgbmctc2hvdz1cXFwiZ2FtZS5wb3N0cG9uZWQgJiYgIWdhbWUuY29tcGxldGVcXFwiIHRpdGxlPVxcXCJHYW1lIHBvc3Rwb25lZFxcXCI+PC9pPlxcblwiICtcbiAgICBcIiAgICAgICAgPHNwYW4gbmctc2hvdz1cXFwiZ2FtZS5wbGF5b2ZmXFxcIj4qPC9zcGFuPnt7Z2FtZS5kaXNwbGF5fX08YnI+XFxuXCIgK1xuICAgIFwiICAgICAgICA8c3BhbiBjbGFzcz1cXFwiZ2FtZS1zdGFydHNcXFwiPjxzcGFuIHN0eWxlPVxcXCJjb2xvcjojRkYwMDAwO1xcXCIgbmctc2hvdz1cXFwiZ2FtZS50YmRcXFwiPlRCRDwvc3Bhbj48c3BhbiBuZy1zaG93PVxcXCIhZ2FtZS50YmRcXFwiPnt7ZGF0ZUZvcm1hdChnYW1lLnN0YXJ0c19hdCwgXFxcImRkZCwgbW1tIGQgeXl5eSBoOk1NIFRUIChaKVxcXCIpfX08L3NwYW4+PHNwYW4gbmctc2hvdz1cXFwiZ2FtZS5pZl9uZWNlc3NhcnlcXFwiPiAqSWYgTmVjZXNzYXJ5PC9zcGFuPjxzcGFuIG5nLXNob3c9XFxcImdhbWUucG9zdHBvbmVkXFxcIj4gfCAqUFBEPC9zcGFuPjwvc3Bhbj48L2Rpdj5cXG5cIiArXG4gICAgXCIgICAgICA8ZGl2IGNsYXNzPVxcXCJnYW1lLXNjb3JlIGNvbC1zbS02IGNvbC1tZC02XFxcIj5cXG5cIiArXG4gICAgXCIgICAgICAgIDxzcGFuIG5nLXNob3c9XFxcImdhbWUubm90ZS5sZW5ndGggPiAwXFxcIj57e2dhbWUubm90ZX19IC0gPC9zcGFuPnt7Z2FtZS5zcXVhZHNbMF0ubmFtZX19OiB7e2dhbWUudmlzaXRpbmdfc3F1YWRfc2NvcmV9fSB8IHt7Z2FtZS5zcXVhZHNbMV0ubmFtZX19OiB7e2dhbWUuaG9tZV9zcXVhZF9zY29yZX19IDxzcGFuPnt7Z2FtZS5vdF9kaXNwbGF5fX08L3NwYW4+PGJyPlxcblwiICtcbiAgICBcIiAgICAgICAgUGlja3M6IHt7Z2FtZS5waWNrX2NvdW50fX1cXG5cIiArXG4gICAgXCIgICAgICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgICAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICA8L2E+XFxuXCIgK1xuICAgIFwiPC9kaXY+XFxuXCIgK1xuICAgIFwiPGhyPlxcblwiICtcbiAgICBcIjxkaXYgY2xhc3M9XFxcImNvbXBsZXRlLXdlZWstYnRuLWdyb3VwXFxcIj5cXG5cIiArXG4gICAgXCIgIDxidXR0b24gdHlwZT1cXFwiYnV0dG9uXFxcIiBjbGFzcz1cXFwiY29tcGxldGUtd2Vlay1idG4gYnRuIGJ0bi1kYW5nZXJcXFwiIG5nLWNsaWNrPVxcXCJjb25maXJtV2Vla0NvbXBsZXRlKHdlZWtEYXRhKVxcXCI+Q29tcGxldGUgV2VlazwvYnV0dG9uPlxcblwiICtcbiAgICBcIjwvZGl2PlxcblwiICtcbiAgICBcIlwiKTtcbn1dKTtcblxuYW5ndWxhci5tb2R1bGUoXCJtb2R1bGVzL3ByaXZhdGUvYWRtaW4vd2Vlay9lZGl0L2FkbWluLndlZWsuZWRpdC50cGwuaHRtbFwiLCBbXSkucnVuKFtcIiR0ZW1wbGF0ZUNhY2hlXCIsIGZ1bmN0aW9uKCR0ZW1wbGF0ZUNhY2hlKSB7XG4gICR0ZW1wbGF0ZUNhY2hlLnB1dChcIm1vZHVsZXMvcHJpdmF0ZS9hZG1pbi93ZWVrL2VkaXQvYWRtaW4ud2Vlay5lZGl0LnRwbC5odG1sXCIsXG4gICAgXCI8ZGl2IGNsYXNzPVxcXCJtb2RhbC1oZWFkZXJcXFwiPlxcblwiICtcbiAgICBcIiAgPGJ1dHRvbiB0eXBlPVxcXCJidXR0b25cXFwiIGNsYXNzPVxcXCJjbG9zZVxcXCIgbmctY2xpY2s9XFxcImNhbmNlbCgpXFxcIj48c3BhbiBhcmlhLWhpZGRlbj1cXFwidHJ1ZVxcXCI+JnRpbWVzOzwvc3Bhbj48c3BhbiBjbGFzcz1cXFwic3Itb25seVxcXCI+Q2xvc2U8L3NwYW4+PC9idXR0b24+XFxuXCIgK1xuICAgIFwiICA8aDMgY2xhc3M9XFxcIm1vZGFsLXRpdGxlXFxcIj5FZGl0IFdlZWs8L2gzPlxcblwiICtcbiAgICBcIjwvZGl2PlxcblwiICtcbiAgICBcIjxkaXYgY2xhc3M9XFxcIm1vZGFsLWJvZHlcXFwiPlxcblwiICtcbiAgICBcIiAgPGZvcm0gbmFtZT1cXFwiZWRpdFdlZWtGb3JtXFxcIiBjbGFzcz1cXFwiZWRpdC13ZWVrLWZvcm0gZm9ybS1ob3Jpem9udGFsXFxcIiByb2xlPVxcXCJmb3JtXFxcIiBub3ZhbGlkYXRlPlxcblwiICtcbiAgICBcIiAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIiBuZy1jbGFzcz1cXFwieydoYXMtZXJyb3InOiBoYXNFcnJvcihlZGl0V2Vla0Zvcm0ud2Vla05hbWUpLCAnaGFzLWZlZWRiYWNrJzogaGFzRXJyb3IoZWRpdFdlZWtGb3JtLndlZWtOYW1lKX1cXFwiPlxcblwiICtcbiAgICBcIiAgICAgIDxsYWJlbCBmb3I9XFxcIndlZWtOYW1lXFxcIiBjbGFzcz1cXFwiY29sLXNtLTMgY29udHJvbC1sYWJlbFxcXCI+TmFtZTo8L2xhYmVsPlxcblwiICtcbiAgICBcIiAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1zbS05XFxcIj5cXG5cIiArXG4gICAgXCIgICAgICAgIDxpbnB1dCBpZD1cXFwid2Vla05hbWVcXFwiIG5hbWU9XFxcIndlZWtOYW1lXFxcIiB0eXBlPVxcXCJ0ZXh0XFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBuZy1tb2RlbD1cXFwid2Vla0RhdGEubmFtZVxcXCIgbmctbWF4bGVuZ3RoPVxcXCIzMFxcXCIgcmVxdWlyZWQ+XFxuXCIgK1xuICAgIFwiICAgICAgICA8c21hbGwgY2xhc3M9XFxcImlucHV0LWVycm9yXFxcIiBuZy1zaG93PVxcXCJoYXNQcm9wZXJ0eUVycm9yKGVkaXRXZWVrRm9ybS53ZWVrTmFtZSwgJ3JlcXVpcmVkJylcXFwiPlJlcXVpcmVkPC9zbWFsbD5cXG5cIiArXG4gICAgXCIgICAgICAgIDxzbWFsbCBjbGFzcz1cXFwiaW5wdXQtZXJyb3JcXFwiIG5nLXNob3c9XFxcImhhc1Byb3BlcnR5RXJyb3IoZWRpdFdlZWtGb3JtLndlZWtOYW1lLCAnbWF4bGVuZ3RoJylcXFwiPlRvbyBMb25nPC9zbWFsbD5cXG5cIiArXG4gICAgXCIgICAgICAgIDxzcGFuIG5nLXNob3c9XFxcImhhc0Vycm9yKGVkaXRXZWVrRm9ybS53ZWVrTmFtZSlcXFwiIGNsYXNzPVxcXCJnbHlwaGljb24gZ2x5cGhpY29uLXJlbW92ZSBmb3JtLWNvbnRyb2wtZmVlZGJhY2tcXFwiPjwvc3Bhbj5cXG5cIiArXG4gICAgXCIgICAgICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgICAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPlxcblwiICtcbiAgICBcIiAgICAgIDxsYWJlbCBmb3I9XFxcIndlZWtUeXBlXFxcIiBjbGFzcz1cXFwiY29sLXNtLTMgY29udHJvbC1sYWJlbFxcXCI+V2VlayBUeXBlOjwvbGFiZWw+XFxuXCIgK1xuICAgIFwiICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXNtLTlcXFwiPlxcblwiICtcbiAgICBcIiAgICAgICAgPHNlbGVjdCBpZD1cXFwid2Vla1R5cGVcXFwiIG5hbWU9XFxcIndlZWtUeXBlXFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBuZy1tb2RlbD1cXFwid2Vla0RhdGEud2Vla190eXBlX2lkXFxcIiBuZy1vcHRpb25zPVxcXCJ3ZWVrVHlwZS5pZCBhcyB3ZWVrVHlwZS5kZXNjcmlwdGlvbiBmb3Igd2Vla1R5cGUgaW4gd2Vla1R5cGVzXFxcIj48L3NlbGVjdD5cXG5cIiArXG4gICAgXCIgICAgICAgIDxzbWFsbD53ZWVrX3R5cGVfaWQ6IHt7d2Vla0RhdGEud2Vla190eXBlX2lkfX08L3NtYWxsPlxcblwiICtcbiAgICBcIiAgICAgIDwvZGl2PlxcblwiICtcbiAgICBcIiAgICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgPGxhYmVsIGNsYXNzPVxcXCJjb2wtc20tMyBjb250cm9sLWxhYmVsXFxcIj5TdGFydHMgQXQ6PC9sYWJlbD5cXG5cIiArXG4gICAgXCIgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtc20tOVxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgICA8ZGl2IGNsYXNzPVxcXCJkcm9wZG93blxcXCIgaXMtb3Blbj1cXFwic3RhcnRzQXREcm9wZG93bi5pc29wZW5cXFwiPlxcblwiICtcbiAgICBcIiAgICAgICAgICA8YSBjbGFzcz1cXFwiZHJvcGRvd24tdG9nZ2xlXFxcIiByb2xlPVxcXCJidXR0b25cXFwiIGRhdGEtdG9nZ2xlPVxcXCJkcm9wZG93blxcXCIgZGF0YS10YXJnZXQ9XFxcIiNcXFwiIGhyZWY9XFxcIiNcXFwiPlxcblwiICtcbiAgICBcIiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImlucHV0LWdyb3VwXFxcIj5cXG5cIiArXG4gICAgXCIgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVxcXCJ0ZXh0XFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBmb3JtYXR0ZWQtZGF0ZSBkYXRhLW5nLW1vZGVsPVxcXCJ3ZWVrRGF0YS5zdGFydHNfYXRcXFwiIG5nLXJlcXVpcmVkPVxcXCJ0cnVlXFxcIiBuZy1kaXNhYmxlZD1cXFwidHJ1ZVxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwiaW5wdXQtZ3JvdXAtYWRkb25cXFwiPjxpIGNsYXNzPVxcXCJnbHlwaGljb24gZ2x5cGhpY29uLWNhbGVuZGFyXFxcIj48L2k+PC9zcGFuPlxcblwiICtcbiAgICBcIiAgICAgICAgICAgIDwvZGl2PlxcblwiICtcbiAgICBcIiAgICAgICAgICA8L2E+XFxuXCIgK1xuICAgIFwiICAgICAgICAgIDx1bCBjbGFzcz1cXFwiZHJvcGRvd24tbWVudVxcXCIgcm9sZT1cXFwibWVudVxcXCIgYXJpYS1sYWJlbGxlZGJ5PVxcXCJkTGFiZWxcXFwiPlxcblwiICtcbiAgICBcIiAgICAgICAgICAgIDxkYXRldGltZXBpY2tlciBkYXRhLW5nLW1vZGVsPVxcXCJ3ZWVrRGF0YS5zdGFydHNfYXRcXFwiIGRhdGEtb24tc2V0LXRpbWU9XFxcImNsb3NlU3RhcnRzQXQoKVxcXCIgZGF0YS1kYXRldGltZXBpY2tlci1jb25maWc9XFxcInsgbWludXRlU3RlcDogNSB9XFxcIi8+XFxuXCIgK1xuICAgIFwiICAgICAgICAgIDwvdWw+XFxuXCIgK1xuICAgIFwiICAgICAgICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgICAgICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgICAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPlxcblwiICtcbiAgICBcIiAgICAgIDxsYWJlbCBjbGFzcz1cXFwiY29sLXNtLTMgY29udHJvbC1sYWJlbFxcXCI+RW5kcyBBdDo8L2xhYmVsPlxcblwiICtcbiAgICBcIiAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1zbS05XFxcIj5cXG5cIiArXG4gICAgXCIgICAgICAgIDxkaXYgY2xhc3M9XFxcImRyb3Bkb3duXFxcIiBpcy1vcGVuPVxcXCJlbmRzQXREcm9wZG93bi5pc29wZW5cXFwiPlxcblwiICtcbiAgICBcIiAgICAgICAgICA8YSBjbGFzcz1cXFwiZHJvcGRvd24tdG9nZ2xlXFxcIiByb2xlPVxcXCJidXR0b25cXFwiIGRhdGEtdG9nZ2xlPVxcXCJkcm9wZG93blxcXCIgZGF0YS10YXJnZXQ9XFxcIiNcXFwiIGhyZWY9XFxcIiNcXFwiPlxcblwiICtcbiAgICBcIiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImlucHV0LWdyb3VwXFxcIj5cXG5cIiArXG4gICAgXCIgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVxcXCJ0ZXh0XFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBmb3JtYXR0ZWQtZGF0ZSBkYXRhLW5nLW1vZGVsPVxcXCJ3ZWVrRGF0YS5lbmRzX2F0XFxcIiBuZy1yZXF1aXJlZD1cXFwidHJ1ZVxcXCIgbmctZGlzYWJsZWQ9XFxcInRydWVcXFwiPlxcblwiICtcbiAgICBcIiAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcImlucHV0LWdyb3VwLWFkZG9uXFxcIj48aSBjbGFzcz1cXFwiZ2x5cGhpY29uIGdseXBoaWNvbi1jYWxlbmRhclxcXCI+PC9pPjwvc3Bhbj5cXG5cIiArXG4gICAgXCIgICAgICAgICAgICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgICAgICAgICAgPC9hPlxcblwiICtcbiAgICBcIiAgICAgICAgICA8dWwgY2xhc3M9XFxcImRyb3Bkb3duLW1lbnVcXFwiIHJvbGU9XFxcIm1lbnVcXFwiIGFyaWEtbGFiZWxsZWRieT1cXFwiZExhYmVsXFxcIj5cXG5cIiArXG4gICAgXCIgICAgICAgICAgICA8ZGF0ZXRpbWVwaWNrZXIgZGF0YS1uZy1tb2RlbD1cXFwid2Vla0RhdGEuZW5kc19hdFxcXCIgZGF0YS1vbi1zZXQtdGltZT1cXFwiY2xvc2VFbmRzQXQoKVxcXCIgZGF0YS1kYXRldGltZXBpY2tlci1jb25maWc9XFxcInsgbWludXRlU3RlcDogNSB9XFxcIi8+XFxuXCIgK1xuICAgIFwiICAgICAgICAgIDwvdWw+XFxuXCIgK1xuICAgIFwiICAgICAgICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgICAgICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgICAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICA8L2Zvcm0+XFxuXCIgK1xuICAgIFwiPC9kaXY+XFxuXCIgK1xuICAgIFwiPGRpdiBjbGFzcz1cXFwibW9kYWwtZm9vdGVyXFxcIj5cXG5cIiArXG4gICAgXCIgIDxidXR0b24gY2xhc3M9XFxcImJ0biBidG4tZGVmYXVsdFxcXCIgbmctY2xpY2s9XFxcImNhbmNlbCgpXFxcIj5DYW5jZWw8L2J1dHRvbj5cXG5cIiArXG4gICAgXCIgIDxidXR0b24gY2xhc3M9XFxcImJ0biBidG4tcHJpbWFyeVxcXCIgbmctZGlzYWJsZWQ9XFxcImVkaXRXZWVrRm9ybS4kaW52YWxpZFxcXCIgbmctY2xpY2s9XFxcImVkaXRXZWVrKHdlZWtEYXRhKVxcXCI+VXBkYXRlPC9idXR0b24+XFxuXCIgK1xuICAgIFwiPC9kaXY+XCIpO1xufV0pO1xuXG5hbmd1bGFyLm1vZHVsZShcIm1vZHVsZXMvcHJpdmF0ZS9hZG1pbi93ZWVrL25ldy9hZG1pbi53ZWVrLm5ldy50cGwuaHRtbFwiLCBbXSkucnVuKFtcIiR0ZW1wbGF0ZUNhY2hlXCIsIGZ1bmN0aW9uKCR0ZW1wbGF0ZUNhY2hlKSB7XG4gICR0ZW1wbGF0ZUNhY2hlLnB1dChcIm1vZHVsZXMvcHJpdmF0ZS9hZG1pbi93ZWVrL25ldy9hZG1pbi53ZWVrLm5ldy50cGwuaHRtbFwiLFxuICAgIFwiPGRpdiBjbGFzcz1cXFwibW9kYWwtaGVhZGVyXFxcIj5cXG5cIiArXG4gICAgXCIgIDxidXR0b24gdHlwZT1cXFwiYnV0dG9uXFxcIiBjbGFzcz1cXFwiY2xvc2VcXFwiIG5nLWNsaWNrPVxcXCJjYW5jZWwoKVxcXCI+PHNwYW4gYXJpYS1oaWRkZW49XFxcInRydWVcXFwiPiZ0aW1lczs8L3NwYW4+PHNwYW4gY2xhc3M9XFxcInNyLW9ubHlcXFwiPkNsb3NlPC9zcGFuPjwvYnV0dG9uPlxcblwiICtcbiAgICBcIiAgPGgzIGNsYXNzPVxcXCJtb2RhbC10aXRsZVxcXCI+Q3JlYXRlIFdlZWs8L2gzPlxcblwiICtcbiAgICBcIjwvZGl2PlxcblwiICtcbiAgICBcIjxkaXYgY2xhc3M9XFxcIm1vZGFsLWJvZHlcXFwiPlxcblwiICtcbiAgICBcIiAgPGZvcm0gbmFtZT1cXFwid2Vla0Zvcm1cXFwiIGNsYXNzPVxcXCJuZXctd2Vlay1mb3JtIGZvcm0taG9yaXpvbnRhbFxcXCIgcm9sZT1cXFwiZm9ybVxcXCIgbm92YWxpZGF0ZT5cXG5cIiArXG4gICAgXCIgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCIgbmctY2xhc3M9XFxcInsnaGFzLWVycm9yJzogaGFzRXJyb3Iod2Vla0Zvcm0ud2Vla05hbWUpLCAnaGFzLWZlZWRiYWNrJzogaGFzRXJyb3Iod2Vla0Zvcm0ud2Vla05hbWUpfVxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgPGxhYmVsIGZvcj1cXFwid2Vla05hbWVcXFwiIGNsYXNzPVxcXCJjb2wtc20tMyBjb250cm9sLWxhYmVsXFxcIj5OYW1lOjwvbGFiZWw+XFxuXCIgK1xuICAgIFwiICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXNtLTlcXFwiPlxcblwiICtcbiAgICBcIiAgICAgICAgPGlucHV0IGlkPVxcXCJ3ZWVrTmFtZVxcXCIgbmFtZT1cXFwid2Vla05hbWVcXFwiIHR5cGU9XFxcInRleHRcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIG5nLW1vZGVsPVxcXCJ3ZWVrRGF0YS5uYW1lXFxcIiBuZy1tYXhsZW5ndGg9XFxcIjMwXFxcIiByZXF1aXJlZD5cXG5cIiArXG4gICAgXCIgICAgICAgIDxzbWFsbCBjbGFzcz1cXFwiaW5wdXQtZXJyb3JcXFwiIG5nLXNob3c9XFxcImhhc1Byb3BlcnR5RXJyb3Iod2Vla0Zvcm0ud2Vla05hbWUsICdyZXF1aXJlZCcpXFxcIj5SZXF1aXJlZDwvc21hbGw+XFxuXCIgK1xuICAgIFwiICAgICAgICA8c21hbGwgY2xhc3M9XFxcImlucHV0LWVycm9yXFxcIiBuZy1zaG93PVxcXCJoYXNQcm9wZXJ0eUVycm9yKHdlZWtGb3JtLndlZWtOYW1lLCAnbWF4bGVuZ3RoJylcXFwiPlRvbyBMb25nPC9zbWFsbD5cXG5cIiArXG4gICAgXCIgICAgICAgIDxzcGFuIG5nLXNob3c9XFxcImhhc0Vycm9yKHdlZWtGb3JtLndlZWtOYW1lKVxcXCIgY2xhc3M9XFxcImdseXBoaWNvbiBnbHlwaGljb24tcmVtb3ZlIGZvcm0tY29udHJvbC1mZWVkYmFja1xcXCI+PC9zcGFuPlxcblwiICtcbiAgICBcIiAgICAgIDwvZGl2PlxcblwiICtcbiAgICBcIiAgICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgPGxhYmVsIGZvcj1cXFwid2Vla1R5cGVcXFwiIGNsYXNzPVxcXCJjb2wtc20tMyBjb250cm9sLWxhYmVsXFxcIj5XZWVrIFR5cGUgKFVzZSAxICYgMik6PC9sYWJlbD5cXG5cIiArXG4gICAgXCIgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtc20tOVxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgICA8c2VsZWN0IGlkPVxcXCJ3ZWVrVHlwZVxcXCIgbmFtZT1cXFwid2Vla1R5cGVcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIG5nLW1vZGVsPVxcXCJ3ZWVrRGF0YS53ZWVrX3R5cGVfaWRcXFwiIG5nLW9wdGlvbnM9XFxcIndlZWtUeXBlLmlkIGFzIHdlZWtUeXBlLmRlc2NyaXB0aW9uIGZvciB3ZWVrVHlwZSBpbiB3ZWVrVHlwZXNcXFwiPjwvc2VsZWN0PlxcblwiICtcbiAgICBcIiAgICAgICAgPHNtYWxsPndlZWtfdHlwZV9pZDoge3t3ZWVrRGF0YS53ZWVrX3R5cGVfaWR9fTwvc21hbGw+XFxuXCIgK1xuICAgIFwiICAgICAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICAgIDwvZGl2PlxcblwiICtcbiAgICBcIiAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj5cXG5cIiArXG4gICAgXCIgICAgICA8bGFiZWwgY2xhc3M9XFxcImNvbC1zbS0zIGNvbnRyb2wtbGFiZWxcXFwiPlN0YXJ0cyBBdDo8L2xhYmVsPlxcblwiICtcbiAgICBcIiAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1zbS05XFxcIj5cXG5cIiArXG4gICAgXCIgICAgICAgIDxkaXYgY2xhc3M9XFxcImRyb3Bkb3duXFxcIiBpcy1vcGVuPVxcXCJzdGFydHNBdERyb3Bkb3duLmlzb3BlblxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgICAgIDxhIGNsYXNzPVxcXCJkcm9wZG93bi10b2dnbGVcXFwiIHJvbGU9XFxcImJ1dHRvblxcXCIgZGF0YS10b2dnbGU9XFxcImRyb3Bkb3duXFxcIiBkYXRhLXRhcmdldD1cXFwiI1xcXCIgaHJlZj1cXFwiI1xcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiaW5wdXQtZ3JvdXBcXFwiPlxcblwiICtcbiAgICBcIiAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XFxcInRleHRcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIGZvcm1hdHRlZC1kYXRlIGRhdGEtbmctbW9kZWw9XFxcIndlZWtEYXRhLnN0YXJ0c19hdFxcXCIgbmctcmVxdWlyZWQ9XFxcInRydWVcXFwiIG5nLWRpc2FibGVkPVxcXCJ0cnVlXFxcIj5cXG5cIiArXG4gICAgXCIgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJpbnB1dC1ncm91cC1hZGRvblxcXCI+PGkgY2xhc3M9XFxcImdseXBoaWNvbiBnbHlwaGljb24tY2FsZW5kYXJcXFwiPjwvaT48L3NwYW4+XFxuXCIgK1xuICAgIFwiICAgICAgICAgICAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICAgICAgICAgIDwvYT5cXG5cIiArXG4gICAgXCIgICAgICAgICAgPHVsIGNsYXNzPVxcXCJkcm9wZG93bi1tZW51XFxcIiByb2xlPVxcXCJtZW51XFxcIiBhcmlhLWxhYmVsbGVkYnk9XFxcImRMYWJlbFxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgICAgICAgPGRhdGV0aW1lcGlja2VyIGRhdGEtbmctbW9kZWw9XFxcIndlZWtEYXRhLnN0YXJ0c19hdFxcXCIgZGF0YS1vbi1zZXQtdGltZT1cXFwiY2xvc2VTdGFydHNBdCgpXFxcIiBkYXRhLWRhdGV0aW1lcGlja2VyLWNvbmZpZz1cXFwieyBtaW51dGVTdGVwOiA1IH1cXFwiLz5cXG5cIiArXG4gICAgXCIgICAgICAgICAgPC91bD5cXG5cIiArXG4gICAgXCIgICAgICAgIDwvZGl2PlxcblwiICtcbiAgICBcIiAgICAgIDwvZGl2PlxcblwiICtcbiAgICBcIiAgICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgPGxhYmVsIGNsYXNzPVxcXCJjb2wtc20tMyBjb250cm9sLWxhYmVsXFxcIj5FbmRzIEF0OjwvbGFiZWw+XFxuXCIgK1xuICAgIFwiICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXNtLTlcXFwiPlxcblwiICtcbiAgICBcIiAgICAgICAgPGRpdiBjbGFzcz1cXFwiZHJvcGRvd25cXFwiIGlzLW9wZW49XFxcImVuZHNBdERyb3Bkb3duLmlzb3BlblxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgICAgIDxhIGNsYXNzPVxcXCJkcm9wZG93bi10b2dnbGVcXFwiIHJvbGU9XFxcImJ1dHRvblxcXCIgZGF0YS10b2dnbGU9XFxcImRyb3Bkb3duXFxcIiBkYXRhLXRhcmdldD1cXFwiI1xcXCIgaHJlZj1cXFwiI1xcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiaW5wdXQtZ3JvdXBcXFwiPlxcblwiICtcbiAgICBcIiAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XFxcInRleHRcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIGZvcm1hdHRlZC1kYXRlIGRhdGEtbmctbW9kZWw9XFxcIndlZWtEYXRhLmVuZHNfYXRcXFwiIG5nLXJlcXVpcmVkPVxcXCJ0cnVlXFxcIiBuZy1kaXNhYmxlZD1cXFwidHJ1ZVxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwiaW5wdXQtZ3JvdXAtYWRkb25cXFwiPjxpIGNsYXNzPVxcXCJnbHlwaGljb24gZ2x5cGhpY29uLWNhbGVuZGFyXFxcIj48L2k+PC9zcGFuPlxcblwiICtcbiAgICBcIiAgICAgICAgICAgIDwvZGl2PlxcblwiICtcbiAgICBcIiAgICAgICAgICA8L2E+XFxuXCIgK1xuICAgIFwiICAgICAgICAgIDx1bCBjbGFzcz1cXFwiZHJvcGRvd24tbWVudVxcXCIgcm9sZT1cXFwibWVudVxcXCIgYXJpYS1sYWJlbGxlZGJ5PVxcXCJkTGFiZWxcXFwiPlxcblwiICtcbiAgICBcIiAgICAgICAgICAgIDxkYXRldGltZXBpY2tlciBkYXRhLW5nLW1vZGVsPVxcXCJ3ZWVrRGF0YS5lbmRzX2F0XFxcIiBkYXRhLW9uLXNldC10aW1lPVxcXCJjbG9zZUVuZHNBdCgpXFxcIiBkYXRhLWRhdGV0aW1lcGlja2VyLWNvbmZpZz1cXFwieyBtaW51dGVTdGVwOiA1IH1cXFwiLz5cXG5cIiArXG4gICAgXCIgICAgICAgICAgPC91bD5cXG5cIiArXG4gICAgXCIgICAgICAgIDwvZGl2PlxcblwiICtcbiAgICBcIiAgICAgIDwvZGl2PlxcblwiICtcbiAgICBcIiAgICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgIDwvZm9ybT5cXG5cIiArXG4gICAgXCI8L2Rpdj5cXG5cIiArXG4gICAgXCI8ZGl2IGNsYXNzPVxcXCJtb2RhbC1mb290ZXJcXFwiPlxcblwiICtcbiAgICBcIiAgPGJ1dHRvbiBjbGFzcz1cXFwiYnRuIGJ0bi1kZWZhdWx0XFxcIiBuZy1jbGljaz1cXFwiY2FuY2VsKClcXFwiPkNhbmNlbDwvYnV0dG9uPlxcblwiICtcbiAgICBcIiAgPGJ1dHRvbiBjbGFzcz1cXFwiYnRuIGJ0bi1wcmltYXJ5XFxcIiBuZy1kaXNhYmxlZD1cXFwid2Vla0Zvcm0uJGludmFsaWRcXFwiIG5nLWNsaWNrPVxcXCJjcmVhdGVXZWVrKHdlZWtEYXRhKVxcXCI+Q3JlYXRlPC9idXR0b24+XFxuXCIgK1xuICAgIFwiPC9kaXY+XCIpO1xufV0pO1xuXG5hbmd1bGFyLm1vZHVsZShcIm1vZHVsZXMvcHJpdmF0ZS9sZWFndWUvY29udGFjdC9sZWFndWUuY29udGFjdC50cGwuaHRtbFwiLCBbXSkucnVuKFtcIiR0ZW1wbGF0ZUNhY2hlXCIsIGZ1bmN0aW9uKCR0ZW1wbGF0ZUNhY2hlKSB7XG4gICR0ZW1wbGF0ZUNhY2hlLnB1dChcIm1vZHVsZXMvcHJpdmF0ZS9sZWFndWUvY29udGFjdC9sZWFndWUuY29udGFjdC50cGwuaHRtbFwiLFxuICAgIFwiPGRpdiBjbGFzcz1cXFwibW9kYWwtaGVhZGVyXFxcIj5cXG5cIiArXG4gICAgXCIgIDxidXR0b24gdHlwZT1cXFwiYnV0dG9uXFxcIiBjbGFzcz1cXFwiY2xvc2VcXFwiIG5nLWNsaWNrPVxcXCJjYW5jZWwoKVxcXCI+PHNwYW4gYXJpYS1oaWRkZW49XFxcInRydWVcXFwiPiZ0aW1lczs8L3NwYW4+PHNwYW4gY2xhc3M9XFxcInNyLW9ubHlcXFwiPkNsb3NlPC9zcGFuPjwvYnV0dG9uPlxcblwiICtcbiAgICBcIiAgPGgzIGNsYXNzPVxcXCJtb2RhbC10aXRsZVxcXCI+Q29udGFjdCBDb21taXNoPC9oMz5cXG5cIiArXG4gICAgXCI8L2Rpdj5cXG5cIiArXG4gICAgXCI8ZGl2IGNsYXNzPVxcXCJtb2RhbC1ib2R5XFxcIj5cXG5cIiArXG4gICAgXCIgIDxmb3JtIG5hbWU9XFxcImNvbnRhY3RGb3JtXFxcIiBjbGFzcz1cXFwiY29udGFjdC1mb3JtIGZvcm0taG9yaXpvbnRhbFxcXCIgcm9sZT1cXFwiZm9ybVxcXCIgbm92YWxpZGF0ZT5cXG5cIiArXG4gICAgXCIgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCIgbmctY2xhc3M9XFxcInsnaGFzLWVycm9yJzogaGFzRXJyb3IoY29udGFjdEZvcm0ubWVzc2FnZSksICdoYXMtZmVlZGJhY2snOiBoYXNFcnJvcihjb250YWN0Rm9ybS5tZXNzYWdlKX1cXFwiPlxcblwiICtcbiAgICBcIiAgICAgIDxsYWJlbCBmb3I9XFxcIm1lc3NhZ2VcXFwiIGNsYXNzPVxcXCJjb2wtc20tMiBjb250cm9sLWxhYmVsXFxcIj5NZXNzYWdlOjwvbGFiZWw+XFxuXCIgK1xuICAgIFwiICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXNtLTEwXFxcIj5cXG5cIiArXG4gICAgXCIgICAgICAgIDx0ZXh0YXJlYSBpZD1cXFwibWVzc2FnZVxcXCIgbmFtZT1cXFwibWVzc2FnZVxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgcGxhY2Vob2xkZXI9XFxcIlNlbmQgYSBkaXJlY3QgbWVzc2FnZSB0byB0aGUgY29tbWlzaC4uLlxcXCIgcm93cz1cXFwiM1xcXCIgbWF4bGVuZ3RoPVxcXCIyMDBcXFwiIG5nLW1vZGVsPVxcXCJjb21taXNoTWVzc2FnZVxcXCIgcmVxdWlyZWQ+PC90ZXh0YXJlYT5cXG5cIiArXG4gICAgXCIgICAgICAgIDxzbWFsbCBjbGFzcz1cXFwiaW5wdXQtZXJyb3JcXFwiIG5nLXNob3c9XFxcImhhc1Byb3BlcnR5RXJyb3IoY29udGFjdEZvcm0ubWVzc2FnZSwgJ3JlcXVpcmVkJylcXFwiPlJlcXVpcmVkPC9zbWFsbD5cXG5cIiArXG4gICAgXCIgICAgICAgIDxzbWFsbCBjbGFzcz1cXFwiaW5wdXQtZXJyb3JcXFwiIG5nLXNob3c9XFxcImhhc1Byb3BlcnR5RXJyb3IoY29udGFjdEZvcm0ubWVzc2FnZSwgJ21heGxlbmd0aCcpXFxcIj5Ub28gTG9uZzwvc21hbGw+XFxuXCIgK1xuICAgIFwiICAgICAgICA8c3BhbiBuZy1zaG93PVxcXCJoYXNFcnJvcihjb250YWN0Rm9ybS5tZXNzYWdlKVxcXCIgY2xhc3M9XFxcImdseXBoaWNvbiBnbHlwaGljb24tcmVtb3ZlIGZvcm0tY29udHJvbC1mZWVkYmFja1xcXCI+PC9zcGFuPlxcblwiICtcbiAgICBcIiAgICAgIDwvZGl2PlxcblwiICtcbiAgICBcIiAgICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgIDwvZm9ybT5cXG5cIiArXG4gICAgXCI8L2Rpdj5cXG5cIiArXG4gICAgXCI8ZGl2IGNsYXNzPVxcXCJtb2RhbC1mb290ZXJcXFwiPlxcblwiICtcbiAgICBcIiAgPGJ1dHRvbiBjbGFzcz1cXFwiYnRuIGJ0bi1kZWZhdWx0XFxcIiBuZy1jbGljaz1cXFwiY2FuY2VsKClcXFwiPkNhbmNlbDwvYnV0dG9uPlxcblwiICtcbiAgICBcIiAgPGJ1dHRvbiBjbGFzcz1cXFwiYnRuIGJ0bi1wcmltYXJ5XFxcIiBuZy1kaXNhYmxlZD1cXFwiY29udGFjdEZvcm0uJHByaXN0aW5lIHx8IGNvbnRhY3RGb3JtLiRpbnZhbGlkXFxcIiBuZy1jbGljaz1cXFwiY29udGFjdENvbW1pc2gobGVhZ3VlRGF0YSwgY29tbWlzaE1lc3NhZ2UpXFxcIj5TZW5kPC9idXR0b24+XFxuXCIgK1xuICAgIFwiPC9kaXY+XCIpO1xufV0pO1xuXG5hbmd1bGFyLm1vZHVsZShcIm1vZHVsZXMvcHJpdmF0ZS9sZWFndWUvZWRpdC9sZWFndWUuZWRpdC50cGwuaHRtbFwiLCBbXSkucnVuKFtcIiR0ZW1wbGF0ZUNhY2hlXCIsIGZ1bmN0aW9uKCR0ZW1wbGF0ZUNhY2hlKSB7XG4gICR0ZW1wbGF0ZUNhY2hlLnB1dChcIm1vZHVsZXMvcHJpdmF0ZS9sZWFndWUvZWRpdC9sZWFndWUuZWRpdC50cGwuaHRtbFwiLFxuICAgIFwiPGRpdiBjbGFzcz1cXFwiZWRpdC1sZWFndWUtaGVhZGVyLXJvdyByb3dcXFwiPlxcblwiICtcbiAgICBcIiAgPGRpdiBjbGFzcz1cXFwiY29sLXNtLTEyIGNvbC1tZC0xMlxcXCI+XFxuXCIgK1xuICAgIFwiICAgIDxoMz5FZGl0IHt7bGVhZ3VlRGF0YS5uYW1lfX08L2gzPlxcblwiICtcbiAgICBcIiAgPC9kaXY+XFxuXCIgK1xuICAgIFwiPC9kaXY+XFxuXCIgK1xuICAgIFwiPGhyPlxcblwiICtcbiAgICBcIjxmb3JtIG5hbWU9XFxcImxlYWd1ZUZvcm1cXFwiIGNsYXNzPVxcXCJlZGl0LWxlYWd1ZS1mb3JtXFxcIiByb2xlPVxcXCJmb3JtXFxcIiBub3ZhbGlkYXRlPlxcblwiICtcbiAgICBcIiAgPGRpdiBjbGFzcz1cXFwicm93IGZvcm0tZ3JvdXAgcHJvZHVjdC1jaG9vc2VyXFxcIj5cXG5cIiArXG4gICAgXCIgICAgPGRpdiBjbGFzcz1cXFwiY29sLXhzLTEyIGNvbC1zbS0xMiBjb2wtbWQtNiBjb2wtbGctNlxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgPGRpdiBjbGFzcz1cXFwicHJvZHVjdC1jaG9vc2VyLWl0ZW1cXFwiIG5nLWNsYXNzPVxcXCJ7J3NlbGVjdGVkJzogbGVhZ3VlRGF0YS5wdWJsaWMgPT0gdHJ1ZX1cXFwiIG5nLWNsaWNrPVxcXCJsZWFndWVEYXRhLnB1YmxpYyA9IHRydWVcXFwiPlxcblwiICtcbiAgICBcIiAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXhzLTEyIGNvbC1zbS0xMiBjb2wtbWQtMTIgY29sLWxnLTEyXFxcIj5cXG5cIiArXG4gICAgXCIgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcInRpdGxlXFxcIj48aSBjbGFzcz1cXFwiZmEgZmEtdW5sb2NrIGljb25cXFwiPjwvaT4gUHVibGljIExlYWd1ZTwvc3Bhbj5cXG5cIiArXG4gICAgXCIgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcImRlc2NyaXB0aW9uXFxcIj5BbnlvbmUgY2FuIGpvaW4gYSBwdWJsaWMgbGVhZ3VlLiBNZW1iZXJzIG9mIGEgcHVibGljIGxlYWd1ZSBjYW4gYWxzbyBpbnZpdGUgb3RoZXJzIHRvIGpvaW4gdGhlIGxlYWd1ZS48L3NwYW4+XFxuXCIgK1xuICAgIFwiICAgICAgICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgICAgICAgIDxkaXYgY2xhc3M9XFxcImNsZWFyXFxcIj48L2Rpdj5cXG5cIiArXG4gICAgXCIgICAgICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgICAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICAgIDxkaXYgY2xhc3M9XFxcImNvbC14cy0xMiBjb2wtc20tMTIgY29sLW1kLTYgY29sLWxnLTZcXFwiPlxcblwiICtcbiAgICBcIiAgICAgIDxkaXYgY2xhc3M9XFxcInByb2R1Y3QtY2hvb3Nlci1pdGVtXFxcIiBuZy1jbGFzcz1cXFwieydzZWxlY3RlZCc6IGxlYWd1ZURhdGEucHVibGljID09IGZhbHNlfVxcXCIgbmctY2xpY2s9XFxcImxlYWd1ZURhdGEucHVibGljID0gZmFsc2VcXFwiPlxcblwiICtcbiAgICBcIiAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXhzLTEyIGNvbC1zbS0xMiBjb2wtbWQtMTIgY29sLWxnLTEyXFxcIj5cXG5cIiArXG4gICAgXCIgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcInRpdGxlXFxcIj48aSBjbGFzcz1cXFwiZmEgZmEtbG9jayBpY29uXFxcIj48L2k+IFByaXZhdGUgTGVhZ3VlPC9zcGFuPlxcblwiICtcbiAgICBcIiAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwiZGVzY3JpcHRpb25cXFwiPkFuIGludml0ZSBmcm9tIHRoZSBjb21taXNoIGlzIHJlcXVpcmVkIHRvIGpvaW4gYSBwcml2YXRlIGxlYWd1ZS4gT25seSB0aGUgY29tbWlzaCBjYW4gaW52aXRlIHBlb3BsZSB0byBqb2luIHRoZSBsZWFndWUuPC9zcGFuPlxcblwiICtcbiAgICBcIiAgICAgICAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjbGVhclxcXCI+PC9kaXY+XFxuXCIgK1xuICAgIFwiICAgICAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICAgIDwvZGl2PlxcblwiICtcbiAgICBcIiAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICA8ZGl2IGNsYXNzPVxcXCJyb3cgZm9ybS1ncm91cCBwcm9kdWN0LWNob29zZXJcXFwiIG5nLXNob3c9XFxcIiFsZWFndWVEYXRhLnN0YXJ0ZWRcXFwiPlxcblwiICtcbiAgICBcIiAgICA8ZGl2IGNsYXNzPVxcXCJjb2wteHMtMTIgY29sLXNtLTEyIGNvbC1tZC02IGNvbC1sZy02XFxcIj5cXG5cIiArXG4gICAgXCIgICAgICA8ZGl2IGNsYXNzPVxcXCJwcm9kdWN0LWNob29zZXItaXRlbVxcXCIgbmctY2xhc3M9XFxcInsnc2VsZWN0ZWQnOiBsZWFndWVEYXRhLmVsaW1pbmF0aW9uID09IGZhbHNlfVxcXCIgbmctY2xpY2s9XFxcImxlYWd1ZURhdGEubWF4X3BpY2tzX3Blcl93ZWVrID0gbnVsbDsgbGVhZ3VlRGF0YS5lbGltaW5hdGlvbiA9IGZhbHNlXFxcIj5cXG5cIiArXG4gICAgXCIgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC14cy0xMiBjb2wtc20tMTIgY29sLW1kLTEyIGNvbC1sZy0xMlxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJ0aXRsZVxcXCI+PGkgY2xhc3M9XFxcImZhIGZhLXRoLWxpc3RcXFwiPjwvaT4gUGljaydlbSBGb3JtYXQ8L3NwYW4+XFxuXCIgK1xuICAgIFwiICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJkZXNjcmlwdGlvblxcXCI+UGljaydlbSBmb3JtYXQgYWxsb3dzIHRlYW1zIHRvIG1ha2Ugb25lIG9yIG1vcmUgcGlja3MgZWFjaCB3ZWVrLiBUaGUgY29tbWlzaCBkZXRlcm1pbmVzIGhvdyBtYW55IHBpY2tzIGNhbiBiZSBtYWRlIGVhY2ggd2Vlay48L3NwYW4+XFxuXCIgK1xuICAgIFwiICAgICAgICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgICAgICAgIDxkaXYgY2xhc3M9XFxcImNsZWFyXFxcIj48L2Rpdj5cXG5cIiArXG4gICAgXCIgICAgICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgICAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICAgIDxkaXYgY2xhc3M9XFxcImNvbC14cy0xMiBjb2wtc20tMTIgY29sLW1kLTYgY29sLWxnLTZcXFwiPlxcblwiICtcbiAgICBcIiAgICAgIDxkaXYgY2xhc3M9XFxcInByb2R1Y3QtY2hvb3Nlci1pdGVtXFxcIiBuZy1jbGFzcz1cXFwieydzZWxlY3RlZCc6IGxlYWd1ZURhdGEuZWxpbWluYXRpb24gPT0gdHJ1ZX1cXFwiIG5nLWNsaWNrPVxcXCJsZWFndWVEYXRhLm1heF9waWNrc19wZXJfd2VlayA9IDE7IGxlYWd1ZURhdGEuZWxpbWluYXRpb24gPSB0cnVlXFxcIj5cXG5cIiArXG4gICAgXCIgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC14cy0xMiBjb2wtc20tMTIgY29sLW1kLTEyIGNvbC1sZy0xMlxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJ0aXRsZVxcXCI+PGkgY2xhc3M9XFxcImZhIGZhLWNoZWNrXFxcIj48L2k+IFN1cnZpdm9yIEZvcm1hdDwvc3Bhbj5cXG5cIiArXG4gICAgXCIgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcImRlc2NyaXB0aW9uXFxcIj5TdXJ2aXZvciBmb3JtYXQgcmVxdWlyZXMgYSB0ZWFtIHRvIG1ha2UgYSBkaWZmZXJlbnQgcGljayBlYWNoIHdlZWsuIElmIHlvdSBmYWlsIHRvIHBpY2sgYSBsb3NlciwgeW91ciB0ZWFtIGlzIGVsaW1pbmF0ZWQuIFRoZSB0ZWFtIHdpdGggdGhlIG1vc3QgcGlja3Mgd2lucy48L3NwYW4+XFxuXCIgK1xuICAgIFwiICAgICAgICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgICAgICAgIDxkaXYgY2xhc3M9XFxcImNsZWFyXFxcIj48L2Rpdj5cXG5cIiArXG4gICAgXCIgICAgICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgICAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgIDxkaXYgY2xhc3M9XFxcImVkaXQtbGVhZ3VlLWRldGFpbHNcXFwiPlxcblwiICtcbiAgICBcIiAgICA8ZGl2IGNsYXNzPVxcXCJyb3dcXFwiIG5nLXNob3c9XFxcImxlYWd1ZURhdGEuc3RhcnRlZFxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXNtLTEyIGNvbC1tZC0xMlxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj5cXG5cIiArXG4gICAgXCIgICAgICAgICAgPGxhYmVsIGNsYXNzPVxcXCJjb250cm9sLWxhYmVsXFxcIj5MZWFndWUgZm9ybWF0PC9sYWJlbD5cXG5cIiArXG4gICAgXCIgICAgICAgICAgPGlucHV0IHR5cGU9XFxcInRleHRcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIHZhbHVlPVxcXCJQaWNrJ2VtIFsgbm8gZWxpbWluYXRpb24gXVxcXCIgbmctc2hvdz1cXFwiIWxlYWd1ZURhdGEuZWxpbWluYXRpb25cXFwiIG5nLWRpc2FibGVkPVxcXCJ0cnVlXFxcIj5cXG5cIiArXG4gICAgXCIgICAgICAgICAgPGlucHV0IHR5cGU9XFxcInRleHRcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIHZhbHVlPVxcXCJTdXJ2aXZvciBbIHNpbmdsZSBlbGltaW5hdGlvbiBdXFxcIiBuZy1zaG93PVxcXCJsZWFndWVEYXRhLmVsaW1pbmF0aW9uXFxcIiBuZy1kaXNhYmxlZD1cXFwidHJ1ZVxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgICAgICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgICAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICAgIDxkaXYgY2xhc3M9XFxcInJvd1xcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXNtLTEyIGNvbC1tZC0xMlxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj5cXG5cIiArXG4gICAgXCIgICAgICAgICAgPGxhYmVsIGNsYXNzPVxcXCJjb250cm9sLWxhYmVsXFxcIiBmb3I9XFxcIm1heFBpY2tzXFxcIj5QaWNrcyBwZXIgd2VlazwvbGFiZWw+XFxuXCIgK1xuICAgIFwiICAgICAgICAgIDxzZWxlY3QgaWQ9XFxcIm1heFBpY2tzXFxcIiBuYW1lPVxcXCJtYXhQaWNrc1xcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgbmctZGlzYWJsZWQ9XFxcImxlYWd1ZURhdGEuZWxpbWluYXRpb25cXFwiIG5nLW1vZGVsPVxcXCJsZWFndWVEYXRhLm1heF9waWNrc19wZXJfd2Vla1xcXCIgbmctb3B0aW9ucz1cXFwibWF4UGljay5udW1iZXIgYXMgbWF4UGljay5kaXNwbGF5IGZvciBtYXhQaWNrIGluIG1heFBpY2tzUGVyV2Vla1xcXCI+PC9zZWxlY3Q+XFxuXCIgK1xuICAgIFwiICAgICAgICAgIDxzbWFsbCBjbGFzcz1cXFwiaW5wdXQtZXJyb3JcXFwiIG5nLXNob3c9XFxcImxlYWd1ZURhdGEuZWxpbWluYXRpb25cXFwiPjxpIGNsYXNzPVxcXCJmYSBmYS13YXJuaW5nIGZhLWZ3XFxcIiB0aXRsZT1cXFwiV2FybmluZ1xcXCI+PC9pPiBTdXJ2aXZvciBsZWFndWVzIG9ubHkgYWxsb3cgMSBwaWNrIHBlciB3ZWVrLCBubyByZXBlYXRzPC9zbWFsbD5cXG5cIiArXG4gICAgXCIgICAgICAgIDwvZGl2PlxcblwiICtcbiAgICBcIiAgICAgIDwvZGl2PlxcblwiICtcbiAgICBcIiAgICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgICAgPGRpdiBjbGFzcz1cXFwicm93XFxcIiBuZy1zaG93PVxcXCJsZWFndWVEYXRhLmVsaW1pbmF0aW9uXFxcIj5cXG5cIiArXG4gICAgXCIgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtc20tMTIgY29sLW1kLTEyXFxcIj5cXG5cIiArXG4gICAgXCIgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPlxcblwiICtcbiAgICBcIiAgICAgICAgICA8bGFiZWw+XFxuXCIgK1xuICAgIFwiICAgICAgICAgICAgPGlucHV0IHR5cGU9XFxcImNoZWNrYm94XFxcIiBuZy1tb2RlbD1cXFwibGVhZ3VlRGF0YS5lbGltaW5hdGVfb25fdGllXFxcIiBuZy1kaXNhYmxlZD1cXFwibGVhZ3VlRGF0YS5zdGFydGVkXFxcIj4gZWxpbWluYXRlIGEgdGVhbSB0aGF0IHBpY2tzIGEgdGllXFxuXCIgK1xuICAgIFwiICAgICAgICAgIDwvbGFiZWw+XFxuXCIgK1xuICAgIFwiICAgICAgICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgICAgICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgICAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICAgIDxocj5cXG5cIiArXG4gICAgXCIgICAgPGRpdiBjbGFzcz1cXFwicm93XFxcIj5cXG5cIiArXG4gICAgXCIgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtc20tMTIgY29sLW1kLTEyXFxcIj5cXG5cIiArXG4gICAgXCIgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiIG5nLWNsYXNzPVxcXCJ7J2hhcy1lcnJvcic6IGhhc0Vycm9yKGxlYWd1ZUZvcm0ubGVhZ3VlTmFtZSksICdoYXMtZmVlZGJhY2snOiBoYXNFcnJvcihsZWFndWVGb3JtLmxlYWd1ZU5hbWUpfVxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgICAgIDxsYWJlbCBjbGFzcz1cXFwiY29udHJvbC1sYWJlbFxcXCIgZm9yPVxcXCJsZWFndWVOYW1lXFxcIj5MZWFndWUgbmFtZVxcblwiICtcbiAgICBcIiAgICAgICAgICAgIDxzbWFsbCBuZy1zaG93PVxcXCJoYXNQcm9wZXJ0eUVycm9yKGxlYWd1ZUZvcm0ubGVhZ3VlTmFtZSwgJ3JlcXVpcmVkJylcXFwiPlsgUmVxdWlyZWQgXTwvc21hbGw+XFxuXCIgK1xuICAgIFwiICAgICAgICAgICAgPHNtYWxsIG5nLXNob3c9XFxcImhhc1Byb3BlcnR5RXJyb3IobGVhZ3VlRm9ybS5sZWFndWVOYW1lLCAnbWF4bGVuZ3RoJylcXFwiPlsgVG9vIExvbmcgXTwvc21hbGw+XFxuXCIgK1xuICAgIFwiICAgICAgICAgIDwvbGFiZWw+XFxuXCIgK1xuICAgIFwiICAgICAgICAgIDxpbnB1dCBpZD1cXFwibGVhZ3VlTmFtZVxcXCIgbmFtZT1cXFwibGVhZ3VlTmFtZVxcXCIgdHlwZT1cXFwidGV4dFxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgbmctbW9kZWw9XFxcImxlYWd1ZURhdGEubmFtZVxcXCIgbmctbWF4bGVuZ3RoPVxcXCIzMFxcXCIgcmVxdWlyZWQ+XFxuXCIgK1xuICAgIFwiICAgICAgICAgIDxzcGFuIG5nLXNob3c9XFxcImhhc0Vycm9yKGxlYWd1ZUZvcm0ubGVhZ3VlTmFtZSlcXFwiIGNsYXNzPVxcXCJnbHlwaGljb24gZ2x5cGhpY29uLXJlbW92ZSBmb3JtLWNvbnRyb2wtZmVlZGJhY2tcXFwiPjwvc3Bhbj5cXG5cIiArXG4gICAgXCIgICAgICAgIDwvZGl2PlxcblwiICtcbiAgICBcIiAgICAgIDwvZGl2PlxcblwiICtcbiAgICBcIiAgICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgICAgPGRpdiBjbGFzcz1cXFwicm93XFxcIj5cXG5cIiArXG4gICAgXCIgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtc20tMTIgY29sLW1kLTEyXFxcIj5cXG5cIiArXG4gICAgXCIgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPlxcblwiICtcbiAgICBcIiAgICAgICAgICA8bGFiZWwgY2xhc3M9XFxcImNvbnRyb2wtbGFiZWxcXFwiPlNlYXNvbjwvbGFiZWw+XFxuXCIgK1xuICAgIFwiICAgICAgICAgIDxpbnB1dCBpZD1cXFwic2Vhc29uTmFtZVxcXCIgbmFtZT1cXFwic2Vhc29uTmFtZVxcXCIgdHlwZT1cXFwidGV4dFxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgbmctbW9kZWw9XFxcImxlYWd1ZURhdGEuc2Vhc29uX25hbWVcXFwiIG5nLWRpc2FibGVkPVxcXCJ0cnVlXFxcIj5cXG5cIiArXG4gICAgXCIgICAgICAgIDwvZGl2PlxcblwiICtcbiAgICBcIiAgICAgIDwvZGl2PlxcblwiICtcbiAgICBcIiAgICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgICAgPGRpdiBjbGFzcz1cXFwicm93XFxcIj5cXG5cIiArXG4gICAgXCIgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtc20tMTIgY29sLW1kLTEyXFxcIj5cXG5cIiArXG4gICAgXCIgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPlxcblwiICtcbiAgICBcIiAgICAgICAgICA8bGFiZWwgY2xhc3M9XFxcImNvbnRyb2wtbGFiZWxcXFwiIGZvcj1cXFwic3RhcnRXZWVrXFxcIj5TdGFydCB3ZWVrPC9sYWJlbD5cXG5cIiArXG4gICAgXCIgICAgICAgICAgPHNlbGVjdCBpZD1cXFwic3RhcnRXZWVrXFxcIiBuYW1lPVxcXCJzdGFydFdlZWtcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIG5nLXNob3c9XFxcIiFsZWFndWVEYXRhLnN0YXJ0ZWRcXFwiIG5nLW1vZGVsPVxcXCJsZWFndWVEYXRhLnN0YXJ0X3dlZWtfaWRcXFwiIG5nLW9wdGlvbnM9XFxcIndlZWsuaWQgYXMgd2Vlay5kaXNwbGF5IGZvciB3ZWVrIGluIHdlZWtzXFxcIj48L3NlbGVjdD5cXG5cIiArXG4gICAgXCIgICAgICAgICAgPGlucHV0IGlkPVxcXCJzdGFydFdlZWtEaXNwbGF5XFxcIiBuYW1lPVxcXCJzdGFydFdlZWtEaXNwbGF5XFxcIiB0eXBlPVxcXCJ0ZXh0XFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBuZy1zaG93PVxcXCJsZWFndWVEYXRhLnN0YXJ0ZWRcXFwiIG5nLW1vZGVsPVxcXCJsZWFndWVEYXRhLnN0YXJ0X3dlZWtfZGlzcGxheVxcXCIgbmctZGlzYWJsZWQ9XFxcInRydWVcXFwiPlxcblwiICtcbiAgICBcIiAgICAgICAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICAgICAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICAgIDwvZGl2PlxcblwiICtcbiAgICBcIiAgICA8ZGl2IGNsYXNzPVxcXCJyb3dcXFwiPlxcblwiICtcbiAgICBcIiAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1zbS0xMiBjb2wtbWQtMTJcXFwiPlxcblwiICtcbiAgICBcIiAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCIgbmctY2xhc3M9XFxcInsnaGFzLWVycm9yJzogaGFzRXJyb3IobGVhZ3VlRm9ybS5tYXhUZWFtcyksICdoYXMtZmVlZGJhY2snOiBoYXNFcnJvcihsZWFndWVGb3JtLm1heFRlYW1zKX1cXFwiPlxcblwiICtcbiAgICBcIiAgICAgICAgICA8bGFiZWwgY2xhc3M9XFxcImNvbnRyb2wtbGFiZWxcXFwiIGZvcj1cXFwibWF4VGVhbXNcXFwiPkhvdyBtYW55IHRpbWVzIGNhbiBhIHVzZXIgam9pbj9cXG5cIiArXG4gICAgXCIgICAgICAgICAgICA8c21hbGwgbmctc2hvdz1cXFwiaGFzUHJvcGVydHlFcnJvcihsZWFndWVGb3JtLm1heFRlYW1zLCAncmVxdWlyZWQnKVxcXCI+WyBOdW1iZXIgUmVxdWlyZWQgXTwvc21hbGw+XFxuXCIgK1xuICAgIFwiICAgICAgICAgICAgPHNtYWxsIG5nLXNob3c9XFxcImhhc1Byb3BlcnR5RXJyb3IobGVhZ3VlRm9ybS5tYXhUZWFtcywgJ21pbicpXFxcIj5bIDEgLSAxMCBdPC9zbWFsbD5cXG5cIiArXG4gICAgXCIgICAgICAgICAgICA8c21hbGwgbmctc2hvdz1cXFwiaGFzUHJvcGVydHlFcnJvcihsZWFndWVGb3JtLm1heFRlYW1zLCAnbWF4JylcXFwiPlsgMSAtIDEwIF08L3NtYWxsPlxcblwiICtcbiAgICBcIiAgICAgICAgICA8L2xhYmVsPlxcblwiICtcbiAgICBcIiAgICAgICAgICA8aW5wdXQgaWQ9XFxcIm1heFRlYW1zXFxcIiBuYW1lPVxcXCJtYXhUZWFtc1xcXCIgdHlwZT1cXFwibnVtYmVyXFxcIiBwbGFjZWhvbGRlcj1cXFwiQmV0d2VlbiAxIGFuZCAxMCB0aW1lc1xcXCIgbWluPVxcXCIxXFxcIiBtYXg9XFxcIjEwXFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBuZy1tb2RlbD1cXFwibGVhZ3VlRGF0YS5tYXhfdGVhbXNfcGVyX3VzZXJcXFwiIGxvZ2gtZm9jdXMgcmVxdWlyZWQ+XFxuXCIgK1xuICAgIFwiICAgICAgICAgIDxzcGFuIG5nLXNob3c9XFxcImhhc0Vycm9yKGxlYWd1ZUZvcm0ubWF4VGVhbXMpXFxcIiBjbGFzcz1cXFwiZ2x5cGhpY29uIGdseXBoaWNvbi1yZW1vdmUgZm9ybS1jb250cm9sLWZlZWRiYWNrXFxcIj48L3NwYW4+XFxuXCIgK1xuICAgIFwiICAgICAgICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgICAgICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgICAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICAgIDxkaXYgY2xhc3M9XFxcInJvd1xcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXNtLTEyIGNvbC1tZC0xMlxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj5cXG5cIiArXG4gICAgXCIgICAgICAgICAgPGxhYmVsIGNsYXNzPVxcXCJjb250cm9sLWxhYmVsXFxcIiBmb3I9XFxcIm1lc3NhZ2VcXFwiPk1lc3NhZ2UgWyBPcHRpb25hbCBdPC9sYWJlbD5cXG5cIiArXG4gICAgXCIgICAgICAgICAgPHRleHRhcmVhIGlkPVxcXCJtZXNzYWdlXFxcIiBuYW1lPVxcXCJtZXNzYWdlXFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBwbGFjZWhvbGRlcj1cXFwiRW50ZXIgYSBtZXNzYWdlIGZvciB5b3VyIGxlYWd1ZSBoZXJlLiBZb3UgY2FuIGNoYW5nZSBpdCBhdCBhbnkgdGltZS5cXFwiIHJvd3M9XFxcIjJcXFwiIG1heGxlbmd0aD1cXFwiNTAwXFxcIiBuZy1tb2RlbD1cXFwibGVhZ3VlRGF0YS5tZXNzYWdlXFxcIj48L3RleHRhcmVhPlxcblwiICtcbiAgICBcIiAgICAgICAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICAgICAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICAgIDwvZGl2PlxcblwiICtcbiAgICBcIiAgICA8ZGl2IGNsYXNzPVxcXCJlZGl0LWxlYWd1ZS1idG4tZ3JvdXBcXFwiPlxcblwiICtcbiAgICBcIiAgICAgIDxidXR0b24gY2xhc3M9XFxcImVkaXQtbGVhZ3VlLWJ0biBidG4gYnRuLXByaW1hcnlcXFwiIG5nLWRpc2FibGVkPVxcXCJsZWFndWVGb3JtLiRpbnZhbGlkIHx8IGVkaXRCdG5EaXNhYmxlZFxcXCIgbmctY2xpY2s9XFxcInVwZGF0ZUxlYWd1ZShsZWFndWVEYXRhKVxcXCI+VXBkYXRlIExlYWd1ZTwvYnV0dG9uPlxcblwiICtcbiAgICBcIiAgICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgIDwvZGl2PlxcblwiICtcbiAgICBcIjwvZm9ybT5cXG5cIiArXG4gICAgXCJcIik7XG59XSk7XG5cbmFuZ3VsYXIubW9kdWxlKFwibW9kdWxlcy9wcml2YXRlL2xlYWd1ZS9pbnZpdGUvbGVhZ3VlLmludml0ZS50cGwuaHRtbFwiLCBbXSkucnVuKFtcIiR0ZW1wbGF0ZUNhY2hlXCIsIGZ1bmN0aW9uKCR0ZW1wbGF0ZUNhY2hlKSB7XG4gICR0ZW1wbGF0ZUNhY2hlLnB1dChcIm1vZHVsZXMvcHJpdmF0ZS9sZWFndWUvaW52aXRlL2xlYWd1ZS5pbnZpdGUudHBsLmh0bWxcIixcbiAgICBcIjxkaXYgY2xhc3M9XFxcIm1vZGFsLWhlYWRlclxcXCI+XFxuXCIgK1xuICAgIFwiICA8YnV0dG9uIHR5cGU9XFxcImJ1dHRvblxcXCIgY2xhc3M9XFxcImNsb3NlXFxcIiBuZy1jbGljaz1cXFwiY2FuY2VsKClcXFwiPjxzcGFuIGFyaWEtaGlkZGVuPVxcXCJ0cnVlXFxcIj4mdGltZXM7PC9zcGFuPjxzcGFuIGNsYXNzPVxcXCJzci1vbmx5XFxcIj5DbG9zZTwvc3Bhbj48L2J1dHRvbj5cXG5cIiArXG4gICAgXCIgIDxoMyBjbGFzcz1cXFwibW9kYWwtdGl0bGVcXFwiPjxzcGFuIG5nLXNob3c9XFxcIiFsZWFndWVDbG9zZWRcXFwiPkludml0ZSBGcmllbmRzPC9zcGFuPjxzcGFuIG5nLXNob3c9XFxcImxlYWd1ZUNsb3NlZFxcXCI+SW52aXRhdGlvbnM8L3NwYW4+PC9oMz5cXG5cIiArXG4gICAgXCI8L2Rpdj5cXG5cIiArXG4gICAgXCI8ZGl2IGNsYXNzPVxcXCJtb2RhbC1ib2R5XFxcIj5cXG5cIiArXG4gICAgXCIgIDxkaXYgbmctc2hvdz1cXFwiIWxlYWd1ZUNsb3NlZFxcXCI+XFxuXCIgK1xuICAgIFwiICAgIDxmb3JtIG5hbWU9XFxcImludml0ZUZvcm1cXFwiIGNsYXNzPVxcXCJpbnZpdGUtZm9ybVxcXCIgcm9sZT1cXFwiZm9ybVxcXCIgbm92YWxpZGF0ZT5cXG5cIiArXG4gICAgXCIgICAgICA8ZGl2IGNsYXNzPVxcXCJyb3dcXFwiPlxcblwiICtcbiAgICBcIiAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXNtLTEyIGNvbC1tZC0xMlxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiIG5nLWNsYXNzPVxcXCJ7J2hhcy1lcnJvcic6IGhhc0Vycm9yKGludml0ZUZvcm0uZW1haWxzKSwgJ2hhcy1mZWVkYmFjayc6IGhhc0Vycm9yKGludml0ZUZvcm0uZW1haWxzKX1cXFwiPlxcblwiICtcbiAgICBcIiAgICAgICAgICAgIDxsYWJlbCBmb3I9XFxcImVtYWlsc1xcXCIgY2xhc3M9XFxcImNvbnRyb2wtbGFiZWxcXFwiPkVtYWlsKHMpOjwvbGFiZWw+XFxuXCIgK1xuICAgIFwiICAgICAgICAgICAgPGlucHV0IGlkPVxcXCJlbWFpbHNcXFwiIG5hbWU9XFxcImVtYWlsc1xcXCIgdHlwZT1cXFwidGV4dFxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgcGxhY2Vob2xkZXI9XFxcIlNlcGVyYXRlIGVtYWlscyB3aXRoIGEgc3BhY2UuLi5cXFwiIG5nLW1vZGVsPVxcXCJpbnZpdGF0aW9uLmVtYWlsXFxcIiByZXF1aXJlZD5cXG5cIiArXG4gICAgXCIgICAgICAgICAgICA8c21hbGwgY2xhc3M9XFxcImlucHV0LWVycm9yXFxcIiBuZy1zaG93PVxcXCJoYXNQcm9wZXJ0eUVycm9yKGludml0ZUZvcm0uZW1haWxzLCAncmVxdWlyZWQnKVxcXCI+UmVxdWlyZWQ8L3NtYWxsPlxcblwiICtcbiAgICBcIiAgICAgICAgICAgIDxzcGFuIG5nLXNob3c9XFxcImhhc0Vycm9yKGludml0ZUZvcm0uZW1haWxzKVxcXCIgY2xhc3M9XFxcImdseXBoaWNvbiBnbHlwaGljb24tcmVtb3ZlIGZvcm0tY29udHJvbC1mZWVkYmFja1xcXCI+PC9zcGFuPlxcblwiICtcbiAgICBcIiAgICAgICAgICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgICAgICAgIDwvZGl2PlxcblwiICtcbiAgICBcIiAgICAgIDwvZGl2PlxcblwiICtcbiAgICBcIiAgICAgIDxkaXYgY2xhc3M9XFxcInJvd1xcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtc20tMTIgY29sLW1kLTEyXFxcIj5cXG5cIiArXG4gICAgXCIgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCIgbmctY2xhc3M9XFxcInsnaGFzLWVycm9yJzogaGFzRXJyb3IoaW52aXRlRm9ybS5tZXNzYWdlKSwgJ2hhcy1mZWVkYmFjayc6IGhhc0Vycm9yKGludml0ZUZvcm0ubWVzc2FnZSl9XFxcIj5cXG5cIiArXG4gICAgXCIgICAgICAgICAgICA8bGFiZWwgZm9yPVxcXCJtZXNzYWdlXFxcIiBjbGFzcz1cXFwiY29udHJvbC1sYWJlbFxcXCI+TWVzc2FnZTo8L2xhYmVsPlxcblwiICtcbiAgICBcIiAgICAgICAgICAgIDx0ZXh0YXJlYSBpZD1cXFwibWVzc2FnZVxcXCIgbmFtZT1cXFwibWVzc2FnZVxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgcGxhY2Vob2xkZXI9XFxcIkVudGVyIGEgb3B0aW9uYWwgbWVzc2FnZSB0byBkZWxpdmVyIHdpdGggdGhlIGludml0YXRpb24uLi5cXFwiIHJvd3M9XFxcIjNcXFwiIG1heGxlbmd0aD1cXFwiNTAwXFxcIiBuZy1tb2RlbD1cXFwiaW52aXRhdGlvbi5tZXNzYWdlXFxcIj48L3RleHRhcmVhPlxcblwiICtcbiAgICBcIiAgICAgICAgICAgIDxzbWFsbCBjbGFzcz1cXFwiaW5wdXQtZXJyb3JcXFwiIG5nLXNob3c9XFxcImhhc1Byb3BlcnR5RXJyb3IoaW52aXRlRm9ybS5tZXNzYWdlLCAnbWF4bGVuZ3RoJylcXFwiPlRvbyBMb25nPC9zbWFsbD5cXG5cIiArXG4gICAgXCIgICAgICAgICAgICA8c3BhbiBuZy1zaG93PVxcXCJoYXNFcnJvcihpbnZpdGVGb3JtLm1lc3NhZ2UpXFxcIiBjbGFzcz1cXFwiZ2x5cGhpY29uIGdseXBoaWNvbi1yZW1vdmUgZm9ybS1jb250cm9sLWZlZWRiYWNrXFxcIj48L3NwYW4+XFxuXCIgK1xuICAgIFwiICAgICAgICAgIDwvZGl2PlxcblwiICtcbiAgICBcIiAgICAgICAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICAgICAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICAgICAgPGRpdiBjbGFzcz1cXFwicm93XFxcIj5cXG5cIiArXG4gICAgXCIgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1zbS02IGNvbC1tZC02XFxcIj5cXG5cIiArXG4gICAgXCIgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cXFwiaW52aXRlLXJlc2V0LWJ0biBidG4gYnRuLWRlZmF1bHQgYnRuLWJsb2NrXFxcIiBuZy1jbGljaz1cXFwicmVzZXRJbnZpdGUoKVxcXCI+Q2xlYXI8L2J1dHRvbj5cXG5cIiArXG4gICAgXCIgICAgICAgIDwvZGl2PlxcblwiICtcbiAgICBcIiAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXNtLTYgY29sLW1kLTZcXFwiPlxcblwiICtcbiAgICBcIiAgICAgICAgICA8YnV0dG9uIGNsYXNzPVxcXCJpbnZpdGUtc2VuZC1idG4gYnRuIGJ0bi1wcmltYXJ5IGJ0bi1ibG9ja1xcXCIgbmctZGlzYWJsZWQ9XFxcImludml0ZUZvcm0uJGludmFsaWRcXFwiIG5nLWNsaWNrPVxcXCJzZW5kSW52aXRlKGludml0YXRpb24pXFxcIj5TZW5kPC9idXR0b24+XFxuXCIgK1xuICAgIFwiICAgICAgICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgICAgICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgICAgPC9mb3JtPlxcblwiICtcbiAgICBcIiAgICA8aHI+XFxuXCIgK1xuICAgIFwiICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgIDxkaXYgbmctc2hvdz1cXFwiaXNDb21taXNoXFxcIj5cXG5cIiArXG4gICAgXCIgICAgPGRpdiBjbGFzcz1cXFwiaW52aXRlcy10YWJcXFwiPlxcblwiICtcbiAgICBcIiAgICAgIDx1bCBjbGFzcz1cXFwibmF2IG5hdi10YWJzXFxcIj5cXG5cIiArXG4gICAgXCIgICAgICAgIDxsaSBjbGFzcz1cXFwiYWN0aXZlXFxcIj48YT5JbnZpdGVzIFsge3tpbnZpdGF0aW9ucy5sZW5ndGh9fSBdPC9hPjwvbGk+XFxuXCIgK1xuICAgIFwiICAgICAgPC91bD5cXG5cIiArXG4gICAgXCIgICAgICA8c3BhbiBjbGFzcz1cXFwiY2xpY2stdG8tZWRpdFxcXCIgbmctc2hvdz1cXFwiIWxlYWd1ZUNsb3NlZFxcXCI+WyBjbGljayBpbnZpdGUgdG8gZWRpdCBdPC9zcGFuPlxcblwiICtcbiAgICBcIiAgICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgICAgPGRpdiBjbGFzcz1cXFwibGVhZ3VlLWludml0ZXNcXFwiPlxcblwiICtcbiAgICBcIiAgICAgIDxkaXYgY2xhc3M9XFxcImxpc3QtZ3JvdXBcXFwiPlxcblwiICtcbiAgICBcIiAgICAgICAgPGEgbmctcmVwZWF0PVxcXCJpbnZpdGUgaW4gaW52aXRhdGlvbnNcXFwiIGNsYXNzPVxcXCJsaXN0LWdyb3VwLWl0ZW1cXFwiIG5nLWNsaWNrPVxcXCJwb3B1bGF0ZUludml0ZShpbnZpdGUpXFxcIj5cXG5cIiArXG4gICAgXCIgICAgICAgICAgPGRpdiBjbGFzcz1cXFwicm93XFxcIj5cXG5cIiArXG4gICAgXCIgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtc20tMTIgY29sLW1kLTEyXFxcIj5cXG5cIiArXG4gICAgXCIgICAgICAgICAgICAgIDxpIGNsYXNzPVxcXCJmYSBmYS1jaGVjayBmYS1md1xcXCIgbmctc2hvdz1cXFwiaW52aXRlLmFjY2VwdGVkX2F0XFxcIiB0aXRsZT1cXFwiQWNjZXB0ZWRcXFwiPjwvaT4ge3tpbnZpdGUuZW1haWx9fVxcblwiICtcbiAgICBcIiAgICAgICAgICAgICAgPGJyPlxcblwiICtcbiAgICBcIiAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcInNlbnQtZGF0ZVxcXCI+PHNwYW4gbmctc2hvdz1cXFwiIWludml0ZS5hY2NlcHRlZF9hdFxcXCI+U2VudDoge3tpbnZpdGUudXBkYXRlZF9hdH19PC9zcGFuPjxzcGFuIG5nLXNob3c9XFxcImludml0ZS5hY2NlcHRlZF9hdFxcXCI+Sm9pbmVkOiB7e2ludml0ZS5hY2NlcHRlZF9hdH19PC9zcGFuPjwvc3Bhbj5cXG5cIiArXG4gICAgXCIgICAgICAgICAgICAgIDxicj5cXG5cIiArXG4gICAgXCIgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJpbnZpdGVlXFxcIiBuZy1zaG93PVxcXCJpbnZpdGUuaW52aXRlZS5sZW5ndGggPiAwXFxcIj5JbnZpdGVlOiB7e2ludml0ZS5pbnZpdGVlfX08L3NwYW4+XFxuXCIgK1xuICAgIFwiICAgICAgICAgICAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICAgICAgICAgIDwvZGl2PlxcblwiICtcbiAgICBcIiAgICAgICAgPC9hPlxcblwiICtcbiAgICBcIiAgICAgIDwvZGl2PlxcblwiICtcbiAgICBcIiAgICAgIDxkaXYgY2xhc3M9XFxcIm5vLXBpY2tzLWFsZXJ0IGFsZXJ0IGFsZXJ0LWluZm9cXFwiIG5nLXNob3c9XFxcImludml0YXRpb25zLmxlbmd0aCA9PSAwXFxcIj5cXG5cIiArXG4gICAgXCIgICAgICAgIE5vIGludml0ZXNcXG5cIiArXG4gICAgXCIgICAgICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgICAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICA8L2Rpdj5cXG5cIiArXG4gICAgXCI8L2Rpdj5cXG5cIiArXG4gICAgXCI8ZGl2IGNsYXNzPVxcXCJtb2RhbC1mb290ZXJcXFwiPlxcblwiICtcbiAgICBcIiAgPGJ1dHRvbiBjbGFzcz1cXFwiYnRuIGJ0bi1kZWZhdWx0XFxcIiBuZy1jbGljaz1cXFwiY2FuY2VsKClcXFwiPkNsb3NlPC9idXR0b24+XFxuXCIgK1xuICAgIFwiPC9kaXY+XCIpO1xufV0pO1xuXG5hbmd1bGFyLm1vZHVsZShcIm1vZHVsZXMvcHJpdmF0ZS9sZWFndWUvaW52aXRlL3JlcXVlc3QvbGVhZ3VlLmludml0ZS5yZXF1ZXN0LnRwbC5odG1sXCIsIFtdKS5ydW4oW1wiJHRlbXBsYXRlQ2FjaGVcIiwgZnVuY3Rpb24oJHRlbXBsYXRlQ2FjaGUpIHtcbiAgJHRlbXBsYXRlQ2FjaGUucHV0KFwibW9kdWxlcy9wcml2YXRlL2xlYWd1ZS9pbnZpdGUvcmVxdWVzdC9sZWFndWUuaW52aXRlLnJlcXVlc3QudHBsLmh0bWxcIixcbiAgICBcIjxkaXYgY2xhc3M9XFxcIm1vZGFsLWhlYWRlclxcXCI+XFxuXCIgK1xuICAgIFwiICA8YnV0dG9uIHR5cGU9XFxcImJ1dHRvblxcXCIgY2xhc3M9XFxcImNsb3NlXFxcIiBuZy1jbGljaz1cXFwiY2FuY2VsKClcXFwiPjxzcGFuIGFyaWEtaGlkZGVuPVxcXCJ0cnVlXFxcIj4mdGltZXM7PC9zcGFuPjxzcGFuIGNsYXNzPVxcXCJzci1vbmx5XFxcIj5DbG9zZTwvc3Bhbj48L2J1dHRvbj5cXG5cIiArXG4gICAgXCIgIDxoMyBjbGFzcz1cXFwibW9kYWwtdGl0bGVcXFwiPlJlcXVlc3QgSW52aXRlPC9oMz5cXG5cIiArXG4gICAgXCI8L2Rpdj5cXG5cIiArXG4gICAgXCI8ZGl2IGNsYXNzPVxcXCJtb2RhbC1ib2R5XFxcIj5cXG5cIiArXG4gICAgXCIgIDxmb3JtIG5hbWU9XFxcInJlcXVlc3RJbnZpdGVGb3JtXFxcIiBjbGFzcz1cXFwicmVxdWVzdC1pbnZpdGUtZm9ybSBmb3JtLWhvcml6b250YWxcXFwiIHJvbGU9XFxcImZvcm1cXFwiIG5vdmFsaWRhdGU+XFxuXCIgK1xuICAgIFwiICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiIG5nLWNsYXNzPVxcXCJ7J2hhcy1lcnJvcic6IGhhc0Vycm9yKHJlcXVlc3RJbnZpdGVGb3JtLmVtYWlsKSwgJ2hhcy1mZWVkYmFjayc6IGhhc0Vycm9yKHJlcXVlc3RJbnZpdGVGb3JtLmVtYWlsKX1cXFwiPlxcblwiICtcbiAgICBcIiAgICAgIDxsYWJlbCBmb3I9XFxcImVtYWlsXFxcIiBjbGFzcz1cXFwiY29sLXNtLTIgY29udHJvbC1sYWJlbFxcXCI+Rm9yOjwvbGFiZWw+XFxuXCIgK1xuICAgIFwiICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXNtLTEwXFxcIj5cXG5cIiArXG4gICAgXCIgICAgICAgIDxpbnB1dCBpZD1cXFwiZW1haWxcXFwiIG5hbWU9XFxcImVtYWlsXFxcIiB0eXBlPVxcXCJlbWFpbFxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgcGxhY2Vob2xkZXI9XFxcIkVudGVyIGVtYWlsXFxcIiBuZy1tb2RlbD1cXFwiaW52aXRhdGlvbi5lbWFpbFxcXCIgcmVxdWlyZWQ+XFxuXCIgK1xuICAgIFwiICAgICAgICA8c21hbGwgY2xhc3M9XFxcImlucHV0LWVycm9yXFxcIiBuZy1zaG93PVxcXCJoYXNQcm9wZXJ0eUVycm9yKHJlcXVlc3RJbnZpdGVGb3JtLmVtYWlsLCAncmVxdWlyZWQnKVxcXCI+UmVxdWlyZWQ8L3NtYWxsPlxcblwiICtcbiAgICBcIiAgICAgICAgPHNtYWxsIGNsYXNzPVxcXCJpbnB1dC1lcnJvclxcXCIgbmctc2hvdz1cXFwiaGFzUHJvcGVydHlFcnJvcihyZXF1ZXN0SW52aXRlRm9ybS5lbWFpbCwgJ2VtYWlsJylcXFwiPkludmFsaWQgZW1haWw8L3NtYWxsPlxcblwiICtcbiAgICBcIiAgICAgICAgPHNwYW4gbmctc2hvdz1cXFwiaGFzRXJyb3IocmVxdWVzdEludml0ZUZvcm0uZW1haWwpXFxcIiBjbGFzcz1cXFwiZ2x5cGhpY29uIGdseXBoaWNvbi1yZW1vdmUgZm9ybS1jb250cm9sLWZlZWRiYWNrXFxcIj48L3NwYW4+XFxuXCIgK1xuICAgIFwiICAgICAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICAgIDwvZGl2PlxcblwiICtcbiAgICBcIiAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIiBuZy1jbGFzcz1cXFwieydoYXMtZXJyb3InOiBoYXNFcnJvcihyZXF1ZXN0SW52aXRlRm9ybS5tZXNzYWdlKSwgJ2hhcy1mZWVkYmFjayc6IGhhc0Vycm9yKHJlcXVlc3RJbnZpdGVGb3JtLm1lc3NhZ2UpfVxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgPGxhYmVsIGZvcj1cXFwibWVzc2FnZVxcXCIgY2xhc3M9XFxcImNvbC1zbS0yIGNvbnRyb2wtbGFiZWxcXFwiPk1lc3NhZ2U6PC9sYWJlbD5cXG5cIiArXG4gICAgXCIgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtc20tMTBcXFwiPlxcblwiICtcbiAgICBcIiAgICAgICAgPHRleHRhcmVhIGlkPVxcXCJtZXNzYWdlXFxcIiBuYW1lPVxcXCJtZXNzYWdlXFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBwbGFjZWhvbGRlcj1cXFwiRW50ZXIgYSBvcHRpb25hbCBtZXNzYWdlIGZvciB0aGUgY29tbWlzaCBvZiB0aGUgbGVhZ3VlLi4uXFxcIiByb3dzPVxcXCIzXFxcIiBtYXhsZW5ndGg9XFxcIjIwMFxcXCIgbmctbW9kZWw9XFxcImludml0YXRpb24ubWVzc2FnZVxcXCI+PC90ZXh0YXJlYT5cXG5cIiArXG4gICAgXCIgICAgICAgIDxzbWFsbCBjbGFzcz1cXFwiaW5wdXQtZXJyb3JcXFwiIG5nLXNob3c9XFxcImhhc1Byb3BlcnR5RXJyb3IocmVxdWVzdEludml0ZUZvcm0ubWVzc2FnZSwgJ21heGxlbmd0aCcpXFxcIj5Ub28gTG9uZzwvc21hbGw+XFxuXCIgK1xuICAgIFwiICAgICAgICA8c3BhbiBuZy1zaG93PVxcXCJoYXNFcnJvcihyZXF1ZXN0SW52aXRlRm9ybS5tZXNzYWdlKVxcXCIgY2xhc3M9XFxcImdseXBoaWNvbiBnbHlwaGljb24tcmVtb3ZlIGZvcm0tY29udHJvbC1mZWVkYmFja1xcXCI+PC9zcGFuPlxcblwiICtcbiAgICBcIiAgICAgIDwvZGl2PlxcblwiICtcbiAgICBcIiAgICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgIDwvZm9ybT5cXG5cIiArXG4gICAgXCI8L2Rpdj5cXG5cIiArXG4gICAgXCI8ZGl2IGNsYXNzPVxcXCJtb2RhbC1mb290ZXJcXFwiPlxcblwiICtcbiAgICBcIiAgPGJ1dHRvbiBjbGFzcz1cXFwiYnRuIGJ0bi1kZWZhdWx0XFxcIiBuZy1jbGljaz1cXFwiY2FuY2VsKClcXFwiPkNhbmNlbDwvYnV0dG9uPlxcblwiICtcbiAgICBcIiAgPGJ1dHRvbiBjbGFzcz1cXFwiYnRuIGJ0bi1wcmltYXJ5XFxcIiBuZy1kaXNhYmxlZD1cXFwicmVxdWVzdEludml0ZUZvcm0uJGludmFsaWRcXFwiIG5nLWNsaWNrPVxcXCJyZXF1ZXN0SW52aXRlKGludml0YXRpb24pXFxcIj5SZXF1ZXN0IEludml0ZTwvYnV0dG9uPlxcblwiICtcbiAgICBcIjwvZGl2PlwiKTtcbn1dKTtcblxuYW5ndWxhci5tb2R1bGUoXCJtb2R1bGVzL3ByaXZhdGUvbGVhZ3VlL2pvaW4vbGVhZ3VlLmpvaW4udHBsLmh0bWxcIiwgW10pLnJ1bihbXCIkdGVtcGxhdGVDYWNoZVwiLCBmdW5jdGlvbigkdGVtcGxhdGVDYWNoZSkge1xuICAkdGVtcGxhdGVDYWNoZS5wdXQoXCJtb2R1bGVzL3ByaXZhdGUvbGVhZ3VlL2pvaW4vbGVhZ3VlLmpvaW4udHBsLmh0bWxcIixcbiAgICBcIjxkaXYgY2xhc3M9XFxcIm1vZGFsLWhlYWRlclxcXCI+XFxuXCIgK1xuICAgIFwiICA8YnV0dG9uIHR5cGU9XFxcImJ1dHRvblxcXCIgY2xhc3M9XFxcImNsb3NlXFxcIiBuZy1jbGljaz1cXFwiY2FuY2VsKClcXFwiPjxzcGFuIGFyaWEtaGlkZGVuPVxcXCJ0cnVlXFxcIj4mdGltZXM7PC9zcGFuPjxzcGFuIGNsYXNzPVxcXCJzci1vbmx5XFxcIj5DbG9zZTwvc3Bhbj48L2J1dHRvbj5cXG5cIiArXG4gICAgXCIgIDxoMyBjbGFzcz1cXFwibW9kYWwtdGl0bGVcXFwiPkpvaW4gTGVhZ3VlPC9oMz5cXG5cIiArXG4gICAgXCI8L2Rpdj5cXG5cIiArXG4gICAgXCI8ZGl2IGNsYXNzPVxcXCJtb2RhbC1ib2R5XFxcIj5cXG5cIiArXG4gICAgXCIgIDxmb3JtIG5hbWU9XFxcImpvaW5Gb3JtXFxcIiBjbGFzcz1cXFwiam9pbi1mb3JtIGZvcm0taG9yaXpvbnRhbFxcXCIgcm9sZT1cXFwiZm9ybVxcXCIgbm92YWxpZGF0ZT5cXG5cIiArXG4gICAgXCIgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCIgbmctY2xhc3M9XFxcInsnaGFzLWVycm9yJzogaGFzRXJyb3Ioam9pbkZvcm0udGVhbU5hbWUpLCAnaGFzLWZlZWRiYWNrJzogaGFzRXJyb3Ioam9pbkZvcm0udGVhbU5hbWUpfVxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgPGxhYmVsIGZvcj1cXFwidGVhbU5hbWVcXFwiIGNsYXNzPVxcXCJjb2wtc20tNCBjb2wtbWQtNCBjb250cm9sLWxhYmVsXFxcIj5HaXZlIHlvdXIgdGVhbSBhIG5hbWU6PC9sYWJlbD5cXG5cIiArXG4gICAgXCIgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtc20tOCBjb2wtbWQtOFxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgICA8aW5wdXQgaWQ9XFxcInRlYW1OYW1lXFxcIiBuYW1lPVxcXCJ0ZWFtTmFtZVxcXCIgdHlwZT1cXFwidGV4dFxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgcGxhY2Vob2xkZXI9XFxcIkVudGVyIG5hbWUuLi5cXFwiIG5nLW1vZGVsPVxcXCJuZXdUZWFtRGF0YS5uYW1lXFxcIiBuZy1tYXhsZW5ndGg9XFxcIjMwXFxcIiByZXF1aXJlZD5cXG5cIiArXG4gICAgXCIgICAgICAgIDxzbWFsbCBjbGFzcz1cXFwiaW5wdXQtZXJyb3JcXFwiIG5nLXNob3c9XFxcImhhc1Byb3BlcnR5RXJyb3Ioam9pbkZvcm0udGVhbU5hbWUsICdyZXF1aXJlZCcpXFxcIj5SZXF1aXJlZDwvc21hbGw+XFxuXCIgK1xuICAgIFwiICAgICAgICA8c21hbGwgY2xhc3M9XFxcImlucHV0LWVycm9yXFxcIiBuZy1zaG93PVxcXCJoYXNQcm9wZXJ0eUVycm9yKGpvaW5Gb3JtLnRlYW1OYW1lLCAnbWF4bGVuZ3RoJylcXFwiPlRvbyBMb25nPC9zbWFsbD5cXG5cIiArXG4gICAgXCIgICAgICAgIDxzcGFuIG5nLXNob3c9XFxcImhhc0Vycm9yKGpvaW5Gb3JtLnRlYW1OYW1lKVxcXCIgY2xhc3M9XFxcImdseXBoaWNvbiBnbHlwaGljb24tcmVtb3ZlIGZvcm0tY29udHJvbC1mZWVkYmFja1xcXCI+PC9zcGFuPlxcblwiICtcbiAgICBcIiAgICAgIDwvZGl2PlxcblwiICtcbiAgICBcIiAgICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgIDwvZm9ybT5cXG5cIiArXG4gICAgXCI8L2Rpdj5cXG5cIiArXG4gICAgXCI8ZGl2IGNsYXNzPVxcXCJtb2RhbC1mb290ZXJcXFwiPlxcblwiICtcbiAgICBcIiAgPGJ1dHRvbiBjbGFzcz1cXFwiYnRuIGJ0bi1kZWZhdWx0XFxcIiBuZy1jbGljaz1cXFwiY2FuY2VsKClcXFwiPkNhbmNlbDwvYnV0dG9uPlxcblwiICtcbiAgICBcIiAgPGJ1dHRvbiBjbGFzcz1cXFwiYnRuIGJ0bi1wcmltYXJ5XFxcIiBuZy1kaXNhYmxlZD1cXFwiam9pbkZvcm0uJHByaXN0aW5lIHx8IGpvaW5Gb3JtLiRpbnZhbGlkXFxcIiBuZy1jbGljaz1cXFwiam9pbkxlYWd1ZShuZXdUZWFtRGF0YSlcXFwiPkpvaW48L2J1dHRvbj5cXG5cIiArXG4gICAgXCI8L2Rpdj5cIik7XG59XSk7XG5cbmFuZ3VsYXIubW9kdWxlKFwibW9kdWxlcy9wcml2YXRlL2xlYWd1ZS9sZWFndWUudHBsLmh0bWxcIiwgW10pLnJ1bihbXCIkdGVtcGxhdGVDYWNoZVwiLCBmdW5jdGlvbigkdGVtcGxhdGVDYWNoZSkge1xuICAkdGVtcGxhdGVDYWNoZS5wdXQoXCJtb2R1bGVzL3ByaXZhdGUvbGVhZ3VlL2xlYWd1ZS50cGwuaHRtbFwiLFxuICAgIFwiPGRpdiB1aS12aWV3PVxcXCJsZWFndWVDb250ZW50XFxcIiBjbGFzcz1cXFwibGVhZ3VlLWNvbnRlbnRcXFwiPjwvZGl2PlxcblwiICtcbiAgICBcIlwiKTtcbn1dKTtcblxuYW5ndWxhci5tb2R1bGUoXCJtb2R1bGVzL3ByaXZhdGUvbGVhZ3VlL21lc3NhZ2UvbGVhZ3VlLm1lc3NhZ2UudHBsLmh0bWxcIiwgW10pLnJ1bihbXCIkdGVtcGxhdGVDYWNoZVwiLCBmdW5jdGlvbigkdGVtcGxhdGVDYWNoZSkge1xuICAkdGVtcGxhdGVDYWNoZS5wdXQoXCJtb2R1bGVzL3ByaXZhdGUvbGVhZ3VlL21lc3NhZ2UvbGVhZ3VlLm1lc3NhZ2UudHBsLmh0bWxcIixcbiAgICBcIjxkaXYgY2xhc3M9XFxcIm1vZGFsLWhlYWRlclxcXCI+XFxuXCIgK1xuICAgIFwiICA8YnV0dG9uIHR5cGU9XFxcImJ1dHRvblxcXCIgY2xhc3M9XFxcImNsb3NlXFxcIiBuZy1jbGljaz1cXFwiY2FuY2VsKClcXFwiPjxzcGFuIGFyaWEtaGlkZGVuPVxcXCJ0cnVlXFxcIj4mdGltZXM7PC9zcGFuPjxzcGFuIGNsYXNzPVxcXCJzci1vbmx5XFxcIj5DbG9zZTwvc3Bhbj48L2J1dHRvbj5cXG5cIiArXG4gICAgXCIgIDxoMyBjbGFzcz1cXFwibW9kYWwtdGl0bGVcXFwiPlVwZGF0ZSBNZXNzYWdlPC9oMz5cXG5cIiArXG4gICAgXCI8L2Rpdj5cXG5cIiArXG4gICAgXCI8ZGl2IGNsYXNzPVxcXCJtb2RhbC1ib2R5XFxcIj5cXG5cIiArXG4gICAgXCIgIDxmb3JtIG5hbWU9XFxcIm1lc3NhZ2VGb3JtXFxcIiBjbGFzcz1cXFwibGVhZ3VlLW1lc3NhZ2UtZm9ybSBmb3JtLWhvcml6b250YWxcXFwiIHJvbGU9XFxcImZvcm1cXFwiIG5vdmFsaWRhdGU+XFxuXCIgK1xuICAgIFwiICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiIG5nLWNsYXNzPVxcXCJ7J2hhcy1lcnJvcic6IGhhc0Vycm9yKG1lc3NhZ2VGb3JtLm1lc3NhZ2UpLCAnaGFzLWZlZWRiYWNrJzogaGFzRXJyb3IobWVzc2FnZUZvcm0ubWVzc2FnZSl9XFxcIj5cXG5cIiArXG4gICAgXCIgICAgICA8bGFiZWwgZm9yPVxcXCJtZXNzYWdlXFxcIiBjbGFzcz1cXFwiY29sLXNtLTQgY29udHJvbC1sYWJlbFxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgICBMZWFndWUgTWVzc2FnZTogPGJyPlxcblwiICtcbiAgICBcIiAgICAgICAgPHNtYWxsIGNsYXNzPVxcXCJpbnB1dC1lcnJvclxcXCIgbmctc2hvdz1cXFwiaGFzUHJvcGVydHlFcnJvcihtZXNzYWdlRm9ybS5tZXNzYWdlLCAnbWF4bGVuZ3RoJylcXFwiPlsgVG9vIExvbmcgXTwvc21hbGw+XFxuXCIgK1xuICAgIFwiICAgICAgPC9sYWJlbD5cXG5cIiArXG4gICAgXCIgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtc20tOFxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgICA8dGV4dGFyZWEgaWQ9XFxcIm1lc3NhZ2VcXFwiIG5hbWU9XFxcIm1lc3NhZ2VcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIHBsYWNlaG9sZGVyPVxcXCJFbnRlciBhIG1lc3NhZ2UgZm9yIHlvdXIgbGVhZ3VlIHRvIHNlZSBvciBsZWF2ZSBpdCBibGFuay5cXFwiIHJvd3M9XFxcIjNcXFwiIG5nLW1heGxlbmd0aD1cXFwiNTAwXFxcIiBuZy1tb2RlbD1cXFwibGVhZ3VlRGF0YS5tZXNzYWdlXFxcIj48L3RleHRhcmVhPlxcblwiICtcbiAgICBcIiAgICAgICAgPGRpdiBjbGFzcz1cXFwiZW1haWwtbGVhZ3VlLW1lc3NhZ2UtY2hlY2tib3hcXFwiIG5nLXNob3c9XFxcImxlYWd1ZURhdGEuZWxpbWluYXRpb25cXFwiPlxcblwiICtcbiAgICBcIiAgICAgICAgICA8bGFiZWw+PGlucHV0IHR5cGU9XFxcImNoZWNrYm94XFxcIiBuZy1tb2RlbD1cXFwibWVzc2FnZU9wdGlvbnMuc2VuZEFsaXZlXFxcIj4gZW1haWwgbWVzc2FnZSB0byBhbGl2ZSB0ZWFtczwvbGFiZWw+XFxuXCIgK1xuICAgIFwiICAgICAgICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgICAgICAgIDxkaXYgY2xhc3M9XFxcImVtYWlsLWxlYWd1ZS1tZXNzYWdlLWNoZWNrYm94XFxcIj5cXG5cIiArXG4gICAgXCIgICAgICAgICAgPGxhYmVsPjxpbnB1dCB0eXBlPVxcXCJjaGVja2JveFxcXCIgbmctbW9kZWw9XFxcIm1lc3NhZ2VPcHRpb25zLnNlbmRBbGxcXFwiPiBlbWFpbCBtZXNzYWdlIHRvIGFsbCB0ZWFtczwvbGFiZWw+XFxuXCIgK1xuICAgIFwiICAgICAgICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgICAgICAgIDxzcGFuIG5nLXNob3c9XFxcImhhc0Vycm9yKG1lc3NhZ2VGb3JtLm1lc3NhZ2UpXFxcIiBjbGFzcz1cXFwiZ2x5cGhpY29uIGdseXBoaWNvbi1yZW1vdmUgZm9ybS1jb250cm9sLWZlZWRiYWNrXFxcIj48L3NwYW4+XFxuXCIgK1xuICAgIFwiICAgICAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICAgIDwvZGl2PlxcblwiICtcbiAgICBcIiAgPC9mb3JtPlxcblwiICtcbiAgICBcIjwvZGl2PlxcblwiICtcbiAgICBcIjxkaXYgY2xhc3M9XFxcIm1vZGFsLWZvb3RlclxcXCI+XFxuXCIgK1xuICAgIFwiICA8YnV0dG9uIGNsYXNzPVxcXCJidG4gYnRuLWRlZmF1bHRcXFwiIG5nLWNsaWNrPVxcXCJjYW5jZWwoKVxcXCI+Q2FuY2VsPC9idXR0b24+XFxuXCIgK1xuICAgIFwiICA8YnV0dG9uIGNsYXNzPVxcXCJidG4gYnRuLXByaW1hcnlcXFwiIG5nLWRpc2FibGVkPVxcXCJtZXNzYWdlRm9ybS4kcHJpc3RpbmUgfHwgbWVzc2FnZUZvcm0uJGludmFsaWRcXFwiIG5nLWNsaWNrPVxcXCJ1cGRhdGVNZXNzYWdlKGxlYWd1ZURhdGEsIG1lc3NhZ2VPcHRpb25zLnNlbmRBbGl2ZSwgbWVzc2FnZU9wdGlvbnMuc2VuZEFsbClcXFwiPlVwZGF0ZTwvYnV0dG9uPlxcblwiICtcbiAgICBcIjwvZGl2PlwiKTtcbn1dKTtcblxuYW5ndWxhci5tb2R1bGUoXCJtb2R1bGVzL3ByaXZhdGUvbGVhZ3VlL25ldy9sZWFndWUubmV3LnRwbC5odG1sXCIsIFtdKS5ydW4oW1wiJHRlbXBsYXRlQ2FjaGVcIiwgZnVuY3Rpb24oJHRlbXBsYXRlQ2FjaGUpIHtcbiAgJHRlbXBsYXRlQ2FjaGUucHV0KFwibW9kdWxlcy9wcml2YXRlL2xlYWd1ZS9uZXcvbGVhZ3VlLm5ldy50cGwuaHRtbFwiLFxuICAgIFwiPGRpdiBjbGFzcz1cXFwiY3JlYXRlLWxlYWd1ZS1oZWFkZXItcm93IHJvd1xcXCI+XFxuXCIgK1xuICAgIFwiICA8ZGl2IGNsYXNzPVxcXCJjb2wtc20tMTIgY29sLW1kLTEyXFxcIj5cXG5cIiArXG4gICAgXCIgICAgPGgzPkNyZWF0ZSBMZWFndWU8L2gzPlxcblwiICtcbiAgICBcIiAgPC9kaXY+XFxuXCIgK1xuICAgIFwiPC9kaXY+XFxuXCIgK1xuICAgIFwiPGhyPlxcblwiICtcbiAgICBcIjxmb3JtIG5hbWU9XFxcImxlYWd1ZUZvcm1cXFwiIGNsYXNzPVxcXCJjcmVhdGUtbGVhZ3VlLWZvcm1cXFwiIHJvbGU9XFxcImZvcm1cXFwiIG5vdmFsaWRhdGU+XFxuXCIgK1xuICAgIFwiICA8ZGl2IGNsYXNzPVxcXCJyb3cgZm9ybS1ncm91cCBwcm9kdWN0LWNob29zZXJcXFwiPlxcblwiICtcbiAgICBcIiAgICA8ZGl2IGNsYXNzPVxcXCJjb2wteHMtMTIgY29sLXNtLTEyIGNvbC1tZC02IGNvbC1sZy02XFxcIj5cXG5cIiArXG4gICAgXCIgICAgICAgIDxkaXYgY2xhc3M9XFxcInByb2R1Y3QtY2hvb3Nlci1pdGVtXFxcIiBuZy1jbGFzcz1cXFwieydzZWxlY3RlZCc6IGxlYWd1ZURhdGEucHVibGljID09IHRydWV9XFxcIiBuZy1jbGljaz1cXFwibGVhZ3VlRGF0YS5wdWJsaWMgPSB0cnVlXFxcIj5cXG5cIiArXG4gICAgXCIgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXhzLTEyIGNvbC1zbS0xMiBjb2wtbWQtMTIgY29sLWxnLTEyXFxcIj5cXG5cIiArXG4gICAgXCIgICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwidGl0bGVcXFwiPjxpIGNsYXNzPVxcXCJmYSBmYS11bmxvY2sgaWNvblxcXCI+PC9pPiBQdWJsaWMgTGVhZ3VlPC9zcGFuPlxcblwiICtcbiAgICBcIiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJkZXNjcmlwdGlvblxcXCI+QW55b25lIGNhbiBqb2luIGEgcHVibGljIGxlYWd1ZS4gTWVtYmVycyBvZiBhIHB1YmxpYyBsZWFndWUgY2FuIGFsc28gaW52aXRlIG90aGVycyB0byBqb2luIHRoZSBsZWFndWUuPC9zcGFuPlxcblwiICtcbiAgICBcIiAgICAgICAgICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY2xlYXJcXFwiPjwvZGl2PlxcblwiICtcbiAgICBcIiAgICAgICAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICAgIDwvZGl2PlxcblwiICtcbiAgICBcIiAgICA8ZGl2IGNsYXNzPVxcXCJjb2wteHMtMTIgY29sLXNtLTEyIGNvbC1tZC02IGNvbC1sZy02XFxcIj5cXG5cIiArXG4gICAgXCIgICAgICA8ZGl2IGNsYXNzPVxcXCJwcm9kdWN0LWNob29zZXItaXRlbVxcXCIgbmctY2xhc3M9XFxcInsnc2VsZWN0ZWQnOiBsZWFndWVEYXRhLnB1YmxpYyA9PSBmYWxzZX1cXFwiIG5nLWNsaWNrPVxcXCJsZWFndWVEYXRhLnB1YmxpYyA9IGZhbHNlXFxcIj5cXG5cIiArXG4gICAgXCIgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC14cy0xMiBjb2wtc20tMTIgY29sLW1kLTEyIGNvbC1sZy0xMlxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJ0aXRsZVxcXCI+PGkgY2xhc3M9XFxcImZhIGZhLWxvY2sgaWNvblxcXCI+PC9pPiBQcml2YXRlIExlYWd1ZTwvc3Bhbj5cXG5cIiArXG4gICAgXCIgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcImRlc2NyaXB0aW9uXFxcIj5BbiBpbnZpdGUgZnJvbSB0aGUgY29tbWlzaCBpcyByZXF1aXJlZCB0byBqb2luIGEgcHJpdmF0ZSBsZWFndWUuIE9ubHkgdGhlIGNvbW1pc2ggY2FuIGludml0ZSBwZW9wbGUgdG8gam9pbiB0aGUgbGVhZ3VlLjwvc3Bhbj5cXG5cIiArXG4gICAgXCIgICAgICAgIDwvZGl2PlxcblwiICtcbiAgICBcIiAgICAgICAgPGRpdiBjbGFzcz1cXFwiY2xlYXJcXFwiPjwvZGl2PlxcblwiICtcbiAgICBcIiAgICAgIDwvZGl2PlxcblwiICtcbiAgICBcIiAgICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgIDwvZGl2PlxcblwiICtcbiAgICBcIiAgPGRpdiBjbGFzcz1cXFwicm93IGZvcm0tZ3JvdXAgcHJvZHVjdC1jaG9vc2VyXFxcIj5cXG5cIiArXG4gICAgXCIgICAgPGRpdiBjbGFzcz1cXFwiY29sLXhzLTEyIGNvbC1zbS0xMiBjb2wtbWQtNiBjb2wtbGctNlxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgICA8ZGl2IGNsYXNzPVxcXCJwcm9kdWN0LWNob29zZXItaXRlbVxcXCIgbmctY2xhc3M9XFxcInsnc2VsZWN0ZWQnOiBsZWFndWVEYXRhLmVsaW1pbmF0aW9uID09IGZhbHNlfVxcXCIgbmctY2xpY2s9XFxcImxlYWd1ZURhdGEubWF4X3BpY2tzX3Blcl93ZWVrID0gbnVsbDsgbGVhZ3VlRGF0YS5lbGltaW5hdGlvbiA9IGZhbHNlXFxcIj5cXG5cIiArXG4gICAgXCIgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXhzLTEyIGNvbC1zbS0xMiBjb2wtbWQtMTIgY29sLWxnLTEyXFxcIj5cXG5cIiArXG4gICAgXCIgICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwidGl0bGVcXFwiPjxpIGNsYXNzPVxcXCJmYSBmYS10aC1saXN0XFxcIj48L2k+IFBpY2snZW0gRm9ybWF0PC9zcGFuPlxcblwiICtcbiAgICBcIiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJkZXNjcmlwdGlvblxcXCI+UGljaydlbSBmb3JtYXQgYWxsb3dzIHRlYW1zIHRvIG1ha2Ugb25lIG9yIG1vcmUgcGlja3MgZWFjaCB3ZWVrLiBObyBlbGltaW5hdGlvbi4gVGhlIG1vc3QgY29ycmVjdCBwaWNrcyBmb3IgdGhlIHdlZWsgd2lucy48L3NwYW4+XFxuXCIgK1xuICAgIFwiICAgICAgICAgIDwvZGl2PlxcblwiICtcbiAgICBcIiAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjbGVhclxcXCI+PC9kaXY+XFxuXCIgK1xuICAgIFwiICAgICAgICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgICAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICAgIDxkaXYgY2xhc3M9XFxcImNvbC14cy0xMiBjb2wtc20tMTIgY29sLW1kLTYgY29sLWxnLTZcXFwiPlxcblwiICtcbiAgICBcIiAgICAgIDxkaXYgY2xhc3M9XFxcInByb2R1Y3QtY2hvb3Nlci1pdGVtXFxcIiBuZy1jbGFzcz1cXFwieydzZWxlY3RlZCc6IGxlYWd1ZURhdGEuZWxpbWluYXRpb24gPT0gdHJ1ZX1cXFwiIG5nLWNsaWNrPVxcXCJsZWFndWVEYXRhLm1heF9waWNrc19wZXJfd2VlayA9IDE7IGxlYWd1ZURhdGEuZWxpbWluYXRpb24gPSB0cnVlXFxcIj5cXG5cIiArXG4gICAgXCIgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC14cy0xMiBjb2wtc20tMTIgY29sLW1kLTEyIGNvbC1sZy0xMlxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJ0aXRsZVxcXCI+PGkgY2xhc3M9XFxcImZhIGZhLWNoZWNrXFxcIj48L2k+IFN1cnZpdm9yIEZvcm1hdDwvc3Bhbj5cXG5cIiArXG4gICAgXCIgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcImRlc2NyaXB0aW9uXFxcIj5TdXJ2aXZvciBmb3JtYXQgcmVxdWlyZXMgYSB0ZWFtIHRvIG1ha2UgYSBkaWZmZXJlbnQgcGljayBlYWNoIHdlZWsuIElmIHlvdSBmYWlsIHRvIHBpY2sgYSBsb3NlciwgeW91ciB0ZWFtIGlzIGVsaW1pbmF0ZWQuIFRoZSB0ZWFtIHdpdGggdGhlIG1vc3QgcGlja3Mgd2lucy48L3NwYW4+XFxuXCIgK1xuICAgIFwiICAgICAgICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgICAgICAgIDxkaXYgY2xhc3M9XFxcImNsZWFyXFxcIj48L2Rpdj5cXG5cIiArXG4gICAgXCIgICAgICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgICAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgIDxkaXYgY2xhc3M9XFxcImNyZWF0ZS1sZWFndWUtZGV0YWlsc1xcXCI+XFxuXCIgK1xuICAgIFwiICAgIDxkaXYgY2xhc3M9XFxcInJvd1xcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXNtLTEyIGNvbC1tZC0xMlxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj5cXG5cIiArXG4gICAgXCIgICAgICAgICAgPGxhYmVsIGNsYXNzPVxcXCJjb250cm9sLWxhYmVsXFxcIiBmb3I9XFxcIm1heFBpY2tzXFxcIj5QaWNrcyBwZXIgd2VlazwvbGFiZWw+XFxuXCIgK1xuICAgIFwiICAgICAgICAgIDxzZWxlY3QgaWQ9XFxcIm1heFBpY2tzXFxcIiBuYW1lPVxcXCJtYXhQaWNrc1xcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgbmctZGlzYWJsZWQ9XFxcImxlYWd1ZURhdGEuZWxpbWluYXRpb25cXFwiIG5nLW1vZGVsPVxcXCJsZWFndWVEYXRhLm1heF9waWNrc19wZXJfd2Vla1xcXCIgbmctb3B0aW9ucz1cXFwibWF4UGljay5udW1iZXIgYXMgbWF4UGljay5kaXNwbGF5IGZvciBtYXhQaWNrIGluIG1heFBpY2tzUGVyV2Vla1xcXCI+PC9zZWxlY3Q+XFxuXCIgK1xuICAgIFwiICAgICAgICAgIDxzbWFsbCBjbGFzcz1cXFwiaW5wdXQtZXJyb3JcXFwiIG5nLXNob3c9XFxcImxlYWd1ZURhdGEuZWxpbWluYXRpb25cXFwiPjxpIGNsYXNzPVxcXCJmYSBmYS13YXJuaW5nIGZhLWZ3XFxcIiB0aXRsZT1cXFwiV2FybmluZ1xcXCI+PC9pPiBTdXJ2aXZvciBsZWFndWVzIG9ubHkgYWxsb3cgMSBwaWNrIHBlciB3ZWVrLCBubyByZXBlYXRzPC9zbWFsbD5cXG5cIiArXG4gICAgXCIgICAgICAgIDwvZGl2PlxcblwiICtcbiAgICBcIiAgICAgIDwvZGl2PlxcblwiICtcbiAgICBcIiAgICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgICAgPGRpdiBjbGFzcz1cXFwicm93XFxcIiBuZy1zaG93PVxcXCJsZWFndWVEYXRhLmVsaW1pbmF0aW9uXFxcIj5cXG5cIiArXG4gICAgXCIgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtc20tMTIgY29sLW1kLTEyXFxcIj5cXG5cIiArXG4gICAgXCIgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPlxcblwiICtcbiAgICBcIiAgICAgICAgICA8bGFiZWw+XFxuXCIgK1xuICAgIFwiICAgICAgICAgICAgPGlucHV0IHR5cGU9XFxcImNoZWNrYm94XFxcIiBuZy1tb2RlbD1cXFwibGVhZ3VlRGF0YS5lbGltaW5hdGVfb25fdGllXFxcIj4gZWxpbWluYXRlIGEgdGVhbSB0aGF0IHBpY2tzIGEgdGllXFxuXCIgK1xuICAgIFwiICAgICAgICAgIDwvbGFiZWw+XFxuXCIgK1xuICAgIFwiICAgICAgICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgICAgICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgICAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICAgIDxocj5cXG5cIiArXG4gICAgXCIgICAgPGRpdiBjbGFzcz1cXFwicm93XFxcIj5cXG5cIiArXG4gICAgXCIgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtc20tMTIgY29sLW1kLTEyXFxcIj5cXG5cIiArXG4gICAgXCIgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiIG5nLWNsYXNzPVxcXCJ7J2hhcy1lcnJvcic6IGhhc0Vycm9yKGxlYWd1ZUZvcm0ubGVhZ3VlTmFtZSksICdoYXMtZmVlZGJhY2snOiBoYXNFcnJvcihsZWFndWVGb3JtLmxlYWd1ZU5hbWUpfVxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgICAgIDxsYWJlbCBjbGFzcz1cXFwiY29udHJvbC1sYWJlbFxcXCIgZm9yPVxcXCJsZWFndWVOYW1lXFxcIj5MZWFndWUgbmFtZVxcblwiICtcbiAgICBcIiAgICAgICAgICAgIDxzbWFsbCBuZy1zaG93PVxcXCJoYXNQcm9wZXJ0eUVycm9yKGxlYWd1ZUZvcm0ubGVhZ3VlTmFtZSwgJ3JlcXVpcmVkJylcXFwiPlsgUmVxdWlyZWQgXTwvc21hbGw+XFxuXCIgK1xuICAgIFwiICAgICAgICAgICAgPHNtYWxsIG5nLXNob3c9XFxcImhhc1Byb3BlcnR5RXJyb3IobGVhZ3VlRm9ybS5sZWFndWVOYW1lLCAnbWF4bGVuZ3RoJylcXFwiPlsgVG9vIExvbmcgXTwvc21hbGw+XFxuXCIgK1xuICAgIFwiICAgICAgICAgIDwvbGFiZWw+XFxuXCIgK1xuICAgIFwiICAgICAgICAgIDxpbnB1dCBpZD1cXFwibGVhZ3VlTmFtZVxcXCIgbmFtZT1cXFwibGVhZ3VlTmFtZVxcXCIgdHlwZT1cXFwidGV4dFxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgbmctbW9kZWw9XFxcImxlYWd1ZURhdGEubmFtZVxcXCIgbmctbWF4bGVuZ3RoPVxcXCIzMFxcXCIgcmVxdWlyZWQ+XFxuXCIgK1xuICAgIFwiICAgICAgICAgIDxzcGFuIG5nLXNob3c9XFxcImhhc0Vycm9yKGxlYWd1ZUZvcm0ubGVhZ3VlTmFtZSlcXFwiIGNsYXNzPVxcXCJnbHlwaGljb24gZ2x5cGhpY29uLXJlbW92ZSBmb3JtLWNvbnRyb2wtZmVlZGJhY2tcXFwiPjwvc3Bhbj5cXG5cIiArXG4gICAgXCIgICAgICAgIDwvZGl2PlxcblwiICtcbiAgICBcIiAgICAgIDwvZGl2PlxcblwiICtcbiAgICBcIiAgICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgICAgPGRpdiBjbGFzcz1cXFwibGVhZ3VlLW5pY2tuYW1lIHJvd1xcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXNtLTEyIGNvbC1tZC0xMlxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj5cXG5cIiArXG4gICAgXCIgICAgICAgICAgPGxhYmVsIGNsYXNzPVxcXCJjb250cm9sLWxhYmVsXFxcIiBmb3I9XFxcIm5pY2tuYW1lXFxcIj5OaWNrbmFtZTwvbGFiZWw+XFxuXCIgK1xuICAgIFwiICAgICAgICAgIDxpbnB1dCBpZD1cXFwibmlja25hbWVcXFwiIG5hbWU9XFxcIm5pY2tuYW1lXFxcIiB0eXBlPVxcXCJ0ZXh0XFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBuZy1tb2RlbD1cXFwibGVhZ3VlRGF0YS5uaWNrbmFtZVxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgICAgICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgICAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICAgIDxkaXYgY2xhc3M9XFxcInJvd1xcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXNtLTEyIGNvbC1tZC0xMlxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj5cXG5cIiArXG4gICAgXCIgICAgICAgICAgPGxhYmVsIGNsYXNzPVxcXCJjb250cm9sLWxhYmVsXFxcIiBmb3I9XFxcInNlYXNvblxcXCI+U2Vhc29uPC9sYWJlbD5cXG5cIiArXG4gICAgXCIgICAgICAgICAgPHNlbGVjdCBpZD1cXFwic2Vhc29uXFxcIiBuYW1lPVxcXCJzZWFzb25cXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIG5nLWNoYW5nZT1cXFwiY2hhbmdlU2Vhc29uKClcXFwiIG5nLW1vZGVsPVxcXCJsZWFndWVEYXRhLnNlYXNvbl9pZFxcXCIgbmctb3B0aW9ucz1cXFwic2Vhc29uLmlkIGFzIHNlYXNvbi5uYW1lIGZvciBzZWFzb24gaW4gc2Vhc29uc1xcXCI+PC9zZWxlY3Q+XFxuXCIgK1xuICAgIFwiICAgICAgICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgICAgICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgICAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICAgIDxkaXYgY2xhc3M9XFxcInJvd1xcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXNtLTEyIGNvbC1tZC0xMlxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj5cXG5cIiArXG4gICAgXCIgICAgICAgICAgPGxhYmVsIGNsYXNzPVxcXCJjb250cm9sLWxhYmVsXFxcIiBmb3I9XFxcInN0YXJ0V2Vla1xcXCI+U3RhcnQgd2VlazwvbGFiZWw+XFxuXCIgK1xuICAgIFwiICAgICAgICAgIDxzZWxlY3QgaWQ9XFxcInN0YXJ0V2Vla1xcXCIgbmFtZT1cXFwic3RhcnRXZWVrXFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBuZy1kaXNhYmxlZD1cXFwiZmV0Y2hpbmdTZWFzb25XZWVrc1xcXCIgbmctbW9kZWw9XFxcImxlYWd1ZURhdGEuc3RhcnRfd2Vla19pZFxcXCIgbmctb3B0aW9ucz1cXFwid2Vlay5pZCBhcyB3ZWVrLmRpc3BsYXkgZm9yIHdlZWsgaW4gd2Vla3NcXFwiIHJlcXVpcmVkPjwvc2VsZWN0PlxcblwiICtcbiAgICBcIiAgICAgICAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICAgICAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICAgIDwvZGl2PlxcblwiICtcbiAgICBcIiAgICA8ZGl2IGNsYXNzPVxcXCJyb3dcXFwiPlxcblwiICtcbiAgICBcIiAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1zbS0xMiBjb2wtbWQtMTJcXFwiPlxcblwiICtcbiAgICBcIiAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCIgbmctY2xhc3M9XFxcInsnaGFzLWVycm9yJzogaGFzRXJyb3IobGVhZ3VlRm9ybS5tYXhUZWFtcyksICdoYXMtZmVlZGJhY2snOiBoYXNFcnJvcihsZWFndWVGb3JtLm1heFRlYW1zKX1cXFwiPlxcblwiICtcbiAgICBcIiAgICAgICAgICA8bGFiZWwgY2xhc3M9XFxcImNvbnRyb2wtbGFiZWxcXFwiIGZvcj1cXFwibWF4VGVhbXNcXFwiPkhvdyBtYW55IHRpbWVzIGNhbiBhIHVzZXIgam9pbj9cXG5cIiArXG4gICAgXCIgICAgICAgICAgICA8c21hbGwgbmctc2hvdz1cXFwiaGFzUHJvcGVydHlFcnJvcihsZWFndWVGb3JtLm1heFRlYW1zLCAncmVxdWlyZWQnKVxcXCI+WyBOdW1iZXIgUmVxdWlyZWQgXTwvc21hbGw+XFxuXCIgK1xuICAgIFwiICAgICAgICAgICAgPHNtYWxsIG5nLXNob3c9XFxcImhhc1Byb3BlcnR5RXJyb3IobGVhZ3VlRm9ybS5tYXhUZWFtcywgJ21pbicpXFxcIj5bIDEgLSAxMCBdPC9zbWFsbD5cXG5cIiArXG4gICAgXCIgICAgICAgICAgICA8c21hbGwgbmctc2hvdz1cXFwiaGFzUHJvcGVydHlFcnJvcihsZWFndWVGb3JtLm1heFRlYW1zLCAnbWF4JylcXFwiPlsgMSAtIDEwIF08L3NtYWxsPlxcblwiICtcbiAgICBcIiAgICAgICAgICA8L2xhYmVsPlxcblwiICtcbiAgICBcIiAgICAgICAgICA8aW5wdXQgaWQ9XFxcIm1heFRlYW1zXFxcIiBuYW1lPVxcXCJtYXhUZWFtc1xcXCIgdHlwZT1cXFwibnVtYmVyXFxcIiBwbGFjZWhvbGRlcj1cXFwiQmV0d2VlbiAxIGFuZCAxMCB0aW1lc1xcXCIgbWluPVxcXCIxXFxcIiBtYXg9XFxcIjEwXFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBuZy1tb2RlbD1cXFwibGVhZ3VlRGF0YS5tYXhfdGVhbXNfcGVyX3VzZXJcXFwiIGxvZ2gtZm9jdXMgcmVxdWlyZWQ+XFxuXCIgK1xuICAgIFwiICAgICAgICAgIDxzcGFuIG5nLXNob3c9XFxcImhhc0Vycm9yKGxlYWd1ZUZvcm0ubWF4VGVhbXMpXFxcIiBjbGFzcz1cXFwiZ2x5cGhpY29uIGdseXBoaWNvbi1yZW1vdmUgZm9ybS1jb250cm9sLWZlZWRiYWNrXFxcIj48L3NwYW4+XFxuXCIgK1xuICAgIFwiICAgICAgICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgICAgICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgICAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICAgIDxkaXYgY2xhc3M9XFxcInJvd1xcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXNtLTEyIGNvbC1tZC0xMlxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj5cXG5cIiArXG4gICAgXCIgICAgICAgICAgPGxhYmVsIGNsYXNzPVxcXCJjb250cm9sLWxhYmVsXFxcIiBmb3I9XFxcIm1lc3NhZ2VcXFwiPk1lc3NhZ2UgWyBPcHRpb25hbCBdPC9sYWJlbD5cXG5cIiArXG4gICAgXCIgICAgICAgICAgPHRleHRhcmVhIGlkPVxcXCJtZXNzYWdlXFxcIiBuYW1lPVxcXCJtZXNzYWdlXFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBwbGFjZWhvbGRlcj1cXFwiRW50ZXIgYSBtZXNzYWdlIGZvciB5b3VyIGxlYWd1ZSBoZXJlLiBZb3UgY2FuIGNoYW5nZSBpdCBhdCBhbnkgdGltZS5cXFwiIHJvd3M9XFxcIjJcXFwiIG1heGxlbmd0aD1cXFwiNTAwXFxcIiBuZy1tb2RlbD1cXFwibGVhZ3VlRGF0YS5tZXNzYWdlXFxcIj48L3RleHRhcmVhPlxcblwiICtcbiAgICBcIiAgICAgICAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICAgICAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICAgIDwvZGl2PlxcblwiICtcbiAgICBcIiAgICA8ZGl2IGNsYXNzPVxcXCJjcmVhdGUtbGVhZ3VlLWJ0bi1ncm91cFxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgPGJ1dHRvbiBjbGFzcz1cXFwiY3JlYXRlLWxlYWd1ZS1idG4gYnRuIGJ0bi1wcmltYXJ5XFxcIiBuZy1kaXNhYmxlZD1cXFwibGVhZ3VlRm9ybS4kaW52YWxpZCB8fCBmZXRjaGluZ1NlYXNvbldlZWtzXFxcIiBuZy1jbGljaz1cXFwiY3JlYXRlTGVhZ3VlKGxlYWd1ZURhdGEpXFxcIj5TYXZlIExlYWd1ZTwvYnV0dG9uPlxcblwiICtcbiAgICBcIiAgICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgIDwvZGl2PlxcblwiICtcbiAgICBcIjwvZm9ybT5cIik7XG59XSk7XG5cbmFuZ3VsYXIubW9kdWxlKFwibW9kdWxlcy9wcml2YXRlL2xlYWd1ZS92aWV3L2xlYWd1ZS52aWV3LnRwbC5odG1sXCIsIFtdKS5ydW4oW1wiJHRlbXBsYXRlQ2FjaGVcIiwgZnVuY3Rpb24oJHRlbXBsYXRlQ2FjaGUpIHtcbiAgJHRlbXBsYXRlQ2FjaGUucHV0KFwibW9kdWxlcy9wcml2YXRlL2xlYWd1ZS92aWV3L2xlYWd1ZS52aWV3LnRwbC5odG1sXCIsXG4gICAgXCI8ZGl2IGNsYXNzPVxcXCJoZWFkZXItcm93IHJvd1xcXCI+XFxuXCIgK1xuICAgIFwiICA8ZGl2IGNsYXNzPVxcXCJjb2wtc20tNyBjb2wtbWQtN1xcXCI+XFxuXCIgK1xuICAgIFwiICAgIDxkaXYgY2xhc3M9XFxcImJ0bi1ncm91cCBsZWFndWVzLWRyb3Bkb3duXFxcIiBkcm9wZG93biBpcy1vcGVuPVxcXCJsZWFndWVEcm9wZG93bi5pc29wZW5cXFwiPlxcblwiICtcbiAgICBcIiAgICAgIDxidXR0b24gdHlwZT1cXFwiYnV0dG9uXFxcIiBjbGFzcz1cXFwibGVhZ3Vlcy1idG4tbGluayBidG4gYnRuLWxpbmsgZHJvcGRvd24tdG9nZ2xlXFxcIiBuZy1kaXNhYmxlZD1cXFwiIWlzQ29tbWlzaChsZWFndWVEYXRhKSAmJiAhaXNBZG1pbigpXFxcIj5cXG5cIiArXG4gICAgXCIgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJsZWFndWUtbmFtZVxcXCIgbmctY2xhc3M9XFxcInsnZGlzYWJsZWQnOiAhaXNDb21taXNoKGxlYWd1ZURhdGEpICYmICFpc0FkbWluKCl9XFxcIj5cXG5cIiArXG4gICAgXCIgICAgICAgIDxpIGNsYXNzPVxcXCJmYSBmYS1sb2NrIGljb25cXFwiIHRpdGxlPVxcXCJQcml2YXRlIGxlYWd1ZVxcXCIgbmctc2hvdz1cXFwiIWxlYWd1ZURhdGEucHVibGljXFxcIj48L2k+XFxuXCIgK1xuICAgIFwiICAgICAgICA8aSBjbGFzcz1cXFwiZmEgZmEtdW5sb2NrIGljb25cXFwiIHRpdGxlPVxcXCJQdWJsaWMgbGVhZ3VlXFxcIiBuZy1zaG93PVxcXCJsZWFndWVEYXRhLnB1YmxpY1xcXCI+PC9pPlxcblwiICtcbiAgICBcIiAgICAgICAgPHN0cm9uZz57e2xlYWd1ZURhdGEubmFtZX19PC9zdHJvbmc+PC9zcGFuPiA8c3BhbiBuZy1zaG93PVxcXCJpc0NvbW1pc2gobGVhZ3VlRGF0YSkgfHwgaXNBZG1pbigpXFxcIiBjbGFzcz1cXFwiY2FyZXRcXFwiPjwvc3Bhbj5cXG5cIiArXG4gICAgXCIgICAgICA8L2J1dHRvbj5cXG5cIiArXG4gICAgXCIgICAgICA8dWwgY2xhc3M9XFxcImRyb3Bkb3duLW1lbnUgbGVhZ3VlLWFjdGlvbnMtbWVudVxcXCIgcm9sZT1cXFwibWVudVxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgICA8bGk+PGEgbmctc2hvdz1cXFwiaXNDb21taXNoKGxlYWd1ZURhdGEpIHx8IGlzQWRtaW4oKVxcXCIgbmctY2xpY2s9XFxcInRvZ2dsZURyb3Bkb3duKCRldmVudCk7ZWRpdExlYWd1ZShsZWFndWVEYXRhKVxcXCI+RWRpdCBsZWFndWU8L2E+PC9saT5cXG5cIiArXG4gICAgXCIgICAgICAgIDxsaT48YSBuZy1zaG93PVxcXCJpc0NvbW1pc2gobGVhZ3VlRGF0YSlcXFwiIG5nLWNsaWNrPVxcXCJ0b2dnbGVEcm9wZG93bigkZXZlbnQpO3VwZGF0ZU1lc3NhZ2UobGVhZ3VlRGF0YSlcXFwiPkVkaXQgbGVhZ3VlIG1lc3NhZ2U8L2E+PC9saT5cXG5cIiArXG4gICAgXCIgICAgICAgIDxsaT48YSBuZy1zaG93PVxcXCJpc0NvbW1pc2gobGVhZ3VlRGF0YSlcXFwiIG5nLWNsaWNrPVxcXCJ0b2dnbGVEcm9wZG93bigkZXZlbnQpO2ludml0ZShsZWFndWVEYXRhLmlkLCBpc0NvbW1pc2gobGVhZ3VlRGF0YSksIGxlYWd1ZURhdGEuY2xvc2VkKVxcXCI+TWFuYWdlIGludml0YXRpb25zPC9hPjwvbGk+XFxuXCIgK1xuICAgIFwiICAgICAgICA8bGk+PGEgbmctc2hvdz1cXFwiaXNDb21taXNoKGxlYWd1ZURhdGEpICYmIHRlYW1PcHRpb25zLmluYWN0aXZlID09IHRydWVcXFwiIG5nLWNsaWNrPVxcXCJ0b2dnbGVEcm9wZG93bigkZXZlbnQpO3Nob3dEZWFjdGl2YXRlZFRlYW1zKGZhbHNlKTtcXFwiPkhpZGUgZGVhY3RpdmF0ZWQgdGVhbXM8L2E+PC9saT5cXG5cIiArXG4gICAgXCIgICAgICAgIDxsaT48YSBuZy1zaG93PVxcXCJpc0NvbW1pc2gobGVhZ3VlRGF0YSkgJiYgdGVhbU9wdGlvbnMuaW5hY3RpdmUgPT0gZmFsc2VcXFwiIG5nLWNsaWNrPVxcXCJ0b2dnbGVEcm9wZG93bigkZXZlbnQpO3Nob3dEZWFjdGl2YXRlZFRlYW1zKHRydWUpO1xcXCI+U2hvdyBkZWFjdGl2YXRlZCB0ZWFtczwvYT48L2xpPlxcblwiICtcbiAgICBcIiAgICAgIDwvdWw+XFxuXCIgK1xuICAgIFwiICAgIDwvZGl2PlxcblwiICtcbiAgICBcIiAgICA8aDMgc3R5bGU9XFxcIm1hcmdpbi10b3A6IDA7XFxcIj5cXG5cIiArXG4gICAgXCIgICAgICA8ZGl2IGNsYXNzPVxcXCJsZWFndWUtbWV0YVxcXCIgbmctY2xhc3M9XFxcInsnc2hvdy1tZXRhJzogIWxlYWd1ZURhdGEuY2xvc2VkfVxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgICA8c21hbGw+Q29tbWlzaCBbIHt7bGVhZ3VlRGF0YS5jb21taXNoX25hbWVzLmpvaW4oJywgJyl9fSBdPC9zbWFsbD48YnI+XFxuXCIgK1xuICAgIFwiICAgICAgICA8c21hbGw+e3tsZWFndWVEYXRhLmZvcm1hdH19PC9zbWFsbD5cXG5cIiArXG4gICAgXCIgICAgICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgICAgICA8c21hbGw+e3tzdGFydHMobGVhZ3VlRGF0YSl9fTwvc21hbGw+XFxuXCIgK1xuICAgIFwiICAgIDwvaDM+XFxuXCIgK1xuICAgIFwiICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgIDxkaXYgY2xhc3M9XFxcImNvbC1zbS01IGNvbC1tZC01XFxcIj5cXG5cIiArXG4gICAgXCIgICAgPGJ1dHRvbiB0eXBlPVxcXCJidXR0b25cXFwiIGNsYXNzPVxcXCJqb2luLWJ0biBidG4gYnRuLXByaW1hcnlcXFwiIG5nLXNob3c9XFxcIiFsZWFndWVEYXRhLmNsb3NlZFxcXCIgbmctY2xpY2s9XFxcImpvaW5MZWFndWUobGVhZ3VlRGF0YSlcXFwiPkpvaW4gKHt7bGVhZ3VlRGF0YS5tYXhfdGVhbXNfcGVyX3VzZXJ9fVggbWF4KTwvYnV0dG9uPlxcblwiICtcbiAgICBcIiAgICA8YnV0dG9uIHR5cGU9XFxcImJ1dHRvblxcXCIgY2xhc3M9XFxcImludml0ZS1idG4gYnRuIGJ0bi1kZWZhdWx0XFxcIiBuZy1zaG93PVxcXCIhbGVhZ3VlRGF0YS5jbG9zZWQgJiYgKGxlYWd1ZURhdGEucHVibGljIHx8IGlzQ29tbWlzaChsZWFndWVEYXRhKSlcXFwiIG5nLWNsaWNrPVxcXCJpbnZpdGUobGVhZ3VlRGF0YS5pZCwgaXNDb21taXNoKGxlYWd1ZURhdGEpLCBsZWFndWVEYXRhLmNsb3NlZClcXFwiPkludml0ZTwvYnV0dG9uPlxcblwiICtcbiAgICBcIiAgICA8YnV0dG9uIHR5cGU9XFxcImJ1dHRvblxcXCIgY2xhc3M9XFxcInJlcXVlc3QtaW52aXRlLWJ0biBidG4gYnRuLWRlZmF1bHRcXFwiIG5nLXNob3c9XFxcIiFsZWFndWVEYXRhLmNsb3NlZCAmJiAhbGVhZ3VlRGF0YS5wdWJsaWMgJiYgIWlzQ29tbWlzaChsZWFndWVEYXRhKVxcXCIgbmctY2xpY2s9XFxcInJlcXVlc3RJbnZpdGUobGVhZ3VlRGF0YSlcXFwiPlJlcXVlc3QgSW52aXRlPC9idXR0b24+XFxuXCIgK1xuICAgIFwiICAgIDxoMyBjbGFzcz1cXFwibGVhZ3VlLW1ldGEtcmlnaHRcXFwiIG5nLXNob3c9XFxcImxlYWd1ZURhdGEuY2xvc2VkXFxcIj5cXG5cIiArXG4gICAgXCIgICAgICA8c21hbGw+e3tsZWFndWVEYXRhLmZvcm1hdH19PC9zbWFsbD48YnI+XFxuXCIgK1xuICAgIFwiICAgICAgPHNtYWxsPkNvbW1pc2ggWyB7e2xlYWd1ZURhdGEuY29tbWlzaF9uYW1lcy5qb2luKCcsICcpfX0gXTwvc21hbGw+XFxuXCIgK1xuICAgIFwiICAgIDwvaDM+XFxuXCIgK1xuICAgIFwiICA8L2Rpdj5cXG5cIiArXG4gICAgXCI8L2Rpdj5cXG5cIiArXG4gICAgXCI8aHI+XFxuXCIgK1xuICAgIFwiPGRpdiBjbGFzcz1cXFwibGVhZ3VlLW1lc3NhZ2VcXFwiIG5nLXNob3c9XFxcIiFsZWFndWVEYXRhLmNsb3NlZCB8fCBoYXNUZWFtSW5MZWFndWUoKSB8fCBpc0NvbW1pc2gobGVhZ3VlRGF0YSlcXFwiPlxcblwiICtcbiAgICBcIiAgPGFjY29yZGlvbiBjbG9zZS1vdGhlcnM9XFxcInRydWVcXFwiPlxcblwiICtcbiAgICBcIiAgICA8YWNjb3JkaW9uLWdyb3VwIGlzLW9wZW49XFxcInVzZXJNb2RlbC5sZWFndWVNZXNzYWdlT3BlbltsZWFndWVEYXRhLmlkXVxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgPGFjY29yZGlvbi1oZWFkaW5nPlxcblwiICtcbiAgICBcIiAgICAgICAgPGkgY2xhc3M9XFxcImZhIGZhLWNvbW1lbnQgZmEtZndcXFwiPjwvaT4gTWVzc2FnZXMgdG8gbGVhZ3VlIFsgPHNwYW4gbmctc2hvdz1cXFwibGVhZ3VlRGF0YS5tZXNzYWdlLmxlbmd0aCA+IDBcXFwiPjE8L3NwYW4+PHNwYW4gbmctc2hvdz1cXFwiIWxlYWd1ZURhdGEubWVzc2FnZSB8fCBsZWFndWVEYXRhLm1lc3NhZ2UubGVuZ3RoID09IDBcXFwiPjA8L3NwYW4+IF0gPGkgY2xhc3M9XFxcInB1bGwtcmlnaHQgZ2x5cGhpY29uXFxcIiBuZy1jbGFzcz1cXFwieydnbHlwaGljb24tY2hldnJvbi1kb3duJzogdXNlck1vZGVsLmxlYWd1ZU1lc3NhZ2VPcGVuW2xlYWd1ZURhdGEuaWRdLCAnZ2x5cGhpY29uLWNoZXZyb24tcmlnaHQnOiAhdXNlck1vZGVsLmxlYWd1ZU1lc3NhZ2VPcGVuW2xlYWd1ZURhdGEuaWRdfVxcXCI+PC9pPlxcblwiICtcbiAgICBcIiAgICAgIDwvYWNjb3JkaW9uLWhlYWRpbmc+XFxuXCIgK1xuICAgIFwiICAgICAgPHAgY2xhc3M9XFxcImxlYWd1ZS1tZXNzYWdlLXRleHRcXFwiIG5nLXNob3c9XFxcIiFsZWFndWVEYXRhLm1lc3NhZ2UgfHwgbGVhZ3VlRGF0YS5tZXNzYWdlLmxlbmd0aCA9PSAwXFxcIj5ubyBtZXNzYWdlczwvcD48cCBjbGFzcz1cXFwibGVhZ3VlLW1lc3NhZ2UtdGV4dFxcXCIgbmctc2hvdz1cXFwibGVhZ3VlRGF0YS5tZXNzYWdlLmxlbmd0aCA+IDBcXFwiIG5nLWJpbmQtaHRtbD1cXFwibGVhZ3VlRGF0YS5tZXNzYWdlIHwgbGlua3k6J19ibGFuaydcXFwiPjwvcD4gPGEgY2xhc3M9XFxcImFsZXJ0LWxpbmtcXFwiIG5nLXNob3c9XFxcImlzQ29tbWlzaChsZWFndWVEYXRhKVxcXCIgbmctY2xpY2s9XFxcInVwZGF0ZU1lc3NhZ2UobGVhZ3VlRGF0YSlcXFwiPlsgZWRpdCBdPC9hPjxhIGNsYXNzPVxcXCJhbGVydC1saW5rXFxcIiBuZy1zaG93PVxcXCIhaXNDb21taXNoKGxlYWd1ZURhdGEpICYmIGhhc1RlYW1JbkxlYWd1ZSgpXFxcIiBuZy1jbGljaz1cXFwiY29udGFjdENvbW1pc2gobGVhZ3VlRGF0YSlcXFwiPlsgY29udGFjdCBjb21taXNoIF08L2E+XFxuXCIgK1xuICAgIFwiICAgIDwvYWNjb3JkaW9uLWdyb3VwPlxcblwiICtcbiAgICBcIiAgPC9hY2NvcmRpb24+XFxuXCIgK1xuICAgIFwiICA8aHI+XFxuXCIgK1xuICAgIFwiPC9kaXY+XFxuXCIgK1xuICAgIFwiPGRpdiBjbGFzcz1cXFwidGVhbXMtdGFiXFxcIj5cXG5cIiArXG4gICAgXCIgIDx1bCBjbGFzcz1cXFwibmF2IG5hdi10YWJzXFxcIj5cXG5cIiArXG4gICAgXCIgICAgPGxpIGNsYXNzPVxcXCJhY3RpdmVcXFwiPjxhPlRlYW1zIFsgPHNwYW4gbmctc2hvdz1cXFwibGVhZ3VlRGF0YS5lbGltaW5hdGlvblxcXCI+e3thbGl2ZVRlYW1Db3VudChsZWFndWVUZWFtcyl9fSAvIDwvc3Bhbj57e2xlYWd1ZURhdGEudGVhbV9jb3VudH19IF08L2E+PC9saT5cXG5cIiArXG4gICAgXCIgICAgPGxpIGNsYXNzPVxcXCJkcm9wZG93blxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgPGEgY2xhc3M9XFxcImRyb3Bkb3duLXRvZ2dsZVxcXCIgZGF0YS10b2dnbGU9XFxcImRyb3Bkb3duXFxcIiBocmVmPVxcXCIjXFxcIiByb2xlPVxcXCJidXR0b25cXFwiIGFyaWEtZXhwYW5kZWQ9XFxcImZhbHNlXFxcIj5cXG5cIiArXG4gICAgXCIgICAgICAgIFJ1bGVzIDxzcGFuIGNsYXNzPVxcXCJjYXJldFxcXCI+PC9zcGFuPlxcblwiICtcbiAgICBcIiAgICAgIDwvYT5cXG5cIiArXG4gICAgXCIgICAgICA8ZGl2IGNsYXNzPVxcXCJkcm9wZG93bi1tZW51IHBhbmVsIHBhbmVsLWRlZmF1bHRcXFwiPlxcblwiICtcbiAgICBcIiAgICAgICAgPGRpdiBjbGFzcz1cXFwicGFuZWwtYm9keSBydWxlcy1wYW5lbCBzY3JvbGxhYmxlLXJ1bGVzLXBhbmVsIHNjcm9sbGFibGVcXFwiIG5nLWNsaWNrPVxcXCIkZXZlbnQuc3RvcFByb3BhZ2F0aW9uKClcXFwiPlxcblwiICtcbiAgICBcIiAgICAgICAgICA8YWNjb3JkaW9uIGNsb3NlLW90aGVycz1cXFwidHJ1ZVxcXCIgbmctc2hvdz1cXFwiIWxlYWd1ZURhdGEuZWxpbWluYXRpb25cXFwiPlxcblwiICtcbiAgICBcIiAgICAgICAgICAgIDxhY2NvcmRpb24tZ3JvdXAgaGVhZGluZz1cXFwiSG93IGRvIEkgcGxheT9cXFwiPlxcblwiICtcbiAgICBcIiAgICAgICAgICAgICAgPG9sPlxcblwiICtcbiAgICBcIiAgICAgICAgICAgICAgICA8bGk+e3sobGVhZ3VlRGF0YS5tYXhfcGlja3NfcGVyX3dlZWspID8gJ1BpY2sgJyArIGxlYWd1ZURhdGEubWF4X3BpY2tzX3Blcl93ZWVrICsgJyBsb3NlcihzKSBlYWNoIHdlZWsuJyA6ICdFYWNoIHdlZWssIHBpY2sgb25lIGxvc2VyIGZvciBldmVyeSBnYW1lLid9fTwvbGk+XFxuXCIgK1xuICAgIFwiICAgICAgICAgICAgICAgIDxsaT5Sb290IGZvciB5b3VyIGxvc2VycyB0byBsb3NlLi4uZHVoPC9saT5cXG5cIiArXG4gICAgXCIgICAgICAgICAgICAgIDwvb2w+XFxuXCIgK1xuICAgIFwiICAgICAgICAgICAgPC9hY2NvcmRpb24tZ3JvdXA+XFxuXCIgK1xuICAgIFwiICAgICAgICAgICAgPGFjY29yZGlvbi1ncm91cCBoZWFkaW5nPVxcXCJIb3cgZG8gSSB3aW4/XFxcIj5cXG5cIiArXG4gICAgXCIgICAgICAgICAgICAgIFBpY2sgdGhlIG1vc3QgY29ycmVjdCBsb3NlcnMgZm9yIHRoZSB3ZWVrIGFuZCB3aW4gdGhlIHdlZWsuXFxuXCIgK1xuICAgIFwiICAgICAgICAgICAgPC9hY2NvcmRpb24tZ3JvdXA+XFxuXCIgK1xuICAgIFwiICAgICAgICAgICAgPGFjY29yZGlvbi1ncm91cCBoZWFkaW5nPVxcXCJXaGF0IGRvIEkgd2luP1xcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgICAgICAgICBUaGF0IGlzIGJldHdlZW4geW91IGFuZCB0aGUgY29tbWlzaCBvZiB0aGUgbGVhZ3VlLiBIb3dldmVyLCBwbGVhc2UgYmUgY2FyZWZ1bCB3aGVuIGRlYWxpbmcgd2l0aCBtb25leS4gRG9u4oCZdCBzZW5kIG1vbmV5IHRvIGFueW9uZSB5b3UgZG9u4oCZdCBrbm93LiBDb21tb24gc2Vuc2UsIHBsZWFzZS5cXG5cIiArXG4gICAgXCIgICAgICAgICAgICA8L2FjY29yZGlvbi1ncm91cD5cXG5cIiArXG4gICAgXCIgICAgICAgICAgICA8YWNjb3JkaW9uLWdyb3VwIGhlYWRpbmc9XFxcIkhvdyBtYW55IGxvc2VycyBkbyBJIHBpY2sgZWFjaCB3ZWVrP1xcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgICAgICAgICB7eyhsZWFndWVEYXRhLm1heF9waWNrc19wZXJfd2VlaykgPyBsZWFndWVEYXRhLm1heF9waWNrc19wZXJfd2VlayA6ICdQaWNrIG9uZSBsb3NlciBmb3IgZXZlcnkgZ2FtZS4nfX1cXG5cIiArXG4gICAgXCIgICAgICAgICAgICA8L2FjY29yZGlvbi1ncm91cD5cXG5cIiArXG4gICAgXCIgICAgICAgICAgICA8YWNjb3JkaW9uLWdyb3VwIGhlYWRpbmc9XFxcIldoZW4gaXMgdGhlIGRlYWRsaW5lIHRvIG1ha2UgbXkgcGlja3M/XFxcIj5cXG5cIiArXG4gICAgXCIgICAgICAgICAgICAgIEFzIGxvbmcgYXMgYSBnYW1lIGhhc24ndCBzdGFydGVkLCB5b3UgY2FuIG1ha2UgYSBwaWNrIGZvciB0aGF0IGdhbWUuXFxuXCIgK1xuICAgIFwiICAgICAgICAgICAgPC9hY2NvcmRpb24tZ3JvdXA+XFxuXCIgK1xuICAgIFwiICAgICAgICAgICAgPGFjY29yZGlvbi1ncm91cCBoZWFkaW5nPVxcXCJDYW4gSSBwaWNrIHRoZSBzYW1lIGxvc2VyIHR3aWNlP1xcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgICAgICAgICBZZXMgc2lyLlxcblwiICtcbiAgICBcIiAgICAgICAgICAgIDwvYWNjb3JkaW9uLWdyb3VwPlxcblwiICtcbiAgICBcIiAgICAgICAgICAgIDxhY2NvcmRpb24tZ3JvdXAgaGVhZGluZz1cXFwiRG8gdGllcyBjb3VudCBhcyBhIGxvc3M/XFxcIj5cXG5cIiArXG4gICAgXCIgICAgICAgICAgICAgIE5vIG1hJ2FtLlxcblwiICtcbiAgICBcIiAgICAgICAgICAgIDwvYWNjb3JkaW9uLWdyb3VwPlxcblwiICtcbiAgICBcIiAgICAgICAgICAgIDxhY2NvcmRpb24tZ3JvdXAgaGVhZGluZz1cXFwiV2hlbiBpcyB0aGUgZGVhZGxpbmUgdG8gam9pbiB0aGlzIGxlYWd1ZT9cXFwiPlxcblwiICtcbiAgICBcIiAgICAgICAgICAgICAgSm9pbiBhbnl0aW1lLlxcblwiICtcbiAgICBcIiAgICAgICAgICAgIDwvYWNjb3JkaW9uLWdyb3VwPlxcblwiICtcbiAgICBcIiAgICAgICAgICAgIDxhY2NvcmRpb24tZ3JvdXAgaGVhZGluZz1cXFwiV2hhdCBpZiBJIGZhaWwgdG8gbWFrZSBwaWNrcyBmb3IgYSB3ZWVrP1xcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgICAgICAgICBJJ20gZ3Vlc3NpbmcgeW91IHdvbid0IHdpbiB0aGF0IHdlZWsuXFxuXCIgK1xuICAgIFwiICAgICAgICAgICAgPC9hY2NvcmRpb24tZ3JvdXA+XFxuXCIgK1xuICAgIFwiICAgICAgICAgICAgPGFjY29yZGlvbi1ncm91cCBoZWFkaW5nPVxcXCJJcyB0aGVyZSBhbnl0aGluZyBlbHNlIEkgc2hvdWxkIGtub3c/XFxcIj5cXG5cIiArXG4gICAgXCIgICAgICAgICAgICAgIE5vdCByZWFsbHksIGJ1dCB5b3UgY2FuIHJlYWQgdGhlIGdlbmVyYWwgPGEgbmctY2xpY2s9XFxcInJlYWRGYXEoKVxcXCI+ZmFxPC9hPiBpZiB5b3UgbGlrZS5cXG5cIiArXG4gICAgXCIgICAgICAgICAgICA8L2FjY29yZGlvbi1ncm91cD5cXG5cIiArXG4gICAgXCIgICAgICAgICAgPC9hY2NvcmRpb24+XFxuXCIgK1xuICAgIFwiICAgICAgICAgIDxhY2NvcmRpb24gY2xvc2Utb3RoZXJzPVxcXCJ0cnVlXFxcIiBuZy1zaG93PVxcXCJsZWFndWVEYXRhLmVsaW1pbmF0aW9uXFxcIj5cXG5cIiArXG4gICAgXCIgICAgICAgICAgICA8YWNjb3JkaW9uLWdyb3VwIGhlYWRpbmc9XFxcIkhvdyBkbyBJIHBsYXk/XFxcIj5cXG5cIiArXG4gICAgXCIgICAgICAgICAgICAgIDxvbD5cXG5cIiArXG4gICAgXCIgICAgICAgICAgICAgICAgPGxpPlBpY2sgYSBkaWZmZXJlbnQgbG9zZXIgZWFjaCB3ZWVrLjwvbGk+XFxuXCIgK1xuICAgIFwiICAgICAgICAgICAgICAgIDxsaT5Sb290IGZvciB5b3VyIGxvc2VyIHRvIGxvc2UuLi5kdWg8L2xpPlxcblwiICtcbiAgICBcIiAgICAgICAgICAgICAgICA8bGk+SWYgeW91IGFyZSB3cm9uZywgeW91IGFyZSBvdXQuPC9saT5cXG5cIiArXG4gICAgXCIgICAgICAgICAgICAgICAgPGxpPklmIHlvdSBhcmUgcmlnaHQsIHlvdSBtb3ZlIG9uIHRvIHRoZSBuZXh0IHdlZWsuPC9saT5cXG5cIiArXG4gICAgXCIgICAgICAgICAgICAgIDwvb2w+XFxuXCIgK1xuICAgIFwiICAgICAgICAgICAgPC9hY2NvcmRpb24tZ3JvdXA+XFxuXCIgK1xuICAgIFwiICAgICAgICAgICAgPGFjY29yZGlvbi1ncm91cCBoZWFkaW5nPVxcXCJIb3cgZG8gSSB3aW4/XFxcIj5cXG5cIiArXG4gICAgXCIgICAgICAgICAgICAgIHt7KGxlYWd1ZURhdGEuZWxpbWluYXRlX29uX3RpZSkgPyAnVGhlIHRlYW0gdGhhdCBsYXN0IHRoZSBsb25nZXN0IHdpbnMuJyA6ICdUaGUgdGVhbSB3aXRoIHRoZSBtb3N0IGNvcnJlY3QgbG9zZXJzIGF0IHRoZSBlbmQgb2YgdGhlIHNlYXNvbiB3aW5zLid9fVxcblwiICtcbiAgICBcIiAgICAgICAgICAgIDwvYWNjb3JkaW9uLWdyb3VwPlxcblwiICtcbiAgICBcIiAgICAgICAgICAgIDxhY2NvcmRpb24tZ3JvdXAgaGVhZGluZz1cXFwiV2hhdCBkbyBJIHdpbj9cXFwiPlxcblwiICtcbiAgICBcIiAgICAgICAgICAgICAgVGhhdCBpcyBiZXR3ZWVuIHlvdSBhbmQgdGhlIGNvbW1pc2ggb2YgdGhlIGxlYWd1ZS4gSG93ZXZlciwgcGxlYXNlIGJlIGNhcmVmdWwgd2hlbiBkZWFsaW5nIHdpdGggbW9uZXkuIERvbuKAmXQgc2VuZCBtb25leSB0byBhbnlvbmUgeW91IGRvbuKAmXQga25vdy4gQ29tbW9uIHNlbnNlLCBwbGVhc2UuXFxuXCIgK1xuICAgIFwiICAgICAgICAgICAgPC9hY2NvcmRpb24tZ3JvdXA+XFxuXCIgK1xuICAgIFwiICAgICAgICAgICAgPGFjY29yZGlvbi1ncm91cCBoZWFkaW5nPVxcXCJIb3cgbWFueSBsb3NlcnMgZG8gSSBwaWNrIGVhY2ggd2Vlaz9cXFwiPlxcblwiICtcbiAgICBcIiAgICAgICAgICAgICAgMVxcblwiICtcbiAgICBcIiAgICAgICAgICAgIDwvYWNjb3JkaW9uLWdyb3VwPlxcblwiICtcbiAgICBcIiAgICAgICAgICAgIDxhY2NvcmRpb24tZ3JvdXAgaGVhZGluZz1cXFwiV2hlbiBpcyB0aGUgZGVhZGxpbmUgdG8gbWFrZSBteSBwaWNrP1xcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgICAgICAgICBBcyBsb25nIGFzIGEgZ2FtZSBoYXNuJ3Qgc3RhcnRlZCwgeW91IGNhbiBtYWtlIGEgcGljayBmb3IgdGhhdCBnYW1lLiBNYWtlIHN1cmUgeW91IG1ha2UgYSBwaWNrIGJlZm9yZSB0aGUgZW5kIG9mIHRoZSB3ZWVrLlxcblwiICtcbiAgICBcIiAgICAgICAgICAgIDwvYWNjb3JkaW9uLWdyb3VwPlxcblwiICtcbiAgICBcIiAgICAgICAgICAgIDxhY2NvcmRpb24tZ3JvdXAgaGVhZGluZz1cXFwiRHVyaW5nIHRoZSBzZWFzb24sIGNhbiBJIHBpY2sgdGhlIHNhbWUgbG9zZXIgdHdpY2U/XFxcIj5cXG5cIiArXG4gICAgXCIgICAgICAgICAgICAgIE5vcGUuIFVubGVzcyB5b3UgbWFrZSB0aGUgcGxheW9mZnMgd2hlcmUgYWxsIGxvc2VycyBhcmUgb25jZSBhZ2FpbiBhdmFpbGFibGUgdG8gcGljay5cXG5cIiArXG4gICAgXCIgICAgICAgICAgICA8L2FjY29yZGlvbi1ncm91cD5cXG5cIiArXG4gICAgXCIgICAgICAgICAgICA8YWNjb3JkaW9uLWdyb3VwIGhlYWRpbmc9XFxcIkRvIHRpZXMgY291bnQgYXMgYSBsb3NzP1xcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgICAgICAgICBOZWdhdGl2ZS4ge3sobGVhZ3VlRGF0YS5lbGltaW5hdGVfb25fdGllKSA/ICdBIHRpZSB3aWxsIHJlc3VsdCBpbiBlbGltaW5hdGlvbi4nIDogJ0hvd2V2ZXIsIGEgdGllIHdpbGwgbm90IHJlc3VsdCBpbiBlbGltaW5hdGlvbi4nfX1cXG5cIiArXG4gICAgXCIgICAgICAgICAgICA8L2FjY29yZGlvbi1ncm91cD5cXG5cIiArXG4gICAgXCIgICAgICAgICAgICA8YWNjb3JkaW9uLWdyb3VwIGhlYWRpbmc9XFxcIldoZW4gaXMgdGhlIGRlYWRsaW5lIHRvIGpvaW4gdGhlIGxlYWd1ZT9cXFwiPlxcblwiICtcbiAgICBcIiAgICAgICAgICAgICAgSm9pbiBiZWZvcmUgdGhlIGVuZCBvZiB0aGlzIGxlYWd1ZSdzIHN0YXJ0IHdlZWsuXFxuXCIgK1xuICAgIFwiICAgICAgICAgICAgPC9hY2NvcmRpb24tZ3JvdXA+XFxuXCIgK1xuICAgIFwiICAgICAgICAgICAgPGFjY29yZGlvbi1ncm91cCBoZWFkaW5nPVxcXCJXaGF0IGlmIEkgZmFpbCB0byBtYWtlIGEgcGljayBmb3IgYSB3ZWVrP1xcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgICAgICAgICBQYWNrIHlvdXIgYmFncy4gWW91J3JlIGdvaW5nIGhvbWUuXFxuXCIgK1xuICAgIFwiICAgICAgICAgICAgPC9hY2NvcmRpb24tZ3JvdXA+XFxuXCIgK1xuICAgIFwiICAgICAgICAgICAgPGFjY29yZGlvbi1ncm91cCBoZWFkaW5nPVxcXCJJcyB0aGVyZSBhbnl0aGluZyBlbHNlIEkgc2hvdWxkIGtub3c/XFxcIj5cXG5cIiArXG4gICAgXCIgICAgICAgICAgICAgIE5vdCByZWFsbHksIGJ1dCB5b3UgY2FuIHJlYWQgdGhlIGdlbmVyYWwgPGEgbmctY2xpY2s9XFxcInJlYWRGYXEoKVxcXCI+ZmFxPC9hPiBpZiB5b3UgbGlrZS5cXG5cIiArXG4gICAgXCIgICAgICAgICAgICA8L2FjY29yZGlvbi1ncm91cD5cXG5cIiArXG4gICAgXCIgICAgICAgICAgPC9hY2NvcmRpb24+XFxuXCIgK1xuICAgIFwiICAgICAgICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgICAgICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgICAgPC9saT5cXG5cIiArXG4gICAgXCIgICAgPGxpIGNsYXNzPVxcXCJkcm9wZG93blxcXCIgbmctc2hvdz1cXFwiaGFzVGVhbUluTGVhZ3VlKCkgfHwgaXNDb21taXNoKGxlYWd1ZURhdGEpXFxcIj5cXG5cIiArXG4gICAgXCIgICAgICA8YSBjbGFzcz1cXFwiZHJvcGRvd24tdG9nZ2xlXFxcIiBkYXRhLXRvZ2dsZT1cXFwiZHJvcGRvd25cXFwiIGhyZWY9XFxcIiNcXFwiIHJvbGU9XFxcImJ1dHRvblxcXCIgYXJpYS1leHBhbmRlZD1cXFwiZmFsc2VcXFwiPlxcblwiICtcbiAgICBcIiAgICAgICAgU2hhcmUgPHNwYW4gY2xhc3M9XFxcImNhcmV0XFxcIj48L3NwYW4+XFxuXCIgK1xuICAgIFwiICAgICAgPC9hPlxcblwiICtcbiAgICBcIiAgICAgIDx1bCBjbGFzcz1cXFwiZHJvcGRvd24tbWVudVxcXCIgcm9sZT1cXFwibWVudVxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgICA8bGk+PGEgbmctY2xpY2s9XFxcInNoYXJlTGVhZ3VlRkIoKVxcXCI+U2hhcmUgb24gRmFjZWJvb2s8L2E+PC9saT5cXG5cIiArXG4gICAgXCIgICAgICA8L3VsPlxcblwiICtcbiAgICBcIiAgICA8L2xpPlxcblwiICtcbiAgICBcIiAgPC91bD5cXG5cIiArXG4gICAgXCIgIDxkaXYgY2xhc3M9XFxcIndlZWtzXFxcIj5cXG5cIiArXG4gICAgXCIgICAgPHNlbGVjdCBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBuZy1jaGFuZ2U9XFxcImNoYW5nZVdlZWsoc2VsZWN0ZWRXZWVrU2x1ZylcXFwiIG5nLW1vZGVsPVxcXCJzZWxlY3RlZFdlZWtTbHVnXFxcIiBuZy1vcHRpb25zPVxcXCJsZWFndWVXZWVrLnNsdWcgYXMgbGVhZ3VlV2Vlay5kaXNwbGF5IGZvciBsZWFndWVXZWVrIGluIGxlYWd1ZVdlZWtzXFxcIj5cXG5cIiArXG4gICAgXCIgICAgICA8b3B0aW9uIHZhbHVlPVxcXCJcXFwiPkFsbCBXZWVrczwvb3B0aW9uPlxcblwiICtcbiAgICBcIiAgICA8L3NlbGVjdD5cXG5cIiArXG4gICAgXCIgIDwvZGl2PlxcblwiICtcbiAgICBcIiAgPGRpdiBjbGFzcz1cXFwiaW5wdXQtZ3JvdXAgY3VzdG9tLXNlYXJjaC1mb3JtIGZpbHRlci1sZWFndWUtam9pblxcXCI+XFxuXCIgK1xuICAgIFwiICAgIDxpbnB1dCB0eXBlPVxcXCJ0ZXh0XFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBwbGFjZWhvbGRlcj1cXFwiU2VhcmNoLi4uXFxcIiBuZy1tb2RlbD1cXFwidGVhbVF1ZXJ5XFxcIj5cXG5cIiArXG4gICAgXCIgICAgPHNwYW4gY2xhc3M9XFxcImlucHV0LWdyb3VwLWJ0blxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgPGJ1dHRvbiBjbGFzcz1cXFwiYnRuIGJ0bi1kZWZhdWx0XFxcIiB0eXBlPVxcXCJidXR0b25cXFwiPjxzcGFuIGNsYXNzPVxcXCJnbHlwaGljb24gZ2x5cGhpY29uLXNlYXJjaFxcXCI+PC9zcGFuPjwvYnV0dG9uPlxcblwiICtcbiAgICBcIiAgICA8L3NwYW4+XFxuXCIgK1xuICAgIFwiICA8L2Rpdj5cXG5cIiArXG4gICAgXCI8L2Rpdj5cXG5cIiArXG4gICAgXCI8ZGl2IGNsYXNzPVxcXCJsZWFndWUtY29udGFpbmVyXFxcIj5cXG5cIiArXG4gICAgXCIgIDxkaXYgY2xhc3M9XFxcImxlYWd1ZS10ZWFtcyBsaXN0LWdyb3VwXFxcIj5cXG5cIiArXG4gICAgXCIgICAgPGEgY2xhc3M9XFxcImxpc3QtZ3JvdXAtaXRlbVxcXCIgbmctcmVwZWF0PVxcXCJ0ZWFtIGluIGxlYWd1ZVRlYW1zIHwgb3JkZXJCeTpbaW5QbGF5LCAnLWNvcnJlY3RfcGlja3NfY291bnQnLCAnbmFtZSddIHwgYWN0aXZlVGVhbUZpbHRlcjp0ZWFtT3B0aW9ucyB8IGZpbHRlcjpzZWFyY2g6c3RyaWN0IHwgb2Zmc2V0RmlsdGVyOihjdXJyZW50VGVhbVBhZ2UtMSkqdGVhbXNQZXJQYWdlIHwgbGltaXRUbzp0ZWFtc1BlclBhZ2VcXFwiIG5nLWNsaWNrPVxcXCJzaG93VGVhbSh0ZWFtKVxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgPGRpdiBjbGFzcz1cXFwicm93XFxcIj5cXG5cIiArXG4gICAgXCIgICAgICAgIDxkaXYgY2xhc3M9XFxcImxlYWd1ZS1uYW1lIGNvbC1zbS01IGNvbC1tZC01XFxcIj5cXG5cIiArXG4gICAgXCIgICAgICAgICAgPGkgY2xhc3M9XFxcImZhIGZhLXVzZXIgZmEtZndcXFwiIG5nLXNob3c9XFxcImlzQ29hY2godGVhbSlcXFwiIHRpdGxlPVxcXCJNeSB0ZWFtXFxcIj48L2k+IDxzcGFuIGNsYXNzPVxcXCJ0ZWFtLW5hbWVcXFwiIG5nLWNsYXNzPVxcXCJ7J2luYWN0aXZlJzogIXRlYW0uYWN0aXZlIHx8IGlzRWxpbWluYXRlZCh0ZWFtKX1cXFwiPnt7dGVhbS5uYW1lfX08L3NwYW4+XFxuXCIgK1xuICAgIFwiICAgICAgICAgIDxicj5cXG5cIiArXG4gICAgXCIgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcImNvYWNoLW5hbWVcXFwiPkNvYWNoOiB7e2NvYWNoTmFtZSh0ZWFtKX19PC9zcGFuPlxcblwiICtcbiAgICBcIiAgICAgICAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtc20tNyBjb2wtbWQtN1xcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJjdXJyZW50LXBpY2tcXFwiIG5nLWNsYXNzPVxcXCJ7J25vLXBpY2snOiB0ZWFtLmN1cnJlbnRfcGljay53YXJuaW5nID09IHRydWV9XFxcIiBuZy1zaG93PVxcXCJ0ZWFtLmFjdGl2ZSAmJiB0ZWFtLnN0YXJ0ZWRcXFwiPlxcblwiICtcbiAgICBcIiAgICAgICAgICAgIDxpIGNsYXNzPVxcXCJmYSBmYS17e3BpY2tTdGF0dXModGVhbS5jdXJyZW50X3BpY2spfX0gZmEtZndcXFwiPjwvaT5cXG5cIiArXG4gICAgXCIgICAgICAgICAgICBbIDxzcGFuIGNsYXNzPVxcXCJjdXJyZW50LWxvc2VyLW5hbWVcXFwiPnt7dGVhbS5jdXJyZW50X3BpY2submFtZX19PC9zcGFuPjxzcGFuIGNsYXNzPVxcXCJjdXJyZW50LWxvc2VyLWFiYnJldlxcXCI+e3t0ZWFtLmN1cnJlbnRfcGljay5hYmJyZXZ9fTwvc3Bhbj4gXVxcblwiICtcbiAgICBcIiAgICAgICAgICA8L3NwYW4+XFxuXCIgK1xuICAgIFwiICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJjdXJyZW50LXBpY2tcXFwiIG5nLXNob3c9XFxcInRlYW0uYWN0aXZlICYmICF0ZWFtLnN0YXJ0ZWRcXFwiPlN0YXJ0cyB7e3RlYW0uc3RhcnRfd2Vla319PC9zcGFuPlxcblwiICtcbiAgICBcIiAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwiaW5hY3RpdmUtdGVhbSBjdXJyZW50LXBpY2tcXFwiIG5nLXNob3c9XFxcIiF0ZWFtLmFjdGl2ZVxcXCI+VGVhbSBoYXMgYmVlbiBkZWFjdGl2YXRlZDwvc3Bhbj5cXG5cIiArXG4gICAgXCIgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcImJhZGdlXFxcIj57e3RlYW0uY29ycmVjdF9waWNrc19jb3VudH19IGxvc2VyPHNwYW4gbmctc2hvdz1cXFwidGVhbS5jb3JyZWN0X3BpY2tzX2NvdW50ICE9IDFcXFwiPnM8L3NwYW4+PC9zcGFuPlxcblwiICtcbiAgICBcIiAgICAgICAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICAgICAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICAgIDwvYT5cXG5cIiArXG4gICAgXCIgIDwvZGl2PlxcblwiICtcbiAgICBcIiAgPGRpdj5cXG5cIiArXG4gICAgXCIgICAgPGRpdiBjbGFzcz1cXFwiYWxlcnQgYWxlcnQtaW5mb1xcXCIgbmctc2hvdz1cXFwiKGxlYWd1ZVRlYW1zIHwgYWN0aXZlVGVhbUZpbHRlcjp0ZWFtT3B0aW9ucyB8IGZpbHRlcjpzZWFyY2g6c3RyaWN0KS5sZW5ndGggPT0gMFxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgTm8gdGVhbXMgZm91bmRcXG5cIiArXG4gICAgXCIgICAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICAgIDxkaXYgY2xhc3M9XFxcImxlYWd1ZS10ZWFtcy1wYWdpbmF0aW9uXFxcIiBuZy1zaG93PVxcXCJsZWFndWVUZWFtcy5sZW5ndGggPiB0ZWFtc1BlclBhZ2UgJiYgKGxlYWd1ZVRlYW1zIHwgYWN0aXZlVGVhbUZpbHRlcjp0ZWFtT3B0aW9ucyB8IGZpbHRlcjpzZWFyY2g6c3RyaWN0KS5sZW5ndGggPiAwXFxcIj5cXG5cIiArXG4gICAgXCIgICAgICA8cGFnaW5hdGlvbiBib3VuZGFyeS1saW5rcz1cXFwidHJ1ZVxcXCIgbWF4LXNpemU9XFxcIjRcXFwiIHRvdGFsLWl0ZW1zPVxcXCIobGVhZ3VlVGVhbXMgfCBhY3RpdmVUZWFtRmlsdGVyOnRlYW1PcHRpb25zIHwgZmlsdGVyOnNlYXJjaDpzdHJpY3QpLmxlbmd0aFxcXCIgaXRlbXMtcGVyLXBhZ2U9XFxcInRlYW1zUGVyUGFnZVxcXCIgbmctbW9kZWw9XFxcImN1cnJlbnRUZWFtUGFnZVxcXCIgY2xhc3M9XFxcInBhZ2luYXRpb24tbWRcXFwiIHByZXZpb3VzLXRleHQ9XFxcIiZsc2FxdW87XFxcIiBuZXh0LXRleHQ9XFxcIiZyc2FxdW87XFxcIiBmaXJzdC10ZXh0PVxcXCImbGFxdW87XFxcIiBsYXN0LXRleHQ9XFxcIiZyYXF1bztcXFwiPjwvcGFnaW5hdGlvbj5cXG5cIiArXG4gICAgXCIgICAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICA8L2Rpdj5cXG5cIiArXG4gICAgXCI8L2Rpdj5cXG5cIiArXG4gICAgXCJcIik7XG59XSk7XG5cbmFuZ3VsYXIubW9kdWxlKFwibW9kdWxlcy9wcml2YXRlL2xlYWd1ZXMvam9pbi9sZWFndWVzLmpvaW4udHBsLmh0bWxcIiwgW10pLnJ1bihbXCIkdGVtcGxhdGVDYWNoZVwiLCBmdW5jdGlvbigkdGVtcGxhdGVDYWNoZSkge1xuICAkdGVtcGxhdGVDYWNoZS5wdXQoXCJtb2R1bGVzL3ByaXZhdGUvbGVhZ3Vlcy9qb2luL2xlYWd1ZXMuam9pbi50cGwuaHRtbFwiLFxuICAgIFwiPGRpdiBjbGFzcz1cXFwiam9pbi1sZWFndWVzLWhlYWRlci1yb3cgcm93XFxcIj5cXG5cIiArXG4gICAgXCIgIDxkaXYgY2xhc3M9XFxcImNvbC1zbS05IGNvbC1tZC05XFxcIj5cXG5cIiArXG4gICAgXCIgICAgPGgzPkpvaW4gYSBsZWFndWUuLi48L2gzPlxcblwiICtcbiAgICBcIiAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICA8ZGl2IGNsYXNzPVxcXCJjb2wtc20tMyBjb2wtbWQtM1xcXCI+XFxuXCIgK1xuICAgIFwiICAgIDxkaXYgY2xhc3M9XFxcImpvaW4tbGVhZ3Vlcy1idG4tZ3JvdXBcXFwiPlxcblwiICtcbiAgICBcIiAgICAgIDxidXR0b24gdHlwZT1cXFwiYnV0dG9uXFxcIiBjbGFzcz1cXFwiY3JlYXRlLWxlYWd1ZS1idG4gYnRuIGJ0bi1wcmltYXJ5XFxcIiBuZy1jbGljaz1cXFwiY3JlYXRlTGVhZ3VlKClcXFwiPkNyZWF0ZSBMZWFndWU8L2J1dHRvbj5cXG5cIiArXG4gICAgXCIgICAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICA8L2Rpdj5cXG5cIiArXG4gICAgXCI8L2Rpdj5cXG5cIiArXG4gICAgXCI8aHI+XFxuXCIgK1xuICAgIFwiPGRpdiBjbGFzcz1cXFwiam9pbi1sZWFndWVzLXRhYnNcXFwiPlxcblwiICtcbiAgICBcIiAgPHVsIGNsYXNzPVxcXCJuYXYgbmF2LXRhYnNcXFwiPlxcblwiICtcbiAgICBcIiAgICA8bGkgbmctY2xhc3M9XFxcInsnYWN0aXZlJzogaXNQdWJsaWMoKX1cXFwiIG5nLWNsaWNrPVxcXCJyZXNldFNlYXJjaCgpXFxcIj5cXG5cIiArXG4gICAgXCIgICAgICA8YSBuZy1jbGljaz1cXFwicHVibGljTGVhZ3VlcyhzZWxlY3RlZFNlYXNvbklkKVxcXCI+PGkgY2xhc3M9XFxcImZhIGZhLXVubG9jayBmYS1md1xcXCIgdGl0bGU9XFxcIlB1YmxpYyBsZWFndWVzXFxcIj48L2k+IFB1YmxpYyA8c3BhbiBjbGFzcz1cXFwibGVhZ3Vlc1xcXCI+TGVhZ3Vlczwvc3Bhbj48L2E+XFxuXCIgK1xuICAgIFwiICAgIDwvbGk+XFxuXCIgK1xuICAgIFwiICAgIDxsaSBuZy1jbGFzcz1cXFwieydhY3RpdmUnOiAhaXNQdWJsaWMoKX1cXFwiIG5nLWNsaWNrPVxcXCJyZXNldFNlYXJjaCgpXFxcIj5cXG5cIiArXG4gICAgXCIgICAgICA8YSBuZy1jbGljaz1cXFwicHJpdmF0ZUxlYWd1ZXMoc2VsZWN0ZWRTZWFzb25JZClcXFwiPjxpIGNsYXNzPVxcXCJmYSBmYS1sb2NrIGZhLWZ3XFxcIiB0aXRsZT1cXFwiUHJpdmF0ZSBsZWFndWVzXFxcIj48L2k+IFByaXZhdGUgPHNwYW4gY2xhc3M9XFxcImxlYWd1ZXNcXFwiPkxlYWd1ZXM8L3NwYW4+PC9hPlxcblwiICtcbiAgICBcIiAgICA8L2xpPlxcblwiICtcbiAgICBcIiAgPC91bD5cXG5cIiArXG4gICAgXCIgIDxkaXYgY2xhc3M9XFxcInNlYXNvbnNcXFwiPlxcblwiICtcbiAgICBcIiAgICA8c2VsZWN0IGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIG5nLWNoYW5nZT1cXFwiY2hhbmdlU2Vhc29uKHNlbGVjdGVkU2Vhc29uSWQpXFxcIiBuZy1tb2RlbD1cXFwic2VsZWN0ZWRTZWFzb25JZFxcXCIgbmctb3B0aW9ucz1cXFwiY3VycmVudFNlYXNvbi5pZCBhcyBjdXJyZW50U2Vhc29uLm5hbWUgZm9yIGN1cnJlbnRTZWFzb24gaW4gY3VycmVudFNlYXNvbnNcXFwiPjwvc2VsZWN0PlxcblwiICtcbiAgICBcIiAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICA8ZGl2IGNsYXNzPVxcXCJpbnB1dC1ncm91cCBjdXN0b20tc2VhcmNoLWZvcm0gZmlsdGVyLWxlYWd1ZS1qb2luXFxcIj5cXG5cIiArXG4gICAgXCIgICAgPGlucHV0IHR5cGU9XFxcInRleHRcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIHBsYWNlaG9sZGVyPVxcXCJTZWFyY2guLi5cXFwiIG5nLW1vZGVsPVxcXCJsZWFndWVRdWVyeVxcXCI+XFxuXCIgK1xuICAgIFwiICAgIDxzcGFuIGNsYXNzPVxcXCJpbnB1dC1ncm91cC1idG5cXFwiPlxcblwiICtcbiAgICBcIiAgICAgIDxidXR0b24gY2xhc3M9XFxcImJ0biBidG4tZGVmYXVsdFxcXCIgdHlwZT1cXFwiYnV0dG9uXFxcIj48c3BhbiBjbGFzcz1cXFwiZ2x5cGhpY29uIGdseXBoaWNvbi1zZWFyY2hcXFwiPjwvc3Bhbj48L2J1dHRvbj5cXG5cIiArXG4gICAgXCIgICAgPC9zcGFuPlxcblwiICtcbiAgICBcIiAgPC9kaXY+XFxuXCIgK1xuICAgIFwiPC9kaXY+XFxuXCIgK1xuICAgIFwiPGRpdiBjbGFzcz1cXFwibGVhZ3Vlcy1jb250ZW50XFxcIiB1aS12aWV3PVxcXCJqb2luTGVhZ3Vlc0NvbnRlbnRcXFwiPjwvZGl2PlxcblwiICtcbiAgICBcIlxcblwiICtcbiAgICBcIlwiKTtcbn1dKTtcblxuYW5ndWxhci5tb2R1bGUoXCJtb2R1bGVzL3ByaXZhdGUvbGVhZ3Vlcy9qb2luL3ByaXZhdGUvbGVhZ3Vlcy5qb2luLnByaXZhdGUudHBsLmh0bWxcIiwgW10pLnJ1bihbXCIkdGVtcGxhdGVDYWNoZVwiLCBmdW5jdGlvbigkdGVtcGxhdGVDYWNoZSkge1xuICAkdGVtcGxhdGVDYWNoZS5wdXQoXCJtb2R1bGVzL3ByaXZhdGUvbGVhZ3Vlcy9qb2luL3ByaXZhdGUvbGVhZ3Vlcy5qb2luLnByaXZhdGUudHBsLmh0bWxcIixcbiAgICBcIjxkaXYgY2xhc3M9XFxcInByaXZhdGUtbGVhZ3VlcyBsaXN0LWdyb3VwXFxcIj5cXG5cIiArXG4gICAgXCIgICAgPGEgbmctcmVwZWF0PVxcXCJsZWFndWUgaW4gcHJpdmF0ZUxlYWd1ZXMgfCBmaWx0ZXI6c2VhcmNoOnN0cmljdCB8IG9mZnNldEZpbHRlcjooY3VycmVudExlYWd1ZVBhZ2UtMSkqbGVhZ3Vlc1BlclBhZ2UgfCBsaW1pdFRvOmxlYWd1ZXNQZXJQYWdlXFxcIiBuZy1jbGljaz1cXFwic2hvd0xlYWd1ZShsZWFndWUpXFxcIiBjbGFzcz1cXFwibGlzdC1ncm91cC1pdGVtXFxcIj5cXG5cIiArXG4gICAgXCIgICAgICA8ZGl2IGNsYXNzPVxcXCJyb3dcXFwiPlxcblwiICtcbiAgICBcIiAgICAgICAgPGRpdiBjbGFzcz1cXFwibGVhZ3VlLW5hbWUgY29sLXNtLTUgY29sLW1kLTVcXFwiPnt7bGVhZ3VlLm5hbWV9fTxicj48c3BhbiBjbGFzcz1cXFwicHJpdmF0ZS1sZWFndWUtbWV0YVxcXCI+e3tzdGFydHMobGVhZ3VlKX19PC9zcGFuPjwvZGl2PlxcblwiICtcbiAgICBcIiAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXNtLTcgY29sLW1kLTdcXFwiPlxcblwiICtcbiAgICBcIiAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwicHJpdmF0ZS1sZWFndWUtbWV0YVxcXCI+e3tsZWFndWUuZm9ybWF0fX08YnI+Q29tbWlzaDoge3tsZWFndWUuY29tbWlzaF9uYW1lcy5qb2luKCcsICcpfX08L3NwYW4+XFxuXCIgK1xuICAgIFwiICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJiYWRnZVxcXCI+e3tsZWFndWUudGVhbV9jb3VudH19IHRlYW08c3BhbiBuZy1zaG93PVxcXCJsZWFndWUudGVhbV9jb3VudCAhPT0gMVxcXCI+czwvc3Bhbj48L3NwYW4+XFxuXCIgK1xuICAgIFwiICAgICAgICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgICAgICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgICAgPC9hPlxcblwiICtcbiAgICBcIjwvZGl2PlxcblwiICtcbiAgICBcIlxcblwiICtcbiAgICBcIjxkaXYgY2xhc3M9XFxcInByaXZhdGUtbGVhZ3VlLXBhZ2luYXRpb25cXFwiIG5nLXNob3c9XFxcInByaXZhdGVMZWFndWVzLmxlbmd0aCA+IGxlYWd1ZXNQZXJQYWdlICYmIChwcml2YXRlTGVhZ3VlcyB8IGZpbHRlcjpzZWFyY2g6c3RyaWN0KS5sZW5ndGggPiAwXFxcIj5cXG5cIiArXG4gICAgXCIgICAgPHBhZ2luYXRpb24gYm91bmRhcnktbGlua3M9XFxcInRydWVcXFwiIG1heC1zaXplPVxcXCI0XFxcIiB0b3RhbC1pdGVtcz1cXFwiKHByaXZhdGVMZWFndWVzIHwgZmlsdGVyOnNlYXJjaDpzdHJpY3QpLmxlbmd0aFxcXCIgaXRlbXMtcGVyLXBhZ2U9XFxcImxlYWd1ZXNQZXJQYWdlXFxcIiBuZy1tb2RlbD1cXFwiY3VycmVudExlYWd1ZVBhZ2VcXFwiIGNsYXNzPVxcXCJwYWdpbmF0aW9uLW1kXFxcIiBwcmV2aW91cy10ZXh0PVxcXCImbHNhcXVvO1xcXCIgbmV4dC10ZXh0PVxcXCImcnNhcXVvO1xcXCIgZmlyc3QtdGV4dD1cXFwiJmxhcXVvO1xcXCIgbGFzdC10ZXh0PVxcXCImcmFxdW87XFxcIj48L3BhZ2luYXRpb24+XFxuXCIgK1xuICAgIFwiPC9kaXY+XFxuXCIgK1xuICAgIFwiPGRpdiBjbGFzcz1cXFwiYWxlcnQgYWxlcnQtaW5mb1xcXCIgbmctc2hvdz1cXFwiKHByaXZhdGVMZWFndWVzIHwgZmlsdGVyOnNlYXJjaDpzdHJpY3QpLmxlbmd0aCA9PSAwXFxcIj5cXG5cIiArXG4gICAgXCIgIE5vIGxlYWd1ZXMgZm91bmRcXG5cIiArXG4gICAgXCI8L2Rpdj5cXG5cIiArXG4gICAgXCJcIik7XG59XSk7XG5cbmFuZ3VsYXIubW9kdWxlKFwibW9kdWxlcy9wcml2YXRlL2xlYWd1ZXMvam9pbi9wdWJsaWMvbGVhZ3Vlcy5qb2luLnB1YmxpYy50cGwuaHRtbFwiLCBbXSkucnVuKFtcIiR0ZW1wbGF0ZUNhY2hlXCIsIGZ1bmN0aW9uKCR0ZW1wbGF0ZUNhY2hlKSB7XG4gICR0ZW1wbGF0ZUNhY2hlLnB1dChcIm1vZHVsZXMvcHJpdmF0ZS9sZWFndWVzL2pvaW4vcHVibGljL2xlYWd1ZXMuam9pbi5wdWJsaWMudHBsLmh0bWxcIixcbiAgICBcIjxkaXYgY2xhc3M9XFxcInB1YmxpYy1sZWFndWVzIGxpc3QtZ3JvdXBcXFwiPlxcblwiICtcbiAgICBcIiAgICA8YSBuZy1yZXBlYXQ9XFxcImxlYWd1ZSBpbiBwdWJsaWNMZWFndWVzIHwgZmlsdGVyOnNlYXJjaDpzdHJpY3QgfCBvZmZzZXRGaWx0ZXI6KGN1cnJlbnRMZWFndWVQYWdlLTEpKmxlYWd1ZXNQZXJQYWdlIHwgbGltaXRUbzpsZWFndWVzUGVyUGFnZVxcXCIgbmctY2xpY2s9XFxcInNob3dMZWFndWUobGVhZ3VlKVxcXCIgY2xhc3M9XFxcImxpc3QtZ3JvdXAtaXRlbVxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgICA8ZGl2IGNsYXNzPVxcXCJyb3dcXFwiPlxcblwiICtcbiAgICBcIiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImxlYWd1ZS1uYW1lIGNvbC1zbS01IGNvbC1tZC01XFxcIj57e2xlYWd1ZS5uYW1lfX08YnI+PHNwYW4gY2xhc3M9XFxcInB1YmxpYy1sZWFndWUtbWV0YVxcXCI+e3tzdGFydHMobGVhZ3VlKX19PC9zcGFuPjwvZGl2PlxcblwiICtcbiAgICBcIiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1zbS03IGNvbC1tZC03XFxcIj5cXG5cIiArXG4gICAgXCIgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcInB1YmxpYy1sZWFndWUtbWV0YVxcXCI+e3tsZWFndWUuZm9ybWF0fX08YnI+Q29tbWlzaDoge3tsZWFndWUuY29tbWlzaF9uYW1lcy5qb2luKCcsICcpfX08L3NwYW4+XFxuXCIgK1xuICAgIFwiICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJiYWRnZVxcXCI+e3tsZWFndWUudGVhbV9jb3VudH19IHRlYW08c3BhbiBuZy1zaG93PVxcXCJsZWFndWUudGVhbV9jb3VudCAhPT0gMVxcXCI+czwvc3Bhbj48L3NwYW4+XFxuXCIgK1xuICAgIFwiICAgICAgICAgICAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICAgICAgICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgICAgPC9hPlxcblwiICtcbiAgICBcIjwvZGl2PlxcblwiICtcbiAgICBcIlxcblwiICtcbiAgICBcIjxkaXYgY2xhc3M9XFxcInB1YmxpYy1sZWFndWUtcGFnaW5hdGlvblxcXCIgbmctc2hvdz1cXFwicHVibGljTGVhZ3Vlcy5sZW5ndGggPiBsZWFndWVzUGVyUGFnZSAmJiAocHVibGljTGVhZ3VlcyB8IGZpbHRlcjpzZWFyY2g6c3RyaWN0KS5sZW5ndGggPiAwXFxcIj5cXG5cIiArXG4gICAgXCIgICAgPHBhZ2luYXRpb24gYm91bmRhcnktbGlua3M9XFxcInRydWVcXFwiIG1heC1zaXplPVxcXCI0XFxcIiB0b3RhbC1pdGVtcz1cXFwiKHB1YmxpY0xlYWd1ZXMgfGZpbHRlcjpzZWFyY2g6c3RyaWN0KS5sZW5ndGhcXFwiIGl0ZW1zLXBlci1wYWdlPVxcXCJsZWFndWVzUGVyUGFnZVxcXCIgbmctbW9kZWw9XFxcImN1cnJlbnRMZWFndWVQYWdlXFxcIiBjbGFzcz1cXFwicGFnaW5hdGlvbi1tZFxcXCIgcHJldmlvdXMtdGV4dD1cXFwiJmxzYXF1bztcXFwiIG5leHQtdGV4dD1cXFwiJnJzYXF1bztcXFwiIGZpcnN0LXRleHQ9XFxcIiZsYXF1bztcXFwiIGxhc3QtdGV4dD1cXFwiJnJhcXVvO1xcXCI+PC9wYWdpbmF0aW9uPlxcblwiICtcbiAgICBcIjwvZGl2PlxcblwiICtcbiAgICBcIjxkaXYgY2xhc3M9XFxcImFsZXJ0IGFsZXJ0LWluZm9cXFwiIG5nLXNob3c9XFxcIihwdWJsaWNMZWFndWVzIHwgZmlsdGVyOnNlYXJjaDpzdHJpY3QpLmxlbmd0aCA9PSAwXFxcIj5cXG5cIiArXG4gICAgXCIgIE5vIGxlYWd1ZXMgZm91bmRcXG5cIiArXG4gICAgXCI8L2Rpdj5cXG5cIiArXG4gICAgXCJcIik7XG59XSk7XG5cbmFuZ3VsYXIubW9kdWxlKFwibW9kdWxlcy9wcml2YXRlL2xlYWd1ZXMvbGVhZ3Vlcy50cGwuaHRtbFwiLCBbXSkucnVuKFtcIiR0ZW1wbGF0ZUNhY2hlXCIsIGZ1bmN0aW9uKCR0ZW1wbGF0ZUNhY2hlKSB7XG4gICR0ZW1wbGF0ZUNhY2hlLnB1dChcIm1vZHVsZXMvcHJpdmF0ZS9sZWFndWVzL2xlYWd1ZXMudHBsLmh0bWxcIixcbiAgICBcIjxkaXYgdWktdmlldz1cXFwibGVhZ3Vlc0NvbnRlbnRcXFwiPjwvZGl2PlxcblwiICtcbiAgICBcIlwiKTtcbn1dKTtcblxuYW5ndWxhci5tb2R1bGUoXCJtb2R1bGVzL3ByaXZhdGUvbGVhZ3Vlcy9tYW5hZ2UvbGVhZ3Vlcy5tYW5hZ2UudHBsLmh0bWxcIiwgW10pLnJ1bihbXCIkdGVtcGxhdGVDYWNoZVwiLCBmdW5jdGlvbigkdGVtcGxhdGVDYWNoZSkge1xuICAkdGVtcGxhdGVDYWNoZS5wdXQoXCJtb2R1bGVzL3ByaXZhdGUvbGVhZ3Vlcy9tYW5hZ2UvbGVhZ3Vlcy5tYW5hZ2UudHBsLmh0bWxcIixcbiAgICBcIjxkaXYgY2xhc3M9XFxcIm1hbmFnZS1sZWFndWVzLWhlYWRlci1yb3cgcm93XFxcIj5cXG5cIiArXG4gICAgXCIgIDxkaXYgY2xhc3M9XFxcImNvbC1zbS05IGNvbC1tZC05XFxcIj5cXG5cIiArXG4gICAgXCIgICAgPGgzPkkgbWFuYWdlIHRoZXNlIGxlYWd1ZXMuLi48L2gzPlxcblwiICtcbiAgICBcIiAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICA8ZGl2IGNsYXNzPVxcXCJjb2wtc20tMyBjb2wtbWQtM1xcXCI+XFxuXCIgK1xuICAgIFwiICAgIDxkaXYgY2xhc3M9XFxcIm1hbmFnZS1sZWFndWVzLWJ0bi1ncm91cFxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgPGJ1dHRvbiB0eXBlPVxcXCJidXR0b25cXFwiIGNsYXNzPVxcXCJjcmVhdGUtbGVhZ3VlLWJ0biBidG4gYnRuLXByaW1hcnlcXFwiIG5nLWNsaWNrPVxcXCJjcmVhdGVMZWFndWUoKVxcXCI+Q3JlYXRlIExlYWd1ZTwvYnV0dG9uPlxcblwiICtcbiAgICBcIiAgICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgIDwvZGl2PlxcblwiICtcbiAgICBcIjwvZGl2PlxcblwiICtcbiAgICBcIjxocj5cXG5cIiArXG4gICAgXCJcXG5cIiArXG4gICAgXCI8IS0taWYgeW91IGhhdmUgbWFuYWdlZCBsZWFndWVzIChpLmUuIGlmIHlvdSdyZSBhIGNvbW1pc2gpLS0+XFxuXCIgK1xuICAgIFwiPGRpdiBuZy1zaG93PVxcXCJtYW5hZ2VkTGVhZ3Vlcy5sZW5ndGggPiAwXFxcIiBjbGFzcz1cXFwibGVhZ3Vlcy1jb250YWluZXJcXFwiPlxcblwiICtcbiAgICBcIlxcblwiICtcbiAgICBcIiAgICA8ZGl2IGNsYXNzPVxcXCJtYW5hZ2VkLWxlYWd1ZXMgbGlzdC1ncm91cFxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgICA8YSBuZy1yZXBlYXQ9XFxcImxlYWd1ZSBpbiBtYW5hZ2VkTGVhZ3VlcyB8IG9mZnNldEZpbHRlcjooY3VycmVudExlYWd1ZVBhZ2UtMSkqbGVhZ3Vlc1BlclBhZ2UgfCBsaW1pdFRvOmxlYWd1ZXNQZXJQYWdlXFxcIiBuZy1jbGljaz1cXFwidmlld0xlYWd1ZShsZWFndWUpXFxcIiBjbGFzcz1cXFwibGlzdC1ncm91cC1pdGVtXFxcIj5cXG5cIiArXG4gICAgXCIgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJyb3dcXFwiPlxcblwiICtcbiAgICBcIiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJsZWFndWUtbmFtZSBjb2wtc20tNiBjb2wtbWQtNlxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XFxcImZhIGZhLXVubG9jayBmYS1md1xcXCIgdGl0bGU9XFxcIk15IFB1YmxpYyBsZWFndWVcXFwiIG5nLXNob3c9XFxcImxlYWd1ZS5wdWJsaWNcXFwiPjwvaT5cXG5cIiArXG4gICAgXCIgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cXFwiZmEgZmEtbG9jayBmYS1md1xcXCIgdGl0bGU9XFxcIk15IFByaXZhdGUgbGVhZ3VlXFxcIiBuZy1zaG93PVxcXCIhbGVhZ3VlLnB1YmxpY1xcXCI+PC9pPiB7e2xlYWd1ZS5uYW1lfX08L2Rpdj5cXG5cIiArXG4gICAgXCIgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXNtLTYgY29sLW1kLTZcXFwiPlxcblwiICtcbiAgICBcIiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcInN0YXJ0LXdlZWtcXFwiPnt7c3RhcnRzKGxlYWd1ZSl9fTwvc3Bhbj5cXG5cIiArXG4gICAgXCIgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJiYWRnZVxcXCI+e3tsZWFndWUudGVhbV9jb3VudH19IHRlYW1zPC9zcGFuPlxcblwiICtcbiAgICBcIiAgICAgICAgICAgICAgICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgICAgICAgICAgICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgICAgICAgIDwvYT5cXG5cIiArXG4gICAgXCIgICAgPC9kaXY+XFxuXCIgK1xuICAgIFwiXFxuXCIgK1xuICAgIFwiICAgIDwhLS1keW5hbWljIHBhZ2luYXRpb24tLT5cXG5cIiArXG4gICAgXCIgICAgPGRpdiBjbGFzcz1cXFwibWFuYWdlLWxlYWd1ZS1wYWdpbmF0aW9uXFxcIiBuZy1zaG93PVxcXCJtYW5hZ2VkTGVhZ3Vlcy5sZW5ndGggPiBsZWFndWVzUGVyUGFnZVxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgICA8cGFnaW5hdGlvbiBib3VuZGFyeS1saW5rcz1cXFwidHJ1ZVxcXCIgbWF4LXNpemU9XFxcIjRcXFwiIHRvdGFsLWl0ZW1zPVxcXCJtYW5hZ2VkTGVhZ3Vlcy5sZW5ndGhcXFwiIGl0ZW1zLXBlci1wYWdlPVxcXCJsZWFndWVzUGVyUGFnZVxcXCIgbmctbW9kZWw9XFxcImN1cnJlbnRMZWFndWVQYWdlXFxcIiBjbGFzcz1cXFwicGFnaW5hdGlvbi1tZFxcXCIgcHJldmlvdXMtdGV4dD1cXFwiJmxzYXF1bztcXFwiIG5leHQtdGV4dD1cXFwiJnJzYXF1bztcXFwiIGZpcnN0LXRleHQ9XFxcIiZsYXF1bztcXFwiIGxhc3QtdGV4dD1cXFwiJnJhcXVvO1xcXCI+PC9wYWdpbmF0aW9uPlxcblwiICtcbiAgICBcIiAgICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgICAgPGRpdiBzdHlsZT1cXFwiY2xlYXI6IGJvdGg7XFxcIj48L2Rpdj5cXG5cIiArXG4gICAgXCI8L2Rpdj5cXG5cIiArXG4gICAgXCJcXG5cIiArXG4gICAgXCI8IS0taWYgeW91IGhhdmUgbm8gbWFuYWdlZCBsZWFndWVzLS0+XFxuXCIgK1xuICAgIFwiPGRpdiBjbGFzcz1cXFwiYWxlcnQgYWxlcnQtaW5mb1xcXCIgbmctc2hvdz1cXFwibWFuYWdlZExlYWd1ZXMubGVuZ3RoID09IDBcXFwiPlxcblwiICtcbiAgICBcIiAgWW91IGFyZSBub3QgdGhlIGNvbW1pc2ggb2YgYW55IGxlYWd1ZXMuIDxhIGNsYXNzPVxcXCJhbGVydC1saW5rXFxcIiBuZy1jbGljaz1cXFwiY3JlYXRlTGVhZ3VlKHNlYXNvbilcXFwiPkNyZWF0ZSBvbmU8L2E+IGFuZCBpbnZpdGUgYWxsIHlvdXIgZnJpZW5kcy5cXG5cIiArXG4gICAgXCI8L2Rpdj5cXG5cIiArXG4gICAgXCJcIik7XG59XSk7XG5cbmFuZ3VsYXIubW9kdWxlKFwibW9kdWxlcy9wcml2YXRlL2xlYWd1ZXMvbXkvbGVhZ3Vlcy5teS50cGwuaHRtbFwiLCBbXSkucnVuKFtcIiR0ZW1wbGF0ZUNhY2hlXCIsIGZ1bmN0aW9uKCR0ZW1wbGF0ZUNhY2hlKSB7XG4gICR0ZW1wbGF0ZUNhY2hlLnB1dChcIm1vZHVsZXMvcHJpdmF0ZS9sZWFndWVzL215L2xlYWd1ZXMubXkudHBsLmh0bWxcIixcbiAgICBcIjxkaXYgY2xhc3M9XFxcIm15LWxlYWd1ZXMtaGVhZGVyLXJvdyByb3dcXFwiPlxcblwiICtcbiAgICBcIiAgPGRpdiBjbGFzcz1cXFwiY29sLXNtLTkgY29sLW1kLTlcXFwiPlxcblwiICtcbiAgICBcIiAgICA8aDM+SSBhbSBpbiB0aGVzZSBsZWFndWVzLi4uPC9oMz5cXG5cIiArXG4gICAgXCIgIDwvZGl2PlxcblwiICtcbiAgICBcIiAgPGRpdiBjbGFzcz1cXFwiY29sLXNtLTMgY29sLW1kLTNcXFwiPlxcblwiICtcbiAgICBcIiAgICA8ZGl2IGNsYXNzPVxcXCJteS1sZWFndWVzLWJ0bi1ncm91cFxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgPGJ1dHRvbiB0eXBlPVxcXCJidXR0b25cXFwiIGNsYXNzPVxcXCJqb2luLWxlYWd1ZS1idG4gYnRuIGJ0bi1wcmltYXJ5XFxcIiBuZy1jbGljaz1cXFwiam9pbkxlYWd1ZSgpXFxcIj5Kb2luIExlYWd1ZTwvYnV0dG9uPlxcblwiICtcbiAgICBcIiAgICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgIDwvZGl2PlxcblwiICtcbiAgICBcIjwvZGl2PlxcblwiICtcbiAgICBcIjxocj5cXG5cIiArXG4gICAgXCJcXG5cIiArXG4gICAgXCI8ZGl2IG5nLXNob3c9XFxcImxlYWd1ZXMubGVuZ3RoID4gMFxcXCIgY2xhc3M9XFxcImxlYWd1ZXMtY29udGFpbmVyXFxcIj5cXG5cIiArXG4gICAgXCJcXG5cIiArXG4gICAgXCIgIDxkaXYgY2xhc3M9XFxcIm15LWxlYWd1ZXMgbGlzdC1ncm91cFxcXCI+XFxuXCIgK1xuICAgIFwiICAgIDxhIG5nLXJlcGVhdD1cXFwibGVhZ3VlIGluIGxlYWd1ZXMgfCBvZmZzZXRGaWx0ZXI6KGN1cnJlbnRMZWFndWVQYWdlLTEpKmxlYWd1ZXNQZXJQYWdlIHwgbGltaXRUbzpsZWFndWVzUGVyUGFnZVxcXCIgbmctY2xpY2s9XFxcInZpZXdMZWFndWUobGVhZ3VlKVxcXCIgY2xhc3M9XFxcImxpc3QtZ3JvdXAtaXRlbVxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgPGRpdiBjbGFzcz1cXFwicm93XFxcIj5cXG5cIiArXG4gICAgXCIgICAgICAgIDxkaXYgY2xhc3M9XFxcImxlYWd1ZS1uYW1lIGNvbC1zbS02IGNvbC1tZC02XFxcIj5cXG5cIiArXG4gICAgXCIgICAgICAgICAgPGkgY2xhc3M9XFxcImZhIGZhLXVubG9jayBmYS1md1xcXCIgdGl0bGU9XFxcIk15IFB1YmxpYyBsZWFndWVcXFwiIG5nLXNob3c9XFxcImxlYWd1ZS5wdWJsaWNcXFwiPjwvaT5cXG5cIiArXG4gICAgXCIgICAgICAgICAgPGkgY2xhc3M9XFxcImZhIGZhLWxvY2sgZmEtZndcXFwiIHRpdGxlPVxcXCJNeSBQcml2YXRlIGxlYWd1ZVxcXCIgbmctc2hvdz1cXFwiIWxlYWd1ZS5wdWJsaWNcXFwiPjwvaT4ge3tsZWFndWUubmFtZX19PC9kaXY+XFxuXCIgK1xuICAgIFwiICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtc20tNiBjb2wtbWQtNlxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJzdGFydC13ZWVrXFxcIj57e3N0YXJ0cyhsZWFndWUpfX08L3NwYW4+XFxuXCIgK1xuICAgIFwiICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJiYWRnZVxcXCI+e3tsZWFndWUudGVhbV9jb3VudH19IHRlYW1zPC9zcGFuPlxcblwiICtcbiAgICBcIiAgICAgICAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICAgICAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICAgIDwvYT5cXG5cIiArXG4gICAgXCIgIDwvZGl2PlxcblwiICtcbiAgICBcIlxcblwiICtcbiAgICBcIiAgPGRpdiBjbGFzcz1cXFwibXktbGVhZ3VlLXBhZ2luYXRpb25cXFwiIG5nLXNob3c9XFxcImxlYWd1ZXMubGVuZ3RoID4gbGVhZ3Vlc1BlclBhZ2VcXFwiPlxcblwiICtcbiAgICBcIiAgICA8cGFnaW5hdGlvbiBib3VuZGFyeS1saW5rcz1cXFwidHJ1ZVxcXCIgbWF4LXNpemU9XFxcIjRcXFwiIHRvdGFsLWl0ZW1zPVxcXCJsZWFndWVzLmxlbmd0aFxcXCIgaXRlbXMtcGVyLXBhZ2U9XFxcImxlYWd1ZXNQZXJQYWdlXFxcIiBuZy1tb2RlbD1cXFwiY3VycmVudExlYWd1ZVBhZ2VcXFwiIGNsYXNzPVxcXCJwYWdpbmF0aW9uLW1kXFxcIiBwcmV2aW91cy10ZXh0PVxcXCImbHNhcXVvO1xcXCIgbmV4dC10ZXh0PVxcXCImcnNhcXVvO1xcXCIgZmlyc3QtdGV4dD1cXFwiJmxhcXVvO1xcXCIgbGFzdC10ZXh0PVxcXCImcmFxdW87XFxcIj48L3BhZ2luYXRpb24+XFxuXCIgK1xuICAgIFwiICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgIDxkaXYgc3R5bGU9XFxcImNsZWFyOiBib3RoO1xcXCI+PC9kaXY+XFxuXCIgK1xuICAgIFwiPC9kaXY+XFxuXCIgK1xuICAgIFwiXFxuXCIgK1xuICAgIFwiPCEtLWlmIHlvdSBoYXZlIG5vIGxlYWd1ZXMtLT5cXG5cIiArXG4gICAgXCI8ZGl2IGNsYXNzPVxcXCJhbGVydCBhbGVydC1pbmZvXFxcIiBuZy1zaG93PVxcXCJsZWFndWVzLmxlbmd0aCA9PSAwXFxcIj5cXG5cIiArXG4gICAgXCIgIFlvdSBhcmUgaW4gbm8gbGVhZ3Vlcy4gPGEgY2xhc3M9XFxcImFsZXJ0LWxpbmtcXFwiIG5nLWNsaWNrPVxcXCJqb2luTGVhZ3VlKHNlYXNvbilcXFwiPkpvaW48L2E+IG9uZSB0b2RheS5cXG5cIiArXG4gICAgXCI8L2Rpdj5cXG5cIiArXG4gICAgXCJcIik7XG59XSk7XG5cbmFuZ3VsYXIubW9kdWxlKFwibW9kdWxlcy9wcml2YXRlL3BsYXkvbGVhZ3Vlcy9wbGF5LmxlYWd1ZXMudHBsLmh0bWxcIiwgW10pLnJ1bihbXCIkdGVtcGxhdGVDYWNoZVwiLCBmdW5jdGlvbigkdGVtcGxhdGVDYWNoZSkge1xuICAkdGVtcGxhdGVDYWNoZS5wdXQoXCJtb2R1bGVzL3ByaXZhdGUvcGxheS9sZWFndWVzL3BsYXkubGVhZ3Vlcy50cGwuaHRtbFwiLFxuICAgIFwiPGRpdiBuZy1zaG93PVxcXCJsZWFndWVzLmxlbmd0aCA+IDBcXFwiIGNsYXNzPVxcXCJsZWFndWVzLWNvbnRhaW5lclxcXCI+XFxuXCIgK1xuICAgIFwiICA8ZGl2IGNsYXNzPVxcXCJteS1sZWFndWVzIGxpc3QtZ3JvdXBcXFwiPlxcblwiICtcbiAgICBcIiAgICA8YSBuZy1yZXBlYXQ9XFxcImxlYWd1ZSBpbiBsZWFndWVzIHwgbWFuYWdlZExlYWd1ZUZpbHRlcjpsZWFndWVPcHRpb25zIHwgZmlsdGVyOnNlYXJjaDpzdHJpY3QgfCBvZmZzZXRGaWx0ZXI6KGN1cnJlbnRMZWFndWVQYWdlLTEpKmxlYWd1ZXNQZXJQYWdlIHwgbGltaXRUbzpsZWFndWVzUGVyUGFnZVxcXCIgbmctY2xpY2s9XFxcInZpZXdMZWFndWUobGVhZ3VlKVxcXCIgY2xhc3M9XFxcImxpc3QtZ3JvdXAtaXRlbVxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgPGRpdiBjbGFzcz1cXFwicm93XFxcIj5cXG5cIiArXG4gICAgXCIgICAgICAgIDxkaXYgY2xhc3M9XFxcImxlYWd1ZS1uYW1lIGNvbC1zbS01IGNvbC1tZC01XFxcIj5cXG5cIiArXG4gICAgXCIgICAgICAgICAgPGkgY2xhc3M9XFxcImZhIGZhLWNvbW1lbnQgZmEtZndcXFwiIG5nLXNob3c9XFxcIiFpc0NvbW1pc2gobGVhZ3VlKSAmJiBsZWFndWUubWVzc2FnZS5sZW5ndGggPiAwXFxcIiB0aXRsZT1cXFwiSGFzIG1lc3NhZ2UgZnJvbSBjb21taXNoXFxcIj48L2k+XFxuXCIgK1xuICAgIFwiICAgICAgICAgIDxpIGNsYXNzPVxcXCJmYSBmYS11c2VyIGZhLWZ3XFxcIiB0aXRsZT1cXFwiTXkgbGVhZ3VlXFxcIiBuZy1zaG93PVxcXCJpc0NvbW1pc2gobGVhZ3VlKVxcXCI+PC9pPiB7e2xlYWd1ZS5uYW1lfX08YnI+PHNwYW4gY2xhc3M9XFxcIm15LWxlYWd1ZS1tZXRhXFxcIj57e3N0YXJ0cyhsZWFndWUpfX08L3NwYW4+XFxuXCIgK1xuICAgIFwiICAgICAgICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1zbS03IGNvbC1tZC03XFxcIj5cXG5cIiArXG4gICAgXCIgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcIm15LWxlYWd1ZS1tZXRhXFxcIj57e2xlYWd1ZS5mb3JtYXR9fTxicj5Db21taXNoOiB7e2xlYWd1ZS5jb21taXNoX25hbWVzLmpvaW4oJywgJyl9fTwvc3Bhbj5cXG5cIiArXG4gICAgXCIgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcImJhZGdlXFxcIj48c3BhbiBuZy1zaG93PVxcXCJsZWFndWUuZWxpbWluYXRpb25cXFwiPnt7bGVhZ3VlLmFsaXZlX3RlYW1fY291bnR9fS88L3NwYW4+e3tsZWFndWUudGVhbV9jb3VudH19IHRlYW08c3BhbiBuZy1zaG93PVxcXCJsZWFndWUudGVhbV9jb3VudCAhPT0gMVxcXCI+czwvc3Bhbj48L3NwYW4+XFxuXCIgK1xuICAgIFwiICAgICAgICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgICAgICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgICAgPC9hPlxcblwiICtcbiAgICBcIiAgPC9kaXY+XFxuXCIgK1xuICAgIFwiXFxuXCIgK1xuICAgIFwiICA8ZGl2IGNsYXNzPVxcXCJteS1sZWFndWUtcGFnaW5hdGlvblxcXCIgbmctc2hvdz1cXFwibGVhZ3Vlcy5sZW5ndGggPiBsZWFndWVzUGVyUGFnZVxcXCI+XFxuXCIgK1xuICAgIFwiICAgIDxwYWdpbmF0aW9uIGJvdW5kYXJ5LWxpbmtzPVxcXCJ0cnVlXFxcIiBtYXgtc2l6ZT1cXFwiNFxcXCIgdG90YWwtaXRlbXM9XFxcImxlYWd1ZXMubGVuZ3RoXFxcIiBpdGVtcy1wZXItcGFnZT1cXFwibGVhZ3Vlc1BlclBhZ2VcXFwiIG5nLW1vZGVsPVxcXCJjdXJyZW50TGVhZ3VlUGFnZVxcXCIgY2xhc3M9XFxcInBhZ2luYXRpb24tbWRcXFwiIHByZXZpb3VzLXRleHQ9XFxcIiZsc2FxdW87XFxcIiBuZXh0LXRleHQ9XFxcIiZyc2FxdW87XFxcIiBmaXJzdC10ZXh0PVxcXCImbGFxdW87XFxcIiBsYXN0LXRleHQ9XFxcIiZyYXF1bztcXFwiPjwvcGFnaW5hdGlvbj5cXG5cIiArXG4gICAgXCIgIDwvZGl2PlxcblwiICtcbiAgICBcIiAgPGRpdiBzdHlsZT1cXFwiY2xlYXI6IGJvdGg7XFxcIj48L2Rpdj5cXG5cIiArXG4gICAgXCI8L2Rpdj5cXG5cIiArXG4gICAgXCJcXG5cIiArXG4gICAgXCI8IS0taWYgeW91IGhhdmUgbm8gbGVhZ3Vlcy0tPlxcblwiICtcbiAgICBcIjxkaXYgY2xhc3M9XFxcImxlYWd1ZXMtYWxlcnQgYWxlcnQgYWxlcnQtaW5mb1xcXCIgbmctc2hvdz1cXFwiKGxlYWd1ZXMgfCBtYW5hZ2VkTGVhZ3VlRmlsdGVyOmxlYWd1ZU9wdGlvbnMgfCBmaWx0ZXI6c2VhcmNoOnN0cmljdCkubGVuZ3RoID09IDBcXFwiPlxcblwiICtcbiAgICBcIiAgTm8gbGVhZ3VlcyBmb3VuZFxcblwiICtcbiAgICBcIjwvZGl2PlxcblwiICtcbiAgICBcIlxcblwiICtcbiAgICBcIlwiKTtcbn1dKTtcblxuYW5ndWxhci5tb2R1bGUoXCJtb2R1bGVzL3ByaXZhdGUvcGxheS9wbGF5LnRwbC5odG1sXCIsIFtdKS5ydW4oW1wiJHRlbXBsYXRlQ2FjaGVcIiwgZnVuY3Rpb24oJHRlbXBsYXRlQ2FjaGUpIHtcbiAgJHRlbXBsYXRlQ2FjaGUucHV0KFwibW9kdWxlcy9wcml2YXRlL3BsYXkvcGxheS50cGwuaHRtbFwiLFxuICAgIFwiPGRpdiBjbGFzcz1cXFwicGxheS1oZWFkZXItcm93IHJvd1xcXCI+XFxuXCIgK1xuICAgIFwiICA8ZGl2IGNsYXNzPVxcXCJjb2wtc20tNyBjb2wtbWQtN1xcXCI+XFxuXCIgK1xuICAgIFwiICAgIDxoMyBjbGFzcz1cXFwibXktdGVhbXMtaGVhZGVyXFxcIj5NeSBUZWFtcyAmIExlYWd1ZXM8L2gzPlxcblwiICtcbiAgICBcIiAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICA8ZGl2IGNsYXNzPVxcXCJjb2wtc20tNSBjb2wtbWQtNVxcXCI+XFxuXCIgK1xuICAgIFwiICAgIDxkaXYgY2xhc3M9XFxcInBsYXktYnRuLWdyb3VwXFxcIj5cXG5cIiArXG4gICAgXCIgICAgICA8YnV0dG9uIHR5cGU9XFxcImJ1dHRvblxcXCIgY2xhc3M9XFxcImpvaW4tbGVhZ3VlLWJ0biBidG4gYnRuLXByaW1hcnlcXFwiIG5nLWNsaWNrPVxcXCJqb2luTGVhZ3VlKClcXFwiPkpvaW4gTGVhZ3VlPC9idXR0b24+XFxuXCIgK1xuICAgIFwiICAgICAgPGJ1dHRvbiB0eXBlPVxcXCJidXR0b25cXFwiIGNsYXNzPVxcXCJjcmVhdGUtbGVhZ3VlLWJ0biBidG4gYnRuLXByaW1hcnlcXFwiIG5nLWNsaWNrPVxcXCJjcmVhdGVMZWFndWUoKVxcXCI+Q3JlYXRlIExlYWd1ZTwvYnV0dG9uPlxcblwiICtcbiAgICBcIiAgICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgIDwvZGl2PlxcblwiICtcbiAgICBcIjwvZGl2PlxcblwiICtcbiAgICBcIjxocj5cXG5cIiArXG4gICAgXCI8ZGl2IGNsYXNzPVxcXCJ0ZWFtcy1sZWFndWVzLXRhYnNcXFwiPlxcblwiICtcbiAgICBcIiAgPHVsIGNsYXNzPVxcXCJuYXYgbmF2LXRhYnNcXFwiPlxcblwiICtcbiAgICBcIiAgICA8bGkgbmctY2xhc3M9XFxcInsnYWN0aXZlJzogaXNTdGF0ZShbJ3ByaXZhdGUucGxheS50ZWFtcyddKX1cXFwiIG5nLWNsaWNrPVxcXCJyZXNldFNlYXJjaCgpXFxcIj5cXG5cIiArXG4gICAgXCIgICAgICA8YSBuZy1jbGljaz1cXFwibXlUZWFtcyhzZWxlY3RlZFNlYXNvbklkKVxcXCI+PHNwYW4gY2xhc3M9XFxcIm15LXRlYW1zXFxcIj5NeSBUZWFtczwvc3Bhbj48L2E+XFxuXCIgK1xuICAgIFwiICAgIDwvbGk+XFxuXCIgK1xuICAgIFwiICAgIDxsaSBuZy1jbGFzcz1cXFwieydhY3RpdmUnOiBpc1N0YXRlKFsncHJpdmF0ZS5wbGF5LmxlYWd1ZXMnXSl9XFxcIiBuZy1jbGljaz1cXFwicmVzZXRTZWFyY2goKVxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgPGEgbmctY2xpY2s9XFxcIm15TGVhZ3VlcyhzZWxlY3RlZFNlYXNvbklkKVxcXCI+PHNwYW4gY2xhc3M9XFxcIm15LWxlYWd1ZXNcXFwiPk15IExlYWd1ZXM8L3NwYW4+PC9hPlxcblwiICtcbiAgICBcIiAgICA8L2xpPlxcblwiICtcbiAgICBcIiAgPC91bD5cXG5cIiArXG4gICAgXCIgIDxkaXYgY2xhc3M9XFxcInNlYXNvbnNcXFwiPlxcblwiICtcbiAgICBcIiAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIGRyb3Bkb3duLXNlbGVjdD1cXFwic3RhcnRlZFNlYXNvbnNcXFwiIGRyb3Bkb3duLW1vZGVsPVxcXCJzZWxlY3RlZFNlYXNvblxcXCIgZHJvcGRvd24taXRlbS1sYWJlbD1cXFwibmFtZVxcXCIgZHJvcGRvd24tb25jaGFuZ2U9XFxcImNoYW5nZVNlYXNvbihzZWxlY3RlZClcXFwiPjwvZGl2PlxcblwiICtcbiAgICBcIiAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICA8ZGl2IGNsYXNzPVxcXCJpbnB1dC1ncm91cCBjdXN0b20tc2VhcmNoLWZvcm0gZmlsdGVyLXRlYW0tbGVhZ3VlXFxcIj5cXG5cIiArXG4gICAgXCIgICAgPGlucHV0IHR5cGU9XFxcInRleHRcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIHBsYWNlaG9sZGVyPVxcXCJTZWFyY2guLi5cXFwiIG5nLW1vZGVsPVxcXCJxdWVyeVxcXCI+XFxuXCIgK1xuICAgIFwiICAgIDxzcGFuIGNsYXNzPVxcXCJpbnB1dC1ncm91cC1idG5cXFwiPlxcblwiICtcbiAgICBcIiAgICAgIDxidXR0b24gY2xhc3M9XFxcImJ0biBidG4tZGVmYXVsdFxcXCIgdHlwZT1cXFwiYnV0dG9uXFxcIj48c3BhbiBjbGFzcz1cXFwiZ2x5cGhpY29uIGdseXBoaWNvbi1zZWFyY2hcXFwiPjwvc3Bhbj48L2J1dHRvbj5cXG5cIiArXG4gICAgXCIgICAgPC9zcGFuPlxcblwiICtcbiAgICBcIiAgPC9kaXY+XFxuXCIgK1xuICAgIFwiPC9kaXY+XFxuXCIgK1xuICAgIFwiPGRpdiBjbGFzcz1cXFwicGxheS1jb250ZW50XFxcIiB1aS12aWV3PVxcXCJwbGF5Q29udGVudFxcXCI+PC9kaXY+XFxuXCIgK1xuICAgIFwiXFxuXCIgK1xuICAgIFwiXCIpO1xufV0pO1xuXG5hbmd1bGFyLm1vZHVsZShcIm1vZHVsZXMvcHJpdmF0ZS9wbGF5L3RlYW1zL3BsYXkudGVhbXMudHBsLmh0bWxcIiwgW10pLnJ1bihbXCIkdGVtcGxhdGVDYWNoZVwiLCBmdW5jdGlvbigkdGVtcGxhdGVDYWNoZSkge1xuICAkdGVtcGxhdGVDYWNoZS5wdXQoXCJtb2R1bGVzL3ByaXZhdGUvcGxheS90ZWFtcy9wbGF5LnRlYW1zLnRwbC5odG1sXCIsXG4gICAgXCI8ZGl2IG5nLXNob3c9XFxcInRlYW1zLmxlbmd0aCA+IDBcXFwiIGNsYXNzPVxcXCJsZWFndWVzLWNvbnRhaW5lclxcXCI+XFxuXCIgK1xuICAgIFwiICA8ZGl2IGNsYXNzPVxcXCJteS10ZWFtcyBsaXN0LWdyb3VwXFxcIj5cXG5cIiArXG4gICAgXCIgICAgPGEgY2xhc3M9XFxcImxpc3QtZ3JvdXAtaXRlbVxcXCIgbmctY2xhc3M9XFxcInsnaW5hY3RpdmUnOiAhdGVhbS5hY3RpdmUgfHwgIXRlYW0uYWxpdmV9XFxcIiBuZy1yZXBlYXQ9XFxcInRlYW0gaW4gdGVhbXMgfCBvcmRlckJ5OltpblBsYXksICduYW1lJ10gfCBmaWx0ZXI6c2VhcmNoOnN0cmljdCB8IG9mZnNldEZpbHRlcjooY3VycmVudFRlYW1QYWdlLTEpKnRlYW1zUGVyUGFnZSB8IGxpbWl0VG86dGVhbXNQZXJQYWdlXFxcIiBuZy1jbGljaz1cXFwic2hvd1RlYW0odGVhbSlcXFwiPlxcblwiICtcbiAgICBcIiAgICAgIDxkaXYgY2xhc3M9XFxcInJvd1xcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgICA8ZGl2IGNsYXNzPVxcXCJsZWFndWUtbmFtZSBjb2wtc20tNSBjb2wtbWQtNVxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgICAgIDxpIGNsYXNzPVxcXCJmYSBmYS1jb21tZW50IGZhLWZ3XFxcIiBuZy1zaG93PVxcXCJ0ZWFtLm1lc3NhZ2UubGVuZ3RoID4gMFxcXCIgdGl0bGU9XFxcIkhhcyBtZXNzYWdlIGZyb20gY29tbWlzaFxcXCI+PC9pPlxcblwiICtcbiAgICBcIiAgICAgICAgICA8c3BhbiBuZy1jbGFzcz1cXFwieydkZWFkLXRlYW0tbmFtZSc6ICF0ZWFtLmFjdGl2ZSB8fCAhdGVhbS5hbGl2ZX1cXFwiPnt7dGVhbS5uYW1lfX08L3NwYW4+PGJyPjxzcGFuIGNsYXNzPVxcXCJ0ZWFtLWxlYWd1ZVxcXCI+e3t0ZWFtLmxlYWd1ZS5uYW1lfX08L3NwYW4+PC9kaXY+XFxuXCIgK1xuICAgIFwiICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtc20tNyBjb2wtbWQtN1xcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJjdXJyZW50LXBpY2tcXFwiIG5nLWNsYXNzPVxcXCJ7J25vLXBpY2snOiB0ZWFtLmN1cnJlbnRfcGljay53YXJuaW5nID09IHRydWV9XFxcIiBuZy1zaG93PVxcXCJ0ZWFtLmFjdGl2ZSAmJiB0ZWFtLnN0YXJ0ZWRcXFwiPlxcblwiICtcbiAgICBcIiAgICAgICAgICAgIDxpIGNsYXNzPVxcXCJmYSBmYS17e3BpY2tTdGF0dXModGVhbS5jdXJyZW50X3BpY2spfX0gZmEtZndcXFwiPjwvaT5cXG5cIiArXG4gICAgXCIgICAgICAgICAgICBbIDxzcGFuIGNsYXNzPVxcXCJjdXJyZW50LWxvc2VyLW5hbWVcXFwiPnt7dGVhbS5jdXJyZW50X3BpY2submFtZX19PC9zcGFuPjxzcGFuIGNsYXNzPVxcXCJjdXJyZW50LWxvc2VyLWFiYnJldlxcXCI+e3t0ZWFtLmN1cnJlbnRfcGljay5hYmJyZXZ9fTwvc3Bhbj4gXVxcblwiICtcbiAgICBcIiAgICAgICAgICAgIDxicj5cXG5cIiArXG4gICAgXCIgICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwiY3VycmVudC1waWNrXFxcIj57e3RlYW0ubGVhZ3VlLmZvcm1hdH19PC9zcGFuPlxcblwiICtcbiAgICBcIiAgICAgICAgICA8L3NwYW4+XFxuXCIgK1xuICAgIFwiICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJjdXJyZW50LXBpY2tcXFwiIG5nLXNob3c9XFxcInRlYW0uYWN0aXZlICYmICF0ZWFtLnN0YXJ0ZWRcXFwiPlN0YXJ0cyB7e3RlYW0uc3RhcnRfd2Vla319PGJyPnt7dGVhbS5sZWFndWUuZm9ybWF0fX08L3NwYW4+XFxuXCIgK1xuICAgIFwiICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJpbmFjdGl2ZS10ZWFtIGN1cnJlbnQtcGlja1xcXCIgbmctc2hvdz1cXFwiIXRlYW0uYWN0aXZlXFxcIj5UZWFtIGhhcyBiZWVuIGRlYWN0aXZhdGVkPC9zcGFuPlxcblwiICtcbiAgICBcIiAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwiYmFkZ2VcXFwiPnt7dGVhbS5jb3JyZWN0X3BpY2tzX2NvdW50fX0gbG9zZXI8c3BhbiBuZy1zaG93PVxcXCJ0ZWFtLmNvcnJlY3RfcGlja3NfY291bnQgIT09IDFcXFwiPnM8L3NwYW4+PC9zcGFuPlxcblwiICtcbiAgICBcIiAgICAgICAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICAgICAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICAgIDwvYT5cXG5cIiArXG4gICAgXCIgIDwvZGl2PlxcblwiICtcbiAgICBcIlxcblwiICtcbiAgICBcIiAgPGRpdiBjbGFzcz1cXFwibXktbGVhZ3VlLXBhZ2luYXRpb25cXFwiIG5nLXNob3c9XFxcInRlYW1zLmxlbmd0aCA+IHRlYW1zUGVyUGFnZSAmJiAodGVhbXMgfCBmaWx0ZXI6c2VhcmNoOnN0cmljdCkubGVuZ3RoID4gMFxcXCI+XFxuXCIgK1xuICAgIFwiICAgIDxwYWdpbmF0aW9uIGJvdW5kYXJ5LWxpbmtzPVxcXCJ0cnVlXFxcIiBtYXgtc2l6ZT1cXFwiNFxcXCIgdG90YWwtaXRlbXM9XFxcIih0ZWFtcyB8IGZpbHRlcjpzZWFyY2g6c3RyaWN0KS5sZW5ndGhcXFwiIGl0ZW1zLXBlci1wYWdlPVxcXCJ0ZWFtc1BlclBhZ2VcXFwiIG5nLW1vZGVsPVxcXCJjdXJyZW50VGVhbVBhZ2VcXFwiIGNsYXNzPVxcXCJwYWdpbmF0aW9uLW1kXFxcIiBwcmV2aW91cy10ZXh0PVxcXCImbHNhcXVvO1xcXCIgbmV4dC10ZXh0PVxcXCImcnNhcXVvO1xcXCIgZmlyc3QtdGV4dD1cXFwiJmxhcXVvO1xcXCIgbGFzdC10ZXh0PVxcXCImcmFxdW87XFxcIj48L3BhZ2luYXRpb24+XFxuXCIgK1xuICAgIFwiICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgIDxkaXYgc3R5bGU9XFxcImNsZWFyOiBib3RoO1xcXCI+PC9kaXY+XFxuXCIgK1xuICAgIFwiPC9kaXY+XFxuXCIgK1xuICAgIFwiXFxuXCIgK1xuICAgIFwiPGRpdiBjbGFzcz1cXFwidGVhbXMtYWxlcnQgYWxlcnQgYWxlcnQtaW5mb1xcXCIgbmctc2hvdz1cXFwiKHRlYW1zIHwgZmlsdGVyOnNlYXJjaDpzdHJpY3QpLmxlbmd0aCA9PSAwXFxcIj5cXG5cIiArXG4gICAgXCIgIE5vIHRlYW1zIGZvdW5kXFxuXCIgK1xuICAgIFwiPC9kaXY+XFxuXCIgK1xuICAgIFwiXCIpO1xufV0pO1xuXG5hbmd1bGFyLm1vZHVsZShcIm1vZHVsZXMvcHJpdmF0ZS90ZWFtL2VkaXQvdGVhbS5lZGl0LnRwbC5odG1sXCIsIFtdKS5ydW4oW1wiJHRlbXBsYXRlQ2FjaGVcIiwgZnVuY3Rpb24oJHRlbXBsYXRlQ2FjaGUpIHtcbiAgJHRlbXBsYXRlQ2FjaGUucHV0KFwibW9kdWxlcy9wcml2YXRlL3RlYW0vZWRpdC90ZWFtLmVkaXQudHBsLmh0bWxcIixcbiAgICBcIjxkaXYgY2xhc3M9XFxcIm1vZGFsLWhlYWRlclxcXCI+XFxuXCIgK1xuICAgIFwiICA8YnV0dG9uIHR5cGU9XFxcImJ1dHRvblxcXCIgY2xhc3M9XFxcImNsb3NlXFxcIiBuZy1jbGljaz1cXFwiY2FuY2VsKClcXFwiPjxzcGFuIGFyaWEtaGlkZGVuPVxcXCJ0cnVlXFxcIj4mdGltZXM7PC9zcGFuPjxzcGFuIGNsYXNzPVxcXCJzci1vbmx5XFxcIj5DbG9zZTwvc3Bhbj48L2J1dHRvbj5cXG5cIiArXG4gICAgXCIgIDxoMyBjbGFzcz1cXFwibW9kYWwtdGl0bGVcXFwiPkVkaXQgVGVhbTwvaDM+XFxuXCIgK1xuICAgIFwiPC9kaXY+XFxuXCIgK1xuICAgIFwiPGRpdiBjbGFzcz1cXFwibW9kYWwtYm9keVxcXCI+XFxuXCIgK1xuICAgIFwiICA8Zm9ybSBuYW1lPVxcXCJlZGl0VGVhbUZvcm1cXFwiIGNsYXNzPVxcXCJlZGl0LXRlYW0tZm9ybSBmb3JtLWhvcml6b250YWxcXFwiIHJvbGU9XFxcImZvcm1cXFwiIG5vdmFsaWRhdGU+XFxuXCIgK1xuICAgIFwiICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiIG5nLWNsYXNzPVxcXCJ7J2hhcy1lcnJvcic6IGhhc0Vycm9yKGVkaXRUZWFtRm9ybS50ZWFtTmFtZSksICdoYXMtZmVlZGJhY2snOiBoYXNFcnJvcihlZGl0VGVhbUZvcm0udGVhbU5hbWUpfVxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgPGxhYmVsIGZvcj1cXFwidGVhbU5hbWVcXFwiIGNsYXNzPVxcXCJjb2wtc20tMyBjb250cm9sLWxhYmVsXFxcIj5UZWFtIE5hbWU6PC9sYWJlbD5cXG5cIiArXG4gICAgXCIgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtc20tOVxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgICA8aW5wdXQgaWQ9XFxcInRlYW1OYW1lXFxcIiBuYW1lPVxcXCJ0ZWFtTmFtZVxcXCIgdHlwZT1cXFwidGV4dFxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgcGxhY2Vob2xkZXI9XFxcIkVudGVyIGEgdGVhbSBuYW1lXFxcIiBuZy1tb2RlbD1cXFwidGVhbURhdGEubmFtZVxcXCIgbmctbWF4bGVuZ3RoPVxcXCIzMFxcXCIgcmVxdWlyZWQ+XFxuXCIgK1xuICAgIFwiICAgICAgICA8c21hbGwgY2xhc3M9XFxcImlucHV0LWVycm9yXFxcIiBuZy1zaG93PVxcXCJoYXNQcm9wZXJ0eUVycm9yKGVkaXRUZWFtRm9ybS50ZWFtTmFtZSwgJ3JlcXVpcmVkJylcXFwiPlJlcXVpcmVkPC9zbWFsbD5cXG5cIiArXG4gICAgXCIgICAgICAgIDxzbWFsbCBjbGFzcz1cXFwiaW5wdXQtZXJyb3JcXFwiIG5nLXNob3c9XFxcImhhc1Byb3BlcnR5RXJyb3IoZWRpdFRlYW1Gb3JtLnRlYW1OYW1lLCAnbWF4bGVuZ3RoJylcXFwiPlRvbyBMb25nPC9zbWFsbD5cXG5cIiArXG4gICAgXCIgICAgICAgIDxzcGFuIG5nLXNob3c9XFxcImhhc0Vycm9yKGVkaXRUZWFtRm9ybS50ZWFtTmFtZSlcXFwiIGNsYXNzPVxcXCJnbHlwaGljb24gZ2x5cGhpY29uLXJlbW92ZSBmb3JtLWNvbnRyb2wtZmVlZGJhY2tcXFwiPjwvc3Bhbj5cXG5cIiArXG4gICAgXCIgICAgICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgICAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICA8L2Zvcm0+XFxuXCIgK1xuICAgIFwiPC9kaXY+XFxuXCIgK1xuICAgIFwiPGRpdiBjbGFzcz1cXFwibW9kYWwtZm9vdGVyXFxcIj5cXG5cIiArXG4gICAgXCIgIDxidXR0b24gY2xhc3M9XFxcImJ0biBidG4tZGVmYXVsdFxcXCIgbmctY2xpY2s9XFxcImNhbmNlbCgpXFxcIj5DYW5jZWw8L2J1dHRvbj5cXG5cIiArXG4gICAgXCIgIDxidXR0b24gY2xhc3M9XFxcImJ0biBidG4tcHJpbWFyeVxcXCIgbmctZGlzYWJsZWQ9XFxcImVkaXRUZWFtRm9ybS4kaW52YWxpZFxcXCIgbmctY2xpY2s9XFxcImVkaXRUZWFtKHRlYW1EYXRhKVxcXCI+VXBkYXRlPC9idXR0b24+XFxuXCIgK1xuICAgIFwiPC9kaXY+XCIpO1xufV0pO1xuXG5hbmd1bGFyLm1vZHVsZShcIm1vZHVsZXMvcHJpdmF0ZS90ZWFtL21lc3NhZ2UvdGVhbS5tZXNzYWdlLnRwbC5odG1sXCIsIFtdKS5ydW4oW1wiJHRlbXBsYXRlQ2FjaGVcIiwgZnVuY3Rpb24oJHRlbXBsYXRlQ2FjaGUpIHtcbiAgJHRlbXBsYXRlQ2FjaGUucHV0KFwibW9kdWxlcy9wcml2YXRlL3RlYW0vbWVzc2FnZS90ZWFtLm1lc3NhZ2UudHBsLmh0bWxcIixcbiAgICBcIjxkaXYgY2xhc3M9XFxcIm1vZGFsLWhlYWRlclxcXCI+XFxuXCIgK1xuICAgIFwiICA8YnV0dG9uIHR5cGU9XFxcImJ1dHRvblxcXCIgY2xhc3M9XFxcImNsb3NlXFxcIiBuZy1jbGljaz1cXFwiY2FuY2VsKClcXFwiPjxzcGFuIGFyaWEtaGlkZGVuPVxcXCJ0cnVlXFxcIj4mdGltZXM7PC9zcGFuPjxzcGFuIGNsYXNzPVxcXCJzci1vbmx5XFxcIj5DbG9zZTwvc3Bhbj48L2J1dHRvbj5cXG5cIiArXG4gICAgXCIgIDxoMyBjbGFzcz1cXFwibW9kYWwtdGl0bGVcXFwiPlVwZGF0ZSBNZXNzYWdlPC9oMz5cXG5cIiArXG4gICAgXCI8L2Rpdj5cXG5cIiArXG4gICAgXCI8ZGl2IGNsYXNzPVxcXCJtb2RhbC1ib2R5XFxcIj5cXG5cIiArXG4gICAgXCIgIDxmb3JtIG5hbWU9XFxcIm1lc3NhZ2VGb3JtXFxcIiBjbGFzcz1cXFwidGVhbS1tZXNzYWdlLWZvcm0gZm9ybS1ob3Jpem9udGFsXFxcIiByb2xlPVxcXCJmb3JtXFxcIiBub3ZhbGlkYXRlPlxcblwiICtcbiAgICBcIiAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIiBuZy1jbGFzcz1cXFwieydoYXMtZXJyb3InOiBoYXNFcnJvcihtZXNzYWdlRm9ybS5tZXNzYWdlKSwgJ2hhcy1mZWVkYmFjayc6IGhhc0Vycm9yKG1lc3NhZ2VGb3JtLm1lc3NhZ2UpfVxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgPGxhYmVsIGZvcj1cXFwibWVzc2FnZVxcXCIgY2xhc3M9XFxcImNvbC1zbS00IGNvbnRyb2wtbGFiZWxcXFwiPlxcblwiICtcbiAgICBcIiAgICAgICAgVGVhbSBNZXNzYWdlOiA8YnI+XFxuXCIgK1xuICAgIFwiICAgICAgICA8c21hbGwgY2xhc3M9XFxcImlucHV0LWVycm9yXFxcIiBuZy1zaG93PVxcXCJoYXNQcm9wZXJ0eUVycm9yKG1lc3NhZ2VGb3JtLm1lc3NhZ2UsICdtYXhsZW5ndGgnKVxcXCI+WyBUb28gTG9uZyBdPC9zbWFsbD5cXG5cIiArXG4gICAgXCIgICAgICA8L2xhYmVsPlxcblwiICtcbiAgICBcIiAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1zbS04XFxcIj5cXG5cIiArXG4gICAgXCIgICAgICAgIDx0ZXh0YXJlYSBpZD1cXFwibWVzc2FnZVxcXCIgbmFtZT1cXFwibWVzc2FnZVxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgcGxhY2Vob2xkZXI9XFxcIkVudGVyIGEgbWVzc2FnZSB0byBwdXQgb24gdGhlIHRlYW0ncyB3YWxsLi4uXFxcIiByb3dzPVxcXCIzXFxcIiBuZy1tYXhsZW5ndGg9XFxcIjUwMFxcXCIgbmctbW9kZWw9XFxcInRlYW1EYXRhLm1lc3NhZ2VcXFwiPjwvdGV4dGFyZWE+XFxuXCIgK1xuICAgIFwiICAgICAgICA8ZGl2IGNsYXNzPVxcXCJlbWFpbC10ZWFtLW1lc3NhZ2UtY2hlY2tib3hcXFwiPlxcblwiICtcbiAgICBcIiAgICAgICAgICA8bGFiZWw+PGlucHV0IHR5cGU9XFxcImNoZWNrYm94XFxcIiBuZy1tb2RlbD1cXFwibWVzc2FnZU9wdGlvbnMuc2VuZEVtYWlsXFxcIj4gZW1haWwgbWVzc2FnZSB0byBjb2FjaDwvbGFiZWw+XFxuXCIgK1xuICAgIFwiICAgICAgICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgICAgICAgIDxzcGFuIG5nLXNob3c9XFxcImhhc0Vycm9yKG1lc3NhZ2VGb3JtLm1lc3NhZ2UpXFxcIiBjbGFzcz1cXFwiZ2x5cGhpY29uIGdseXBoaWNvbi1yZW1vdmUgZm9ybS1jb250cm9sLWZlZWRiYWNrXFxcIj48L3NwYW4+XFxuXCIgK1xuICAgIFwiICAgICAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICAgIDwvZGl2PlxcblwiICtcbiAgICBcIiAgPC9mb3JtPlxcblwiICtcbiAgICBcIjwvZGl2PlxcblwiICtcbiAgICBcIjxkaXYgY2xhc3M9XFxcIm1vZGFsLWZvb3RlclxcXCI+XFxuXCIgK1xuICAgIFwiICA8YnV0dG9uIGNsYXNzPVxcXCJidG4gYnRuLWRlZmF1bHRcXFwiIG5nLWNsaWNrPVxcXCJjYW5jZWwoKVxcXCI+Q2FuY2VsPC9idXR0b24+XFxuXCIgK1xuICAgIFwiICA8YnV0dG9uIGNsYXNzPVxcXCJidG4gYnRuLXByaW1hcnlcXFwiIG5nLWRpc2FibGVkPVxcXCJtZXNzYWdlRm9ybS4kcHJpc3RpbmUgfHwgbWVzc2FnZUZvcm0uJGludmFsaWRcXFwiIG5nLWNsaWNrPVxcXCJ1cGRhdGVNZXNzYWdlKHRlYW1EYXRhLCBtZXNzYWdlT3B0aW9ucy5zZW5kRW1haWwpXFxcIj5VcGRhdGU8L2J1dHRvbj5cXG5cIiArXG4gICAgXCI8L2Rpdj5cIik7XG59XSk7XG5cbmFuZ3VsYXIubW9kdWxlKFwibW9kdWxlcy9wcml2YXRlL3RlYW0vcGljay9tYW55L3RlYW0ucGljay5tYW55LnRwbC5odG1sXCIsIFtdKS5ydW4oW1wiJHRlbXBsYXRlQ2FjaGVcIiwgZnVuY3Rpb24oJHRlbXBsYXRlQ2FjaGUpIHtcbiAgJHRlbXBsYXRlQ2FjaGUucHV0KFwibW9kdWxlcy9wcml2YXRlL3RlYW0vcGljay9tYW55L3RlYW0ucGljay5tYW55LnRwbC5odG1sXCIsXG4gICAgXCI8ZGl2IG5nLXJlcGVhdD1cXFwiZ2FtZSBpbiBnYW1lcyB8IGZpbHRlcjpzZWFyY2g6c3RyaWN0XFxcIiBjbGFzcz1cXFwid2Vlay1nYW1lcyBsaXN0LWdyb3VwXFxcIj5cXG5cIiArXG4gICAgXCIgIDxkaXYgY2xhc3M9XFxcInJvd1xcXCI+XFxuXCIgK1xuICAgIFwiICAgIDxkaXYgY2xhc3M9XFxcImNvbC1zbS0xMiBjb2wtbWQtMTJcXFwiPjxoNSBjbGFzcz1cXFwiZ2FtZS1kaXNwbGF5XFxcIj48c21hbGwgY2xhc3M9XFxcInN0YXJ0LWRhdGVcXFwiPnt7c3RhcnRzKGdhbWUpfX08L3NtYWxsPjwvaDU+PC9kaXY+XFxuXCIgK1xuICAgIFwiICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgIDxkaXYgY2xhc3M9XFxcInJvdyBnYW1lLXNxdWFkc1xcXCI+XFxuXCIgK1xuICAgIFwiICAgIDxkaXYgY2xhc3M9XFxcImNvbC1zbS02IGNvbC1tZC02IGdhbWUtc3F1YWRcXFwiIG5nLXJlcGVhdD1cXFwic3F1YWQgaW4gZ2FtZS5zcXVhZHNcXFwiPlxcblwiICtcbiAgICBcIiAgICAgIDxhIG5nLWNsaWNrPVxcXCJ0b2dnbGVQaWNrKGdhbWUsIHNxdWFkKVxcXCIgY2xhc3M9XFxcImxpc3QtZ3JvdXAtaXRlbVxcXCIgbmctY2xhc3M9XFxcInsnZGlzYWJsZWQnOiBpc0Rpc2FibGVkKGdhbWUsIHNxdWFkKX1cXFwiPlxcblwiICtcbiAgICBcIiAgICAgICAgPGRpdiBjbGFzcz1cXFwicm93IGdhbWUtcm93XFxcIj5cXG5cIiArXG4gICAgXCIgICAgICAgICAgPHNwYW4+PHNwYW4gbmctc2hvdz1cXFwiKCRpbmRleCA9PT0gMSlcXFwiPkAgPC9zcGFuPjxzcGFuIG5nLXNob3c9XFxcInNxdWFkLnNlZWQgPiAwXFxcIj4oe3tzcXVhZC5zZWVkfX0pIDwvc3Bhbj57e3NxdWFkLm5hbWV9fSA8c3BhbiBjbGFzcz1cXFwicmVjb3JkLXNjb3JlXFxcIiBuZy1zaG93PVxcXCIhZ2FtZS5jb21wbGV0ZVxcXCI+WyB7e3NxdWFkLnJlY29yZH19IF08L3NwYW4+PHNwYW4gY2xhc3M9XFxcInJlY29yZC1zY29yZVxcXCIgbmctc2hvdz1cXFwiZ2FtZS5jb21wbGV0ZVxcXCI+WyB7e2dldFNjb3JlKGdhbWUsICRpbmRleCl9fSBdIDxzcGFuIG5nLXNob3c9XFxcIiRpbmRleCA9PT0gMVxcXCI+e3tnYW1lLm90X2Rpc3BsYXl9fTwvc3Bhbj48L3NwYW4+PC9zcGFuPlxcblwiICtcbiAgICBcIiAgICAgICAgICA8aSBjbGFzcz1cXFwiZmEgZmEte3twaWNrU3RhdHVzKGdhbWUsIHNxdWFkKX19IHB1bGwtcmlnaHRcXFwiPjwvaT5cXG5cIiArXG4gICAgXCIgICAgICAgIDwvZGl2PlxcblwiICtcbiAgICBcIiAgICAgIDwvYT5cXG5cIiArXG4gICAgXCIgICAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICA8L2Rpdj5cXG5cIiArXG4gICAgXCI8L2Rpdj5cXG5cIiArXG4gICAgXCI8ZGl2IGNsYXNzPVxcXCJhbGVydCBhbGVydC1pbmZvXFxcIiBuZy1zaG93PVxcXCIoZ2FtZXMgfCBmaWx0ZXI6c2VhcmNoOnN0cmljdCkubGVuZ3RoID09IDBcXFwiPlxcblwiICtcbiAgICBcIiAgTm8gZ2FtZXMgZm91bmRcXG5cIiArXG4gICAgXCI8L2Rpdj5cXG5cIiArXG4gICAgXCI8YnV0dG9uIHR5cGU9XFxcImJ1dHRvblxcXCIgY2xhc3M9XFxcInNhdmUtcGljay1idG4gYnRuIGJ0bi1wcmltYXJ5XFxcIiBuZy1zaG93PVxcXCJpc0NvYWNoKHRlYW0pXFxcIiBuZy1kaXNhYmxlZD1cXFwiIXNhdmVQaWNrc0VuYWJsZWRcXFwiIG5nLWNsaWNrPVxcXCJzYXZlUGlja3MoKVxcXCI+U2F2ZSBQaWNrczwvYnV0dG9uPlxcblwiICtcbiAgICBcIlxcblwiICtcbiAgICBcIlxcblwiICtcbiAgICBcIlxcblwiICtcbiAgICBcIlwiKTtcbn1dKTtcblxuYW5ndWxhci5tb2R1bGUoXCJtb2R1bGVzL3ByaXZhdGUvdGVhbS9waWNrL29uZS90ZWFtLnBpY2sub25lLnRwbC5odG1sXCIsIFtdKS5ydW4oW1wiJHRlbXBsYXRlQ2FjaGVcIiwgZnVuY3Rpb24oJHRlbXBsYXRlQ2FjaGUpIHtcbiAgJHRlbXBsYXRlQ2FjaGUucHV0KFwibW9kdWxlcy9wcml2YXRlL3RlYW0vcGljay9vbmUvdGVhbS5waWNrLm9uZS50cGwuaHRtbFwiLFxuICAgIFwiPGRpdiBjbGFzcz1cXFwidGVhbS1tZXNzYWdlIGFsZXJ0IGFsZXJ0LXdhcm5pbmdcXFwiIG5nLXNob3c9XFxcImlzQ29hY2godGVhbSkgJiYgaXNDdXJyZW50UGlja0xvY2tlZCgpXFxcIj48cCBjbGFzcz1cXFwidGVhbS1tZXNzYWdlLXRleHRcXFwiPllvdXIgcGljayBmb3Ige3t3ZWVrLm5hbWV9fSAoe3t3ZWVrLnR5cGV9fSkgaXMgbG9ja2VkIFsge3tjdXJyZW50UGljay5zcXVhZC5uYW1lfX0gXTwvcD48L2Rpdj5cXG5cIiArXG4gICAgXCI8ZGl2IG5nLXJlcGVhdD1cXFwiZ2FtZSBpbiBnYW1lcyB8IGZpbHRlcjpzZWFyY2g6c3RyaWN0XFxcIiBjbGFzcz1cXFwid2Vlay1nYW1lcyBsaXN0LWdyb3VwXFxcIj5cXG5cIiArXG4gICAgXCIgIDxkaXYgY2xhc3M9XFxcInJvd1xcXCI+XFxuXCIgK1xuICAgIFwiICAgIDxkaXYgY2xhc3M9XFxcImNvbC1zbS0xMiBjb2wtbWQtMTJcXFwiPjxoNSBjbGFzcz1cXFwiZ2FtZS1kaXNwbGF5XFxcIj48c21hbGwgY2xhc3M9XFxcInN0YXJ0LWRhdGVcXFwiPnt7c3RhcnRzKGdhbWUpfX08L3NtYWxsPjwvaDU+PC9kaXY+XFxuXCIgK1xuICAgIFwiICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgIDxkaXYgY2xhc3M9XFxcInJvdyBnYW1lLXNxdWFkc1xcXCI+XFxuXCIgK1xuICAgIFwiICAgIDxkaXYgY2xhc3M9XFxcImNvbC1zbS02IGNvbC1tZC02IGdhbWUtc3F1YWRcXFwiIG5nLXJlcGVhdD1cXFwic3F1YWQgaW4gZ2FtZS5zcXVhZHNcXFwiPlxcblwiICtcbiAgICBcIiAgICAgIDxhIG5nLWNsaWNrPVxcXCJtYWtlUGljayhnYW1lLCBzcXVhZClcXFwiIGNsYXNzPVxcXCJsaXN0LWdyb3VwLWl0ZW1cXFwiIG5nLWNsYXNzPVxcXCJ7J2Rpc2FibGVkJzogaXNEaXNhYmxlZChnYW1lLCBzcXVhZCl9XFxcIj5cXG5cIiArXG4gICAgXCIgICAgICAgIDxkaXYgY2xhc3M9XFxcInJvdyBnYW1lLXJvd1xcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgICAgIDxzcGFuIG5nLXNob3c9XFxcIigkaW5kZXggPT09IDEpXFxcIj5AIDwvc3Bhbj48c3BhbiBuZy1jbGFzcz1cXFwieydpbnZhbGlkLXNxdWFkJzogaGFzU3F1YWRCZWVuVXNlZChnYW1lLCBzcXVhZCl9XFxcIj48c3BhbiBuZy1zaG93PVxcXCJzcXVhZC5zZWVkID4gMFxcXCI+KHt7c3F1YWQuc2VlZH19KSA8L3NwYW4+e3tzcXVhZC5uYW1lfX0gPHNwYW4gY2xhc3M9XFxcInJlY29yZC1zY29yZVxcXCIgbmctc2hvdz1cXFwiIWdhbWUuY29tcGxldGVcXFwiPlsge3tzcXVhZC5yZWNvcmR9fSBdPC9zcGFuPjxzcGFuIGNsYXNzPVxcXCJyZWNvcmQtc2NvcmVcXFwiIG5nLXNob3c9XFxcImdhbWUuY29tcGxldGVcXFwiPlsge3tnZXRTY29yZShnYW1lLCAkaW5kZXgpfX0gXSA8c3BhbiBuZy1zaG93PVxcXCIkaW5kZXggPT09IDFcXFwiPnt7Z2FtZS5vdF9kaXNwbGF5fX08L3NwYW4+PC9zcGFuPjwvc3Bhbj5cXG5cIiArXG4gICAgXCIgICAgICAgICAgPGkgY2xhc3M9XFxcImZhIGZhLXt7cGlja1N0YXR1cyhnYW1lLCBzcXVhZCl9fSBwdWxsLXJpZ2h0XFxcIj48L2k+XFxuXCIgK1xuICAgIFwiICAgICAgICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgICAgICA8L2E+XFxuXCIgK1xuICAgIFwiICAgIDwvZGl2PlxcblwiICtcbiAgICBcIiAgPC9kaXY+XFxuXCIgK1xuICAgIFwiPC9kaXY+XFxuXCIgK1xuICAgIFwiPGRpdiBjbGFzcz1cXFwiYWxlcnQgYWxlcnQtaW5mb1xcXCIgbmctc2hvdz1cXFwiKGdhbWVzIHwgZmlsdGVyOnNlYXJjaDpzdHJpY3QpLmxlbmd0aCA9PSAwXFxcIj5cXG5cIiArXG4gICAgXCIgIE5vIGdhbWVzIGZvdW5kXFxuXCIgK1xuICAgIFwiPC9kaXY+XFxuXCIgK1xuICAgIFwiXFxuXCIgK1xuICAgIFwiXFxuXCIgK1xuICAgIFwiXCIpO1xufV0pO1xuXG5hbmd1bGFyLm1vZHVsZShcIm1vZHVsZXMvcHJpdmF0ZS90ZWFtL3BpY2svdGVhbS5waWNrLnRwbC5odG1sXCIsIFtdKS5ydW4oW1wiJHRlbXBsYXRlQ2FjaGVcIiwgZnVuY3Rpb24oJHRlbXBsYXRlQ2FjaGUpIHtcbiAgJHRlbXBsYXRlQ2FjaGUucHV0KFwibW9kdWxlcy9wcml2YXRlL3RlYW0vcGljay90ZWFtLnBpY2sudHBsLmh0bWxcIixcbiAgICBcIjxkaXYgY2xhc3M9XFxcIm1ha2UtcGlja3MtaGVhZGVyLXJvdyByb3dcXFwiPlxcblwiICtcbiAgICBcIiAgPGRpdiBjbGFzcz1cXFwiY29sLXNtLTcgY29sLW1kLTdcXFwiPlxcblwiICtcbiAgICBcIiAgICA8aDMgY2xhc3M9XFxcIndlZWstZGlzcGxheVxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAge3t3ZWVrLm5hbWV9fVxcblwiICtcbiAgICBcIiAgICA8L2gzPlxcblwiICtcbiAgICBcIiAgICA8aDY+PGEgbmctY2xpY2s9XFxcInNob3dUZWFtKHRlYW0pXFxcIj48aSBjbGFzcz1cXFwiZmEgZmEtY2hldnJvbi1sZWZ0IGZhLWZ3XFxcIj48L2k+IDxzcGFuIGNsYXNzPVxcXCJ0ZWFtLWxlYWd1ZS1uYW1lXFxcIj57e3RlYW0ubmFtZX19PC9zcGFuPjwvYT48L2g2PlxcblwiICtcbiAgICBcIiAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICA8ZGl2IGNsYXNzPVxcXCJjb2wtc20tNSBjb2wtbWQtNVxcXCI+XFxuXCIgK1xuICAgIFwiICAgIDxidXR0b24gdHlwZT1cXFwiYnV0dG9uXFxcIiBjbGFzcz1cXFwic2F2ZS1waWNrLWJ0biBidG4gYnRuLXByaW1hcnlcXFwiIG5nLXNob3c9XFxcInRlYW0ubGVhZ3VlLm1heF9waWNrc19wZXJfd2VlayAhPSAxICYmIGlzQ29hY2godGVhbSlcXFwiIG5nLWRpc2FibGVkPVxcXCIhc2F2ZVBpY2tzRW5hYmxlZFxcXCIgbmctY2xpY2s9XFxcInNhdmVQaWNrcygpXFxcIj5TYXZlIFBpY2tzPC9idXR0b24+XFxuXCIgK1xuICAgIFwiICA8L2Rpdj5cXG5cIiArXG4gICAgXCI8L2Rpdj5cXG5cIiArXG4gICAgXCI8ZGl2IGNsYXNzPVxcXCJwaWNrLW1lc3NhZ2UgYWxlcnQgYWxlcnQtaW5mb1xcXCIgbmctc2hvdz1cXFwiaXNDb2FjaCh0ZWFtKVxcXCI+PHAgY2xhc3M9XFxcInBpY2stbWVzc2FnZS10ZXh0XFxcIj57e3BpY2tNZXNzYWdlKHRlYW0sIHdlZWspfX08L3A+PC9kaXY+XFxuXCIgK1xuICAgIFwiPGRpdiBjbGFzcz1cXFwicGlja3MtdGFiXFxcIj5cXG5cIiArXG4gICAgXCIgIDx1bCBjbGFzcz1cXFwibmF2IG5hdi10YWJzXFxcIj5cXG5cIiArXG4gICAgXCIgICAgPGxpIGNsYXNzPVxcXCJhY3RpdmVcXFwiPjxhPlBpY2tzIFsge3twaWNrQ291bnR9fTxzcGFuIG5nLXNob3c9XFxcInNhdmVQaWNrc0VuYWJsZWRcXFwiPio8L3NwYW4+IF08L2E+PC9saT5cXG5cIiArXG4gICAgXCIgIDwvdWw+XFxuXCIgK1xuICAgIFwiICA8ZGl2IGNsYXNzPVxcXCJpbnB1dC1ncm91cCBjdXN0b20tc2VhcmNoLWZvcm0gZmlsdGVyLWxlYWd1ZS1qb2luXFxcIj5cXG5cIiArXG4gICAgXCIgICAgPGlucHV0IHR5cGU9XFxcInRleHRcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIHBsYWNlaG9sZGVyPVxcXCJTZWFyY2ggZ2FtZXMuLi5cXFwiIG5nLW1vZGVsPVxcXCJnYW1lUXVlcnlcXFwiPlxcblwiICtcbiAgICBcIiAgICA8c3BhbiBjbGFzcz1cXFwiaW5wdXQtZ3JvdXAtYnRuXFxcIj5cXG5cIiArXG4gICAgXCIgICAgICA8YnV0dG9uIGNsYXNzPVxcXCJidG4gYnRuLWRlZmF1bHRcXFwiIHR5cGU9XFxcImJ1dHRvblxcXCI+PHNwYW4gY2xhc3M9XFxcImdseXBoaWNvbiBnbHlwaGljb24tc2VhcmNoXFxcIj48L3NwYW4+PC9idXR0b24+XFxuXCIgK1xuICAgIFwiICAgIDwvc3Bhbj5cXG5cIiArXG4gICAgXCIgIDwvZGl2PlxcblwiICtcbiAgICBcIjwvZGl2PlxcblwiICtcbiAgICBcIjxkaXYgdWktdmlldz1cXFwicGlja0NvbnRlbnRcXFwiIGNsYXNzPVxcXCJwaWNrLWNvbnRlbnRcXFwiPjwvZGl2PlxcblwiICtcbiAgICBcIlxcblwiICtcbiAgICBcIlwiKTtcbn1dKTtcblxuYW5ndWxhci5tb2R1bGUoXCJtb2R1bGVzL3ByaXZhdGUvdGVhbS90ZWFtLnRwbC5odG1sXCIsIFtdKS5ydW4oW1wiJHRlbXBsYXRlQ2FjaGVcIiwgZnVuY3Rpb24oJHRlbXBsYXRlQ2FjaGUpIHtcbiAgJHRlbXBsYXRlQ2FjaGUucHV0KFwibW9kdWxlcy9wcml2YXRlL3RlYW0vdGVhbS50cGwuaHRtbFwiLFxuICAgIFwiPGRpdiB1aS12aWV3PVxcXCJ0ZWFtQ29udGVudFxcXCIgY2xhc3M9XFxcInRlYW0tY29udGVudFxcXCI+PC9kaXY+XFxuXCIgK1xuICAgIFwiXCIpO1xufV0pO1xuXG5hbmd1bGFyLm1vZHVsZShcIm1vZHVsZXMvcHJpdmF0ZS90ZWFtL3ZpZXcvcGlja3MvdGVhbS52aWV3LnBpY2tzLnRwbC5odG1sXCIsIFtdKS5ydW4oW1wiJHRlbXBsYXRlQ2FjaGVcIiwgZnVuY3Rpb24oJHRlbXBsYXRlQ2FjaGUpIHtcbiAgJHRlbXBsYXRlQ2FjaGUucHV0KFwibW9kdWxlcy9wcml2YXRlL3RlYW0vdmlldy9waWNrcy90ZWFtLnZpZXcucGlja3MudHBsLmh0bWxcIixcbiAgICBcIjxkaXYgY2xhc3M9XFxcImxvc2Vycy10YWJcXFwiPlxcblwiICtcbiAgICBcIiAgPHVsIGNsYXNzPVxcXCJuYXYgbmF2LXRhYnNcXFwiPlxcblwiICtcbiAgICBcIiAgICA8bGkgY2xhc3M9XFxcImFjdGl2ZVxcXCI+PGE+TG9zZXJzIFsge3tjb3JyZWN0UGlja0NvdW50KChwaWNrcyB8IHdlZWtQaWNrc0ZpbHRlcjpzZWxlY3RlZFdlZWs6dGVhbURhdGEubGVhZ3VlLmVsaW1pbmF0aW9uKSl9fSAvIHt7KHBpY2tzIHwgd2Vla1BpY2tzRmlsdGVyOnNlbGVjdGVkV2Vlazp0ZWFtRGF0YS5sZWFndWUuZWxpbWluYXRpb24pLmxlbmd0aH19IF08L2E+PC9saT5cXG5cIiArXG4gICAgXCIgICAgPGxpIGNsYXNzPVxcXCJkcm9wZG93blxcXCIgbmctc2hvdz1cXFwiaXNDb2FjaCh0ZWFtRGF0YSlcXFwiPlxcblwiICtcbiAgICBcIiAgICAgIDxhIGNsYXNzPVxcXCJkcm9wZG93bi10b2dnbGVcXFwiIGRhdGEtdG9nZ2xlPVxcXCJkcm9wZG93blxcXCIgaHJlZj1cXFwiI1xcXCIgcm9sZT1cXFwiYnV0dG9uXFxcIiBhcmlhLWV4cGFuZGVkPVxcXCJmYWxzZVxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgICBTaGFyZSA8c3BhbiBjbGFzcz1cXFwiY2FyZXRcXFwiPjwvc3Bhbj5cXG5cIiArXG4gICAgXCIgICAgICA8L2E+XFxuXCIgK1xuICAgIFwiICAgICAgPHVsIGNsYXNzPVxcXCJkcm9wZG93bi1tZW51XFxcIiByb2xlPVxcXCJtZW51XFxcIj5cXG5cIiArXG4gICAgXCIgICAgICAgIDxsaT48YSBuZy1jbGljaz1cXFwic2hhcmVUZWFtRkIoKVxcXCI+U2hhcmUgb24gRmFjZWJvb2s8L2E+PC9saT5cXG5cIiArXG4gICAgXCIgICAgICA8L3VsPlxcblwiICtcbiAgICBcIiAgICA8L2xpPlxcblwiICtcbiAgICBcIiAgPC91bD5cXG5cIiArXG4gICAgXCIgIDxkaXYgY2xhc3M9XFxcIndlZWtzXFxcIj5cXG5cIiArXG4gICAgXCIgICAgPHNlbGVjdCBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBuZy1jaGFuZ2U9XFxcImNoYW5nZVdlZWsoc2VsZWN0ZWRXZWVrU2x1ZylcXFwiIG5nLW1vZGVsPVxcXCJzZWxlY3RlZFdlZWtTbHVnXFxcIiBuZy1vcHRpb25zPVxcXCJsZWFndWVXZWVrLnNsdWcgYXMgbGVhZ3VlV2Vlay5kaXNwbGF5IGZvciBsZWFndWVXZWVrIGluIGxlYWd1ZVdlZWtzXFxcIj5cXG5cIiArXG4gICAgXCIgICAgICA8b3B0aW9uIHZhbHVlPVxcXCJcXFwiPkFsbCBXZWVrczwvb3B0aW9uPlxcblwiICtcbiAgICBcIiAgICA8L3NlbGVjdD5cXG5cIiArXG4gICAgXCIgIDwvZGl2PlxcblwiICtcbiAgICBcIjwvZGl2PlxcblwiICtcbiAgICBcIjxkaXYgY2xhc3M9XFxcInRlYW0tY29udGFpbmVyXFxcIiBzdHlsZT1cXFwiY2xlYXI6Ym90aDtcXFwiPlxcblwiICtcbiAgICBcIiAgPGRpdiBjbGFzcz1cXFwidGVhbS1waWNrcyBsaXN0LWdyb3VwXFxcIj5cXG5cIiArXG4gICAgXCIgICAgPGEgbmctcmVwZWF0PVxcXCJwaWNrIGluIHBpY2tzIHwgd2Vla1BpY2tzRmlsdGVyOnNlbGVjdGVkV2Vlazp0ZWFtRGF0YS5sZWFndWUuZWxpbWluYXRpb25cXFwiIGNsYXNzPVxcXCJ0ZWFtLXBpY2sgbGlzdC1ncm91cC1pdGVtXFxcIiBuZy1jbGljaz1cXFwibWFrZVBpY2sodGVhbURhdGEsIHBpY2spXFxcIiBuZy1jbGFzcz1cXFwieydsb2NrZWQnOiAhaXNDb2FjaCh0ZWFtRGF0YSkgfHwgcGljay5sb2NrZWQsICdpbmNvcnJlY3QnOiBwaWNrLmNvcnJlY3QgPT09IGZhbHNlIHx8IChwaWNrLmdhbWUgJiYgcGljay5nYW1lLmluY29tcGxldGUgPT09IHRydWUpfVxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgPGRpdiBjbGFzcz1cXFwicm93XFxcIj5cXG5cIiArXG4gICAgXCIgICAgICAgIDxkaXYgY2xhc3M9XFxcIndlZWstbmFtZSBjb2wtc20tNyBjb2wtbWQtN1xcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgICAgIDxpIGNsYXNzPVxcXCJmYSBmYS17e3BpY2tTdGF0dXMocGljayl9fSBmYS1mdyBwaWNrLWljb25cXFwiPjwvaT4gPHNwYW4gY2xhc3M9XFxcInBpY2stc3F1YWRcXFwiPjxzcGFuIGNsYXNzPVxcXCJwaWNrLXNxdWFkLW5hbWVcXFwiPlsge3twaWNrLnNxdWFkLm5hbWV9fSBdPC9zcGFuPjxzcGFuIGNsYXNzPVxcXCJwaWNrLXNxdWFkLWFiYnJldlxcXCI+WyB7e3BpY2suc3F1YWQuYWJicmV2fX0gXTwvc3Bhbj48L3NwYW4+IDxzcGFuIGNsYXNzPVxcXCJnYW1lLXN0YXJ0XFxcIj57e3BpY2tNZXRhKHBpY2spfX08L3NwYW4+PC9zcGFuPlxcblwiICtcbiAgICBcIiAgICAgICAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICAgICAgICA8ZGl2IGNsYXNzPVxcXCJnYW1lLWNvbHVtbiBjb2wtc20tNSBjb2wtbWQtNVxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJnYW1lXFxcIj57e3BpY2suZ2FtZS5kaXNwbGF5fX08L3NwYW4+XFxuXCIgK1xuICAgIFwiICAgICAgICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgICAgICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgICAgPC9hPlxcblwiICtcbiAgICBcIiAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICA8ZGl2IGNsYXNzPVxcXCJuby1waWNrcy1hbGVydCBhbGVydCBhbGVydC1pbmZvXFxcIiBuZy1zaG93PVxcXCIocGlja3MgfCB3ZWVrUGlja3NGaWx0ZXI6c2VsZWN0ZWRXZWVrOnRlYW1EYXRhLmxlYWd1ZS5lbGltaW5hdGlvbikubGVuZ3RoID09IDBcXFwiPlxcblwiICtcbiAgICBcIiAgICBObyBwaWNrc1xcblwiICtcbiAgICBcIiAgPC9kaXY+XFxuXCIgK1xuICAgIFwiPC9kaXY+XFxuXCIgK1xuICAgIFwiXCIpO1xufV0pO1xuXG5hbmd1bGFyLm1vZHVsZShcIm1vZHVsZXMvcHJpdmF0ZS90ZWFtL3ZpZXcvdGVhbS52aWV3LnRwbC5odG1sXCIsIFtdKS5ydW4oW1wiJHRlbXBsYXRlQ2FjaGVcIiwgZnVuY3Rpb24oJHRlbXBsYXRlQ2FjaGUpIHtcbiAgJHRlbXBsYXRlQ2FjaGUucHV0KFwibW9kdWxlcy9wcml2YXRlL3RlYW0vdmlldy90ZWFtLnZpZXcudHBsLmh0bWxcIixcbiAgICBcIjxkaXYgY2xhc3M9XFxcImFsZXJ0IGFsZXJ0LWRhbmdlclxcXCIgbmctc2hvdz1cXFwiIXRlYW1EYXRhLmFjdGl2ZVxcXCI+VGhpcyB0ZWFtIGhhcyBiZWVuIGRlYWN0aXZhdGVkIGJ5IHRoZSBjb21taXNoIGFuZCB3aWxsIGJlIHVuYWJsZSB0byBwaWNrIGxvc2Vycy4gPGEgY2xhc3M9XFxcImFsZXJ0LWxpbmtcXFwiIG5nLWNsaWNrPVxcXCJjb250YWN0Q29tbWlzaCh0ZWFtRGF0YSlcXFwiPkNvbnRhY3QgdGhlIGNvbW1pc2g8L2E+IGlmIHlvdSBoYXZlIHF1ZXN0aW9ucy48L2Rpdj5cXG5cIiArXG4gICAgXCI8ZGl2IGNsYXNzPVxcXCJhbGVydCBhbGVydC1kYW5nZXJcXFwiIG5nLXNob3c9XFxcIihpc0NvYWNoKHRlYW1EYXRhKSB8fCBpc0NvbW1pc2godGVhbURhdGEpKSAmJiB0ZWFtRGF0YS5hY3RpdmUgJiYgdGVhbURhdGEuYWxpdmUgJiYgdGVhbURhdGEuc3RhcnRlZCAmJiBoYXNOb3RFbm91Z2hQaWNrcyh0ZWFtRGF0YSlcXFwiPnt7cGlja1N1bW1hcnkodGVhbURhdGEpfX0gbG9zZXJzIHBpY2tlZCBmb3Ige3t0ZWFtRGF0YS5jdXJyZW50X3dlZWtfbmFtZX19PC9kaXY+XFxuXCIgK1xuICAgIFwiPGRpdiBjbGFzcz1cXFwiYWxlcnQgYWxlcnQtZGFuZ2VyXFxcIiBuZy1zaG93PVxcXCJ0ZWFtRGF0YS5hY3RpdmUgJiYgIXRlYW1EYXRhLmFsaXZlXFxcIj5UaGlzIHRlYW0gaXMgREVBRC4gU28gc29ycnkuPC9kaXY+XFxuXCIgK1xuICAgIFwiPGRpdiBjbGFzcz1cXFwiYWxlcnQgYWxlcnQtd2FybmluZ1xcXCIgbmctc2hvdz1cXFwiaXNDb2FjaCh0ZWFtRGF0YSkgJiYgdGVhbURhdGEuYWN0aXZlICYmICF0ZWFtRGF0YS5zdGFydGVkXFxcIj5Zb3UgY2FuIHBpY2sgbG9zZXJzIHdoZW4gdGhlIGxlYWd1ZSBzdGFydHMgLSB7e3RlYW1EYXRhLnN0YXJ0X3dlZWtfZGlzcGxheX19PC9kaXY+XFxuXCIgK1xuICAgIFwiPGRpdiBjbGFzcz1cXFwiaGVhZGVyLXJvdyByb3dcXFwiPlxcblwiICtcbiAgICBcIiAgPGRpdiBjbGFzcz1cXFwiY29sLXNtLTcgY29sLW1kLTdcXFwiPlxcblwiICtcbiAgICBcIiAgICA8ZGl2IGNsYXNzPVxcXCJidG4tZ3JvdXAgdGVhbXMtZHJvcGRvd25cXFwiIGRyb3Bkb3duIGlzLW9wZW49XFxcInRlYW1Ecm9wZG93bi5pc29wZW5cXFwiPlxcblwiICtcbiAgICBcIiAgICAgIDxidXR0b24gdHlwZT1cXFwiYnV0dG9uXFxcIiBjbGFzcz1cXFwidGVhbXMtYnRuLWxpbmsgYnRuIGJ0bi1saW5rIGRyb3Bkb3duLXRvZ2dsZVxcXCIgbmctZGlzYWJsZWQ9XFxcIiFpc0NvYWNoKHRlYW1EYXRhKSAmJiAhaXNDb21taXNoKHRlYW1EYXRhKSAmJiAhaXNBZG1pbigpXFxcIj5cXG5cIiArXG4gICAgXCIgICAgICAgIDxzdHJvbmc+PHNwYW4gY2xhc3M9XFxcInRlYW0tbmFtZVxcXCIgbmctY2xhc3M9XFxcInsndGVhbS1pbmFjdGl2ZSc6ICF0ZWFtRGF0YS5hY3RpdmUgfHwgIXRlYW1EYXRhLmFsaXZlLCAnZGlzYWJsZWQnOiAhaXNDb2FjaCh0ZWFtRGF0YSkgJiYgIWlzQ29tbWlzaCh0ZWFtRGF0YSkgJiYgIWlzQWRtaW4oKX1cXFwiPnt7dGVhbURhdGEubmFtZX19PC9zcGFuPiA8c3BhbiBuZy1zaG93PVxcXCJpc0NvYWNoKHRlYW1EYXRhKSB8fCBpc0NvbW1pc2godGVhbURhdGEpIHx8IGlzQWRtaW4oKVxcXCIgY2xhc3M9XFxcImNhcmV0XFxcIj48L3NwYW4+PC9zdHJvbmc+XFxuXCIgK1xuICAgIFwiICAgICAgPC9idXR0b24+XFxuXCIgK1xuICAgIFwiICAgICAgPHVsIGNsYXNzPVxcXCJkcm9wZG93bi1tZW51IHRlYW1zLWJ0bi1tZW51XFxcIiByb2xlPVxcXCJtZW51XFxcIj5cXG5cIiArXG4gICAgXCIgICAgICAgIDxsaT48YSBuZy1jbGljaz1cXFwidG9nZ2xlRHJvcGRvd24oJGV2ZW50KTtlZGl0VGVhbSh0ZWFtRGF0YSlcXFwiPkVkaXQge3t0ZWFtRGF0YS5uYW1lfX08L2E+PC9saT5cXG5cIiArXG4gICAgXCIgICAgICAgIDxsaT48YSBuZy1zaG93PVxcXCJpc0NvbW1pc2godGVhbURhdGEpXFxcIiBuZy1jbGljaz1cXFwidG9nZ2xlRHJvcGRvd24oJGV2ZW50KTt1cGRhdGVNZXNzYWdlKHRlYW1EYXRhKVxcXCI+RWRpdCB0ZWFtIG1lc3NhZ2U8L2E+PC9saT5cXG5cIiArXG4gICAgXCIgICAgICAgIDxsaSBuZy1zaG93PVxcXCJpc0NvbW1pc2godGVhbURhdGEpICYmICF0ZWFtRGF0YS5hY3RpdmVcXFwiPjxhIG5nLWNsaWNrPVxcXCJ0b2dnbGVEcm9wZG93bigkZXZlbnQpO2NvbmZpcm1BY3RpdmF0ZSh0ZWFtRGF0YSlcXFwiPlJlYWN0aXZhdGUgdGhpcyB0ZWFtPC9hPjwvbGk+XFxuXCIgK1xuICAgIFwiICAgICAgICA8bGkgbmctc2hvdz1cXFwiaXNDb21taXNoKHRlYW1EYXRhKSAmJiB0ZWFtRGF0YS5hY3RpdmVcXFwiPjxhIG5nLWNsaWNrPVxcXCJ0b2dnbGVEcm9wZG93bigkZXZlbnQpO2NvbmZpcm1EZWFjdGl2YXRlKHRlYW1EYXRhKVxcXCI+RGVhY3RpdmF0ZSB0aGlzIHRlYW08L2E+PC9saT5cXG5cIiArXG4gICAgXCIgICAgICAgIDxsaSBuZy1zaG93PVxcXCIhaXNDb21taXNoKHRlYW1EYXRhKVxcXCI+PGEgbmctY2xpY2s9XFxcInRvZ2dsZURyb3Bkb3duKCRldmVudCk7Y29udGFjdENvbW1pc2godGVhbURhdGEpXFxcIj5Db250YWN0IHRoZSBjb21taXNoPC9hPjwvbGk+XFxuXCIgK1xuICAgIFwiICAgICAgICA8bGkgY2xhc3M9XFxcImRpdmlkZXJcXFwiIG5nLXNob3c9XFxcImxlYWd1ZVRlYW1zLmxlbmd0aCA+IDFcXFwiPjwvbGk+XFxuXCIgK1xuICAgIFwiICAgICAgICA8bGkgbmctcmVwZWF0PVxcXCJ0ZWFtIGluIGxlYWd1ZVRlYW1zXFxcIiBuZy1zaG93PVxcXCJ0ZWFtLmlkICE9IHRlYW1EYXRhLmlkXFxcIj48YSBuZy1jbGljaz1cXFwic2hvd1RlYW0odGVhbSlcXFwiPjxzcGFuIGNsYXNzPVxcXCJvdGhlci10ZWFtLW5hbWVcXFwiIG5nLWNsYXNzPVxcXCJ7J3RlYW0taW5hY3RpdmUnOiAhdGVhbS5hY3RpdmUgfHwgIXRlYW0uYWxpdmV9XFxcIj57e3RlYW0ubmFtZX19PC9zcGFuPiA8c3BhbiBjbGFzcz1cXFwib3RoZXItdGVhbS1waWNrXFxcIj57e3RlYW0uY3VycmVudF9waWNrLmFiYnJldn19PC9zcGFuPjwvYT48L2xpPlxcblwiICtcbiAgICBcIiAgICAgIDwvdWw+XFxuXCIgK1xuICAgIFwiICAgIDwvZGl2PlxcblwiICtcbiAgICBcIiAgICA8aDY+PGEgbmctY2xpY2s9XFxcInNob3dMZWFndWUodGVhbURhdGEpXFxcIj48aSBjbGFzcz1cXFwiZmEgZmEtY2hldnJvbi1sZWZ0IGZhLWZ3XFxcIj48L2k+IDxzcGFuIGNsYXNzPVxcXCJ0ZWFtLWxlYWd1ZS1uYW1lXFxcIj57e3RlYW1EYXRhLmxlYWd1ZS5uYW1lfX08L3NwYW4+PC9hPjwvaDY+XFxuXCIgK1xuICAgIFwiICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgIDxkaXYgY2xhc3M9XFxcImNvbC1zbS01IGNvbC1tZC01XFxcIj5cXG5cIiArXG4gICAgXCIgICAgPGJ1dHRvbiB0eXBlPVxcXCJidXR0b25cXFwiIGNsYXNzPVxcXCJtYWtlLXBpY2tzLWJ0biBidG4gYnRuLXByaW1hcnlcXFwiIG5nLXNob3c9XFxcImlzQ29hY2godGVhbURhdGEpXFxcIiBuZy1jbGljaz1cXFwibWFrZVBpY2sodGVhbURhdGEpXFxcIiBuZy1kaXNhYmxlZD1cXFwidGVhbURhdGEuY3VycmVudF9waWNrLmxvY2tlZCB8fCAhdGVhbURhdGEuc3RhcnRlZCB8fCAhdGVhbURhdGEuYWN0aXZlIHx8ICF0ZWFtRGF0YS5hbGl2ZVxcXCI+PHNwYW4+UGljayBMb3Nlcjwvc3Bhbj48c3BhbiBuZy1zaG93PVxcXCJ0ZWFtRGF0YS5sZWFndWUubWF4X3BpY2tzX3Blcl93ZWVrICE9IDFcXFwiPnM8L3NwYW4+PC9idXR0b24+XFxuXCIgK1xuICAgIFwiICA8L2Rpdj5cXG5cIiArXG4gICAgXCI8L2Rpdj5cXG5cIiArXG4gICAgXCI8aHI+XFxuXCIgK1xuICAgIFwiPGRpdiBjbGFzcz1cXFwidGVhbS1tZXNzYWdlXFxcIiBuZy1zaG93PVxcXCJpc0NvbW1pc2godGVhbURhdGEpIHx8IGlzQ29hY2godGVhbURhdGEpXFxcIj5cXG5cIiArXG4gICAgXCIgIDxhY2NvcmRpb24gY2xvc2Utb3RoZXJzPVxcXCJ0cnVlXFxcIj5cXG5cIiArXG4gICAgXCIgICAgPGFjY29yZGlvbi1ncm91cCBpcy1vcGVuPVxcXCJ1c2VyTW9kZWwudGVhbU1lc3NhZ2VPcGVuW3RlYW1EYXRhLmlkXVxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgPGFjY29yZGlvbi1oZWFkaW5nPlxcblwiICtcbiAgICBcIiAgICAgICAgPGkgY2xhc3M9XFxcImZhIGZhLWNvbW1lbnQgZmEtZndcXFwiPjwvaT4gTWVzc2FnZXMgdG8gdGVhbSBbIDxzcGFuIG5nLXNob3c9XFxcInRlYW1EYXRhLm1lc3NhZ2UubGVuZ3RoID4gMFxcXCI+MTwvc3Bhbj48c3BhbiBuZy1zaG93PVxcXCIhdGVhbURhdGEubWVzc2FnZSB8fCB0ZWFtRGF0YS5tZXNzYWdlLmxlbmd0aCA9PSAwXFxcIj4wPC9zcGFuPiBdIDxpIGNsYXNzPVxcXCJwdWxsLXJpZ2h0IGdseXBoaWNvblxcXCIgbmctY2xhc3M9XFxcInsnZ2x5cGhpY29uLWNoZXZyb24tZG93bic6IHVzZXJNb2RlbC50ZWFtTWVzc2FnZU9wZW5bdGVhbURhdGEuaWRdLCAnZ2x5cGhpY29uLWNoZXZyb24tcmlnaHQnOiAhdXNlck1vZGVsLnRlYW1NZXNzYWdlT3Blblt0ZWFtRGF0YS5pZF19XFxcIj48L2k+XFxuXCIgK1xuICAgIFwiICAgICAgPC9hY2NvcmRpb24taGVhZGluZz5cXG5cIiArXG4gICAgXCIgICAgICA8cCBjbGFzcz1cXFwidGVhbS1tZXNzYWdlLXRleHRcXFwiIG5nLXNob3c9XFxcIiF0ZWFtRGF0YS5tZXNzYWdlIHx8IHRlYW1EYXRhLm1lc3NhZ2UubGVuZ3RoID09IDBcXFwiPm5vIG1lc3NhZ2VzPC9wPjxwIGNsYXNzPVxcXCJ0ZWFtLW1lc3NhZ2UtdGV4dFxcXCIgbmctc2hvdz1cXFwidGVhbURhdGEubWVzc2FnZS5sZW5ndGggPiAwXFxcIiBuZy1iaW5kLWh0bWw9XFxcInRlYW1EYXRhLm1lc3NhZ2UgfCBsaW5reTonX2JsYW5rJ1xcXCI+PC9wPiA8YSBjbGFzcz1cXFwiYWxlcnQtbGlua1xcXCIgbmctc2hvdz1cXFwiaXNDb21taXNoKHRlYW1EYXRhKVxcXCIgbmctY2xpY2s9XFxcInVwZGF0ZU1lc3NhZ2UodGVhbURhdGEpXFxcIj5bIGVkaXQgXTwvYT48YSBjbGFzcz1cXFwiYWxlcnQtbGlua1xcXCIgbmctc2hvdz1cXFwiIWlzQ29tbWlzaCh0ZWFtRGF0YSlcXFwiIG5nLWNsaWNrPVxcXCJjb250YWN0Q29tbWlzaCh0ZWFtRGF0YSlcXFwiPlsgY29udGFjdCBjb21taXNoIF08L2E+XFxuXCIgK1xuICAgIFwiICAgIDwvYWNjb3JkaW9uLWdyb3VwPlxcblwiICtcbiAgICBcIiAgPC9hY2NvcmRpb24+XFxuXCIgK1xuICAgIFwiICA8aHI+XFxuXCIgK1xuICAgIFwiPC9kaXY+XFxuXCIgK1xuICAgIFwiPGRpdiB1aS12aWV3PVxcXCJ0ZWFtUGlja3NDb250ZW50XFxcIiBjbGFzcz1cXFwicGlja3MtY29udGVudFxcXCI+PC9kaXY+XCIpO1xufV0pO1xuXG5hbmd1bGFyLm1vZHVsZShcIm1vZHVsZXMvcHJpdmF0ZS91c2VyL3Jlc2V0L3VzZXIucmVzZXQudHBsLmh0bWxcIiwgW10pLnJ1bihbXCIkdGVtcGxhdGVDYWNoZVwiLCBmdW5jdGlvbigkdGVtcGxhdGVDYWNoZSkge1xuICAkdGVtcGxhdGVDYWNoZS5wdXQoXCJtb2R1bGVzL3ByaXZhdGUvdXNlci9yZXNldC91c2VyLnJlc2V0LnRwbC5odG1sXCIsXG4gICAgXCI8ZGl2IGNsYXNzPVxcXCJtb2RhbC1oZWFkZXJcXFwiPlxcblwiICtcbiAgICBcIiAgPGJ1dHRvbiB0eXBlPVxcXCJidXR0b25cXFwiIGNsYXNzPVxcXCJjbG9zZVxcXCIgbmctY2xpY2s9XFxcImNhbmNlbCgpXFxcIj48c3BhbiBhcmlhLWhpZGRlbj1cXFwidHJ1ZVxcXCI+JnRpbWVzOzwvc3Bhbj48c3BhbiBjbGFzcz1cXFwic3Itb25seVxcXCI+Q2xvc2U8L3NwYW4+PC9idXR0b24+XFxuXCIgK1xuICAgIFwiICA8aDMgY2xhc3M9XFxcIm1vZGFsLXRpdGxlXFxcIj5SZXNldCBQYXNzd29yZDwvaDM+XFxuXCIgK1xuICAgIFwiPC9kaXY+XFxuXCIgK1xuICAgIFwiPGRpdiBjbGFzcz1cXFwibW9kYWwtYm9keVxcXCI+XFxuXCIgK1xuICAgIFwiICA8Zm9ybSBuYW1lPVxcXCJyZXNldFBhc3N3b3JkRm9ybVxcXCIgY2xhc3M9XFxcInJlc2V0LXBhc3N3b3JkLWZvcm0gZm9ybS1ob3Jpem9udGFsXFxcIiByb2xlPVxcXCJmb3JtXFxcIiBub3ZhbGlkYXRlPlxcblwiICtcbiAgICBcIiAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIiBuZy1jbGFzcz1cXFwieydoYXMtZXJyb3InOiBoYXNFcnJvcihyZXNldFBhc3N3b3JkRm9ybS5lbWFpbCksICdoYXMtZmVlZGJhY2snOiBoYXNFcnJvcihyZXNldFBhc3N3b3JkRm9ybS5lbWFpbCl9XFxcIj5cXG5cIiArXG4gICAgXCIgICAgICA8bGFiZWwgZm9yPVxcXCJlbWFpbFxcXCIgY2xhc3M9XFxcImNvbC1zbS0yIGNvbnRyb2wtbGFiZWxcXFwiPkVtYWlsOjwvbGFiZWw+XFxuXCIgK1xuICAgIFwiICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXNtLTEwXFxcIj5cXG5cIiArXG4gICAgXCIgICAgICAgIDxpbnB1dCBpZD1cXFwiZW1haWxcXFwiIG5hbWU9XFxcImVtYWlsXFxcIiB0eXBlPVxcXCJlbWFpbFxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgcGxhY2Vob2xkZXI9XFxcIkVudGVyIHlvdXIgZW1haWxcXFwiIG5nLW1vZGVsPVxcXCJ1c2VyRGF0YS5lbWFpbFxcXCIgcmVxdWlyZWQ+XFxuXCIgK1xuICAgIFwiICAgICAgICA8c21hbGwgY2xhc3M9XFxcImlucHV0LWVycm9yXFxcIiBuZy1zaG93PVxcXCJoYXNQcm9wZXJ0eUVycm9yKHJlc2V0UGFzc3dvcmRGb3JtLmVtYWlsLCAncmVxdWlyZWQnKVxcXCI+UmVxdWlyZWQ8L3NtYWxsPlxcblwiICtcbiAgICBcIiAgICAgICAgPHNtYWxsIGNsYXNzPVxcXCJpbnB1dC1lcnJvclxcXCIgbmctc2hvdz1cXFwiaGFzUHJvcGVydHlFcnJvcihyZXNldFBhc3N3b3JkRm9ybS5lbWFpbCwgJ2VtYWlsJylcXFwiPkludmFsaWQgZW1haWw8L3NtYWxsPlxcblwiICtcbiAgICBcIiAgICAgICAgPHNwYW4gbmctc2hvdz1cXFwiaGFzRXJyb3IocmVzZXRQYXNzd29yZEZvcm0uZW1haWwpXFxcIiBjbGFzcz1cXFwiZ2x5cGhpY29uIGdseXBoaWNvbi1yZW1vdmUgZm9ybS1jb250cm9sLWZlZWRiYWNrXFxcIj48L3NwYW4+XFxuXCIgK1xuICAgIFwiICAgICAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICAgIDwvZGl2PlxcblwiICtcbiAgICBcIiAgPC9mb3JtPlxcblwiICtcbiAgICBcIjwvZGl2PlxcblwiICtcbiAgICBcIjxkaXYgY2xhc3M9XFxcIm1vZGFsLWZvb3RlclxcXCI+XFxuXCIgK1xuICAgIFwiICA8YnV0dG9uIGNsYXNzPVxcXCJidG4gYnRuLWRlZmF1bHRcXFwiIG5nLWNsaWNrPVxcXCJjYW5jZWwoKVxcXCI+Q2FuY2VsPC9idXR0b24+XFxuXCIgK1xuICAgIFwiICA8YnV0dG9uIGNsYXNzPVxcXCJidG4gYnRuLXByaW1hcnlcXFwiIG5nLWRpc2FibGVkPVxcXCJyZXNldFBhc3N3b3JkRm9ybS4kcHJpc3RpbmUgfHwgcmVzZXRQYXNzd29yZEZvcm0uJGludmFsaWRcXFwiIG5nLWNsaWNrPVxcXCJyZXNldCh1c2VyRGF0YS5lbWFpbClcXFwiPlJlc2V0PC9idXR0b24+XFxuXCIgK1xuICAgIFwiPC9kaXY+XCIpO1xufV0pO1xuXG5hbmd1bGFyLm1vZHVsZShcIm1vZHVsZXMvcHJpdmF0ZS91c2VyL3VzZXIudHBsLmh0bWxcIiwgW10pLnJ1bihbXCIkdGVtcGxhdGVDYWNoZVwiLCBmdW5jdGlvbigkdGVtcGxhdGVDYWNoZSkge1xuICAkdGVtcGxhdGVDYWNoZS5wdXQoXCJtb2R1bGVzL3ByaXZhdGUvdXNlci91c2VyLnRwbC5odG1sXCIsXG4gICAgXCI8ZGl2IGNsYXNzPVxcXCJwYW5lbCBwYW5lbC1kZWZhdWx0XFxcIj5cXG5cIiArXG4gICAgXCIgIDxkaXYgY2xhc3M9XFxcInBhbmVsLWhlYWRpbmdcXFwiPlxcblwiICtcbiAgICBcIiAgICAgIDxoMyBjbGFzcz1cXFwicGFuZWwtdGl0bGVcXFwiPlVzZXIgUHJvZmlsZTwvaDM+XFxuXCIgK1xuICAgIFwiICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgIDxkaXYgY2xhc3M9XFxcInBhbmVsLWJvZHlcXFwiPlxcblwiICtcbiAgICBcIiAgICAgIDxmb3JtIG5hbWU9XFxcImVkaXRVc2VyRm9ybVxcXCIgcm9sZT1cXFwiZm9ybVxcXCIgbm92YWxpZGF0ZT5cXG5cIiArXG4gICAgXCIgICAgICAgICAgPGRpdiBjbGFzcz1cXFwicm93XFxcIj5cXG5cIiArXG4gICAgXCIgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1zbS02IGNvbC1tZC02XFxcIj5cXG5cIiArXG4gICAgXCIgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIiBuZy1jbGFzcz1cXFwieydoYXMtZXJyb3InOiBoYXNFcnJvcihlZGl0VXNlckZvcm0uZmlyc3ROYW1lKSwgJ2hhcy1mZWVkYmFjayc6IGhhc0Vycm9yKGVkaXRVc2VyRm9ybS5maXJzdE5hbWUpfVxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cXFwiY29udHJvbC1sYWJlbFxcXCIgZm9yPVxcXCJmaXJzdE5hbWVcXFwiPkZpcnN0IE5hbWVcXG5cIiArXG4gICAgXCIgICAgICAgICAgICAgICAgICAgICAgICAgIDxzbWFsbCBuZy1zaG93PVxcXCJoYXNQcm9wZXJ0eUVycm9yKGVkaXRVc2VyRm9ybS5maXJzdE5hbWUsICdyZXF1aXJlZCcpXFxcIj5bIFJlcXVpcmVkIF08L3NtYWxsPlxcblwiICtcbiAgICBcIiAgICAgICAgICAgICAgICAgICAgICAgICAgPHNtYWxsIG5nLXNob3c9XFxcImhhc1Byb3BlcnR5RXJyb3IoZWRpdFVzZXJGb3JtLmZpcnN0TmFtZSwgJ21heGxlbmd0aCcpXFxcIj5bIFRvbyBMb25nIF08L3NtYWxsPlxcblwiICtcbiAgICBcIiAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxcblwiICtcbiAgICBcIiAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgaWQ9XFxcImZpcnN0TmFtZVxcXCIgbmFtZT1cXFwiZmlyc3ROYW1lXFxcIiB0eXBlPVxcXCJ0ZXh0XFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBuZy1tb2RlbD1cXFwidXNlckRhdGEudXNlci5maXJzdF9uYW1lXFxcIiBuZy1tYXhsZW5ndGg9XFxcIjE1XFxcIiByZXF1aXJlZD5cXG5cIiArXG4gICAgXCIgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gbmctc2hvdz1cXFwiaGFzRXJyb3IoZWRpdFVzZXJGb3JtLmZpcnN0TmFtZSlcXFwiIGNsYXNzPVxcXCJnbHlwaGljb24gZ2x5cGhpY29uLXJlbW92ZSBmb3JtLWNvbnRyb2wtZmVlZGJhY2tcXFwiPjwvc3Bhbj5cXG5cIiArXG4gICAgXCIgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgICAgICAgICAgICAgIDwvZGl2PlxcblwiICtcbiAgICBcIiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXNtLTYgY29sLW1kLTZcXFwiPlxcblwiICtcbiAgICBcIiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiIG5nLWNsYXNzPVxcXCJ7J2hhcy1lcnJvcic6IGhhc0Vycm9yKGVkaXRVc2VyRm9ybS5sYXN0TmFtZSksICdoYXMtZmVlZGJhY2snOiBoYXNFcnJvcihlZGl0VXNlckZvcm0ubGFzdE5hbWUpfVxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cXFwiY29udHJvbC1sYWJlbFxcXCIgZm9yPVxcXCJsYXN0TmFtZVxcXCI+TGFzdCBOYW1lXFxuXCIgK1xuICAgIFwiICAgICAgICAgICAgICAgICAgICAgICAgICA8c21hbGwgbmctc2hvdz1cXFwiaGFzUHJvcGVydHlFcnJvcihlZGl0VXNlckZvcm0ubGFzdE5hbWUsICdyZXF1aXJlZCcpXFxcIj5bIFJlcXVpcmVkIF08L3NtYWxsPlxcblwiICtcbiAgICBcIiAgICAgICAgICAgICAgICAgICAgICAgICAgPHNtYWxsIG5nLXNob3c9XFxcImhhc1Byb3BlcnR5RXJyb3IoZWRpdFVzZXJGb3JtLmxhc3ROYW1lLCAnbWF4bGVuZ3RoJylcXFwiPlsgVG9vIExvbmcgXTwvc21hbGw+XFxuXCIgK1xuICAgIFwiICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XFxuXCIgK1xuICAgIFwiICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBpZD1cXFwibGFzdE5hbWVcXFwiIG5hbWU9XFxcImxhc3ROYW1lXFxcIiB0eXBlPVxcXCJ0ZXh0XFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBuZy1tb2RlbD1cXFwidXNlckRhdGEudXNlci5sYXN0X25hbWVcXFwiIG5nLW1heGxlbmd0aD1cXFwiMjBcXFwiIHJlcXVpcmVkPlxcblwiICtcbiAgICBcIiAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBuZy1zaG93PVxcXCJoYXNFcnJvcihlZGl0VXNlckZvcm0ubGFzdE5hbWUpXFxcIiBjbGFzcz1cXFwiZ2x5cGhpY29uIGdseXBoaWNvbi1yZW1vdmUgZm9ybS1jb250cm9sLWZlZWRiYWNrXFxcIj48L3NwYW4+XFxuXCIgK1xuICAgIFwiICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICAgICAgICAgICAgICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgICAgICAgICAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPlxcblwiICtcbiAgICBcIiAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVxcXCJjb250cm9sLWxhYmVsXFxcIiBmb3I9XFxcImVtYWlsXFxcIj5FbWFpbDwvbGFiZWw+XFxuXCIgK1xuICAgIFwiICAgICAgICAgICAgICA8aW5wdXQgaWQ9XFxcImVtYWlsXFxcIiBuYW1lPVxcXCJlbWFpbFxcXCIgdHlwZT1cXFwiZW1haWxcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIG5nLWRpc2FibGVkPVxcXCJ0cnVlXFxcIiBuZy1tb2RlbD1cXFwidXNlckRhdGEudXNlci5lbWFpbFxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgICAgIDwvZGl2PlxcblwiICtcbiAgICBcIiAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJyb3dcXFwiPlxcblwiICtcbiAgICBcIiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXNtLTYgY29sLW1kLTZcXFwiPlxcblwiICtcbiAgICBcIiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiIG5nLWNsYXNzPVxcXCJ7J2hhcy1lcnJvcic6IGhhc0Vycm9yKGVkaXRVc2VyRm9ybS5wYXNzd29yZCksICdoYXMtZmVlZGJhY2snOiBoYXNFcnJvcihlZGl0VXNlckZvcm0ucGFzc3dvcmQpfVxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cXFwiY29udHJvbC1sYWJlbFxcXCIgZm9yPVxcXCJwYXNzd29yZFxcXCI+TmV3IFBhc3N3b3JkXFxuXCIgK1xuICAgIFwiICAgICAgICAgICAgICAgICAgICAgICAgICA8c21hbGwgbmctc2hvdz1cXFwiaGFzUHJvcGVydHlFcnJvcihlZGl0VXNlckZvcm0ucGFzc3dvcmQsICdtaW5sZW5ndGgnKVxcXCI+WyA4IC0gNTAgQ2hhcmFjdGVycyBdPC9zbWFsbD5cXG5cIiArXG4gICAgXCIgICAgICAgICAgICAgICAgICAgICAgICAgIDxzbWFsbCBuZy1zaG93PVxcXCJoYXNQcm9wZXJ0eUVycm9yKGVkaXRVc2VyRm9ybS5wYXNzd29yZCwgJ21heGxlbmd0aCcpXFxcIj5bIDggLSA1MCBDaGFyYWN0ZXJzIF08L3NtYWxsPlxcblwiICtcbiAgICBcIiAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxcblwiICtcbiAgICBcIiAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgaWQ9XFxcInBhc3N3b3JkXFxcIiBuYW1lPVxcXCJwYXNzd29yZFxcXCIgdHlwZT1cXFwicGFzc3dvcmRcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIG5nLW1vZGVsPVxcXCJ1c2VyRGF0YS51c2VyLnBhc3N3b3JkXFxcIiBuZy1taW5sZW5ndGg9XFxcIjhcXFwiIG5nLW1heGxlbmd0aD1cXFwiNTBcXFwiPlxcblwiICtcbiAgICBcIiAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBuZy1zaG93PVxcXCJoYXNFcnJvcihlZGl0VXNlckZvcm0ucGFzc3dvcmQpXFxcIiBjbGFzcz1cXFwiZ2x5cGhpY29uIGdseXBoaWNvbi1yZW1vdmUgZm9ybS1jb250cm9sLWZlZWRiYWNrXFxcIj48L3NwYW4+XFxuXCIgK1xuICAgIFwiICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICAgICAgICAgICAgICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1zbS02IGNvbC1tZC02XFxcIj5cXG5cIiArXG4gICAgXCIgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIiBuZy1jbGFzcz1cXFwieydoYXMtZXJyb3InOiBoYXNFcnJvcihlZGl0VXNlckZvcm0uY29uZmlybVBhc3N3b3JkKSwgJ2hhcy1mZWVkYmFjayc6IGhhc0Vycm9yKGVkaXRVc2VyRm9ybS5jb25maXJtUGFzc3dvcmQpfVxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cXFwiY29udHJvbC1sYWJlbFxcXCIgZm9yPVxcXCJjb25maXJtUGFzc3dvcmRcXFwiPkNvbmZpcm0gTmV3IFBhc3N3b3JkXFxuXCIgK1xuICAgIFwiICAgICAgICAgICAgICAgICAgICAgICAgICA8c21hbGwgbmctc2hvdz1cXFwiaGFzUHJvcGVydHlFcnJvcihlZGl0VXNlckZvcm0uY29uZmlybVBhc3N3b3JkLCAnbWF0Y2gnKVxcXCI+WyBObyBNYXRjaCBdPC9zbWFsbD5cXG5cIiArXG4gICAgXCIgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cXG5cIiArXG4gICAgXCIgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IGlkPVxcXCJjb25maXJtUGFzc3dvcmRcXFwiIG5hbWU9XFxcImNvbmZpcm1QYXNzd29yZFxcXCIgdHlwZT1cXFwicGFzc3dvcmRcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIG5nLW1vZGVsPVxcXCJ1c2VyRGF0YS51c2VyLnBhc3N3b3JkX2NvbmZpcm1hdGlvblxcXCIgbWF0Y2g9XFxcInVzZXJEYXRhLnVzZXIucGFzc3dvcmRcXFwiPlxcblwiICtcbiAgICBcIiAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBuZy1zaG93PVxcXCJoYXNFcnJvcihlZGl0VXNlckZvcm0uY29uZmlybVBhc3N3b3JkKVxcXCIgY2xhc3M9XFxcImdseXBoaWNvbiBnbHlwaGljb24tcmVtb3ZlIGZvcm0tY29udHJvbC1mZWVkYmFja1xcXCI+PC9zcGFuPlxcblwiICtcbiAgICBcIiAgICAgICAgICAgICAgICAgIDwvZGl2PlxcblwiICtcbiAgICBcIiAgICAgICAgICAgICAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICAgICAgICAgIDwvZGl2PlxcblwiICtcbiAgICBcIiAgICAgICAgICA8YnV0dG9uIHR5cGU9XFxcInN1Ym1pdFxcXCIgY2xhc3M9XFxcImJ0biBidG4taW5mbyBidG4tYmxvY2tcXFwiIG5nLWRpc2FibGVkPVxcXCJlZGl0VXNlckZvcm0uJHByaXN0aW5lIHx8IGVkaXRVc2VyRm9ybS4kaW52YWxpZFxcXCIgbmctY2xpY2s9XFxcInVwZGF0ZSh1c2VyRGF0YS51c2VyKVxcXCI+VXBkYXRlPC9idXR0b24+XFxuXCIgK1xuICAgIFwiICAgICAgPC9mb3JtPlxcblwiICtcbiAgICBcIiAgPC9kaXY+XFxuXCIgK1xuICAgIFwiPC9kaXY+XFxuXCIgK1xuICAgIFwiXCIpO1xufV0pO1xuXG5hbmd1bGFyLm1vZHVsZShcIm1vZHVsZXMvcHVibGljL2FidXNlL2FidXNlLnRwbC5odG1sXCIsIFtdKS5ydW4oW1wiJHRlbXBsYXRlQ2FjaGVcIiwgZnVuY3Rpb24oJHRlbXBsYXRlQ2FjaGUpIHtcbiAgJHRlbXBsYXRlQ2FjaGUucHV0KFwibW9kdWxlcy9wdWJsaWMvYWJ1c2UvYWJ1c2UudHBsLmh0bWxcIixcbiAgICBcIjxkaXYgY2xhc3M9XFxcIm1vZGFsLWhlYWRlclxcXCI+XFxuXCIgK1xuICAgIFwiICA8YnV0dG9uIHR5cGU9XFxcImJ1dHRvblxcXCIgY2xhc3M9XFxcImNsb3NlXFxcIiBuZy1jbGljaz1cXFwiY2FuY2VsKClcXFwiPjxzcGFuIGFyaWEtaGlkZGVuPVxcXCJ0cnVlXFxcIj4mdGltZXM7PC9zcGFuPjxzcGFuIGNsYXNzPVxcXCJzci1vbmx5XFxcIj5DbG9zZTwvc3Bhbj48L2J1dHRvbj5cXG5cIiArXG4gICAgXCIgIDxoMyBjbGFzcz1cXFwibW9kYWwtdGl0bGVcXFwiPkNvbnRhY3QgVXM8L2gzPlxcblwiICtcbiAgICBcIjwvZGl2PlxcblwiICtcbiAgICBcIjxkaXYgY2xhc3M9XFxcIm1vZGFsLWJvZHlcXFwiPlxcblwiICtcbiAgICBcIiAgPGZvcm0gbmFtZT1cXFwiYWJ1c2VGb3JtXFxcIiBjbGFzcz1cXFwiY29udGFjdC1mb3JtIGZvcm0taG9yaXpvbnRhbFxcXCIgcm9sZT1cXFwiZm9ybVxcXCIgbm92YWxpZGF0ZT5cXG5cIiArXG4gICAgXCIgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCIgbmctY2xhc3M9XFxcInsnaGFzLWVycm9yJzogaGFzRXJyb3IoYWJ1c2VGb3JtLm1lc3NhZ2UpLCAnaGFzLWZlZWRiYWNrJzogaGFzRXJyb3IoYWJ1c2VGb3JtLm1lc3NhZ2UpfVxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgPGxhYmVsIGZvcj1cXFwibWVzc2FnZVxcXCIgY2xhc3M9XFxcImNvbC1zbS0yIGNvbnRyb2wtbGFiZWxcXFwiPk1lc3NhZ2U6PC9sYWJlbD5cXG5cIiArXG4gICAgXCIgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtc20tMTBcXFwiPlxcblwiICtcbiAgICBcIiAgICAgICAgPHRleHRhcmVhIGlkPVxcXCJtZXNzYWdlXFxcIiBuYW1lPVxcXCJtZXNzYWdlXFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBwbGFjZWhvbGRlcj1cXFwiV2hhdCdzIG9uIHlvdXIgbWluZD9cXFwiIHJvd3M9XFxcIjNcXFwiIG1heGxlbmd0aD1cXFwiMjAwXFxcIiBuZy1tb2RlbD1cXFwiYWJ1c2VNZXNzYWdlXFxcIiByZXF1aXJlZD48L3RleHRhcmVhPlxcblwiICtcbiAgICBcIiAgICAgICAgPHNtYWxsIGNsYXNzPVxcXCJpbnB1dC1lcnJvclxcXCIgbmctc2hvdz1cXFwiaGFzUHJvcGVydHlFcnJvcihhYnVzZUZvcm0ubWVzc2FnZSwgJ3JlcXVpcmVkJylcXFwiPlJlcXVpcmVkPC9zbWFsbD5cXG5cIiArXG4gICAgXCIgICAgICAgIDxzbWFsbCBjbGFzcz1cXFwiaW5wdXQtZXJyb3JcXFwiIG5nLXNob3c9XFxcImhhc1Byb3BlcnR5RXJyb3IoYWJ1c2VGb3JtLm1lc3NhZ2UsICdtYXhsZW5ndGgnKVxcXCI+VG9vIExvbmc8L3NtYWxsPlxcblwiICtcbiAgICBcIiAgICAgICAgPHNwYW4gbmctc2hvdz1cXFwiaGFzRXJyb3IoYWJ1c2VGb3JtLm1lc3NhZ2UpXFxcIiBjbGFzcz1cXFwiZ2x5cGhpY29uIGdseXBoaWNvbi1yZW1vdmUgZm9ybS1jb250cm9sLWZlZWRiYWNrXFxcIj48L3NwYW4+XFxuXCIgK1xuICAgIFwiICAgICAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICAgIDwvZGl2PlxcblwiICtcbiAgICBcIiAgPC9mb3JtPlxcblwiICtcbiAgICBcIjwvZGl2PlxcblwiICtcbiAgICBcIjxkaXYgY2xhc3M9XFxcIm1vZGFsLWZvb3RlclxcXCI+XFxuXCIgK1xuICAgIFwiICA8YnV0dG9uIGNsYXNzPVxcXCJidG4gYnRuLWRlZmF1bHRcXFwiIG5nLWNsaWNrPVxcXCJjYW5jZWwoKVxcXCI+Q2FuY2VsPC9idXR0b24+XFxuXCIgK1xuICAgIFwiICA8YnV0dG9uIGNsYXNzPVxcXCJidG4gYnRuLXByaW1hcnlcXFwiIG5nLWRpc2FibGVkPVxcXCJhYnVzZUZvcm0uJHByaXN0aW5lIHx8IGFidXNlRm9ybS4kaW52YWxpZFxcXCIgbmctY2xpY2s9XFxcImNvbnRhY3RVcyhhYnVzZU1lc3NhZ2UpXFxcIj5TZW5kPC9idXR0b24+XFxuXCIgK1xuICAgIFwiPC9kaXY+XCIpO1xufV0pO1xuXG5hbmd1bGFyLm1vZHVsZShcIm1vZHVsZXMvcHVibGljL2ZhcS9mYXEudHBsLmh0bWxcIiwgW10pLnJ1bihbXCIkdGVtcGxhdGVDYWNoZVwiLCBmdW5jdGlvbigkdGVtcGxhdGVDYWNoZSkge1xuICAkdGVtcGxhdGVDYWNoZS5wdXQoXCJtb2R1bGVzL3B1YmxpYy9mYXEvZmFxLnRwbC5odG1sXCIsXG4gICAgXCI8ZGl2IGNsYXNzPVxcXCJjb250YWluZXIgZmFxLWNvbnRhaW5lclxcXCI+XFxuXCIgK1xuICAgIFwiICA8ZGl2IGNsYXNzPVxcXCJwYWdlLWhlYWRlclxcXCI+PGgyPkZBUTwvaDI+PC9kaXY+XFxuXCIgK1xuICAgIFwiICA8ZGl2IGNsYXNzPVxcXCJyb3dcXFwiPlxcblwiICtcbiAgICBcIiAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtbWQtMyBjb2x1bW4gdG9waWMtY29sdW1uXFxcIj5cXG5cIiArXG4gICAgXCIgICAgICA8dWwgY2xhc3M9XFxcIm5hdiBuYXYtcGlsbHMgbmF2LXN0YWNrZWRcXFwiPlxcblwiICtcbiAgICBcIiAgICAgICAgPGxpPjxhIG5nLWNsYXNzPVxcXCJ7J3NlbGVjdGVkLXRvcGljJzogaXNTdGF0ZSgncHVibGljLmZhcS5nZW5lcmFsJyl9XFxcIiB1aS1zcmVmPVxcXCJwdWJsaWMuZmFxLmdlbmVyYWxcXFwiPjxpIGNsYXNzPVxcXCJmYSBmYS1jaGV2cm9uLXJpZ2h0IGZhLWZ3XFxcIj48L2k+IEdlbmVyYWw8L2E+PC9saT5cXG5cIiArXG4gICAgXCIgICAgICAgIDxsaT48YSBuZy1jbGFzcz1cXFwieydzZWxlY3RlZC10b3BpYyc6IGlzU3RhdGUoJ3B1YmxpYy5mYXEucGlja2VtJyl9XFxcIiB1aS1zcmVmPVxcXCJwdWJsaWMuZmFxLnBpY2tlbVxcXCI+PGkgY2xhc3M9XFxcImZhIGZhLWNoZXZyb24tcmlnaHQgZmEtZndcXFwiPjwvaT4gUGljaydlbSBMZWFndWVzPC9hPjwvbGk+XFxuXCIgK1xuICAgIFwiICAgICAgICA8bGk+PGEgbmctY2xhc3M9XFxcInsnc2VsZWN0ZWQtdG9waWMnOiBpc1N0YXRlKCdwdWJsaWMuZmFxLnN1cnZpdm9yJyl9XFxcIiB1aS1zcmVmPVxcXCJwdWJsaWMuZmFxLnN1cnZpdm9yXFxcIj48aSBjbGFzcz1cXFwiZmEgZmEtY2hldnJvbi1yaWdodCBmYS1md1xcXCI+PC9pPiBTdXJ2aXZvciBMZWFndWVzPC9hPjwvbGk+XFxuXCIgK1xuICAgIFwiICAgICAgPC91bD5cXG5cIiArXG4gICAgXCIgICAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICAgIDxkaXYgY2xhc3M9XFxcImNvbC1tZC05XFxcIj5cXG5cIiArXG4gICAgXCIgICAgICA8ZGl2IGNsYXNzPVxcXCJmYXEtc2VjdGlvblxcXCIgdWktdmlldz1cXFwiZmFxQ29udGVudFxcXCI+PC9kaXY+XFxuXCIgK1xuICAgIFwiICAgIDwvZGl2PlxcblwiICtcbiAgICBcIiAgPC9kaXY+XFxuXCIgK1xuICAgIFwiPC9kaXY+XFxuXCIgK1xuICAgIFwiICBcIik7XG59XSk7XG5cbmFuZ3VsYXIubW9kdWxlKFwibW9kdWxlcy9wdWJsaWMvZmFxL2dlbmVyYWwvZmFxLmdlbmVyYWwudHBsLmh0bWxcIiwgW10pLnJ1bihbXCIkdGVtcGxhdGVDYWNoZVwiLCBmdW5jdGlvbigkdGVtcGxhdGVDYWNoZSkge1xuICAkdGVtcGxhdGVDYWNoZS5wdXQoXCJtb2R1bGVzL3B1YmxpYy9mYXEvZ2VuZXJhbC9mYXEuZ2VuZXJhbC50cGwuaHRtbFwiLFxuICAgIFwiPGRpdiBjbGFzcz1cXFwic2VjdGlvblxcXCI+XFxuXCIgK1xuICAgIFwiICA8aDMgY2xhc3M9XFxcInNlY3Rpb24taGVhZGVyXFxcIj5HZW5lcmFsPC9oMz5cXG5cIiArXG4gICAgXCIgIDxhY2NvcmRpb24gY2xvc2Utb3RoZXJzPVxcXCJmYWxzZVxcXCI+XFxuXCIgK1xuICAgIFwiICAgIDxhY2NvcmRpb24tZ3JvdXAgaGVhZGluZz1cXFwiV2hpY2ggc3BvcnRzIGFyZSBhdmFpbGFibGU/XFxcIj5cXG5cIiArXG4gICAgXCIgICAgICBORkwsIE5CQSwgTkhMLCBNTEIgb3IgTUxTLlxcblwiICtcbiAgICBcIiAgICA8L2FjY29yZGlvbi1ncm91cD5cXG5cIiArXG4gICAgXCIgICAgPGFjY29yZGlvbi1ncm91cCBoZWFkaW5nPVxcXCJIb3cgbXVjaCBkb2VzIGl0IGNvc3Q/XFxcIj5cXG5cIiArXG4gICAgXCIgICAgICBaaXAuIFppbGNoLiBOYWRhLiBGcmVlZWVlZWVlZWVlZS4uLlxcblwiICtcbiAgICBcIiAgICA8L2FjY29yZGlvbi1ncm91cD5cXG5cIiArXG4gICAgXCIgICAgPGFjY29yZGlvbi1ncm91cCBoZWFkaW5nPVxcXCJUaGUgc2Vhc29uIGhhcyBhbHJlYWR5IHN0YXJ0ZWQsIGNhbiBJIHN0aWxsIHBsYXk/XFxcIj5cXG5cIiArXG4gICAgXCIgICAgICBZZXAuIFRoZXJl4oCZcyBhbHdheXMgYW4gb3BlbiBsZWFndWUgdG8gPGEgbmctY2xpY2s9XFxcImpvaW5MZWFndWUoc2VsZWN0ZWRTZWFzb25JZClcXFwiPmpvaW48L2E+IG9yIDxhIG5nLWNsaWNrPVxcXCJjcmVhdGVMZWFndWUoc2VsZWN0ZWRTZWFzb25JZClcXFwiPmNyZWF0ZTwvYT4geW91ciBvd24gbGVhZ3VlIHRvIHN0YXJ0IGFueXRpbWUgZHVyaW5nIHRoZSBzZWFzb24uXFxuXCIgK1xuICAgIFwiICAgIDwvYWNjb3JkaW9uLWdyb3VwPlxcblwiICtcbiAgICBcIiAgICA8YWNjb3JkaW9uLWdyb3VwIGhlYWRpbmc9XFxcIkhvdyBtYW55IHRpbWVzIGNhbiBJIGpvaW4gYSBsZWFndWU/XFxcIj5cXG5cIiArXG4gICAgXCIgICAgICBBcyBtdWNoIGFzIHRoZSBjb21taXNoIGFsbG93cyAod2l0aCBhIG1heCBvZiAxMCB0aW1lcykuXFxuXCIgK1xuICAgIFwiICAgIDwvYWNjb3JkaW9uLWdyb3VwPlxcblwiICtcbiAgICBcIiAgICA8YWNjb3JkaW9uLWdyb3VwIGhlYWRpbmc9XFxcIldoZW4gaXMgdGhlIGRlYWRsaW5lIHRvIG1ha2UgbXkgcGljayhzKT9cXFwiPlxcblwiICtcbiAgICBcIiAgICAgIEp1c3QgbWFrZSBhIHBpY2sgYmVmb3JlIHRoZSBnYW1lIHN0YXJ0cy5cXG5cIiArXG4gICAgXCIgICAgPC9hY2NvcmRpb24tZ3JvdXA+XFxuXCIgK1xuICAgIFwiICAgIDxhY2NvcmRpb24tZ3JvdXAgaGVhZGluZz1cXFwiQ2FuIHRoZSBjb21taXNoIG1ha2UgcGlja3MgZm9yIG1lP1xcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgTmVnYXRpdmUuXFxuXCIgK1xuICAgIFwiICAgIDwvYWNjb3JkaW9uLWdyb3VwPlxcblwiICtcbiAgICBcIiAgICA8YWNjb3JkaW9uLWdyb3VwIGhlYWRpbmc9XFxcIkNhbiBJIHNlZSB0aGUgcGlja3Mgb2Ygb3RoZXJzIGluIG15IGxlYWd1ZT9cXFwiPlxcblwiICtcbiAgICBcIiAgICAgIE9ubHkgYWZ0ZXIgdGhlIGdhbWVzIGhhdmUgc3RhcnRlZC5cXG5cIiArXG4gICAgXCIgICAgPC9hY2NvcmRpb24tZ3JvdXA+XFxuXCIgK1xuICAgIFwiICAgIDxhY2NvcmRpb24tZ3JvdXAgaGVhZGluZz1cXFwiQ2FuIHRoZSBjb21taXNoIHNlZSBteSBwaWNrcz9cXFwiPlxcblwiICtcbiAgICBcIiAgICAgIE9ubHkgYWZ0ZXIgdGhlIGdhbWVzIGhhdmUgc3RhcnRlZC5cXG5cIiArXG4gICAgXCIgICAgPC9hY2NvcmRpb24tZ3JvdXA+XFxuXCIgK1xuICAgIFwiICAgIDxhY2NvcmRpb24tZ3JvdXAgaGVhZGluZz1cXFwiQ2FuIEkgY3JlYXRlIG15IG93biBsZWFndWU/XFxcIj5cXG5cIiArXG4gICAgXCIgICAgICBZb3UgYmV0Y2hhLiA8YSBuZy1jbGljaz1cXFwiY3JlYXRlTGVhZ3VlKHNlbGVjdGVkU2Vhc29uSWQpXFxcIj5DcmVhdGU8L2E+IGEgU3Vydml2b3Igb3IgUGljaydlbSBsZWFndWUgYW55dGltZS5cXG5cIiArXG4gICAgXCIgICAgPC9hY2NvcmRpb24tZ3JvdXA+XFxuXCIgK1xuICAgIFwiICAgIDxhY2NvcmRpb24tZ3JvdXAgaGVhZGluZz1cXFwiV2hhdCBpcyB0aGUgZGlmZmVyZW5jZSBiZXR3ZWVuIGEgcHVibGljIGFuZCBwcml2YXRlIGxlYWd1ZT9cXFwiPlxcblwiICtcbiAgICBcIiAgICAgIFB1YmxpYyBsZWFndWVzIGFsbG93IGFueW9uZSB0byBqb2luLiBQcml2YXRlIGxlYWd1ZXMgcmVxdWlyZSBhbiBpbnZpdGF0aW9uIGZyb20gdGhlIGNvbW1pc2guXFxuXCIgK1xuICAgIFwiICAgIDwvYWNjb3JkaW9uLWdyb3VwPlxcblwiICtcbiAgICBcIiAgICA8YWNjb3JkaW9uLWdyb3VwIGhlYWRpbmc9XFxcIkhvdyBkbyBJIGludml0ZSBteSBmcmllbmRzIHRvIGpvaW4gbXkgbGVhZ3VlP1xcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgT24geW91ciBsZWFndWUgcGFnZSB5b3XigJlsbCBmaW5kIGFuICdJbnZpdGUnIGJ1dHRvbi4gVXNlIGl0LiBZb3XigJlsbCBqdXN0IG5lZWQgdGhlaXIgZW1haWwgYWRkcmVzcy5cXG5cIiArXG4gICAgXCIgICAgPC9hY2NvcmRpb24tZ3JvdXA+XFxuXCIgK1xuICAgIFwiICAgIDxhY2NvcmRpb24tZ3JvdXAgaGVhZGluZz1cXFwiSG93IG1hbnkgZnJpZW5kcyBjYW4gam9pbiBteSBsZWFndWU/XFxcIj5cXG5cIiArXG4gICAgXCIgICAgICBBcyBtYW55IGFzIHlvdSBsaWtlLlxcblwiICtcbiAgICBcIiAgICA8L2FjY29yZGlvbi1ncm91cD5cXG5cIiArXG4gICAgXCIgICAgPGFjY29yZGlvbi1ncm91cCBoZWFkaW5nPVxcXCJDYW4gSSBzZXQgYSBsaW1pdCBvbiBob3cgbWFueSB0aW1lcyBhIGZyaWVuZCBjYW4gam9pbiBteSBsZWFndWU/XFxcIj5cXG5cIiArXG4gICAgXCIgICAgICBZb3Ugc3VyZSBjYW4uIDEgLSAxMCB0aW1lcy5cXG5cIiArXG4gICAgXCIgICAgPC9hY2NvcmRpb24tZ3JvdXA+XFxuXCIgK1xuICAgIFwiICAgIDxhY2NvcmRpb24tZ3JvdXAgaGVhZGluZz1cXFwiSG93IGRvIEkgc3RvcCBwZW9wbGUgZnJvbSBqb2luaW5nIG15IGxlYWd1ZT9cXFwiPlxcblwiICtcbiAgICBcIiAgICAgIENoYW5nZSB0aGUgbGVhZ3VlIHRvIHByaXZhdGUuXFxuXCIgK1xuICAgIFwiICAgIDwvYWNjb3JkaW9uLWdyb3VwPlxcblwiICtcbiAgICBcIiAgICA8YWNjb3JkaW9uLWdyb3VwIGhlYWRpbmc9XFxcIkhvdyBjYW4gSSByZW1vdmUgcGVvcGxlIGZyb20gbXkgbGVhZ3VlP1xcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgWW91IGNhbuKAmXQgYnV0IHlvdSBjYW4gZGVhY3RpdmF0ZSAob3IgcmVhY3RpdmF0ZSkgdGhlaXIgdGVhbS4gQSBkZWFjdGl2YXRlZCB0ZWFtIGlzIGhpZGRlbiBmcm9tIHZpZXcgYW5kIGNhbuKAmXQgbWFrZSBhbnkgcGlja3MuXFxuXCIgK1xuICAgIFwiICAgIDwvYWNjb3JkaW9uLWdyb3VwPlxcblwiICtcbiAgICBcIiAgICA8YWNjb3JkaW9uLWdyb3VwIGhlYWRpbmc9XFxcIkNhbiBJIGVkaXQgbXkgbGVhZ3VlP1xcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgWWVzLCBidXQgeW91IGNhbid0IGNoYW5nZSB0aGUgc3BvcnQsIHN0YXJ0IHdlZWsgb3IgZm9ybWF0IChTdXJ2aXZvciBvciBQaWNrJ2VtKSBhZnRlciB0aGUgbGVhZ3VlIHN0YXJ0cy5cXG5cIiArXG4gICAgXCIgICAgPC9hY2NvcmRpb24tZ3JvdXA+XFxuXCIgK1xuICAgIFwiICAgIDxhY2NvcmRpb24tZ3JvdXAgaGVhZGluZz1cXFwiQ2FuIEkgZWRpdCBhIHRlYW0gbmFtZSBpbiBteSBsZWFndWU/XFxcIj5cXG5cIiArXG4gICAgXCIgICAgICBZZXMsIHRoZSB0ZWFtJ3MgY29hY2ggb3IgdGhlIGNvbW1pc2ggY2FuIGVkaXQgYSB0ZWFtIG5hbWUgYXQgYW55IHRpbWUuXFxuXCIgK1xuICAgIFwiICAgIDwvYWNjb3JkaW9uLWdyb3VwPlxcblwiICtcbiAgICBcIiAgICA8YWNjb3JkaW9uLWdyb3VwIGhlYWRpbmc9XFxcIldoYXQgaWYgaSBzdGlsbCBoYXZlIHF1ZXN0aW9ucz9cXFwiPlxcblwiICtcbiAgICBcIiAgICAgIEZpbmQgdGhlIENvbnRhY3QgVXMgYnV0dG9uLiBXZSdsbCBnZXQgcmlnaHQgYmFjayB0byB5b3UuXFxuXCIgK1xuICAgIFwiICAgIDwvYWNjb3JkaW9uLWdyb3VwPlxcblwiICtcbiAgICBcIiAgPC9hY2NvcmRpb24+XFxuXCIgK1xuICAgIFwiPC9kaXY+XCIpO1xufV0pO1xuXG5hbmd1bGFyLm1vZHVsZShcIm1vZHVsZXMvcHVibGljL2ZhcS9waWNrZW0vZmFxLnBpY2tlbS50cGwuaHRtbFwiLCBbXSkucnVuKFtcIiR0ZW1wbGF0ZUNhY2hlXCIsIGZ1bmN0aW9uKCR0ZW1wbGF0ZUNhY2hlKSB7XG4gICR0ZW1wbGF0ZUNhY2hlLnB1dChcIm1vZHVsZXMvcHVibGljL2ZhcS9waWNrZW0vZmFxLnBpY2tlbS50cGwuaHRtbFwiLFxuICAgIFwiPGRpdiBjbGFzcz1cXFwic2VjdGlvblxcXCI+XFxuXCIgK1xuICAgIFwiICA8aDMgY2xhc3M9XFxcInNlY3Rpb24taGVhZGVyXFxcIj5QaWNrJ2VtIExlYWd1ZXM8L2gzPlxcblwiICtcbiAgICBcIiAgPGFjY29yZGlvbiBjbG9zZS1vdGhlcnM9XFxcImZhbHNlXFxcIj5cXG5cIiArXG4gICAgXCIgICAgPGFjY29yZGlvbi1ncm91cCBoZWFkaW5nPVxcXCJIb3cgZG8gSSBwbGF5P1xcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgPG9sPlxcblwiICtcbiAgICBcIiAgICAgICAgPGxpPjxhIG5nLWNsaWNrPVxcXCJqb2luTGVhZ3VlKHNlbGVjdGVkU2Vhc29uSWQpXFxcIj5Kb2luPC9hPiBhbiBleGlzdGluZyBQaWNrJ2VtIGxlYWd1ZSBvciA8YSBuZy1jbGljaz1cXFwiY3JlYXRlTGVhZ3VlKHNlbGVjdGVkU2Vhc29uSWQpXFxcIj5jcmVhdGU8L2E+IHlvdXIgb3duLjwvbGk+XFxuXCIgK1xuICAgIFwiICAgICAgICA8bGk+UGljayBsb3NlcnMgZWFjaCB3ZWVrLjwvbGk+XFxuXCIgK1xuICAgIFwiICAgICAgICA8bGk+Um9vdCBmb3IgeW91ciBsb3NlcnMgdG8gbG9zZS4uLmR1aDwvbGk+XFxuXCIgK1xuICAgIFwiICAgICAgICA8bGk+SGF2ZSBmdW4hPC9saT5cXG5cIiArXG4gICAgXCIgICAgICA8L29sPlxcblwiICtcbiAgICBcIiAgICA8L2FjY29yZGlvbi1ncm91cD5cXG5cIiArXG4gICAgXCIgICAgPGFjY29yZGlvbi1ncm91cCBoZWFkaW5nPVxcXCJIb3cgZG8gSSB3aW4/XFxcIj5cXG5cIiArXG4gICAgXCIgICAgICBQaWNrIHRoZSBtb3N0IGxvc2VycyBmb3IgdGhlIHdlZWsgYW5kIHdpbiB0aGUgd2Vlay5cXG5cIiArXG4gICAgXCIgICAgPC9hY2NvcmRpb24tZ3JvdXA+XFxuXCIgK1xuICAgIFwiICAgIDxhY2NvcmRpb24tZ3JvdXAgaGVhZGluZz1cXFwiV2hhdCBkbyBJIHdpbj9cXFwiPlxcblwiICtcbiAgICBcIiAgICAgIFRoYXQgaXMgYmV0d2VlbiB5b3UgYW5kIHRoZSBjb21taXNoIG9mIHRoZSBsZWFndWUuIEhvd2V2ZXIsIHBsZWFzZSBiZSBjYXJlZnVsIHdoZW4gZGVhbGluZyB3aXRoIG1vbmV5LiBEb27igJl0IHNlbmQgbW9uZXkgdG8gYW55b25lIHlvdSBkb27igJl0IGtub3cuIENvbW1vbiBzZW5zZSwgcGxlYXNlLlxcblwiICtcbiAgICBcIiAgICA8L2FjY29yZGlvbi1ncm91cD5cXG5cIiArXG4gICAgXCIgICAgPGFjY29yZGlvbi1ncm91cCBoZWFkaW5nPVxcXCJIb3cgbWFueSBsb3NlcnMgZG8gSSBwaWNrIGVhY2ggd2Vlaz9cXFwiPlxcblwiICtcbiAgICBcIiAgICAgIFRoYXQgaXMgdXAgdG8gdGhlIGNvbW1pc2guIENoZWNrIHlvdXIgbGVhZ3VlIHJ1bGVzLlxcblwiICtcbiAgICBcIiAgICA8L2FjY29yZGlvbi1ncm91cD5cXG5cIiArXG4gICAgXCIgICAgPGFjY29yZGlvbi1ncm91cCBoZWFkaW5nPVxcXCJXaGVuIGlzIHRoZSBkZWFkbGluZSB0byBtYWtlIG15IHBpY2tzP1xcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgQXMgbG9uZyBhcyB0aGUgZ2FtZSBoYXNuJ3Qgc3RhcnRlZCwgeW91IGNhbiBtYWtlIGEgcGljayBmb3IgdGhhdCBnYW1lLlxcblwiICtcbiAgICBcIiAgICA8L2FjY29yZGlvbi1ncm91cD5cXG5cIiArXG4gICAgXCIgICAgPGFjY29yZGlvbi1ncm91cCBoZWFkaW5nPVxcXCJDYW4gSSBwaWNrIHRoZSBzYW1lIGxvc2VyIHR3aWNlP1xcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgWWVzIHNpci5cXG5cIiArXG4gICAgXCIgICAgPC9hY2NvcmRpb24tZ3JvdXA+XFxuXCIgK1xuICAgIFwiICAgIDxhY2NvcmRpb24tZ3JvdXAgaGVhZGluZz1cXFwiRG8gdGllcyBjb3VudCBhcyBhIGxvc3M/XFxcIj5cXG5cIiArXG4gICAgXCIgICAgICBObyBtYSdhbS4gQnV0LCBmb3IgTkhMLCBvdmVydGltZSBvciBzaG9vdG91dCBsb3NzZXMgd2lsbCBiZSB0cmVhdGVkIGFzIGEgbG9zcyBhbmQgbm90IGEgdGllLlxcblwiICtcbiAgICBcIiAgICA8L2FjY29yZGlvbi1ncm91cD5cXG5cIiArXG4gICAgXCIgICAgPGFjY29yZGlvbi1ncm91cCBoZWFkaW5nPVxcXCJXaGVuIGlzIHRoZSBkZWFkbGluZSB0byBqb2luIGEgUGljaydlbSBsZWFndWU/XFxcIj5cXG5cIiArXG4gICAgXCIgICAgICA8YSBuZy1jbGljaz1cXFwiam9pbkxlYWd1ZShzZWxlY3RlZFNlYXNvbklkKVxcXCI+Sm9pbjwvYT4gYW55dGltZS5cXG5cIiArXG4gICAgXCIgICAgPC9hY2NvcmRpb24tZ3JvdXA+XFxuXCIgK1xuICAgIFwiICAgIDxhY2NvcmRpb24tZ3JvdXAgaGVhZGluZz1cXFwiV2hhdCBpZiBJIGZhaWwgdG8gbWFrZSBwaWNrcyBmb3IgYSB3ZWVrP1xcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgSSdtIGd1ZXNzaW5nIHlvdSB3b24ndCB3aW4gdGhhdCB3ZWVrLlxcblwiICtcbiAgICBcIiAgICA8L2FjY29yZGlvbi1ncm91cD5cXG5cIiArXG4gICAgXCIgIDwvYWNjb3JkaW9uPlxcblwiICtcbiAgICBcIjwvZGl2PlwiKTtcbn1dKTtcblxuYW5ndWxhci5tb2R1bGUoXCJtb2R1bGVzL3B1YmxpYy9mYXEvc3Vydml2b3IvZmFxLnN1cnZpdm9yLnRwbC5odG1sXCIsIFtdKS5ydW4oW1wiJHRlbXBsYXRlQ2FjaGVcIiwgZnVuY3Rpb24oJHRlbXBsYXRlQ2FjaGUpIHtcbiAgJHRlbXBsYXRlQ2FjaGUucHV0KFwibW9kdWxlcy9wdWJsaWMvZmFxL3N1cnZpdm9yL2ZhcS5zdXJ2aXZvci50cGwuaHRtbFwiLFxuICAgIFwiPGRpdiBjbGFzcz1cXFwic2VjdGlvblxcXCI+XFxuXCIgK1xuICAgIFwiICA8aDMgY2xhc3M9XFxcInNlY3Rpb24taGVhZGVyXFxcIj5TdXJ2aXZvciBMZWFndWVzPC9oMz5cXG5cIiArXG4gICAgXCIgIDxhY2NvcmRpb24gY2xvc2Utb3RoZXJzPVxcXCJmYWxzZVxcXCI+XFxuXCIgK1xuICAgIFwiICAgIDxhY2NvcmRpb24tZ3JvdXAgaGVhZGluZz1cXFwiSG93IGRvIEkgcGxheT9cXFwiPlxcblwiICtcbiAgICBcIiAgICAgIDxvbD5cXG5cIiArXG4gICAgXCIgICAgICAgIDxsaT48YSBuZy1jbGljaz1cXFwiam9pbkxlYWd1ZShzZWxlY3RlZFNlYXNvbklkKVxcXCI+Sm9pbjwvYT4gYW4gZXhpc3RpbmcgU3Vydml2b3IgbGVhZ3VlIG9yIDxhIG5nLWNsaWNrPVxcXCJjcmVhdGVMZWFndWUoc2VsZWN0ZWRTZWFzb25JZClcXFwiPmNyZWF0ZTwvYT4geW91ciBvd24uPC9saT5cXG5cIiArXG4gICAgXCIgICAgICAgIDxsaT5QaWNrIGEgZGlmZmVyZW50IGxvc2VyIGVhY2ggd2Vlay48L2xpPlxcblwiICtcbiAgICBcIiAgICAgICAgPGxpPlJvb3QgZm9yIHlvdXIgbG9zZXIgdG8gbG9zZS4uLmR1aDwvbGk+XFxuXCIgK1xuICAgIFwiICAgICAgICA8bGk+SWYgeW91IGFyZSB3cm9uZywgeW91IGFyZSBvdXQuPC9saT5cXG5cIiArXG4gICAgXCIgICAgICAgIDxsaT5JZiB5b3UgYXJlIHJpZ2h0LCB5b3UgbW92ZSBvbiB0byB0aGUgbmV4dCB3ZWVrLjwvbGk+XFxuXCIgK1xuICAgIFwiICAgICAgICA8bGk+SGF2ZSBmdW4hPC9saT5cXG5cIiArXG4gICAgXCIgICAgICA8L29sPlxcblwiICtcbiAgICBcIiAgICA8L2FjY29yZGlvbi1ncm91cD5cXG5cIiArXG4gICAgXCIgICAgPGFjY29yZGlvbi1ncm91cCBoZWFkaW5nPVxcXCJIb3cgZG8gSSB3aW4/XFxcIj5cXG5cIiArXG4gICAgXCIgICAgICBUaGUgdGVhbSB3aXRoIHRoZSBtb3N0IGxvc2VycyBhdCB0aGUgZW5kIG9mIHRoZSBzZWFzb24gd2lucy5cXG5cIiArXG4gICAgXCIgICAgPC9hY2NvcmRpb24tZ3JvdXA+XFxuXCIgK1xuICAgIFwiICAgIDxhY2NvcmRpb24tZ3JvdXAgaGVhZGluZz1cXFwiV2hhdCBkbyBJIHdpbj9cXFwiPlxcblwiICtcbiAgICBcIiAgICAgIFRoYXQgaXMgYmV0d2VlbiB5b3UgYW5kIHRoZSBjb21taXNoIG9mIHRoZSBsZWFndWUuIEhvd2V2ZXIsIHBsZWFzZSBiZSBjYXJlZnVsIHdoZW4gZGVhbGluZyB3aXRoIG1vbmV5LiBEb27igJl0IHNlbmQgbW9uZXkgdG8gYW55b25lIHlvdSBkb27igJl0IGtub3cuIENvbW1vbiBzZW5zZSwgcGxlYXNlLlxcblwiICtcbiAgICBcIiAgICA8L2FjY29yZGlvbi1ncm91cD5cXG5cIiArXG4gICAgXCIgICAgPGFjY29yZGlvbi1ncm91cCBoZWFkaW5nPVxcXCJXaGVuIGlzIHRoZSBkZWFkbGluZSB0byBtYWtlIG15IHBpY2s/XFxcIj5cXG5cIiArXG4gICAgXCIgICAgICBBcyBsb25nIGFzIGEgZ2FtZSBoYXNuJ3Qgc3RhcnRlZCwgeW91IGNhbiBtYWtlIGEgcGljayBmb3IgdGhhdCBnYW1lLiBCdXQgbWFrZSBzdXJlIHlvdSBtYWtlIGEgcGljayBiZWZvcmUgdGhlIHdlZWsgZW5kcy5cXG5cIiArXG4gICAgXCIgICAgPC9hY2NvcmRpb24tZ3JvdXA+XFxuXCIgK1xuICAgIFwiICAgIDxhY2NvcmRpb24tZ3JvdXAgaGVhZGluZz1cXFwiQ2FuIEkgcGljayB0aGUgc2FtZSBsb3NlciB0d2ljZT9cXFwiPlxcblwiICtcbiAgICBcIiAgICAgIE5vcGUuIFVubGVzcyB5b3UgbWFrZSB0aGUgcGxheW9mZnMgd2hlcmUgYWxsIGxvc2VycyBhcmUgb25jZSBhZ2FpbiBhdmFpbGFibGUgdG8gcGljay5cXG5cIiArXG4gICAgXCIgICAgPC9hY2NvcmRpb24tZ3JvdXA+XFxuXCIgK1xuICAgIFwiICAgIDxhY2NvcmRpb24tZ3JvdXAgaGVhZGluZz1cXFwiRG8gdGllcyBjb3VudCBhcyBhIGxvc3M/XFxcIj5cXG5cIiArXG4gICAgXCIgICAgICBOZWdhdGl2ZS4gQnV0LCBpbiBzb21lIFN1cnZpdm9yIGxlYWd1ZXMgeW91IHdpbGwgbm90IGdldCBlbGltaW5hdGVkIGZvciBhIHRpZS4gQ2hlY2sgeW91ciBsZWFndWUgcnVsZXMuXFxuXCIgK1xuICAgIFwiICAgIDwvYWNjb3JkaW9uLWdyb3VwPlxcblwiICtcbiAgICBcIiAgICA8YWNjb3JkaW9uLWdyb3VwIGhlYWRpbmc9XFxcIldoZW4gaXMgdGhlIGRlYWRsaW5lIHRvIGpvaW4gYSBTdXJ2aXZvciBsZWFndWU/XFxcIj5cXG5cIiArXG4gICAgXCIgICAgICA8YSBuZy1jbGljaz1cXFwiam9pbkxlYWd1ZShzZWxlY3RlZFNlYXNvbklkKVxcXCI+Sm9pbjwvYT4gYmVmb3JlIHRoZSBlbmQgb2YgdGhlIGxlYWd1ZSdzIGZpcnN0IHdlZWsuXFxuXCIgK1xuICAgIFwiICAgIDwvYWNjb3JkaW9uLWdyb3VwPlxcblwiICtcbiAgICBcIiAgICA8YWNjb3JkaW9uLWdyb3VwIGhlYWRpbmc9XFxcIldoYXQgaWYgSSBmYWlsIHRvIG1ha2UgYSBwaWNrIGZvciBhIHdlZWs/XFxcIj5cXG5cIiArXG4gICAgXCIgICAgICBQYWNrIHlvdXIgYmFncy4gWW91J3JlIGdvaW5nIGhvbWUuXFxuXCIgK1xuICAgIFwiICAgIDwvYWNjb3JkaW9uLWdyb3VwPlxcblwiICtcbiAgICBcIiAgPC9hY2NvcmRpb24+XFxuXCIgK1xuICAgIFwiPC9kaXY+XCIpO1xufV0pO1xuXG5hbmd1bGFyLm1vZHVsZShcIm1vZHVsZXMvcHVibGljL2hvbWUvaG9tZS50cGwuaHRtbFwiLCBbXSkucnVuKFtcIiR0ZW1wbGF0ZUNhY2hlXCIsIGZ1bmN0aW9uKCR0ZW1wbGF0ZUNhY2hlKSB7XG4gICR0ZW1wbGF0ZUNhY2hlLnB1dChcIm1vZHVsZXMvcHVibGljL2hvbWUvaG9tZS50cGwuaHRtbFwiLFxuICAgIFwiPGhlYWRlciBjbGFzcz1cXFwiaGVhZGVyXFxcIj5cXG5cIiArXG4gICAgXCIgIDxkaXYgY2xhc3M9XFxcInRleHQtdmVydGljYWwtY2VudGVyXFxcIj5cXG5cIiArXG4gICAgXCIgICAgPGgxPnt7dGFnbGluZX19PC9oMT5cXG5cIiArXG4gICAgXCIgICAgPGg0IGNsYXNzPVxcXCJ0YWdsaW5lXFxcIj5GcmVlIE5GTCwgTkJBLCBOSEwsIE1MQiBvciBNTFMgcGljaydlbSBhbmQgc3Vydml2b3IgbGVhZ3Vlcy48L2g0PlxcblwiICtcbiAgICBcIiAgICA8YnI+XFxuXCIgK1xuICAgIFwiICAgIDxhIGNsYXNzPVxcXCJjdGEgYnRuIGJ0bi1saWdodCBidG4tbGdcXFwiIHJvbGU9XFxcImJ1dHRvblxcXCIgbmctY2xpY2s9XFxcImpvaW5MZWFndWUoc2VsZWN0ZWRTZWFzb25JZClcXFwiPkpvaW4gYSBMZWFndWU8L2E+XFxuXCIgK1xuICAgIFwiICAgIDxhIGNsYXNzPVxcXCJjdGEgYnRuIGJ0bi1kYXJrIGJ0bi1sZ1xcXCIgcm9sZT1cXFwiYnV0dG9uXFxcIiBuZy1jbGljaz1cXFwiY3JlYXRlTGVhZ3VlKHNlbGVjdGVkU2Vhc29uSWQpXFxcIj5DcmVhdGUgYSBMZWFndWU8L2E+XFxuXCIgK1xuICAgIFwiICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgIDxkaXYgY2xhc3M9XFxcIm1vcmUtYXJyb3dcXFwiPlxcblwiICtcbiAgICBcIiAgICA8aSBjbGFzcz1cXFwiZmEgZmEtY2hldnJvbi1kb3duIGZhLTJ4XFxcIj48L2k+XFxuXCIgK1xuICAgIFwiICA8L2Rpdj5cXG5cIiArXG4gICAgXCI8L2hlYWRlcj5cXG5cIiArXG4gICAgXCI8c2VjdGlvbiBjbGFzcz1cXFwiYWJvdXRcXFwiPlxcblwiICtcbiAgICBcIiAgPGRpdiBjbGFzcz1cXFwiY29udGFpbmVyXFxcIj5cXG5cIiArXG4gICAgXCIgICAgPGRpdiBjbGFzcz1cXFwicm93XFxcIj5cXG5cIiArXG4gICAgXCIgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtbGctNiB0ZXh0LWNlbnRlciBmb3JtYXQtZGVzY1xcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgICA8aDI+UGljaydlbSBMZWFndWVzPC9oMj5cXG5cIiArXG4gICAgXCIgICAgICAgIDxwIGNsYXNzPVxcXCJsZWFkXFxcIj5QaWNrIG9uZSBvciBtb3JlIGxvc2VycyBlYWNoIHdlZWsuIE5vIGVsaW1pbmF0aW9uLiBUaGUgbW9zdCBjb3JyZWN0IHBpY2tzIGZvciB0aGUgd2VlayB3aW5zLjwvcD5cXG5cIiArXG4gICAgXCIgICAgICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgICAgICA8aHIgY2xhc3M9XFxcImZvcm1hdC1kaXZpZGVyXFxcIj5cXG5cIiArXG4gICAgXCIgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtbGctNiB0ZXh0LWNlbnRlciBmb3JtYXQtZGVzY1xcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgICA8aDI+U3Vydml2b3IgTGVhZ3VlczwvaDI+XFxuXCIgK1xuICAgIFwiICAgICAgICA8cCBjbGFzcz1cXFwibGVhZFxcXCI+UGljayBhIGRpZmZlcmVudCBsb3NlciBlYWNoIHdlZWsuIEdldCBvbmUgd3JvbmcsIGFuZCB5b3UncmUgZG9uZS4gVGhlIG1vc3QgY29ycmVjdCBwaWNrcyB3aW5zLjwvcD5cXG5cIiArXG4gICAgXCIgICAgICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgICAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICA8L2Rpdj5cXG5cIiArXG4gICAgXCI8L3NlY3Rpb24+XFxuXCIgK1xuICAgIFwiPHNlY3Rpb24gY2xhc3M9XFxcInNlcnZpY2VzIGJnLXByaW1hcnlcXFwiPlxcblwiICtcbiAgICBcIiAgPGRpdiBjbGFzcz1cXFwiY29udGFpbmVyXFxcIj5cXG5cIiArXG4gICAgXCIgICAgPGRpdiBjbGFzcz1cXFwicm93IHRleHQtY2VudGVyXFxcIj5cXG5cIiArXG4gICAgXCIgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtbGctMTAgY29sLWxnLW9mZnNldC0xXFxcIj5cXG5cIiArXG4gICAgXCIgICAgICAgIDxkaXYgY2xhc3M9XFxcInJvd1xcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1tZC0zIGNvbC1zbS02IGNvbC14cy0xMlxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwic2VydmljZS1pdGVtXFxcIj5cXG5cIiArXG4gICAgXCIgICAgICAgICAgICAgIDxoMT57e3N0YXRzLnBpY2tlbSozIHwgbnVtYmVyOjB9fTwvaDE+XFxuXCIgK1xuICAgIFwiICAgICAgICAgICAgICA8aDQ+PHN0cm9uZz5QaWNrJ2VtIExlYWd1ZXM8L3N0cm9uZz48L2g0PlxcblwiICtcbiAgICBcIiAgICAgICAgICAgIDwvZGl2PlxcblwiICtcbiAgICBcIiAgICAgICAgICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLW1kLTMgY29sLXNtLTYgY29sLXhzLTEyXFxcIj5cXG5cIiArXG4gICAgXCIgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJzZXJ2aWNlLWl0ZW1cXFwiPlxcblwiICtcbiAgICBcIiAgICAgICAgICAgICAgPGgxPnt7c3RhdHMuc3Vydml2b3IqMyB8IG51bWJlcjowfX08L2gxPlxcblwiICtcbiAgICBcIiAgICAgICAgICAgICAgPGg0PjxzdHJvbmc+U3Vydml2b3IgTGVhZ3Vlczwvc3Ryb25nPjwvaDQ+XFxuXCIgK1xuICAgIFwiICAgICAgICAgICAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICAgICAgICAgIDwvZGl2PlxcblwiICtcbiAgICBcIiAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtbWQtMyBjb2wtc20tNiBjb2wteHMtMTJcXFwiPlxcblwiICtcbiAgICBcIiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInNlcnZpY2UtaXRlbVxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgICAgICAgICA8aDE+e3tzdGF0cy50ZWFtcyozIHwgbnVtYmVyOjB9fTwvaDE+XFxuXCIgK1xuICAgIFwiICAgICAgICAgICAgICA8aDQ+PHN0cm9uZz5UZWFtczwvc3Ryb25nPjwvaDQ+XFxuXCIgK1xuICAgIFwiICAgICAgICAgICAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICAgICAgICAgIDwvZGl2PlxcblwiICtcbiAgICBcIiAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtbWQtMyBjb2wtc20tNiBjb2wteHMtMTJcXFwiPlxcblwiICtcbiAgICBcIiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInNlcnZpY2UtaXRlbVxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgICAgICAgICA8aDE+e3tzdGF0cy5waWNrcyozIHwgbnVtYmVyOjB9fTwvaDE+XFxuXCIgK1xuICAgIFwiICAgICAgICAgICAgICA8aDQ+PHN0cm9uZz5QaWNrczwvc3Ryb25nPjwvaDQ+XFxuXCIgK1xuICAgIFwiICAgICAgICAgICAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICAgICAgICAgIDwvZGl2PlxcblwiICtcbiAgICBcIiAgICAgICAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICAgICAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICAgIDwvZGl2PlxcblwiICtcbiAgICBcIiAgPC9kaXY+XFxuXCIgK1xuICAgIFwiPC9zZWN0aW9uPlxcblwiICtcbiAgICBcIjxhc2lkZSBjbGFzcz1cXFwiY2FsbC10by1hY3Rpb24gYmctaW5mb1xcXCI+XFxuXCIgK1xuICAgIFwiICA8ZGl2IGNsYXNzPVxcXCJjb250YWluZXJcXFwiPlxcblwiICtcbiAgICBcIiAgICA8ZGl2IGNsYXNzPVxcXCJyb3dcXFwiPlxcblwiICtcbiAgICBcIiAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1sZy0xMiB0ZXh0LWNlbnRlclxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgICA8aDM+RG9uJ3Qgd29ycnkuIEl0J3MgZnJlZS48L2gzPlxcblwiICtcbiAgICBcIiAgICAgICAgPGEgY2xhc3M9XFxcImN0YSBidG4gYnRuLWRhcmsgYnRuLWxnXFxcIiByb2xlPVxcXCJidXR0b25cXFwiIG5nLWNsaWNrPVxcXCJyZWdpc3RlcigpXFxcIj5SZWdpc3RlcjwvYT5cXG5cIiArXG4gICAgXCIgICAgICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgICAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICA8L2Rpdj5cXG5cIiArXG4gICAgXCI8L2FzaWRlPlxcblwiICtcbiAgICBcIjxmb290ZXI+XFxuXCIgK1xuICAgIFwiICA8ZGl2IGNsYXNzPVxcXCJjb250YWluZXJcXFwiPlxcblwiICtcbiAgICBcIiAgICA8ZGl2IGNsYXNzPVxcXCJyb3dcXFwiPlxcblwiICtcbiAgICBcIiAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1sZy0xMCBjb2wtbGctb2Zmc2V0LTEgdGV4dC1jZW50ZXJcXFwiPlxcblwiICtcbiAgICBcIiAgICAgICAgPHVsIGNsYXNzPVxcXCJsaXN0LWlubGluZVxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgICAgIDxsaT5cXG5cIiArXG4gICAgXCIgICAgICAgICAgICA8YSBocmVmPVxcXCJodHRwczovL3d3dy5mYWNlYm9vay5jb20vbG9zZW9yZ29ob21lXFxcIiB0YXJnZXQ9XFxcIl9ibGFua1xcXCI+PGkgY2xhc3M9XFxcImZhIGZhLWZhY2Vib29rIGZhLWZ3IGZhLTN4XFxcIj48L2k+PC9hPlxcblwiICtcbiAgICBcIiAgICAgICAgICA8L2xpPlxcblwiICtcbiAgICBcIiAgICAgICAgICA8bGk+XFxuXCIgK1xuICAgIFwiICAgICAgICAgICAgPGEgaHJlZj1cXFwiaHR0cHM6Ly90d2l0dGVyLmNvbS9sb3Nlb3Jnb2hvbWVcXFwiIHRhcmdldD1cXFwiX2JsYW5rXFxcIj48aSBjbGFzcz1cXFwiZmEgZmEtdHdpdHRlciBmYS1mdyBmYS0zeFxcXCI+PC9pPjwvYT5cXG5cIiArXG4gICAgXCIgICAgICAgICAgPC9saT5cXG5cIiArXG4gICAgXCIgICAgICAgIDwvdWw+XFxuXCIgK1xuICAgIFwiICAgICAgICA8aHIgY2xhc3M9XFxcInNtYWxsXFxcIj5cXG5cIiArXG4gICAgXCIgICAgICAgIDxwIGNsYXNzPVxcXCJ0ZXh0LW11dGVkXFxcIj5GT1IgRU5URVJUQUlOTUVOVCBQVVJQT1NFUyBPTkxZPC9wPlxcblwiICtcbiAgICBcIiAgICAgICAgPHAgY2xhc3M9XFxcInRleHQtbXV0ZWQgdHJhZGVtYXJrLWRpc2Nsb3N1cmVcXFwiPk5GTCBpcyBhIHJlZ2lzdGVyZWQgdHJhZGVtYXJrIG9mIHRoZSBOYXRpb25hbCBGb290YmFsbCBMZWFndWUuIFRoaXMgc2l0ZSBpcyBub3QgYWZmaWxpYXRlZCB3aXRoIHRoZSBOYXRpb25hbCBGb290YmFsbCBMZWFndWUgKE5GTCkgb3IgYW55IG9mIGl0cyB0ZWFtcy48L3A+XFxuXCIgK1xuICAgIFwiICAgICAgICA8cCBjbGFzcz1cXFwidGV4dC1tdXRlZCB0cmFkZW1hcmstZGlzY2xvc3VyZVxcXCI+TkJBIGlzIGEgcmVnaXN0ZXJlZCB0cmFkZW1hcmsgb2YgTkJBIFByb3BlcnRpZXMsIEluYy4gVGhpcyBzaXRlIGlzIG5vdCBhZmZpbGlhdGVkIHdpdGggdGhlIE5hdGlvbmFsIEJhc2tldGJhbGwgQXNzb2NpYXRpb24gKE5CQSkgb3IgYW55IG9mIGl0cyB0ZWFtcy48L3A+XFxuXCIgK1xuICAgIFwiICAgICAgICA8cCBjbGFzcz1cXFwidGV4dC1tdXRlZCB0cmFkZW1hcmstZGlzY2xvc3VyZVxcXCI+TkhMIGlzIGEgcmVnaXN0ZXJlZCB0cmFkZW1hcmsgb2YgdGhlIE5hdGlvbmFsIEhvY2tleSBMZWFndWUuIFRoaXMgc2l0ZSBpcyBub3QgYWZmaWxpYXRlZCB3aXRoIHRoZSBOYXRpb25hbCBIb2NrZXkgTGVhZ3VlIChOSEwpIG9yIGFueSBvZiBpdHMgdGVhbXMuPC9wPlxcblwiICtcbiAgICBcIiAgICAgICAgPHAgY2xhc3M9XFxcInRleHQtbXV0ZWQgdHJhZGVtYXJrLWRpc2Nsb3N1cmVcXFwiPk1MQiBpcyBhIHJlZ2lzdGVyZWQgdHJhZGVtYXJrIG9mIE1ham9yIExlYWd1ZSBCYXNlYmFsbCBQcm9wZXJ0aWVzLCBJbmMuIFRoaXMgc2l0ZSBpcyBub3QgYWZmaWxpYXRlZCB3aXRoIE1ham9yIExlYWd1ZSBCYXNlYmFsbCAoTUxCKSBvciBhbnkgb2YgaXRzIHRlYW1zLjwvcD5cXG5cIiArXG4gICAgXCIgICAgICAgIDxwIGNsYXNzPVxcXCJ0ZXh0LW11dGVkIHRyYWRlbWFyay1kaXNjbG9zdXJlXFxcIj5NTFMgaXMgYSByZWdpc3RlcmVkIHRyYWRlbWFyayBvZiBNYWpvciBMZWFndWUgU29jY2VyLCBMTEMuIFRoaXMgc2l0ZSBpcyBub3QgYWZmaWxpYXRlZCB3aXRoIE1ham9yIExlYWd1ZSBTb2NjZXIgKE1MUykgb3IgYW55IG9mIGl0cyB0ZWFtcy48L3A+XFxuXCIgK1xuICAgIFwiICAgICAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICAgIDwvZGl2PlxcblwiICtcbiAgICBcIiAgPC9kaXY+XFxuXCIgK1xuICAgIFwiPC9mb290ZXI+XFxuXCIgK1xuICAgIFwiXCIpO1xufV0pO1xuXG5hbmd1bGFyLm1vZHVsZShcIm1vZHVsZXMvcHVibGljL3JlZ2lzdGVyL3JlZ2lzdGVyLnRwbC5odG1sXCIsIFtdKS5ydW4oW1wiJHRlbXBsYXRlQ2FjaGVcIiwgZnVuY3Rpb24oJHRlbXBsYXRlQ2FjaGUpIHtcbiAgJHRlbXBsYXRlQ2FjaGUucHV0KFwibW9kdWxlcy9wdWJsaWMvcmVnaXN0ZXIvcmVnaXN0ZXIudHBsLmh0bWxcIixcbiAgICBcIjxkaXYgY2xhc3M9XFxcIm1vZGFsLWhlYWRlclxcXCI+XFxuXCIgK1xuICAgIFwiICA8YnV0dG9uIHR5cGU9XFxcImJ1dHRvblxcXCIgY2xhc3M9XFxcImNsb3NlXFxcIiBuZy1jbGljaz1cXFwiY2FuY2VsKClcXFwiPjxzcGFuIGFyaWEtaGlkZGVuPVxcXCJ0cnVlXFxcIj4mdGltZXM7PC9zcGFuPjxzcGFuIGNsYXNzPVxcXCJzci1vbmx5XFxcIj5DbG9zZTwvc3Bhbj48L2J1dHRvbj5cXG5cIiArXG4gICAgXCIgIDxoMyBjbGFzcz1cXFwibW9kYWwtdGl0bGVcXFwiPlJlZ2lzdGVyPC9oMz5cXG5cIiArXG4gICAgXCI8L2Rpdj5cXG5cIiArXG4gICAgXCI8ZGl2IGNsYXNzPVxcXCJtb2RhbC1ib2R5XFxcIj5cXG5cIiArXG4gICAgXCIgIDxmb3JtIG5hbWU9XFxcIm5ld1VzZXJGb3JtXFxcIiByb2xlPVxcXCJmb3JtXFxcIiBub3ZhbGlkYXRlPlxcblwiICtcbiAgICBcIiAgICA8ZGl2IGNsYXNzPVxcXCJyb3dcXFwiPlxcblwiICtcbiAgICBcIiAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1zbS0xMiBjb2wtbWQtMTJcXFwiPlxcblwiICtcbiAgICBcIiAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCIgbmctY2xhc3M9XFxcInsnaGFzLWVycm9yJzogaGFzRXJyb3IobmV3VXNlckZvcm0uZmlyc3ROYW1lKSwgJ2hhcy1mZWVkYmFjayc6IGhhc0Vycm9yKG5ld1VzZXJGb3JtLmZpcnN0TmFtZSl9XFxcIj5cXG5cIiArXG4gICAgXCIgICAgICAgICAgPGxhYmVsIGNsYXNzPVxcXCJjb250cm9sLWxhYmVsXFxcIiBmb3I9XFxcImZpcnN0TmFtZVxcXCI+Rmlyc3QgbmFtZVxcblwiICtcbiAgICBcIiAgICAgICAgICAgIDxzbWFsbCBuZy1zaG93PVxcXCJoYXNQcm9wZXJ0eUVycm9yKG5ld1VzZXJGb3JtLmZpcnN0TmFtZSwgJ3JlcXVpcmVkJylcXFwiPlsgUmVxdWlyZWQgXTwvc21hbGw+XFxuXCIgK1xuICAgIFwiICAgICAgICAgICAgPHNtYWxsIG5nLXNob3c9XFxcImhhc1Byb3BlcnR5RXJyb3IobmV3VXNlckZvcm0uZmlyc3ROYW1lLCAnbWF4bGVuZ3RoJylcXFwiPlsgVG9vIExvbmcgXTwvc21hbGw+XFxuXCIgK1xuICAgIFwiICAgICAgICAgIDwvbGFiZWw+XFxuXCIgK1xuICAgIFwiICAgICAgICAgIDxpbnB1dCBpZD1cXFwiZmlyc3ROYW1lXFxcIiBuYW1lPVxcXCJmaXJzdE5hbWVcXFwiIHR5cGU9XFxcInRleHRcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIG5nLW1vZGVsPVxcXCJuZXdVc2VyRGF0YS5maXJzdF9uYW1lXFxcIiBuZy1tYXhsZW5ndGg9XFxcIjE1XFxcIiByZXF1aXJlZD5cXG5cIiArXG4gICAgXCIgICAgICAgICAgPHNwYW4gbmctc2hvdz1cXFwiaGFzRXJyb3IobmV3VXNlckZvcm0uZmlyc3ROYW1lKVxcXCIgY2xhc3M9XFxcImdseXBoaWNvbiBnbHlwaGljb24tcmVtb3ZlIGZvcm0tY29udHJvbC1mZWVkYmFja1xcXCI+PC9zcGFuPlxcblwiICtcbiAgICBcIiAgICAgICAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICAgICAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICAgIDwvZGl2PlxcblwiICtcbiAgICBcIiAgICA8ZGl2IGNsYXNzPVxcXCJyb3dcXFwiPlxcblwiICtcbiAgICBcIiAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1zbS0xMiBjb2wtbWQtMTJcXFwiPlxcblwiICtcbiAgICBcIiAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCIgbmctY2xhc3M9XFxcInsnaGFzLWVycm9yJzogaGFzRXJyb3IobmV3VXNlckZvcm0ubGFzdE5hbWUpLCAnaGFzLWZlZWRiYWNrJzogaGFzRXJyb3IobmV3VXNlckZvcm0ubGFzdE5hbWUpfVxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgICAgIDxsYWJlbCBjbGFzcz1cXFwiY29udHJvbC1sYWJlbFxcXCIgZm9yPVxcXCJsYXN0TmFtZVxcXCI+TGFzdCBuYW1lXFxuXCIgK1xuICAgIFwiICAgICAgICAgICAgPHNtYWxsIG5nLXNob3c9XFxcImhhc1Byb3BlcnR5RXJyb3IobmV3VXNlckZvcm0ubGFzdE5hbWUsICdyZXF1aXJlZCcpXFxcIj5bIFJlcXVpcmVkIF08L3NtYWxsPlxcblwiICtcbiAgICBcIiAgICAgICAgICAgIDxzbWFsbCBuZy1zaG93PVxcXCJoYXNQcm9wZXJ0eUVycm9yKG5ld1VzZXJGb3JtLmxhc3ROYW1lLCAnbWF4bGVuZ3RoJylcXFwiPlsgVG9vIExvbmcgXTwvc21hbGw+XFxuXCIgK1xuICAgIFwiICAgICAgICAgIDwvbGFiZWw+XFxuXCIgK1xuICAgIFwiICAgICAgICAgIDxpbnB1dCBpZD1cXFwibGFzdE5hbWVcXFwiIG5hbWU9XFxcImxhc3ROYW1lXFxcIiB0eXBlPVxcXCJ0ZXh0XFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBuZy1tb2RlbD1cXFwibmV3VXNlckRhdGEubGFzdF9uYW1lXFxcIiBuZy1tYXhsZW5ndGg9XFxcIjIwXFxcIiByZXF1aXJlZD5cXG5cIiArXG4gICAgXCIgICAgICAgICAgPHNwYW4gbmctc2hvdz1cXFwiaGFzRXJyb3IobmV3VXNlckZvcm0ubGFzdE5hbWUpXFxcIiBjbGFzcz1cXFwiZ2x5cGhpY29uIGdseXBoaWNvbi1yZW1vdmUgZm9ybS1jb250cm9sLWZlZWRiYWNrXFxcIj48L3NwYW4+XFxuXCIgK1xuICAgIFwiICAgICAgICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgICAgICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgICAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICAgIDxkaXYgY2xhc3M9XFxcInVzZXItbmlja25hbWUgcm93XFxcIj5cXG5cIiArXG4gICAgXCIgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtc20tMTIgY29sLW1kLTEyXFxcIj5cXG5cIiArXG4gICAgXCIgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPlxcblwiICtcbiAgICBcIiAgICAgICAgICA8bGFiZWwgY2xhc3M9XFxcImNvbnRyb2wtbGFiZWxcXFwiIGZvcj1cXFwibmlja25hbWVcXFwiPk5pY2tuYW1lPC9sYWJlbD5cXG5cIiArXG4gICAgXCIgICAgICAgICAgPGlucHV0IGlkPVxcXCJuaWNrbmFtZVxcXCIgbmFtZT1cXFwibmlja25hbWVcXFwiIHR5cGU9XFxcInRleHRcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIG5nLW1vZGVsPVxcXCJuZXdVc2VyRGF0YS5uaWNrbmFtZVxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgICAgICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgICAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICAgIDxkaXYgY2xhc3M9XFxcInJvd1xcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXNtLTEyIGNvbC1tZC0xMlxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIiBuZy1jbGFzcz1cXFwieydoYXMtZXJyb3InOiBoYXNFcnJvcihuZXdVc2VyRm9ybS5lbWFpbCksICdoYXMtZmVlZGJhY2snOiBoYXNFcnJvcihuZXdVc2VyRm9ybS5lbWFpbCl9XFxcIj5cXG5cIiArXG4gICAgXCIgICAgICAgICAgPGxhYmVsIGNsYXNzPVxcXCJjb250cm9sLWxhYmVsXFxcIiBmb3I9XFxcImVtYWlsXFxcIj5FbWFpbCBhZGRyZXNzXFxuXCIgK1xuICAgIFwiICAgICAgICAgICAgPHNtYWxsIG5nLXNob3c9XFxcImhhc1Byb3BlcnR5RXJyb3IobmV3VXNlckZvcm0uZW1haWwsICdyZXF1aXJlZCcpXFxcIj5bIFJlcXVpcmVkIF08L3NtYWxsPlxcblwiICtcbiAgICBcIiAgICAgICAgICAgIDxzbWFsbCBuZy1zaG93PVxcXCJoYXNQcm9wZXJ0eUVycm9yKG5ld1VzZXJGb3JtLmVtYWlsLCAnZW1haWwnKVxcXCI+WyBJbnZhbGlkIEVtYWlsIF08L3NtYWxsPlxcblwiICtcbiAgICBcIiAgICAgICAgICA8L2xhYmVsPlxcblwiICtcbiAgICBcIiAgICAgICAgICA8aW5wdXQgaWQ9XFxcImVtYWlsXFxcIiBuYW1lPVxcXCJlbWFpbFxcXCIgdHlwZT1cXFwiZW1haWxcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIG5nLW1vZGVsPVxcXCJuZXdVc2VyRGF0YS5lbWFpbFxcXCIgbG9naC1mb2N1cyByZXF1aXJlZD5cXG5cIiArXG4gICAgXCIgICAgICAgICAgPHNwYW4gbmctc2hvdz1cXFwiaGFzRXJyb3IobmV3VXNlckZvcm0uZW1haWwpXFxcIiBjbGFzcz1cXFwiZ2x5cGhpY29uIGdseXBoaWNvbi1yZW1vdmUgZm9ybS1jb250cm9sLWZlZWRiYWNrXFxcIj48L3NwYW4+XFxuXCIgK1xuICAgIFwiICAgICAgICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgICAgICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgICAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICAgIDxkaXYgY2xhc3M9XFxcInJvd1xcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXNtLTEyIGNvbC1tZC0xMlxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIiBuZy1jbGFzcz1cXFwieydoYXMtZXJyb3InOiBoYXNFcnJvcihuZXdVc2VyRm9ybS5wYXNzd29yZCksICdoYXMtZmVlZGJhY2snOiBoYXNFcnJvcihuZXdVc2VyRm9ybS5wYXNzd29yZCl9XFxcIj5cXG5cIiArXG4gICAgXCIgICAgICAgICAgPGxhYmVsIGNsYXNzPVxcXCJjb250cm9sLWxhYmVsXFxcIiBmb3I9XFxcInBhc3N3b3JkXFxcIj5QYXNzd29yZFxcblwiICtcbiAgICBcIiAgICAgICAgICAgIDxzbWFsbCBuZy1zaG93PVxcXCJoYXNQcm9wZXJ0eUVycm9yKG5ld1VzZXJGb3JtLnBhc3N3b3JkLCAncmVxdWlyZWQnKVxcXCI+WyBSZXF1aXJlZCBdPC9zbWFsbD5cXG5cIiArXG4gICAgXCIgICAgICAgICAgICA8c21hbGwgbmctc2hvdz1cXFwiaGFzUHJvcGVydHlFcnJvcihuZXdVc2VyRm9ybS5wYXNzd29yZCwgJ21pbmxlbmd0aCcpXFxcIj5bIDggLSA1MCBDaGFyYWN0ZXJzIF08L3NtYWxsPlxcblwiICtcbiAgICBcIiAgICAgICAgICAgIDxzbWFsbCBuZy1zaG93PVxcXCJoYXNQcm9wZXJ0eUVycm9yKG5ld1VzZXJGb3JtLnBhc3N3b3JkLCAnbWF4bGVuZ3RoJylcXFwiPlsgOCAtIDUwIENoYXJhY3RlcnMgXTwvc21hbGw+XFxuXCIgK1xuICAgIFwiICAgICAgICAgIDwvbGFiZWw+XFxuXCIgK1xuICAgIFwiICAgICAgICAgIDxpbnB1dCBpZD1cXFwicGFzc3dvcmRcXFwiIG5hbWU9XFxcInBhc3N3b3JkXFxcIiB0eXBlPVxcXCJwYXNzd29yZFxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgbmctbW9kZWw9XFxcIm5ld1VzZXJEYXRhLnBhc3N3b3JkXFxcIiBuZy1taW5sZW5ndGg9XFxcIjhcXFwiIG5nLW1heGxlbmd0aD1cXFwiNTBcXFwiIHJlcXVpcmVkPlxcblwiICtcbiAgICBcIiAgICAgICAgICA8c3BhbiBuZy1zaG93PVxcXCJoYXNFcnJvcihuZXdVc2VyRm9ybS5wYXNzd29yZClcXFwiIGNsYXNzPVxcXCJnbHlwaGljb24gZ2x5cGhpY29uLXJlbW92ZSBmb3JtLWNvbnRyb2wtZmVlZGJhY2tcXFwiPjwvc3Bhbj5cXG5cIiArXG4gICAgXCIgICAgICAgIDwvZGl2PlxcblwiICtcbiAgICBcIiAgICAgIDwvZGl2PlxcblwiICtcbiAgICBcIiAgICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgICAgPCEtLTxkaXYgY2xhc3M9XFxcInRlcm1zIHdlbGwgd2VsbC1zbVxcXCI+PHN0cm9uZz5CeSBjbGlja2luZyByZWdpc3RlciwgeW91IGFncmVlIHRvIHRoZSA8YSBuZy1jbGljaz1cXFwic2hvd1Rlcm1zKClcXFwiPnRlcm1zIG9mIHVzZS48L2E+PC9zdHJvbmc+PC9kaXY+LS0+XFxuXCIgK1xuICAgIFwiICA8L2Zvcm0+XFxuXCIgK1xuICAgIFwiPC9kaXY+XFxuXCIgK1xuICAgIFwiPGRpdiBjbGFzcz1cXFwibW9kYWwtZm9vdGVyXFxcIj5cXG5cIiArXG4gICAgXCIgIDwhLS08YnV0dG9uIGNsYXNzPVxcXCJidG4gYnRuLWRlZmF1bHRcXFwiIG5nLWNsaWNrPVxcXCJjYW5jZWwoKVxcXCI+Q2FuY2VsPC9idXR0b24+LS0+XFxuXCIgK1xuICAgIFwiICA8YnV0dG9uIHR5cGU9XFxcInN1Ym1pdFxcXCIgY2xhc3M9XFxcImJ0biBidG4tYmxvY2sgYnRuLXByaW1hcnlcXFwiIG5nLWRpc2FibGVkPVxcXCJuZXdVc2VyRm9ybS4kaW52YWxpZFxcXCIgbmctY2xpY2s9XFxcInJlZ2lzdGVyKG5ld1VzZXJEYXRhKVxcXCI+UGxheSBOb3c8L2J1dHRvbj5cXG5cIiArXG4gICAgXCI8L2Rpdj5cIik7XG59XSk7XG5cbmFuZ3VsYXIubW9kdWxlKFwibW9kdWxlcy9wdWJsaWMvcmVnaXN0ZXIvdGVybXMvcmVnaXN0ZXIudGVybXMudHBsLmh0bWxcIiwgW10pLnJ1bihbXCIkdGVtcGxhdGVDYWNoZVwiLCBmdW5jdGlvbigkdGVtcGxhdGVDYWNoZSkge1xuICAkdGVtcGxhdGVDYWNoZS5wdXQoXCJtb2R1bGVzL3B1YmxpYy9yZWdpc3Rlci90ZXJtcy9yZWdpc3Rlci50ZXJtcy50cGwuaHRtbFwiLFxuICAgIFwiPGRpdiBjbGFzcz1cXFwibW9kYWwtaGVhZGVyXFxcIj5cXG5cIiArXG4gICAgXCIgIDxidXR0b24gdHlwZT1cXFwiYnV0dG9uXFxcIiBjbGFzcz1cXFwiY2xvc2VcXFwiIG5nLWNsaWNrPVxcXCJjbG9zZSgpXFxcIj48c3BhbiBhcmlhLWhpZGRlbj1cXFwidHJ1ZVxcXCI+JnRpbWVzOzwvc3Bhbj48c3BhbiBjbGFzcz1cXFwic3Itb25seVxcXCI+Q2xvc2U8L3NwYW4+PC9idXR0b24+XFxuXCIgK1xuICAgIFwiICA8aDMgY2xhc3M9XFxcIm1vZGFsLXRpdGxlXFxcIj5UZXJtcyBvZiBVc2U8L2gzPlxcblwiICtcbiAgICBcIjwvZGl2PlxcblwiICtcbiAgICBcIjxkaXYgY2xhc3M9XFxcIm1vZGFsLWJvZHlcXFwiPlxcblwiICtcbiAgICBcIiAgPHA+SWYgeW91IGNob29zZSB0byB1c2UgdGhpcyBzaXRlIGZvciBnYW1ibGluZyBwdXJwb3NlcywgeW91IGFzc3VtZSBhbGwgcmlza3MuIERvbid0IGJlIGEgZHVtbXkgYW5kIHNlbmQgbW9uZXkgdG8gcGVvcGxlIHlvdSBkb24ndCBrbm93IGFuZCB0cnVzdC4gVXNlIHlvdXIgY2FiZXphLjwvcD5cXG5cIiArXG4gICAgXCI8L2Rpdj5cXG5cIiArXG4gICAgXCI8ZGl2IGNsYXNzPVxcXCJtb2RhbC1mb290ZXJcXFwiPlxcblwiICtcbiAgICBcIiAgPGJ1dHRvbiBjbGFzcz1cXFwiYnRuIGJ0bi1kZWZhdWx0XFxcIiBuZy1jbGljaz1cXFwiY2xvc2UoKVxcXCI+Q2xvc2U8L2J1dHRvbj5cXG5cIiArXG4gICAgXCI8L2Rpdj5cIik7XG59XSk7XG5cbmFuZ3VsYXIubW9kdWxlKFwibW9kdWxlcy9wdWJsaWMvc2lnbmluL3NpZ25pbi50cGwuaHRtbFwiLCBbXSkucnVuKFtcIiR0ZW1wbGF0ZUNhY2hlXCIsIGZ1bmN0aW9uKCR0ZW1wbGF0ZUNhY2hlKSB7XG4gICR0ZW1wbGF0ZUNhY2hlLnB1dChcIm1vZHVsZXMvcHVibGljL3NpZ25pbi9zaWduaW4udHBsLmh0bWxcIixcbiAgICBcIjxkaXYgY2xhc3M9XFxcInNpZ25pbi1ib3ggcGFuZWwgcGFuZWwtZGVmYXVsdFxcXCI+XFxuXCIgK1xuICAgIFwiICA8ZGl2IGNsYXNzPVxcXCJwYW5lbC1ib2R5XFxcIj5cXG5cIiArXG4gICAgXCIgICAgPGZvcm0gbmFtZT1cXFwic2lnbmluRm9ybVxcXCIgcm9sZT1cXFwiZm9ybVxcXCIgbmctc3VibWl0PVxcXCJzaWduaW4oeyBlbWFpbDogY3JlZGVudGlhbHMuZW1haWwudG9Mb3dlckNhc2UoKSwgcGFzc3dvcmQ6IGNyZWRlbnRpYWxzLnBhc3N3b3JkIH0pXFxcIiBub3ZhbGlkYXRlPlxcblwiICtcbiAgICBcIiAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPlxcblwiICtcbiAgICBcIiAgICAgICAgPGRpdiBjbGFzcz1cXFwiaW5wdXQtZ3JvdXBcXFwiPlxcblwiICtcbiAgICBcIiAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwiaW5wdXQtZ3JvdXAtYWRkb25cXFwiPjxpIGNsYXNzPVxcXCJmYSBmYS1lbnZlbG9wZSBmYS1md1xcXCI+PC9pPjwvc3Bhbj5cXG5cIiArXG4gICAgXCIgICAgICAgICAgPGlucHV0IHR5cGU9XFxcImVtYWlsXFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBhdXRvY29tcGxldGU9XFxcIm9mZlxcXCIgcGxhY2Vob2xkZXI9XFxcIkVtYWlsXFxcIiBuZy1tb2RlbD1cXFwiY3JlZGVudGlhbHMuZW1haWxcXFwiIHJjLXZlcmlmeS1zZXQgYXV0b2ZvY3VzIHJlcXVpcmVkPlxcblwiICtcbiAgICBcIiAgICAgICAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICAgICAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgICA8ZGl2IGNsYXNzPVxcXCJpbnB1dC1ncm91cFxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJpbnB1dC1ncm91cC1hZGRvblxcXCI+PGkgY2xhc3M9XFxcImZhIGZhLWtleSBmYS1md1xcXCI+PC9pPjwvc3Bhbj5cXG5cIiArXG4gICAgXCIgICAgICAgICAgPGlucHV0IHR5cGU9XFxcInBhc3N3b3JkXFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBhdXRvY29tcGxldGU9XFxcIm9mZlxcXCIgcGxhY2Vob2xkZXI9XFxcIlBhc3N3b3JkXFxcIiBuZy1tb2RlbD1cXFwiY3JlZGVudGlhbHMucGFzc3dvcmRcXFwiIHJjLXZlcmlmeS1zZXQgcmVxdWlyZWQ+XFxuXCIgK1xuICAgIFwiICAgICAgICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgICAgICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgICAgICA8YnV0dG9uIHR5cGU9XFxcInN1Ym1pdFxcXCIgY2xhc3M9XFxcImJ0biBidG4tYmxvY2sgYnRuLXByaW1hcnlcXFwiPlNpZ24gaW4gd2l0aCBlbWFpbDwvYnV0dG9uPlxcblwiICtcbiAgICBcIiAgICAgIDxkaXYgY2xhc3M9XFxcIm9yRGl2XFxcIj48c3Bhbj5vcjwvc3Bhbj48L2Rpdj5cXG5cIiArXG4gICAgXCIgICAgPC9mb3JtPlxcblwiICtcbiAgICBcIiAgICA8YnV0dG9uIGNsYXNzPVxcXCJidG4gYnRuLWJsb2NrIGJ0bi1wcmltYXJ5XFxcIiBuZy1jbGljaz1cXFwic2lnbmluR3Vlc3QoKVxcXCI+U2lnbiBpbiBhcyBndWVzdDwvYnV0dG9uPlxcblwiICtcbiAgICBcIiAgICA8aHI+XFxuXCIgK1xuICAgIFwiICAgIDxkaXYgY2xhc3M9XFxcInNpZ25pbi1vdGhlci1jb250YWluZXJcXFwiPjxhIG5nLWNsaWNrPVxcXCJyZWdpc3RlcigpXFxcIj5SZWdpc3RlcjwvYT4gfCA8YSBuZy1jbGljaz1cXFwicmVzZXRQYXNzd29yZCgpXFxcIj5SZXNldCBQYXNzd29yZDwvYT48L2Rpdj5cXG5cIiArXG4gICAgXCIgIDwvZGl2PlxcblwiICtcbiAgICBcIjwvZGl2PlxcblwiICtcbiAgICBcIlwiKTtcbn1dKTtcbiIsIid1c2Ugc3RyaWN0JztcbnJlcXVpcmUoJ2FwcC10ZW1wbGF0ZXMnKTtcblxuXG52YXIgQXBwID0gZnVuY3Rpb24oJHVybFJvdXRlclByb3ZpZGVyKSB7XG4gICAgLy8gdW5tYXRjaGVkIHVybHMgc2hvdWxkIGJlIGRpcmVjdGVkIGJhY2sgdG8gdGhlIHN0YXJ0XG4gICAgJHVybFJvdXRlclByb3ZpZGVyLm90aGVyd2lzZSgnLycpO1xufTtcblxuQXBwLiRpbmplY3QgPSBbJyR1cmxSb3V0ZXJQcm92aWRlciddO1xuXG52YXIgbG9naEFwcCA9IGFuZ3VsYXIubW9kdWxlKCdsb2doQXBwJywgW1xuICAgICduZ0Nvb2tpZXMnLFxuICAgICduZ1Jlc291cmNlJyxcbiAgICAnbmdTYW5pdGl6ZScsXG4gICAgJ25nUm91dGUnLFxuICAgICduZ0Ryb3Bkb3ducycsXG4gICAgJ2NvbW1hbmd1bGFyJyxcbiAgICAndWkucm91dGVyJyxcbiAgICAndWkuYm9vdHN0cmFwJyxcbiAgICAndWkuYm9vdHN0cmFwLmRhdGV0aW1lcGlja2VyJyxcbiAgICAnYXBwLnRlbXBsYXRlcycsXG4gICAgJ3VpLnJvdXRlci5zdGF0ZUhlbHBlcicsXG4gICAgJ2FuZ3VsYXItbG9hZGluZy1iYXInLFxuICAgICdhbmd1bGFydGljcycsXG4gICAgJ2FuZ3VsYXJ0aWNzLmdvb2dsZS5hbmFseXRpY3MnLFxuXG4gICAgLy8gcHVibGljIG1vZHVsZXNcbiAgICByZXF1aXJlKCcuL21vZHVsZXMvcHVibGljL2hvbWUnKS5uYW1lLFxuICAgIHJlcXVpcmUoJy4vbW9kdWxlcy9wdWJsaWMvZmFxJykubmFtZSxcbiAgICByZXF1aXJlKCcuL21vZHVsZXMvcHVibGljL2ZhcS9nZW5lcmFsJykubmFtZSxcbiAgICByZXF1aXJlKCcuL21vZHVsZXMvcHVibGljL2ZhcS9waWNrZW0nKS5uYW1lLFxuICAgIHJlcXVpcmUoJy4vbW9kdWxlcy9wdWJsaWMvZmFxL3N1cnZpdm9yJykubmFtZSxcbiAgICByZXF1aXJlKCcuL21vZHVsZXMvcHVibGljL2FidXNlJykubmFtZSxcbiAgICByZXF1aXJlKCcuL21vZHVsZXMvcHVibGljL3NpZ25pbicpLm5hbWUsXG4gICAgcmVxdWlyZSgnLi9tb2R1bGVzL3B1YmxpYy9yZWdpc3RlcicpLm5hbWUsXG4gICAgcmVxdWlyZSgnLi9tb2R1bGVzL3B1YmxpYy9yZWdpc3Rlci90ZXJtcycpLm5hbWUsXG5cbiAgICAvLyBwcml2YXRlIG1vZHVsZXNcbiAgICAvLyB1c2VyXG4gICAgcmVxdWlyZSgnLi9tb2R1bGVzL3ByaXZhdGUvdXNlcicpLm5hbWUsXG4gICAgcmVxdWlyZSgnLi9tb2R1bGVzL3ByaXZhdGUvdXNlci9yZXNldCcpLm5hbWUsXG5cbiAgICAvLyBsZWFndWVcbiAgICByZXF1aXJlKCcuL21vZHVsZXMvcHJpdmF0ZS9sZWFndWUnKS5uYW1lLFxuICAgIHJlcXVpcmUoJy4vbW9kdWxlcy9wcml2YXRlL2xlYWd1ZS9uZXcnKS5uYW1lLFxuICAgIHJlcXVpcmUoJy4vbW9kdWxlcy9wcml2YXRlL2xlYWd1ZS92aWV3JykubmFtZSxcbiAgICByZXF1aXJlKCcuL21vZHVsZXMvcHJpdmF0ZS9sZWFndWUvZWRpdCcpLm5hbWUsXG4gICAgcmVxdWlyZSgnLi9tb2R1bGVzL3ByaXZhdGUvbGVhZ3VlL2NvbnRhY3QnKS5uYW1lLFxuICAgIHJlcXVpcmUoJy4vbW9kdWxlcy9wcml2YXRlL2xlYWd1ZS9tZXNzYWdlJykubmFtZSxcbiAgICByZXF1aXJlKCcuL21vZHVsZXMvcHJpdmF0ZS9sZWFndWUvam9pbicpLm5hbWUsXG4gICAgcmVxdWlyZSgnLi9tb2R1bGVzL3ByaXZhdGUvbGVhZ3VlL2ludml0ZScpLm5hbWUsXG4gICAgcmVxdWlyZSgnLi9tb2R1bGVzL3ByaXZhdGUvbGVhZ3VlL2ludml0ZS9yZXF1ZXN0JykubmFtZSxcblxuICAgIC8vIGxlYWd1ZXNcbiAgICByZXF1aXJlKCcuL21vZHVsZXMvcHJpdmF0ZS9sZWFndWVzJykubmFtZSxcbiAgICByZXF1aXJlKCcuL21vZHVsZXMvcHJpdmF0ZS9sZWFndWVzL2pvaW4nKS5uYW1lLFxuICAgIHJlcXVpcmUoJy4vbW9kdWxlcy9wcml2YXRlL2xlYWd1ZXMvam9pbi9wdWJsaWMnKS5uYW1lLFxuICAgIHJlcXVpcmUoJy4vbW9kdWxlcy9wcml2YXRlL2xlYWd1ZXMvam9pbi9wcml2YXRlJykubmFtZSxcbiAgICByZXF1aXJlKCcuL21vZHVsZXMvcHJpdmF0ZS9sZWFndWVzL21hbmFnZScpLm5hbWUsXG4gICAgcmVxdWlyZSgnLi9tb2R1bGVzL3ByaXZhdGUvbGVhZ3Vlcy9teScpLm5hbWUsXG5cbiAgICAvLyB0ZWFtXG4gICAgcmVxdWlyZSgnLi9tb2R1bGVzL3ByaXZhdGUvdGVhbScpLm5hbWUsXG4gICAgcmVxdWlyZSgnLi9tb2R1bGVzL3ByaXZhdGUvdGVhbS92aWV3JykubmFtZSxcbiAgICByZXF1aXJlKCcuL21vZHVsZXMvcHJpdmF0ZS90ZWFtL3ZpZXcvcGlja3MnKS5uYW1lLFxuICAgIHJlcXVpcmUoJy4vbW9kdWxlcy9wcml2YXRlL3RlYW0vZWRpdCcpLm5hbWUsXG4gICAgcmVxdWlyZSgnLi9tb2R1bGVzL3ByaXZhdGUvdGVhbS9tZXNzYWdlJykubmFtZSxcbiAgICByZXF1aXJlKCcuL21vZHVsZXMvcHJpdmF0ZS90ZWFtL3BpY2snKS5uYW1lLFxuICAgIHJlcXVpcmUoJy4vbW9kdWxlcy9wcml2YXRlL3RlYW0vcGljay9vbmUnKS5uYW1lLFxuICAgIHJlcXVpcmUoJy4vbW9kdWxlcy9wcml2YXRlL3RlYW0vcGljay9tYW55JykubmFtZSxcblxuICAgIC8vIHBsYXlcbiAgICByZXF1aXJlKCcuL21vZHVsZXMvcHJpdmF0ZS9wbGF5JykubmFtZSxcbiAgICByZXF1aXJlKCcuL21vZHVsZXMvcHJpdmF0ZS9wbGF5L2xlYWd1ZXMnKS5uYW1lLFxuICAgIHJlcXVpcmUoJy4vbW9kdWxlcy9wcml2YXRlL3BsYXkvdGVhbXMnKS5uYW1lLFxuXG4gICAgLy8gYWRtaW5cbiAgICByZXF1aXJlKCcuL21vZHVsZXMvcHJpdmF0ZS9hZG1pbicpLm5hbWUsXG4gICAgcmVxdWlyZSgnLi9tb2R1bGVzL3ByaXZhdGUvYWRtaW4vZ2FtZS9lZGl0JykubmFtZSxcbiAgICByZXF1aXJlKCcuL21vZHVsZXMvcHJpdmF0ZS9hZG1pbi9nYW1lL25ldycpLm5hbWUsXG4gICAgcmVxdWlyZSgnLi9tb2R1bGVzL3ByaXZhdGUvYWRtaW4vc2Vhc29ucycpLm5hbWUsXG4gICAgcmVxdWlyZSgnLi9tb2R1bGVzL3ByaXZhdGUvYWRtaW4vc2Vhc29ucy9zZWFzb24nKS5uYW1lLFxuICAgIHJlcXVpcmUoJy4vbW9kdWxlcy9wcml2YXRlL2FkbWluL3NlYXNvbnMvc2Vhc29uL25ldycpLm5hbWUsXG4gICAgcmVxdWlyZSgnLi9tb2R1bGVzL3ByaXZhdGUvYWRtaW4vc2Vhc29ucy9zZWFzb24vZWRpdCcpLm5hbWUsXG4gICAgcmVxdWlyZSgnLi9tb2R1bGVzL3ByaXZhdGUvYWRtaW4vd2VlaycpLm5hbWUsXG4gICAgcmVxdWlyZSgnLi9tb2R1bGVzL3ByaXZhdGUvYWRtaW4vd2Vlay9uZXcnKS5uYW1lLFxuICAgIHJlcXVpcmUoJy4vbW9kdWxlcy9wcml2YXRlL2FkbWluL3dlZWsvZWRpdCcpLm5hbWUsXG4gICAgcmVxdWlyZSgnLi9tb2R1bGVzL3ByaXZhdGUvYWRtaW4vc3F1YWRzJykubmFtZSxcbiAgICByZXF1aXJlKCcuL21vZHVsZXMvcHJpdmF0ZS9hZG1pbi9zcXVhZHMvbmV3JykubmFtZSxcbiAgICByZXF1aXJlKCcuL21vZHVsZXMvcHJpdmF0ZS9hZG1pbi9zcXVhZHMvZWRpdCcpLm5hbWUsXG5cbiAgICAvLyBoZWxwZXIgbW9kdWxlc1xuICAgIHJlcXVpcmUoJy4vY29tbW9uL21vZHVsZXMvaGVhZGVyJykubmFtZSxcbiAgICByZXF1aXJlKCcuL2NvbW1vbi9tb2R1bGVzL21lc3NhZ2UnKS5uYW1lLFxuICAgIHJlcXVpcmUoJy4vY29tbW9uL21vZHVsZXMvZm9vdGVyJykubmFtZSxcbiAgICByZXF1aXJlKCcuL2NvbW1vbi9tb2R1bGVzL2NvbmZpcm0nKS5uYW1lLFxuXG4gICAgcmVxdWlyZSgnLi9jb21tb24vbW9kZWxzJykubmFtZSxcbiAgICByZXF1aXJlKCcuL2NvbW1vbi9hcGknKS5uYW1lLFxuICAgIHJlcXVpcmUoJy4vY29tbW9uL2NvbW1hbmQnKS5uYW1lLFxuXG4gICAgLy8gc2VydmljZXNcbiAgICByZXF1aXJlKCcuL2NvbW1vbi9zZXJ2aWNlL2FwcGxpY2F0aW9uJykubmFtZSxcbiAgICByZXF1aXJlKCcuL2NvbW1vbi9zZXJ2aWNlL3V0aWxzJykubmFtZSxcblxuICAgIC8vZGlyZWN0aXZlc1xuICAgIHJlcXVpcmUoJy4vY29tbW9uL2RpcmVjdGl2ZXMvZm9jdXMnKS5uYW1lLFxuICAgIHJlcXVpcmUoJy4vY29tbW9uL2RpcmVjdGl2ZXMvZm9ybWF0dGVkRGF0ZScpLm5hbWUsXG4gICAgcmVxdWlyZSgnLi9jb21tb24vZGlyZWN0aXZlcy9tYXRjaCcpLm5hbWUsXG4gICAgcmVxdWlyZSgnLi9jb21tb24vZGlyZWN0aXZlcy9yY1N1Ym1pdCcpLm5hbWUsXG4gICAgcmVxdWlyZSgnLi9jb21tb24vZGlyZWN0aXZlcy9yY1ZlcmlmeVNldCcpLm5hbWUsXG4gICAgcmVxdWlyZSgnLi9jb21tb24vZGlyZWN0aXZlcy9yZXF1aXJlZFBhdHRlcm4nKS5uYW1lLFxuICAgIHJlcXVpcmUoJy4vY29tbW9uL2RpcmVjdGl2ZXMvc2VsZWN0T25DbGljaycpLm5hbWUsXG5cbiAgICAvL21vZGFsc1xuXG4gICAgLy9maWx0ZXJzXG4gICAgcmVxdWlyZSgnLi9jb21tb24vZmlsdGVycycpLm5hbWVcblxuICAgIF0sIEFwcClcblxuICAgIC5jb25maWcoZnVuY3Rpb24oJHN0YXRlUHJvdmlkZXIsICRsb2NhdGlvblByb3ZpZGVyLCAkbG9nUHJvdmlkZXIsICR1aVZpZXdTY3JvbGxQcm92aWRlciwgJGFuY2hvclNjcm9sbFByb3ZpZGVyKSB7XG4gICAgICAgIC8vIHVzZSB0aGUgSFRNTDUgSGlzdG9yeSBBUElcbiAgICAgICAgJGxvY2F0aW9uUHJvdmlkZXIuaHRtbDVNb2RlKGZhbHNlKTtcblxuICAgICAgICAvLyBkaXNhYmxlcyBhdXRvLXNjcm9sbFxuICAgICAgICAkdWlWaWV3U2Nyb2xsUHJvdmlkZXIudXNlQW5jaG9yU2Nyb2xsKCk7XG4gICAgICAgICRhbmNob3JTY3JvbGxQcm92aWRlci5kaXNhYmxlQXV0b1Njcm9sbGluZygpO1xuXG4gICAgICAgIC8vIHR1cm5zIG9uL29mZiBkZWJ1ZyBjb25zb2xlIGxvZyBzdGF0ZW1lbnRzXG4gICAgICAgICRsb2dQcm92aWRlci5kZWJ1Z0VuYWJsZWQodHJ1ZSk7XG5cbiAgICAgICAgLy8gZGVmaW5lcyByb290IHN0YXRlc1xuICAgICAgICAkc3RhdGVQcm92aWRlclxuICAgICAgICAgICAgLnN0YXRlKCdwdWJsaWMnLCB7XG4gICAgICAgICAgICAgICAgYWJzdHJhY3Q6IHRydWUsXG4gICAgICAgICAgICAgICAgdXJsOiAnLycsXG4gICAgICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICdjb21tb24vdGVtcGxhdGVzL21hc3Rlci50cGwuaHRtbCcsXG4gICAgICAgICAgICAgICAgcmVzb2x2ZToge1xuICAgICAgICAgICAgICAgICAgICBzZWFzb25zOiBmdW5jdGlvbihzZWFzb25TZXJ2aWNlLCBzZWFzb25Nb2RlbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFzZWFzb25Nb2RlbC5sb2FkZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gc2Vhc29uU2VydmljZS5nZXRTZWFzb25zKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLnN0YXRlKCdwcml2YXRlJywge1xuICAgICAgICAgICAgICAgIGFic3RyYWN0OiB0cnVlLFxuICAgICAgICAgICAgICAgIHVybDogJy8nLFxuICAgICAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAnY29tbW9uL3RlbXBsYXRlcy9tYXN0ZXIudHBsLmh0bWwnLFxuICAgICAgICAgICAgICAgIHJlc29sdmU6IHtcbiAgICAgICAgICAgICAgICAgICAgdXNlcjogZnVuY3Rpb24odXNlclNlcnZpY2UsIHVzZXJNb2RlbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHVzZXJNb2RlbC51c2VyLmxvYWRlZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB1c2VyTW9kZWwudXNlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHVzZXJTZXJ2aWNlLmdldEN1cnJlbnRVc2VyKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHNlYXNvbnM6IGZ1bmN0aW9uKHNlYXNvblNlcnZpY2UsIHNlYXNvbk1vZGVsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIXNlYXNvbk1vZGVsLmxvYWRlZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBzZWFzb25TZXJ2aWNlLmdldFNlYXNvbnMoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgfSlcblxuICAgIC5ydW4oZnVuY3Rpb24oJHJvb3RTY29wZSwgJHVybFJvdXRlciwgJGxvZywgYXBwbGljYXRpb25TZXJ2aWNlKSB7XG4gICAgICAgICRsb2cuZGVidWcoXCJBcHBsaWNhdGlvbiBzdGFydGluZyB1cC4uLlwiKTtcbiAgICAgICAgYXBwbGljYXRpb25TZXJ2aWNlLnN0YXJ0dXAoKTtcbiAgICB9KVxuO1xuXG5sb2doQXBwLmZhY3RvcnkoJ2F1dGhJbnRlcmNlcHRvcicsIGZ1bmN0aW9uICgkcSwgJHdpbmRvdywgJGxvY2F0aW9uLCAkdGltZW91dCwgdXNlck1vZGVsLCBtZXNzYWdlTW9kZWwpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICByZXF1ZXN0OiBmdW5jdGlvbiAoY29uZmlnKSB7XG4gICAgICAgICAgICBjb25maWcuaGVhZGVycyA9IGNvbmZpZy5oZWFkZXJzIHx8IHt9O1xuICAgICAgICAgICAgaWYgKCR3aW5kb3cuc2Vzc2lvblN0b3JhZ2UudG9rZW4pIHtcbiAgICAgICAgICAgICAgICBjb25maWcuaGVhZGVycy5BdXRob3JpemF0aW9uID0gJHdpbmRvdy5zZXNzaW9uU3RvcmFnZS50b2tlbjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBjb25maWc7XG4gICAgICAgIH0sXG4gICAgICAgIHJlc3BvbnNlRXJyb3I6IGZ1bmN0aW9uIChyZWplY3Rpb24pIHtcbiAgICAgICAgICB2YXIgbWVzc2FnZTtcbiAgICAgICAgICBpZiAocmVqZWN0aW9uLnN0YXR1cyA9PT0gNDAxKSB7XG4gICAgICAgICAgICAgICAgdmFyIHVybCA9ICRsb2NhdGlvbi51cmwoKTtcbiAgICAgICAgICAgICAgICBtZXNzYWdlID0gcmVqZWN0aW9uLmRhdGEubWVzc2FnZTtcbiAgICAgICAgICAgICAgICAkdGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICB1c2VyTW9kZWwucmVzZXRVc2VyKCk7XG4gICAgICAgICAgICAgICAgICAgIGlmICgkbG9jYXRpb24ucGF0aCgpID09ICcvc2lnbmluJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZU1vZGVsLnNldE1lc3NhZ2UobWVzc2FnZSwgZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZU1vZGVsLnNldE1lc3NhZ2UobWVzc2FnZSwgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAkbG9jYXRpb24udXJsKCcvc2lnbmluJykuc2VhcmNoKHsgcmVkaXJlY3Q6IGVuY29kZVVSSUNvbXBvbmVudCh1cmwpIH0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSwgMjAwKTtcbiAgICAgICAgICB9IGVsc2UgaWYgKHJlamVjdGlvbi5zdGF0dXMgPT09IDQwNCkge1xuICAgICAgICAgICAgICBtZXNzYWdlID0geyB0eXBlOiAnZGFuZ2VyJywgY29udGVudDogJ0hvdXN0b24sIHdlIGhhdmUgYSBwcm9ibGVtLiBQYWdlIG5vdCBmb3VuZC4nIH07XG4gICAgICAgICAgICAgICR0aW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgIG1lc3NhZ2VNb2RlbC5zZXRNZXNzYWdlKG1lc3NhZ2UsIHRydWUpO1xuICAgICAgICAgICAgICAgICAgJGxvY2F0aW9uLnVybCgnLycpO1xuICAgICAgICAgICAgICB9LCAyMDApO1xuICAgICAgICAgIH0gZWxzZSBpZiAocmVqZWN0aW9uLnN0YXR1cy50b1N0cmluZygpLm1hdGNoKC9eNVxcZHsyfSQvKSkge1xuICAgICAgICAgICAgLy8gbWF0Y2hlcyA1eHhcbiAgICAgICAgICAgIG1lc3NhZ2UgPSB7IHR5cGU6ICdkYW5nZXInLCBjb250ZW50OiAnSW50ZXJuYWwgU2VydmVyIEVycm9yJyB9O1xuICAgICAgICAgICAgJHRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICBtZXNzYWdlTW9kZWwuc2V0TWVzc2FnZShtZXNzYWdlLCBmYWxzZSk7XG4gICAgICAgICAgICB9LCAyMDApO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gJHEucmVqZWN0KHJlamVjdGlvbik7XG4gICAgICAgIH1cbiAgICB9O1xufSk7XG5cbmxvZ2hBcHAuY29uZmlnKGZ1bmN0aW9uICgkaHR0cFByb3ZpZGVyKSB7XG4gICAgJGh0dHBQcm92aWRlci5pbnRlcmNlcHRvcnMucHVzaCgnYXV0aEludGVyY2VwdG9yJyk7XG59KTtcblxuXG5cblxuXG5cblxuXG5cbiIsIm1vZHVsZS5leHBvcnRzID0gYW5ndWxhci5tb2R1bGUoJ2xvZ2hBcHAucHVibGljLmZhcS5nZW5lcmFsJywgW10pXG4gIC5jb25maWcoZnVuY3Rpb24oJHN0YXRlUHJvdmlkZXIsICR1cmxSb3V0ZXJQcm92aWRlcikge1xuICAgICRzdGF0ZVByb3ZpZGVyXG4gICAgICAuc3RhdGUoJ3B1YmxpYy5mYXEuZ2VuZXJhbCcsIHtcbiAgICAgICAgdXJsOiAnJyxcbiAgICAgICAgdmlld3M6IHtcbiAgICAgICAgICBmYXFDb250ZW50OiB7XG4gICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ21vZHVsZXMvcHVibGljL2ZhcS9nZW5lcmFsL2ZhcS5nZW5lcmFsLnRwbC5odG1sJ1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgJHVybFJvdXRlclByb3ZpZGVyLm90aGVyd2lzZSgnLycpO1xuICB9KTtcbiIsIm1vZHVsZS5leHBvcnRzID0gYW5ndWxhci5tb2R1bGUoJ2xvZ2hBcHAucHVibGljLmZhcS5waWNrZW0nLCBbXSlcbiAgLmNvbmZpZyhmdW5jdGlvbigkc3RhdGVQcm92aWRlciwgJHVybFJvdXRlclByb3ZpZGVyKSB7XG4gICAgJHN0YXRlUHJvdmlkZXJcbiAgICAgIC5zdGF0ZSgncHVibGljLmZhcS5waWNrZW0nLCB7XG4gICAgICAgIHVybDogJy9waWNrZW0nLFxuICAgICAgICB2aWV3czoge1xuICAgICAgICAgIGZhcUNvbnRlbnQ6IHtcbiAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAnbW9kdWxlcy9wdWJsaWMvZmFxL3BpY2tlbS9mYXEucGlja2VtLnRwbC5odG1sJ1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgJHVybFJvdXRlclByb3ZpZGVyLm90aGVyd2lzZSgnLycpO1xuICB9KTtcbiIsIm1vZHVsZS5leHBvcnRzID0gYW5ndWxhci5tb2R1bGUoJ2xvZ2hBcHAucHVibGljLmZhcS5zdXJ2aXZvcicsIFtdKVxuICAuY29uZmlnKGZ1bmN0aW9uKCRzdGF0ZVByb3ZpZGVyLCAkdXJsUm91dGVyUHJvdmlkZXIpIHtcbiAgICAkc3RhdGVQcm92aWRlclxuICAgICAgLnN0YXRlKCdwdWJsaWMuZmFxLnN1cnZpdm9yJywge1xuICAgICAgICB1cmw6ICcvc3Vydml2b3InLFxuICAgICAgICB2aWV3czoge1xuICAgICAgICAgIGZhcUNvbnRlbnQ6IHtcbiAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAnbW9kdWxlcy9wdWJsaWMvZmFxL3N1cnZpdm9yL2ZhcS5zdXJ2aXZvci50cGwuaHRtbCdcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICR1cmxSb3V0ZXJQcm92aWRlci5vdGhlcndpc2UoJy8nKTtcbiAgfSk7XG4iLCIvKipcbiAqIERlZmluZSB0aGUgYXBwbGljYXRpb24gbW9kZWxzXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gYW5ndWxhci5tb2R1bGUoJ2xvZ2hBcHAubW9kZWxzJywgW10pXG4gICAgLy9tb2RlbHNcbiAgICAuc2VydmljZSgndXNlck1vZGVsJywgcmVxdWlyZSgnLi9Vc2VyTW9kZWwnKSlcbiAgICAuc2VydmljZSgnbWVzc2FnZU1vZGVsJywgcmVxdWlyZSgnLi9NZXNzYWdlTW9kZWwnKSlcbiAgICAuc2VydmljZSgnc2Vhc29uTW9kZWwnLCByZXF1aXJlKCcuL1NlYXNvbk1vZGVsJykpXG47IiwiLyoqXG4gKiBEZWZpbmUgdGhlIHJlbW90ZSBzZXJ2aWNlc1xuICovXG5tb2R1bGUuZXhwb3J0cyA9IGFuZ3VsYXIubW9kdWxlKCdsb2doQXBwLmFwaScsIFtdKVxuICAgICAgLmNvbnN0YW50KCdhcGlDb25maWcnLCByZXF1aXJlKCcuL0FwaUNvbmZpZycpKVxuICAgICAgLnNlcnZpY2UoJ2dhbWVTZXJ2aWNlJywgcmVxdWlyZSgnLi9HYW1lU2VydmljZScpKVxuICAgICAgLnNlcnZpY2UoJ2xlYWd1ZVNlcnZpY2UnLCByZXF1aXJlKCcuL0xlYWd1ZVNlcnZpY2UnKSlcbiAgICAgIC5zZXJ2aWNlKCdwaWNrU2VydmljZScsIHJlcXVpcmUoJy4vUGlja1NlcnZpY2UnKSlcbiAgICAgIC5zZXJ2aWNlKCdzZWFzb25TZXJ2aWNlJywgcmVxdWlyZSgnLi9TZWFzb25TZXJ2aWNlJykpXG4gICAgICAuc2VydmljZSgnc3F1YWRTZXJ2aWNlJywgcmVxdWlyZSgnLi9TcXVhZFNlcnZpY2UnKSlcbiAgICAgIC5zZXJ2aWNlKCdzdGF0c1NlcnZpY2UnLCByZXF1aXJlKCcuL1N0YXRzU2VydmljZScpKVxuICAgICAgLnNlcnZpY2UoJ3RlYW1TZXJ2aWNlJywgcmVxdWlyZSgnLi9UZWFtU2VydmljZScpKVxuICAgICAgLnNlcnZpY2UoJ3VzZXJTZXJ2aWNlJywgcmVxdWlyZSgnLi9Vc2VyU2VydmljZScpKVxuICAgICAgLnNlcnZpY2UoJ3dlZWtTZXJ2aWNlJywgcmVxdWlyZSgnLi9XZWVrU2VydmljZScpKVxuO1xuIiwiLy8gc2Vzc2lvbiBjb21tYW5kc1xucmVxdWlyZSgnLi9zZXNzaW9uL1NpZ25pbkNvbW1hbmQnKTtcbnJlcXVpcmUoJy4vc2Vzc2lvbi9TaWdub3V0Q29tbWFuZCcpO1xuXG4vLyB1c2VyIGNvbW1hbmRzXG5yZXF1aXJlKCcuL3VzZXIvR2V0Q3VycmVudFVzZXJDb21tYW5kJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gYW5ndWxhci5tb2R1bGUoJ2xvZ2hBcHAuY29tbWFuZENvbmZpZycsIFtdKVxuICAgIC5jb25maWcoZnVuY3Rpb24oJGNvbW1hbmd1bGFyUHJvdmlkZXIpIHtcblxuICAgICAgICAvLyBzZXNzaW9uIGV2ZW50c1xuICAgICAgICAkY29tbWFuZ3VsYXJQcm92aWRlci5tYXBUbygnU2lnbmluRXZlbnQnKS5hc1NlcXVlbmNlKClcbiAgICAgICAgICAgIC5hZGQoJ1NpZ25pbkNvbW1hbmQnKTtcbiAgICAgICAgJGNvbW1hbmd1bGFyUHJvdmlkZXIubWFwVG8oJ1NpZ25vdXRFdmVudCcpLmFzU2VxdWVuY2UoKVxuICAgICAgICAgICAgLmFkZCgnU2lnbm91dENvbW1hbmQnKTtcblxuICAgICAgICAvLyB1c2VyIGV2ZW50c1xuICAgICAgICAkY29tbWFuZ3VsYXJQcm92aWRlci5tYXBUbygnR2V0Q3VycmVudFVzZXJFdmVudCcpLmFzU2VxdWVuY2UoKVxuICAgICAgICAgICAgLmFkZCgnR2V0Q3VycmVudFVzZXJDb21tYW5kJyk7XG5cbiAgICB9XG4pO1xuXG4iLCJtb2R1bGUuZXhwb3J0cyA9IGFuZ3VsYXIubW9kdWxlKCdsb2doQXBwLnB1YmxpYy5mYXEnLCBbXSlcbiAgLmNvbnRyb2xsZXIoJ0ZhcUNvbnRyb2xsZXInLCByZXF1aXJlKCcuL0ZhcUNvbnRyb2xsZXInKSlcbiAgLmNvbmZpZyhmdW5jdGlvbigkc3RhdGVQcm92aWRlciwgJHVybFJvdXRlclByb3ZpZGVyKSB7XG4gICAgJHN0YXRlUHJvdmlkZXJcbiAgICAgIC5zdGF0ZSgncHVibGljLmZhcScsIHtcbiAgICAgICAgdXJsOiAnZmFxJyxcbiAgICAgICAgYWJzdHJhY3Q6IHRydWUsXG4gICAgICAgIHZpZXdzOiB7XG4gICAgICAgICAgaGVhZGVyOiB7XG4gICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ2NvbW1vbi9tb2R1bGVzL2hlYWRlci9oZWFkZXIudHBsLmh0bWwnLFxuICAgICAgICAgICAgY29udHJvbGxlcjogJ0hlYWRlckNvbnRyb2xsZXInXG4gICAgICAgICAgfSxcbiAgICAgICAgICBtZXNzYWdlOiB7XG4gICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ2NvbW1vbi9tb2R1bGVzL21lc3NhZ2UvbWVzc2FnZS50cGwuaHRtbCcsXG4gICAgICAgICAgICBjb250cm9sbGVyOiAnTWVzc2FnZUNvbnRyb2xsZXInXG4gICAgICAgICAgfSxcbiAgICAgICAgICBjb250ZW50OiB7XG4gICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ21vZHVsZXMvcHVibGljL2ZhcS9mYXEudHBsLmh0bWwnLFxuICAgICAgICAgICAgY29udHJvbGxlcjogJ0ZhcUNvbnRyb2xsZXInXG4gICAgICAgICAgfSxcbiAgICAgICAgICBmb290ZXI6IHtcbiAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAnY29tbW9uL21vZHVsZXMvZm9vdGVyL2Zvb3Rlci50cGwuaHRtbCcsXG4gICAgICAgICAgICBjb250cm9sbGVyOiAnRm9vdGVyQ29udHJvbGxlcidcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICR1cmxSb3V0ZXJQcm92aWRlci5vdGhlcndpc2UoJy8nKTtcbiAgfSk7XG4iLCJcbm1vZHVsZS5leHBvcnRzID0gYW5ndWxhci5tb2R1bGUoJ2xvZ2hBcHAucHVibGljLmhvbWUnLCBbXSlcbiAgICAuY29udHJvbGxlcignSG9tZUNvbnRyb2xsZXInLCByZXF1aXJlKCcuL0hvbWVDb250cm9sbGVyJykpXG4gICAgLmNvbmZpZyhmdW5jdGlvbigkc3RhdGVQcm92aWRlciwgJHVybFJvdXRlclByb3ZpZGVyKSB7XG4gICAgICAgICRzdGF0ZVByb3ZpZGVyXG4gICAgICAgICAgICAuc3RhdGUoJ3B1YmxpYy5ob21lJywge1xuICAgICAgICAgICAgICAgIHVybDogJycsXG4gICAgICAgICAgICAgICAgdmlld3M6IHtcbiAgICAgICAgICAgICAgICAgICAgaGVhZGVyOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ2NvbW1vbi9tb2R1bGVzL2hlYWRlci9oZWFkZXIudHBsLmh0bWwnLFxuICAgICAgICAgICAgICAgICAgICAgICAgY29udHJvbGxlcjogJ0hlYWRlckNvbnRyb2xsZXInXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGxhbmRpbmdNZXNzYWdlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ2NvbW1vbi9tb2R1bGVzL21lc3NhZ2UvbWVzc2FnZS50cGwuaHRtbCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250cm9sbGVyOiAnTWVzc2FnZUNvbnRyb2xsZXInXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGxhbmRpbmc6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAnbW9kdWxlcy9wdWJsaWMvaG9tZS9ob21lLnRwbC5odG1sJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRyb2xsZXI6ICdIb21lQ29udHJvbGxlcidcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAkdXJsUm91dGVyUHJvdmlkZXIub3RoZXJ3aXNlKCcvJyk7XG4gICAgfSk7IiwiLyoqXG4gKiBEZWZpbmUgdGhlIGFwcGxpY2F0aW9uIGZpbHRlcnNcbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBhbmd1bGFyLm1vZHVsZSgnbG9naEFwcC5maWx0ZXJzJywgW10pXG4gICAgLy9maWx0ZXJzXG4gICAgLmZpbHRlcignb2Zmc2V0RmlsdGVyJywgcmVxdWlyZSgnLi9PZmZzZXRGaWx0ZXInKSlcbiAgICAuZmlsdGVyKCdhY3RpdmVUZWFtRmlsdGVyJywgcmVxdWlyZSgnLi9BY3RpdmVUZWFtRmlsdGVyJykpXG4gICAgLmZpbHRlcignbWFuYWdlZExlYWd1ZUZpbHRlcicsIHJlcXVpcmUoJy4vTWFuYWdlZExlYWd1ZUZpbHRlcicpKVxuICAgIC5maWx0ZXIoJ3RpbWVGaWx0ZXInLCByZXF1aXJlKCcuL1RpbWVGaWx0ZXInKSlcbiAgICAuZmlsdGVyKCd3ZWVrUGlja3NGaWx0ZXInLCByZXF1aXJlKCcuL1dlZWtQaWNrc0ZpbHRlcicpKVxuO1xuIiwibW9kdWxlLmV4cG9ydHMgPSBhbmd1bGFyLm1vZHVsZSgnbG9naEFwcC5hYnVzZScsIFtdKVxuICAuY29udHJvbGxlcignQWJ1c2VDb250cm9sbGVyJywgcmVxdWlyZSgnLi9BYnVzZUNvbnRyb2xsZXInKSk7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGFuZ3VsYXIubW9kdWxlKCdsb2doQXBwLnB1YmxpYy5zaWduaW4nLCBbXSlcbiAgLmNvbnRyb2xsZXIoJ1NpZ25pbkNvbnRyb2xsZXInLCByZXF1aXJlKCcuL1NpZ25pbkNvbnRyb2xsZXInKSlcbiAgLmNvbmZpZyhmdW5jdGlvbigkc3RhdGVQcm92aWRlciwgJHVybFJvdXRlclByb3ZpZGVyKSB7XG4gICAgJHN0YXRlUHJvdmlkZXJcbiAgICAgIC5zdGF0ZSgncHVibGljLnNpZ25pbicsIHtcbiAgICAgICAgdXJsOiAnc2lnbmluJyxcbiAgICAgICAgdmlld3M6IHtcbiAgICAgICAgICBoZWFkZXI6IHtcbiAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAnY29tbW9uL21vZHVsZXMvaGVhZGVyL2hlYWRlci50cGwuaHRtbCcsXG4gICAgICAgICAgICBjb250cm9sbGVyOiAnSGVhZGVyQ29udHJvbGxlcidcbiAgICAgICAgICB9LFxuICAgICAgICAgIG1lc3NhZ2U6IHtcbiAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAnY29tbW9uL21vZHVsZXMvbWVzc2FnZS9tZXNzYWdlLnRwbC5odG1sJyxcbiAgICAgICAgICAgIGNvbnRyb2xsZXI6ICdNZXNzYWdlQ29udHJvbGxlcidcbiAgICAgICAgICB9LFxuICAgICAgICAgIGNvbnRlbnQ6IHtcbiAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAnbW9kdWxlcy9wdWJsaWMvc2lnbmluL3NpZ25pbi50cGwuaHRtbCcsXG4gICAgICAgICAgICBjb250cm9sbGVyOiAnU2lnbmluQ29udHJvbGxlcidcbiAgICAgICAgICB9LFxuICAgICAgICAgIGZvb3Rlcjoge1xuICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICdjb21tb24vbW9kdWxlcy9mb290ZXIvZm9vdGVyLnRwbC5odG1sJyxcbiAgICAgICAgICAgIGNvbnRyb2xsZXI6ICdGb290ZXJDb250cm9sbGVyJ1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgJHVybFJvdXRlclByb3ZpZGVyLm90aGVyd2lzZSgnLycpO1xuICB9KTtcbiIsIm1vZHVsZS5leHBvcnRzID0gYW5ndWxhci5tb2R1bGUoJ2xvZ2hBcHAucmVnaXN0ZXInLCBbXSlcbiAgLmNvbnRyb2xsZXIoJ1JlZ2lzdGVyQ29udHJvbGxlcicsIHJlcXVpcmUoJy4vUmVnaXN0ZXJDb250cm9sbGVyJykpO1xuIiwibW9kdWxlLmV4cG9ydHMgPSBhbmd1bGFyLm1vZHVsZSgnbG9naEFwcC51c2VyJywgW10pXG4gICAgLmNvbnRyb2xsZXIoJ1VzZXJDb250cm9sbGVyJywgcmVxdWlyZSgnLi9Vc2VyQ29udHJvbGxlcicpKVxuICAgIC5jb25maWcoZnVuY3Rpb24oJHN0YXRlUHJvdmlkZXIsICR1cmxSb3V0ZXJQcm92aWRlcikge1xuICAgICAgICAkc3RhdGVQcm92aWRlclxuICAgICAgICAgICAgLnN0YXRlKCdwcml2YXRlLnVzZXInLCB7XG4gICAgICAgICAgICAgICAgdXJsOiAndXNlcicsXG4gICAgICAgICAgICAgICAgdmlld3M6IHtcbiAgICAgICAgICAgICAgICAgICAgaGVhZGVyOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ2NvbW1vbi9tb2R1bGVzL2hlYWRlci9oZWFkZXIudHBsLmh0bWwnLFxuICAgICAgICAgICAgICAgICAgICAgICAgY29udHJvbGxlcjogJ0hlYWRlckNvbnRyb2xsZXInXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAnY29tbW9uL21vZHVsZXMvbWVzc2FnZS9tZXNzYWdlLnRwbC5odG1sJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRyb2xsZXI6ICdNZXNzYWdlQ29udHJvbGxlcidcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgY29udGVudDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICdtb2R1bGVzL3ByaXZhdGUvdXNlci91c2VyLnRwbC5odG1sJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRyb2xsZXI6ICdVc2VyQ29udHJvbGxlcidcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgZm9vdGVyOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ2NvbW1vbi9tb2R1bGVzL2Zvb3Rlci9mb290ZXIudHBsLmh0bWwnLFxuICAgICAgICAgICAgICAgICAgICAgICAgY29udHJvbGxlcjogJ0Zvb3RlckNvbnRyb2xsZXInXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgJHVybFJvdXRlclByb3ZpZGVyLm90aGVyd2lzZSgnLycpO1xuICAgIH0pO1xuIiwibW9kdWxlLmV4cG9ydHMgPSBhbmd1bGFyLm1vZHVsZSgnbG9naEFwcC5sZWFndWUnLCBbXSlcbiAgICAuY29udHJvbGxlcignTGVhZ3VlQ29udHJvbGxlcicsIHJlcXVpcmUoJy4vTGVhZ3VlQ29udHJvbGxlcicpKVxuICAgIC5jb25maWcoZnVuY3Rpb24oJHN0YXRlUHJvdmlkZXIsICR1cmxSb3V0ZXJQcm92aWRlcikge1xuICAgICAgICAkc3RhdGVQcm92aWRlclxuICAgICAgICAgICAgLnN0YXRlKCdwcml2YXRlLmxlYWd1ZScsIHtcbiAgICAgICAgICAgICAgICBhYnN0cmFjdDogdHJ1ZSxcbiAgICAgICAgICAgICAgICB1cmw6ICdzZWFzb24ve3NlYXNvbklkfS9sZWFndWUnLFxuICAgICAgICAgICAgICAgIHZpZXdzOiB7XG4gICAgICAgICAgICAgICAgICAgIGhlYWRlcjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICdjb21tb24vbW9kdWxlcy9oZWFkZXIvaGVhZGVyLnRwbC5odG1sJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRyb2xsZXI6ICdIZWFkZXJDb250cm9sbGVyJ1xuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ2NvbW1vbi9tb2R1bGVzL21lc3NhZ2UvbWVzc2FnZS50cGwuaHRtbCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250cm9sbGVyOiAnTWVzc2FnZUNvbnRyb2xsZXInXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAnbW9kdWxlcy9wcml2YXRlL2xlYWd1ZS9sZWFndWUudHBsLmh0bWwnLFxuICAgICAgICAgICAgICAgICAgICAgICAgY29udHJvbGxlcjogJ0xlYWd1ZUNvbnRyb2xsZXInXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGZvb3Rlcjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICdjb21tb24vbW9kdWxlcy9mb290ZXIvZm9vdGVyLnRwbC5odG1sJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRyb2xsZXI6ICdGb290ZXJDb250cm9sbGVyJ1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICR1cmxSb3V0ZXJQcm92aWRlci5vdGhlcndpc2UoJy8nKTtcbiAgICB9KTtcbiIsIm1vZHVsZS5leHBvcnRzID0gYW5ndWxhci5tb2R1bGUoJ2xvZ2hBcHAubGVhZ3VlcycsIFtdKVxuICAgIC5jb250cm9sbGVyKCdMZWFndWVzQ29udHJvbGxlcicsIHJlcXVpcmUoJy4vTGVhZ3Vlc0NvbnRyb2xsZXInKSlcbiAgICAuY29uZmlnKGZ1bmN0aW9uKCRzdGF0ZVByb3ZpZGVyLCAkdXJsUm91dGVyUHJvdmlkZXIpIHtcbiAgICAgICAgJHN0YXRlUHJvdmlkZXJcbiAgICAgICAgICAgIC5zdGF0ZSgncHJpdmF0ZS5sZWFndWVzJywge1xuICAgICAgICAgICAgICAgIGFic3RyYWN0OiB0cnVlLFxuICAgICAgICAgICAgICAgIHVybDogJ3NlYXNvbi97c2Vhc29uSWR9L2xlYWd1ZXMnLFxuICAgICAgICAgICAgICAgIHZpZXdzOiB7XG4gICAgICAgICAgICAgICAgICAgIGhlYWRlcjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICdjb21tb24vbW9kdWxlcy9oZWFkZXIvaGVhZGVyLnRwbC5odG1sJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRyb2xsZXI6ICdIZWFkZXJDb250cm9sbGVyJ1xuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ2NvbW1vbi9tb2R1bGVzL21lc3NhZ2UvbWVzc2FnZS50cGwuaHRtbCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250cm9sbGVyOiAnTWVzc2FnZUNvbnRyb2xsZXInXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAnbW9kdWxlcy9wcml2YXRlL2xlYWd1ZXMvbGVhZ3Vlcy50cGwuaHRtbCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250cm9sbGVyOiAnTGVhZ3Vlc0NvbnRyb2xsZXInXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGZvb3Rlcjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICdjb21tb24vbW9kdWxlcy9mb290ZXIvZm9vdGVyLnRwbC5odG1sJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRyb2xsZXI6ICdGb290ZXJDb250cm9sbGVyJ1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICR1cmxSb3V0ZXJQcm92aWRlci5vdGhlcndpc2UoJy8nKTtcbiAgICB9KTtcblxuIiwibW9kdWxlLmV4cG9ydHMgPSBhbmd1bGFyLm1vZHVsZSgnbG9naEFwcC50ZWFtJywgW10pXG4gICAgLmNvbnRyb2xsZXIoJ1RlYW1Db250cm9sbGVyJywgcmVxdWlyZSgnLi9UZWFtQ29udHJvbGxlcicpKVxuICAgIC5jb25maWcoZnVuY3Rpb24oJHN0YXRlUHJvdmlkZXIsICR1cmxSb3V0ZXJQcm92aWRlcikge1xuICAgICAgICAkc3RhdGVQcm92aWRlclxuICAgICAgICAgICAgLnN0YXRlKCdwcml2YXRlLnRlYW0nLCB7XG4gICAgICAgICAgICAgICAgYWJzdHJhY3Q6IHRydWUsXG4gICAgICAgICAgICAgICAgdXJsOiAnc2Vhc29uL3tzZWFzb25JZH0vbGVhZ3VlL3tsZWFndWVJZH0vdGVhbScsXG4gICAgICAgICAgICAgICAgdmlld3M6IHtcbiAgICAgICAgICAgICAgICAgICAgaGVhZGVyOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ2NvbW1vbi9tb2R1bGVzL2hlYWRlci9oZWFkZXIudHBsLmh0bWwnLFxuICAgICAgICAgICAgICAgICAgICAgICAgY29udHJvbGxlcjogJ0hlYWRlckNvbnRyb2xsZXInXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAnY29tbW9uL21vZHVsZXMvbWVzc2FnZS9tZXNzYWdlLnRwbC5odG1sJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRyb2xsZXI6ICdNZXNzYWdlQ29udHJvbGxlcidcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgY29udGVudDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICdtb2R1bGVzL3ByaXZhdGUvdGVhbS90ZWFtLnRwbC5odG1sJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRyb2xsZXI6ICdUZWFtQ29udHJvbGxlcidcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgZm9vdGVyOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ2NvbW1vbi9tb2R1bGVzL2Zvb3Rlci9mb290ZXIudHBsLmh0bWwnLFxuICAgICAgICAgICAgICAgICAgICAgICAgY29udHJvbGxlcjogJ0Zvb3RlckNvbnRyb2xsZXInXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICAkdXJsUm91dGVyUHJvdmlkZXIub3RoZXJ3aXNlKCcvJyk7XG4gICAgfSk7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGFuZ3VsYXIubW9kdWxlKCdsb2doQXBwLnBsYXknLCBbXSlcbiAgLmNvbnRyb2xsZXIoJ1BsYXlDb250cm9sbGVyJywgcmVxdWlyZSgnLi9QbGF5Q29udHJvbGxlcicpKVxuICAuY29uZmlnKGZ1bmN0aW9uKCRzdGF0ZVByb3ZpZGVyLCAkdXJsUm91dGVyUHJvdmlkZXIpIHtcbiAgICAkc3RhdGVQcm92aWRlclxuICAgICAgLnN0YXRlKCdwcml2YXRlLnBsYXknLCB7XG4gICAgICAgIGFic3RyYWN0OiB0cnVlLFxuICAgICAgICB1cmw6ICdzZWFzb24ve3NlYXNvbklkfS9teScsXG4gICAgICAgIHZpZXdzOiB7XG4gICAgICAgICAgaGVhZGVyOiB7XG4gICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ2NvbW1vbi9tb2R1bGVzL2hlYWRlci9oZWFkZXIudHBsLmh0bWwnLFxuICAgICAgICAgICAgY29udHJvbGxlcjogJ0hlYWRlckNvbnRyb2xsZXInXG4gICAgICAgICAgfSxcbiAgICAgICAgICBtZXNzYWdlOiB7XG4gICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ2NvbW1vbi9tb2R1bGVzL21lc3NhZ2UvbWVzc2FnZS50cGwuaHRtbCcsXG4gICAgICAgICAgICBjb250cm9sbGVyOiAnTWVzc2FnZUNvbnRyb2xsZXInXG4gICAgICAgICAgfSxcbiAgICAgICAgICBjb250ZW50OiB7XG4gICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ21vZHVsZXMvcHJpdmF0ZS9wbGF5L3BsYXkudHBsLmh0bWwnLFxuICAgICAgICAgICAgY29udHJvbGxlcjogJ1BsYXlDb250cm9sbGVyJ1xuICAgICAgICAgIH0sXG4gICAgICAgICAgZm9vdGVyOiB7XG4gICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ2NvbW1vbi9tb2R1bGVzL2Zvb3Rlci9mb290ZXIudHBsLmh0bWwnLFxuICAgICAgICAgICAgY29udHJvbGxlcjogJ0Zvb3RlckNvbnRyb2xsZXInXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAkdXJsUm91dGVyUHJvdmlkZXIub3RoZXJ3aXNlKCcvJyk7XG4gIH0pO1xuXG4iLCJtb2R1bGUuZXhwb3J0cyA9IGFuZ3VsYXIubW9kdWxlKCdsb2doQXBwLmFkbWluJywgW10pXG4gIC5jb250cm9sbGVyKCdBZG1pbkNvbnRyb2xsZXInLCByZXF1aXJlKCcuL0FkbWluQ29udHJvbGxlcicpKVxuICAuY29uZmlnKGZ1bmN0aW9uKCRzdGF0ZVByb3ZpZGVyLCAkdXJsUm91dGVyUHJvdmlkZXIpIHtcbiAgICAkc3RhdGVQcm92aWRlclxuICAgICAgLnN0YXRlKCdwcml2YXRlLmFkbWluJywge1xuICAgICAgICBhYnN0cmFjdDogdHJ1ZSxcbiAgICAgICAgdXJsOiAnYWRtaW4vJyxcbiAgICAgICAgdmlld3M6IHtcbiAgICAgICAgICBoZWFkZXI6IHtcbiAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAnY29tbW9uL21vZHVsZXMvaGVhZGVyL2hlYWRlci50cGwuaHRtbCcsXG4gICAgICAgICAgICBjb250cm9sbGVyOiAnSGVhZGVyQ29udHJvbGxlcidcbiAgICAgICAgICB9LFxuICAgICAgICAgIG1lc3NhZ2U6IHtcbiAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAnY29tbW9uL21vZHVsZXMvbWVzc2FnZS9tZXNzYWdlLnRwbC5odG1sJyxcbiAgICAgICAgICAgIGNvbnRyb2xsZXI6ICdNZXNzYWdlQ29udHJvbGxlcidcbiAgICAgICAgICB9LFxuICAgICAgICAgIGNvbnRlbnQ6IHtcbiAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAnbW9kdWxlcy9wcml2YXRlL2FkbWluL2FkbWluLnRwbC5odG1sJyxcbiAgICAgICAgICAgIGNvbnRyb2xsZXI6ICdBZG1pbkNvbnRyb2xsZXInXG4gICAgICAgICAgfSxcbiAgICAgICAgICBmb290ZXI6IHtcbiAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAnY29tbW9uL21vZHVsZXMvZm9vdGVyL2Zvb3Rlci50cGwuaHRtbCcsXG4gICAgICAgICAgICBjb250cm9sbGVyOiAnRm9vdGVyQ29udHJvbGxlcidcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICR1cmxSb3V0ZXJQcm92aWRlci5vdGhlcndpc2UoJy8nKTtcbiAgfSk7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGFuZ3VsYXIubW9kdWxlKCdsb2doQXBwLmhlYWRlcicsIFtdKVxuICAgIC5jb250cm9sbGVyKCdIZWFkZXJDb250cm9sbGVyJywgcmVxdWlyZSgnLi9IZWFkZXJDb250cm9sbGVyJykpIiwibW9kdWxlLmV4cG9ydHMgPSBhbmd1bGFyLm1vZHVsZSgnbG9naEFwcC5tZXNzYWdlJywgW10pXG4gICAgLmNvbnRyb2xsZXIoJ01lc3NhZ2VDb250cm9sbGVyJywgcmVxdWlyZSgnLi9NZXNzYWdlQ29udHJvbGxlcicpKTsiLCJtb2R1bGUuZXhwb3J0cyA9IGFuZ3VsYXIubW9kdWxlKCdsb2doQXBwLmZvb3RlcicsIFtdKVxuICAuY29udHJvbGxlcignRm9vdGVyQ29udHJvbGxlcicsIHJlcXVpcmUoJy4vRm9vdGVyQ29udHJvbGxlcicpKSIsIm1vZHVsZS5leHBvcnRzID0gYW5ndWxhci5tb2R1bGUoJ2xvZ2guY29uZmlybScsIFtdKVxuICAuY29udHJvbGxlcignQ29uZmlybUNvbnRyb2xsZXInLCByZXF1aXJlKCcuL0NvbmZpcm1Db250cm9sbGVyJykpO1xuIiwiLyoqXG4gKiBEZWZpbmUgdGhlIGFwcGxpY2F0aW9uIHNlcnZpY2VcbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBhbmd1bGFyLm1vZHVsZSgnbG9naC5hcHBsaWNhdGlvbicsIFtdKVxuICAgIC5zZXJ2aWNlKCdhcHBsaWNhdGlvblNlcnZpY2UnLCByZXF1aXJlKCcuL0FwcGxpY2F0aW9uU2VydmljZScpKTsiLCJtb2R1bGUuZXhwb3J0cyA9IGFuZ3VsYXIubW9kdWxlKCdsb2doLnV0aWxzJywgW10pXG4gIC5zZXJ2aWNlKCdkYXRlVXRpbHMnLCByZXF1aXJlKCcuL0RhdGVVdGlscycpKTsiLCIvL2FwcGxpY2F0aW9uIGRpcmVjdGl2ZXNcbm1vZHVsZS5leHBvcnRzID0gYW5ndWxhci5tb2R1bGUoJ2xvZ2hBcHAuZGlyZWN0aXZlcy5mb2N1cycsW10pXG4gICAgLmRpcmVjdGl2ZSgnbG9naEZvY3VzJywgcmVxdWlyZSgnLi9Gb2N1c0RpcmVjdGl2ZScpKVxuO1xuIiwiLy9hcHBsaWNhdGlvbiBkaXJlY3RpdmVzXG5tb2R1bGUuZXhwb3J0cyA9IGFuZ3VsYXIubW9kdWxlKCdsb2doLmRpcmVjdGl2ZXMuZm9ybWF0dGVkRGF0ZScsW10pXG4gIC5kaXJlY3RpdmUoJ2Zvcm1hdHRlZERhdGUnLCByZXF1aXJlKCcuL0Zvcm1hdHRlZERhdGVEaXJlY3RpdmUnKSlcbjtcbiIsIi8vYXBwbGljYXRpb24gZGlyZWN0aXZlc1xubW9kdWxlLmV4cG9ydHMgPSBhbmd1bGFyLm1vZHVsZSgnbG9naEFwcC5kaXJlY3RpdmVzLm1hdGNoJyxbXSlcbiAgICAuZGlyZWN0aXZlKCdtYXRjaCcsIHJlcXVpcmUoJy4vTWF0Y2hEaXJlY3RpdmUnKSlcbjtcbiIsIi8vYXBwbGljYXRpb24gZGlyZWN0aXZlc1xubW9kdWxlLmV4cG9ydHMgPSBhbmd1bGFyLm1vZHVsZSgnbG9naC5kaXJlY3RpdmVzLnJjU3VibWl0JyxbXSlcbiAgLmRpcmVjdGl2ZSgncmNTdWJtaXQnLCByZXF1aXJlKCcuL1JDU3VibWl0RGlyZWN0aXZlJykpO1xuIiwiLy9hcHBsaWNhdGlvbiBkaXJlY3RpdmVzXG5tb2R1bGUuZXhwb3J0cyA9IGFuZ3VsYXIubW9kdWxlKCdsb2doLmRpcmVjdGl2ZXMucmNWZXJpZnlTZXQnLFtdKVxuICAuZGlyZWN0aXZlKCdyY1ZlcmlmeVNldCcsIHJlcXVpcmUoJy4vUkNWZXJpZnlTZXREaXJlY3RpdmUnKSk7XG4iLCIvL2FwcGxpY2F0aW9uIGRpcmVjdGl2ZXNcbm1vZHVsZS5leHBvcnRzID0gYW5ndWxhci5tb2R1bGUoJ2xvZ2hBcHAuZGlyZWN0aXZlcy5yZXF1aXJlZFBhdHRlcm4nLFtdKVxuICAgIC5kaXJlY3RpdmUoJ3JwYXR0ZXJuJywgcmVxdWlyZSgnLi9SZXF1aXJlZFBhdHRlcm5EaXJlY3RpdmUnKSlcbjtcbiIsIi8vYXBwbGljYXRpb24gZGlyZWN0aXZlc1xubW9kdWxlLmV4cG9ydHMgPSBhbmd1bGFyLm1vZHVsZSgnbG9naEFwcC5kaXJlY3RpdmVzLnNlbGVjdE9uQ2xpY2snLFtdKVxuICAuZGlyZWN0aXZlKCdzZWxlY3RPbkNsaWNrJywgcmVxdWlyZSgnLi9TZWxlY3RPbkNsaWNrRGlyZWN0aXZlJykpXG47XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGFuZ3VsYXIubW9kdWxlKCdsb2doQXBwLnJlZ2lzdGVyLnRlcm1zJywgW10pXG4gIC5jb250cm9sbGVyKCdSZWdpc3RlclRlcm1zQ29udHJvbGxlcicsIHJlcXVpcmUoJy4vUmVnaXN0ZXJUZXJtc0NvbnRyb2xsZXInKSk7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGFuZ3VsYXIubW9kdWxlKCdsb2doQXBwLnVzZXIucmVzZXQnLCBbXSlcbiAgLmNvbnRyb2xsZXIoJ1VzZXJSZXNldENvbnRyb2xsZXInLCByZXF1aXJlKCcuL1VzZXJSZXNldENvbnRyb2xsZXInKSk7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGFuZ3VsYXIubW9kdWxlKCdsb2doQXBwLmxlYWd1ZS52aWV3JywgW10pXG4gIC5jb250cm9sbGVyKCdWaWV3TGVhZ3VlQ29udHJvbGxlcicsIHJlcXVpcmUoJy4vVmlld0xlYWd1ZUNvbnRyb2xsZXInKSlcbiAgLmNvbmZpZyhmdW5jdGlvbigkc3RhdGVQcm92aWRlciwgJHVybFJvdXRlclByb3ZpZGVyKSB7XG4gICAgJHN0YXRlUHJvdmlkZXJcbiAgICAgIC5zdGF0ZSgncHJpdmF0ZS5sZWFndWUudmlldycsIHtcbiAgICAgICAgdXJsOiAnL3tsZWFndWVJZH0/d2VlaycsXG4gICAgICAgIHZpZXdzOiB7XG4gICAgICAgICAgbGVhZ3VlQ29udGVudDoge1xuICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICdtb2R1bGVzL3ByaXZhdGUvbGVhZ3VlL3ZpZXcvbGVhZ3VlLnZpZXcudHBsLmh0bWwnLFxuICAgICAgICAgICAgY29udHJvbGxlcjogJ1ZpZXdMZWFndWVDb250cm9sbGVyJ1xuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgcmVzb2x2ZToge1xuICAgICAgICAgIGxlYWd1ZTogZnVuY3Rpb24obGVhZ3VlU2VydmljZSwgJHN0YXRlUGFyYW1zKSB7XG4gICAgICAgICAgICByZXR1cm4gbGVhZ3VlU2VydmljZS5nZXRMZWFndWUoJHN0YXRlUGFyYW1zLnNlYXNvbklkLCAkc3RhdGVQYXJhbXMubGVhZ3VlSWQpO1xuICAgICAgICAgIH0sXG4gICAgICAgICAgbGVhZ3VlV2Vla3M6IGZ1bmN0aW9uKGxlYWd1ZSwgd2Vla1NlcnZpY2UpIHtcbiAgICAgICAgICAgIHJldHVybiB3ZWVrU2VydmljZS5nZXRMZWFndWVXZWVrcyh7IHNlYXNvbklkOiBsZWFndWUuZGF0YS5zZWFzb25faWQsIGxlYWd1ZUlkOiBsZWFndWUuZGF0YS5pZCB9KTtcbiAgICAgICAgICB9LFxuICAgICAgICAgIGxlYWd1ZVRlYW1zOiBmdW5jdGlvbihsZWFndWUsIHRlYW1TZXJ2aWNlLCAkc3RhdGVQYXJhbXMpIHtcbiAgICAgICAgICAgIHJldHVybiB0ZWFtU2VydmljZS5nZXRBbGxMZWFndWVUZWFtcyh7IHNlYXNvbklkOiBsZWFndWUuZGF0YS5zZWFzb25faWQsIGxlYWd1ZUlkOiBsZWFndWUuZGF0YS5pZCwgd2Vla1NsdWc6ICRzdGF0ZVBhcmFtcy53ZWVrIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgJHVybFJvdXRlclByb3ZpZGVyLm90aGVyd2lzZSgnLycpO1xuICB9KTtcbiIsIm1vZHVsZS5leHBvcnRzID0gYW5ndWxhci5tb2R1bGUoJ2xvZ2hBcHAubGVhZ3VlLm5ldycsIFtdKVxuICAuY29udHJvbGxlcignTmV3TGVhZ3VlQ29udHJvbGxlcicsIHJlcXVpcmUoJy4vTmV3TGVhZ3VlQ29udHJvbGxlcicpKVxuICAuY29uZmlnKGZ1bmN0aW9uKCRzdGF0ZVByb3ZpZGVyLCAkdXJsUm91dGVyUHJvdmlkZXIpIHtcbiAgICAkc3RhdGVQcm92aWRlclxuICAgICAgLnN0YXRlKCdwcml2YXRlLmxlYWd1ZS5uZXcnLCB7XG4gICAgICAgIHVybDogJy9uZXcnLFxuICAgICAgICB2aWV3czoge1xuICAgICAgICAgIGxlYWd1ZUNvbnRlbnQ6IHtcbiAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAnbW9kdWxlcy9wcml2YXRlL2xlYWd1ZS9uZXcvbGVhZ3VlLm5ldy50cGwuaHRtbCcsXG4gICAgICAgICAgICBjb250cm9sbGVyOiAnTmV3TGVhZ3VlQ29udHJvbGxlcidcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHJlc29sdmU6IHtcbiAgICAgICAgICBzZWFzb25JZDogZnVuY3Rpb24oJHN0YXRlUGFyYW1zKSB7XG4gICAgICAgICAgICByZXR1cm4gcGFyc2VJbnQoJHN0YXRlUGFyYW1zLnNlYXNvbklkKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHJlbG9hZE9uU2VhcmNoOiBmYWxzZVxuICAgICAgfSk7XG4gICAgJHVybFJvdXRlclByb3ZpZGVyLm90aGVyd2lzZSgnLycpO1xuICB9KTtcbiIsIm1vZHVsZS5leHBvcnRzID0gYW5ndWxhci5tb2R1bGUoJ2xvZ2hBcHAubGVhZ3VlLmVkaXQnLCBbXSlcbiAgLmNvbnRyb2xsZXIoJ0VkaXRMZWFndWVDb250cm9sbGVyJywgcmVxdWlyZSgnLi9FZGl0TGVhZ3VlQ29udHJvbGxlcicpKVxuICAuY29uZmlnKGZ1bmN0aW9uKCRzdGF0ZVByb3ZpZGVyLCAkdXJsUm91dGVyUHJvdmlkZXIpIHtcbiAgICAkc3RhdGVQcm92aWRlclxuICAgICAgLnN0YXRlKCdwcml2YXRlLmxlYWd1ZS5lZGl0Jywge1xuICAgICAgICB1cmw6ICcve2xlYWd1ZUlkfS9lZGl0JyxcbiAgICAgICAgdmlld3M6IHtcbiAgICAgICAgICBsZWFndWVDb250ZW50OiB7XG4gICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ21vZHVsZXMvcHJpdmF0ZS9sZWFndWUvZWRpdC9sZWFndWUuZWRpdC50cGwuaHRtbCcsXG4gICAgICAgICAgICBjb250cm9sbGVyOiAnRWRpdExlYWd1ZUNvbnRyb2xsZXInXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICByZXNvbHZlOiB7XG4gICAgICAgICAgbGVhZ3VlOiBmdW5jdGlvbihsZWFndWVTZXJ2aWNlLCAkc3RhdGVQYXJhbXMpIHtcbiAgICAgICAgICAgIHJldHVybiBsZWFndWVTZXJ2aWNlLmdldExlYWd1ZSgkc3RhdGVQYXJhbXMuc2Vhc29uSWQsICRzdGF0ZVBhcmFtcy5sZWFndWVJZCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAkdXJsUm91dGVyUHJvdmlkZXIub3RoZXJ3aXNlKCcvJyk7XG4gIH0pO1xuIiwibW9kdWxlLmV4cG9ydHMgPSBhbmd1bGFyLm1vZHVsZSgnbG9naEFwcC5sZWFndWUuY29udGFjdCcsIFtdKVxuICAuY29udHJvbGxlcignTGVhZ3VlQ29udGFjdENvbnRyb2xsZXInLCByZXF1aXJlKCcuL0xlYWd1ZUNvbnRhY3RDb250cm9sbGVyJykpO1xuIiwibW9kdWxlLmV4cG9ydHMgPSBhbmd1bGFyLm1vZHVsZSgnbG9naEFwcC5sZWFndWUubWVzc2FnZScsIFtdKVxuICAuY29udHJvbGxlcignTGVhZ3VlTWVzc2FnZUNvbnRyb2xsZXInLCByZXF1aXJlKCcuL0xlYWd1ZU1lc3NhZ2VDb250cm9sbGVyJykpO1xuIiwibW9kdWxlLmV4cG9ydHMgPSBhbmd1bGFyLm1vZHVsZSgnbG9naEFwcC5sZWFndWUuam9pbicsIFtdKVxuICAuY29udHJvbGxlcignTGVhZ3VlSm9pbkNvbnRyb2xsZXInLCByZXF1aXJlKCcuL0xlYWd1ZUpvaW5Db250cm9sbGVyJykpO1xuIiwibW9kdWxlLmV4cG9ydHMgPSBhbmd1bGFyLm1vZHVsZSgnbG9naEFwcC5sZWFndWUuaW52aXRlJywgW10pXG4gIC5jb250cm9sbGVyKCdMZWFndWVJbnZpdGVDb250cm9sbGVyJywgcmVxdWlyZSgnLi9MZWFndWVJbnZpdGVDb250cm9sbGVyJykpO1xuIiwibW9kdWxlLmV4cG9ydHMgPSBhbmd1bGFyLm1vZHVsZSgnbG9naEFwcC5sZWFndWVzLmpvaW4nLCBbXSlcbiAgLmNvbnRyb2xsZXIoJ0pvaW5MZWFndWVzQ29udHJvbGxlcicsIHJlcXVpcmUoJy4vSm9pbkxlYWd1ZXNDb250cm9sbGVyJykpXG4gIC5jb25maWcoZnVuY3Rpb24oJHN0YXRlUHJvdmlkZXIsICR1cmxSb3V0ZXJQcm92aWRlcikge1xuICAgICRzdGF0ZVByb3ZpZGVyXG4gICAgICAuc3RhdGUoJ3ByaXZhdGUubGVhZ3Vlcy5qb2luJywge1xuICAgICAgICB1cmw6ICcvJyxcbiAgICAgICAgYWJzdHJhY3Q6IHRydWUsXG4gICAgICAgIHZpZXdzOiB7XG4gICAgICAgICAgbGVhZ3Vlc0NvbnRlbnQ6IHtcbiAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAnbW9kdWxlcy9wcml2YXRlL2xlYWd1ZXMvam9pbi9sZWFndWVzLmpvaW4udHBsLmh0bWwnLFxuICAgICAgICAgICAgY29udHJvbGxlcjogJ0pvaW5MZWFndWVzQ29udHJvbGxlcidcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgO1xuICAgICR1cmxSb3V0ZXJQcm92aWRlci5vdGhlcndpc2UoJy8nKTtcbiAgfSk7XG5cbiIsIm1vZHVsZS5leHBvcnRzID0gYW5ndWxhci5tb2R1bGUoJ2xvZ2hBcHAubGVhZ3Vlcy5tYW5hZ2UnLCBbXSlcbiAgLmNvbnRyb2xsZXIoJ01hbmFnZUxlYWd1ZXNDb250cm9sbGVyJywgcmVxdWlyZSgnLi9NYW5hZ2VMZWFndWVzQ29udHJvbGxlcicpKVxuICAuY29uZmlnKGZ1bmN0aW9uKCRzdGF0ZVByb3ZpZGVyLCAkdXJsUm91dGVyUHJvdmlkZXIpIHtcbiAgICAkc3RhdGVQcm92aWRlclxuICAgICAgLnN0YXRlKCdwcml2YXRlLmxlYWd1ZXMubWFuYWdlJywge1xuICAgICAgICB1cmw6ICcvbWFuYWdlZCcsXG4gICAgICAgIHZpZXdzOiB7XG4gICAgICAgICAgbGVhZ3Vlc0NvbnRlbnQ6IHtcbiAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAnbW9kdWxlcy9wcml2YXRlL2xlYWd1ZXMvbWFuYWdlL2xlYWd1ZXMubWFuYWdlLnRwbC5odG1sJyxcbiAgICAgICAgICAgIGNvbnRyb2xsZXI6ICdNYW5hZ2VMZWFndWVzQ29udHJvbGxlcidcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHJlc29sdmU6IHtcbiAgICAgICAgICBtYW5hZ2VkTGVhZ3VlczogZnVuY3Rpb24odXNlciwgbGVhZ3VlU2VydmljZSwgJHN0YXRlUGFyYW1zKSB7XG4gICAgICAgICAgICByZXR1cm4gbGVhZ3VlU2VydmljZS5nZXRNYW5hZ2VkTGVhZ3Vlcygkc3RhdGVQYXJhbXMuc2Vhc29uSWQpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSlcbiAgICA7XG4gICAgJHVybFJvdXRlclByb3ZpZGVyLm90aGVyd2lzZSgnLycpO1xuICB9KTtcblxuIiwibW9kdWxlLmV4cG9ydHMgPSBhbmd1bGFyLm1vZHVsZSgnbG9naEFwcC5sZWFndWVzLm15JywgW10pXG4gIC5jb250cm9sbGVyKCdNeUxlYWd1ZXNDb250cm9sbGVyJywgcmVxdWlyZSgnLi9NeUxlYWd1ZXNDb250cm9sbGVyJykpXG4gIC5jb25maWcoZnVuY3Rpb24oJHN0YXRlUHJvdmlkZXIsICR1cmxSb3V0ZXJQcm92aWRlcikge1xuICAgICRzdGF0ZVByb3ZpZGVyXG4gICAgICAuc3RhdGUoJ3ByaXZhdGUubGVhZ3Vlcy5teScsIHtcbiAgICAgICAgdXJsOiAnJyxcbiAgICAgICAgdmlld3M6IHtcbiAgICAgICAgICBsZWFndWVzQ29udGVudDoge1xuICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICdtb2R1bGVzL3ByaXZhdGUvbGVhZ3Vlcy9teS9sZWFndWVzLm15LnRwbC5odG1sJyxcbiAgICAgICAgICAgIGNvbnRyb2xsZXI6ICdNeUxlYWd1ZXNDb250cm9sbGVyJ1xuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgcmVzb2x2ZToge1xuICAgICAgICAgIGxlYWd1ZXM6IGZ1bmN0aW9uKHVzZXIsIGxlYWd1ZVNlcnZpY2UsICRzdGF0ZVBhcmFtcykge1xuICAgICAgICAgICAgcmV0dXJuIGxlYWd1ZVNlcnZpY2UuZ2V0TGVhZ3Vlcygkc3RhdGVQYXJhbXMuc2Vhc29uSWQpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSlcbiAgICA7XG4gICAgJHVybFJvdXRlclByb3ZpZGVyLm90aGVyd2lzZSgnLycpO1xuICB9KTtcblxuIiwibW9kdWxlLmV4cG9ydHMgPSBhbmd1bGFyLm1vZHVsZSgnbG9naEFwcC50ZWFtLnZpZXcnLCBbXSlcbiAgLmNvbnRyb2xsZXIoJ1ZpZXdUZWFtQ29udHJvbGxlcicsIHJlcXVpcmUoJy4vVmlld1RlYW1Db250cm9sbGVyJykpXG4gIC5jb25maWcoZnVuY3Rpb24oJHN0YXRlUHJvdmlkZXIsICR1cmxSb3V0ZXJQcm92aWRlcikge1xuICAgICRzdGF0ZVByb3ZpZGVyXG4gICAgICAuc3RhdGUoJ3ByaXZhdGUudGVhbS52aWV3Jywge1xuICAgICAgICB1cmw6ICcve3RlYW1JZH0nLFxuICAgICAgICBhYnN0cmFjdDogdHJ1ZSxcbiAgICAgICAgdmlld3M6IHtcbiAgICAgICAgICB0ZWFtQ29udGVudDoge1xuICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICdtb2R1bGVzL3ByaXZhdGUvdGVhbS92aWV3L3RlYW0udmlldy50cGwuaHRtbCcsXG4gICAgICAgICAgICBjb250cm9sbGVyOiAnVmlld1RlYW1Db250cm9sbGVyJ1xuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgcmVzb2x2ZToge1xuICAgICAgICAgIHRlYW06IGZ1bmN0aW9uKHVzZXIsIHRlYW1TZXJ2aWNlLCAkc3RhdGVQYXJhbXMpIHtcbiAgICAgICAgICAgIHJldHVybiB0ZWFtU2VydmljZS5nZXRUZWFtKCRzdGF0ZVBhcmFtcy5sZWFndWVJZCwgJHN0YXRlUGFyYW1zLnRlYW1JZCk7XG4gICAgICAgICAgfSxcbiAgICAgICAgICBsZWFndWVUZWFtczogZnVuY3Rpb24odGVhbSwgdGVhbVNlcnZpY2UsICRzdGF0ZVBhcmFtcywgdXNlck1vZGVsKSB7XG4gICAgICAgICAgICBpZiAodGVhbS5kYXRhLmNvYWNoX2lkcy5pbmRleE9mKHVzZXJNb2RlbC51c2VyLmlkKSA+IC0xKSB7XG4gICAgICAgICAgICAgIHJldHVybiB0ZWFtU2VydmljZS5nZXRMZWFndWVUZWFtcygkc3RhdGVQYXJhbXMubGVhZ3VlSWQpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHsgZGF0YTogW10gfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICR1cmxSb3V0ZXJQcm92aWRlci5vdGhlcndpc2UoJy8nKTtcbiAgfSk7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGFuZ3VsYXIubW9kdWxlKCdsb2doQXBwLnRlYW0ubWVzc2FnZScsIFtdKVxuICAuY29udHJvbGxlcignVGVhbU1lc3NhZ2VDb250cm9sbGVyJywgcmVxdWlyZSgnLi9UZWFtTWVzc2FnZUNvbnRyb2xsZXInKSk7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGFuZ3VsYXIubW9kdWxlKCdsb2doQXBwLnRlYW0uZWRpdCcsIFtdKVxuICAuY29udHJvbGxlcignRWRpdFRlYW1Db250cm9sbGVyJywgcmVxdWlyZSgnLi9FZGl0VGVhbUNvbnRyb2xsZXInKSk7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGFuZ3VsYXIubW9kdWxlKCdsb2doQXBwLnRlYW0ucGljaycsIFtdKVxuICAuY29udHJvbGxlcignVGVhbVBpY2tDb250cm9sbGVyJywgcmVxdWlyZSgnLi9UZWFtUGlja0NvbnRyb2xsZXInKSlcbiAgLmNvbmZpZyhmdW5jdGlvbigkc3RhdGVQcm92aWRlciwgJHVybFJvdXRlclByb3ZpZGVyKSB7XG4gICAgJHN0YXRlUHJvdmlkZXJcbiAgICAgIC5zdGF0ZSgncHJpdmF0ZS50ZWFtLnBpY2snLCB7XG4gICAgICAgIHVybDogJy97dGVhbUlkfScsXG4gICAgICAgIGFic3RyYWN0OiB0cnVlLFxuICAgICAgICB2aWV3czoge1xuICAgICAgICAgIHRlYW1Db250ZW50OiB7XG4gICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ21vZHVsZXMvcHJpdmF0ZS90ZWFtL3BpY2svdGVhbS5waWNrLnRwbC5odG1sJyxcbiAgICAgICAgICAgIGNvbnRyb2xsZXI6ICdUZWFtUGlja0NvbnRyb2xsZXInXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICByZXNvbHZlOiB7XG4gICAgICAgICAgdGVhbTogZnVuY3Rpb24oJHN0YXRlUGFyYW1zLCB0ZWFtU2VydmljZSkge1xuICAgICAgICAgICAgcmV0dXJuIHRlYW1TZXJ2aWNlLmdldFRlYW0oJHN0YXRlUGFyYW1zLmxlYWd1ZUlkLCAkc3RhdGVQYXJhbXMudGVhbUlkKTtcbiAgICAgICAgICB9LFxuICAgICAgICAgIHdlZWs6IGZ1bmN0aW9uKCRzdGF0ZVBhcmFtcywgd2Vla1NlcnZpY2UpIHtcbiAgICAgICAgICAgIHJldHVybiB3ZWVrU2VydmljZS5nZXRDdXJyZW50V2Vlaygkc3RhdGVQYXJhbXMuc2Vhc29uSWQsICRzdGF0ZVBhcmFtcy5sZWFndWVJZCk7XG4gICAgICAgICAgfSxcbiAgICAgICAgICBnYW1lczogZnVuY3Rpb24oJHN0YXRlUGFyYW1zLCBnYW1lU2VydmljZSkge1xuICAgICAgICAgICAgcmV0dXJuIGdhbWVTZXJ2aWNlLmdldEN1cnJlbnRHYW1lcygkc3RhdGVQYXJhbXMubGVhZ3VlSWQpO1xuICAgICAgICAgIH0sXG4gICAgICAgICAgcGlja3M6IGZ1bmN0aW9uKCRzdGF0ZVBhcmFtcywgcGlja1NlcnZpY2UpIHtcbiAgICAgICAgICAgIHJldHVybiBwaWNrU2VydmljZS5nZXRTZWxlY3RlZFBpY2tzKHsgdGVhbUlkOiAkc3RhdGVQYXJhbXMudGVhbUlkIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgJHVybFJvdXRlclByb3ZpZGVyLm90aGVyd2lzZSgnLycpO1xuICB9KTtcbiIsIm1vZHVsZS5leHBvcnRzID0gYW5ndWxhci5tb2R1bGUoJ2xvZ2hBcHAucGxheS5sZWFndWVzJywgW10pXG4gIC5jb250cm9sbGVyKCdQbGF5TGVhZ3Vlc0NvbnRyb2xsZXInLCByZXF1aXJlKCcuL1BsYXlMZWFndWVzQ29udHJvbGxlcicpKVxuICAuY29uZmlnKGZ1bmN0aW9uKCRzdGF0ZVByb3ZpZGVyLCAkdXJsUm91dGVyUHJvdmlkZXIpIHtcbiAgICAkc3RhdGVQcm92aWRlclxuICAgICAgLnN0YXRlKCdwcml2YXRlLnBsYXkubGVhZ3VlcycsIHtcbiAgICAgICAgdXJsOiAnL2xlYWd1ZXMnLFxuICAgICAgICB2aWV3czoge1xuICAgICAgICAgIHBsYXlDb250ZW50OiB7XG4gICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ21vZHVsZXMvcHJpdmF0ZS9wbGF5L2xlYWd1ZXMvcGxheS5sZWFndWVzLnRwbC5odG1sJyxcbiAgICAgICAgICAgIGNvbnRyb2xsZXI6ICdQbGF5TGVhZ3Vlc0NvbnRyb2xsZXInXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICByZXNvbHZlOiB7XG4gICAgICAgICAgbGVhZ3VlczogZnVuY3Rpb24odXNlciwgJHN0YXRlUGFyYW1zLCBsZWFndWVTZXJ2aWNlKSB7XG4gICAgICAgICAgICByZXR1cm4gbGVhZ3VlU2VydmljZS5nZXRMZWFndWVzKCRzdGF0ZVBhcmFtcy5zZWFzb25JZCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIDtcbiAgICAkdXJsUm91dGVyUHJvdmlkZXIub3RoZXJ3aXNlKCcvJyk7XG4gIH0pO1xuXG4iLCJtb2R1bGUuZXhwb3J0cyA9IGFuZ3VsYXIubW9kdWxlKCdsb2doQXBwLnBsYXkudGVhbXMnLCBbXSlcbiAgLmNvbnRyb2xsZXIoJ1BsYXlUZWFtc0NvbnRyb2xsZXInLCByZXF1aXJlKCcuL1BsYXlUZWFtc0NvbnRyb2xsZXInKSlcbiAgLmNvbmZpZyhmdW5jdGlvbigkc3RhdGVQcm92aWRlciwgJHVybFJvdXRlclByb3ZpZGVyKSB7XG4gICAgJHN0YXRlUHJvdmlkZXJcbiAgICAgIC5zdGF0ZSgncHJpdmF0ZS5wbGF5LnRlYW1zJywge1xuICAgICAgICB1cmw6ICcvdGVhbXMnLFxuICAgICAgICB2aWV3czoge1xuICAgICAgICAgIHBsYXlDb250ZW50OiB7XG4gICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ21vZHVsZXMvcHJpdmF0ZS9wbGF5L3RlYW1zL3BsYXkudGVhbXMudHBsLmh0bWwnLFxuICAgICAgICAgICAgY29udHJvbGxlcjogJ1BsYXlUZWFtc0NvbnRyb2xsZXInXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICByZXNvbHZlOiB7XG4gICAgICAgICAgdGVhbXM6IGZ1bmN0aW9uKHVzZXIsICRzdGF0ZVBhcmFtcywgdGVhbVNlcnZpY2UpIHtcbiAgICAgICAgICAgIHJldHVybiB0ZWFtU2VydmljZS5nZXRBbGxUZWFtcyh7IHNlYXNvbklkOiAkc3RhdGVQYXJhbXMuc2Vhc29uSWQgfSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgIH0pXG4gICAgO1xuICAgICR1cmxSb3V0ZXJQcm92aWRlci5vdGhlcndpc2UoJy8nKTtcbiAgfSk7XG5cbiIsIm1vZHVsZS5leHBvcnRzID0gYW5ndWxhci5tb2R1bGUoJ2xvZ2hBcHAuYWRtaW4uc2Vhc29ucycsIFtdKVxuICAuY29udHJvbGxlcignQWRtaW5TZWFzb25zQ29udHJvbGxlcicsIHJlcXVpcmUoJy4vQWRtaW5TZWFzb25zQ29udHJvbGxlcicpKVxuICAuY29uZmlnKGZ1bmN0aW9uKCRzdGF0ZVByb3ZpZGVyLCAkdXJsUm91dGVyUHJvdmlkZXIpIHtcbiAgICAkc3RhdGVQcm92aWRlclxuICAgICAgLnN0YXRlKCdwcml2YXRlLmFkbWluLnNlYXNvbnMnLCB7XG4gICAgICAgIHVybDogJ3NlYXNvbnMnLFxuICAgICAgICB2aWV3czoge1xuICAgICAgICAgIGFkbWluQ29udGVudDoge1xuICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICdtb2R1bGVzL3ByaXZhdGUvYWRtaW4vc2Vhc29ucy9hZG1pbi5zZWFzb25zLnRwbC5odG1sJyxcbiAgICAgICAgICAgIGNvbnRyb2xsZXI6ICdBZG1pblNlYXNvbnNDb250cm9sbGVyJ1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgJHVybFJvdXRlclByb3ZpZGVyLm90aGVyd2lzZSgnLycpO1xuICB9KTtcbiIsIm1vZHVsZS5leHBvcnRzID0gYW5ndWxhci5tb2R1bGUoJ2xvZ2hBcHAuYWRtaW4ud2VlaycsIFtdKVxuICAuY29udHJvbGxlcignQWRtaW5XZWVrQ29udHJvbGxlcicsIHJlcXVpcmUoJy4vQWRtaW5XZWVrQ29udHJvbGxlcicpKVxuICAuY29uZmlnKGZ1bmN0aW9uKCRzdGF0ZVByb3ZpZGVyLCAkdXJsUm91dGVyUHJvdmlkZXIpIHtcbiAgICAkc3RhdGVQcm92aWRlclxuICAgICAgLnN0YXRlKCdwcml2YXRlLmFkbWluLndlZWsnLCB7XG4gICAgICAgIHVybDogJ3NlYXNvbnMve3NlYXNvbklkfS93ZWVrcy97d2Vla0lkfScsXG4gICAgICAgIHZpZXdzOiB7XG4gICAgICAgICAgYWRtaW5Db250ZW50OiB7XG4gICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ21vZHVsZXMvcHJpdmF0ZS9hZG1pbi93ZWVrL2FkbWluLndlZWsudHBsLmh0bWwnLFxuICAgICAgICAgICAgY29udHJvbGxlcjogJ0FkbWluV2Vla0NvbnRyb2xsZXInLFxuICAgICAgICAgICAgcmVzb2x2ZToge1xuICAgICAgICAgICAgICB3ZWVrOiBmdW5jdGlvbigkc3RhdGVQYXJhbXMsIHdlZWtTZXJ2aWNlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHdlZWtTZXJ2aWNlLmdldFdlZWsoJHN0YXRlUGFyYW1zLnNlYXNvbklkLCAkc3RhdGVQYXJhbXMud2Vla0lkKTtcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgZ2FtZXM6IGZ1bmN0aW9uKHdlZWssIGdhbWVTZXJ2aWNlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGdhbWVTZXJ2aWNlLmdldFdlZWtHYW1lcyh3ZWVrLmRhdGEuaWQpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAkdXJsUm91dGVyUHJvdmlkZXIub3RoZXJ3aXNlKCcvJyk7XG4gIH0pO1xuIiwibW9kdWxlLmV4cG9ydHMgPSBhbmd1bGFyLm1vZHVsZSgnbG9naEFwcC5hZG1pbi5zcXVhZHMnLCBbXSlcbiAgLmNvbnRyb2xsZXIoJ0FkbWluU3F1YWRzQ29udHJvbGxlcicsIHJlcXVpcmUoJy4vQWRtaW5TcXVhZHNDb250cm9sbGVyJykpXG4gIC5jb25maWcoZnVuY3Rpb24oJHN0YXRlUHJvdmlkZXIsICR1cmxSb3V0ZXJQcm92aWRlcikge1xuICAgICRzdGF0ZVByb3ZpZGVyXG4gICAgICAuc3RhdGUoJ3ByaXZhdGUuYWRtaW4uc3F1YWRzJywge1xuICAgICAgICB1cmw6ICdzcXVhZHMnLFxuICAgICAgICB2aWV3czoge1xuICAgICAgICAgIGFkbWluQ29udGVudDoge1xuICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICdtb2R1bGVzL3ByaXZhdGUvYWRtaW4vc3F1YWRzL2FkbWluLnNxdWFkcy50cGwuaHRtbCcsXG4gICAgICAgICAgICBjb250cm9sbGVyOiAnQWRtaW5TcXVhZHNDb250cm9sbGVyJyxcbiAgICAgICAgICAgIHJlc29sdmU6IHtcbiAgICAgICAgICAgICAgc3F1YWRzOiBmdW5jdGlvbigkc3RhdGVQYXJhbXMsIHNxdWFkU2VydmljZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBzcXVhZFNlcnZpY2UuZ2V0U3F1YWRzKCk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICR1cmxSb3V0ZXJQcm92aWRlci5vdGhlcndpc2UoJy8nKTtcbiAgfSk7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGFuZ3VsYXIubW9kdWxlKCdsb2doQXBwLmxlYWd1ZS5pbnZpdGUucmVxdWVzdCcsIFtdKVxuICAuY29udHJvbGxlcignTGVhZ3VlSW52aXRlUmVxdWVzdENvbnRyb2xsZXInLCByZXF1aXJlKCcuL0xlYWd1ZUludml0ZVJlcXVlc3RDb250cm9sbGVyJykpO1xuIiwibW9kdWxlLmV4cG9ydHMgPSBhbmd1bGFyLm1vZHVsZSgnbG9naEFwcC5sZWFndWVzLmpvaW4ucHVibGljJywgW10pXG4gIC5jb250cm9sbGVyKCdQdWJsaWNMZWFndWVzQ29udHJvbGxlcicsIHJlcXVpcmUoJy4vUHVibGljTGVhZ3Vlc0NvbnRyb2xsZXInKSlcbiAgLmNvbmZpZyhmdW5jdGlvbigkc3RhdGVQcm92aWRlciwgJHVybFJvdXRlclByb3ZpZGVyKSB7XG4gICAgJHN0YXRlUHJvdmlkZXJcbiAgICAgIC5zdGF0ZSgncHJpdmF0ZS5sZWFndWVzLmpvaW4ucHVibGljJywge1xuICAgICAgICB1cmw6ICdwdWJsaWMnLFxuICAgICAgICB2aWV3czoge1xuICAgICAgICAgIGpvaW5MZWFndWVzQ29udGVudDoge1xuICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICdtb2R1bGVzL3ByaXZhdGUvbGVhZ3Vlcy9qb2luL3B1YmxpYy9sZWFndWVzLmpvaW4ucHVibGljLnRwbC5odG1sJyxcbiAgICAgICAgICAgIGNvbnRyb2xsZXI6ICdQdWJsaWNMZWFndWVzQ29udHJvbGxlcidcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHJlc29sdmU6IHtcbiAgICAgICAgICBwdWJsaWNMZWFndWVzOiBmdW5jdGlvbih1c2VyLCBsZWFndWVTZXJ2aWNlLCAkc3RhdGVQYXJhbXMpIHtcbiAgICAgICAgICAgIHJldHVybiBsZWFndWVTZXJ2aWNlLmdldFB1YmxpY0xlYWd1ZXMoJHN0YXRlUGFyYW1zLnNlYXNvbklkKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgO1xuICAgICR1cmxSb3V0ZXJQcm92aWRlci5vdGhlcndpc2UoJy8nKTtcbiAgfSk7XG5cbiIsIm1vZHVsZS5leHBvcnRzID0gYW5ndWxhci5tb2R1bGUoJ2xvZ2hBcHAubGVhZ3Vlcy5qb2luLnByaXZhdGUnLCBbXSlcbiAgLmNvbnRyb2xsZXIoJ1ByaXZhdGVMZWFndWVzQ29udHJvbGxlcicsIHJlcXVpcmUoJy4vUHJpdmF0ZUxlYWd1ZXNDb250cm9sbGVyJykpXG4gIC5jb25maWcoZnVuY3Rpb24oJHN0YXRlUHJvdmlkZXIsICR1cmxSb3V0ZXJQcm92aWRlcikge1xuICAgICRzdGF0ZVByb3ZpZGVyXG4gICAgICAuc3RhdGUoJ3ByaXZhdGUubGVhZ3Vlcy5qb2luLnByaXZhdGUnLCB7XG4gICAgICAgIHVybDogJ3ByaXZhdGUnLFxuICAgICAgICB2aWV3czoge1xuICAgICAgICAgIGpvaW5MZWFndWVzQ29udGVudDoge1xuICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICdtb2R1bGVzL3ByaXZhdGUvbGVhZ3Vlcy9qb2luL3ByaXZhdGUvbGVhZ3Vlcy5qb2luLnByaXZhdGUudHBsLmh0bWwnLFxuICAgICAgICAgICAgY29udHJvbGxlcjogJ1ByaXZhdGVMZWFndWVzQ29udHJvbGxlcidcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHJlc29sdmU6IHtcbiAgICAgICAgICBwcml2YXRlTGVhZ3VlczogZnVuY3Rpb24odXNlciwgbGVhZ3VlU2VydmljZSwgJHN0YXRlUGFyYW1zKSB7XG4gICAgICAgICAgICByZXR1cm4gbGVhZ3VlU2VydmljZS5nZXRQcml2YXRlTGVhZ3Vlcygkc3RhdGVQYXJhbXMuc2Vhc29uSWQpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSlcbiAgICA7XG4gICAgJHVybFJvdXRlclByb3ZpZGVyLm90aGVyd2lzZSgnLycpO1xuICB9KTtcblxuIiwibW9kdWxlLmV4cG9ydHMgPSBhbmd1bGFyLm1vZHVsZSgnbG9naEFwcC50ZWFtLnZpZXcucGlja3MnLCBbXSlcbiAgLmNvbnRyb2xsZXIoJ1ZpZXdUZWFtUGlja3NDb250cm9sbGVyJywgcmVxdWlyZSgnLi9WaWV3VGVhbVBpY2tzQ29udHJvbGxlcicpKVxuICAuY29uZmlnKGZ1bmN0aW9uKCRzdGF0ZVByb3ZpZGVyLCAkdXJsUm91dGVyUHJvdmlkZXIpIHtcbiAgICAkc3RhdGVQcm92aWRlclxuICAgICAgLnN0YXRlKCdwcml2YXRlLnRlYW0udmlldy5waWNrcycsIHtcbiAgICAgICAgdXJsOiAnP3dlZWsnLFxuICAgICAgICB2aWV3czoge1xuICAgICAgICAgIHRlYW1QaWNrc0NvbnRlbnQ6IHtcbiAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAnbW9kdWxlcy9wcml2YXRlL3RlYW0vdmlldy9waWNrcy90ZWFtLnZpZXcucGlja3MudHBsLmh0bWwnLFxuICAgICAgICAgICAgY29udHJvbGxlcjogJ1ZpZXdUZWFtUGlja3NDb250cm9sbGVyJ1xuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgcmVzb2x2ZToge1xuICAgICAgICAgIGxlYWd1ZVdlZWtzOiBmdW5jdGlvbih0ZWFtLCB3ZWVrU2VydmljZSwgJHN0YXRlUGFyYW1zKSB7XG4gICAgICAgICAgICByZXR1cm4gd2Vla1NlcnZpY2UuZ2V0TGVhZ3VlV2Vla3MoeyBzZWFzb25JZDogJHN0YXRlUGFyYW1zLnNlYXNvbklkLCBsZWFndWVJZDogJHN0YXRlUGFyYW1zLmxlYWd1ZUlkIH0pO1xuICAgICAgICAgIH0sXG4gICAgICAgICAgcGlja3M6IGZ1bmN0aW9uKHRlYW0sIHBpY2tTZXJ2aWNlKSB7XG4gICAgICAgICAgICByZXR1cm4gcGlja1NlcnZpY2UuZ2V0UGlja3MoeyB0ZWFtSWQ6IHRlYW0uZGF0YS5pZCB9KTtcbiAgICAgICAgICB9LFxuICAgICAgICAgIGN1cnJlbnRXZWVrOiBmdW5jdGlvbih0ZWFtLCAkc3RhdGVQYXJhbXMsIHdlZWtTZXJ2aWNlKSB7XG4gICAgICAgICAgICBpZiAoISRzdGF0ZVBhcmFtcy53ZWVrKSB7XG4gICAgICAgICAgICAgIHJldHVybiB3ZWVrU2VydmljZS5nZXRDdXJyZW50V2Vlaygkc3RhdGVQYXJhbXMuc2Vhc29uSWQsICRzdGF0ZVBhcmFtcy5sZWFndWVJZCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHJlbG9hZE9uU2VhcmNoOiBmYWxzZVxuICAgICAgfSk7XG4gICAgJHVybFJvdXRlclByb3ZpZGVyLm90aGVyd2lzZSgnLycpO1xuICB9KTtcbiIsIm1vZHVsZS5leHBvcnRzID0gYW5ndWxhci5tb2R1bGUoJ2xvZ2hBcHAudGVhbS5waWNrLm9uZScsIFtdKVxuICAuY29udHJvbGxlcignVGVhbVBpY2tPbmVDb250cm9sbGVyJywgcmVxdWlyZSgnLi9UZWFtUGlja09uZUNvbnRyb2xsZXInKSlcbiAgLmNvbmZpZyhmdW5jdGlvbigkc3RhdGVQcm92aWRlciwgJHVybFJvdXRlclByb3ZpZGVyKSB7XG4gICAgJHN0YXRlUHJvdmlkZXJcbiAgICAgIC5zdGF0ZSgncHJpdmF0ZS50ZWFtLnBpY2sub25lJywge1xuICAgICAgICB1cmw6ICcvcGljaycsXG4gICAgICAgIHZpZXdzOiB7XG4gICAgICAgICAgcGlja0NvbnRlbnQ6IHtcbiAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAnbW9kdWxlcy9wcml2YXRlL3RlYW0vcGljay9vbmUvdGVhbS5waWNrLm9uZS50cGwuaHRtbCcsXG4gICAgICAgICAgICBjb250cm9sbGVyOiAnVGVhbVBpY2tPbmVDb250cm9sbGVyJ1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgJHVybFJvdXRlclByb3ZpZGVyLm90aGVyd2lzZSgnLycpO1xuICB9KTtcbiIsIm1vZHVsZS5leHBvcnRzID0gYW5ndWxhci5tb2R1bGUoJ2xvZ2hBcHAudGVhbS5waWNrLm1hbnknLCBbXSlcbiAgLmNvbnRyb2xsZXIoJ1RlYW1QaWNrTWFueUNvbnRyb2xsZXInLCByZXF1aXJlKCcuL1RlYW1QaWNrTWFueUNvbnRyb2xsZXInKSlcbiAgLmNvbmZpZyhmdW5jdGlvbigkc3RhdGVQcm92aWRlciwgJHVybFJvdXRlclByb3ZpZGVyKSB7XG4gICAgJHN0YXRlUHJvdmlkZXJcbiAgICAgIC5zdGF0ZSgncHJpdmF0ZS50ZWFtLnBpY2subWFueScsIHtcbiAgICAgICAgdXJsOiAnL3BpY2tzJyxcbiAgICAgICAgdmlld3M6IHtcbiAgICAgICAgICBwaWNrQ29udGVudDoge1xuICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICdtb2R1bGVzL3ByaXZhdGUvdGVhbS9waWNrL21hbnkvdGVhbS5waWNrLm1hbnkudHBsLmh0bWwnLFxuICAgICAgICAgICAgY29udHJvbGxlcjogJ1RlYW1QaWNrTWFueUNvbnRyb2xsZXInXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAkdXJsUm91dGVyUHJvdmlkZXIub3RoZXJ3aXNlKCcvJyk7XG4gIH0pO1xuIiwibW9kdWxlLmV4cG9ydHMgPSBhbmd1bGFyLm1vZHVsZSgnbG9naEFwcC5hZG1pbi5nYW1lLmVkaXQnLCBbXSlcbiAgLmNvbnRyb2xsZXIoJ0FkbWluR2FtZUVkaXRDb250cm9sbGVyJywgcmVxdWlyZSgnLi9BZG1pbkdhbWVFZGl0Q29udHJvbGxlcicpKTtcbiIsIm1vZHVsZS5leHBvcnRzID0gYW5ndWxhci5tb2R1bGUoJ2xvZ2hBcHAuYWRtaW4uZ2FtZS5uZXcnLCBbXSlcbiAgLmNvbnRyb2xsZXIoJ0FkbWluR2FtZU5ld0NvbnRyb2xsZXInLCByZXF1aXJlKCcuL0FkbWluR2FtZU5ld0NvbnRyb2xsZXInKSk7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGFuZ3VsYXIubW9kdWxlKCdsb2doQXBwLmFkbWluLnNlYXNvbicsIFtdKVxuICAuY29udHJvbGxlcignQWRtaW5TZWFzb25Db250cm9sbGVyJywgcmVxdWlyZSgnLi9BZG1pblNlYXNvbkNvbnRyb2xsZXInKSlcbiAgLmNvbmZpZyhmdW5jdGlvbigkc3RhdGVQcm92aWRlciwgJHVybFJvdXRlclByb3ZpZGVyKSB7XG4gICAgJHN0YXRlUHJvdmlkZXJcbiAgICAgIC5zdGF0ZSgncHJpdmF0ZS5hZG1pbi5zZWFzb24nLCB7XG4gICAgICAgIHVybDogJ3NlYXNvbnMve3NlYXNvbklkfScsXG4gICAgICAgIHZpZXdzOiB7XG4gICAgICAgICAgYWRtaW5Db250ZW50OiB7XG4gICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ21vZHVsZXMvcHJpdmF0ZS9hZG1pbi9zZWFzb25zL3NlYXNvbi9hZG1pbi5zZWFzb24udHBsLmh0bWwnLFxuICAgICAgICAgICAgY29udHJvbGxlcjogJ0FkbWluU2Vhc29uQ29udHJvbGxlcicsXG4gICAgICAgICAgICByZXNvbHZlOiB7XG4gICAgICAgICAgICAgIHNlYXNvbjogZnVuY3Rpb24oJHN0YXRlUGFyYW1zLCBzZWFzb25TZXJ2aWNlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHNlYXNvblNlcnZpY2UuZ2V0U2Vhc29uKCRzdGF0ZVBhcmFtcy5zZWFzb25JZCk7XG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHdlZWtzOiBmdW5jdGlvbigkc3RhdGVQYXJhbXMsIHdlZWtTZXJ2aWNlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHdlZWtTZXJ2aWNlLmdldFNlYXNvbldlZWtzKCRzdGF0ZVBhcmFtcy5zZWFzb25JZCk7XG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIGxlYWd1ZXM6IGZ1bmN0aW9uKCRzdGF0ZVBhcmFtcywgbGVhZ3VlU2VydmljZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBsZWFndWVTZXJ2aWNlLmdldEFsbExlYWd1ZXMoJHN0YXRlUGFyYW1zLnNlYXNvbklkKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgJHVybFJvdXRlclByb3ZpZGVyLm90aGVyd2lzZSgnLycpO1xuICB9KTtcbiIsIm1vZHVsZS5leHBvcnRzID0gYW5ndWxhci5tb2R1bGUoJ2xvZ2hBcHAuYWRtaW4ud2Vlay5uZXcnLCBbXSlcbiAgLmNvbnRyb2xsZXIoJ0FkbWluV2Vla05ld0NvbnRyb2xsZXInLCByZXF1aXJlKCcuL0FkbWluV2Vla05ld0NvbnRyb2xsZXInKSk7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGFuZ3VsYXIubW9kdWxlKCdsb2doQXBwLmFkbWluLndlZWsuZWRpdCcsIFtdKVxuICAuY29udHJvbGxlcignQWRtaW5XZWVrRWRpdENvbnRyb2xsZXInLCByZXF1aXJlKCcuL0FkbWluV2Vla0VkaXRDb250cm9sbGVyJykpO1xuIiwibW9kdWxlLmV4cG9ydHMgPSBhbmd1bGFyLm1vZHVsZSgnbG9naEFwcC5hZG1pbi5zcXVhZHMubmV3JywgW10pXG4gIC5jb250cm9sbGVyKCdBZG1pblNxdWFkc05ld0NvbnRyb2xsZXInLCByZXF1aXJlKCcuL0FkbWluU3F1YWRzTmV3Q29udHJvbGxlcicpKTtcbiIsIm1vZHVsZS5leHBvcnRzID0gYW5ndWxhci5tb2R1bGUoJ2xvZ2hBcHAuYWRtaW4uc3F1YWRzLmVkaXQnLCBbXSlcbiAgLmNvbnRyb2xsZXIoJ0FkbWluU3F1YWRzRWRpdENvbnRyb2xsZXInLCByZXF1aXJlKCcuL0FkbWluU3F1YWRzRWRpdENvbnRyb2xsZXInKSk7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGFuZ3VsYXIubW9kdWxlKCdsb2doQXBwLmFkbWluLnNlYXNvbi5uZXcnLCBbXSlcbiAgLmNvbnRyb2xsZXIoJ0FkbWluU2Vhc29uTmV3Q29udHJvbGxlcicsIHJlcXVpcmUoJy4vQWRtaW5TZWFzb25OZXdDb250cm9sbGVyJykpO1xuIiwibW9kdWxlLmV4cG9ydHMgPSBhbmd1bGFyLm1vZHVsZSgnbG9naEFwcC5hZG1pbi5zZWFzb24uZWRpdCcsIFtdKVxuICAuY29udHJvbGxlcignQWRtaW5TZWFzb25FZGl0Q29udHJvbGxlcicsIHJlcXVpcmUoJy4vQWRtaW5TZWFzb25FZGl0Q29udHJvbGxlcicpKTtcbiIsIlxudmFyIFVzZXJNb2RlbCA9IGZ1bmN0aW9uKCRyb290U2NvcGUsICR3aW5kb3csICRsb2cpIHtcblxuICAgIHZhciB1c2VyID0ge307XG4gICAgdXNlci5sb2FkZWQgPSBmYWxzZTtcbiAgICB1c2VyLmlkID0gJyc7XG4gICAgdXNlci5lbWFpbCA9ICcnO1xuICAgIHVzZXIuZmlyc3RfbmFtZSA9ICcnO1xuICAgIHVzZXIubGFzdF9uYW1lID0gJyc7XG4gICAgdXNlci5hZG1pbiA9IGZhbHNlO1xuICAgIHRoaXMudXNlciA9IHVzZXI7XG5cbiAgICB2YXIgdGVhbU1lc3NhZ2VPcGVuID0ge307XG4gICAgdGhpcy50ZWFtTWVzc2FnZU9wZW4gPSB0ZWFtTWVzc2FnZU9wZW47XG5cbiAgICB2YXIgbGVhZ3VlTWVzc2FnZU9wZW4gPSB7fTtcbiAgICB0aGlzLmxlYWd1ZU1lc3NhZ2VPcGVuID0gbGVhZ3VlTWVzc2FnZU9wZW47XG5cbiAgICB0aGlzLnNldFVzZXIgPSBmdW5jdGlvbih1c2VyRGF0YSkge1xuICAgICAgICB1c2VyLmxvYWRlZCA9IHRydWU7XG4gICAgICAgIHVzZXIgPSBhbmd1bGFyLmV4dGVuZCh1c2VyLCB1c2VyRGF0YSk7XG4gICAgICAgICRyb290U2NvcGUuJGJyb2FkY2FzdCgndXNlck1vZGVsOjp1c2VyVXBkYXRlZCcsIHVzZXIpO1xuICAgICAgICAkbG9nLmRlYnVnKFwiVXNlck1vZGVsOiBzZXRVc2VyOiBcIiArIHVzZXIuaWQpO1xuICAgICAgICAkbG9nLmRlYnVnKFwiVXNlck1vZGVsOiBzZXRVc2VyOiBcIiArIHVzZXIuZW1haWwpO1xuICAgIH07XG5cbiAgICB0aGlzLnJlc2V0VXNlciA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAkd2luZG93LnNlc3Npb25TdG9yYWdlLnJlbW92ZUl0ZW0oJ3Rva2VuJyk7XG5cbiAgICAgICAgdXNlciA9IHt9O1xuICAgICAgICB1c2VyLmxvYWRlZCA9IGZhbHNlO1xuICAgICAgICB1c2VyLmlkID0gJyc7XG4gICAgICAgIHVzZXIuZW1haWwgPSAnJztcbiAgICAgICAgdXNlci5maXJzdF9uYW1lID0gJyc7XG4gICAgICAgIHVzZXIubGFzdF9uYW1lID0gJyc7XG4gICAgICAgIHVzZXIuYWRtaW4gPSBmYWxzZTtcblxuICAgICAgICB0aGlzLnVzZXIgPSB1c2VyO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBJbnZva2VkIG9uIHN0YXJ0dXAsIGxpa2UgYSBjb25zdHJ1Y3Rvci5cbiAgICAgKi9cbiAgICB2YXIgaW5pdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJGxvZy5kZWJ1ZyhcImNyZWF0aW5nIHVzZXIgbW9kZWwuLi5cIik7XG4gICAgfTtcbiAgICBpbml0KCk7XG5cbn07XG5cblVzZXJNb2RlbC4kaW5qZWN0ID0gWyckcm9vdFNjb3BlJywgJyR3aW5kb3cnLCAnJGxvZyddO1xubW9kdWxlLmV4cG9ydHMgPSBVc2VyTW9kZWw7IiwiXG52YXIgTWVzc2FnZU1vZGVsID0gZnVuY3Rpb24oJHJvb3RTY29wZSwgJGxvZykge1xuXG4gICAgdmFyIG1vZGVsID0gdGhpcztcbiAgICB2YXIgcXVldWUgPSBbXTtcblxuICAgIHZhciBtZXNzYWdlID0ge307XG4gICAgbWVzc2FnZS5sb2FkZWQgPSBmYWxzZTtcbiAgICBtZXNzYWdlLnR5cGUgPSAnJzsgLy8gY2FuIGJlIHN1Y2Nlc3MsIGluZm8sIHdhcm5pbmcgb3IgZGFuZ2VyXG4gICAgbWVzc2FnZS5jb250ZW50ID0gJyc7XG4gICAgbWVzc2FnZS5zaGFyZUxlYWd1ZSA9IGZhbHNlO1xuICAgIG1lc3NhZ2Uuc2hhcmVUZWFtID0gZmFsc2U7XG4gICAgbWVzc2FnZS5zaGFyZVVzZXIgPSBmYWxzZTtcblxuICAgIHRoaXMubWVzc2FnZSA9IG1lc3NhZ2U7XG5cbiAgICB0aGlzLnNldE1lc3NhZ2UgPSBmdW5jdGlvbihtZXNzYWdlRGF0YSwgZGVsYXkpIHtcbiAgICAgICAgdmFyIG1lc3NhZ2UgPSB7fTtcbiAgICAgICAgbWVzc2FnZS5sb2FkZWQgPSB0cnVlO1xuICAgICAgICBtZXNzYWdlID0gYW5ndWxhci5leHRlbmQobWVzc2FnZSwgbWVzc2FnZURhdGEpO1xuICAgICAgICBpZiAoZGVsYXkpIHtcbiAgICAgICAgICAgIHF1ZXVlWzBdID0gbWVzc2FnZTsgLy8gcXVldWUgaXQgdXAgZm9yIGFmdGVyIGEgbG9jYXRpb24gY2hhbmdlXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBtb2RlbC5tZXNzYWdlID0gbWVzc2FnZTsgLy8gc2hvdyB0aGUgbWVzc2FnZSBhc2FwXG4gICAgICAgICAgICBxdWV1ZSA9IFtdOyAvLyBjbGVhciB0aGUgcXVldWUgYXMgbWVzc2FnZSB3aWxsIGJlIHNob3dlZCBpbW1lZGlhdGVseVxuICAgICAgICB9XG4gICAgICAgICRsb2cuZGVidWcoXCJNZXNzYWdlTW9kZWw6IGNvbnRlbnQ6IFwiICsgbWVzc2FnZS5jb250ZW50KTtcbiAgICB9O1xuXG4gICAgdGhpcy5yZXNldE1lc3NhZ2UgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgbWVzc2FnZSA9IHt9O1xuICAgICAgICBtZXNzYWdlLmxvYWRlZCA9IGZhbHNlO1xuICAgICAgICBtZXNzYWdlLnR5cGUgPSAnJztcbiAgICAgICAgbWVzc2FnZS5jb250ZW50ID0gJyc7XG4gICAgICAgIG1lc3NhZ2Uuc2hhcmVMZWFndWUgPSBmYWxzZTtcbiAgICAgICAgbWVzc2FnZS5zaGFyZVRlYW0gPSBmYWxzZTtcbiAgICAgICAgbWVzc2FnZS5zaGFyZVVzZXIgPSBmYWxzZTtcblxuICAgICAgICB0aGlzLm1lc3NhZ2UgPSBtZXNzYWdlO1xuICAgIH07XG5cbiAgICAkcm9vdFNjb3BlLiRvbihcIiRsb2NhdGlvbkNoYW5nZVN0YXJ0XCIsIGZ1bmN0aW9uKCkge1xuICAgICAgICBtb2RlbC5yZXNldE1lc3NhZ2UoKTtcbiAgICB9KTtcblxuICAgICRyb290U2NvcGUuJG9uKFwiJGxvY2F0aW9uQ2hhbmdlU3VjY2Vzc1wiLCBmdW5jdGlvbigpIHtcbiAgICAgICAgbW9kZWwubWVzc2FnZSA9IHF1ZXVlLnNoaWZ0KCkgfHwge307XG4gICAgfSk7XG5cbiAgICAvKipcbiAgICAgKiBJbnZva2VkIG9uIHN0YXJ0dXAsIGxpa2UgYSBjb25zdHJ1Y3Rvci5cbiAgICAgKi9cbiAgICB2YXIgaW5pdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJGxvZy5kZWJ1ZyhcImNyZWF0aW5nIG1lc3NhZ2UgbW9kZWwuLi5cIik7XG4gICAgfTtcbiAgICBpbml0KCk7XG5cbn07XG5cbk1lc3NhZ2VNb2RlbC4kaW5qZWN0ID0gWyckcm9vdFNjb3BlJywgJyRsb2cnXTtcbm1vZHVsZS5leHBvcnRzID0gTWVzc2FnZU1vZGVsO1xuIiwidmFyIFNlYXNvbk1vZGVsID0gZnVuY3Rpb24oKSB7XG5cbiAgdmFyIG1vZGVsID0gdGhpcztcblxuICB2YXIgc2Vhc29ucyA9IFtdO1xuICB2YXIgY3VycmVudFNlYXNvbnMgPSBbXTtcbiAgdmFyIHN0YXJ0ZWRTZWFzb25zID0gW107XG4gIHZhciBlbmRlZFNlYXNvbnMgPSBbXTtcbiAgdmFyIHNlbGVjdGVkU2Vhc29uSWQ7XG4gIHZhciBsb2FkZWQgPSBmYWxzZTtcblxuICB0aGlzLnNlYXNvbnMgPSBzZWFzb25zO1xuICB0aGlzLmN1cnJlbnRTZWFzb25zID0gY3VycmVudFNlYXNvbnM7XG4gIHRoaXMuc3RhcnRlZFNlYXNvbnMgPSBzdGFydGVkU2Vhc29ucztcbiAgdGhpcy5lbmRlZFNlYXNvbnMgPSBlbmRlZFNlYXNvbnM7XG4gIHRoaXMuc2VsZWN0ZWRTZWFzb25JZCA9IHNlbGVjdGVkU2Vhc29uSWQ7XG4gIHRoaXMubG9hZGVkID0gbG9hZGVkO1xuXG4gIHRoaXMuZ2V0Q3VycmVudFNlYXNvbiA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBtb2RlbC5jdXJyZW50U2Vhc29uc1swXTtcbiAgfTtcblxuICB0aGlzLnNldFNlYXNvbnMgPSBmdW5jdGlvbihzZWFzb25zQXJyYXkpIHtcbiAgICBpZiAoIWFuZ3VsYXIuaXNBcnJheShzZWFzb25zQXJyYXkpKSByZXR1cm47XG4gICAgbW9kZWwuc2Vhc29ucyA9IHNlYXNvbnNBcnJheTtcbiAgICBtb2RlbC5jdXJyZW50U2Vhc29ucyA9IF8uZmlsdGVyKHNlYXNvbnNBcnJheSwgZnVuY3Rpb24oc2Vhc29uKSB7XG4gICAgICByZXR1cm4gc2Vhc29uLmN1cnJlbnQ7XG4gICAgfSk7XG4gICAgbW9kZWwuc3RhcnRlZFNlYXNvbnMgPSBfLmZpbHRlcihzZWFzb25zQXJyYXksIGZ1bmN0aW9uKHNlYXNvbikge1xuICAgICAgcmV0dXJuIHNlYXNvbi5zdGFydGVkO1xuICAgIH0pO1xuICAgIG1vZGVsLmVuZGVkU2Vhc29ucyA9IF8uZmlsdGVyKHNlYXNvbnNBcnJheSwgZnVuY3Rpb24oc2Vhc29uKSB7XG4gICAgICByZXR1cm4gc2Vhc29uLmVuZGVkO1xuICAgIH0pO1xuICAgIG1vZGVsLnNldFNlbGVjdGVkU2Vhc29uSWQobW9kZWwuZ2V0Q3VycmVudFNlYXNvbigpLmlkKTtcbiAgICBtb2RlbC5sb2FkZWQgPSB0cnVlO1xuICB9O1xuXG4gIHRoaXMuc2V0U2VsZWN0ZWRTZWFzb25JZCA9IGZ1bmN0aW9uKHNlYXNvbklkKSB7XG4gICAgbW9kZWwuc2VsZWN0ZWRTZWFzb25JZCA9IHNlYXNvbklkO1xuICB9O1xuXG59O1xuXG5TZWFzb25Nb2RlbC4kaW5qZWN0ID0gW107XG5tb2R1bGUuZXhwb3J0cyA9IFNlYXNvbk1vZGVsOyIsIi8qXG4gKiAgR2xvYmFsIGNvbmZpZyBmb3IgcmVtb3RlIHNlcnZpY2VzXG4gKi9cblxudmFyIEFwaUNvbmZpZyA9ICB7XG4gICAgYmFzZVVSTDogJy9hcGkvJ1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBBcGlDb25maWc7XG4iLCJ2YXIgR2FtZVNlcnZpY2UgPSBmdW5jdGlvbigkaHR0cCwgJGxvZywgJHN0YXRlLCBhcGlDb25maWcsIG1lc3NhZ2VNb2RlbCkge1xuXG4gIHRoaXMuZ2V0Q3VycmVudEdhbWVzID0gZnVuY3Rpb24obGVhZ3VlSWQpIHtcbiAgICB2YXIgYXBpVXJsID0gYXBpQ29uZmlnLmJhc2VVUkwgKyBcImdhbWVzL2N1cnJlbnQ/bGVhZ3VlX2lkPVwiICsgbGVhZ3VlSWQ7XG5cbiAgICB2YXIgcHJvbWlzZSA9ICRodHRwLmdldChhcGlVcmwpXG4gICAgICAuc3VjY2VzcyhmdW5jdGlvbihkYXRhKSB7XG4gICAgICAgICRsb2cuZGVidWcoXCJHYW1lU2VydmljZTogZ2V0Q3VycmVudEdhbWVzIHN1Y2Nlc3NcIik7XG4gICAgICAgIHJldHVybiBkYXRhO1xuICAgICAgfSlcbiAgICAgIC5lcnJvcihmdW5jdGlvbihkYXRhKSB7XG4gICAgICAgICRsb2cuZGVidWcoXCJHYW1lU2VydmljZTogZ2V0Q3VycmVudEdhbWVzIGZhaWxlZFwiKTtcbiAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgICB9KTtcblxuICAgIHJldHVybiBwcm9taXNlO1xuICB9O1xuXG4gIHRoaXMuZ2V0V2Vla0dhbWVzID0gZnVuY3Rpb24od2Vla0lkKSB7XG4gICAgdmFyIGFwaVVybCA9IGFwaUNvbmZpZy5iYXNlVVJMICsgXCJ3ZWVrcy9cIiArIHdlZWtJZCArIFwiL2dhbWVzXCI7XG5cbiAgICB2YXIgcHJvbWlzZSA9ICRodHRwLmdldChhcGlVcmwpXG4gICAgICAuc3VjY2VzcyhmdW5jdGlvbihkYXRhKSB7XG4gICAgICAgICRsb2cuZGVidWcoXCJHYW1lU2VydmljZTogZ2V0V2Vla0dhbWVzIHN1Y2Nlc3NcIik7XG4gICAgICAgIHJldHVybiBkYXRhO1xuICAgICAgfSlcbiAgICAgIC5lcnJvcihmdW5jdGlvbihkYXRhKSB7XG4gICAgICAgICRsb2cuZGVidWcoXCJHYW1lU2VydmljZTogZ2V0V2Vla0dhbWVzIGZhaWxlZFwiKTtcbiAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgICB9KTtcblxuICAgIHJldHVybiBwcm9taXNlO1xuICB9O1xuXG4gIHRoaXMuY3JlYXRlR2FtZSA9IGZ1bmN0aW9uKGdhbWVQYXJhbXMpIHtcbiAgICB2YXIgcHJvbWlzZSA9ICRodHRwLnBvc3QoYXBpQ29uZmlnLmJhc2VVUkwgKyBcImFkbWluL3dlZWtzL1wiICsgZ2FtZVBhcmFtcy53ZWVrX2lkICsgXCIvZ2FtZXNcIixcbiAgICAgIHsgZ2FtZTogZ2FtZVBhcmFtcyB9KVxuICAgICAgLnN1Y2Nlc3MoZnVuY3Rpb24oZGF0YSkge1xuICAgICAgICAkbG9nLmRlYnVnKFwiR2FtZVNlcnZpY2U6IGNyZWF0ZUdhbWUgc3VjY2Vzc1wiKTtcbiAgICAgICAgLy8gdG9kbzogdGhpcyByZWxpZXMgb24gYSBtb25rZXkgcGF0Y2ggYXQgdGhlIG1vbWVudCAtIGh0dHBzOi8vZ2l0aHViLmNvbS9hbmd1bGFyLXVpL3VpLXJvdXRlci9pc3N1ZXMvNTgyXG4gICAgICAgIC8vIGJ1dCBtYXkgYmUgcmVzb2x2ZWQgd2l0aCBmdXR1cmUgcmVsZWFzZXMgb2YgYW5ndWxhci11aS1yb3V0ZXJcbiAgICAgICAgJHN0YXRlLnJlbG9hZCgpOyAvLyByZWxvYWRzIGFsbCB0aGUgcmVzb2x2ZXMgZm9yIHRoZSB2aWV3IGxlYWd1ZSBwYWdlIGFuZCByZWluc3RhbnRpYXRlcyB0aGUgY29udHJvbGxlclxuICAgICAgICBtZXNzYWdlTW9kZWwuc2V0TWVzc2FnZShkYXRhLm1lc3NhZ2UsIGZhbHNlKTtcbiAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgICB9KVxuICAgICAgLmVycm9yKGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAgICAgJGxvZy5kZWJ1ZyhcIkdhbWVTZXJ2aWNlOiBjcmVhdGVHYW1lIGZhaWxlZFwiKTtcbiAgICAgICAgbWVzc2FnZU1vZGVsLnNldE1lc3NhZ2UoZGF0YS5tZXNzYWdlLCBmYWxzZSk7XG4gICAgICAgIHJldHVybiBkYXRhO1xuICAgICAgfSk7XG5cbiAgICByZXR1cm4gcHJvbWlzZTtcbiAgfTtcblxuICB0aGlzLnVwZGF0ZUdhbWUgPSBmdW5jdGlvbihnYW1lUGFyYW1zKSB7XG4gICAgdmFyIHByb21pc2UgPSAkaHR0cC5wdXQoYXBpQ29uZmlnLmJhc2VVUkwgKyBcImFkbWluL3dlZWtzL1wiICsgZ2FtZVBhcmFtcy53ZWVrX2lkICsgXCIvZ2FtZXMvXCIgKyBnYW1lUGFyYW1zLmlkLFxuICAgICAgeyBnYW1lOiBnYW1lUGFyYW1zIH0pXG4gICAgICAuc3VjY2VzcyhmdW5jdGlvbihkYXRhKSB7XG4gICAgICAgICRsb2cuZGVidWcoXCJHYW1lU2VydmljZTogdXBkYXRlR2FtZSBzdWNjZXNzXCIpO1xuICAgICAgICAvLyB0b2RvOiB0aGlzIHJlbGllcyBvbiBhIG1vbmtleSBwYXRjaCBhdCB0aGUgbW9tZW50IC0gaHR0cHM6Ly9naXRodWIuY29tL2FuZ3VsYXItdWkvdWktcm91dGVyL2lzc3Vlcy81ODJcbiAgICAgICAgLy8gYnV0IG1heSBiZSByZXNvbHZlZCB3aXRoIGZ1dHVyZSByZWxlYXNlcyBvZiBhbmd1bGFyLXVpLXJvdXRlclxuICAgICAgICAkc3RhdGUucmVsb2FkKCk7IC8vIHJlbG9hZHMgYWxsIHRoZSByZXNvbHZlcyBmb3IgdGhlIHZpZXcgbGVhZ3VlIHBhZ2UgYW5kIHJlaW5zdGFudGlhdGVzIHRoZSBjb250cm9sbGVyXG4gICAgICAgIG1lc3NhZ2VNb2RlbC5zZXRNZXNzYWdlKGRhdGEubWVzc2FnZSwgZmFsc2UpO1xuICAgICAgICByZXR1cm4gZGF0YTtcbiAgICAgIH0pXG4gICAgICAuZXJyb3IoZnVuY3Rpb24oZGF0YSkge1xuICAgICAgICAkbG9nLmRlYnVnKFwiR2FtZVNlcnZpY2U6IHVwZGF0ZUdhbWUgZmFpbGVkXCIpO1xuICAgICAgICBtZXNzYWdlTW9kZWwuc2V0TWVzc2FnZShkYXRhLm1lc3NhZ2UsIGZhbHNlKTtcbiAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgICB9KTtcblxuICAgIHJldHVybiBwcm9taXNlO1xuICB9O1xuXG59O1xuXG5HYW1lU2VydmljZS4kaW5qZWN0ID0gWyckaHR0cCcsICckbG9nJywgJyRzdGF0ZScsICdhcGlDb25maWcnLCAnbWVzc2FnZU1vZGVsJ107XG5tb2R1bGUuZXhwb3J0cyA9IEdhbWVTZXJ2aWNlOyIsInZhciBMZWFndWVTZXJ2aWNlID0gZnVuY3Rpb24oJGh0dHAsICRsb2csICRxLCAkc3RhdGUsIGFwaUNvbmZpZywgbWVzc2FnZU1vZGVsKSB7XG5cbiAgICB0aGlzLmdldExlYWd1ZSA9IGZ1bmN0aW9uKHNlYXNvbklkLCBsZWFndWVJZCkge1xuICAgICAgICB2YXIgcHJvbWlzZSA9ICRodHRwLmdldChhcGlDb25maWcuYmFzZVVSTCArIFwic2Vhc29ucy9cIiArIHNlYXNvbklkICsgXCIvbGVhZ3Vlcy9cIiArIGxlYWd1ZUlkKVxuICAgICAgICAgICAgLnN1Y2Nlc3MoZnVuY3Rpb24oZGF0YSkge1xuICAgICAgICAgICAgICAgICRsb2cuZGVidWcoXCJMZWFndWVTZXJ2aWNlOiBnZXRMZWFndWUgc3VjY2Vzc1wiKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gZGF0YTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuZXJyb3IoZnVuY3Rpb24oZGF0YSkge1xuICAgICAgICAgICAgICAgICRsb2cuZGVidWcoXCJMZWFndWVTZXJ2aWNlOiBnZXRMZWFndWUgZmFpbGVkXCIpO1xuICAgICAgICAgICAgICAgIHJldHVybiBkYXRhO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIHByb21pc2U7XG4gICAgfTtcblxuICAgIHRoaXMuZ2V0QWxsTGVhZ3VlcyA9IGZ1bmN0aW9uKHNlYXNvbklkKSB7XG4gICAgICAgIHZhciBwcm9taXNlID0gJGh0dHAuZ2V0KGFwaUNvbmZpZy5iYXNlVVJMICsgXCJhZG1pbi9zZWFzb25zL1wiICsgc2Vhc29uSWQgKyBcIi9sZWFndWVzXCIpXG4gICAgICAgICAgICAuc3VjY2VzcyhmdW5jdGlvbihkYXRhKSB7XG4gICAgICAgICAgICAgICAgJGxvZy5kZWJ1ZyhcIkxlYWd1ZVNlcnZpY2U6IGdldEFsbExlYWd1ZXMgc3VjY2Vzc1wiKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gZGF0YTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuZXJyb3IoZnVuY3Rpb24oZGF0YSkge1xuICAgICAgICAgICAgICAgICRsb2cuZGVidWcoXCJMZWFndWVTZXJ2aWNlOiBnZXRBbGxMZWFndWVzIGZhaWxlZFwiKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gZGF0YTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiBwcm9taXNlO1xuICAgIH07XG5cbiAgICB0aGlzLmdldExlYWd1ZXMgPSBmdW5jdGlvbihzZWFzb25JZCkge1xuICAgICAgICB2YXIgcHJvbWlzZSA9ICRodHRwLmdldChhcGlDb25maWcuYmFzZVVSTCArIFwic2Vhc29ucy9cIiArIHNlYXNvbklkICsgXCIvbGVhZ3Vlc1wiKVxuICAgICAgICAgICAgLnN1Y2Nlc3MoZnVuY3Rpb24oZGF0YSkge1xuICAgICAgICAgICAgICAgICRsb2cuZGVidWcoXCJMZWFndWVTZXJ2aWNlOiBnZXRMZWFndWVzIHN1Y2Nlc3NcIik7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmVycm9yKGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAgICAgICAgICAgICAkbG9nLmRlYnVnKFwiTGVhZ3VlU2VydmljZTogZ2V0TGVhZ3VlcyBmYWlsZWRcIik7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gcHJvbWlzZTtcbiAgICB9O1xuXG4gICAgdGhpcy5nZXRNYW5hZ2VkTGVhZ3VlcyA9IGZ1bmN0aW9uKHNlYXNvbklkKSB7XG4gICAgICAgIHZhciBwcm9taXNlID0gJGh0dHAuZ2V0KGFwaUNvbmZpZy5iYXNlVVJMICsgXCJzZWFzb25zL1wiICsgc2Vhc29uSWQgKyBcIi9sZWFndWVzL21hbmFnZWRcIilcbiAgICAgICAgICAgIC5zdWNjZXNzKGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAgICAgICAgICAgICAkbG9nLmRlYnVnKFwiTGVhZ3VlU2VydmljZTogZ2V0TWFuYWdlZExlYWd1ZXMgc3VjY2Vzc1wiKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gZGF0YTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuZXJyb3IoZnVuY3Rpb24oZGF0YSkge1xuICAgICAgICAgICAgICAgICRsb2cuZGVidWcoXCJMZWFndWVTZXJ2aWNlOiBnZXRNYW5hZ2VkTGVhZ3VlcyBmYWlsZWRcIik7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gcHJvbWlzZTtcbiAgICB9O1xuXG4gICAgdGhpcy5nZXRQdWJsaWNMZWFndWVzID0gZnVuY3Rpb24oc2Vhc29uSWQpIHtcbiAgICAgICAgdmFyIHByb21pc2UgPSAkaHR0cC5nZXQoYXBpQ29uZmlnLmJhc2VVUkwgKyBcInNlYXNvbnMvXCIgKyBzZWFzb25JZCArIFwiL2xlYWd1ZXMvcHVibGljXCIpXG4gICAgICAgICAgICAuc3VjY2VzcyhmdW5jdGlvbihkYXRhKSB7XG4gICAgICAgICAgICAgICAgJGxvZy5kZWJ1ZyhcIkxlYWd1ZVNlcnZpY2U6IGdldFB1YmxpY0xlYWd1ZXMgc3VjY2Vzc1wiKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gZGF0YTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuZXJyb3IoZnVuY3Rpb24oZGF0YSkge1xuICAgICAgICAgICAgICAgICRsb2cuZGVidWcoXCJMZWFndWVTZXJ2aWNlOiBnZXRQdWJsaWNMZWFndWVzIGZhaWxlZFwiKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gZGF0YTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiBwcm9taXNlO1xuICAgIH07XG5cbiAgICB0aGlzLmdldFByaXZhdGVMZWFndWVzID0gZnVuY3Rpb24oc2Vhc29uSWQpIHtcbiAgICAgICAgdmFyIHByb21pc2UgPSAkaHR0cC5nZXQoYXBpQ29uZmlnLmJhc2VVUkwgKyBcInNlYXNvbnMvXCIgKyBzZWFzb25JZCArIFwiL2xlYWd1ZXMvcHJpdmF0ZVwiKVxuICAgICAgICAgICAgLnN1Y2Nlc3MoZnVuY3Rpb24oZGF0YSkge1xuICAgICAgICAgICAgICAgICRsb2cuZGVidWcoXCJMZWFndWVTZXJ2aWNlOiBnZXRQcml2YXRlTGVhZ3VlcyBzdWNjZXNzXCIpO1xuICAgICAgICAgICAgICAgIHJldHVybiBkYXRhO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5lcnJvcihmdW5jdGlvbihkYXRhKSB7XG4gICAgICAgICAgICAgICAgJGxvZy5kZWJ1ZyhcIkxlYWd1ZVNlcnZpY2U6IGdldFByaXZhdGVMZWFndWVzIGZhaWxlZFwiKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gZGF0YTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiBwcm9taXNlO1xuICAgIH07XG5cbiAgICB0aGlzLmNyZWF0ZUxlYWd1ZSA9IGZ1bmN0aW9uKGxlYWd1ZVBhcmFtcykge1xuICAgICAgICB2YXIgZGVmZXJyZWQgPSAkcS5kZWZlcigpO1xuICAgICAgICAkaHR0cC5wb3N0KGFwaUNvbmZpZy5iYXNlVVJMICsgXCJzZWFzb25zL1wiICsgbGVhZ3VlUGFyYW1zLnNlYXNvbl9pZCArIFwiL2xlYWd1ZXNcIixcbiAgICAgICAgICAgIHsgbGVhZ3VlOiBsZWFndWVQYXJhbXMgfSlcbiAgICAgICAgICAgIC5zdWNjZXNzKGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAgICAgICAgICAgICAkbG9nLmRlYnVnKFwiTGVhZ3VlU2VydmljZTogY3JlYXRlTGVhZ3VlIHN1Y2Nlc3NcIik7XG4gICAgICAgICAgICAgICAgbWVzc2FnZU1vZGVsLnNldE1lc3NhZ2UoeyB0eXBlOiBkYXRhLm1lc3NhZ2UudHlwZSwgY29udGVudDogZGF0YS5tZXNzYWdlLmNvbnRlbnQsIHNoYXJlTGVhZ3VlOiB0cnVlICB9LCB0cnVlKTtcbiAgICAgICAgICAgICAgICBkZWZlcnJlZC5yZXNvbHZlKGRhdGEpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5lcnJvcihmdW5jdGlvbihkYXRhKSB7XG4gICAgICAgICAgICAgICAgJGxvZy5kZWJ1ZyhcIkxlYWd1ZVNlcnZpY2U6IGNyZWF0ZUxlYWd1ZSBmYWlsZWRcIik7XG4gICAgICAgICAgICAgICAgbWVzc2FnZU1vZGVsLnNldE1lc3NhZ2UoZGF0YS5tZXNzYWdlLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgZGVmZXJyZWQucmVqZWN0KGRhdGEpO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIGRlZmVycmVkLnByb21pc2U7XG4gICAgfTtcblxuICAgIHRoaXMudXBkYXRlTGVhZ3VlID0gZnVuY3Rpb24obGVhZ3VlUGFyYW1zKSB7XG4gICAgICAgIHZhciBkZWZlcnJlZCA9ICRxLmRlZmVyKCk7XG4gICAgICAgICRodHRwLnB1dChhcGlDb25maWcuYmFzZVVSTCArIFwic2Vhc29ucy9cIiArIGxlYWd1ZVBhcmFtcy5zZWFzb25faWQgKyBcIi9sZWFndWVzL1wiICsgbGVhZ3VlUGFyYW1zLmlkLFxuICAgICAgICAgICAgeyBsZWFndWU6IGxlYWd1ZVBhcmFtcyB9KVxuICAgICAgICAgICAgLnN1Y2Nlc3MoZnVuY3Rpb24oZGF0YSkge1xuICAgICAgICAgICAgICAgICRsb2cuZGVidWcoXCJMZWFndWVTZXJ2aWNlOiB1cGRhdGVMZWFndWUgc3VjY2Vzc1wiKTtcbiAgICAgICAgICAgICAgICBtZXNzYWdlTW9kZWwuc2V0TWVzc2FnZShkYXRhLm1lc3NhZ2UsIHRydWUpO1xuICAgICAgICAgICAgICAgIGRlZmVycmVkLnJlc29sdmUoZGF0YSk7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmVycm9yKGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAgICAgICAgICAgICAkbG9nLmRlYnVnKFwiTGVhZ3VlU2VydmljZTogdXBkYXRlTGVhZ3VlIGZhaWxlZFwiKTtcbiAgICAgICAgICAgICAgICBtZXNzYWdlTW9kZWwuc2V0TWVzc2FnZShkYXRhLm1lc3NhZ2UsIGZhbHNlKTtcbiAgICAgICAgICAgICAgICBkZWZlcnJlZC5yZWplY3QoZGF0YSk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gZGVmZXJyZWQucHJvbWlzZTtcbiAgICB9O1xuXG4gICAgdGhpcy5jbG9zZUxlYWd1ZSA9IGZ1bmN0aW9uKGxlYWd1ZVBhcmFtcykge1xuICAgICAgdmFyIHByb21pc2UgPSAkaHR0cC5nZXQoYXBpQ29uZmlnLmJhc2VVUkwgKyBcInNlYXNvbnMvXCIgKyBsZWFndWVQYXJhbXMuc2Vhc29uX2lkICsgXCIvbGVhZ3Vlcy9cIiArIGxlYWd1ZVBhcmFtcy5pZCArIFwiL2Nsb3NlXCIpXG4gICAgICAgIC5zdWNjZXNzKGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAgICAgICAkbG9nLmRlYnVnKFwiTGVhZ3VlU2VydmljZTogY2xvc2VMZWFndWUgc3VjY2Vzc1wiKTtcbiAgICAgICAgICAvLyB0b2RvOiB0aGlzIHJlbGllcyBvbiBhIG1vbmtleSBwYXRjaCBhdCB0aGUgbW9tZW50IC0gaHR0cHM6Ly9naXRodWIuY29tL2FuZ3VsYXItdWkvdWktcm91dGVyL2lzc3Vlcy81ODJcbiAgICAgICAgICAvLyBidXQgbWF5IGJlIHJlc29sdmVkIHdpdGggZnV0dXJlIHJlbGVhc2VzIG9mIGFuZ3VsYXItdWktcm91dGVyXG4gICAgICAgICAgJHN0YXRlLnJlbG9hZCgpOyAvLyByZWxvYWRzIGFsbCB0aGUgcmVzb2x2ZXMgZm9yIHRoZSB2aWV3IGxlYWd1ZSBwYWdlIGFuZCByZWluc3RhbnRpYXRlcyB0aGUgY29udHJvbGxlclxuICAgICAgICAgIG1lc3NhZ2VNb2RlbC5zZXRNZXNzYWdlKGRhdGEubWVzc2FnZSwgZmFsc2UpO1xuICAgICAgICAgIHJldHVybiBkYXRhO1xuICAgICAgICB9KVxuICAgICAgICAuZXJyb3IoZnVuY3Rpb24oZGF0YSkge1xuICAgICAgICAgICRsb2cuZGVidWcoXCJMZWFndWVTZXJ2aWNlOiBjbG9zZUxlYWd1ZSBmYWlsZWRcIik7XG4gICAgICAgICAgbWVzc2FnZU1vZGVsLnNldE1lc3NhZ2UoZGF0YS5tZXNzYWdlLCBmYWxzZSk7XG4gICAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgICAgIH0pO1xuXG4gICAgICByZXR1cm4gcHJvbWlzZTtcbiAgICB9O1xuXG4gICAgdGhpcy51cGRhdGVMZWFndWVNZXNzYWdlID0gZnVuY3Rpb24obGVhZ3VlUGFyYW1zLCBlbWFpbEFsaXZlLCBlbWFpbEFsbCkge1xuICAgICAgdmFyIGRlZmVycmVkID0gJHEuZGVmZXIoKTtcbiAgICAgICRodHRwLnB1dChhcGlDb25maWcuYmFzZVVSTCArIFwic2Vhc29ucy9cIiArIGxlYWd1ZVBhcmFtcy5zZWFzb25faWQgKyBcIi9sZWFndWVzL1wiICsgbGVhZ3VlUGFyYW1zLmlkICsgXCIvbWVzc2FnZVwiLFxuICAgICAgICAgICAgeyBsZWFndWU6IGxlYWd1ZVBhcmFtcywgZW1haWxBbGl2ZTogZW1haWxBbGl2ZSwgZW1haWxBbGw6IGVtYWlsQWxsIH0pXG4gICAgICAgICAgICAuc3VjY2VzcyhmdW5jdGlvbihkYXRhKSB7XG4gICAgICAgICAgICAgICAgJGxvZy5kZWJ1ZyhcIkxlYWd1ZVNlcnZpY2U6IHVwZGF0ZUxlYWd1ZU1lc3NhZ2Ugc3VjY2Vzc1wiKTtcbiAgICAgICAgICAgICAgICBtZXNzYWdlTW9kZWwuc2V0TWVzc2FnZShkYXRhLm1lc3NhZ2UsIGZhbHNlKTtcbiAgICAgICAgICAgICAgICBkZWZlcnJlZC5yZXNvbHZlKGxlYWd1ZVBhcmFtcy5tZXNzYWdlKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuZXJyb3IoZnVuY3Rpb24oZGF0YSkge1xuICAgICAgICAgICAgICAgICRsb2cuZGVidWcoXCJMZWFndWVTZXJ2aWNlOiB1cGRhdGVMZWFndWVNZXNzYWdlIGZhaWxlZFwiKTtcbiAgICAgICAgICAgICAgICBtZXNzYWdlTW9kZWwuc2V0TWVzc2FnZShkYXRhLm1lc3NhZ2UsIGZhbHNlKTtcbiAgICAgICAgICAgICAgICBkZWZlcnJlZC5yZWplY3QoKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiBkZWZlcnJlZC5wcm9taXNlO1xuICAgIH07XG5cbiAgICB0aGlzLnNlbmRDb21taXNoTWVzc2FnZSA9IGZ1bmN0aW9uKGxlYWd1ZVBhcmFtcywgbWVzc2FnZSkge1xuICAgICAgICB2YXIgZGVmZXJyZWQgPSAkcS5kZWZlcigpO1xuICAgICAgICAkaHR0cC5wdXQoYXBpQ29uZmlnLmJhc2VVUkwgKyBcInNlYXNvbnMvXCIgKyBsZWFndWVQYXJhbXMuc2Vhc29uX2lkICsgXCIvbGVhZ3Vlcy9cIiArIGxlYWd1ZVBhcmFtcy5pZCArIFwiL2NvbnRhY3RcIixcbiAgICAgICAgICAgIHsgY29udGFjdDogbWVzc2FnZSB9KVxuICAgICAgICAgICAgICAuc3VjY2VzcyhmdW5jdGlvbihkYXRhKSB7XG4gICAgICAgICAgICAgICAgICAkbG9nLmRlYnVnKFwiTGVhZ3VlU2VydmljZTogc2VuZENvbW1pc2hNZXNzYWdlIHN1Y2Nlc3NcIik7XG4gICAgICAgICAgICAgICAgICBtZXNzYWdlTW9kZWwuc2V0TWVzc2FnZShkYXRhLm1lc3NhZ2UsIGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgIGRlZmVycmVkLnJlc29sdmUoKTtcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgLmVycm9yKGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAgICAgICAgICAgICAgICRsb2cuZGVidWcoXCJMZWFndWVTZXJ2aWNlOiBzZW5kQ29tbWlzaE1lc3NhZ2UgZmFpbGVkXCIpO1xuICAgICAgICAgICAgICAgICAgbWVzc2FnZU1vZGVsLnNldE1lc3NhZ2UoZGF0YS5tZXNzYWdlLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgICBkZWZlcnJlZC5yZWplY3QoKTtcbiAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIGRlZmVycmVkLnByb21pc2U7XG4gICAgfTtcblxuICAgIHRoaXMuZ2V0SW52aXRlcyA9IGZ1bmN0aW9uKGxlYWd1ZUlkKSB7XG4gICAgICB2YXIgcHJvbWlzZSA9ICRodHRwLmdldChhcGlDb25maWcuYmFzZVVSTCArIFwibGVhZ3Vlcy9cIiArIGxlYWd1ZUlkICsgXCIvaW52aXRhdGlvbnNcIilcbiAgICAgICAgLnN1Y2Nlc3MoZnVuY3Rpb24oZGF0YSkge1xuICAgICAgICAgICRsb2cuZGVidWcoXCJMZWFndWVTZXJ2aWNlOiBnZXRJbnZpdGVzIHN1Y2Nlc3NcIik7XG4gICAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgICAgIH0pXG4gICAgICAgIC5lcnJvcihmdW5jdGlvbihkYXRhKSB7XG4gICAgICAgICAgJGxvZy5kZWJ1ZyhcIkxlYWd1ZVNlcnZpY2U6IGdldEludml0ZXMgZmFpbGVkXCIpO1xuICAgICAgICAgIG1lc3NhZ2VNb2RlbC5zZXRNZXNzYWdlKGRhdGEubWVzc2FnZSwgZmFsc2UpO1xuICAgICAgICAgIHJldHVybiBkYXRhO1xuICAgICAgICB9KTtcblxuICAgICAgcmV0dXJuIHByb21pc2U7XG4gICAgfTtcblxuICAgIHRoaXMuY3JlYXRlSW52aXRlID0gZnVuY3Rpb24oaW52aXRlUGFyYW1zKSB7XG4gICAgICAgIHZhciBwcm9taXNlID0gJGh0dHAucG9zdChhcGlDb25maWcuYmFzZVVSTCArIFwibGVhZ3Vlcy9cIiArIGludml0ZVBhcmFtcy5sZWFndWVfaWQgKyBcIi9pbnZpdGF0aW9uc1wiLFxuICAgICAgICAgICAgeyBpbnZpdGF0aW9uOiBpbnZpdGVQYXJhbXMgfSlcbiAgICAgICAgICAgIC5zdWNjZXNzKGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAgICAgICAgICAgICAkbG9nLmRlYnVnKFwiTGVhZ3VlU2VydmljZTogY3JlYXRlSW52aXRlIHN1Y2Nlc3NcIik7XG4gICAgICAgICAgICAgICAgbWVzc2FnZU1vZGVsLnNldE1lc3NhZ2UoZGF0YS5tZXNzYWdlLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmVycm9yKGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAgICAgICAgICAgICAkbG9nLmRlYnVnKFwiTGVhZ3VlU2VydmljZTogY3JlYXRlSW52aXRlIGZhaWxlZFwiKTtcbiAgICAgICAgICAgICAgICBtZXNzYWdlTW9kZWwuc2V0TWVzc2FnZShkYXRhLm1lc3NhZ2UsIGZhbHNlKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gZGF0YTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiBwcm9taXNlO1xuICAgIH07XG5cbiAgICB0aGlzLnJlcXVlc3RJbnZpdGUgPSBmdW5jdGlvbihpbnZpdGVQYXJhbXMpIHtcbiAgICAgIHZhciBwcm9taXNlID0gJGh0dHAucG9zdChhcGlDb25maWcuYmFzZVVSTCArIFwibGVhZ3Vlcy9cIiArIGludml0ZVBhcmFtcy5sZWFndWVfaWQgKyBcIi9pbnZpdGF0aW9ucy9uZXdcIixcbiAgICAgICAgICAgIHsgaW52aXRhdGlvbjogaW52aXRlUGFyYW1zIH0pXG4gICAgICAgICAgICAuc3VjY2VzcyhmdW5jdGlvbihkYXRhKSB7XG4gICAgICAgICAgICAgICAgJGxvZy5kZWJ1ZyhcIkxlYWd1ZVNlcnZpY2U6IHJlcXVlc3RJbnZpdGUgc3VjY2Vzc1wiKTtcbiAgICAgICAgICAgICAgICBtZXNzYWdlTW9kZWwuc2V0TWVzc2FnZShkYXRhLm1lc3NhZ2UsIGZhbHNlKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gZGF0YTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuZXJyb3IoZnVuY3Rpb24oZGF0YSkge1xuICAgICAgICAgICAgICAgICRsb2cuZGVidWcoXCJMZWFndWVTZXJ2aWNlOiByZXF1ZXN0SW52aXRlIGZhaWxlZFwiKTtcbiAgICAgICAgICAgICAgICBtZXNzYWdlTW9kZWwuc2V0TWVzc2FnZShkYXRhLm1lc3NhZ2UsIGZhbHNlKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gZGF0YTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiBwcm9taXNlO1xuICAgIH07XG5cbn07XG5cbkxlYWd1ZVNlcnZpY2UuJGluamVjdCA9IFsnJGh0dHAnLCAnJGxvZycsICckcScsICckc3RhdGUnLCAnYXBpQ29uZmlnJywgJ21lc3NhZ2VNb2RlbCddO1xubW9kdWxlLmV4cG9ydHMgPSBMZWFndWVTZXJ2aWNlOyIsInZhciBQaWNrU2VydmljZSA9IGZ1bmN0aW9uKCRodHRwLCAkbG9nLCAkcSwgYXBpQ29uZmlnLCBtZXNzYWdlTW9kZWwpIHtcblxuICB0aGlzLmdldFBpY2tzID0gZnVuY3Rpb24ocGFyYW1zKSB7XG4gICAgdmFyIGFwaVVybCA9IGFwaUNvbmZpZy5iYXNlVVJMICsgXCJ0ZWFtcy9cIiArIHBhcmFtcy50ZWFtSWQgKyBcIi9waWNrc1wiO1xuXG4gICAgdmFyIHByb21pc2UgPSAkaHR0cC5nZXQoYXBpVXJsKVxuICAgICAgLnN1Y2Nlc3MoZnVuY3Rpb24oZGF0YSkge1xuICAgICAgICAkbG9nLmRlYnVnKFwiUGlja1NlcnZpY2U6IGdldFBpY2tzIHN1Y2Nlc3NcIik7XG4gICAgICAgIHJldHVybiBkYXRhO1xuICAgICAgfSlcbiAgICAgIC5lcnJvcihmdW5jdGlvbihkYXRhKSB7XG4gICAgICAgICRsb2cuZGVidWcoXCJQaWNrU2VydmljZTogZ2V0UGlja3MgZmFpbGVkXCIpO1xuICAgICAgICByZXR1cm4gZGF0YTtcbiAgICAgIH0pO1xuXG4gICAgcmV0dXJuIHByb21pc2U7XG4gIH07XG5cbiAgdGhpcy5nZXRTZWxlY3RlZFBpY2tzID0gZnVuY3Rpb24ocGFyYW1zKSB7XG4gICAgdmFyIGFwaVVybCA9IGFwaUNvbmZpZy5iYXNlVVJMICsgXCJ0ZWFtcy9cIiArIHBhcmFtcy50ZWFtSWQgKyBcIi9waWNrcy9zZWxlY3RlZFwiO1xuXG4gICAgdmFyIHByb21pc2UgPSAkaHR0cC5nZXQoYXBpVXJsKVxuICAgICAgLnN1Y2Nlc3MoZnVuY3Rpb24oZGF0YSkge1xuICAgICAgICAkbG9nLmRlYnVnKFwiUGlja1NlcnZpY2U6IGdldFNlbGVjdGVkUGlja3Mgc3VjY2Vzc1wiKTtcbiAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgICB9KVxuICAgICAgLmVycm9yKGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAgICAgJGxvZy5kZWJ1ZyhcIlBpY2tTZXJ2aWNlOiBnZXRTZWxlY3RlZFBpY2tzIGZhaWxlZFwiKTtcbiAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgICB9KTtcblxuICAgIHJldHVybiBwcm9taXNlO1xuICB9O1xuXG4gIHRoaXMuc2F2ZVBpY2sgPSBmdW5jdGlvbihwaWNrUGFyYW1zKSB7XG4gICAgdmFyIGRlZmVycmVkID0gJHEuZGVmZXIoKSxcbiAgICAgICAgYXBpVXJsID0gYXBpQ29uZmlnLmJhc2VVUkwgKyBcInRlYW1zL1wiICsgcGlja1BhcmFtcy50ZWFtX2lkICsgXCIvcGlja3NcIjtcblxuICAgICRodHRwLnBvc3QoYXBpVXJsLCB7IHBpY2s6IHBpY2tQYXJhbXMgfSlcbiAgICAgIC5zdWNjZXNzKGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAgICAgJGxvZy5kZWJ1ZyhcIlBpY2tTZXJ2aWNlOiBzYXZlUGljayBzdWNjZXNzXCIpO1xuICAgICAgICBtZXNzYWdlTW9kZWwuc2V0TWVzc2FnZShkYXRhLm1lc3NhZ2UsIHRydWUpO1xuICAgICAgICBkZWZlcnJlZC5yZXNvbHZlKGRhdGEpO1xuICAgICAgfSlcbiAgICAgIC5lcnJvcihmdW5jdGlvbihkYXRhKSB7XG4gICAgICAgICRsb2cuZGVidWcoXCJQaWNrU2VydmljZTogc2F2ZVBpY2sgZmFpbGVkXCIpO1xuICAgICAgICBtZXNzYWdlTW9kZWwuc2V0TWVzc2FnZShkYXRhLm1lc3NhZ2UsIHRydWUpO1xuICAgICAgICBkZWZlcnJlZC5yZWplY3QoKTtcbiAgICAgIH0pO1xuXG4gICAgcmV0dXJuIGRlZmVycmVkLnByb21pc2U7XG4gIH07XG5cbiAgdGhpcy5zYXZlUGlja3MgPSBmdW5jdGlvbih0ZWFtSWQsIHBpY2tzKSB7XG4gICAgdmFyIGRlZmVycmVkID0gJHEuZGVmZXIoKSxcbiAgICAgICAgYXBpVXJsID0gYXBpQ29uZmlnLmJhc2VVUkwgKyBcInRlYW1zL1wiICsgdGVhbUlkICsgXCIvcGlja3MvbWFueVwiO1xuXG4gICAgJGh0dHAucG9zdChhcGlVcmwsIHsgcGlja3M6IHBpY2tzIH0pXG4gICAgICAuc3VjY2VzcyhmdW5jdGlvbihkYXRhKSB7XG4gICAgICAgICRsb2cuZGVidWcoXCJQaWNrU2VydmljZTogc2F2ZVBpY2tzIHN1Y2Nlc3NcIik7XG4gICAgICAgIG1lc3NhZ2VNb2RlbC5zZXRNZXNzYWdlKGRhdGEubWVzc2FnZSwgdHJ1ZSk7XG4gICAgICAgIGRlZmVycmVkLnJlc29sdmUoZGF0YSk7XG4gICAgICB9KVxuICAgICAgLmVycm9yKGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAgICAgJGxvZy5kZWJ1ZyhcIlBpY2tTZXJ2aWNlOiBzYXZlUGlja3MgZmFpbGVkXCIpO1xuICAgICAgICBtZXNzYWdlTW9kZWwuc2V0TWVzc2FnZShkYXRhLm1lc3NhZ2UsIHRydWUpO1xuICAgICAgICBkZWZlcnJlZC5yZWplY3QoKTtcbiAgICAgIH0pO1xuXG4gICAgcmV0dXJuIGRlZmVycmVkLnByb21pc2U7XG4gIH07XG5cbn07XG5cblBpY2tTZXJ2aWNlLiRpbmplY3QgPSBbJyRodHRwJywgJyRsb2cnLCAnJHEnLCAnYXBpQ29uZmlnJywgJ21lc3NhZ2VNb2RlbCddO1xubW9kdWxlLmV4cG9ydHMgPSBQaWNrU2VydmljZTsiLCJ2YXIgU2Vhc29uU2VydmljZSA9IGZ1bmN0aW9uKCRodHRwLCAkbG9nLCAkc3RhdGUsICRxLCBhcGlDb25maWcsIG1lc3NhZ2VNb2RlbCwgc2Vhc29uTW9kZWwpIHtcblxuICB2YXIgc2VydmljZSA9IHRoaXM7XG5cbiAgdGhpcy5nZXRTZWFzb25zID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBkZWZlcnJlZCA9ICRxLmRlZmVyKCk7XG4gICAgICAgICRodHRwLmdldChhcGlDb25maWcuYmFzZVVSTCArIFwic2Vhc29uc1wiKVxuICAgICAgICAgICAgLnN1Y2Nlc3MoZnVuY3Rpb24oZGF0YSkge1xuICAgICAgICAgICAgICAgICRsb2cuZGVidWcoXCJTZWFzb25TZXJ2aWNlOiBnZXRTZWFzb25zIHN1Y2Nlc3NcIik7XG4gICAgICAgICAgICAgICAgc2Vhc29uTW9kZWwuc2V0U2Vhc29ucyhkYXRhKTtcbiAgICAgICAgICAgICAgICBkZWZlcnJlZC5yZXNvbHZlKGRhdGEpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5lcnJvcihmdW5jdGlvbihkYXRhKSB7XG4gICAgICAgICAgICAgICAgJGxvZy5kZWJ1ZyhcIlNlYXNvblNlcnZpY2U6IGdldFNlYXNvbnMgZmFpbGVkXCIpO1xuICAgICAgICAgICAgICAgIGRlZmVycmVkLnJlamVjdCgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBkZWZlcnJlZC5wcm9taXNlO1xuICAgIH07XG5cbiAgICB0aGlzLmdldFNlYXNvbiA9IGZ1bmN0aW9uKHNlYXNvbklkKSB7XG4gICAgICAgIHZhciBwcm9taXNlID0gJGh0dHAuZ2V0KGFwaUNvbmZpZy5iYXNlVVJMICsgXCJhZG1pbi9zZWFzb25zL1wiICsgc2Vhc29uSWQpXG4gICAgICAgICAgICAuc3VjY2VzcyhmdW5jdGlvbihkYXRhKSB7XG4gICAgICAgICAgICAgICAgJGxvZy5kZWJ1ZyhcIlNlYXNvblNlcnZpY2U6IGdldFNlYXNvbiBzdWNjZXNzXCIpO1xuICAgICAgICAgICAgICAgIHJldHVybiBkYXRhO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5lcnJvcihmdW5jdGlvbihkYXRhKSB7XG4gICAgICAgICAgICAgICAgJGxvZy5kZWJ1ZyhcIlNlYXNvblNlcnZpY2U6IGdldFNlYXNvbiBmYWlsZWRcIik7XG4gICAgICAgICAgICAgICAgbWVzc2FnZU1vZGVsLnNldE1lc3NhZ2UoZGF0YS5tZXNzYWdlLCB0cnVlKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gZGF0YTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gcHJvbWlzZTtcbiAgICB9O1xuXG4gICAgdGhpcy5jcmVhdGVTZWFzb24gPSBmdW5jdGlvbihzZWFzb25QYXJhbXMpIHtcbiAgICAgIHZhciBwcm9taXNlID0gJGh0dHAucG9zdChhcGlDb25maWcuYmFzZVVSTCArIFwiYWRtaW4vc2Vhc29ucy9cIixcbiAgICAgICAgeyBzZWFzb246IHNlYXNvblBhcmFtcyB9KVxuICAgICAgICAuc3VjY2VzcyhmdW5jdGlvbihkYXRhKSB7XG4gICAgICAgICAgJGxvZy5kZWJ1ZyhcIlNlYXNvblNlcnZpY2U6IGNyZWF0ZVNlYXNvbiBzdWNjZXNzXCIpO1xuICAgICAgICAgIG1lc3NhZ2VNb2RlbC5zZXRNZXNzYWdlKGRhdGEubWVzc2FnZSwgZmFsc2UpO1xuICAgICAgICAgIC8vIG5lZWQgdG8gY2FsbCBnZXRTZWFzb25zKCkgYWdhaW4gdG8gcmVzZXQgdGhlIHNlYXNvbm1vZGVsXG4gICAgICAgICAgc2VydmljZS5nZXRTZWFzb25zKClcbiAgICAgICAgICAgIC50aGVuKFxuICAgICAgICAgICAgICBmdW5jdGlvbihyZXNwb25zZSkge1xuICAgICAgICAgICAgICAgIC8vIHRvZG86IHRoaXMgcmVsaWVzIG9uIGEgbW9ua2V5IHBhdGNoIGF0IHRoZSBtb21lbnQgLSBodHRwczovL2dpdGh1Yi5jb20vYW5ndWxhci11aS91aS1yb3V0ZXIvaXNzdWVzLzU4MlxuICAgICAgICAgICAgICAgIC8vIGJ1dCBtYXkgYmUgcmVzb2x2ZWQgd2l0aCBmdXR1cmUgcmVsZWFzZXMgb2YgYW5ndWxhci11aS1yb3V0ZXJcbiAgICAgICAgICAgICAgICAkc3RhdGUucmVsb2FkKCk7IC8vIHJlbG9hZHMgYWxsIHRoZSByZXNvbHZlcyBmb3IgdGhlIHZpZXcgbGVhZ3VlIHBhZ2UgYW5kIHJlaW5zdGFudGlhdGVzIHRoZSBjb250cm9sbGVyXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICk7XG4gICAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgICAgIH0pXG4gICAgICAgIC5lcnJvcihmdW5jdGlvbihkYXRhKSB7XG4gICAgICAgICAgJGxvZy5kZWJ1ZyhcIlNlYXNvblNlcnZpY2U6IGNyZWF0ZVNlYXNvbiBmYWlsZWRcIik7XG4gICAgICAgICAgbWVzc2FnZU1vZGVsLnNldE1lc3NhZ2UoZGF0YS5tZXNzYWdlLCBmYWxzZSk7XG4gICAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgICAgIH0pO1xuXG4gICAgICByZXR1cm4gcHJvbWlzZTtcbiAgICB9O1xuXG4gICAgdGhpcy51cGRhdGVTZWFzb24gPSBmdW5jdGlvbihzZWFzb25QYXJhbXMpIHtcbiAgICAgIHZhciBwcm9taXNlID0gJGh0dHAucHV0KGFwaUNvbmZpZy5iYXNlVVJMICsgXCJhZG1pbi9zZWFzb25zL1wiICsgc2Vhc29uUGFyYW1zLmlkLFxuICAgICAgICB7IHNlYXNvbjogc2Vhc29uUGFyYW1zIH0pXG4gICAgICAgIC5zdWNjZXNzKGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAgICAgICAkbG9nLmRlYnVnKFwiU2Vhc29uU2VydmljZTogdXBkYXRlU2Vhc29uIHN1Y2Nlc3NcIik7XG4gICAgICAgICAgLy8gdG9kbzogdGhpcyByZWxpZXMgb24gYSBtb25rZXkgcGF0Y2ggYXQgdGhlIG1vbWVudCAtIGh0dHBzOi8vZ2l0aHViLmNvbS9hbmd1bGFyLXVpL3VpLXJvdXRlci9pc3N1ZXMvNTgyXG4gICAgICAgICAgLy8gYnV0IG1heSBiZSByZXNvbHZlZCB3aXRoIGZ1dHVyZSByZWxlYXNlcyBvZiBhbmd1bGFyLXVpLXJvdXRlclxuICAgICAgICAgICRzdGF0ZS5yZWxvYWQoKTsgLy8gcmVsb2FkcyBhbGwgdGhlIHJlc29sdmVzIGZvciB0aGUgdmlldyBsZWFndWUgcGFnZSBhbmQgcmVpbnN0YW50aWF0ZXMgdGhlIGNvbnRyb2xsZXJcbiAgICAgICAgICBtZXNzYWdlTW9kZWwuc2V0TWVzc2FnZShkYXRhLm1lc3NhZ2UsIGZhbHNlKTtcbiAgICAgICAgICByZXR1cm4gZGF0YTtcbiAgICAgICAgfSlcbiAgICAgICAgLmVycm9yKGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAgICAgICAkbG9nLmRlYnVnKFwiU2Vhc29uU2VydmljZTogdXBkYXRlU2Vhc29uIGZhaWxlZFwiKTtcbiAgICAgICAgICBtZXNzYWdlTW9kZWwuc2V0TWVzc2FnZShkYXRhLm1lc3NhZ2UsIGZhbHNlKTtcbiAgICAgICAgICByZXR1cm4gZGF0YTtcbiAgICAgICAgfSk7XG5cbiAgICAgIHJldHVybiBwcm9taXNlO1xuICAgIH07XG5cbn07XG5cblNlYXNvblNlcnZpY2UuJGluamVjdCA9IFsnJGh0dHAnLCAnJGxvZycsICckc3RhdGUnLCAnJHEnLCAnYXBpQ29uZmlnJywgJ21lc3NhZ2VNb2RlbCcsICdzZWFzb25Nb2RlbCddO1xubW9kdWxlLmV4cG9ydHMgPSBTZWFzb25TZXJ2aWNlOyIsInZhciBTcXVhZFNlcnZpY2UgPSBmdW5jdGlvbigkaHR0cCwgJGxvZywgJHN0YXRlLCBhcGlDb25maWcsIG1lc3NhZ2VNb2RlbCkge1xuXG4gIHRoaXMuZ2V0U3F1YWRzID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIGFwaVVybCA9IGFwaUNvbmZpZy5iYXNlVVJMICsgXCJhZG1pbi9zcXVhZHMvYWxsXCI7XG5cbiAgICB2YXIgcHJvbWlzZSA9ICRodHRwLmdldChhcGlVcmwpXG4gICAgICAuc3VjY2VzcyhmdW5jdGlvbihkYXRhKSB7XG4gICAgICAgICRsb2cuZGVidWcoXCJTcXVhZFNlcnZpY2U6IGdldFNxdWFkcyBzdWNjZXNzXCIpO1xuICAgICAgICByZXR1cm4gZGF0YTtcbiAgICAgIH0pXG4gICAgICAuZXJyb3IoZnVuY3Rpb24oZGF0YSkge1xuICAgICAgICAkbG9nLmRlYnVnKFwiU3F1YWRTZXJ2aWNlOiBnZXRTcXVhZHMgZmFpbGVkXCIpO1xuICAgICAgICByZXR1cm4gZGF0YTtcbiAgICAgIH0pO1xuXG4gICAgcmV0dXJuIHByb21pc2U7XG4gIH07XG5cbiAgdGhpcy5nZXRXZWVrU3F1YWRzID0gZnVuY3Rpb24od2Vlaykge1xuICAgIHZhciBhcGlVcmwgPSBhcGlDb25maWcuYmFzZVVSTCArIFwiYWRtaW4vd2Vla3MvXCIgKyB3ZWVrLmlkICsgXCIvc3F1YWRzXCI7XG5cbiAgICB2YXIgcHJvbWlzZSA9ICRodHRwLmdldChhcGlVcmwpXG4gICAgICAuc3VjY2VzcyhmdW5jdGlvbihkYXRhKSB7XG4gICAgICAgICRsb2cuZGVidWcoXCJTcXVhZFNlcnZpY2U6IGdldFdlZWtTcXVhZHMgc3VjY2Vzc1wiKTtcbiAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgICB9KVxuICAgICAgLmVycm9yKGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAgICAgJGxvZy5kZWJ1ZyhcIlNxdWFkU2VydmljZTogZ2V0V2Vla1NxdWFkcyBmYWlsZWRcIik7XG4gICAgICAgIHJldHVybiBkYXRhO1xuICAgICAgfSk7XG5cbiAgICByZXR1cm4gcHJvbWlzZTtcbiAgfTtcblxuICB0aGlzLmNyZWF0ZVNxdWFkID0gZnVuY3Rpb24oc3F1YWRQYXJhbXMpIHtcbiAgICB2YXIgcHJvbWlzZSA9ICRodHRwLnBvc3QoYXBpQ29uZmlnLmJhc2VVUkwgKyBcImFkbWluL3NxdWFkcy9cIixcbiAgICAgIHsgc3F1YWQ6IHNxdWFkUGFyYW1zIH0pXG4gICAgICAuc3VjY2VzcyhmdW5jdGlvbihkYXRhKSB7XG4gICAgICAgICRsb2cuZGVidWcoXCJTcXVhZFNlcnZpY2U6IGNyZWF0ZVNxdWFkIHN1Y2Nlc3NcIik7XG4gICAgICAgIC8vIHRvZG86IHRoaXMgcmVsaWVzIG9uIGEgbW9ua2V5IHBhdGNoIGF0IHRoZSBtb21lbnQgLSBodHRwczovL2dpdGh1Yi5jb20vYW5ndWxhci11aS91aS1yb3V0ZXIvaXNzdWVzLzU4MlxuICAgICAgICAvLyBidXQgbWF5IGJlIHJlc29sdmVkIHdpdGggZnV0dXJlIHJlbGVhc2VzIG9mIGFuZ3VsYXItdWktcm91dGVyXG4gICAgICAgICRzdGF0ZS5yZWxvYWQoKTsgLy8gcmVsb2FkcyBhbGwgdGhlIHJlc29sdmVzIGZvciB0aGUgdmlldyBsZWFndWUgcGFnZSBhbmQgcmVpbnN0YW50aWF0ZXMgdGhlIGNvbnRyb2xsZXJcbiAgICAgICAgbWVzc2FnZU1vZGVsLnNldE1lc3NhZ2UoZGF0YS5tZXNzYWdlLCBmYWxzZSk7XG4gICAgICAgIHJldHVybiBkYXRhO1xuICAgICAgfSlcbiAgICAgIC5lcnJvcihmdW5jdGlvbihkYXRhKSB7XG4gICAgICAgICRsb2cuZGVidWcoXCJTcXVhZFNlcnZpY2U6IGNyZWF0ZVNxdWFkIGZhaWxlZFwiKTtcbiAgICAgICAgbWVzc2FnZU1vZGVsLnNldE1lc3NhZ2UoZGF0YS5tZXNzYWdlLCBmYWxzZSk7XG4gICAgICAgIHJldHVybiBkYXRhO1xuICAgICAgfSk7XG5cbiAgICByZXR1cm4gcHJvbWlzZTtcbiAgfTtcblxuICB0aGlzLnVwZGF0ZVNxdWFkID0gZnVuY3Rpb24oc3F1YWRQYXJhbXMpIHtcbiAgICB2YXIgcHJvbWlzZSA9ICRodHRwLnB1dChhcGlDb25maWcuYmFzZVVSTCArIFwiYWRtaW4vc3F1YWRzL1wiICsgc3F1YWRQYXJhbXMuaWQsXG4gICAgICB7IHNxdWFkOiBzcXVhZFBhcmFtcyB9KVxuICAgICAgLnN1Y2Nlc3MoZnVuY3Rpb24oZGF0YSkge1xuICAgICAgICAkbG9nLmRlYnVnKFwiU3F1YWRTZXJ2aWNlOiB1cGRhdGVTcXVhZCBzdWNjZXNzXCIpO1xuICAgICAgICAvLyB0b2RvOiB0aGlzIHJlbGllcyBvbiBhIG1vbmtleSBwYXRjaCBhdCB0aGUgbW9tZW50IC0gaHR0cHM6Ly9naXRodWIuY29tL2FuZ3VsYXItdWkvdWktcm91dGVyL2lzc3Vlcy81ODJcbiAgICAgICAgLy8gYnV0IG1heSBiZSByZXNvbHZlZCB3aXRoIGZ1dHVyZSByZWxlYXNlcyBvZiBhbmd1bGFyLXVpLXJvdXRlclxuICAgICAgICAkc3RhdGUucmVsb2FkKCk7IC8vIHJlbG9hZHMgYWxsIHRoZSByZXNvbHZlcyBmb3IgdGhlIHZpZXcgbGVhZ3VlIHBhZ2UgYW5kIHJlaW5zdGFudGlhdGVzIHRoZSBjb250cm9sbGVyXG4gICAgICAgIG1lc3NhZ2VNb2RlbC5zZXRNZXNzYWdlKGRhdGEubWVzc2FnZSwgZmFsc2UpO1xuICAgICAgICByZXR1cm4gZGF0YTtcbiAgICAgIH0pXG4gICAgICAuZXJyb3IoZnVuY3Rpb24oZGF0YSkge1xuICAgICAgICAkbG9nLmRlYnVnKFwiU3F1YWRTZXJ2aWNlOiB1cGRhdGVTcXVhZCBmYWlsZWRcIik7XG4gICAgICAgIG1lc3NhZ2VNb2RlbC5zZXRNZXNzYWdlKGRhdGEubWVzc2FnZSwgZmFsc2UpO1xuICAgICAgICByZXR1cm4gZGF0YTtcbiAgICAgIH0pO1xuXG4gICAgcmV0dXJuIHByb21pc2U7XG4gIH07XG5cbn07XG5cblNxdWFkU2VydmljZS4kaW5qZWN0ID0gWyckaHR0cCcsICckbG9nJywgJyRzdGF0ZScsICdhcGlDb25maWcnLCAnbWVzc2FnZU1vZGVsJ107XG5tb2R1bGUuZXhwb3J0cyA9IFNxdWFkU2VydmljZTsiLCJ2YXIgU3RhdHNTZXJ2aWNlID0gZnVuY3Rpb24oJGh0dHAsICRsb2csICRxLCBhcGlDb25maWcpIHtcblxuICB0aGlzLmdldFN0YXRzID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIGRlZmVycmVkID0gJHEuZGVmZXIoKTtcbiAgICAkaHR0cC5nZXQoYXBpQ29uZmlnLmJhc2VVUkwgKyBcInN0YXRzXCIpXG4gICAgICAuc3VjY2VzcyhmdW5jdGlvbihkYXRhKSB7XG4gICAgICAgICRsb2cuZGVidWcoXCJTdGF0c1NlcnZpY2U6IGdldFN0YXRzIHN1Y2Nlc3NcIik7XG4gICAgICAgIGRlZmVycmVkLnJlc29sdmUoZGF0YSk7XG4gICAgICB9KVxuICAgICAgLmVycm9yKGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAgICAgJGxvZy5kZWJ1ZyhcIlN0YXRzU2VydmljZTogZ2V0U3RhdHMgZmFpbGVkXCIpO1xuICAgICAgICBkZWZlcnJlZC5yZWplY3QoKTtcbiAgICAgIH0pO1xuICAgIHJldHVybiBkZWZlcnJlZC5wcm9taXNlO1xuICB9O1xuXG59O1xuXG5TdGF0c1NlcnZpY2UuJGluamVjdCA9IFsnJGh0dHAnLCAnJGxvZycsICckcScsICdhcGlDb25maWcnXTtcbm1vZHVsZS5leHBvcnRzID0gU3RhdHNTZXJ2aWNlOyIsInZhciBUZWFtU2VydmljZSA9IGZ1bmN0aW9uKCRodHRwLCAkbG9nLCAkcSwgYXBpQ29uZmlnLCBtZXNzYWdlTW9kZWwpIHtcblxuICAgIHRoaXMuZ2V0VGVhbSA9IGZ1bmN0aW9uKGxlYWd1ZUlkLCB0ZWFtSWQpIHtcbiAgICAgICAgdmFyIHByb21pc2UgPSAkaHR0cC5nZXQoYXBpQ29uZmlnLmJhc2VVUkwgKyBcImxlYWd1ZXMvXCIgKyBsZWFndWVJZCArIFwiL3RlYW1zL1wiICsgdGVhbUlkKVxuICAgICAgICAgICAgLnN1Y2Nlc3MoZnVuY3Rpb24oZGF0YSkge1xuICAgICAgICAgICAgICAgICRsb2cuZGVidWcoXCJUZWFtU2VydmljZTogZ2V0VGVhbSBzdWNjZXNzXCIpO1xuICAgICAgICAgICAgICAgIHJldHVybiBkYXRhO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5lcnJvcihmdW5jdGlvbihkYXRhKSB7XG4gICAgICAgICAgICAgICAgJGxvZy5kZWJ1ZyhcIlRlYW1TZXJ2aWNlOiBnZXRUZWFtIGZhaWxlZFwiKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gZGF0YTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiBwcm9taXNlO1xuICAgIH07XG5cbiAgICB0aGlzLmdldEFsbFRlYW1zID0gZnVuY3Rpb24ocGFyYW1zKSB7XG4gICAgICAgIHZhciBhcGlVcmwgPSBhcGlDb25maWcuYmFzZVVSTCArIFwic2Vhc29ucy9cIiArIHBhcmFtcy5zZWFzb25JZCArIFwiL3RlYW1zL2FsbFwiO1xuICAgICAgICB2YXIgcHJvbWlzZSA9ICRodHRwLmdldChhcGlVcmwpXG4gICAgICAgICAgICAuc3VjY2VzcyhmdW5jdGlvbihkYXRhKSB7XG4gICAgICAgICAgICAgICAgJGxvZy5kZWJ1ZyhcIlRlYW1TZXJ2aWNlOiBnZXRBbGxUZWFtcyBzdWNjZXNzXCIpO1xuICAgICAgICAgICAgICAgIHJldHVybiBkYXRhO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5lcnJvcihmdW5jdGlvbihkYXRhKSB7XG4gICAgICAgICAgICAgICAgJGxvZy5kZWJ1ZyhcIlRlYW1TZXJ2aWNlOiBnZXRBbGxUZWFtcyBmYWlsZWRcIik7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gcHJvbWlzZTtcbiAgICB9O1xuXG4gICAgdGhpcy5nZXRBbGxMZWFndWVUZWFtcyA9IGZ1bmN0aW9uKHBhcmFtcykge1xuICAgICAgICB2YXIgYXBpVXJsID0gYXBpQ29uZmlnLmJhc2VVUkwgKyBcInNlYXNvbnMvXCIgKyBwYXJhbXMuc2Vhc29uSWQgKyBcIi90ZWFtcy9hbGw/bGVhZ3VlX2lkPVwiICsgcGFyYW1zLmxlYWd1ZUlkO1xuICAgICAgICBpZiAocGFyYW1zLndlZWtTbHVnKSB7XG4gICAgICAgICAgICBhcGlVcmwgKz0gXCImd2Vla19zbHVnPVwiICsgcGFyYW1zLndlZWtTbHVnO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIHByb21pc2UgPSAkaHR0cC5nZXQoYXBpVXJsKVxuICAgICAgICAgICAgLnN1Y2Nlc3MoZnVuY3Rpb24oZGF0YSkge1xuICAgICAgICAgICAgICAgICRsb2cuZGVidWcoXCJUZWFtU2VydmljZTogZ2V0QWxsTGVhZ3VlVGVhbXMgc3VjY2Vzc1wiKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gZGF0YTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuZXJyb3IoZnVuY3Rpb24oZGF0YSkge1xuICAgICAgICAgICAgICAgICRsb2cuZGVidWcoXCJUZWFtU2VydmljZTogZ2V0QWxsTGVhZ3VlVGVhbXMgZmFpbGVkXCIpO1xuICAgICAgICAgICAgICAgIHJldHVybiBkYXRhO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIHByb21pc2U7XG4gICAgfTtcblxuICAgIHRoaXMuZ2V0TGVhZ3VlVGVhbXMgPSBmdW5jdGlvbihsZWFndWVJZCkge1xuICAgICAgICB2YXIgYXBpVXJsID0gYXBpQ29uZmlnLmJhc2VVUkwgKyBcImxlYWd1ZXMvXCIgKyBsZWFndWVJZCArIFwiL3RlYW1zXCI7XG4gICAgICAgIHZhciBwcm9taXNlID0gJGh0dHAuZ2V0KGFwaVVybClcbiAgICAgICAgICAgIC5zdWNjZXNzKGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAgICAgICAgICAgICAkbG9nLmRlYnVnKFwiVGVhbVNlcnZpY2U6IGdldExlYWd1ZVRlYW1zIHN1Y2Nlc3NcIik7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmVycm9yKGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAgICAgICAgICAgICAkbG9nLmRlYnVnKFwiVGVhbVNlcnZpY2U6IGdldExlYWd1ZVRlYW1zIGZhaWxlZFwiKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gZGF0YTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiBwcm9taXNlO1xuICAgIH07XG5cblxuICAgIHRoaXMuY3JlYXRlVGVhbSA9IGZ1bmN0aW9uKHRlYW1QYXJhbXMpIHtcbiAgICAgIHZhciBkZWZlcnJlZCA9ICRxLmRlZmVyKCk7XG5cbiAgICAgICRodHRwLnBvc3QoYXBpQ29uZmlnLmJhc2VVUkwgKyBcImxlYWd1ZXMvXCIgKyB0ZWFtUGFyYW1zLmxlYWd1ZV9pZCArIFwiL3RlYW1zXCIsXG4gICAgICAgICAgICB7IHRlYW06IHRlYW1QYXJhbXMgfSlcbiAgICAgICAgICAgIC5zdWNjZXNzKGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAgICAgICAgICAgICAkbG9nLmRlYnVnKFwiVGVhbVNlcnZpY2U6IGNyZWF0ZVRlYW0gc3VjY2Vzc1wiKTtcbiAgICAgICAgICAgICAgICBkZWZlcnJlZC5yZXNvbHZlKGRhdGEpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5lcnJvcihmdW5jdGlvbihkYXRhKSB7XG4gICAgICAgICAgICAgICAgJGxvZy5kZWJ1ZyhcIlRlYW1TZXJ2aWNlOiBjcmVhdGVUZWFtIGZhaWxlZFwiKTtcbiAgICAgICAgICAgICAgICBkZWZlcnJlZC5yZWplY3QoZGF0YSk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gZGVmZXJyZWQucHJvbWlzZTtcbiAgICB9O1xuXG4gICAgdGhpcy51cGRhdGVUZWFtID0gZnVuY3Rpb24odGVhbSkge1xuICAgICAgICB2YXIgcHJvbWlzZSA9ICRodHRwLnB1dChhcGlDb25maWcuYmFzZVVSTCArIFwibGVhZ3Vlcy9cIiArIHRlYW0ubGVhZ3VlLmlkICsgXCIvdGVhbXMvXCIgKyB0ZWFtLmlkLFxuICAgICAgICAgICAgeyB0ZWFtOiB0ZWFtIH0pXG4gICAgICAgICAgICAuc3VjY2VzcyhmdW5jdGlvbihkYXRhKSB7XG4gICAgICAgICAgICAgICAgJGxvZy5kZWJ1ZyhcIlRlYW1TZXJ2aWNlOiB1cGRhdGVUZWFtIHN1Y2Nlc3NcIik7XG4gICAgICAgICAgICAgICAgbWVzc2FnZU1vZGVsLnNldE1lc3NhZ2UoZGF0YS5tZXNzYWdlLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmVycm9yKGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAgICAgICAgICAgICAkbG9nLmRlYnVnKFwiVGVhbVNlcnZpY2U6IHVwZGF0ZVRlYW0gZmFpbGVkXCIpO1xuICAgICAgICAgICAgICAgIG1lc3NhZ2VNb2RlbC5zZXRNZXNzYWdlKGRhdGEubWVzc2FnZSwgZmFsc2UpO1xuICAgICAgICAgICAgICAgIHJldHVybiBkYXRhO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIHByb21pc2U7XG4gICAgfTtcblxuICAgIHRoaXMudXBkYXRlVGVhbU1lc3NhZ2UgPSBmdW5jdGlvbih0ZWFtUGFyYW1zLCBlbWFpbE1lc3NhZ2UpIHtcbiAgICAgIHZhciBkZWZlcnJlZCA9ICRxLmRlZmVyKCk7XG4gICAgICAkaHR0cC5wdXQoYXBpQ29uZmlnLmJhc2VVUkwgKyBcImxlYWd1ZXMvXCIgKyB0ZWFtUGFyYW1zLmxlYWd1ZS5pZCArIFwiL3RlYW1zL1wiICsgdGVhbVBhcmFtcy5pZCArIFwiL21lc3NhZ2VcIixcbiAgICAgICAgeyB0ZWFtOiB0ZWFtUGFyYW1zLCBlbWFpbE1lc3NhZ2U6IGVtYWlsTWVzc2FnZSB9KVxuICAgICAgICAuc3VjY2VzcyhmdW5jdGlvbihkYXRhKSB7XG4gICAgICAgICAgJGxvZy5kZWJ1ZyhcIlRlYW1TZXJ2aWNlOiB1cGRhdGVUZWFtTWVzc2FnZSBzdWNjZXNzXCIpO1xuICAgICAgICAgIG1lc3NhZ2VNb2RlbC5zZXRNZXNzYWdlKGRhdGEubWVzc2FnZSwgZmFsc2UpO1xuICAgICAgICAgIGRlZmVycmVkLnJlc29sdmUodGVhbVBhcmFtcy5tZXNzYWdlKTtcbiAgICAgICAgfSlcbiAgICAgICAgLmVycm9yKGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAgICAgICAkbG9nLmRlYnVnKFwiVGVhbVNlcnZpY2U6IHVwZGF0ZVRlYW1NZXNzYWdlIGZhaWxlZFwiKTtcbiAgICAgICAgICBtZXNzYWdlTW9kZWwuc2V0TWVzc2FnZShkYXRhLm1lc3NhZ2UsIGZhbHNlKTtcbiAgICAgICAgICBkZWZlcnJlZC5yZWplY3QoKTtcbiAgICAgICAgfSk7XG5cbiAgICAgIHJldHVybiBkZWZlcnJlZC5wcm9taXNlO1xuICAgIH07XG5cbiAgICB0aGlzLnNlbmRDb21taXNoTWVzc2FnZSA9IGZ1bmN0aW9uKHRlYW1QYXJhbXMsIG1lc3NhZ2UpIHtcbiAgICAgIHZhciBkZWZlcnJlZCA9ICRxLmRlZmVyKCk7XG4gICAgICAkaHR0cC5wdXQoYXBpQ29uZmlnLmJhc2VVUkwgKyBcImxlYWd1ZXMvXCIgKyB0ZWFtUGFyYW1zLmxlYWd1ZS5pZCArIFwiL3RlYW1zL1wiICsgdGVhbVBhcmFtcy5pZCArIFwiL2NvbnRhY3RcIixcbiAgICAgICAgeyBjb250YWN0OiBtZXNzYWdlIH0pXG4gICAgICAgIC5zdWNjZXNzKGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAgICAgICAkbG9nLmRlYnVnKFwiVGVhbVNlcnZpY2U6IHNlbmRDb21taXNoTWVzc2FnZSBzdWNjZXNzXCIpO1xuICAgICAgICAgIG1lc3NhZ2VNb2RlbC5zZXRNZXNzYWdlKGRhdGEubWVzc2FnZSwgZmFsc2UpO1xuICAgICAgICAgIGRlZmVycmVkLnJlc29sdmUoKTtcbiAgICAgICAgfSlcbiAgICAgICAgLmVycm9yKGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAgICAgICAkbG9nLmRlYnVnKFwiVGVhbVNlcnZpY2U6IHNlbmRDb21taXNoTWVzc2FnZSBmYWlsZWRcIik7XG4gICAgICAgICAgbWVzc2FnZU1vZGVsLnNldE1lc3NhZ2UoZGF0YS5tZXNzYWdlLCBmYWxzZSk7XG4gICAgICAgICAgZGVmZXJyZWQucmVqZWN0KCk7XG4gICAgICAgIH0pO1xuXG4gICAgICByZXR1cm4gZGVmZXJyZWQucHJvbWlzZTtcbiAgICB9O1xuXG4gICAgdGhpcy5hY3RpdmF0ZVRlYW0gPSBmdW5jdGlvbih0ZWFtKSB7XG4gICAgICAgIHZhciBkZWZlcnJlZCA9ICRxLmRlZmVyKCk7XG4gICAgICAgICRodHRwLnB1dChhcGlDb25maWcuYmFzZVVSTCArIFwibGVhZ3Vlcy9cIiArIHRlYW0ubGVhZ3VlLmlkICsgXCIvdGVhbXMvXCIgKyB0ZWFtLmlkICsgXCIvYWN0aXZhdGVcIilcbiAgICAgICAgICAgIC5zdWNjZXNzKGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAgICAgICAgICAgICAkbG9nLmRlYnVnKFwiVGVhbVNlcnZpY2U6IGFjdGl2YXRlVGVhbSBzdWNjZXNzXCIpO1xuICAgICAgICAgICAgICAgIG1lc3NhZ2VNb2RlbC5zZXRNZXNzYWdlKGRhdGEubWVzc2FnZSwgZmFsc2UpO1xuICAgICAgICAgICAgICAgIGRlZmVycmVkLnJlc29sdmUodHJ1ZSk7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmVycm9yKGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAgICAgICAgICAgICAkbG9nLmRlYnVnKFwiVGVhbVNlcnZpY2U6IGFjdGl2YXRlVGVhbSBmYWlsZWRcIik7XG4gICAgICAgICAgICAgICAgbWVzc2FnZU1vZGVsLnNldE1lc3NhZ2UoZGF0YS5tZXNzYWdlLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgZGVmZXJyZWQucmVqZWN0KCk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gZGVmZXJyZWQucHJvbWlzZTtcbiAgICB9O1xuXG4gICAgdGhpcy5kZWFjdGl2YXRlVGVhbSA9IGZ1bmN0aW9uKHRlYW0pIHtcbiAgICAgICAgdmFyIGRlZmVycmVkID0gJHEuZGVmZXIoKTtcbiAgICAgICAgJGh0dHAucHV0KGFwaUNvbmZpZy5iYXNlVVJMICsgXCJsZWFndWVzL1wiICsgdGVhbS5sZWFndWUuaWQgKyBcIi90ZWFtcy9cIiArIHRlYW0uaWQgKyBcIi9kZWFjdGl2YXRlXCIpXG4gICAgICAgICAgICAuc3VjY2VzcyhmdW5jdGlvbihkYXRhKSB7XG4gICAgICAgICAgICAgICAgJGxvZy5kZWJ1ZyhcIlRlYW1TZXJ2aWNlOiBkZWFjdGl2YXRlVGVhbSBzdWNjZXNzXCIpO1xuICAgICAgICAgICAgICAgIG1lc3NhZ2VNb2RlbC5zZXRNZXNzYWdlKGRhdGEubWVzc2FnZSwgZmFsc2UpO1xuICAgICAgICAgICAgICAgIGRlZmVycmVkLnJlc29sdmUoZmFsc2UpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5lcnJvcihmdW5jdGlvbihkYXRhKSB7XG4gICAgICAgICAgICAgICAgJGxvZy5kZWJ1ZyhcIlRlYW1TZXJ2aWNlOiBkZWFjdGl2YXRlVGVhbSBmYWlsZWRcIik7XG4gICAgICAgICAgICAgICAgbWVzc2FnZU1vZGVsLnNldE1lc3NhZ2UoZGF0YS5tZXNzYWdlLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgZGVmZXJyZWQucmVqZWN0KCk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgcmV0dXJuIGRlZmVycmVkLnByb21pc2U7XG4gICAgfTtcblxufTtcblxuVGVhbVNlcnZpY2UuJGluamVjdCA9IFsnJGh0dHAnLCAnJGxvZycsICckcScsICdhcGlDb25maWcnLCAnbWVzc2FnZU1vZGVsJ107XG5tb2R1bGUuZXhwb3J0cyA9IFRlYW1TZXJ2aWNlOyIsInZhciBVc2VyU2VydmljZSA9IGZ1bmN0aW9uKCRodHRwLCAkbG9nLCAkc3RhdGUsICRsb2NhdGlvbiwgJHdpbmRvdywgJHRpbWVvdXQsIGFwaUNvbmZpZywgbWVzc2FnZU1vZGVsLCB1c2VyTW9kZWwsIHNlYXNvbk1vZGVsKSB7XG5cbiAgICB2YXIgdXNlclNlcnZpY2UgPSB0aGlzO1xuXG4gICAgdGhpcy5zaWduaW4gPSBmdW5jdGlvbihlbWFpbCwgcGFzc3dvcmQpIHtcbiAgICAgIHVzZXJNb2RlbC5yZXNldFVzZXIoKTtcbiAgICAgIHZhciBwcm9taXNlID0gJGh0dHAucG9zdChcbiAgICAgICAgICAgIGFwaUNvbmZpZy5iYXNlVVJMICsgXCJzZXNzaW9uc1wiLFxuICAgICAgICAgICAgeyBlbWFpbDogZW1haWwsIHBhc3N3b3JkOiBwYXNzd29yZCB9KVxuICAgICAgICAgICAgLnN1Y2Nlc3MoZnVuY3Rpb24oZGF0YSkge1xuICAgICAgICAgICAgICAgICRsb2cuZGVidWcoXCJVc2VyU2VydmljZTogc2lnbmluIHN1Y2Nlc3NcIik7XG4gICAgICAgICAgICAgICAgJHdpbmRvdy5zZXNzaW9uU3RvcmFnZS50b2tlbiA9IGRhdGEudG9rZW47XG4gICAgICAgICAgICAgICAgdmFyIHJlZGlyZWN0ID0gZGVjb2RlVVJJQ29tcG9uZW50KCRsb2NhdGlvbi5zZWFyY2goKS5yZWRpcmVjdCk7XG4gICAgICAgICAgICAgICAgaWYgKHJlZGlyZWN0ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICAgICAgICAkbG9jYXRpb24uc2VhcmNoKCdyZWRpcmVjdCcsIG51bGwpOyAvLyByZW1vdmUgdGhlIHJlZGlyZWN0IHF1ZXJ5IHBhcmFtXG4gICAgICAgICAgICAgICAgICAgICRsb2NhdGlvbi51cmwocmVkaXJlY3QpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoWycvJywgJy9zaWduaW4nLCAnL3JlZ2lzdGVyJ10uaW5kZXhPZihyZWRpcmVjdCkgIT09IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgICAgdXNlclNlcnZpY2UuZ2V0Q3VycmVudFVzZXIoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gZWxzZSAge1xuICAgICAgICAgICAgICAgICAgJGxvY2F0aW9uLnVybCgnL3NlYXNvbi8nICsgc2Vhc29uTW9kZWwuc2VsZWN0ZWRTZWFzb25JZCArICcvbXkvdGVhbXMnKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmVycm9yKGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAgICAgICAgICAgICAkbG9nLmRlYnVnKFwiVXNlclNlcnZpY2U6IHNpZ25pbiBmYWlsdXJlXCIpO1xuICAgICAgICAgICAgICAgIHJldHVybiBkYXRhO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBwcm9taXNlO1xuICAgIH07XG5cbiAgICB0aGlzLnNpZ25pbkd1ZXN0ID0gZnVuY3Rpb24oKSB7XG4gICAgICB1c2VyTW9kZWwucmVzZXRVc2VyKCk7XG4gICAgICB2YXIgcHJvbWlzZSA9ICRodHRwLnBvc3QoXG4gICAgICAgICAgICBhcGlDb25maWcuYmFzZVVSTCArIFwic2Vzc2lvbnMvZ3Vlc3RcIilcbiAgICAgICAgICAgIC5zdWNjZXNzKGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAgICAgICAgICAgICAkd2luZG93LnNlc3Npb25TdG9yYWdlLnRva2VuID0gZGF0YS50b2tlbjtcbiAgICAgICAgICAgICAgICB2YXIgcmVkaXJlY3QgPSBkZWNvZGVVUklDb21wb25lbnQoJGxvY2F0aW9uLnNlYXJjaCgpLnJlZGlyZWN0KTtcbiAgICAgICAgICAgICAgICBpZiAocmVkaXJlY3QgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAgICAgICAgICRsb2NhdGlvbi5zZWFyY2goJ3JlZGlyZWN0JywgbnVsbCk7IC8vIHJlbW92ZSB0aGUgcmVkaXJlY3QgcXVlcnkgcGFyYW1cbiAgICAgICAgICAgICAgICAgICAgJGxvY2F0aW9uLnVybChyZWRpcmVjdCk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChbJy8nLCAnL3NpZ25pbicsICcvcmVnaXN0ZXInXS5pbmRleE9mKHJlZGlyZWN0KSAhPT0gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgICB1c2VyU2VydmljZS5nZXRDdXJyZW50VXNlcigpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlICB7XG4gICAgICAgICAgICAgICAgICAkbG9jYXRpb24udXJsKCcvc2Vhc29uLycgKyBzZWFzb25Nb2RlbC5zZWxlY3RlZFNlYXNvbklkICsgJy9teS90ZWFtcycpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gZGF0YTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuZXJyb3IoZnVuY3Rpb24oZGF0YSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBkYXRhO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBwcm9taXNlO1xuICAgIH07XG5cbiAgICB0aGlzLnNpZ25vdXQgPSBmdW5jdGlvbigpIHtcbiAgICAgIHVzZXJNb2RlbC5yZXNldFVzZXIoKTtcbiAgICAgIHZhciBwcm9taXNlID0gJGh0dHAuZGVsZXRlKGFwaUNvbmZpZy5iYXNlVVJMICsgJ3Nlc3Npb25zL2Rlc3Ryb3knKVxuICAgICAgICAgICAgLnN1Y2Nlc3MoZnVuY3Rpb24oZGF0YSkge1xuICAgICAgICAgICAgICAgICRsb2cuZGVidWcoXCJVc2VyU2VydmljZTogc2lnbm91dCBzdWNjZXNzXCIpO1xuICAgICAgICAgICAgICAgIGlmICgkc3RhdGUuY3VycmVudC5uYW1lID09ICdwdWJsaWMuc2lnbmluJykge1xuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlTW9kZWwuc2V0TWVzc2FnZShkYXRhLm1lc3NhZ2UsIGZhbHNlKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlTW9kZWwuc2V0TWVzc2FnZShkYXRhLm1lc3NhZ2UsIHRydWUpO1xuICAgICAgICAgICAgICAgICAgICAkc3RhdGUuZ28oJ3B1YmxpYy5zaWduaW4nKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmVycm9yKGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAgICAgICAgICAgICAkbG9nLmRlYnVnKFwiVXNlclNlcnZpY2U6IHNpZ25vdXQgZmFpbHVyZVwiKTtcbiAgICAgICAgICAgICAgICBtZXNzYWdlTW9kZWwuc2V0TWVzc2FnZShkYXRhLm1lc3NhZ2UsIGZhbHNlKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gZGF0YTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiBwcm9taXNlO1xuICAgIH07XG5cbiAgICB0aGlzLnJlc2V0VXNlciA9IGZ1bmN0aW9uKGVtYWlsKSB7XG4gICAgICB2YXIgcHJvbWlzZSA9ICRodHRwLnBvc3QoYXBpQ29uZmlnLmJhc2VVUkwgKyBcInNlc3Npb25zL3Jlc2V0XCIsIHsgZW1haWw6IGVtYWlsIH0pXG4gICAgICAgICAgLnN1Y2Nlc3MoZnVuY3Rpb24oZGF0YSkge1xuICAgICAgICAgICAgJGxvZy5kZWJ1ZyhcIlVzZXJTZXJ2aWNlOiByZXNldCBzdWNjZXNzXCIpO1xuICAgICAgICAgICAgbWVzc2FnZU1vZGVsLnNldE1lc3NhZ2UoZGF0YS5tZXNzYWdlLCBmYWxzZSk7XG4gICAgICAgICAgICByZXR1cm4gZGF0YTtcbiAgICAgICAgICB9KVxuICAgICAgICAgIC5lcnJvcihmdW5jdGlvbihkYXRhKSB7XG4gICAgICAgICAgICAkbG9nLmRlYnVnKFwiVXNlclNlcnZpY2U6IHJlc2V0IGZhaWx1cmVcIik7XG4gICAgICAgICAgICBtZXNzYWdlTW9kZWwuc2V0TWVzc2FnZShkYXRhLm1lc3NhZ2UsIGZhbHNlKTtcbiAgICAgICAgICAgIHJldHVybiBkYXRhO1xuICAgICAgICAgIH0pO1xuXG4gICAgICByZXR1cm4gcHJvbWlzZTtcbiAgICB9O1xuXG4gICAgdGhpcy5nZXRDdXJyZW50VXNlciA9IGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgdG9rZW4gPSAkbG9jYXRpb24uc2VhcmNoKCkudG9rZW47XG4gICAgICAgIGlmICghXy5pc1VuZGVmaW5lZCh0b2tlbikpIHtcbiAgICAgICAgICAkd2luZG93LnNlc3Npb25TdG9yYWdlLnRva2VuID0gdG9rZW47XG4gICAgICAgICAgJGxvY2F0aW9uLnNlYXJjaCgndG9rZW4nLCBudWxsKTsgLy8gcmVtb3ZlIHRoZSB0b2tlbiBxdWVyeSBwYXJhbVxuICAgICAgICB9XG4gICAgICAgIHZhciBwcm9taXNlID0gJGh0dHAuZ2V0KGFwaUNvbmZpZy5iYXNlVVJMICsgXCJ1c2Vycy9jdXJyZW50XCIpXG4gICAgICAgICAgICAuc3VjY2VzcyhmdW5jdGlvbihkYXRhKSB7XG4gICAgICAgICAgICAgICAgJGxvZy5kZWJ1ZyhcIlVzZXJTZXJ2aWNlOiBnZXRDdXJyZW50VXNlciBzdWNjZXNzXCIpO1xuICAgICAgICAgICAgICAgIHVzZXJNb2RlbC5zZXRVc2VyKGRhdGEpO1xuICAgICAgICAgICAgICAgIHJldHVybiBkYXRhO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5lcnJvcihmdW5jdGlvbihkYXRhKSB7XG4gICAgICAgICAgICAgICAgJGxvZy5kZWJ1ZyhcIlVzZXJTZXJ2aWNlOiBnZXRDdXJyZW50VXNlciBmYWlsZWRcIik7XG4gICAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIHByb21pc2U7XG4gICAgfTtcblxuICAgIHRoaXMuY3JlYXRlVXNlciA9IGZ1bmN0aW9uKHVzZXJQYXJhbXMpIHtcbiAgICAgIHVzZXJNb2RlbC5yZXNldFVzZXIoKTtcbiAgICAgIHZhciBwcm9taXNlID0gJGh0dHAucG9zdChhcGlDb25maWcuYmFzZVVSTCArIFwidXNlcnNcIixcbiAgICAgICAgICAgIHsgdXNlcjogdXNlclBhcmFtcyB9KVxuICAgICAgICAgICAgLnN1Y2Nlc3MoZnVuY3Rpb24oZGF0YSkge1xuICAgICAgICAgICAgICAgICRsb2cuZGVidWcoXCJVc2VyU2VydmljZTogY3JlYXRlVXNlciBzdWNjZXNzXCIpO1xuICAgICAgICAgICAgICAgICR3aW5kb3cuc2Vzc2lvblN0b3JhZ2UudG9rZW4gPSBkYXRhLnRva2VuO1xuICAgICAgICAgICAgICAgIG1lc3NhZ2VNb2RlbC5zZXRNZXNzYWdlKHsgdHlwZTogZGF0YS5tZXNzYWdlLnR5cGUsIGNvbnRlbnQ6IGRhdGEubWVzc2FnZS5jb250ZW50LCBzaGFyZVVzZXI6IHRydWUgIH0sIHRydWUpO1xuICAgICAgICAgICAgICAgIHZhciByZWRpcmVjdCA9IGRlY29kZVVSSUNvbXBvbmVudCgkbG9jYXRpb24uc2VhcmNoKCkucmVkaXJlY3QpO1xuICAgICAgICAgICAgICAgIGlmIChyZWRpcmVjdCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICAgICAgJGxvY2F0aW9uLnNlYXJjaCgncmVkaXJlY3QnLCBudWxsKTsgLy8gcmVtb3ZlIHRoZSByZWRpcmVjdCBxdWVyeSBwYXJhbVxuICAgICAgICAgICAgICAgICAgICAkbG9jYXRpb24udXJsKHJlZGlyZWN0KTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKFsnLycsICcvc2lnbmluJywgJy9yZWdpc3RlciddLmluZGV4T2YocmVkaXJlY3QpICE9PSAtMSkge1xuICAgICAgICAgICAgICAgICAgICAgIHVzZXJTZXJ2aWNlLmdldEN1cnJlbnRVc2VyKCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGVsc2UgIHtcbiAgICAgICAgICAgICAgICAgICRsb2NhdGlvbi51cmwoJy9zZWFzb24vJyArIHNlYXNvbk1vZGVsLnNlbGVjdGVkU2Vhc29uSWQgKyAnL215L3RlYW1zJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBkYXRhO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5lcnJvcihmdW5jdGlvbihkYXRhKSB7XG4gICAgICAgICAgICAgICAgJGxvZy5kZWJ1ZyhcIlVzZXJTZXJ2aWNlOiBjcmVhdGVVc2VyIGZhaWxlZFwiKTtcbiAgICAgICAgICAgICAgICBtZXNzYWdlTW9kZWwuc2V0TWVzc2FnZShkYXRhLm1lc3NhZ2UsIGZhbHNlKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gZGF0YTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiBwcm9taXNlO1xuICAgIH07XG5cbiAgICB0aGlzLnVwZGF0ZVVzZXIgPSBmdW5jdGlvbih1c2VyUGFyYW1zKSB7XG4gICAgICAgIHZhciBwcm9taXNlID0gJGh0dHAucHV0KGFwaUNvbmZpZy5iYXNlVVJMICsgXCJ1c2Vycy9jdXJyZW50XCIsXG4gICAgICAgICAgICB7IHVzZXI6IHVzZXJQYXJhbXMgfSlcbiAgICAgICAgICAgIC5zdWNjZXNzKGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAgICAgICAgICAgICAkbG9nLmRlYnVnKFwiVXNlclNlcnZpY2U6IHVwZGF0ZVVzZXIgc3VjY2Vzc1wiKTtcbiAgICAgICAgICAgICAgICB1c2VyTW9kZWwuc2V0VXNlcih1c2VyUGFyYW1zKTtcbiAgICAgICAgICAgICAgICBtZXNzYWdlTW9kZWwuc2V0TWVzc2FnZShkYXRhLm1lc3NhZ2UsIGZhbHNlKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gZGF0YTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuZXJyb3IoZnVuY3Rpb24oZGF0YSkge1xuICAgICAgICAgICAgICAgICRsb2cuZGVidWcoXCJVc2VyU2VydmljZTogdXBkYXRlVXNlciBmYWlsZWRcIik7XG4gICAgICAgICAgICAgICAgbWVzc2FnZU1vZGVsLnNldE1lc3NhZ2UoZGF0YS5tZXNzYWdlLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gcHJvbWlzZTtcbiAgICB9O1xuXG4gICAgdGhpcy5jb250YWN0VXMgPSBmdW5jdGlvbihtZXNzYWdlKSB7XG4gICAgICAgIHZhciBwcm9taXNlID0gJGh0dHAucHV0KGFwaUNvbmZpZy5iYXNlVVJMICsgXCJ1c2Vycy9jb250YWN0XCIsXG4gICAgICAgICAgICB7IG1lc3NhZ2U6IG1lc3NhZ2UgfSlcbiAgICAgICAgICAgIC5zdWNjZXNzKGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAgICAgICAgICAgICAkbG9nLmRlYnVnKFwiVXNlclNlcnZpY2U6IGNvbnRhY3RVcyBzdWNjZXNzXCIpO1xuICAgICAgICAgICAgICAgIG1lc3NhZ2VNb2RlbC5zZXRNZXNzYWdlKGRhdGEubWVzc2FnZSwgZmFsc2UpO1xuICAgICAgICAgICAgICAgIHJldHVybiBkYXRhO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5lcnJvcihmdW5jdGlvbihkYXRhKSB7XG4gICAgICAgICAgICAgICAgJGxvZy5kZWJ1ZyhcIlVzZXJTZXJ2aWNlOiBjb250YWN0VXMgZmFpbGVkXCIpO1xuICAgICAgICAgICAgICAgIG1lc3NhZ2VNb2RlbC5zZXRNZXNzYWdlKGRhdGEubWVzc2FnZSwgZmFsc2UpO1xuICAgICAgICAgICAgICAgIHJldHVybiBkYXRhO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIHByb21pc2U7XG4gICAgfTtcblxufTtcblxuVXNlclNlcnZpY2UuJGluamVjdCA9IFsnJGh0dHAnLCAnJGxvZycsICckc3RhdGUnLCAnJGxvY2F0aW9uJywgJyR3aW5kb3cnLCAnJHRpbWVvdXQnLCAnYXBpQ29uZmlnJywgJ21lc3NhZ2VNb2RlbCcsICd1c2VyTW9kZWwnLCAnc2Vhc29uTW9kZWwnXTtcbm1vZHVsZS5leHBvcnRzID0gVXNlclNlcnZpY2U7IiwidmFyIFdlZWtTZXJ2aWNlID0gZnVuY3Rpb24oJGh0dHAsICRsb2csICRxLCAkc3RhdGUsIGFwaUNvbmZpZywgbWVzc2FnZU1vZGVsKSB7XG5cbiAgICB0aGlzLmdldEF2YWlsYWJsZVdlZWtzID0gZnVuY3Rpb24oc2Vhc29uSWQpIHtcbiAgICAgICAgdmFyIHByb21pc2UgPSAkaHR0cC5nZXQoYXBpQ29uZmlnLmJhc2VVUkwgKyBcInNlYXNvbnMvXCIgKyBzZWFzb25JZCArIFwiL3dlZWtzL2F2YWlsYWJsZVwiKVxuICAgICAgICAgICAgLnN1Y2Nlc3MoZnVuY3Rpb24oZGF0YSkge1xuICAgICAgICAgICAgICAgICRsb2cuZGVidWcoXCJXZWVrU2VydmljZTogZ2V0QXZhaWxhYmxlV2Vla3Mgc3VjY2Vzc1wiKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gZGF0YTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuZXJyb3IoZnVuY3Rpb24oZGF0YSkge1xuICAgICAgICAgICAgICAgICRsb2cuZGVidWcoXCJXZWVrU2VydmljZTogZ2V0QXZhaWxhYmxlV2Vla3MgZmFpbGVkXCIpO1xuICAgICAgICAgICAgICAgIHJldHVybiBkYXRhO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIHByb21pc2U7XG4gICAgfTtcblxuICAgIHRoaXMuZ2V0U2Vhc29uV2Vla3MgPSBmdW5jdGlvbihzZWFzb25JZCkge1xuICAgICAgICB2YXIgcHJvbWlzZSA9ICRodHRwLmdldChhcGlDb25maWcuYmFzZVVSTCArIFwic2Vhc29ucy9cIiArIHNlYXNvbklkICsgXCIvd2Vla3NcIilcbiAgICAgICAgICAgIC5zdWNjZXNzKGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAgICAgICAgICAgICAkbG9nLmRlYnVnKFwiV2Vla1NlcnZpY2U6IGdldFNlYXNvbldlZWtzIHN1Y2Nlc3NcIik7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmVycm9yKGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAgICAgICAgICAgICAkbG9nLmRlYnVnKFwiV2Vla1NlcnZpY2U6IGdldFNlYXNvbldlZWtzIGZhaWxlZFwiKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gZGF0YTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiBwcm9taXNlO1xuICAgIH07XG5cbiAgICB0aGlzLmdldExlYWd1ZVdlZWtzID0gZnVuY3Rpb24ob3B0aW9ucykge1xuICAgICAgICB2YXIgcHJvbWlzZSA9ICRodHRwLmdldChhcGlDb25maWcuYmFzZVVSTCArIFwic2Vhc29ucy9cIiArIG9wdGlvbnMuc2Vhc29uSWQgKyBcIi93ZWVrcz9sZWFndWVfaWQ9XCIgKyBvcHRpb25zLmxlYWd1ZUlkKVxuICAgICAgICAgICAgLnN1Y2Nlc3MoZnVuY3Rpb24oZGF0YSkge1xuICAgICAgICAgICAgICAgICRsb2cuZGVidWcoXCJXZWVrU2VydmljZTogZ2V0TGVhZ3VlV2Vla3Mgc3VjY2Vzc1wiKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gZGF0YTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuZXJyb3IoZnVuY3Rpb24oZGF0YSkge1xuICAgICAgICAgICAgICAgICRsb2cuZGVidWcoXCJXZWVrU2VydmljZTogZ2V0TGVhZ3VlV2Vla3MgZmFpbGVkXCIpO1xuICAgICAgICAgICAgICAgIHJldHVybiBkYXRhO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIHByb21pc2U7XG4gICAgfTtcblxuICAgIHRoaXMuZ2V0V2VlayA9IGZ1bmN0aW9uKHNlYXNvbklkLCB3ZWVrSWQpIHtcbiAgICAgICAgdmFyIHByb21pc2UgPSAkaHR0cC5nZXQoYXBpQ29uZmlnLmJhc2VVUkwgKyBcInNlYXNvbnMvXCIgKyBzZWFzb25JZCArIFwiL3dlZWtzL1wiICsgd2Vla0lkKVxuICAgICAgICAgICAgLnN1Y2Nlc3MoZnVuY3Rpb24oZGF0YSkge1xuICAgICAgICAgICAgICAgICRsb2cuZGVidWcoXCJXZWVrU2VydmljZTogZ2V0V2VlayBzdWNjZXNzXCIpO1xuICAgICAgICAgICAgICAgIHJldHVybiBkYXRhO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5lcnJvcihmdW5jdGlvbihkYXRhKSB7XG4gICAgICAgICAgICAgICAgJGxvZy5kZWJ1ZyhcIldlZWtTZXJ2aWNlOiBnZXRXZWVrIGZhaWxlZFwiKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gZGF0YTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiBwcm9taXNlO1xuICAgIH07XG5cbiAgICB0aGlzLmdldEN1cnJlbnRXZWVrID0gZnVuY3Rpb24oc2Vhc29uSWQsIGxlYWd1ZUlkKSB7XG4gICAgICAgIHZhciBwcm9taXNlID0gJGh0dHAuZ2V0KGFwaUNvbmZpZy5iYXNlVVJMICsgXCJzZWFzb25zL1wiICsgc2Vhc29uSWQgKyBcIi93ZWVrcy9jdXJyZW50P2xlYWd1ZV9pZD1cIiArIGxlYWd1ZUlkKVxuICAgICAgICAgICAgLnN1Y2Nlc3MoZnVuY3Rpb24oZGF0YSkge1xuICAgICAgICAgICAgICAgICRsb2cuZGVidWcoXCJXZWVrU2VydmljZTogZ2V0Q3VycmVudFdlZWsgc3VjY2Vzc1wiKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gZGF0YTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuZXJyb3IoZnVuY3Rpb24oZGF0YSkge1xuICAgICAgICAgICAgICAgICRsb2cuZGVidWcoXCJXZWVrU2VydmljZTogZ2V0Q3VycmVudFdlZWsgZmFpbGVkXCIpO1xuICAgICAgICAgICAgICAgIHJldHVybiBkYXRhO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIHByb21pc2U7XG4gICAgfTtcblxuICAgIHRoaXMuZ2V0V2Vla1R5cGVzID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBhcGlVcmwgPSBhcGlDb25maWcuYmFzZVVSTCArIFwiYWRtaW4vd2Vla190eXBlc1wiO1xuXG4gICAgICAgIHZhciBwcm9taXNlID0gJGh0dHAuZ2V0KGFwaVVybClcbiAgICAgICAgICAuc3VjY2VzcyhmdW5jdGlvbihkYXRhKSB7XG4gICAgICAgICAgICAkbG9nLmRlYnVnKFwiV2Vla1NlcnZpY2U6IGdldFdlZWtUeXBlcyBzdWNjZXNzXCIpO1xuICAgICAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgICAgICAgfSlcbiAgICAgICAgICAuZXJyb3IoZnVuY3Rpb24oZGF0YSkge1xuICAgICAgICAgICAgJGxvZy5kZWJ1ZyhcIldlZWtTZXJ2aWNlOiBnZXRXZWVrVHlwZXMgZmFpbGVkXCIpO1xuICAgICAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgICAgIH0pO1xuXG4gICAgICByZXR1cm4gcHJvbWlzZTtcbiAgICB9O1xuXG4gICAgdGhpcy5jcmVhdGVXZWVrID0gZnVuY3Rpb24od2Vla1BhcmFtcykge1xuICAgICAgdmFyIHByb21pc2UgPSAkaHR0cC5wb3N0KGFwaUNvbmZpZy5iYXNlVVJMICsgXCJhZG1pbi9zZWFzb25zL1wiICsgd2Vla1BhcmFtcy5zZWFzb25faWQgKyBcIi93ZWVrc1wiLFxuICAgICAgICB7IHdlZWs6IHdlZWtQYXJhbXMgfSlcbiAgICAgICAgLnN1Y2Nlc3MoZnVuY3Rpb24oZGF0YSkge1xuICAgICAgICAgICRsb2cuZGVidWcoXCJXZWVrU2VydmljZTogY3JlYXRlV2VlayBzdWNjZXNzXCIpO1xuICAgICAgICAgIC8vIHRvZG86IHRoaXMgcmVsaWVzIG9uIGEgbW9ua2V5IHBhdGNoIGF0IHRoZSBtb21lbnQgLSBodHRwczovL2dpdGh1Yi5jb20vYW5ndWxhci11aS91aS1yb3V0ZXIvaXNzdWVzLzU4MlxuICAgICAgICAgIC8vIGJ1dCBtYXkgYmUgcmVzb2x2ZWQgd2l0aCBmdXR1cmUgcmVsZWFzZXMgb2YgYW5ndWxhci11aS1yb3V0ZXJcbiAgICAgICAgICAkc3RhdGUucmVsb2FkKCk7IC8vIHJlbG9hZHMgYWxsIHRoZSByZXNvbHZlcyBmb3IgdGhlIHZpZXcgbGVhZ3VlIHBhZ2UgYW5kIHJlaW5zdGFudGlhdGVzIHRoZSBjb250cm9sbGVyXG4gICAgICAgICAgbWVzc2FnZU1vZGVsLnNldE1lc3NhZ2UoZGF0YS5tZXNzYWdlLCBmYWxzZSk7XG4gICAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgICAgIH0pXG4gICAgICAgIC5lcnJvcihmdW5jdGlvbihkYXRhKSB7XG4gICAgICAgICAgJGxvZy5kZWJ1ZyhcIldlZWtTZXJ2aWNlOiBjcmVhdGVXZWVrIGZhaWxlZFwiKTtcbiAgICAgICAgICBtZXNzYWdlTW9kZWwuc2V0TWVzc2FnZShkYXRhLm1lc3NhZ2UsIGZhbHNlKTtcbiAgICAgICAgICByZXR1cm4gZGF0YTtcbiAgICAgICAgfSk7XG5cbiAgICAgIHJldHVybiBwcm9taXNlO1xuICAgIH07XG5cbiAgICB0aGlzLnVwZGF0ZVdlZWsgPSBmdW5jdGlvbih3ZWVrUGFyYW1zKSB7XG4gICAgICB2YXIgcHJvbWlzZSA9ICRodHRwLnB1dChhcGlDb25maWcuYmFzZVVSTCArIFwiYWRtaW4vc2Vhc29ucy9cIiArIHdlZWtQYXJhbXMuc2Vhc29uX2lkICsgXCIvd2Vla3MvXCIgKyB3ZWVrUGFyYW1zLmlkLFxuICAgICAgICB7IHdlZWs6IHdlZWtQYXJhbXMgfSlcbiAgICAgICAgLnN1Y2Nlc3MoZnVuY3Rpb24oZGF0YSkge1xuICAgICAgICAgICRsb2cuZGVidWcoXCJXZWVrU2VydmljZTogdXBkYXRlV2VlayBzdWNjZXNzXCIpO1xuICAgICAgICAgIC8vIHRvZG86IHRoaXMgcmVsaWVzIG9uIGEgbW9ua2V5IHBhdGNoIGF0IHRoZSBtb21lbnQgLSBodHRwczovL2dpdGh1Yi5jb20vYW5ndWxhci11aS91aS1yb3V0ZXIvaXNzdWVzLzU4MlxuICAgICAgICAgIC8vIGJ1dCBtYXkgYmUgcmVzb2x2ZWQgd2l0aCBmdXR1cmUgcmVsZWFzZXMgb2YgYW5ndWxhci11aS1yb3V0ZXJcbiAgICAgICAgICAkc3RhdGUucmVsb2FkKCk7IC8vIHJlbG9hZHMgYWxsIHRoZSByZXNvbHZlcyBmb3IgdGhlIHZpZXcgbGVhZ3VlIHBhZ2UgYW5kIHJlaW5zdGFudGlhdGVzIHRoZSBjb250cm9sbGVyXG4gICAgICAgICAgbWVzc2FnZU1vZGVsLnNldE1lc3NhZ2UoZGF0YS5tZXNzYWdlLCBmYWxzZSk7XG4gICAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgICAgIH0pXG4gICAgICAgIC5lcnJvcihmdW5jdGlvbihkYXRhKSB7XG4gICAgICAgICAgJGxvZy5kZWJ1ZyhcIldlZWtTZXJ2aWNlOiB1cGRhdGVXZWVrIGZhaWxlZFwiKTtcbiAgICAgICAgICBtZXNzYWdlTW9kZWwuc2V0TWVzc2FnZShkYXRhLm1lc3NhZ2UsIGZhbHNlKTtcbiAgICAgICAgICByZXR1cm4gZGF0YTtcbiAgICAgICAgfSk7XG5cbiAgICAgIHJldHVybiBwcm9taXNlO1xuICAgIH07XG5cbiAgICB0aGlzLnNlbmRSZW1pbmRlciA9IGZ1bmN0aW9uKHdlZWspIHtcbiAgICAgICAgdmFyIHByb21pc2UgPSAkaHR0cC5wdXQoYXBpQ29uZmlnLmJhc2VVUkwgKyBcImFkbWluL3NlYXNvbnMvXCIgKyB3ZWVrLnNlYXNvbl9pZCArIFwiL3dlZWtzL1wiICsgd2Vlay5pZCArIFwiL3JlbWluZFwiKVxuICAgICAgICAgICAgLnN1Y2Nlc3MoZnVuY3Rpb24oZGF0YSkge1xuICAgICAgICAgICAgICAgICRsb2cuZGVidWcoXCJXZWVrU2VydmljZTogc2VuZFJlbWluZGVyIHN1Y2Nlc3NcIik7XG4gICAgICAgICAgICAgICAgJHN0YXRlLnJlbG9hZCgpO1xuICAgICAgICAgICAgICAgIG1lc3NhZ2VNb2RlbC5zZXRNZXNzYWdlKGRhdGEubWVzc2FnZSwgZmFsc2UpO1xuICAgICAgICAgICAgICAgIHJldHVybiBkYXRhO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5lcnJvcihmdW5jdGlvbihkYXRhKSB7XG4gICAgICAgICAgICAgICAgJGxvZy5kZWJ1ZyhcIldlZWtTZXJ2aWNlOiBzZW5kUmVtaW5kZXIgZmFpbGVkXCIpO1xuICAgICAgICAgICAgICAgIG1lc3NhZ2VNb2RlbC5zZXRNZXNzYWdlKGRhdGEubWVzc2FnZSwgZmFsc2UpO1xuICAgICAgICAgICAgICAgIHJldHVybiBkYXRhO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIHByb21pc2U7XG4gICAgfTtcblxuICAgIHRoaXMuY29tcGxldGVXZWVrID0gZnVuY3Rpb24od2Vlaykge1xuICAgICAgdmFyIGRlZmVycmVkID0gJHEuZGVmZXIoKTtcbiAgICAgICRodHRwLnB1dChhcGlDb25maWcuYmFzZVVSTCArIFwiYWRtaW4vc2Vhc29ucy9cIiArIHdlZWsuc2Vhc29uX2lkICsgXCIvd2Vla3MvXCIgKyB3ZWVrLmlkICsgXCIvY29tcGxldGVcIilcbiAgICAgICAgICAgIC5zdWNjZXNzKGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAgICAgICAgICAgICAkbG9nLmRlYnVnKFwiV2Vla1NlcnZpY2U6IGNvbXBsZXRlV2VlayBzdWNjZXNzXCIpO1xuICAgICAgICAgICAgICAgIG1lc3NhZ2VNb2RlbC5zZXRNZXNzYWdlKGRhdGEubWVzc2FnZSwgZmFsc2UpO1xuICAgICAgICAgICAgICAgIGRlZmVycmVkLnJlc29sdmUoKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuZXJyb3IoZnVuY3Rpb24oZGF0YSkge1xuICAgICAgICAgICAgICAgICRsb2cuZGVidWcoXCJXZWVrU2VydmljZTogY29tcGxldGVXZWVrIGZhaWxlZFwiKTtcbiAgICAgICAgICAgICAgICBtZXNzYWdlTW9kZWwuc2V0TWVzc2FnZShkYXRhLm1lc3NhZ2UsIGZhbHNlKTtcbiAgICAgICAgICAgICAgICBkZWZlcnJlZC5yZWplY3QoKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiBkZWZlcnJlZC5wcm9taXNlO1xuICAgIH07XG5cbn07XG5cbldlZWtTZXJ2aWNlLiRpbmplY3QgPSBbJyRodHRwJywgJyRsb2cnLCAnJHEnLCAnJHN0YXRlJywgJ2FwaUNvbmZpZycsICdtZXNzYWdlTW9kZWwnXTtcbm1vZHVsZS5leHBvcnRzID0gV2Vla1NlcnZpY2U7XG4iLCJjb21tYW5ndWxhci5jcmVhdGUoJ1NpZ25pbkNvbW1hbmQnLFxuICAgIGZ1bmN0aW9uKCRsb2csIHVzZXJTZXJ2aWNlKSB7XG5cbiAgICByZXR1cm4ge1xuXG4gICAgICAgIGV4ZWN1dGU6IGZ1bmN0aW9uKGVtYWlsLCBwYXNzd29yZCkge1xuICAgICAgICAgICAgJGxvZy5kZWJ1ZygnU2lnbmluQ29tbWFuZDogYXV0aGVudGljYXRpbmcgdXNlci4uLicpO1xuICAgICAgICAgICAgcmV0dXJuIHVzZXJTZXJ2aWNlLnNpZ25pbihlbWFpbCwgcGFzc3dvcmQpO1xuICAgICAgICB9LFxuICAgICAgICBvbkVycm9yOiBmdW5jdGlvbihlcnJvcikge1xuICAgICAgICAgICAgJGxvZy5kZWJ1ZyhcIlNpZ25pbkNvbW1hbmQ6IGZhaWx1cmU6IFwiICsgZXJyb3IuZGF0YSk7XG4gICAgICAgIH0sXG4gICAgICAgIG9uUmVzdWx0OiBmdW5jdGlvbihyZXN1bHQpIHtcbiAgICAgICAgICAgICRsb2cuZGVidWcoXCJTaWduaW5Db21tYW5kOiBzdWNjZXNzIFwiKTtcbiAgICAgICAgfVxuXG4gICAgfVxufSk7XG4iLCJjb21tYW5ndWxhci5jcmVhdGUoJ1NpZ25vdXRDb21tYW5kJyxcbiAgICBmdW5jdGlvbigkbG9nLCB1c2VyU2VydmljZSkge1xuXG4gICAgICAgIHJldHVybiB7XG5cbiAgICAgICAgICAgIGV4ZWN1dGU6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICRsb2cuZGVidWcoJ1NpZ25vdXRDb21tYW5kOiBzaWduaW5nIG91dCB1c2VyLi4uJyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHVzZXJTZXJ2aWNlLnNpZ25vdXQoKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBvbkVycm9yOiBmdW5jdGlvbihlcnJvcikge1xuICAgICAgICAgICAgICAgICRsb2cuZGVidWcoXCJTaWdub3V0Q29tbWFuZDogZmFpbHVyZTogXCIgKyBlcnJvci5kYXRhKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBvblJlc3VsdDogZnVuY3Rpb24ocmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgJGxvZy5kZWJ1ZyhcIlNpZ25vdXRDb21tYW5kOiBzdWNjZXNzXCIpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cbiAgICB9KTtcbiIsIlxuY29tbWFuZ3VsYXIuY3JlYXRlKCdHZXRDdXJyZW50VXNlckNvbW1hbmQnLFxuICAgZnVuY3Rpb24oJGxvZywgdXNlclNlcnZpY2UsIHVzZXJNb2RlbCkge1xuXG4gICAgcmV0dXJuIHtcblxuICAgICAgICBleGVjdXRlOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICRsb2cuZGVidWcoJ0dldEN1cnJlbnRVc2VyQ29tbWFuZDogZ2V0dGluZyBjdXJyZW50IHVzZXIgZGV0YWlscy4uLicpO1xuICAgICAgICAgICAgdmFyIHVzZXJQcm9taXNlID0gdXNlclNlcnZpY2UuZ2V0Q3VycmVudFVzZXIoKTtcbiAgICAgICAgICAgIHJldHVybiB1c2VyUHJvbWlzZTtcbiAgICAgICAgfSxcbiAgICAgICAgb25FcnJvcjogZnVuY3Rpb24oZXJyb3IpIHtcbiAgICAgICAgICAgICRsb2cuZGVidWcoXCJHZXRDdXJyZW50VXNlckNvbW1hbmQ6IGZhaWx1cmU6IFwiICsgZXJyb3IuZGF0YSk7XG4gICAgICAgIH0sXG4gICAgICAgIG9uUmVzdWx0OiBmdW5jdGlvbihyZXN1bHQpIHtcbiAgICAgICAgICAgICRsb2cuZGVidWcoXCJHZXRDdXJyZW50VXNlckNvbW1hbmQ6IHN1Y2Nlc3NcIik7XG4gICAgICAgIH1cblxuICAgIH1cbn0pOyIsInZhciBGYXFDb250cm9sbGVyID0gZnVuY3Rpb24oJHNjb3BlLCAkc3RhdGUsICRsb2NhdGlvbiwgc2Vhc29uTW9kZWwpIHtcblxuICAkc2NvcGUuc2VsZWN0ZWRTZWFzb25JZCA9IHNlYXNvbk1vZGVsLnNlbGVjdGVkU2Vhc29uSWQ7XG5cbiAgJHNjb3BlLmlzU3RhdGUgPSBmdW5jdGlvbihzdGF0ZSkge1xuICAgIHJldHVybiAkc3RhdGUuY3VycmVudC5uYW1lID09IHN0YXRlO1xuICB9O1xuXG4gICRzY29wZS5jcmVhdGVMZWFndWUgPSBmdW5jdGlvbihzZWFzb25JZCkge1xuICAgICRsb2NhdGlvbi51cmwoJy9zZWFzb24vJyArIHNlYXNvbklkICsgJy9sZWFndWUvbmV3Jyk7XG4gIH07XG5cbiAgJHNjb3BlLmpvaW5MZWFndWUgPSBmdW5jdGlvbihzZWFzb25JZCkge1xuICAgICRsb2NhdGlvbi51cmwoJy9zZWFzb24vJyArIHNlYXNvbklkICsgJy9sZWFndWVzL3B1YmxpYycpO1xuICB9O1xuXG4gIHZhciBpbml0ID0gZnVuY3Rpb24oKSB7fTtcbiAgaW5pdCgpO1xufTtcblxuRmFxQ29udHJvbGxlci4kaW5qZWN0ID0gWyckc2NvcGUnLCAnJHN0YXRlJywgJyRsb2NhdGlvbicsICdzZWFzb25Nb2RlbCddO1xubW9kdWxlLmV4cG9ydHMgPSBGYXFDb250cm9sbGVyO1xuIiwidmFyIEhvbWVDb250cm9sbGVyID0gZnVuY3Rpb24oJHNjb3BlLCAkbG9jYXRpb24sICRtb2RhbCwgc3RhdHNTZXJ2aWNlLCB1c2VyU2VydmljZSwgc2Vhc29uTW9kZWwpIHtcblxuICAgIHZhciBnZXRTdGF0cyA9IGZ1bmN0aW9uKCkge1xuICAgICAgc3RhdHNTZXJ2aWNlLmdldFN0YXRzKClcbiAgICAgICAgLnRoZW4oZnVuY3Rpb24oZGF0YSkge1xuICAgICAgICAgICRzY29wZS5zdGF0cyA9IGRhdGE7XG4gICAgICAgIH0pO1xuICAgIH07XG5cbiAgICAkc2NvcGUudGFnbGluZSA9ICcnO1xuXG4gICAgJHNjb3BlLnNlbGVjdGVkU2Vhc29uSWQgPSBzZWFzb25Nb2RlbC5zZWxlY3RlZFNlYXNvbklkO1xuXG4gICAgJHNjb3BlLnN0YXRzID0ge1xuICAgICAgcGlja2VtOiAwLFxuICAgICAgc3Vydml2b3I6IDAsXG4gICAgICB0ZWFtczogMCxcbiAgICAgIHBpY2tzOiAwXG4gICAgfTtcblxuICAgICRzY29wZS5jcmVhdGVMZWFndWUgPSBmdW5jdGlvbihzZWFzb25JZCkge1xuICAgICAgJGxvY2F0aW9uLnVybCgnL3NlYXNvbi8nICsgc2Vhc29uSWQgKyAnL2xlYWd1ZS9uZXcnKTtcbiAgICB9O1xuXG4gICAgJHNjb3BlLmpvaW5MZWFndWUgPSBmdW5jdGlvbihzZWFzb25JZCkge1xuICAgICAgJGxvY2F0aW9uLnVybCgnL3NlYXNvbi8nICsgc2Vhc29uSWQgKyAnL2xlYWd1ZXMvcHVibGljJyk7XG4gICAgfTtcblxuICAgICRzY29wZS5qb2luUHJvbW9MZWFndWUgPSBmdW5jdGlvbihwYXRoKSB7XG4gICAgICAkbG9jYXRpb24udXJsKHBhdGgpO1xuICAgIH07XG5cbiAgICAkc2NvcGUucmVnaXN0ZXIgPSBmdW5jdGlvbigpIHtcblxuICAgICAgdmFyIG1vZGFsSW5zdGFuY2UgPSAkbW9kYWwub3Blbih7XG4gICAgICAgIHRlbXBsYXRlVXJsOiAnbW9kdWxlcy9wdWJsaWMvcmVnaXN0ZXIvcmVnaXN0ZXIudHBsLmh0bWwnLFxuICAgICAgICBjb250cm9sbGVyOiAnUmVnaXN0ZXJDb250cm9sbGVyJyxcbiAgICAgICAgc2l6ZTogJ3NtJ1xuICAgICAgfSk7XG5cbiAgICAgIG1vZGFsSW5zdGFuY2UucmVzdWx0LnRoZW4oZnVuY3Rpb24obmV3VXNlcikge1xuICAgICAgICB1c2VyU2VydmljZS5jcmVhdGVVc2VyKG5ld1VzZXIpO1xuICAgICAgfSwgZnVuY3Rpb24gKCkge1xuICAgICAgfSk7XG5cbiAgICB9O1xuXG4gICAgdmFyIGdlbmVyYXRlUmFuZG9tVGFnbGluZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIHRhZ2xpbmVzID0gW107XG4gICAgICB0YWdsaW5lc1swXSA9ICdMb3NpbmcgaXMgRXZlcnl0aGluZyc7XG4gICAgICB0YWdsaW5lc1sxXSA9ICdTcHJpbmtsZXMgYXJlIGZvciBMb3NlcnMnO1xuXG4gICAgICAkc2NvcGUudGFnbGluZSA9IHRhZ2xpbmVzW01hdGgucm91bmQoTWF0aC5yYW5kb20oKSoodGFnbGluZXMubGVuZ3RoIC0gMSkpXTtcbiAgICB9O1xuXG4gICAgdmFyIGluaXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICBnZW5lcmF0ZVJhbmRvbVRhZ2xpbmUoKTtcbiAgICAgIGdldFN0YXRzKCk7XG4gIH07XG4gICAgaW5pdCgpO1xufTtcblxuSG9tZUNvbnRyb2xsZXIuJGluamVjdCA9IFsnJHNjb3BlJywgJyRsb2NhdGlvbicsICckbW9kYWwnLCAnc3RhdHNTZXJ2aWNlJywgJ3VzZXJTZXJ2aWNlJywgJ3NlYXNvbk1vZGVsJ107XG5tb2R1bGUuZXhwb3J0cyA9IEhvbWVDb250cm9sbGVyO1xuIiwiXG52YXIgT2Zmc2V0RmlsdGVyID0gZnVuY3Rpb24oJGxvZykge1xuICAgIHJldHVybiBmdW5jdGlvbihpbnB1dCwgc3RhcnQpIHtcbiAgICAgICAgc3RhcnQgPSBwYXJzZUludChzdGFydCwgMTApO1xuICAgICAgICByZXR1cm4gaW5wdXQuc2xpY2Uoc3RhcnQpO1xuICAgIH07XG59O1xuXG5PZmZzZXRGaWx0ZXIuJGluamVjdCA9IFsnJGxvZyddO1xubW9kdWxlLmV4cG9ydHMgPSBPZmZzZXRGaWx0ZXI7XG4iLCJ2YXIgQWN0aXZlVGVhbUZpbHRlciA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gZnVuY3Rpb24odGVhbXMsIG9wdGlvbnMpIHtcbiAgICBpZiAob3B0aW9ucy5pbmFjdGl2ZSA9PSB0cnVlKSB7XG4gICAgICByZXR1cm4gdGVhbXM7XG4gICAgfVxuICAgIHZhciBhY3RpdmVUZWFtcyA9IF8uZmlsdGVyKHRlYW1zLCBmdW5jdGlvbih0ZWFtKSB7XG4gICAgICByZXR1cm4gdGVhbS5hY3RpdmU7XG4gICAgfSk7XG4gICAgcmV0dXJuIGFjdGl2ZVRlYW1zO1xuICB9O1xufTtcblxuQWN0aXZlVGVhbUZpbHRlci4kaW5qZWN0ID0gW107XG5tb2R1bGUuZXhwb3J0cyA9IEFjdGl2ZVRlYW1GaWx0ZXI7XG4iLCJ2YXIgTWFuYWdlZExlYWd1ZUZpbHRlciA9IGZ1bmN0aW9uKHVzZXJNb2RlbCkge1xuICByZXR1cm4gZnVuY3Rpb24obGVhZ3Vlcywgb3B0aW9ucykge1xuICAgIGlmIChvcHRpb25zLm1hbmFnZWQgPT0gdHJ1ZSkge1xuICAgICAgcmV0dXJuIGxlYWd1ZXM7XG4gICAgfVxuICAgIHZhciBpbkxlYWd1ZXMgPSBfLmZpbHRlcihsZWFndWVzLCBmdW5jdGlvbihsZWFndWUpIHtcbiAgICAgIHJldHVybiBsZWFndWUuY29tbWlzaF9pZHMuaW5kZXhPZih1c2VyTW9kZWwudXNlci5pZCkgPT0gLTE7XG4gICAgfSk7XG4gICAgcmV0dXJuIGluTGVhZ3VlcztcbiAgfTtcbn07XG5cbk1hbmFnZWRMZWFndWVGaWx0ZXIuJGluamVjdCA9IFsndXNlck1vZGVsJ107XG5tb2R1bGUuZXhwb3J0cyA9IE1hbmFnZWRMZWFndWVGaWx0ZXI7XG4iLCJcbnZhciBUaW1lRmlsdGVyID0gZnVuY3Rpb24oJGxvZykge1xuICAgcmV0dXJuIGZ1bmN0aW9uKGlucHV0KSB7XG5cbiAgICAgICBpZiAoaW5wdXQgPCAxKSB7XG4gICAgICAgICAgIHJldHVybiBcIjAwOjAwOjAwXCI7XG4gICAgICAgfVxuXG4gICAgICAgZnVuY3Rpb24gZm9ybWF0KHZhbCkge1xuICAgICAgICAgICByZXR1cm4gKHZhbDwxMCA/ICcwJyA6ICcnKSArIHZhbDtcbiAgICAgICB9XG5cbiAgICAgICB2YXIgaCA9IE1hdGguZmxvb3IoKGlucHV0IC8gMTAwMCkgLyAzNjAwKTtcbiAgICAgICB2YXIgbSA9IE1hdGguZmxvb3IoKChpbnB1dCAvIDEwMDApICUgMzYwMCkgLyA2MCk7XG4gICAgICAgdmFyIHMgPSBNYXRoLmZsb29yKChpbnB1dCAvIDEwMDApICUgNjApO1xuICAgICAgIHJldHVybiBmb3JtYXQoaCkgKyBcIjpcIiArIGZvcm1hdChtKSArIFwiOlwiICsgZm9ybWF0KHMpO1xuICAgfVxuXG59O1xuXG5UaW1lRmlsdGVyLiRpbmplY3QgPSBbJyRsb2cnXTtcbm1vZHVsZS5leHBvcnRzID0gVGltZUZpbHRlcjtcbiIsInZhciBXZWVrUGlja3NGaWx0ZXIgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKHBpY2tzLCB3ZWVrLCBlbGltaW5hdGlvbikge1xuICAgIGlmICghd2Vlaykge1xuICAgICAgcmV0dXJuIHBpY2tzO1xuICAgIH1cbiAgICB2YXIgd2Vla1BpY2tzID0gW107XG4gICAgaWYgKGVsaW1pbmF0aW9uKSB7XG4gICAgICAvLyBmb3Igc3Vydml2b3IgbGVhZ3VlcywgZ29ubmEgc2hvdyBwaWNrcyB1cCB0byB0aGUgd2VlayB5b3Ugc2VsZWN0ZWQuLi5cbiAgICAgIHdlZWtQaWNrcyA9IF8uZmlsdGVyKHBpY2tzLCBmdW5jdGlvbihwaWNrKSB7XG4gICAgICAgIHJldHVybiBtb21lbnQocGljay53ZWVrLmRhdGUpLmlzQmVmb3JlKHdlZWsuc3RhcnRzX2F0KSB8fCBtb21lbnQocGljay53ZWVrLmRhdGUpLmlzU2FtZSh3ZWVrLnN0YXJ0c19hdCk7XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gZm9yIHBpY2snZW0gbGVhZ3VlcywgZ29ubmEgc2hvdyBPTkxZIHBpY2tzIGZvciB0aGUgd2VlayB5b3Ugc2VsZWN0ZWQuLi5cbiAgICAgIHdlZWtQaWNrcyA9IF8uZmlsdGVyKHBpY2tzLCBmdW5jdGlvbihwaWNrKSB7XG4gICAgICAgIHJldHVybiBwaWNrLndlZWsuc2x1ZyA9PSB3ZWVrLnNsdWc7XG4gICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIHdlZWtQaWNrcztcbiAgfTtcbn07XG5cbldlZWtQaWNrc0ZpbHRlci4kaW5qZWN0ID0gW107XG5tb2R1bGUuZXhwb3J0cyA9IFdlZWtQaWNrc0ZpbHRlcjtcbiIsInZhciBBYnVzZUNvbnRyb2xsZXIgPSBmdW5jdGlvbigkbW9kYWxJbnN0YW5jZSwgJHNjb3BlLCAkbG9nKSB7XG5cbiAgJHNjb3BlLmFidXNlTWVzc2FnZSA9ICcnO1xuXG4gICRzY29wZS5jb250YWN0VXMgPSBmdW5jdGlvbihtZXNzYWdlKSB7XG4gICAgJG1vZGFsSW5zdGFuY2UuY2xvc2UobWVzc2FnZSk7XG4gIH07XG5cbiAgJHNjb3BlLmNhbmNlbCA9IGZ1bmN0aW9uKCkge1xuICAgICRtb2RhbEluc3RhbmNlLmRpc21pc3MoJ2NhbmNlbCcpO1xuICB9O1xuXG4gICRzY29wZS5oYXNFcnJvciA9IGZ1bmN0aW9uKGlucHV0KSB7XG4gICAgcmV0dXJuICFpbnB1dC4kZm9jdXNlZCAmJiBpbnB1dC4kZGlydHkgJiYgaW5wdXQuJGludmFsaWQ7XG4gIH07XG5cbiAgJHNjb3BlLmhhc1Byb3BlcnR5RXJyb3IgPSBmdW5jdGlvbihpbnB1dCwgcHJvcGVydHkpIHtcbiAgICByZXR1cm4gIWlucHV0LiRmb2N1c2VkICYmIGlucHV0LiRkaXJ0eSAmJiBpbnB1dC4kZXJyb3JbcHJvcGVydHldO1xuICB9O1xuXG4gIC8qKlxuICAgKiBJbnZva2VkIG9uIHN0YXJ0dXAsIGxpa2UgYSBjb25zdHJ1Y3Rvci5cbiAgICovXG4gIHZhciBpbml0ID0gZnVuY3Rpb24gKCkge1xuICAgICRsb2cuZGVidWcoXCJyZXBvcnQgYWJ1c2UgY29udHJvbGxlclwiKTtcbiAgfTtcbiAgaW5pdCgpO1xufTtcblxuQWJ1c2VDb250cm9sbGVyLiRpbmplY3QgPSBbJyRtb2RhbEluc3RhbmNlJywgJyRzY29wZScsICckbG9nJ107XG5tb2R1bGUuZXhwb3J0cyA9IEFidXNlQ29udHJvbGxlcjtcbiIsInZhciBTaWduaW5Db250cm9sbGVyID0gZnVuY3Rpb24oJHNjb3BlLCAkbG9nLCAkbG9jYXRpb24sICRtb2RhbCwgbWVzc2FnZU1vZGVsLCB1c2VyU2VydmljZSkge1xuXG4gICAgJHNjb3BlLmNyZWRlbnRpYWxzID0ge1xuICAgICAgICBlbWFpbDogJycsXG4gICAgICAgIHBhc3N3b3JkOiAnJ1xuICAgIH07XG5cbiAgICAkc2NvcGUuc2lnbmluID0gZnVuY3Rpb24oY3JlZGVudGlhbHMpIHtcbiAgICAgICAgJHNjb3BlLmRpc3BhdGNoKFwiU2lnbmluRXZlbnRcIiwgY3JlZGVudGlhbHMpO1xuICAgIH07XG5cbiAgICAkc2NvcGUuc2lnbmluR3Vlc3QgPSBmdW5jdGlvbigpIHtcbiAgICAgIHVzZXJTZXJ2aWNlLnNpZ25pbkd1ZXN0KCk7XG4gICAgfTtcblxuICAgICRzY29wZS5yZXNldFBhc3N3b3JkID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgIHZhciBtb2RhbEluc3RhbmNlID0gJG1vZGFsLm9wZW4oe1xuICAgICAgICB0ZW1wbGF0ZVVybDogJ21vZHVsZXMvcHJpdmF0ZS91c2VyL3Jlc2V0L3VzZXIucmVzZXQudHBsLmh0bWwnLFxuICAgICAgICBjb250cm9sbGVyOiAnVXNlclJlc2V0Q29udHJvbGxlcidcbiAgICAgIH0pO1xuXG4gICAgICBtb2RhbEluc3RhbmNlLnJlc3VsdC50aGVuKGZ1bmN0aW9uIChlbWFpbCkge1xuICAgICAgICB1c2VyU2VydmljZS5yZXNldFVzZXIoZW1haWwpO1xuICAgICAgfSwgZnVuY3Rpb24gKCkge1xuICAgICAgICBtZXNzYWdlTW9kZWwuc2V0TWVzc2FnZSh7IHR5cGU6ICd3YXJuaW5nJywgY29udGVudDogJ1Jlc2V0IHBhc3N3b3JkIGNhbmNlbGxlZCcgfSwgZmFsc2UpO1xuICAgICAgfSk7XG4gICAgfTtcblxuICAgICRzY29wZS5yZWdpc3RlciA9IGZ1bmN0aW9uKCkge1xuXG4gICAgICB2YXIgbW9kYWxJbnN0YW5jZSA9ICRtb2RhbC5vcGVuKHtcbiAgICAgICAgdGVtcGxhdGVVcmw6ICdtb2R1bGVzL3B1YmxpYy9yZWdpc3Rlci9yZWdpc3Rlci50cGwuaHRtbCcsXG4gICAgICAgIGNvbnRyb2xsZXI6ICdSZWdpc3RlckNvbnRyb2xsZXInLFxuICAgICAgICBzaXplOiAnc20nXG4gICAgICB9KTtcblxuICAgICAgbW9kYWxJbnN0YW5jZS5yZXN1bHQudGhlbihmdW5jdGlvbihuZXdVc2VyKSB7XG4gICAgICAgIHVzZXJTZXJ2aWNlLmNyZWF0ZVVzZXIobmV3VXNlcik7XG4gICAgICB9LCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICRsb2cuZGVidWcoJ1JlZ2lzdGVyIG1vZGFsIGRpc21pc3NlZC4uLicpO1xuICAgICAgICBtZXNzYWdlTW9kZWwuc2V0TWVzc2FnZSh7IHR5cGU6ICd3YXJuaW5nJywgY29udGVudDogJ1JlZ2lzdGVyIGNhbmNlbGxlZCcgfSwgZmFsc2UpO1xuICAgICAgfSk7XG5cbiAgICB9O1xuXG4gICAgdmFyIGluaXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgfTtcbiAgICBpbml0KCk7XG5cbn07XG5cblNpZ25pbkNvbnRyb2xsZXIuJGluamVjdCA9IFsnJHNjb3BlJywgJyRsb2cnLCAnJGxvY2F0aW9uJywgJyRtb2RhbCcsICdtZXNzYWdlTW9kZWwnLCAndXNlclNlcnZpY2UnXTtcbm1vZHVsZS5leHBvcnRzID0gU2lnbmluQ29udHJvbGxlcjtcbiIsInZhciBSZWdpc3RlckNvbnRyb2xsZXIgPSBmdW5jdGlvbigkc2NvcGUsICRtb2RhbCwgJG1vZGFsSW5zdGFuY2UpIHtcblxuICAgICRzY29wZS5uZXdVc2VyRGF0YSA9IHtcbiAgICAgICAgZmlyc3RfbmFtZTogJycsXG4gICAgICAgIGxhc3RfbmFtZTogJycsXG4gICAgICAgIG5pY2tuYW1lOiAnJyxcbiAgICAgICAgZW1haWw6ICcnLFxuICAgICAgICBwYXNzd29yZDogJydcbiAgICB9O1xuXG4gICAgJHNjb3BlLnJlZ2lzdGVyID0gZnVuY3Rpb24gKG5ld1VzZXIpIHtcbiAgICAgICRzY29wZS5uZXdVc2VyRGF0YS5wYXNzd29yZF9jb25maXJtYXRpb24gPSAkc2NvcGUubmV3VXNlckRhdGEucGFzc3dvcmQ7XG4gICAgICAkbW9kYWxJbnN0YW5jZS5jbG9zZShuZXdVc2VyKTtcbiAgICB9O1xuXG4gICAgJHNjb3BlLmNhbmNlbCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICRtb2RhbEluc3RhbmNlLmRpc21pc3MoJ2NhbmNlbCcpO1xuICAgIH07XG5cbiAgICAkc2NvcGUuaGFzRXJyb3IgPSBmdW5jdGlvbihpbnB1dCkge1xuICAgICAgICByZXR1cm4gIWlucHV0LiRmb2N1c2VkICYmIGlucHV0LiRkaXJ0eSAmJiBpbnB1dC4kaW52YWxpZDtcbiAgICB9O1xuXG4gICAgJHNjb3BlLmhhc1Byb3BlcnR5RXJyb3IgPSBmdW5jdGlvbihpbnB1dCwgcHJvcGVydHkpIHtcbiAgICAgICAgcmV0dXJuICFpbnB1dC4kZm9jdXNlZCAmJiBpbnB1dC4kZGlydHkgJiYgaW5wdXQuJGVycm9yW3Byb3BlcnR5XTtcbiAgICB9O1xuXG4gICAgJHNjb3BlLnNob3dUZXJtcyA9IGZ1bmN0aW9uKCkge1xuXG4gICAgICB2YXIgbW9kYWxJbnN0YW5jZSA9ICRtb2RhbC5vcGVuKHtcbiAgICAgICAgdGVtcGxhdGVVcmw6ICdtb2R1bGVzL3B1YmxpYy9yZWdpc3Rlci90ZXJtcy9yZWdpc3Rlci50ZXJtcy50cGwuaHRtbCcsXG4gICAgICAgIGNvbnRyb2xsZXI6ICdSZWdpc3RlclRlcm1zQ29udHJvbGxlcidcbiAgICAgIH0pO1xuXG4gICAgICBtb2RhbEluc3RhbmNlLnJlc3VsdC50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgIH0sIGZ1bmN0aW9uICgpIHtcbiAgICAgIH0pO1xuXG4gICAgfTtcblxuICAgIHZhciBpbml0ID0gZnVuY3Rpb24gKCkge1xuICAgIH07XG4gICAgaW5pdCgpO1xuXG59O1xuXG5SZWdpc3RlckNvbnRyb2xsZXIuJGluamVjdCA9IFsnJHNjb3BlJywgJyRtb2RhbCcsICckbW9kYWxJbnN0YW5jZSddO1xubW9kdWxlLmV4cG9ydHMgPSBSZWdpc3RlckNvbnRyb2xsZXI7XG4iLCJcbnZhciBVc2VyQ29udHJvbGxlciA9IGZ1bmN0aW9uKCRzY29wZSwgJGxvZywgdXNlck1vZGVsLCB1c2VyU2VydmljZSkge1xuXG4gICAgJHNjb3BlLnVzZXJEYXRhID0gYW5ndWxhci5jb3B5KHVzZXJNb2RlbCk7XG5cbiAgICAkc2NvcGUudXBkYXRlID0gZnVuY3Rpb24odXNlcikge1xuICAgICAgICB1c2VyU2VydmljZS51cGRhdGVVc2VyKHVzZXIpO1xuICAgIH07XG5cbiAgICAkc2NvcGUuaGFzRXJyb3IgPSBmdW5jdGlvbihpbnB1dCkge1xuICAgICAgICByZXR1cm4gIWlucHV0LiRmb2N1c2VkICYmIGlucHV0LiRkaXJ0eSAmJiBpbnB1dC4kaW52YWxpZDtcbiAgICB9O1xuXG4gICAgJHNjb3BlLmhhc1Byb3BlcnR5RXJyb3IgPSBmdW5jdGlvbihpbnB1dCwgcHJvcGVydHkpIHtcbiAgICAgICAgcmV0dXJuICFpbnB1dC4kZm9jdXNlZCAmJiBpbnB1dC4kZGlydHkgJiYgaW5wdXQuJGVycm9yW3Byb3BlcnR5XTtcbiAgICB9O1xuXG4gICAgJHNjb3BlLiRvbigndXNlck1vZGVsOjp1c2VyVXBkYXRlZCcsIGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICAgICRzY29wZS51c2VyRGF0YSA9IGFuZ3VsYXIuY29weSh1c2VyTW9kZWwpO1xuICAgIH0pO1xuXG4gICAgLyoqXG4gICAgICogSW52b2tlZCBvbiBzdGFydHVwLCBsaWtlIGEgY29uc3RydWN0b3IuXG4gICAgICovXG4gICAgdmFyIGluaXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICRsb2cuZGVidWcoXCJ1c2VyIGNvbnRyb2xsZXJcIik7XG4gICAgfTtcbiAgICBpbml0KCk7XG5cbn07XG5cblVzZXJDb250cm9sbGVyLiRpbmplY3QgPSBbJyRzY29wZScsICckbG9nJywgJ3VzZXJNb2RlbCcsICd1c2VyU2VydmljZSddO1xubW9kdWxlLmV4cG9ydHMgPSBVc2VyQ29udHJvbGxlcjtcbiIsIlxudmFyIExlYWd1ZUNvbnRyb2xsZXIgPSBmdW5jdGlvbigkc2NvcGUsICRsb2cpIHtcblxuICAgICRzY29wZS5oYXNFcnJvciA9IGZ1bmN0aW9uKGlucHV0KSB7XG4gICAgICAgIHJldHVybiAhaW5wdXQuJGZvY3VzZWQgJiYgaW5wdXQuJGRpcnR5ICYmIGlucHV0LiRpbnZhbGlkO1xuICAgIH07XG5cbiAgICAkc2NvcGUuaGFzUHJvcGVydHlFcnJvciA9IGZ1bmN0aW9uKGlucHV0LCBwcm9wZXJ0eSkge1xuICAgICAgICByZXR1cm4gIWlucHV0LiRmb2N1c2VkICYmIGlucHV0LiRkaXJ0eSAmJiBpbnB1dC4kZXJyb3JbcHJvcGVydHldO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBJbnZva2VkIG9uIHN0YXJ0dXAsIGxpa2UgYSBjb25zdHJ1Y3Rvci5cbiAgICAgKi9cbiAgICB2YXIgaW5pdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJGxvZy5kZWJ1ZyhcImxlYWd1ZSBjb250cm9sbGVyXCIpO1xuICAgIH07XG4gICAgaW5pdCgpO1xuXG59O1xuXG5MZWFndWVDb250cm9sbGVyLiRpbmplY3QgPSBbJyRzY29wZScsICckbG9nJ107XG5tb2R1bGUuZXhwb3J0cyA9IExlYWd1ZUNvbnRyb2xsZXI7XG4iLCJ2YXIgTGVhZ3Vlc0NvbnRyb2xsZXIgPSBmdW5jdGlvbigkc2NvcGUsICRsb2csICRzdGF0ZSkge1xuXG4gICAgLy8gcGFnaW5hdGlvblxuICAgICRzY29wZS5jdXJyZW50TGVhZ3VlUGFnZSA9IDE7XG4gICAgJHNjb3BlLmxlYWd1ZXNQZXJQYWdlID0gMTAwO1xuXG4gICAgJHNjb3BlLmlzUHVibGljID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiAkc3RhdGUuY3VycmVudC5uYW1lID09ICdwcml2YXRlLmxlYWd1ZXMuam9pbi5wdWJsaWMnO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBJbnZva2VkIG9uIHN0YXJ0dXAsIGxpa2UgYSBjb25zdHJ1Y3Rvci5cbiAgICAgKi9cbiAgICB2YXIgaW5pdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJGxvZy5kZWJ1ZyhcImxlYWd1ZXMgY29udHJvbGxlclwiKTtcbiAgICB9O1xuICAgIGluaXQoKTtcblxufTtcblxuTGVhZ3Vlc0NvbnRyb2xsZXIuJGluamVjdCA9IFsnJHNjb3BlJywgJyRsb2cnLCAnJHN0YXRlJ107XG5tb2R1bGUuZXhwb3J0cyA9IExlYWd1ZXNDb250cm9sbGVyO1xuXG4iLCJ2YXIgVGVhbUNvbnRyb2xsZXIgPSBmdW5jdGlvbigkc2NvcGUsICRsb2cpIHtcblxuICAgICRzY29wZS5oYXNFcnJvciA9IGZ1bmN0aW9uKGlucHV0KSB7XG4gICAgICAgIHJldHVybiAhaW5wdXQuJGZvY3VzZWQgJiYgaW5wdXQuJGRpcnR5ICYmIGlucHV0LiRpbnZhbGlkO1xuICAgIH07XG5cbiAgICAkc2NvcGUuaGFzUHJvcGVydHlFcnJvciA9IGZ1bmN0aW9uKGlucHV0LCBwcm9wZXJ0eSkge1xuICAgICAgICByZXR1cm4gIWlucHV0LiRmb2N1c2VkICYmIGlucHV0LiRkaXJ0eSAmJiBpbnB1dC4kZXJyb3JbcHJvcGVydHldO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBJbnZva2VkIG9uIHN0YXJ0dXAsIGxpa2UgYSBjb25zdHJ1Y3Rvci5cbiAgICAgKi9cbiAgICB2YXIgaW5pdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJGxvZy5kZWJ1ZyhcInRlYW0gY29udHJvbGxlclwiKTtcbiAgICB9O1xuICAgIGluaXQoKTtcblxufTtcblxuVGVhbUNvbnRyb2xsZXIuJGluamVjdCA9IFsnJHNjb3BlJywgJyRsb2cnXTtcbm1vZHVsZS5leHBvcnRzID0gVGVhbUNvbnRyb2xsZXI7XG4iLCJ2YXIgUGxheUNvbnRyb2xsZXIgPSBmdW5jdGlvbigkc2NvcGUsICRsb2NhdGlvbiwgJHN0YXRlLCAkc3RhdGVQYXJhbXMsIG1lc3NhZ2VNb2RlbCwgc2Vhc29uTW9kZWwpIHtcblxuXHR2YXIgYnVpbGRTZWFzb25Ecm9wZG93biA9IGZ1bmN0aW9uKCkge1xuXHRcdHZhciBjdXJyZW50U2Vhc29ucyA9IGFuZ3VsYXIuY29weShzZWFzb25Nb2RlbC5jdXJyZW50U2Vhc29ucyksXG5cdFx0ICAgIGVuZGVkU2Vhc29ucyA9IGFuZ3VsYXIuY29weShzZWFzb25Nb2RlbC5lbmRlZFNlYXNvbnMpO1xuICAgIC8vIGZpcnN0IHB1c2ggaW4gY3VycmVudCBzZWFzb25zXG5cdFx0Xy5lYWNoKGN1cnJlbnRTZWFzb25zLCBmdW5jdGlvbihjdXJyZW50U2Vhc29uKSB7XG5cdFx0XHQkc2NvcGUuc3RhcnRlZFNlYXNvbnMucHVzaCh7IG5hbWU6IGN1cnJlbnRTZWFzb24ubmFtZSwgdmFsdWU6IGN1cnJlbnRTZWFzb24uaWQgfSk7XG5cdFx0fSk7XG4gICAgLy8gdGhlbiBhIGRpdmlkZXJcbiAgICAkc2NvcGUuc3RhcnRlZFNlYXNvbnMucHVzaCh7IGRpdmlkZXI6IHRydWUgfSk7XG4gICAgLy8gYW5kIHRoZW4gZW5kZWQgc2Vhc29uc1xuICAgIF8uZWFjaChlbmRlZFNlYXNvbnMsIGZ1bmN0aW9uKGVuZGVkU2Vhc29uKSB7XG4gICAgICAkc2NvcGUuc3RhcnRlZFNlYXNvbnMucHVzaCh7IG5hbWU6IGVuZGVkU2Vhc29uLm5hbWUsIHZhbHVlOiBlbmRlZFNlYXNvbi5pZCB9KTtcbiAgICB9KTtcbiAgICAvLyBhbmQgc2V0IHRoZSBzZWxlY3RlZCBzZWFzb24gYmFzZWQgb24gd2hhdCBpcyBpbiB1cmxcbiAgICAkc2NvcGUuc2VsZWN0ZWRTZWFzb24gPSBfLmZpbmQoJHNjb3BlLnN0YXJ0ZWRTZWFzb25zLCBmdW5jdGlvbihzdGFydGVkU2Vhc29uKSB7IHJldHVybiBzdGFydGVkU2Vhc29uLnZhbHVlID09PSAkc2NvcGUuc2VsZWN0ZWRTZWFzb25JZCB9KTtcblx0fTtcblxuXHQkc2NvcGUuc2VsZWN0ZWRTZWFzb25JZCA9IHBhcnNlSW50KCRzdGF0ZVBhcmFtcy5zZWFzb25JZCk7XG5cbiAgJHNjb3BlLnN0YXJ0ZWRTZWFzb25zID0gW107XG5cbiAgJHNjb3BlLnNlbGVjdGVkU2Vhc29uID0ge307XG5cbiAgJHNjb3BlLmxlYWd1ZU9wdGlvbnMgPSB7IG1hbmFnZWQ6IHRydWUgfTtcblxuICAkc2NvcGUucXVlcnkgPSAnJztcblxuICAkc2NvcGUuY2hhbmdlU2Vhc29uID0gZnVuY3Rpb24oc2Vhc29uKSB7XG4gICAgJHNjb3BlLnNlbGVjdGVkU2Vhc29uSWQgPSBzZWFzb24udmFsdWU7XG4gICAgc2Vhc29uTW9kZWwuc2V0U2VsZWN0ZWRTZWFzb25JZChzZWFzb24udmFsdWUpO1xuICAgIHZhciBuZXdQYXRoID0gJGxvY2F0aW9uLnBhdGgoKS5yZXBsYWNlKC8oXFwvc2Vhc29uXFwvKVxcZCovLCAnJDEnICsgc2Vhc29uLnZhbHVlKTtcbiAgICAkbG9jYXRpb24udXJsKG5ld1BhdGgpO1xuICB9O1xuXG4gICRzY29wZS5teVRlYW1zID0gZnVuY3Rpb24oc2Vhc29uSWQpIHtcbiAgICAkbG9jYXRpb24udXJsKCcvc2Vhc29uLycgKyBzZWFzb25JZCArICcvbXkvdGVhbXMnKTtcbiAgfTtcblxuICAkc2NvcGUubXlMZWFndWVzID0gZnVuY3Rpb24oc2Vhc29uSWQpIHtcbiAgICAkbG9jYXRpb24udXJsKCcvc2Vhc29uLycgKyBzZWFzb25JZCArICcvbXkvbGVhZ3VlcycpO1xuICB9O1xuXG4gICRzY29wZS5yZXNldFNlYXJjaCA9IGZ1bmN0aW9uKCkge1xuICAgICRzY29wZS5xdWVyeSA9ICcnO1xuICB9O1xuXG4gICRzY29wZS5pc1N0YXRlID0gZnVuY3Rpb24oc3RhdGVzKSB7XG4gICAgcmV0dXJuIF8uaW5kZXhPZihzdGF0ZXMsICRzdGF0ZS5jdXJyZW50Lm5hbWUpID4gLTE7XG4gIH07XG5cbiAgJHNjb3BlLmNyZWF0ZUxlYWd1ZSA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciBzZWFzb24gPSBzZWFzb25Nb2RlbC5nZXRDdXJyZW50U2Vhc29uKCk7XG4gICAgJGxvY2F0aW9uLnVybCgnL3NlYXNvbi8nICsgc2Vhc29uLmlkICsgJy9sZWFndWUvbmV3Jyk7XG4gIH07XG5cbiAgJHNjb3BlLmpvaW5MZWFndWUgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgc2Vhc29uID0gc2Vhc29uTW9kZWwuZ2V0Q3VycmVudFNlYXNvbigpO1xuICAgICRsb2NhdGlvbi51cmwoJy9zZWFzb24vJyArIHNlYXNvbi5pZCArICcvbGVhZ3Vlcy9wdWJsaWMnKTtcbiAgfTtcblxuICB2YXIgaW5pdCA9IGZ1bmN0aW9uICgpIHtcbiAgICBidWlsZFNlYXNvbkRyb3Bkb3duKCk7XG4gIH07XG4gIGluaXQoKTtcblxufTtcblxuUGxheUNvbnRyb2xsZXIuJGluamVjdCA9IFsnJHNjb3BlJywgJyRsb2NhdGlvbicsICckc3RhdGUnLCAnJHN0YXRlUGFyYW1zJywgJ21lc3NhZ2VNb2RlbCcsICdzZWFzb25Nb2RlbCddO1xubW9kdWxlLmV4cG9ydHMgPSBQbGF5Q29udHJvbGxlcjtcbiIsInZhciBBZG1pbkNvbnRyb2xsZXIgPSBmdW5jdGlvbigkc2NvcGUpIHtcblxuICAvKipcbiAgICogSW52b2tlZCBvbiBzdGFydHVwLCBsaWtlIGEgY29uc3RydWN0b3IuXG4gICAqL1xuICB2YXIgaW5pdCA9IGZ1bmN0aW9uICgpIHtcbiAgfTtcbiAgaW5pdCgpO1xufTtcblxuQWRtaW5Db250cm9sbGVyLiRpbmplY3QgPSBbJyRzY29wZSddO1xubW9kdWxlLmV4cG9ydHMgPSBBZG1pbkNvbnRyb2xsZXI7XG4iLCJ2YXIgSGVhZGVyQ29udHJvbGxlciA9IGZ1bmN0aW9uKCRyb290U2NvcGUsICRzY29wZSwgJGxvZywgJGxvY2F0aW9uLCAkbW9kYWwsICRzdGF0ZSwgJGFuY2hvclNjcm9sbCwgJHN0YXRlUGFyYW1zLCB1c2VyU2VydmljZSwgbGVhZ3VlU2VydmljZSwgdXNlck1vZGVsLCBtZXNzYWdlTW9kZWwsIHNlYXNvbk1vZGVsKSB7XG5cbiAgICB2YXIgc2Nyb2xsVG9Ub3AgPSBmdW5jdGlvbigpIHtcbiAgICAgICRhbmNob3JTY3JvbGwoKTsgLy8gaGFja3k/XG4gICAgfTtcblxuICAgIHZhciBjaGVja0h0bWw1U3RvcmFnZSA9IGZ1bmN0aW9uKCkge1xuXG4gICAgICB0cnkge1xuICAgICAgICBsb2NhbFN0b3JhZ2UudGVzdCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDYwMDAwMDApICsgMTtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgbWVzc2FnZU1vZGVsLnNldE1lc3NhZ2UoeyB0eXBlOiAnZGFuZ2VyJywgY29udGVudDogJ1lvdSBhcmUgaW4gUHJpdmFjeSBNb2RlLiBUaGlzIGFwcCB3aWxsIG5vdCBmdW5jdGlvbiBwcm9wZXJseS4gVHVybiBvZmYgUHJpdmFjeSBNb2RlLid9LCBmYWxzZSk7XG4gICAgICB9XG5cbiAgICB9O1xuXG4gICAgJHNjb3BlLnNlbGVjdGVkU2Vhc29uSWQgPSAoYW5ndWxhci5pc0RlZmluZWQoJHN0YXRlUGFyYW1zLnNlYXNvbklkKSkgPyBwYXJzZUludCgkc3RhdGVQYXJhbXMuc2Vhc29uSWQpIDogc2Vhc29uTW9kZWwuc2VsZWN0ZWRTZWFzb25JZDtcblxuICAgICRzY29wZS5pc0NvbGxhcHNlZCA9IHRydWU7XG5cbiAgICAkc2NvcGUudXNlckRhdGEgPSB1c2VyTW9kZWw7XG5cbiAgICAkc2NvcGUuY3JlZGVudGlhbHMgPSB7XG4gICAgICAgIGVtYWlsOiAnJyxcbiAgICAgICAgcGFzc3dvcmQ6ICcnXG4gICAgfTtcblxuICAgICRzY29wZS5pc1N0YXRlID0gZnVuY3Rpb24oc3RhdGVzKSB7XG4gICAgICByZXR1cm4gXy5pbmRleE9mKHN0YXRlcywgJHN0YXRlLmN1cnJlbnQubmFtZSkgPiAtMTtcbiAgICB9O1xuXG4gICAgJHNjb3BlLmhvbWUgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgJGxvY2F0aW9uLnVybCgnLycpO1xuICAgIH07XG5cbiAgICAkc2NvcGUuZmFxID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICRzdGF0ZS5nbygncHVibGljLmZhcS5nZW5lcmFsJyk7XG4gICAgfTtcblxuICAgICRzY29wZS5jb250YWN0VXMgPSBmdW5jdGlvbigpIHtcblxuICAgICAgdmFyIG1vZGFsSW5zdGFuY2UgPSAkbW9kYWwub3Blbih7XG4gICAgICAgIHRlbXBsYXRlVXJsOiAnbW9kdWxlcy9wdWJsaWMvYWJ1c2UvYWJ1c2UudHBsLmh0bWwnLFxuICAgICAgICBjb250cm9sbGVyOiAnQWJ1c2VDb250cm9sbGVyJ1xuICAgICAgfSk7XG5cbiAgICAgIG1vZGFsSW5zdGFuY2UucmVzdWx0LnRoZW4oZnVuY3Rpb24obWVzc2FnZSkge1xuICAgICAgICB1c2VyU2VydmljZS5jb250YWN0VXMobWVzc2FnZSk7XG4gICAgICB9LCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIG1lc3NhZ2VNb2RlbC5zZXRNZXNzYWdlKHsgdHlwZTogJ3dhcm5pbmcnLCBjb250ZW50OiAnQ29udGFjdCB1cyBjYW5jZWxsZWQnIH0sIGZhbHNlKTtcbiAgICAgIH0pO1xuXG4gICAgfTtcblxuICAgICRzY29wZS5yZWdpc3RlciA9IGZ1bmN0aW9uKCkge1xuXG4gICAgICB2YXIgbW9kYWxJbnN0YW5jZSA9ICRtb2RhbC5vcGVuKHtcbiAgICAgICAgdGVtcGxhdGVVcmw6ICdtb2R1bGVzL3B1YmxpYy9yZWdpc3Rlci9yZWdpc3Rlci50cGwuaHRtbCcsXG4gICAgICAgIGNvbnRyb2xsZXI6ICdSZWdpc3RlckNvbnRyb2xsZXInLFxuICAgICAgICBzaXplOiAnc20nXG4gICAgICB9KTtcblxuICAgICAgbW9kYWxJbnN0YW5jZS5yZXN1bHQudGhlbihmdW5jdGlvbihuZXdVc2VyKSB7XG4gICAgICAgIHVzZXJTZXJ2aWNlLmNyZWF0ZVVzZXIobmV3VXNlcik7XG4gICAgICB9LCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICRsb2cuZGVidWcoJ1JlZ2lzdGVyIG1vZGFsIGRpc21pc3NlZC4uLicpO1xuICAgICAgfSk7XG5cbiAgICB9O1xuXG4gICAgJHNjb3BlLnBsYXkgPSBmdW5jdGlvbihzZWFzb25JZCkge1xuICAgICAgJGxvY2F0aW9uLnVybCgnL3NlYXNvbi8nICsgc2Vhc29uSWQgKyAnL215L3RlYW1zJyk7XG4gICAgfTtcblxuICAgICRzY29wZS5qb2luTGVhZ3VlID0gZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgc2Vhc29uID0gc2Vhc29uTW9kZWwuZ2V0Q3VycmVudFNlYXNvbigpO1xuICAgICAgJGxvY2F0aW9uLnVybCgnL3NlYXNvbi8nICsgc2Vhc29uLmlkICsgJy9sZWFndWVzL3B1YmxpYycpO1xuICAgIH07XG5cbiAgICAkc2NvcGUuY3JlYXRlTGVhZ3VlID0gZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgc2Vhc29uID0gc2Vhc29uTW9kZWwuZ2V0Q3VycmVudFNlYXNvbigpO1xuICAgICAgJGxvY2F0aW9uLnVybCgnL3NlYXNvbi8nICsgc2Vhc29uLmlkICsgJy9sZWFndWUvbmV3Jyk7XG4gICAgfTtcblxuICAgICRzY29wZS51c2VyUHJvZmlsZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAkbG9jYXRpb24udXJsKCcvdXNlcicpO1xuICAgIH07XG5cbiAgICAkc2NvcGUuc2lnbmluID0gZnVuY3Rpb24oY3JlZGVudGlhbHMpIHtcbiAgICAgICAgJHNjb3BlLmRpc3BhdGNoKFwiU2lnbmluRXZlbnRcIiwgY3JlZGVudGlhbHMpO1xuICAgIH07XG5cbiAgICAkc2NvcGUuc2lnbmluR3Vlc3QgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgdXNlclNlcnZpY2Uuc2lnbmluR3Vlc3QoKTtcbiAgICB9O1xuXG4gICAgJHNjb3BlLnNpZ25vdXQgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgJHNjb3BlLmNyZWRlbnRpYWxzID0ge1xuICAgICAgICAgICAgZW1haWw6ICcnLFxuICAgICAgICAgICAgcGFzc3dvcmQ6ICcnXG4gICAgICAgIH07XG4gICAgICAgICRzY29wZS5kaXNwYXRjaChcIlNpZ25vdXRFdmVudFwiKTtcbiAgICB9O1xuXG4gICAgJHNjb3BlLnJlc2V0UGFzc3dvcmQgPSBmdW5jdGlvbigpIHtcblxuICAgICAgdmFyIG1vZGFsSW5zdGFuY2UgPSAkbW9kYWwub3Blbih7XG4gICAgICAgIHRlbXBsYXRlVXJsOiAnbW9kdWxlcy9wcml2YXRlL3VzZXIvcmVzZXQvdXNlci5yZXNldC50cGwuaHRtbCcsXG4gICAgICAgIGNvbnRyb2xsZXI6ICdVc2VyUmVzZXRDb250cm9sbGVyJ1xuICAgICAgfSk7XG5cbiAgICAgIG1vZGFsSW5zdGFuY2UucmVzdWx0LnRoZW4oZnVuY3Rpb24gKGVtYWlsKSB7XG4gICAgICAgIHVzZXJTZXJ2aWNlLnJlc2V0VXNlcihlbWFpbCk7XG4gICAgICB9LCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIG1lc3NhZ2VNb2RlbC5zZXRNZXNzYWdlKHsgdHlwZTogJ3dhcm5pbmcnLCBjb250ZW50OiAnUmVzZXQgcGFzc3dvcmQgY2FuY2VsbGVkJyB9LCBmYWxzZSk7XG4gICAgICB9KTtcbiAgICB9O1xuXG4gICAgJHJvb3RTY29wZS4kb24oXCIkdmlld0NvbnRlbnRMb2FkZWRcIiwgZnVuY3Rpb24oKSB7XG4vLyAgICAgIHNjcm9sbFRvVG9wKCk7XG4gICAgfSk7XG5cbiAgICB2YXIgaW5pdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY2hlY2tIdG1sNVN0b3JhZ2UoKTtcbiAgICB9O1xuICAgIGluaXQoKTtcbn07XG5cbkhlYWRlckNvbnRyb2xsZXIuJGluamVjdCA9IFsnJHJvb3RTY29wZScsICckc2NvcGUnLCAnJGxvZycsICckbG9jYXRpb24nLCAnJG1vZGFsJywgJyRzdGF0ZScsICckYW5jaG9yU2Nyb2xsJywgJyRzdGF0ZVBhcmFtcycsICd1c2VyU2VydmljZScsICdsZWFndWVTZXJ2aWNlJywgJ3VzZXJNb2RlbCcsICdtZXNzYWdlTW9kZWwnLCAnc2Vhc29uTW9kZWwnXTtcbm1vZHVsZS5leHBvcnRzID0gSGVhZGVyQ29udHJvbGxlcjtcbiIsInZhciBNZXNzYWdlQ29udHJvbGxlciA9IGZ1bmN0aW9uKCRyb290U2NvcGUsICRzY29wZSwgJGxvZywgbWVzc2FnZU1vZGVsKSB7XG5cbiAgICAkc2NvcGUubWVzc2FnZURhdGEgPSBtZXNzYWdlTW9kZWw7XG5cbiAgICAkc2NvcGUuZGlzbWlzc01lc3NhZ2UgPSBmdW5jdGlvbihtZXNzYWdlKSB7XG4gICAgICAgIG1lc3NhZ2UucmVzZXRNZXNzYWdlKCk7XG4gICAgfTtcblxuICAgICRzY29wZS5zaGFyZUxlYWd1ZUZCID0gZnVuY3Rpb24oKSB7XG4gICAgICAkcm9vdFNjb3BlLiRicm9hZGNhc3QoJ21lc3NhZ2VDb250cm9sbGVyOjpzaGFyZUxlYWd1ZUZCJyk7XG4gICAgfTtcblxuICAgICRzY29wZS5zaGFyZVRlYW1GQiA9IGZ1bmN0aW9uKCkge1xuICAgICAgJHJvb3RTY29wZS4kYnJvYWRjYXN0KCdtZXNzYWdlQ29udHJvbGxlcjo6c2hhcmVUZWFtRkInKTtcbiAgICB9O1xuXG4gICAgJHNjb3BlLnNoYXJlVXNlckZCID0gZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgb3B0aW9ucyA9IHtcbiAgICAgICAgbWV0aG9kOiBcImZlZWRcIixcbiAgICAgICAgbGluazogXCJodHRwczovL3d3dy5sb3Nlb3Jnb2hvbWUuY29tXCIsXG4gICAgICAgIHBpY3R1cmU6IFwiaHR0cHM6Ly93d3cubG9zZW9yZ29ob21lLmNvbS9yZXNvdXJjZXMvYXNzZXRzL2ltYWdlcy9iYWNrZ3JvdW5kLXNtYWxsLmpwZ1wiLFxuICAgICAgICBuYW1lOiBcIkxvc2luZyBpcyBFdmVyeXRoaW5nXCIsXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIkZyZWUgTkZMLCBOQkEsIE5ITCwgTUxCIG9yIE1MUyBzdXJ2aXZvciBhbmQgcGljaydlbSBsZWFndWVzIGFyZSB3YWl0aW5nIGZvciB5b3UuXCJcbiAgICAgIH07XG4gICAgICBGQi51aShvcHRpb25zKTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogSW52b2tlZCBvbiBzdGFydHVwLCBsaWtlIGEgY29uc3RydWN0b3IuXG4gICAgICovXG4gICAgdmFyIGluaXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICRsb2cuZGVidWcoXCJtZXNzYWdlIGNvbnRyb2xsZXJcIik7XG4gICAgfTtcbiAgICBpbml0KCk7XG59O1xuXG5NZXNzYWdlQ29udHJvbGxlci4kaW5qZWN0ID0gWyckcm9vdFNjb3BlJywgJyRzY29wZScsICckbG9nJywgJ21lc3NhZ2VNb2RlbCddO1xubW9kdWxlLmV4cG9ydHMgPSBNZXNzYWdlQ29udHJvbGxlcjtcbiIsInZhciBGb290ZXJDb250cm9sbGVyID0gZnVuY3Rpb24oJHNjb3BlLCAkbG9nLCAkbG9jYXRpb24pIHtcblxuICAkc2NvcGUuaG9tZSA9IGZ1bmN0aW9uKCkge1xuICAgICRsb2NhdGlvbi51cmwoJy8nKTtcbiAgfTtcblxuICAvKipcbiAgICogSW52b2tlZCBvbiBzdGFydHVwLCBsaWtlIGEgY29uc3RydWN0b3IuXG4gICAqL1xuICB2YXIgaW5pdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAkbG9nLmRlYnVnKFwiZm9vdGVyIGNvbnRyb2xsZXJcIik7XG4gIH07XG4gIGluaXQoKTtcbn07XG5cbkZvb3RlckNvbnRyb2xsZXIuJGluamVjdCA9IFsnJHNjb3BlJywgJyRsb2cnLCAnJGxvY2F0aW9uJ107XG5tb2R1bGUuZXhwb3J0cyA9IEZvb3RlckNvbnRyb2xsZXI7XG4iLCJ2YXIgQ29uZmlybUNvbnRyb2xsZXIgPSBmdW5jdGlvbihtZXNzYWdlLCAkc2NvcGUsICRsb2csICRtb2RhbEluc3RhbmNlKSB7XG5cbiAgJHNjb3BlLm1lc3NhZ2UgPSBtZXNzYWdlO1xuXG4gICRzY29wZS5jb25maXJtID0gZnVuY3Rpb24oKSB7XG4gICAgJG1vZGFsSW5zdGFuY2UuY2xvc2UoKTtcbiAgfTtcblxuICAkc2NvcGUuY2FuY2VsID0gZnVuY3Rpb24gKCkge1xuICAgICRtb2RhbEluc3RhbmNlLmRpc21pc3MoJ2NhbmNlbCcpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBJbnZva2VkIG9uIHN0YXJ0dXAsIGxpa2UgYSBjb25zdHJ1Y3Rvci5cbiAgICovXG4gIHZhciBpbml0ID0gZnVuY3Rpb24gKCkge1xuICAgICRsb2cuZGVidWcoXCJjb25maXJtIGNvbnRyb2xsZXJcIik7XG4gIH07XG4gIGluaXQoKTtcblxufTtcblxuQ29uZmlybUNvbnRyb2xsZXIuJGluamVjdCA9IFsnbWVzc2FnZScsICckc2NvcGUnLCAnJGxvZycsICckbW9kYWxJbnN0YW5jZSddO1xubW9kdWxlLmV4cG9ydHMgPSBDb25maXJtQ29udHJvbGxlcjtcbiIsInZhciBBcHBsaWNhdGlvblNlcnZpY2UgPSBmdW5jdGlvbigkd2luZG93LCAkbG9jYXRpb24pIHtcblxuICAgICAgICAvKipcbiAgICAgICAgICogIEFwcGxpY2F0aW9uIFN0YXJ0dXAgUHJvY2Vzc1xuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5zdGFydHVwID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBzdGFydHVwUHJvY2VzcygpO1xuICAgICAgICB9O1xuXG4gICAgICAgIHZhciBzdGFydHVwUHJvY2VzcyA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgIGZvcmNlU3NsKCk7XG4gICAgICAgIH07XG5cbiAgICAgICAgdmFyIGZvcmNlU3NsID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgIGlmICgkbG9jYXRpb24uaG9zdCgpID09ICdsb2NhbGhvc3QnKSByZXR1cm47XG4gICAgICAgICAgaWYgKCRsb2NhdGlvbi5wcm90b2NvbCgpICE9ICdodHRwcycpIHtcbiAgICAgICAgICAgICR3aW5kb3cubG9jYXRpb24uaHJlZiA9ICRsb2NhdGlvbi5hYnNVcmwoKS5yZXBsYWNlKCdodHRwJywgJ2h0dHBzJyk7XG4gICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgfTtcblxuQXBwbGljYXRpb25TZXJ2aWNlLiRpbmplY3QgPSBbJyR3aW5kb3cnLCAnJGxvY2F0aW9uJ107XG5tb2R1bGUuZXhwb3J0cyA9IEFwcGxpY2F0aW9uU2VydmljZTtcbiIsInZhciBEYXRlVXRpbHMgPSBmdW5jdGlvbigpIHtcblxuICB0aGlzLmRhdGVGb3JtYXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgLy8gc291cmNlOiBodHRwOi8vYmxvZy5zdGV2ZW5sZXZpdGhhbi5jb20vYXJjaGl2ZXMvZGF0ZS10aW1lLWZvcm1hdFxuICAgIHZhclx0dG9rZW4gPSAvZHsxLDR9fG17MSw0fXx5eSg/Onl5KT98KFtIaE1zVHRdKVxcMT98W0xsb1NaXXxcIlteXCJdKlwifCdbXiddKicvZyxcbiAgICAgIHRpbWV6b25lID0gL1xcYig/OltQTUNFQV1bU0RQXVR8KD86UGFjaWZpY3xNb3VudGFpbnxDZW50cmFsfEVhc3Rlcm58QXRsYW50aWMpICg/OlN0YW5kYXJkfERheWxpZ2h0fFByZXZhaWxpbmcpIFRpbWV8KD86R01UfFVUQykoPzpbLStdXFxkezR9KT8pXFxiL2csXG4gICAgICB0aW1lem9uZUNsaXAgPSAvW14tK1xcZEEtWl0vZyxcbiAgICAgIHBhZCA9IGZ1bmN0aW9uICh2YWwsIGxlbikge1xuICAgICAgICB2YWwgPSBTdHJpbmcodmFsKTtcbiAgICAgICAgbGVuID0gbGVuIHx8IDI7XG4gICAgICAgIHdoaWxlICh2YWwubGVuZ3RoIDwgbGVuKSB2YWwgPSBcIjBcIiArIHZhbDtcbiAgICAgICAgcmV0dXJuIHZhbDtcbiAgICAgIH07XG5cbiAgICAvLyBSZWdleGVzIGFuZCBzdXBwb3J0aW5nIGZ1bmN0aW9ucyBhcmUgY2FjaGVkIHRocm91Z2ggY2xvc3VyZVxuICAgIHJldHVybiBmdW5jdGlvbiAoZGF0ZSwgbWFzaywgdXRjKSB7XG4gICAgICB2YXIgZEYgPSB0aGlzLmRhdGVGb3JtYXQ7XG5cbiAgICAgIC8vIFlvdSBjYW4ndCBwcm92aWRlIHV0YyBpZiB5b3Ugc2tpcCBvdGhlciBhcmdzICh1c2UgdGhlIFwiVVRDOlwiIG1hc2sgcHJlZml4KVxuICAgICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT0gMSAmJiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoZGF0ZSkgPT0gXCJbb2JqZWN0IFN0cmluZ11cIiAmJiAhL1xcZC8udGVzdChkYXRlKSkge1xuICAgICAgICBtYXNrID0gZGF0ZTtcbiAgICAgICAgZGF0ZSA9IHVuZGVmaW5lZDtcbiAgICAgIH1cblxuICAgICAgLy8gUGFzc2luZyBkYXRlIHRocm91Z2ggRGF0ZSBhcHBsaWVzIERhdGUucGFyc2UsIGlmIG5lY2Vzc2FyeVxuICAgICAgZGF0ZSA9IGRhdGUgPyBuZXcgRGF0ZShkYXRlKSA6IG5ldyBEYXRlO1xuICAgICAgaWYgKGlzTmFOKGRhdGUpKSB0aHJvdyBTeW50YXhFcnJvcihcImludmFsaWQgZGF0ZVwiKTtcblxuICAgICAgbWFzayA9IFN0cmluZyhkRi5tYXNrc1ttYXNrXSB8fCBtYXNrIHx8IGRGLm1hc2tzW1wiZGVmYXVsdFwiXSk7XG5cbiAgICAgIC8vIEFsbG93IHNldHRpbmcgdGhlIHV0YyBhcmd1bWVudCB2aWEgdGhlIG1hc2tcbiAgICAgIGlmIChtYXNrLnNsaWNlKDAsIDQpID09IFwiVVRDOlwiKSB7XG4gICAgICAgIG1hc2sgPSBtYXNrLnNsaWNlKDQpO1xuICAgICAgICB1dGMgPSB0cnVlO1xuICAgICAgfVxuXG4gICAgICB2YXJcdF8gPSB1dGMgPyBcImdldFVUQ1wiIDogXCJnZXRcIixcbiAgICAgICAgZCA9IGRhdGVbXyArIFwiRGF0ZVwiXSgpLFxuICAgICAgICBEID0gZGF0ZVtfICsgXCJEYXlcIl0oKSxcbiAgICAgICAgbSA9IGRhdGVbXyArIFwiTW9udGhcIl0oKSxcbiAgICAgICAgeSA9IGRhdGVbXyArIFwiRnVsbFllYXJcIl0oKSxcbiAgICAgICAgSCA9IGRhdGVbXyArIFwiSG91cnNcIl0oKSxcbiAgICAgICAgTSA9IGRhdGVbXyArIFwiTWludXRlc1wiXSgpLFxuICAgICAgICBzID0gZGF0ZVtfICsgXCJTZWNvbmRzXCJdKCksXG4gICAgICAgIEwgPSBkYXRlW18gKyBcIk1pbGxpc2Vjb25kc1wiXSgpLFxuICAgICAgICBvID0gdXRjID8gMCA6IGRhdGUuZ2V0VGltZXpvbmVPZmZzZXQoKSxcbiAgICAgICAgZmxhZ3MgPSB7XG4gICAgICAgICAgZDogICAgZCxcbiAgICAgICAgICBkZDogICBwYWQoZCksXG4gICAgICAgICAgZGRkOiAgZEYuaTE4bi5kYXlOYW1lc1tEXSxcbiAgICAgICAgICBkZGRkOiBkRi5pMThuLmRheU5hbWVzW0QgKyA3XSxcbiAgICAgICAgICBtOiAgICBtICsgMSxcbiAgICAgICAgICBtbTogICBwYWQobSArIDEpLFxuICAgICAgICAgIG1tbTogIGRGLmkxOG4ubW9udGhOYW1lc1ttXSxcbiAgICAgICAgICBtbW1tOiBkRi5pMThuLm1vbnRoTmFtZXNbbSArIDEyXSxcbiAgICAgICAgICB5eTogICBTdHJpbmcoeSkuc2xpY2UoMiksXG4gICAgICAgICAgeXl5eTogeSxcbiAgICAgICAgICBoOiAgICBIICUgMTIgfHwgMTIsXG4gICAgICAgICAgaGg6ICAgcGFkKEggJSAxMiB8fCAxMiksXG4gICAgICAgICAgSDogICAgSCxcbiAgICAgICAgICBISDogICBwYWQoSCksXG4gICAgICAgICAgTTogICAgTSxcbiAgICAgICAgICBNTTogICBwYWQoTSksXG4gICAgICAgICAgczogICAgcyxcbiAgICAgICAgICBzczogICBwYWQocyksXG4gICAgICAgICAgbDogICAgcGFkKEwsIDMpLFxuICAgICAgICAgIEw6ICAgIHBhZChMID4gOTkgPyBNYXRoLnJvdW5kKEwgLyAxMCkgOiBMKSxcbiAgICAgICAgICB0OiAgICBIIDwgMTIgPyBcImFcIiAgOiBcInBcIixcbiAgICAgICAgICB0dDogICBIIDwgMTIgPyBcImFtXCIgOiBcInBtXCIsXG4gICAgICAgICAgVDogICAgSCA8IDEyID8gXCJBXCIgIDogXCJQXCIsXG4gICAgICAgICAgVFQ6ICAgSCA8IDEyID8gXCJBTVwiIDogXCJQTVwiLFxuICAgICAgICAgIFo6ICAgIHV0YyA/IFwiVVRDXCIgOiAoU3RyaW5nKGRhdGUpLm1hdGNoKHRpbWV6b25lKSB8fCBbXCJcIl0pLnBvcCgpLnJlcGxhY2UodGltZXpvbmVDbGlwLCBcIlwiKSxcbiAgICAgICAgICBvOiAgICAobyA+IDAgPyBcIi1cIiA6IFwiK1wiKSArIHBhZChNYXRoLmZsb29yKE1hdGguYWJzKG8pIC8gNjApICogMTAwICsgTWF0aC5hYnMobykgJSA2MCwgNCksXG4gICAgICAgICAgUzogICAgW1widGhcIiwgXCJzdFwiLCBcIm5kXCIsIFwicmRcIl1bZCAlIDEwID4gMyA/IDAgOiAoZCAlIDEwMCAtIGQgJSAxMCAhPSAxMCkgKiBkICUgMTBdXG4gICAgICAgIH07XG5cbiAgICAgIHJldHVybiBtYXNrLnJlcGxhY2UodG9rZW4sIGZ1bmN0aW9uICgkMCkge1xuICAgICAgICByZXR1cm4gJDAgaW4gZmxhZ3MgPyBmbGFnc1skMF0gOiAkMC5zbGljZSgxLCAkMC5sZW5ndGggLSAxKTtcbiAgICAgIH0pO1xuICAgIH07XG4gIH0oKTtcblxuICB0aGlzLmRhdGVGb3JtYXQubWFza3MgPSB7XG4gICAgXCJkZWZhdWx0XCI6ICAgICAgXCJkZGQgbW1tIGRkIHl5eXkgSEg6TU06c3NcIixcbiAgICBzaG9ydERhdGU6ICAgICAgXCJtL2QveXlcIixcbiAgICBtZWRpdW1EYXRlOiAgICAgXCJtbW0gZCwgeXl5eVwiLFxuICAgIGxvbmdEYXRlOiAgICAgICBcIm1tbW0gZCwgeXl5eVwiLFxuICAgIGZ1bGxEYXRlOiAgICAgICBcImRkZGQsIG1tbW0gZCwgeXl5eVwiLFxuICAgIHNob3J0VGltZTogICAgICBcImg6TU0gVFRcIixcbiAgICBtZWRpdW1UaW1lOiAgICAgXCJoOk1NOnNzIFRUXCIsXG4gICAgbG9uZ1RpbWU6ICAgICAgIFwiaDpNTTpzcyBUVCBaXCIsXG4gICAgaXNvRGF0ZTogICAgICAgIFwieXl5eS1tbS1kZFwiLFxuICAgIGlzb1RpbWU6ICAgICAgICBcIkhIOk1NOnNzXCIsXG4gICAgaXNvRGF0ZVRpbWU6ICAgIFwieXl5eS1tbS1kZCdUJ0hIOk1NOnNzXCIsXG4gICAgaXNvVXRjRGF0ZVRpbWU6IFwiVVRDOnl5eXktbW0tZGQnVCdISDpNTTpzcydaJ1wiXG4gIH07XG5cbiAgdGhpcy5kYXRlRm9ybWF0LmkxOG4gPSB7XG4gICAgZGF5TmFtZXM6IFtcbiAgICAgIFwiU3VuXCIsIFwiTW9uXCIsIFwiVHVlXCIsIFwiV2VkXCIsIFwiVGh1XCIsIFwiRnJpXCIsIFwiU2F0XCIsXG4gICAgICBcIlN1bmRheVwiLCBcIk1vbmRheVwiLCBcIlR1ZXNkYXlcIiwgXCJXZWRuZXNkYXlcIiwgXCJUaHVyc2RheVwiLCBcIkZyaWRheVwiLCBcIlNhdHVyZGF5XCJcbiAgICBdLFxuICAgIG1vbnRoTmFtZXM6IFtcbiAgICAgIFwiSmFuXCIsIFwiRmViXCIsIFwiTWFyXCIsIFwiQXByXCIsIFwiTWF5XCIsIFwiSnVuXCIsIFwiSnVsXCIsIFwiQXVnXCIsIFwiU2VwXCIsIFwiT2N0XCIsIFwiTm92XCIsIFwiRGVjXCIsXG4gICAgICBcIkphbnVhcnlcIiwgXCJGZWJydWFyeVwiLCBcIk1hcmNoXCIsIFwiQXByaWxcIiwgXCJNYXlcIiwgXCJKdW5lXCIsIFwiSnVseVwiLCBcIkF1Z3VzdFwiLCBcIlNlcHRlbWJlclwiLCBcIk9jdG9iZXJcIiwgXCJOb3ZlbWJlclwiLCBcIkRlY2VtYmVyXCJcbiAgICBdXG4gIH07XG5cbn07XG5cbkRhdGVVdGlscy4kaW5qZWN0ID0gW107XG5tb2R1bGUuZXhwb3J0cyA9IERhdGVVdGlscztcbiIsInZhciBGb2N1c0RpcmVjdGl2ZSA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciBGT0NVU19DTEFTUyA9ICduZy1mb2N1c2VkJztcbiAgICByZXR1cm4ge1xuICAgICAgICByZXN0cmljdDogJ0EnLFxuICAgICAgICByZXF1aXJlOiAnbmdNb2RlbCcsXG4gICAgICAgIGxpbms6IGZ1bmN0aW9uKHNjb3BlLCBlbGVtZW50LCBhdHRycywgY3RybCkge1xuICAgICAgICAgICAgY3RybC4kZm9jdXNlZCA9IGZhbHNlO1xuICAgICAgICAgICAgZWxlbWVudC5iaW5kKCdmb2N1cycsIGZ1bmN0aW9uKGV2dCkge1xuICAgICAgICAgICAgICAgIGVsZW1lbnQuYWRkQ2xhc3MoRk9DVVNfQ0xBU1MpO1xuICAgICAgICAgICAgICAgIHNjb3BlLiRhcHBseShmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgY3RybC4kZm9jdXNlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KS5iaW5kKCdibHVyJywgZnVuY3Rpb24oZXZ0KSB7XG4gICAgICAgICAgICAgICAgZWxlbWVudC5yZW1vdmVDbGFzcyhGT0NVU19DTEFTUyk7XG4gICAgICAgICAgICAgICAgc2NvcGUuJGFwcGx5KGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICBjdHJsLiRmb2N1c2VkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gRm9jdXNEaXJlY3RpdmU7XG4iLCJ2YXIgRm9ybWF0dGVkRGF0ZURpcmVjdGl2ZSA9IGZ1bmN0aW9uKGRhdGVVdGlscykge1xuICByZXR1cm4ge1xuICAgIGxpbms6IGZ1bmN0aW9uIChzY29wZSwgZWxlbWVudCwgYXR0cnMsIGN0cmwpIHtcbiAgICAgIGN0cmwuJGZvcm1hdHRlcnMudW5zaGlmdChmdW5jdGlvbiAobW9kZWxWYWx1ZSkge1xuICAgICAgICByZXR1cm4gZGF0ZVV0aWxzLmRhdGVGb3JtYXQobW9kZWxWYWx1ZSwgXCJkZGQgbS9kL3l5IGg6TU0gdHQgKFopXCIpXG4gICAgICB9KTtcblxuICAgICAgY3RybC4kcGFyc2Vycy51bnNoaWZ0KGZ1bmN0aW9uICh2aWV3VmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIGRhdGVVdGlscy5kYXRlRm9ybWF0KG1vZGVsVmFsdWUsIFwiZGRkIG0vZC95eSBoOk1NIHR0IChaKVwiKVxuICAgICAgfSk7XG4gICAgfSxcbiAgICByZXN0cmljdDogJ0EnLFxuICAgIHJlcXVpcmU6ICduZ01vZGVsJ1xuICB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IEZvcm1hdHRlZERhdGVEaXJlY3RpdmU7XG4iLCJ2YXIgcmNTdWJtaXREaXJlY3RpdmUgPSB7XG4gICdyY1N1Ym1pdCc6IFsnJHBhcnNlJywgZnVuY3Rpb24gKCRwYXJzZSkge1xuICAgIHJldHVybiB7XG4gICAgICByZXN0cmljdDogJ0EnLFxuICAgICAgcmVxdWlyZTogWydyY1N1Ym1pdCcsICc/Zm9ybSddLFxuICAgICAgY29udHJvbGxlcjogWyckc2NvcGUnLCBmdW5jdGlvbiAoJHNjb3BlKSB7XG5cbiAgICAgICAgdmFyIGZvcm1Db250cm9sbGVyID0gbnVsbDtcbiAgICAgICAgdmFyIGF0dGVtcHRIYW5kbGVycyA9IFtdO1xuXG4gICAgICAgIHRoaXMuYXR0ZW1wdGVkID0gZmFsc2U7XG5cbiAgICAgICAgdGhpcy5vbkF0dGVtcHQgPSBmdW5jdGlvbihoYW5kbGVyKSB7XG4gICAgICAgICAgYXR0ZW1wdEhhbmRsZXJzLnB1c2goaGFuZGxlcik7XG4gICAgICAgIH07XG5cbiAgICAgICAgdGhpcy5zZXRBdHRlbXB0ZWQgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICB0aGlzLmF0dGVtcHRlZCA9IHRydWU7XG5cbiAgICAgICAgICBhbmd1bGFyLmZvckVhY2goYXR0ZW1wdEhhbmRsZXJzLCBmdW5jdGlvbiAoaGFuZGxlcikge1xuICAgICAgICAgICAgaGFuZGxlcigpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuXG4gICAgICAgIHRoaXMuc2V0Rm9ybUNvbnRyb2xsZXIgPSBmdW5jdGlvbihjb250cm9sbGVyKSB7XG4gICAgICAgICAgZm9ybUNvbnRyb2xsZXIgPSBjb250cm9sbGVyO1xuICAgICAgICB9O1xuXG4gICAgICAgIHRoaXMubmVlZHNBdHRlbnRpb24gPSBmdW5jdGlvbiAoZmllbGRNb2RlbENvbnRyb2xsZXIpIHtcbiAgICAgICAgICBpZiAoIWZvcm1Db250cm9sbGVyKSByZXR1cm4gZmFsc2U7XG5cbiAgICAgICAgICBpZiAoZmllbGRNb2RlbENvbnRyb2xsZXIpIHtcbiAgICAgICAgICAgIHJldHVybiBmaWVsZE1vZGVsQ29udHJvbGxlci4kaW52YWxpZCAmJlxuICAgICAgICAgICAgICAoZmllbGRNb2RlbENvbnRyb2xsZXIuJGRpcnR5IHx8IHRoaXMuYXR0ZW1wdGVkKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIGZvcm1Db250cm9sbGVyICYmIGZvcm1Db250cm9sbGVyLiRpbnZhbGlkICYmXG4gICAgICAgICAgICAgIChmb3JtQ29udHJvbGxlci4kZGlydHkgfHwgdGhpcy5hdHRlbXB0ZWQpO1xuICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgIH1dLFxuICAgICAgY29tcGlsZTogZnVuY3Rpb24oY0VsZW1lbnQsIGNBdHRyaWJ1dGVzLCB0cmFuc2NsdWRlKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgcHJlOiBmdW5jdGlvbihzY29wZSwgZm9ybUVsZW1lbnQsIGF0dHJpYnV0ZXMsIGNvbnRyb2xsZXJzKSB7XG5cbiAgICAgICAgICAgIHZhciBzdWJtaXRDb250cm9sbGVyID0gY29udHJvbGxlcnNbMF07XG4gICAgICAgICAgICB2YXIgZm9ybUNvbnRyb2xsZXIgPSAoY29udHJvbGxlcnMubGVuZ3RoID4gMSkgPyBjb250cm9sbGVyc1sxXSA6IG51bGw7XG5cbiAgICAgICAgICAgIHN1Ym1pdENvbnRyb2xsZXIuc2V0Rm9ybUNvbnRyb2xsZXIoZm9ybUNvbnRyb2xsZXIpO1xuXG4gICAgICAgICAgICBzY29wZS5yYyA9IHNjb3BlLnJjIHx8IHt9O1xuICAgICAgICAgICAgc2NvcGUucmNbYXR0cmlidXRlcy5uYW1lXSA9IHN1Ym1pdENvbnRyb2xsZXI7XG4gICAgICAgICAgfSxcbiAgICAgICAgICBwb3N0OiBmdW5jdGlvbihzY29wZSwgZm9ybUVsZW1lbnQsIGF0dHJpYnV0ZXMsIGNvbnRyb2xsZXJzKSB7XG5cbiAgICAgICAgICAgIHZhciBzdWJtaXRDb250cm9sbGVyID0gY29udHJvbGxlcnNbMF07XG4gICAgICAgICAgICB2YXIgZm9ybUNvbnRyb2xsZXIgPSAoY29udHJvbGxlcnMubGVuZ3RoID4gMSkgPyBjb250cm9sbGVyc1sxXSA6IG51bGw7XG4gICAgICAgICAgICB2YXIgZm4gPSAkcGFyc2UoYXR0cmlidXRlcy5yY1N1Ym1pdCk7XG5cbiAgICAgICAgICAgIGZvcm1FbGVtZW50LmJpbmQoJ3N1Ym1pdCcsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgc3VibWl0Q29udHJvbGxlci5zZXRBdHRlbXB0ZWQoKTtcbiAgICAgICAgICAgICAgaWYgKCFzY29wZS4kJHBoYXNlKSBzY29wZS4kYXBwbHkoKTtcblxuICAgICAgICAgICAgICBpZiAoIWZvcm1Db250cm9sbGVyLiR2YWxpZCkgcmV0dXJuIGZhbHNlO1xuXG4gICAgICAgICAgICAgIHNjb3BlLiRhcHBseShmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICBmbihzY29wZSwgeyRldmVudDpldmVudH0pO1xuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICB9O1xuICB9XVxufTsiLCJ2YXIgcmNWZXJpZnlTZXREaXJlY3RpdmUgPSB7XG4gICdyY1ZlcmlmeVNldCc6IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgcmVzdHJpY3Q6ICdBJyxcbiAgICAgIHJlcXVpcmU6IFsnXnJjU3VibWl0JywgJ25nTW9kZWwnXSxcbiAgICAgIGxpbms6IGZ1bmN0aW9uIChzY29wZSwgZWxlbWVudCwgYXR0cmlidXRlcywgY29udHJvbGxlcnMpIHtcbiAgICAgICAgdmFyIHN1Ym1pdENvbnRyb2xsZXIgPSBjb250cm9sbGVyc1swXTtcbiAgICAgICAgdmFyIG1vZGVsQ29udHJvbGxlciA9IGNvbnRyb2xsZXJzWzFdO1xuXG4gICAgICAgIHN1Ym1pdENvbnRyb2xsZXIub25BdHRlbXB0KGZ1bmN0aW9uKCkge1xuICAgICAgICAgIG1vZGVsQ29udHJvbGxlci4kc2V0Vmlld1ZhbHVlKGVsZW1lbnQudmFsKCkpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9O1xuICB9XG59OyIsIi8qIGF0dHJpYnV0ZSB3aWxsIGVuZm9yY2UgYSByZWcgZXggcGF0dGVybiBpZiB0aGUgZmllbGQgaXMgbWFya2VkIGFzIG5nLXJlcXVpcmVkICovXG52YXIgUmVxdWlyZWRQYXR0ZXJuRGlyZWN0aXZlID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgcmVzdHJpY3Q6IFwiQVwiLFxuICAgICAgICByZXF1aXJlOiBcIm5nTW9kZWxcIixcbiAgICAgICAgbGluazogZnVuY3Rpb24oc2NvcGUsIGVsLCBhdHRycywgbmdNb2RlbCkge1xuICAgICAgICAgICAgdmFyIHZhbGlkYXRvciwgcGF0dGVyblZhbGlkYXRvcixcbiAgICAgICAgICAgICAgICBwYXR0ZXJuID0gYXR0cnMucnBhdHRlcm4sXG4gICAgICAgICAgICAgICAgcmVxdWlyZWQgPSB0cnVlO1xuXG4gICAgICAgICAgICBpZiggcGF0dGVybiApIHtcbiAgICAgICAgICAgICAgICBpZiAocGF0dGVybi5tYXRjaCgvXlxcLyguKilcXC8kLykpIHtcbiAgICAgICAgICAgICAgICAgICAgcGF0dGVybiA9IG5ldyBSZWdFeHAocGF0dGVybi5zdWJzdHIoMSwgcGF0dGVybi5sZW5ndGggLSAyKSk7XG4gICAgICAgICAgICAgICAgICAgIHBhdHRlcm5WYWxpZGF0b3IgPSBmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHZhbGlkYXRlKHBhdHRlcm4sIHZhbHVlKVxuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcGF0dGVyblZhbGlkYXRvciA9IGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgcGF0dGVybk9iaiA9IHNjb3BlLiRldmFsKHBhdHRlcm4pO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFwYXR0ZXJuT2JqIHx8ICFwYXR0ZXJuT2JqLnRlc3QpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0V4cGVjdGVkICcgKyBwYXR0ZXJuICsgJyB0byBiZSBhIFJlZ0V4cCBidXQgd2FzICcgKyBwYXR0ZXJuT2JqKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB2YWxpZGF0ZShwYXR0ZXJuT2JqLCB2YWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBuZ01vZGVsLiRmb3JtYXR0ZXJzLnB1c2gocGF0dGVyblZhbGlkYXRvcik7XG4gICAgICAgICAgICBuZ01vZGVsLiRwYXJzZXJzLnB1c2gocGF0dGVyblZhbGlkYXRvcik7XG5cbiAgICAgICAgICAgIGF0dHJzLiRvYnNlcnZlKFwicmVxdWlyZWRcIiwgZnVuY3Rpb24obmV3dmFsKSB7XG4gICAgICAgICAgICAgICAgcmVxdWlyZWQgPSBuZXd2YWw7XG4gICAgICAgICAgICAgICAgcGF0dGVyblZhbGlkYXRvcihuZ01vZGVsLiR2aWV3VmFsdWUpO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGZ1bmN0aW9uIHZhbGlkYXRlKHJlZ2V4cCwgdmFsdWUpIHtcbiAgICAgICAgICAgICAgICBpZiggdmFsdWUgPT0gbnVsbCB8fCB2YWx1ZSA9PT0gXCJcIiB8fCAhcmVxdWlyZWQgfHwgcmVnZXhwLnRlc3QodmFsdWUpICkge1xuICAgICAgICAgICAgICAgICAgICBuZ01vZGVsLiRzZXRWYWxpZGl0eSgncGF0dGVybicsIHRydWUpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBuZ01vZGVsLiRzZXRWYWxpZGl0eSgncGF0dGVybicsIGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gUmVxdWlyZWRQYXR0ZXJuRGlyZWN0aXZlOyIsInZhciBNYXRjaERpcmVjdGl2ZSA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB7XG4gICAgICAgIHJlcXVpcmU6ICduZ01vZGVsJyxcbiAgICAgICAgbGluazogZnVuY3Rpb24gKHNjb3BlLCBlbGVtLCBhdHRycywgY3RybCkge1xuICAgICAgICAgICAgc2NvcGUuJHdhdGNoKCdbJyArIGF0dHJzLm5nTW9kZWwgKyAnLCAnICsgYXR0cnMubWF0Y2ggKyAnXScsIGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgdmFyIGEgPSB2YWx1ZVswXSB8fCAnJztcbiAgICAgICAgICAgICAgICB2YXIgYiA9IHZhbHVlWzFdIHx8ICcnO1xuICAgICAgICAgICAgICAgIGN0cmwuJHNldFZhbGlkaXR5KCdtYXRjaCcsIGEgPT09IGIpO1xuICAgICAgICAgICAgfSwgdHJ1ZSk7XG4gICAgICAgIH1cbiAgICB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IE1hdGNoRGlyZWN0aXZlO1xuIiwidmFyIFNlbGVjdE9uQ2xpY2tEaXJlY3RpdmUgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIHtcbiAgICByZXN0cmljdDogJ0EnLFxuICAgIGxpbms6IGZ1bmN0aW9uIChzY29wZSwgZWxlbWVudCwgYXR0cnMpIHtcbiAgICAgIGVsZW1lbnQub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLnNlbGVjdCgpO1xuICAgICAgfSk7XG4gICAgfVxuICB9O1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBTZWxlY3RPbkNsaWNrRGlyZWN0aXZlO1xuIiwidmFyIFJlZ2lzdGVyVGVybXNDb250cm9sbGVyID0gZnVuY3Rpb24oJG1vZGFsSW5zdGFuY2UsICRzY29wZSwgJGxvZykge1xuXG4gICRzY29wZS5jbG9zZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAkbW9kYWxJbnN0YW5jZS5kaXNtaXNzKCdjbG9zZScpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBJbnZva2VkIG9uIHN0YXJ0dXAsIGxpa2UgYSBjb25zdHJ1Y3Rvci5cbiAgICovXG4gIHZhciBpbml0ID0gZnVuY3Rpb24gKCkge1xuICAgICRsb2cuZGVidWcoXCJyZWdpc3RlciB0ZXJtcyBhbmQgY29uZGl0aW9ucyBjb250cm9sbGVyXCIpO1xuICB9O1xuICBpbml0KCk7XG59O1xuXG5SZWdpc3RlclRlcm1zQ29udHJvbGxlci4kaW5qZWN0ID0gWyckbW9kYWxJbnN0YW5jZScsICckc2NvcGUnLCAnJGxvZyddO1xubW9kdWxlLmV4cG9ydHMgPSBSZWdpc3RlclRlcm1zQ29udHJvbGxlcjtcbiIsInZhciBVc2VyUmVzZXRDb250cm9sbGVyID0gZnVuY3Rpb24oJG1vZGFsSW5zdGFuY2UsICRzY29wZSwgJGxvZykge1xuXG4gICRzY29wZS51c2VyRGF0YSA9IHtcbiAgICBlbWFpbDogXCJcIlxuICB9O1xuXG4gICRzY29wZS5yZXNldCA9IGZ1bmN0aW9uIChlbWFpbCkge1xuICAgICRtb2RhbEluc3RhbmNlLmNsb3NlKGVtYWlsKTtcbiAgfTtcblxuICAkc2NvcGUuY2FuY2VsID0gZnVuY3Rpb24gKCkge1xuICAgICRtb2RhbEluc3RhbmNlLmRpc21pc3MoJ2NhbmNlbCcpO1xuICB9O1xuXG4gICRzY29wZS5oYXNFcnJvciA9IGZ1bmN0aW9uKGlucHV0KSB7XG4gICAgcmV0dXJuICFpbnB1dC4kZm9jdXNlZCAmJiBpbnB1dC4kZGlydHkgJiYgaW5wdXQuJGludmFsaWQ7XG4gIH07XG5cbiAgJHNjb3BlLmhhc1Byb3BlcnR5RXJyb3IgPSBmdW5jdGlvbihpbnB1dCwgcHJvcGVydHkpIHtcbiAgICByZXR1cm4gIWlucHV0LiRmb2N1c2VkICYmIGlucHV0LiRkaXJ0eSAmJiBpbnB1dC4kZXJyb3JbcHJvcGVydHldO1xuICB9O1xuXG4gIC8qKlxuICAgKiBJbnZva2VkIG9uIHN0YXJ0dXAsIGxpa2UgYSBjb25zdHJ1Y3Rvci5cbiAgICovXG4gIHZhciBpbml0ID0gZnVuY3Rpb24gKCkge1xuICAgICRsb2cuZGVidWcoXCJ1c2VyIHJlc2V0IGNvbnRyb2xsZXJcIik7XG4gIH07XG4gIGluaXQoKTtcbn07XG5cblVzZXJSZXNldENvbnRyb2xsZXIuJGluamVjdCA9IFsnJG1vZGFsSW5zdGFuY2UnLCAnJHNjb3BlJywgJyRsb2cnXTtcbm1vZHVsZS5leHBvcnRzID0gVXNlclJlc2V0Q29udHJvbGxlcjtcbiIsInZhciBOZXdMZWFndWVDb250cm9sbGVyID0gZnVuY3Rpb24oc2Vhc29uSWQsICRzY29wZSwgJGxvY2F0aW9uLCB3ZWVrU2VydmljZSwgbGVhZ3VlU2VydmljZSwgc2Vhc29uTW9kZWwpIHtcblxuICAgIHZhciBnZXRTZWFzb25XZWVrcyA9IGZ1bmN0aW9uKCkge1xuICAgICAgJHNjb3BlLmZldGNoaW5nU2Vhc29uV2Vla3MgPSB0cnVlO1xuICAgICAgd2Vla1NlcnZpY2UuZ2V0QXZhaWxhYmxlV2Vla3MoJHNjb3BlLmxlYWd1ZURhdGEuc2Vhc29uX2lkKVxuICAgICAgICAudGhlbihmdW5jdGlvbihyZXNwb25zZSkge1xuICAgICAgICAgICRzY29wZS53ZWVrcyA9IHJlc3BvbnNlLmRhdGE7XG4gICAgICAgICAgJHNjb3BlLmxlYWd1ZURhdGEuc3RhcnRfd2Vla19pZCA9ICRzY29wZS53ZWVrc1swXS5pZDtcbiAgICAgICAgICAkc2NvcGUuZmV0Y2hpbmdTZWFzb25XZWVrcyA9IGZhbHNlO1xuICAgICAgICB9KTtcbiAgICB9O1xuXG4gICAgJHNjb3BlLnNlYXNvbnMgPSBhbmd1bGFyLmNvcHkoc2Vhc29uTW9kZWwuY3VycmVudFNlYXNvbnMpO1xuXG4gICAgJHNjb3BlLm1heFBpY2tzUGVyV2VlayA9IFtcbiAgICAgIHsgbnVtYmVyOiBudWxsLCBkaXNwbGF5OiAnUGljayBldmVyeSBnYW1lJyB9LFxuICAgICAgeyBudW1iZXI6IDI1LCBkaXNwbGF5OiAnUGljayAyNSBsb3NlcnMnIH0sXG4gICAgICB7IG51bWJlcjogMTUsIGRpc3BsYXk6ICdQaWNrIDE1IGxvc2VycycgfSxcbiAgICAgIHsgbnVtYmVyOiAxMCwgZGlzcGxheTogJ1BpY2sgMTAgbG9zZXJzJyB9LFxuICAgICAgeyBudW1iZXI6IDUsIGRpc3BsYXk6ICdQaWNrIDUgbG9zZXJzJyB9LFxuICAgICAgeyBudW1iZXI6IDIsIGRpc3BsYXk6ICdQaWNrIDIgbG9zZXJzJyB9LFxuICAgICAgeyBudW1iZXI6IDEsIGRpc3BsYXk6ICdQaWNrIDEgbG9zZXInIH1cbiAgICBdO1xuXG4gICAgJHNjb3BlLmxlYWd1ZURhdGEgPSB7XG4gICAgICAgIG5hbWU6ICcnLFxuICAgICAgICBuaWNrbmFtZTogJycsXG4gICAgICAgIHNlYXNvbl9pZDogc2Vhc29uSWQsXG4gICAgICAgIHN0YXJ0X3dlZWtfaWQ6ICcnLFxuICAgICAgICBwdWJsaWM6IHRydWUsXG4gICAgICAgIGVsaW1pbmF0aW9uOiBmYWxzZSxcbiAgICAgICAgZWxpbWluYXRlX29uX3RpZTogdHJ1ZSxcbiAgICAgICAgbWF4X3RlYW1zX3Blcl91c2VyOiAnJyxcbiAgICAgICAgbWF4X3BpY2tzX3Blcl93ZWVrOiAkc2NvcGUubWF4UGlja3NQZXJXZWVrWzBdLm51bWJlclxuICAgIH07XG5cbiAgICAkc2NvcGUuY2hhbmdlU2Vhc29uID0gZnVuY3Rpb24oKSB7XG4gICAgICAkbG9jYXRpb24ucGF0aCgnL3NlYXNvbi8nICsgJHNjb3BlLmxlYWd1ZURhdGEuc2Vhc29uX2lkICsgJy9sZWFndWUvbmV3Jyk7IC8vIHdpbGwgbm90IHJlbG9hZCBwYWdlIGR1ZSB0byByZWxvYWRPblNlYXJjaDogZmFsc2VcbiAgICAgIGdldFNlYXNvbldlZWtzKCk7XG4gICAgfTtcblxuICAgICRzY29wZS5jcmVhdGVMZWFndWUgPSBmdW5jdGlvbihsZWFndWUpIHtcbiAgICAgIGxlYWd1ZVNlcnZpY2UuY3JlYXRlTGVhZ3VlKGxlYWd1ZSlcbiAgICAgICAgLnRoZW4oZnVuY3Rpb24oZGF0YSkge1xuICAgICAgICAgICRsb2NhdGlvbi51cmwoJy9zZWFzb24vJyArIGxlYWd1ZS5zZWFzb25faWQgKyAnL2xlYWd1ZS8nICsgZGF0YS5sZWFndWVfaWQpO1xuICAgICAgICB9KTtcbiAgICB9O1xuXG4gICAgJHNjb3BlLmhhc0Vycm9yID0gZnVuY3Rpb24oaW5wdXQpIHtcbiAgICAgIHJldHVybiAhaW5wdXQuJGZvY3VzZWQgJiYgaW5wdXQuJGRpcnR5ICYmIGlucHV0LiRpbnZhbGlkO1xuICAgIH07XG5cbiAgICAkc2NvcGUuaGFzUHJvcGVydHlFcnJvciA9IGZ1bmN0aW9uKGlucHV0LCBwcm9wZXJ0eSkge1xuICAgICAgcmV0dXJuICFpbnB1dC4kZm9jdXNlZCAmJiBpbnB1dC4kZGlydHkgJiYgaW5wdXQuJGVycm9yW3Byb3BlcnR5XTtcbiAgICB9O1xuXG4gICAgdmFyIGluaXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGdldFNlYXNvbldlZWtzKCk7XG4gICAgfTtcbiAgICBpbml0KCk7XG5cbn07XG5cbk5ld0xlYWd1ZUNvbnRyb2xsZXIuJGluamVjdCA9IFsnc2Vhc29uSWQnLCAnJHNjb3BlJywgJyRsb2NhdGlvbicsICd3ZWVrU2VydmljZScsICdsZWFndWVTZXJ2aWNlJywgJ3NlYXNvbk1vZGVsJ107XG5tb2R1bGUuZXhwb3J0cyA9IE5ld0xlYWd1ZUNvbnRyb2xsZXI7XG4iLCJ2YXIgRWRpdExlYWd1ZUNvbnRyb2xsZXIgPSBmdW5jdGlvbihsZWFndWUsICRzY29wZSwgJGxvY2F0aW9uLCB3ZWVrU2VydmljZSwgbGVhZ3VlU2VydmljZSwgc2Vhc29uTW9kZWwpIHtcblxuICAgIHZhciBzaG93TGVhZ3VlID0gZnVuY3Rpb24obGVhZ3VlKSB7XG4gICAgICAkbG9jYXRpb24udXJsKCcvc2Vhc29uLycgKyBsZWFndWUuc2Vhc29uX2lkICsgJy9sZWFndWUvJyArIGxlYWd1ZS5pZCk7XG4gICAgfTtcblxuICAgIHZhciBnZXRTZWFzb25XZWVrcyA9IGZ1bmN0aW9uKCkge1xuICAgICAgJHNjb3BlLmVkaXRCdG5EaXNhYmxlZCA9IHRydWU7XG4gICAgICB3ZWVrU2VydmljZS5nZXRBdmFpbGFibGVXZWVrcygkc2NvcGUubGVhZ3VlRGF0YS5zZWFzb25faWQpXG4gICAgICAgIC50aGVuKGZ1bmN0aW9uKHJlc3BvbnNlKSB7XG4gICAgICAgICAgJHNjb3BlLndlZWtzID0gcmVzcG9uc2UuZGF0YTtcbiAgICAgICAgICAkc2NvcGUuZWRpdEJ0bkRpc2FibGVkID0gZmFsc2U7XG4gICAgICAgIH0pO1xuICAgIH07XG5cbiAgICAkc2NvcGUuc2Vhc29ucyA9IGFuZ3VsYXIuY29weShzZWFzb25Nb2RlbC5jdXJyZW50U2Vhc29ucyk7XG5cbiAgICAkc2NvcGUubGVhZ3VlRGF0YSA9IGFuZ3VsYXIuY29weShsZWFndWUuZGF0YSk7XG5cbiAgICAkc2NvcGUubWF4UGlja3NQZXJXZWVrID0gW1xuICAgICAgeyBudW1iZXI6IG51bGwsIGRpc3BsYXk6ICdQaWNrIGV2ZXJ5IGdhbWUnIH0sXG4gICAgICB7IG51bWJlcjogMjUsIGRpc3BsYXk6ICdQaWNrIDI1IGxvc2VycycgfSxcbiAgICAgIHsgbnVtYmVyOiAxNSwgZGlzcGxheTogJ1BpY2sgMTUgbG9zZXJzJyB9LFxuICAgICAgeyBudW1iZXI6IDEwLCBkaXNwbGF5OiAnUGljayAxMCBsb3NlcnMnIH0sXG4gICAgICB7IG51bWJlcjogNSwgZGlzcGxheTogJ1BpY2sgNSBsb3NlcnMnIH0sXG4gICAgICB7IG51bWJlcjogMiwgZGlzcGxheTogJ1BpY2sgMiBsb3NlcnMnIH0sXG4gICAgICB7IG51bWJlcjogMSwgZGlzcGxheTogJ1BpY2sgMSBsb3NlcicgfVxuICAgIF07XG5cbiAgICAkc2NvcGUudXBkYXRlTGVhZ3VlID0gZnVuY3Rpb24obGVhZ3VlKSB7XG4gICAgICBsZWFndWVTZXJ2aWNlLnVwZGF0ZUxlYWd1ZShsZWFndWUpXG4gICAgICAgIC50aGVuKGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAgICAgICBzaG93TGVhZ3VlKGxlYWd1ZSk7XG4gICAgICAgIH0pO1xuICAgIH07XG5cbiAgICAkc2NvcGUuaGFzRXJyb3IgPSBmdW5jdGlvbihpbnB1dCkge1xuICAgICAgcmV0dXJuICFpbnB1dC4kZm9jdXNlZCAmJiBpbnB1dC4kZGlydHkgJiYgaW5wdXQuJGludmFsaWQ7XG4gICAgfTtcblxuICAgICRzY29wZS5oYXNQcm9wZXJ0eUVycm9yID0gZnVuY3Rpb24oaW5wdXQsIHByb3BlcnR5KSB7XG4gICAgICByZXR1cm4gIWlucHV0LiRmb2N1c2VkICYmIGlucHV0LiRkaXJ0eSAmJiBpbnB1dC4kZXJyb3JbcHJvcGVydHldO1xuICAgIH07XG5cbiAgICB2YXIgaW5pdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmICghJHNjb3BlLmxlYWd1ZURhdGEuc3RhcnRlZCkge1xuICAgICAgICAgIGdldFNlYXNvbldlZWtzKCk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIGluaXQoKTtcblxufTtcblxuRWRpdExlYWd1ZUNvbnRyb2xsZXIuJGluamVjdCA9IFsnbGVhZ3VlJywgJyRzY29wZScsICckbG9jYXRpb24nLCAnd2Vla1NlcnZpY2UnLCAnbGVhZ3VlU2VydmljZScsICdzZWFzb25Nb2RlbCddO1xubW9kdWxlLmV4cG9ydHMgPSBFZGl0TGVhZ3VlQ29udHJvbGxlcjtcbiIsInZhciBMZWFndWVDb250YWN0Q29udHJvbGxlciA9IGZ1bmN0aW9uKGxlYWd1ZSwgJG1vZGFsSW5zdGFuY2UsICRzY29wZSwgJGxvZykge1xuXG4gICRzY29wZS5sZWFndWVEYXRhID0gbGVhZ3VlO1xuXG4gICRzY29wZS5jb21taXNoTWVzc2FnZSA9ICcnO1xuXG4gICRzY29wZS5jb250YWN0Q29tbWlzaCA9IGZ1bmN0aW9uKGxlYWd1ZSwgbWVzc2FnZSkge1xuICAgICRtb2RhbEluc3RhbmNlLmNsb3NlKHsgbGVhZ3VlOiBsZWFndWUsIG1lc3NhZ2U6IG1lc3NhZ2UgfSk7XG4gIH07XG5cbiAgJHNjb3BlLmNhbmNlbCA9IGZ1bmN0aW9uKCkge1xuICAgICRtb2RhbEluc3RhbmNlLmRpc21pc3MoJ2NhbmNlbCcpO1xuICB9O1xuXG4gICRzY29wZS5oYXNFcnJvciA9IGZ1bmN0aW9uKGlucHV0KSB7XG4gICAgcmV0dXJuICFpbnB1dC4kZm9jdXNlZCAmJiBpbnB1dC4kZGlydHkgJiYgaW5wdXQuJGludmFsaWQ7XG4gIH07XG5cbiAgJHNjb3BlLmhhc1Byb3BlcnR5RXJyb3IgPSBmdW5jdGlvbihpbnB1dCwgcHJvcGVydHkpIHtcbiAgICByZXR1cm4gIWlucHV0LiRmb2N1c2VkICYmIGlucHV0LiRkaXJ0eSAmJiBpbnB1dC4kZXJyb3JbcHJvcGVydHldO1xuICB9O1xuXG4gIC8qKlxuICAgKiBJbnZva2VkIG9uIHN0YXJ0dXAsIGxpa2UgYSBjb25zdHJ1Y3Rvci5cbiAgICovXG4gIHZhciBpbml0ID0gZnVuY3Rpb24gKCkge1xuICAgICRsb2cuZGVidWcoXCJsZWFndWUgY29udGFjdCBjb250cm9sbGVyXCIpO1xuICB9O1xuICBpbml0KCk7XG59O1xuXG5MZWFndWVDb250YWN0Q29udHJvbGxlci4kaW5qZWN0ID0gWydsZWFndWUnLCAnJG1vZGFsSW5zdGFuY2UnLCAnJHNjb3BlJywgJyRsb2cnXTtcbm1vZHVsZS5leHBvcnRzID0gTGVhZ3VlQ29udGFjdENvbnRyb2xsZXI7XG4iLCJ2YXIgTGVhZ3VlTWVzc2FnZUNvbnRyb2xsZXIgPSBmdW5jdGlvbihsZWFndWUsICRtb2RhbEluc3RhbmNlLCAkc2NvcGUsICRsb2cpIHtcblxuICAkc2NvcGUubGVhZ3VlRGF0YSA9IGFuZ3VsYXIuY29weShsZWFndWUpO1xuXG4gICRzY29wZS5tZXNzYWdlT3B0aW9ucyA9IHtcbiAgICBzZW5kQWxpdmU6IGZhbHNlLFxuICAgIHNlbmRBbGw6IGZhbHNlXG4gIH07XG5cbiAgJHNjb3BlLnVwZGF0ZU1lc3NhZ2UgPSBmdW5jdGlvbihsZWFndWUsIHNlbmRBbGl2ZSwgc2VuZEFsbCkge1xuICAgICRtb2RhbEluc3RhbmNlLmNsb3NlKHsgbGVhZ3VlOiBsZWFndWUsIHNlbmRBbGl2ZTogc2VuZEFsaXZlLCBzZW5kQWxsOiBzZW5kQWxsIH0pO1xuICB9O1xuXG4gICRzY29wZS5jYW5jZWwgPSBmdW5jdGlvbigpIHtcbiAgICAkbW9kYWxJbnN0YW5jZS5kaXNtaXNzKCdjYW5jZWwnKTtcbiAgfTtcblxuICAkc2NvcGUuaGFzRXJyb3IgPSBmdW5jdGlvbihpbnB1dCkge1xuICAgIHJldHVybiAhaW5wdXQuJGZvY3VzZWQgJiYgaW5wdXQuJGRpcnR5ICYmIGlucHV0LiRpbnZhbGlkO1xuICB9O1xuXG4gICRzY29wZS5oYXNQcm9wZXJ0eUVycm9yID0gZnVuY3Rpb24oaW5wdXQsIHByb3BlcnR5KSB7XG4gICAgcmV0dXJuICFpbnB1dC4kZm9jdXNlZCAmJiBpbnB1dC4kZGlydHkgJiYgaW5wdXQuJGVycm9yW3Byb3BlcnR5XTtcbiAgfTtcblxuICAvKipcbiAgICogSW52b2tlZCBvbiBzdGFydHVwLCBsaWtlIGEgY29uc3RydWN0b3IuXG4gICAqL1xuICB2YXIgaW5pdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAkbG9nLmRlYnVnKFwibGVhZ3VlIG1lc3NhZ2UgY29udHJvbGxlclwiKTtcbiAgfTtcbiAgaW5pdCgpO1xufTtcblxuTGVhZ3VlTWVzc2FnZUNvbnRyb2xsZXIuJGluamVjdCA9IFsnbGVhZ3VlJywgJyRtb2RhbEluc3RhbmNlJywgJyRzY29wZScsICckbG9nJ107XG5tb2R1bGUuZXhwb3J0cyA9IExlYWd1ZU1lc3NhZ2VDb250cm9sbGVyO1xuIiwidmFyIExlYWd1ZUpvaW5Db250cm9sbGVyID0gZnVuY3Rpb24obGVhZ3VlLCAkbW9kYWxJbnN0YW5jZSwgJHNjb3BlLCAkbG9nKSB7XG5cbiAgJHNjb3BlLmxlYWd1ZURhdGEgPSBsZWFndWU7XG5cbiAgJHNjb3BlLm5ld1RlYW1EYXRhID0ge1xuICAgIG5hbWU6ICcnLFxuICAgIHNlYXNvbl9pZDogbGVhZ3VlLnNlYXNvbl9pZCxcbiAgICBsZWFndWVfaWQ6IGxlYWd1ZS5pZFxuICB9O1xuXG4gICRzY29wZS5qb2luTGVhZ3VlID0gZnVuY3Rpb24gKG5ld1RlYW0pIHtcbiAgICAkbW9kYWxJbnN0YW5jZS5jbG9zZShuZXdUZWFtKTtcbiAgfTtcblxuICAkc2NvcGUuY2FuY2VsID0gZnVuY3Rpb24gKCkge1xuICAgICRtb2RhbEluc3RhbmNlLmRpc21pc3MoJ2NhbmNlbCcpO1xuICB9O1xuXG4gICRzY29wZS5oYXNFcnJvciA9IGZ1bmN0aW9uKGlucHV0KSB7XG4gICAgcmV0dXJuICFpbnB1dC4kZm9jdXNlZCAmJiBpbnB1dC4kZGlydHkgJiYgaW5wdXQuJGludmFsaWQ7XG4gIH07XG5cbiAgJHNjb3BlLmhhc1Byb3BlcnR5RXJyb3IgPSBmdW5jdGlvbihpbnB1dCwgcHJvcGVydHkpIHtcbiAgICByZXR1cm4gIWlucHV0LiRmb2N1c2VkICYmIGlucHV0LiRkaXJ0eSAmJiBpbnB1dC4kZXJyb3JbcHJvcGVydHldO1xuICB9O1xuXG4gIC8qKlxuICAgKiBJbnZva2VkIG9uIHN0YXJ0dXAsIGxpa2UgYSBjb25zdHJ1Y3Rvci5cbiAgICovXG4gIHZhciBpbml0ID0gZnVuY3Rpb24gKCkge1xuICAgICRsb2cuZGVidWcoXCJsZWFndWUgam9pbiBjb250cm9sbGVyXCIpO1xuICB9O1xuICBpbml0KCk7XG59O1xuXG5MZWFndWVKb2luQ29udHJvbGxlci4kaW5qZWN0ID0gWydsZWFndWUnLCAnJG1vZGFsSW5zdGFuY2UnLCAnJHNjb3BlJywgJyRsb2cnXTtcbm1vZHVsZS5leHBvcnRzID0gTGVhZ3VlSm9pbkNvbnRyb2xsZXI7XG4iLCJ2YXIgTGVhZ3VlSW52aXRlQ29udHJvbGxlciA9IGZ1bmN0aW9uKGxlYWd1ZUlkLCBpc0NvbW1pc2gsIGxlYWd1ZUNsb3NlZCwgaW52aXRhdGlvbnMsICRtb2RhbCwgJG1vZGFsSW5zdGFuY2UsICRzY29wZSwgJGxvZykge1xuXG4gICRzY29wZS5pc0NvbW1pc2ggPSBpc0NvbW1pc2g7XG5cbiAgJHNjb3BlLmxlYWd1ZUNsb3NlZCA9IGxlYWd1ZUNsb3NlZDtcblxuICAkc2NvcGUuaW52aXRhdGlvbnMgPSBpbnZpdGF0aW9ucy5kYXRhO1xuXG4gICRzY29wZS5yZXNldEludml0ZSA9IGZ1bmN0aW9uKCkge1xuICAgICRzY29wZS5pbnZpdGF0aW9uID0ge1xuICAgICAgbGVhZ3VlX2lkOiBsZWFndWVJZCxcbiAgICAgIGVtYWlsOiBcIlwiLFxuICAgICAgbWVzc2FnZTogXCJcIlxuICAgIH1cbiAgfTtcbiAgJHNjb3BlLnJlc2V0SW52aXRlKCk7XG5cbiAgJHNjb3BlLnBvcHVsYXRlSW52aXRlID0gZnVuY3Rpb24oaW52aXRhdGlvbikge1xuICAgICRzY29wZS5pbnZpdGF0aW9uID0ge1xuICAgICAgbGVhZ3VlX2lkOiBpbnZpdGF0aW9uLmxlYWd1ZV9pZCxcbiAgICAgIGVtYWlsOiBpbnZpdGF0aW9uLmVtYWlsLFxuICAgICAgbWVzc2FnZTogaW52aXRhdGlvbi5tZXNzYWdlXG4gICAgfVxuICB9O1xuXG4gICRzY29wZS5zZW5kSW52aXRlID0gZnVuY3Rpb24oaW52aXRhdGlvbikge1xuICAgICRtb2RhbEluc3RhbmNlLmNsb3NlKGludml0YXRpb24pO1xuICB9O1xuXG4gICRzY29wZS5jYW5jZWwgPSBmdW5jdGlvbigpIHtcbiAgICAkbW9kYWxJbnN0YW5jZS5kaXNtaXNzKCdjYW5jZWwnKTtcbiAgfTtcblxuICAkc2NvcGUuaGFzRXJyb3IgPSBmdW5jdGlvbihpbnB1dCkge1xuICAgIHJldHVybiAhaW5wdXQuJGZvY3VzZWQgJiYgaW5wdXQuJGRpcnR5ICYmIGlucHV0LiRpbnZhbGlkO1xuICB9O1xuXG4gICRzY29wZS5oYXNQcm9wZXJ0eUVycm9yID0gZnVuY3Rpb24oaW5wdXQsIHByb3BlcnR5KSB7XG4gICAgcmV0dXJuICFpbnB1dC4kZm9jdXNlZCAmJiBpbnB1dC4kZGlydHkgJiYgaW5wdXQuJGVycm9yW3Byb3BlcnR5XTtcbiAgfTtcblxuICAvKipcbiAgICogSW52b2tlZCBvbiBzdGFydHVwLCBsaWtlIGEgY29uc3RydWN0b3IuXG4gICAqL1xuICB2YXIgaW5pdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAkbG9nLmRlYnVnKFwibGVhZ3VlIGludml0ZSBjb250cm9sbGVyXCIpO1xuICB9O1xuICBpbml0KCk7XG59O1xuXG5MZWFndWVJbnZpdGVDb250cm9sbGVyLiRpbmplY3QgPSBbJ2xlYWd1ZUlkJywgJ2lzQ29tbWlzaCcsICdsZWFndWVDbG9zZWQnLCAnaW52aXRhdGlvbnMnLCAnJG1vZGFsJywgJyRtb2RhbEluc3RhbmNlJywgJyRzY29wZScsICckbG9nJ107XG5tb2R1bGUuZXhwb3J0cyA9IExlYWd1ZUludml0ZUNvbnRyb2xsZXI7XG4iLCJ2YXIgVmlld0xlYWd1ZUNvbnRyb2xsZXIgPSBmdW5jdGlvbihsZWFndWUsIGxlYWd1ZVdlZWtzLCBsZWFndWVUZWFtcywgJHNjb3BlLCAkbG9nLCAkbW9kYWwsICRsb2NhdGlvbiwgJHN0YXRlLCAkc3RhdGVQYXJhbXMsICR0aW1lb3V0LCB1c2VyTW9kZWwsIG1lc3NhZ2VNb2RlbCwgdXNlclNlcnZpY2UsIHdlZWtTZXJ2aWNlLCB0ZWFtU2VydmljZSwgbGVhZ3VlU2VydmljZSkge1xuXG4gIHZhciBzZXRNZXNzYWdlU3RhdGUgPSBmdW5jdGlvbigpIHtcbiAgICBpZiAoIV8uaGFzKCRzY29wZS51c2VyTW9kZWwubGVhZ3VlTWVzc2FnZU9wZW4sICRzY29wZS5sZWFndWVEYXRhLmlkKSkge1xuICAgICAgJHNjb3BlLnVzZXJNb2RlbC5sZWFndWVNZXNzYWdlT3Blblskc2NvcGUubGVhZ3VlRGF0YS5pZF0gPSAkc2NvcGUubGVhZ3VlRGF0YS5tZXNzYWdlICYmICRzY29wZS5sZWFndWVEYXRhLm1lc3NhZ2UubGVuZ3RoID4gMDtcbiAgICB9XG4gIH07XG5cbiAgJHNjb3BlLmxlYWd1ZURhdGEgPSBsZWFndWUuZGF0YTtcblxuICAkc2NvcGUubGVhZ3VlV2Vla3MgPSBsZWFndWVXZWVrcy5kYXRhO1xuICAkc2NvcGUubGVhZ3VlVGVhbXMgPSBsZWFndWVUZWFtcy5kYXRhO1xuXG4gIC8vIHBhZ2luYXRpb25cbiAgJHNjb3BlLmN1cnJlbnRUZWFtUGFnZSA9IDE7XG4gICRzY29wZS50ZWFtc1BlclBhZ2UgPSAxMDA7XG5cbiAgJHNjb3BlLnRlYW1PcHRpb25zID0geyBhY3RpdmU6IHRydWUsIGluYWN0aXZlOiBmYWxzZSB9O1xuXG4gICRzY29wZS50ZWFtUXVlcnkgPSAnJztcblxuICAkc2NvcGUubGVhZ3VlRHJvcGRvd24gPSB7XG4gICAgaXNvcGVuOiBmYWxzZVxuICB9O1xuXG4gICRzY29wZS5zZWxlY3RlZFdlZWtTbHVnID0gJHN0YXRlUGFyYW1zLndlZWs7XG5cbiAgJHNjb3BlLnVzZXJNb2RlbCA9IHVzZXJNb2RlbDtcblxuICAkc2NvcGUuaW5QbGF5ID0gZnVuY3Rpb24odGVhbSkge1xuICAgIHJldHVybiAodGVhbS5hY3RpdmUgJiYgISRzY29wZS5pc0VsaW1pbmF0ZWQodGVhbSkpID8gMCA6IDE7XG4gIH07XG5cbiAgJHNjb3BlLmlzRWxpbWluYXRlZCA9IGZ1bmN0aW9uKHRlYW0pIHtcbiAgICB2YXIgZWxpbWluYXRlZCA9IGZhbHNlO1xuICAgIGlmICh0ZWFtLmVsaW1pbmF0ZWRfYXQpIHtcbiAgICAgIGVsaW1pbmF0ZWQgPSB0cnVlO1xuICAgICAgaWYgKHRlYW0ud2Vla19lbmRzX2F0KSB7XG4gICAgICAgIGVsaW1pbmF0ZWQgPSAobW9tZW50KHRlYW0uZWxpbWluYXRlZF9hdCkuaXNCZWZvcmUodGVhbS53ZWVrX2VuZHNfYXQpIHx8IG1vbWVudCh0ZWFtLmVsaW1pbmF0ZWRfYXQpLmlzU2FtZSh0ZWFtLndlZWtfZW5kc19hdCkpO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZWxpbWluYXRlZDtcbiAgfTtcblxuICAkc2NvcGUuYWxpdmVUZWFtQ291bnQgPSBmdW5jdGlvbih0ZWFtcykge1xuICAgIHZhciBhbGl2ZVRlYW1zID0gXy5maWx0ZXIodGVhbXMsIGZ1bmN0aW9uKHRlYW0pIHtcbiAgICAgIHJldHVybiB0ZWFtLmFjdGl2ZSAmJiAhJHNjb3BlLmlzRWxpbWluYXRlZCh0ZWFtKTtcbiAgICB9KTtcbiAgICByZXR1cm4gYWxpdmVUZWFtcy5sZW5ndGg7XG4gIH07XG5cbiAgJHNjb3BlLnRvZ2dsZURyb3Bkb3duID0gZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgJGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICRzY29wZS5sZWFndWVEcm9wZG93bi5pc29wZW4gPSAhJHNjb3BlLmxlYWd1ZURyb3Bkb3duLmlzb3BlbjtcbiAgfTtcblxuICAkc2NvcGUuY2hhbmdlV2VlayA9IGZ1bmN0aW9uKHNsdWcpIHtcbiAgICBpZiAoc2x1Zykge1xuICAgICAgJGxvY2F0aW9uLnNlYXJjaCgnd2VlaycsIHNsdWcpOyAvLyBhZGQgLyByZXBsYWNlIHRoZSB3ZWVrIHF1ZXJ5IHBhcmFtXG4gICAgfSBlbHNlIHtcbiAgICAgICRsb2NhdGlvbi5zZWFyY2goJ3dlZWsnLCBudWxsKTsgLy8gcmVtb3ZlIHdlZWsgcXVlcnkgcGFyYW1cbiAgICB9XG4gIH07XG5cbiAgJHNjb3BlLnNlYXJjaCA9IGZ1bmN0aW9uKGl0ZW0pIHtcbiAgICBpZiAoaXRlbS5uYW1lLmluZGV4T2YoJHNjb3BlLnRlYW1RdWVyeS50b0xvd2VyQ2FzZSgpKSAhPSAtMSB8fCBpdGVtLmNvYWNoX25hbWVzLmpvaW4oJywgJykuaW5kZXhPZigkc2NvcGUudGVhbVF1ZXJ5LnRvTG93ZXJDYXNlKCkpICE9IC0xKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9O1xuXG4gICRzY29wZS5zdGFydHMgPSBmdW5jdGlvbihsZWFndWUpIHtcbiAgICB2YXIgc3RhcnRzTGFiZWwgPSAobGVhZ3VlLnN0YXJ0ZWQpID8gJ1N0YXJ0ZWQgJyA6ICdTdGFydHMgJztcbiAgICByZXR1cm4gc3RhcnRzTGFiZWwgKyBsZWFndWUuc3RhcnRfd2Vla19kaXNwbGF5O1xuICB9O1xuXG4gICRzY29wZS5pc0NvbW1pc2ggPSBmdW5jdGlvbihsZWFndWUpIHtcbiAgICByZXR1cm4gbGVhZ3VlLmNvbW1pc2hfaWRzLmluZGV4T2YodXNlck1vZGVsLnVzZXIuaWQpID4gLTE7XG4gIH07XG5cbiAgJHNjb3BlLmlzQWRtaW4gPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdXNlck1vZGVsLnVzZXIuYWRtaW47XG4gIH07XG5cbiAgJHNjb3BlLmhhc1RlYW1JbkxlYWd1ZSA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciBmb3VuZCA9IGZhbHNlO1xuICAgIF8uZWFjaCgkc2NvcGUubGVhZ3VlVGVhbXMsIGZ1bmN0aW9uKHRlYW0pIHtcbiAgICAgIGlmICh0ZWFtLmNvYWNoX2lkcy5pbmRleE9mKHVzZXJNb2RlbC51c2VyLmlkKSA+IC0xKSB7XG4gICAgICAgIGZvdW5kID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gZm91bmQ7XG4gIH07XG5cbiAgJHNjb3BlLmhhc0RlYWN0aXZhdGVkVGVhbXMgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgZm91bmREZWFjdGl2YXRlZCA9IGZhbHNlO1xuICAgIF8uZWFjaCgkc2NvcGUubGVhZ3VlVGVhbXMsIGZ1bmN0aW9uKHRlYW0pIHtcbiAgICAgIGlmICh0ZWFtLmFjdGl2ZSA9PSBmYWxzZSkge1xuICAgICAgICBmb3VuZERlYWN0aXZhdGVkID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gZm91bmREZWFjdGl2YXRlZDtcbiAgfTtcblxuICAkc2NvcGUuaXNDb2FjaCA9IGZ1bmN0aW9uKHRlYW0pIHtcbiAgICByZXR1cm4gdGVhbS5jb2FjaF9pZHMuaW5kZXhPZih1c2VyTW9kZWwudXNlci5pZCkgPiAtMTtcbiAgfTtcblxuICAkc2NvcGUuY29hY2hOYW1lID0gZnVuY3Rpb24odGVhbSkge1xuICAgIHJldHVybiB0ZWFtLmNvYWNoX25hbWVzLmpvaW4oJywgJyk7XG4gIH07XG5cbiAgJHNjb3BlLmVkaXRMZWFndWUgPSBmdW5jdGlvbihsZWFndWUpIHtcbiAgICAkbG9jYXRpb24udXJsKCcvc2Vhc29uLycgKyBsZWFndWUuc2Vhc29uX2lkICsgJy9sZWFndWUvJyArIGxlYWd1ZS5pZCArICcvZWRpdCcpO1xuICB9O1xuXG4gICRzY29wZS5vcGVuTGVhZ3VlID0gZnVuY3Rpb24obGVhZ3VlKSB7XG4gICAgbGVhZ3VlU2VydmljZS5vcGVuTGVhZ3VlKGxlYWd1ZSlcbiAgfTtcblxuICAkc2NvcGUuY2xvc2VMZWFndWUgPSBmdW5jdGlvbihsZWFndWUpIHtcbiAgICBsZWFndWVTZXJ2aWNlLmNsb3NlTGVhZ3VlKGxlYWd1ZSlcbiAgfTtcblxuICAkc2NvcGUuc2hvd1RlYW0gPSBmdW5jdGlvbih0ZWFtKSB7XG4gICAgJGxvY2F0aW9uLnBhdGgoJGxvY2F0aW9uLnBhdGgoKSArICcvdGVhbS8nICsgdGVhbS5pZCk7IC8vIHBhdGggd2lsbCByZXRhaW4gcXVlcnkgcGFyYW1zXG4gIH07XG5cbiAgJHNjb3BlLmNvbnRhY3RDb21taXNoID0gZnVuY3Rpb24obGVhZ3VlKSB7XG5cbiAgICB2YXIgbW9kYWxJbnN0YW5jZSA9ICRtb2RhbC5vcGVuKHtcbiAgICAgIHRlbXBsYXRlVXJsOiAnbW9kdWxlcy9wcml2YXRlL2xlYWd1ZS9jb250YWN0L2xlYWd1ZS5jb250YWN0LnRwbC5odG1sJyxcbiAgICAgIGNvbnRyb2xsZXI6ICdMZWFndWVDb250YWN0Q29udHJvbGxlcicsXG4gICAgICByZXNvbHZlOiB7XG4gICAgICAgIGxlYWd1ZTogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgcmV0dXJuIGxlYWd1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuXG4gICAgbW9kYWxJbnN0YW5jZS5yZXN1bHQudGhlbihmdW5jdGlvbihwYXJhbXMpIHtcbiAgICAgIGxlYWd1ZVNlcnZpY2Uuc2VuZENvbW1pc2hNZXNzYWdlKHBhcmFtcy5sZWFndWUsIHBhcmFtcy5tZXNzYWdlKVxuICAgIH0sIGZ1bmN0aW9uICgpIHtcbiAgICAgICRsb2cuZGVidWcoJ0NvbnRhY3QgbGVhZ3VlIG1vZGFsIGRpc21pc3NlZC4uLicpO1xuICAgICAgbWVzc2FnZU1vZGVsLnNldE1lc3NhZ2UoeyB0eXBlOiAnd2FybmluZycsIGNvbnRlbnQ6ICdDb250YWN0IGNvbW1pc2ggY2FuY2VsbGVkJyB9LCBmYWxzZSk7XG4gICAgfSk7XG5cbiAgfTtcblxuICAkc2NvcGUucmVwb3J0QWJ1c2UgPSBmdW5jdGlvbigpIHtcblxuICAgIHZhciBtb2RhbEluc3RhbmNlID0gJG1vZGFsLm9wZW4oe1xuICAgICAgdGVtcGxhdGVVcmw6ICdtb2R1bGVzL3B1YmxpYy9hYnVzZS9hYnVzZS50cGwuaHRtbCcsXG4gICAgICBjb250cm9sbGVyOiAnQWJ1c2VDb250cm9sbGVyJ1xuICAgIH0pO1xuXG4gICAgbW9kYWxJbnN0YW5jZS5yZXN1bHQudGhlbihmdW5jdGlvbihtZXNzYWdlKSB7XG4gICAgICB1c2VyU2VydmljZS5jb250YWN0VXMobWVzc2FnZSk7XG4gICAgfSwgZnVuY3Rpb24gKCkge1xuICAgICAgbWVzc2FnZU1vZGVsLnNldE1lc3NhZ2UoeyB0eXBlOiAnd2FybmluZycsIGNvbnRlbnQ6ICdDb250YWN0IHVzIGNhbmNlbGxlZCcgfSwgZmFsc2UpO1xuICAgICAgJGxvZy5kZWJ1ZygnY29udGFjdCB1cyBkaXNtaXNzZWQuLi4nKTtcbiAgICB9KTtcblxuICB9O1xuXG4gICRzY29wZS5yZWFkRmFxID0gZnVuY3Rpb24oKSB7XG4gICAgJGxvY2F0aW9uLnVybCgnL2ZhcScpO1xuICB9O1xuXG4gICRzY29wZS51cGRhdGVNZXNzYWdlID0gZnVuY3Rpb24obGVhZ3VlKSB7XG5cbiAgICB2YXIgbW9kYWxJbnN0YW5jZSA9ICRtb2RhbC5vcGVuKHtcbiAgICAgIHRlbXBsYXRlVXJsOiAnbW9kdWxlcy9wcml2YXRlL2xlYWd1ZS9tZXNzYWdlL2xlYWd1ZS5tZXNzYWdlLnRwbC5odG1sJyxcbiAgICAgIGNvbnRyb2xsZXI6ICdMZWFndWVNZXNzYWdlQ29udHJvbGxlcicsXG4gICAgICByZXNvbHZlOiB7XG4gICAgICAgIGxlYWd1ZTogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgcmV0dXJuIGxlYWd1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuXG4gICAgbW9kYWxJbnN0YW5jZS5yZXN1bHQudGhlbihmdW5jdGlvbihwYXJhbXMpIHtcbiAgICAgIGxlYWd1ZVNlcnZpY2UudXBkYXRlTGVhZ3VlTWVzc2FnZShwYXJhbXMubGVhZ3VlLCBwYXJhbXMuc2VuZEFsaXZlLCBwYXJhbXMuc2VuZEFsbClcbiAgICAgICAgLnRoZW4oZnVuY3Rpb24obWVzc2FnZSkge1xuICAgICAgICAgICRzY29wZS5sZWFndWVEYXRhLm1lc3NhZ2UgPSBtZXNzYWdlO1xuICAgICAgICB9KTtcblxuICAgIH0sIGZ1bmN0aW9uICgpIHtcbiAgICAgICRsb2cuZGVidWcoJ0xlYWd1ZSBtZXNzYWdlIG1vZGFsIGRpc21pc3NlZC4uLicpO1xuICAgICAgbWVzc2FnZU1vZGVsLnNldE1lc3NhZ2UoeyB0eXBlOiAnd2FybmluZycsIGNvbnRlbnQ6ICdVcGRhdGUgbGVhZ3VlIG1lc3NhZ2UgY2FuY2VsbGVkJyB9LCBmYWxzZSk7XG4gICAgfSk7XG5cbiAgfTtcblxuICAkc2NvcGUuam9pbkxlYWd1ZSA9IGZ1bmN0aW9uKGxlYWd1ZSkge1xuXG4gICAgdmFyIG1vZGFsSW5zdGFuY2UgPSAkbW9kYWwub3Blbih7XG4gICAgICB0ZW1wbGF0ZVVybDogJ21vZHVsZXMvcHJpdmF0ZS9sZWFndWUvam9pbi9sZWFndWUuam9pbi50cGwuaHRtbCcsXG4gICAgICBjb250cm9sbGVyOiAnTGVhZ3VlSm9pbkNvbnRyb2xsZXInLFxuICAgICAgcmVzb2x2ZToge1xuICAgICAgICBsZWFndWU6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgIHJldHVybiBsZWFndWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcblxuICAgIG1vZGFsSW5zdGFuY2UucmVzdWx0LnRoZW4oZnVuY3Rpb24odGVhbSkge1xuICAgICAgdGVhbVNlcnZpY2UuY3JlYXRlVGVhbSh0ZWFtKVxuICAgICAgICAudGhlbihcbiAgICAgICAgICBmdW5jdGlvbihkYXRhKSB7XG4gICAgICAgICAgICB2YXIgbmV3VGVhbVBhdGggPSAkbG9jYXRpb24ucGF0aCgpICsgJy90ZWFtLycgKyBkYXRhLnRlYW1faWQ7XG4gICAgICAgICAgICAkbG9jYXRpb24ucGF0aChuZXdUZWFtUGF0aCk7IC8vIG5hdmlnYXRlIHRvIHRoZSBuZXcgdGVhbSBwYWdlXG4gICAgICAgICAgICAkdGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgIG1lc3NhZ2VNb2RlbC5zZXRNZXNzYWdlKHsgdHlwZTogZGF0YS5tZXNzYWdlLnR5cGUsIGNvbnRlbnQ6IGRhdGEubWVzc2FnZS5jb250ZW50LCBzaGFyZVRlYW06IHRydWUgIH0sIHRydWUpO1xuICAgICAgICAgICAgfSwgNTAwKTtcbiAgICAgICAgICB9LFxuICAgICAgICAgIGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAgICAgICAgIG1lc3NhZ2VNb2RlbC5zZXRNZXNzYWdlKGRhdGEubWVzc2FnZSwgZmFsc2UpO1xuICAgICAgICAgIH0pO1xuICAgIH0sIGZ1bmN0aW9uICgpIHtcbiAgICAgICRsb2cuZGVidWcoJ0pvaW4gbGVhZ3VlIG1vZGFsIGRpc21pc3NlZC4uLicpO1xuICAgICAgbWVzc2FnZU1vZGVsLnNldE1lc3NhZ2UoeyB0eXBlOiAnd2FybmluZycsIGNvbnRlbnQ6ICdKb2luIGxlYWd1ZSBjYW5jZWxsZWQnIH0sIGZhbHNlKTtcbiAgICB9KTtcblxuICB9O1xuXG4gICRzY29wZS5yZXF1ZXN0SW52aXRlID0gZnVuY3Rpb24obGVhZ3VlKSB7XG5cbiAgICB2YXIgbW9kYWxJbnN0YW5jZSA9ICRtb2RhbC5vcGVuKHtcbiAgICAgIHRlbXBsYXRlVXJsOiAnbW9kdWxlcy9wcml2YXRlL2xlYWd1ZS9pbnZpdGUvcmVxdWVzdC9sZWFndWUuaW52aXRlLnJlcXVlc3QudHBsLmh0bWwnLFxuICAgICAgY29udHJvbGxlcjogJ0xlYWd1ZUludml0ZVJlcXVlc3RDb250cm9sbGVyJyxcbiAgICAgIHJlc29sdmU6IHtcbiAgICAgICAgbGVhZ3VlSWQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgIHJldHVybiBsZWFndWUuaWQ7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcblxuICAgIG1vZGFsSW5zdGFuY2UucmVzdWx0LnRoZW4oZnVuY3Rpb24gKGludml0YXRpb24pIHtcbiAgICAgIGxlYWd1ZVNlcnZpY2UucmVxdWVzdEludml0ZShpbnZpdGF0aW9uKTtcbiAgICB9LCBmdW5jdGlvbiAoKSB7XG4gICAgICAkbG9nLmRlYnVnKCdSZXF1ZXN0IGludml0ZSBtb2RhbCBkaXNtaXNzZWQuLi4nKTtcbiAgICAgIG1lc3NhZ2VNb2RlbC5zZXRNZXNzYWdlKHsgdHlwZTogJ3dhcm5pbmcnLCBjb250ZW50OiAnUmVxdWVzdCBpbnZpdGUgY2FuY2VsbGVkJyB9LCBmYWxzZSk7XG4gICAgfSk7XG5cbiAgfTtcblxuICAkc2NvcGUuaW52aXRlID0gZnVuY3Rpb24obGVhZ3VlSWQsIGlzQ29tbWlzaCwgbGVhZ3VlQ2xvc2VkKSB7XG5cbiAgICB2YXIgbW9kYWxJbnN0YW5jZSA9ICRtb2RhbC5vcGVuKHtcbiAgICAgIHRlbXBsYXRlVXJsOiAnbW9kdWxlcy9wcml2YXRlL2xlYWd1ZS9pbnZpdGUvbGVhZ3VlLmludml0ZS50cGwuaHRtbCcsXG4gICAgICBjb250cm9sbGVyOiAnTGVhZ3VlSW52aXRlQ29udHJvbGxlcicsXG4gICAgICByZXNvbHZlOiB7XG4gICAgICAgIGxlYWd1ZUlkOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICByZXR1cm4gbGVhZ3VlSWQ7XG4gICAgICAgIH0sXG4gICAgICAgIGlzQ29tbWlzaDogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgcmV0dXJuIGlzQ29tbWlzaDtcbiAgICAgICAgfSxcbiAgICAgICAgbGVhZ3VlQ2xvc2VkOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICByZXR1cm4gbGVhZ3VlQ2xvc2VkO1xuICAgICAgICB9LFxuICAgICAgICBpbnZpdGF0aW9uczogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgaWYgKGlzQ29tbWlzaCkge1xuICAgICAgICAgICAgcmV0dXJuIGxlYWd1ZVNlcnZpY2UuZ2V0SW52aXRlcyhsZWFndWVJZCk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiB7IGRhdGE6IFtdIH07XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBtb2RhbEluc3RhbmNlLnJlc3VsdC50aGVuKGZ1bmN0aW9uKGludml0YXRpb24pIHtcbiAgICAgIGxlYWd1ZVNlcnZpY2UuY3JlYXRlSW52aXRlKGludml0YXRpb24pO1xuICAgIH0sIGZ1bmN0aW9uICgpIHtcbiAgICAgICRsb2cuZGVidWcoJ0ludml0ZSBjb2FjaCBtb2RhbCBkaXNtaXNzZWQuLi4nKTtcbiAgICB9KTtcbiAgfTtcblxuICAkc2NvcGUuc2hvd0RlYWN0aXZhdGVkVGVhbXMgPSBmdW5jdGlvbihzaG93KSB7XG4gICAgJHNjb3BlLnRlYW1PcHRpb25zLmluYWN0aXZlID0gc2hvdztcbiAgICBpZiAoc2hvdykge1xuICAgICAgbWVzc2FnZU1vZGVsLnNldE1lc3NhZ2UoeyB0eXBlOiAnaW5mbycsIGNvbnRlbnQ6ICdTaG93aW5nIGRlYWN0aXZhdGVkIHRlYW1zIChpZiBhbnkpJyB9LCBmYWxzZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIG1lc3NhZ2VNb2RlbC5zZXRNZXNzYWdlKHsgdHlwZTogJ2luZm8nLCBjb250ZW50OiAnSGlkaW5nIGRlYWN0aXZhdGVkIHRlYW1zIChpZiBhbnkpJyB9LCBmYWxzZSk7XG4gICAgfVxuICB9O1xuXG4gICRzY29wZS5waWNrU3RhdHVzID0gZnVuY3Rpb24ocGljaykge1xuICAgIHZhciBzdGF0dXMgPSAnJztcbiAgICBpZiAocGljay53YXJuaW5nID09PSB0cnVlKSB7XG4gICAgICBzdGF0dXMgPSAnd2FybmluZyc7XG4gICAgfSBlbHNlIGlmIChwaWNrLmNvcnJlY3QgPT09IHRydWUpIHtcbiAgICAgIHN0YXR1cyA9ICdjaGVjayc7XG4gICAgfSBlbHNlIGlmIChwaWNrLnRpZSA9PT0gdHJ1ZSB8fCBwaWNrLmluY29tcGxldGUgPT09IHRydWUpIHtcbiAgICAgIHN0YXR1cyA9ICdtaW51cyc7XG4gICAgfSBlbHNlIGlmIChwaWNrLmNvcnJlY3QgPT09IGZhbHNlKSB7XG4gICAgICBzdGF0dXMgPSAndGltZXMnO1xuICAgIH0gZWxzZSBpZiAocGljay5sb2NrZWQgPT09IHRydWUpIHtcbiAgICAgIHN0YXR1cyA9ICdsb2NrJztcbiAgICB9IGVsc2UgaWYgKHBpY2subG9ja2VkID09PSBmYWxzZSkge1xuICAgICAgc3RhdHVzID0gJ3VubG9jayc7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0YXR1cyA9ICd0aC1saXN0JztcbiAgICB9XG4gICAgcmV0dXJuIHN0YXR1cztcbiAgfTtcblxuICAkc2NvcGUucmVzZXRTZWFyY2ggPSBmdW5jdGlvbigpIHtcbiAgICAkc2NvcGUudGVhbVF1ZXJ5ID0gJyc7XG4gICAgJHNjb3BlLmN1cnJlbnRUZWFtUGFnZSA9IDE7XG4gIH07XG5cbiAgJHNjb3BlLnNoYXJlTGVhZ3VlRkIgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgb3B0aW9ucyA9IHtcbiAgICAgIG1ldGhvZDogJ2ZlZWQnLFxuICAgICAgbGluazogJGxvY2F0aW9uLmFic1VybCgpLFxuICAgICAgcGljdHVyZTogXCJodHRwczovL3d3dy5sb3Nlb3Jnb2hvbWUuY29tL3Jlc291cmNlcy9hc3NldHMvaW1hZ2VzL2JhY2tncm91bmQtc21hbGwuanBnXCIsXG4gICAgICBuYW1lOiAkc2NvcGUubGVhZ3VlRGF0YS5uYW1lLFxuICAgICAgZGVzY3JpcHRpb246ICRzY29wZS5sZWFndWVEYXRhLmZvcm1hdCxcbiAgICAgIGNhcHRpb246ICRzY29wZS5sZWFndWVEYXRhLnNlYXNvbl9uYW1lXG4gICAgfTtcbiAgICBGQi51aShvcHRpb25zKTtcbiAgfTtcblxuICAkc2NvcGUuJG9uKCdtZXNzYWdlQ29udHJvbGxlcjo6c2hhcmVMZWFndWVGQicsIGZ1bmN0aW9uKGV2ZW50LCBhcmdzKSB7XG4gICAgJHNjb3BlLnNoYXJlTGVhZ3VlRkIoKTtcbiAgfSk7XG5cbiAgLyoqXG4gICAqIEludm9rZWQgb24gc3RhcnR1cCwgbGlrZSBhIGNvbnN0cnVjdG9yLlxuICAgKi9cbiAgdmFyIGluaXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgJGxvZy5kZWJ1ZyhcInZpZXcgbGVhZ3VlIGNvbnRyb2xsZXJcIik7XG4gICAgc2V0TWVzc2FnZVN0YXRlKCk7XG4gIH07XG4gIGluaXQoKTtcblxufTtcblxuVmlld0xlYWd1ZUNvbnRyb2xsZXIuJGluamVjdCA9IFsnbGVhZ3VlJywnbGVhZ3VlV2Vla3MnLCAnbGVhZ3VlVGVhbXMnLCAnJHNjb3BlJywgJyRsb2cnLCAnJG1vZGFsJywgJyRsb2NhdGlvbicsICckc3RhdGUnLCAnJHN0YXRlUGFyYW1zJywgJyR0aW1lb3V0JywgJ3VzZXJNb2RlbCcsICdtZXNzYWdlTW9kZWwnLCAndXNlclNlcnZpY2UnLCAnd2Vla1NlcnZpY2UnLCAndGVhbVNlcnZpY2UnLCAnbGVhZ3VlU2VydmljZSddO1xubW9kdWxlLmV4cG9ydHMgPSBWaWV3TGVhZ3VlQ29udHJvbGxlcjtcbiIsInZhciBKb2luTGVhZ3Vlc0NvbnRyb2xsZXIgPSBmdW5jdGlvbigkc2NvcGUsICRsb2csICRsb2NhdGlvbiwgJHN0YXRlUGFyYW1zLCB1c2VyTW9kZWwsIG1lc3NhZ2VNb2RlbCwgc2Vhc29uTW9kZWwpIHtcblxuICAkc2NvcGUuc2VsZWN0ZWRTZWFzb25JZCA9IHBhcnNlSW50KCRzdGF0ZVBhcmFtcy5zZWFzb25JZCk7XG5cbiAgJHNjb3BlLmN1cnJlbnRTZWFzb25zID0gYW5ndWxhci5jb3B5KHNlYXNvbk1vZGVsLmN1cnJlbnRTZWFzb25zKTtcblxuICAkc2NvcGUubGVhZ3VlUXVlcnkgPSAnJztcblxuICAkc2NvcGUucHVibGljTGVhZ3VlcyA9IGZ1bmN0aW9uKHNlYXNvbklkKSB7XG4gICAgJGxvY2F0aW9uLnVybCgnL3NlYXNvbi8nICsgc2Vhc29uSWQgKyAnL2xlYWd1ZXMvcHVibGljJyk7XG4gIH07XG5cbiAgJHNjb3BlLnByaXZhdGVMZWFndWVzID0gZnVuY3Rpb24oc2Vhc29uSWQpIHtcbiAgICAkbG9jYXRpb24udXJsKCcvc2Vhc29uLycgKyBzZWFzb25JZCArICcvbGVhZ3Vlcy9wcml2YXRlJyk7XG4gIH07XG5cbiAgJHNjb3BlLmNoYW5nZVNlYXNvbiA9IGZ1bmN0aW9uKHNlYXNvbklkKSB7XG4gICAgc2Vhc29uTW9kZWwuc2V0U2VsZWN0ZWRTZWFzb25JZChzZWFzb25JZCk7XG4gICAgdmFyIG5ld1BhdGggPSAkbG9jYXRpb24ucGF0aCgpLnJlcGxhY2UoLyhcXC9zZWFzb25cXC8pXFxkKi8sICckMScgKyBzZWFzb25JZCk7XG4gICAgJGxvY2F0aW9uLnVybChuZXdQYXRoKTtcbiAgfTtcblxuICAkc2NvcGUuc2VhcmNoID0gZnVuY3Rpb24oaXRlbSkge1xuICAgIGlmIChpdGVtLm5hbWUuaW5kZXhPZigkc2NvcGUubGVhZ3VlUXVlcnkudG9Mb3dlckNhc2UoKSkgIT0gLTEgfHwgaXRlbS5jb21taXNoX25hbWVzLmpvaW4oJywgJykuaW5kZXhPZigkc2NvcGUubGVhZ3VlUXVlcnkudG9Mb3dlckNhc2UoKSkgIT0gLTEpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH07XG5cbiAgJHNjb3BlLnJlc2V0U2VhcmNoID0gZnVuY3Rpb24oKSB7XG4gICAgJHNjb3BlLmxlYWd1ZVF1ZXJ5ID0gJyc7XG4gIH07XG5cbiAgJHNjb3BlLnN0YXJ0cyA9IGZ1bmN0aW9uKGxlYWd1ZSkge1xuICAgIHZhciBzdGFydHNMYWJlbCA9IChsZWFndWUuc3RhcnRlZCkgPyAnU3RhcnRlZCAnIDogJ1N0YXJ0cyAnO1xuICAgIHJldHVybiBzdGFydHNMYWJlbCArIGxlYWd1ZS5zdGFydF93ZWVrO1xuICB9O1xuXG4gICRzY29wZS5pc0NvbW1pc2ggPSBmdW5jdGlvbihsZWFndWUpIHtcbiAgICByZXR1cm4gbGVhZ3VlLmNvbW1pc2hfaWRzLmluZGV4T2YodXNlck1vZGVsLnVzZXIuaWQpID4gLTE7XG4gIH07XG5cbiAgJHNjb3BlLmNyZWF0ZUxlYWd1ZSA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciBzZWFzb24gPSBzZWFzb25Nb2RlbC5nZXRDdXJyZW50U2Vhc29uKCk7XG4gICAgJGxvY2F0aW9uLnVybCgnL3NlYXNvbi8nICsgc2Vhc29uLmlkICsgJy9sZWFndWUvbmV3Jyk7XG4gIH07XG5cbiAgLyoqXG4gICAqIEludm9rZWQgb24gc3RhcnR1cCwgbGlrZSBhIGNvbnN0cnVjdG9yLlxuICAgKi9cbiAgdmFyIGluaXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgJGxvZy5kZWJ1ZyhcImpvaW4gbGVhZ3VlcyBjb250cm9sbGVyXCIpO1xuICB9O1xuICBpbml0KCk7XG5cbn07XG5cbkpvaW5MZWFndWVzQ29udHJvbGxlci4kaW5qZWN0ID0gWyckc2NvcGUnLCAnJGxvZycsICckbG9jYXRpb24nLCAnJHN0YXRlUGFyYW1zJywgJ3VzZXJNb2RlbCcsICdtZXNzYWdlTW9kZWwnLCAnc2Vhc29uTW9kZWwnXTtcbm1vZHVsZS5leHBvcnRzID0gSm9pbkxlYWd1ZXNDb250cm9sbGVyO1xuIiwidmFyIE1hbmFnZWRMZWFndWVzQ29udHJvbGxlciA9IGZ1bmN0aW9uKG1hbmFnZWRMZWFndWVzLCAkc2NvcGUsICRsb2csICRsb2NhdGlvbiwgJG1vZGFsLCBtZXNzYWdlTW9kZWwsIGxlYWd1ZVNlcnZpY2UpIHtcblxuICAgICRzY29wZS5tYW5hZ2VkTGVhZ3VlcyA9IG1hbmFnZWRMZWFndWVzLmRhdGE7XG5cbiAgICAkc2NvcGUuY3JlYXRlTGVhZ3VlID0gZnVuY3Rpb24oc2Vhc29uKSB7XG5cbiAgICAgIHZhciBtb2RhbEluc3RhbmNlID0gJG1vZGFsLm9wZW4oe1xuICAgICAgICB0ZW1wbGF0ZVVybDogJ21vZHVsZXMvcHJpdmF0ZS9sZWFndWUvbmV3L2xlYWd1ZS5uZXcudHBsLmh0bWwnLFxuICAgICAgICBjb250cm9sbGVyOiAnTmV3TGVhZ3VlQ29udHJvbGxlcidcbiAgICAgIH0pO1xuXG4gICAgICBtb2RhbEluc3RhbmNlLnJlc3VsdC50aGVuKGZ1bmN0aW9uKGxlYWd1ZSkge1xuICAgICAgICBsZWFndWVTZXJ2aWNlLmNyZWF0ZUxlYWd1ZShsZWFndWUpO1xuICAgICAgfSwgZnVuY3Rpb24gKCkge1xuICAgICAgICAkbG9nLmRlYnVnKCdDcmVhdGUgbGVhZ3VlIG1vZGFsIGRpc21pc3NlZC4uLicpO1xuICAgICAgICBtZXNzYWdlTW9kZWwuc2V0TWVzc2FnZSh7IHR5cGU6ICd3YXJuaW5nJywgY29udGVudDogJ0NyZWF0ZSBsZWFndWUgY2FuY2VsbGVkJyB9LCBmYWxzZSk7XG4gICAgICB9KTtcblxuICAgIH07XG5cbiAgICAkc2NvcGUudmlld0xlYWd1ZSA9IGZ1bmN0aW9uKGxlYWd1ZSkge1xuICAgICAgICAkbG9jYXRpb24udXJsKCcvc2Vhc29uLycgKyBsZWFndWUuc2Vhc29uX2lkICsgJy9sZWFndWUvJyArIGxlYWd1ZS5pZCk7XG4gICAgfTtcblxuICAgICRzY29wZS5zdGFydHMgPSBmdW5jdGlvbihsZWFndWUpIHtcbiAgICAgIHZhciBzdGFydHNMYWJlbCA9IChsZWFndWUuc3RhcnRlZCkgPyAnU3RhcnRlZCAnIDogJ1N0YXJ0cyAnO1xuICAgICAgcmV0dXJuIHN0YXJ0c0xhYmVsICsgbGVhZ3VlLnN0YXJ0X3dlZWs7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIEludm9rZWQgb24gc3RhcnR1cCwgbGlrZSBhIGNvbnN0cnVjdG9yLlxuICAgICAqL1xuICAgIHZhciBpbml0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAkbG9nLmRlYnVnKFwibWFuYWdlZCBsZWFndWVzIGNvbnRyb2xsZXJcIik7XG4gICAgfTtcbiAgICBpbml0KCk7XG5cbn07XG5cbk1hbmFnZWRMZWFndWVzQ29udHJvbGxlci4kaW5qZWN0ID0gWydtYW5hZ2VkTGVhZ3VlcycsICckc2NvcGUnLCAnJGxvZycsICckbG9jYXRpb24nLCAnJG1vZGFsJywgJ21lc3NhZ2VNb2RlbCcsICdsZWFndWVTZXJ2aWNlJ107XG5tb2R1bGUuZXhwb3J0cyA9IE1hbmFnZWRMZWFndWVzQ29udHJvbGxlcjtcblxuIiwidmFyIE15TGVhZ3Vlc0NvbnRyb2xsZXIgPSBmdW5jdGlvbihsZWFndWVzLCAkc2NvcGUsICRsb2csICRsb2NhdGlvbiwgJG1vZGFsLCBtZXNzYWdlTW9kZWwsIHNlYXNvbk1vZGVsLCBsZWFndWVTZXJ2aWNlKSB7XG5cbiAgJHNjb3BlLmxlYWd1ZXMgPSBsZWFndWVzLmRhdGE7XG5cbiAgJHNjb3BlLmNyZWF0ZUxlYWd1ZSA9IGZ1bmN0aW9uKCkge1xuXG4gICAgdmFyIG1vZGFsSW5zdGFuY2UgPSAkbW9kYWwub3Blbih7XG4gICAgICB0ZW1wbGF0ZVVybDogJ21vZHVsZXMvcHJpdmF0ZS9sZWFndWUvbmV3L2xlYWd1ZS5uZXcudHBsLmh0bWwnLFxuICAgICAgY29udHJvbGxlcjogJ05ld0xlYWd1ZUNvbnRyb2xsZXInXG4gICAgfSk7XG5cbiAgICBtb2RhbEluc3RhbmNlLnJlc3VsdC50aGVuKGZ1bmN0aW9uKGxlYWd1ZSkge1xuICAgICAgbGVhZ3VlU2VydmljZS5jcmVhdGVMZWFndWUobGVhZ3VlKTtcbiAgICB9LCBmdW5jdGlvbiAoKSB7XG4gICAgICAkbG9nLmRlYnVnKCdDcmVhdGUgbGVhZ3VlIG1vZGFsIGRpc21pc3NlZC4uLicpO1xuICAgICAgbWVzc2FnZU1vZGVsLnNldE1lc3NhZ2UoeyB0eXBlOiAnd2FybmluZycsIGNvbnRlbnQ6ICdDcmVhdGUgbGVhZ3VlIGNhbmNlbGxlZCcgfSwgZmFsc2UpO1xuICAgIH0pO1xuXG4gIH07XG5cbiAgJHNjb3BlLmpvaW5MZWFndWUgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgc2Vhc29uID0gc2Vhc29uTW9kZWwuZ2V0Q3VycmVudFNlYXNvbigpO1xuICAgICRsb2NhdGlvbi51cmwoJy9zZWFzb24vJyArIHNlYXNvbi5pZCArICcvbGVhZ3Vlcy9wdWJsaWMnKTtcbiAgfTtcblxuICAkc2NvcGUudmlld0xlYWd1ZSA9IGZ1bmN0aW9uKGxlYWd1ZSkge1xuICAgICRsb2NhdGlvbi51cmwoJy9zZWFzb24vJyArIGxlYWd1ZS5zZWFzb25faWQgKyAnL2xlYWd1ZS8nICsgbGVhZ3VlLmlkKTtcbiAgfTtcblxuICAkc2NvcGUuc3RhcnRzID0gZnVuY3Rpb24obGVhZ3VlKSB7XG4gICAgdmFyIHN0YXJ0c0xhYmVsID0gKGxlYWd1ZS5zdGFydGVkKSA/ICdTdGFydGVkICcgOiAnU3RhcnRzICc7XG4gICAgcmV0dXJuIHN0YXJ0c0xhYmVsICsgbGVhZ3VlLnN0YXJ0X3dlZWs7XG4gIH07XG5cbiAgLyoqXG4gICAqIEludm9rZWQgb24gc3RhcnR1cCwgbGlrZSBhIGNvbnN0cnVjdG9yLlxuICAgKi9cbiAgdmFyIGluaXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgJGxvZy5kZWJ1ZyhcIm15IGxlYWd1ZXMgY29udHJvbGxlclwiKTtcbiAgfTtcbiAgaW5pdCgpO1xuXG59O1xuXG5NeUxlYWd1ZXNDb250cm9sbGVyLiRpbmplY3QgPSBbJ2xlYWd1ZXMnLCAnJHNjb3BlJywgJyRsb2cnLCAnJGxvY2F0aW9uJywgJyRtb2RhbCcsICdtZXNzYWdlTW9kZWwnLCAnc2Vhc29uTW9kZWwnLCAnbGVhZ3VlU2VydmljZSddO1xubW9kdWxlLmV4cG9ydHMgPSBNeUxlYWd1ZXNDb250cm9sbGVyO1xuXG4iLCJ2YXIgVmlld1RlYW1Db250cm9sbGVyID0gZnVuY3Rpb24odGVhbSwgbGVhZ3VlVGVhbXMsICRzY29wZSwgJG1vZGFsLCAkd2luZG93LCAkdGltZW91dCwgJGxvY2F0aW9uLCAkc3RhdGUsICRzdGF0ZVBhcmFtcywgJGFuY2hvclNjcm9sbCwgbWVzc2FnZU1vZGVsLCB1c2VyTW9kZWwsIHVzZXJTZXJ2aWNlLCB0ZWFtU2VydmljZSkge1xuXG4gIHZhciBhY3RpdmF0ZSA9IGZ1bmN0aW9uKHRlYW0pIHtcbiAgICB0ZWFtU2VydmljZS5hY3RpdmF0ZVRlYW0odGVhbSlcbiAgICAgIC50aGVuKGZ1bmN0aW9uKGFjdGl2ZSkge1xuICAgICAgICB0ZWFtLmFjdGl2ZSA9IGFjdGl2ZTtcbiAgICAgIH0pO1xuICB9O1xuXG4gIHZhciBkZWFjdGl2YXRlID0gZnVuY3Rpb24odGVhbSkge1xuICAgIHRlYW1TZXJ2aWNlLmRlYWN0aXZhdGVUZWFtKHRlYW0pXG4gICAgICAudGhlbihmdW5jdGlvbihhY3RpdmUpIHtcbiAgICAgICAgdGVhbS5hY3RpdmUgPSBhY3RpdmU7XG4gICAgICB9KTtcbiAgfTtcblxuICB2YXIgc2V0TWVzc2FnZVN0YXRlID0gZnVuY3Rpb24oKSB7XG4gICAgaWYgKCFfLmhhcygkc2NvcGUudXNlck1vZGVsLnRlYW1NZXNzYWdlT3BlbiwgJHNjb3BlLnRlYW1EYXRhLmlkKSkge1xuICAgICAgJHNjb3BlLnVzZXJNb2RlbC50ZWFtTWVzc2FnZU9wZW5bJHNjb3BlLnRlYW1EYXRhLmlkXSA9ICRzY29wZS50ZWFtRGF0YS5tZXNzYWdlICYmICRzY29wZS50ZWFtRGF0YS5tZXNzYWdlLmxlbmd0aCA+IDA7XG4gICAgfVxuICB9O1xuXG4gICRzY29wZS50ZWFtRGF0YSA9IHRlYW0uZGF0YTtcbiAgJHNjb3BlLmxlYWd1ZVRlYW1zID0gbGVhZ3VlVGVhbXMuZGF0YTtcblxuICAkc2NvcGUudGVhbURyb3Bkb3duID0ge1xuICAgIGlzb3BlbjogZmFsc2VcbiAgfTtcblxuICAkc2NvcGUudXNlck1vZGVsID0gdXNlck1vZGVsO1xuXG4gICRzY29wZS50b2dnbGVEcm9wZG93biA9IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICRldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAkc2NvcGUudGVhbURyb3Bkb3duLmlzb3BlbiA9ICEkc2NvcGUudGVhbURyb3Bkb3duLmlzb3BlbjtcbiAgfTtcblxuICAkc2NvcGUuY29udGFjdENvbW1pc2ggPSBmdW5jdGlvbih0ZWFtKSB7XG5cbiAgICB2YXIgbW9kYWxJbnN0YW5jZSA9ICRtb2RhbC5vcGVuKHtcbiAgICAgIHRlbXBsYXRlVXJsOiAnbW9kdWxlcy9wcml2YXRlL2xlYWd1ZS9jb250YWN0L2xlYWd1ZS5jb250YWN0LnRwbC5odG1sJyxcbiAgICAgIGNvbnRyb2xsZXI6ICdMZWFndWVDb250YWN0Q29udHJvbGxlcicsXG4gICAgICByZXNvbHZlOiB7XG4gICAgICAgIGxlYWd1ZTogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgcmV0dXJuIHRlYW0ubGVhZ3VlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBtb2RhbEluc3RhbmNlLnJlc3VsdC50aGVuKGZ1bmN0aW9uKHBhcmFtcykge1xuICAgICAgdGVhbVNlcnZpY2Uuc2VuZENvbW1pc2hNZXNzYWdlKHRlYW0sIHBhcmFtcy5tZXNzYWdlKVxuICAgIH0sIGZ1bmN0aW9uICgpIHtcbiAgICAgIG1lc3NhZ2VNb2RlbC5zZXRNZXNzYWdlKHsgdHlwZTogJ3dhcm5pbmcnLCBjb250ZW50OiAnQ29udGFjdCBjb21taXNoIGNhbmNlbGxlZCcgfSwgZmFsc2UpO1xuICAgIH0pO1xuXG4gIH07XG5cbiAgJHNjb3BlLnVwZGF0ZU1lc3NhZ2UgPSBmdW5jdGlvbih0ZWFtKSB7XG5cbiAgICB2YXIgbW9kYWxJbnN0YW5jZSA9ICRtb2RhbC5vcGVuKHtcbiAgICAgIHRlbXBsYXRlVXJsOiAnbW9kdWxlcy9wcml2YXRlL3RlYW0vbWVzc2FnZS90ZWFtLm1lc3NhZ2UudHBsLmh0bWwnLFxuICAgICAgY29udHJvbGxlcjogJ1RlYW1NZXNzYWdlQ29udHJvbGxlcicsXG4gICAgICByZXNvbHZlOiB7XG4gICAgICAgIHRlYW06IGZ1bmN0aW9uKCkge1xuICAgICAgICAgIHJldHVybiB0ZWFtO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBtb2RhbEluc3RhbmNlLnJlc3VsdC50aGVuKGZ1bmN0aW9uKHBhcmFtcykge1xuICAgICAgdGVhbVNlcnZpY2UudXBkYXRlVGVhbU1lc3NhZ2UocGFyYW1zLnRlYW0sIHBhcmFtcy5zZW5kRW1haWwpXG4gICAgICAgIC50aGVuKGZ1bmN0aW9uKG1lc3NhZ2UpIHtcbiAgICAgICAgICAkc2NvcGUudGVhbURhdGEubWVzc2FnZSA9IG1lc3NhZ2U7XG4gICAgICAgIH0pO1xuXG4gICAgfSwgZnVuY3Rpb24gKCkge1xuICAgICAgbWVzc2FnZU1vZGVsLnNldE1lc3NhZ2UoeyB0eXBlOiAnd2FybmluZycsIGNvbnRlbnQ6ICdVcGRhdGUgdGVhbSBtZXNzYWdlIGNhbmNlbGxlZCcgfSwgZmFsc2UpO1xuICAgIH0pO1xuXG4gIH07XG5cbiAgJHNjb3BlLmNvbmZpcm1BY3RpdmF0ZSA9IGZ1bmN0aW9uKHRlYW0pIHtcbiAgICB2YXIgbW9kYWxJbnN0YW5jZSA9ICRtb2RhbC5vcGVuKHtcbiAgICAgIHRlbXBsYXRlVXJsOiAnY29tbW9uL21vZHVsZXMvY29uZmlybS9jb25maXJtLnRwbC5odG1sJyxcbiAgICAgIGNvbnRyb2xsZXI6ICdDb25maXJtQ29udHJvbGxlcicsXG4gICAgICBzaXplOiAnc20nLFxuICAgICAgcmVzb2x2ZToge1xuICAgICAgICBtZXNzYWdlOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICByZXR1cm4gJ1JlYWN0aXZhdGUgJyArIHRlYW0ubmFtZSArICc/JztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICAgIG1vZGFsSW5zdGFuY2UucmVzdWx0LnRoZW4oZnVuY3Rpb24oKSB7XG4gICAgICBhY3RpdmF0ZSh0ZWFtKTtcbiAgICB9LCBmdW5jdGlvbiAoKSB7XG4gICAgICBtZXNzYWdlTW9kZWwuc2V0TWVzc2FnZSh7IHR5cGU6ICd3YXJuaW5nJywgY29udGVudDogJ1RlYW0gcmVhY3RpdmF0aW9uIGNhbmNlbGxlZCcgfSwgZmFsc2UpO1xuICAgIH0pO1xuICB9O1xuXG4gICRzY29wZS5jb25maXJtRGVhY3RpdmF0ZSA9IGZ1bmN0aW9uKHRlYW0pIHtcbiAgICB2YXIgbW9kYWxJbnN0YW5jZSA9ICRtb2RhbC5vcGVuKHtcbiAgICAgIHRlbXBsYXRlVXJsOiAnY29tbW9uL21vZHVsZXMvY29uZmlybS9jb25maXJtLnRwbC5odG1sJyxcbiAgICAgIGNvbnRyb2xsZXI6ICdDb25maXJtQ29udHJvbGxlcicsXG4gICAgICBzaXplOiAnc20nLFxuICAgICAgcmVzb2x2ZToge1xuICAgICAgICBtZXNzYWdlOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICByZXR1cm4gJ0RlYWN0aXZhdGUgJyArIHRlYW0ubmFtZSArICc/JztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICAgIG1vZGFsSW5zdGFuY2UucmVzdWx0LnRoZW4oZnVuY3Rpb24oKSB7XG4gICAgICBkZWFjdGl2YXRlKHRlYW0pO1xuICAgIH0sIGZ1bmN0aW9uICgpIHtcbiAgICAgIG1lc3NhZ2VNb2RlbC5zZXRNZXNzYWdlKHsgdHlwZTogJ3dhcm5pbmcnLCBjb250ZW50OiAnVGVhbSBkZWFjdGl2YXRpb24gY2FuY2VsbGVkJyB9LCBmYWxzZSk7XG4gICAgfSk7XG4gIH07XG5cbiAgJHNjb3BlLmhhc05vdEVub3VnaFBpY2tzID0gZnVuY3Rpb24odGVhbSkge1xuICAgIHZhciBoYXNOb3RNZXRQaWNrQ291bnQgPSB0ZWFtLmN1cnJlbnRfcGlja3NfY291bnQgIT0gdGVhbS5sZWFndWUubWF4X3BpY2tzX3Blcl93ZWVrO1xuICAgIHZhciBoYXNOb3RNZXRHYW1lQ291bnQgPSB0ZWFtLmN1cnJlbnRfcGlja3NfY291bnQgIT0gdGVhbS5jdXJyZW50X3dlZWtfZ2FtZV9jb3VudDtcbiAgICByZXR1cm4gaGFzTm90TWV0UGlja0NvdW50ICYmIGhhc05vdE1ldEdhbWVDb3VudDtcbiAgfTtcblxuICAkc2NvcGUucGlja1N1bW1hcnkgPSBmdW5jdGlvbih0ZWFtKSB7XG4gICAgdmFyIG1zZyA9ICcnO1xuICAgIGlmICh0ZWFtLmxlYWd1ZS5tYXhfcGlja3NfcGVyX3dlZWsgJiYgdGVhbS5sZWFndWUubWF4X3BpY2tzX3Blcl93ZWVrIDw9IHRlYW0uY3VycmVudF93ZWVrX2dhbWVfY291bnQpIHtcbiAgICAgIG1zZyA9IHRlYW0uY3VycmVudF9waWNrc19jb3VudCArICcgb2YgJyArIHRlYW0ubGVhZ3VlLm1heF9waWNrc19wZXJfd2VlaztcbiAgICB9IGVsc2Uge1xuICAgICAgbXNnID0gdGVhbS5jdXJyZW50X3BpY2tzX2NvdW50ICsgJyBvZiAnICsgdGVhbS5jdXJyZW50X3dlZWtfZ2FtZV9jb3VudDtcbiAgICB9XG4gICAgcmV0dXJuIG1zZztcbiAgfTtcblxuICAkc2NvcGUuaXNDb21taXNoID0gZnVuY3Rpb24odGVhbSkge1xuICAgIHJldHVybiB0ZWFtLmNvbW1pc2hfaWRzLmluZGV4T2YodXNlck1vZGVsLnVzZXIuaWQpID4gLTE7XG4gIH07XG5cbiAgJHNjb3BlLmlzQ29hY2ggPSBmdW5jdGlvbih0ZWFtKSB7XG4gICAgcmV0dXJuIHRlYW0uY29hY2hfaWRzLmluZGV4T2YodXNlck1vZGVsLnVzZXIuaWQpID4gLTE7XG4gIH07XG5cbiAgJHNjb3BlLmlzQWRtaW4gPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdXNlck1vZGVsLnVzZXIuYWRtaW47XG4gIH07XG5cbiAgJHNjb3BlLnNob3dUZWFtID0gZnVuY3Rpb24odGVhbSkge1xuICAgIC8vIG9tZyB3aGF0IGEgc2luIHRoaXMgaXMuIHJlZnJlc2hlcyB0aGUgYnJvd3NlciB3aW5kb3cuIHRhbGsgYWJvdXQgdXNpbmcgYSBiaWcgYXNzIGhhbW1lci4uLlxuICAgIC8vIGhhdmUgdG8gZG8gdGhpcyBiZWNhdXNlIG9mIHJlbG9hZE9uU2VhcmNoOiBmYWxzZSBpbnNpZGUgb2Ygdmlldy9waWNrcy9pbmRleC5qcyBuZWVkZWQgdG8gcHJldmVudCBjb250cm9sbGVyIHJlaW5pdCB3aGVuIHVzaW5nIHRoZSB3ZWVrIGZpbHRlclxuICAgICR0aW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICR3aW5kb3cubG9jYXRpb24uaHJlZiA9ICRsb2NhdGlvbi5hYnNVcmwoKS5yZXBsYWNlKC9bXlxcL10qJC8sIHRlYW0uaWQpO1xuICAgICAgbG9jYXRpb24ucmVsb2FkKCk7XG4gICAgfSwgMjAwKTtcbiAgfTtcblxuICAkc2NvcGUuc2hvd0xlYWd1ZSA9IGZ1bmN0aW9uKHRlYW0pIHtcbiAgICAkbG9jYXRpb24ucGF0aCgnL3NlYXNvbi8nICsgdGVhbS5sZWFndWUuc2Vhc29uX2lkICsgJy9sZWFndWUvJyArIHRlYW0ubGVhZ3VlLmlkKTtcbiAgfTtcblxuICAkc2NvcGUuZWRpdFRlYW0gPSBmdW5jdGlvbih0ZWFtKSB7XG5cbiAgICB2YXIgbW9kYWxJbnN0YW5jZSA9ICRtb2RhbC5vcGVuKHtcbiAgICAgIHRlbXBsYXRlVXJsOiAnbW9kdWxlcy9wcml2YXRlL3RlYW0vZWRpdC90ZWFtLmVkaXQudHBsLmh0bWwnLFxuICAgICAgY29udHJvbGxlcjogJ0VkaXRUZWFtQ29udHJvbGxlcicsXG4gICAgICByZXNvbHZlOiB7XG4gICAgICAgIHRlYW06IGZ1bmN0aW9uKCkge1xuICAgICAgICAgIHJldHVybiB0ZWFtO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBtb2RhbEluc3RhbmNlLnJlc3VsdC50aGVuKGZ1bmN0aW9uKHRlYW0pIHtcbiAgICAgIHRlYW1TZXJ2aWNlLnVwZGF0ZVRlYW0odGVhbSlcbiAgICAgICAgLnRoZW4oZnVuY3Rpb24oKSB7XG4gICAgICAgICAgJHNjb3BlLnRlYW1EYXRhID0gdGVhbTtcbiAgICAgICAgfSk7XG4gICAgfSwgZnVuY3Rpb24gKCkge1xuICAgICAgbWVzc2FnZU1vZGVsLnNldE1lc3NhZ2UoeyB0eXBlOiAnd2FybmluZycsIGNvbnRlbnQ6ICdFZGl0IHRlYW0gY2FuY2VsbGVkJyB9LCBmYWxzZSk7XG4gICAgfSk7XG5cbiAgfTtcblxuICAkc2NvcGUubWFrZVBpY2sgPSBmdW5jdGlvbih0ZWFtLCBwaWNrKSB7XG4gICAgaWYgKCEkc2NvcGUuaXNDb2FjaCh0ZWFtKSB8fCAocGljayAmJiBwaWNrLmxvY2tlZCkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKHRlYW0ubGVhZ3VlLm1heF9waWNrc19wZXJfd2VlayA9PSAxKSB7XG4gICAgICAkbG9jYXRpb24udXJsKCRsb2NhdGlvbi5wYXRoKCkgKyAnL3BpY2snKTtcbiAgICB9IGVsc2Uge1xuICAgICAgJGxvY2F0aW9uLnVybCgkbG9jYXRpb24ucGF0aCgpICsgJy9waWNrcycpO1xuICAgIH1cbiAgfTtcblxuICAkc2NvcGUuc2hhcmVUZWFtRkIgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgb3B0aW9ucyA9IHtcbiAgICAgIG1ldGhvZDogJ2ZlZWQnLFxuICAgICAgbGluazogJGxvY2F0aW9uLmFic1VybCgpLFxuICAgICAgcGljdHVyZTogXCJodHRwczovL3d3dy5sb3Nlb3Jnb2hvbWUuY29tL3Jlc291cmNlcy9hc3NldHMvaW1hZ2VzL2JhY2tncm91bmQtc21hbGwuanBnXCIsXG4gICAgICBuYW1lOiAkc2NvcGUudGVhbURhdGEubmFtZSArICcgWyAnICsgJHNjb3BlLnRlYW1EYXRhLmxlYWd1ZS5uYW1lICsgJyBdJyxcbiAgICAgIGRlc2NyaXB0aW9uOiAkc2NvcGUudGVhbURhdGEubGVhZ3VlLmZvcm1hdCxcbiAgICAgIGNhcHRpb246ICRzY29wZS50ZWFtRGF0YS5sZWFndWUuc2Vhc29uX25hbWVcbiAgICB9O1xuICAgIEZCLnVpKG9wdGlvbnMpO1xuICB9O1xuXG4gICRzY29wZS4kb24oJ21lc3NhZ2VDb250cm9sbGVyOjpzaGFyZVRlYW1GQicsIGZ1bmN0aW9uKGV2ZW50LCBhcmdzKSB7XG4gICAgJHNjb3BlLnNoYXJlVGVhbUZCKCk7XG4gIH0pO1xuXG4gIHZhciBpbml0ID0gZnVuY3Rpb24gKCkge1xuICAgICRhbmNob3JTY3JvbGwoKTsgLy8gbWFrZXMgc3VyZSBwYWdlIGxvYWRzIGF0IHRoZSB0b3BcbiAgICBzZXRNZXNzYWdlU3RhdGUoKTtcbiAgfTtcbiAgaW5pdCgpO1xuXG59O1xuXG5WaWV3VGVhbUNvbnRyb2xsZXIuJGluamVjdCA9IFsndGVhbScsICdsZWFndWVUZWFtcycsICckc2NvcGUnLCAnJG1vZGFsJywgJyR3aW5kb3cnLCAnJHRpbWVvdXQnLCAnJGxvY2F0aW9uJywgJyRzdGF0ZScsICckc3RhdGVQYXJhbXMnLCAnJGFuY2hvclNjcm9sbCcsICdtZXNzYWdlTW9kZWwnLCAndXNlck1vZGVsJywgJ3VzZXJTZXJ2aWNlJywgJ3RlYW1TZXJ2aWNlJ107XG5tb2R1bGUuZXhwb3J0cyA9IFZpZXdUZWFtQ29udHJvbGxlcjtcbiIsInZhciBUZWFtTWVzc2FnZUNvbnRyb2xsZXIgPSBmdW5jdGlvbih0ZWFtLCAkbW9kYWxJbnN0YW5jZSwgJHNjb3BlLCAkbG9nKSB7XG5cbiAgJHNjb3BlLnRlYW1EYXRhID0gYW5ndWxhci5jb3B5KHRlYW0pO1xuXG4gICRzY29wZS5tZXNzYWdlT3B0aW9ucyA9IHsgc2VuZEVtYWlsOiBmYWxzZSB9O1xuXG4gICRzY29wZS51cGRhdGVNZXNzYWdlID0gZnVuY3Rpb24odGVhbSwgc2VuZEVtYWlsKSB7XG4gICAgJG1vZGFsSW5zdGFuY2UuY2xvc2UoeyB0ZWFtOiB0ZWFtLCBzZW5kRW1haWw6IHNlbmRFbWFpbH0pO1xuICB9O1xuXG4gICRzY29wZS5jYW5jZWwgPSBmdW5jdGlvbigpIHtcbiAgICAkbW9kYWxJbnN0YW5jZS5kaXNtaXNzKCdjYW5jZWwnKTtcbiAgfTtcblxuICAkc2NvcGUuaGFzRXJyb3IgPSBmdW5jdGlvbihpbnB1dCkge1xuICAgIHJldHVybiAhaW5wdXQuJGZvY3VzZWQgJiYgaW5wdXQuJGRpcnR5ICYmIGlucHV0LiRpbnZhbGlkO1xuICB9O1xuXG4gICRzY29wZS5oYXNQcm9wZXJ0eUVycm9yID0gZnVuY3Rpb24oaW5wdXQsIHByb3BlcnR5KSB7XG4gICAgcmV0dXJuICFpbnB1dC4kZm9jdXNlZCAmJiBpbnB1dC4kZGlydHkgJiYgaW5wdXQuJGVycm9yW3Byb3BlcnR5XTtcbiAgfTtcblxuICAvKipcbiAgICogSW52b2tlZCBvbiBzdGFydHVwLCBsaWtlIGEgY29uc3RydWN0b3IuXG4gICAqL1xuICB2YXIgaW5pdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAkbG9nLmRlYnVnKFwidGVhbSBtZXNzYWdlIGNvbnRyb2xsZXJcIik7XG4gIH07XG4gIGluaXQoKTtcbn07XG5cblRlYW1NZXNzYWdlQ29udHJvbGxlci4kaW5qZWN0ID0gWyd0ZWFtJywgJyRtb2RhbEluc3RhbmNlJywgJyRzY29wZScsICckbG9nJ107XG5tb2R1bGUuZXhwb3J0cyA9IFRlYW1NZXNzYWdlQ29udHJvbGxlcjtcbiIsInZhciBFZGl0VGVhbUNvbnRyb2xsZXIgPSBmdW5jdGlvbih0ZWFtLCAkc2NvcGUsICRsb2csICRtb2RhbEluc3RhbmNlKSB7XG5cbiAgICAkc2NvcGUudGVhbURhdGEgPSBhbmd1bGFyLmNvcHkodGVhbSk7XG5cbiAgICAkc2NvcGUuZWRpdFRlYW0gPSBmdW5jdGlvbih0ZWFtKSB7XG4gICAgICB0ZWFtLm5hbWUgPSB0ZWFtLm5hbWUudG9Mb3dlckNhc2UoKTtcbiAgICAgICRtb2RhbEluc3RhbmNlLmNsb3NlKHRlYW0pO1xuICAgIH07XG5cbiAgICAkc2NvcGUuY2FuY2VsID0gZnVuY3Rpb24gKCkge1xuICAgICAgJG1vZGFsSW5zdGFuY2UuZGlzbWlzcygnY2FuY2VsJyk7XG4gICAgfTtcblxuICAgICRzY29wZS5oYXNFcnJvciA9IGZ1bmN0aW9uKGlucHV0KSB7XG4gICAgICByZXR1cm4gIWlucHV0LiRmb2N1c2VkICYmIGlucHV0LiRkaXJ0eSAmJiBpbnB1dC4kaW52YWxpZDtcbiAgICB9O1xuXG4gICAgJHNjb3BlLmhhc1Byb3BlcnR5RXJyb3IgPSBmdW5jdGlvbihpbnB1dCwgcHJvcGVydHkpIHtcbiAgICAgIHJldHVybiAhaW5wdXQuJGZvY3VzZWQgJiYgaW5wdXQuJGRpcnR5ICYmIGlucHV0LiRlcnJvcltwcm9wZXJ0eV07XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIEludm9rZWQgb24gc3RhcnR1cCwgbGlrZSBhIGNvbnN0cnVjdG9yLlxuICAgICAqL1xuICAgIHZhciBpbml0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAkbG9nLmRlYnVnKFwiZWRpdCB0ZWFtIGNvbnRyb2xsZXJcIik7XG4gICAgfTtcbiAgICBpbml0KCk7XG5cbn07XG5cbkVkaXRUZWFtQ29udHJvbGxlci4kaW5qZWN0ID0gWyd0ZWFtJywgJyRzY29wZScsICckbG9nJywgJyRtb2RhbEluc3RhbmNlJ107XG5tb2R1bGUuZXhwb3J0cyA9IEVkaXRUZWFtQ29udHJvbGxlcjtcbiIsInZhciBUZWFtUGlja0NvbnRyb2xsZXIgPSBmdW5jdGlvbih0ZWFtLCB3ZWVrLCBnYW1lcywgcGlja3MsICRyb290U2NvcGUsICRzY29wZSwgJGxvZywgJGxvY2F0aW9uLCB1c2VyTW9kZWwsIGRhdGVVdGlscykge1xuXG4gIHZhciB1cGRhdGVQaWNrQ291bnQgPSBmdW5jdGlvbihwaWNrcykge1xuICAgIHZhciB3ZWVrUGlja3MgPSBfLmZpbHRlcihwaWNrcywgZnVuY3Rpb24ocGljaykge1xuICAgICAgcmV0dXJuIHBpY2sud2Vla19pZCA9PT0gJHNjb3BlLndlZWsuaWQ7XG4gICAgfSk7XG4gICAgJHNjb3BlLnBpY2tDb3VudCA9IHdlZWtQaWNrcy5sZW5ndGg7XG4gIH07XG5cbiAgJHNjb3BlLnRlYW0gPSB0ZWFtLmRhdGE7XG5cbiAgJHNjb3BlLndlZWsgPSB3ZWVrLmRhdGE7XG5cbiAgJHNjb3BlLmdhbWVzID0gZ2FtZXMuZGF0YTtcblxuICAkc2NvcGUucGlja3MgPSBwaWNrcy5kYXRhO1xuICB1cGRhdGVQaWNrQ291bnQoJHNjb3BlLnBpY2tzKTtcblxuICAkc2NvcGUuc2F2ZVBpY2tzRW5hYmxlZCA9IGZhbHNlO1xuXG4gICRzY29wZS5nYW1lUXVlcnkgPSAnJztcblxuICAkc2NvcGUucGlja01lc3NhZ2UgPSBmdW5jdGlvbih0ZWFtLCB3ZWVrKSB7XG4gICAgdmFyIG1zZyA9ICcnO1xuICAgIGlmICghdGVhbS5sZWFndWUubWF4X3BpY2tzX3Blcl93ZWVrIHx8IHRlYW0ubGVhZ3VlLm1heF9waWNrc19wZXJfd2VlayA+PSAkc2NvcGUuZ2FtZXMubGVuZ3RoKSB7XG4gICAgICBtc2cgPSAnUGljayBhIGxvc2VyIGZvciBhbGwgZ2FtZXMnO1xuICAgIH0gZWxzZSB7XG4gICAgICBtc2cgPSAnUGljayAnICsgdGVhbS5sZWFndWUubWF4X3BpY2tzX3Blcl93ZWVrICsgJyBsb3Nlcic7XG4gICAgICBpZiAodGVhbS5sZWFndWUubWF4X3BpY2tzX3Blcl93ZWVrID4gMSkge1xuICAgICAgICBtc2cgKz0gJ3MnO1xuICAgICAgfVxuICAgIH1cbiAgICBtc2cgKz0gJyBmb3IgJyArIHdlZWsubmFtZTtcbiAgICByZXR1cm4gbXNnO1xuICB9O1xuXG4gICRzY29wZS5zYXZlUGlja3MgPSBmdW5jdGlvbigpIHtcbiAgICAkcm9vdFNjb3BlLiRicm9hZGNhc3QoJ1RlYW1QaWNrQ29udHJvbGxlcjo6c2F2ZVBpY2tzJyk7XG4gIH07XG5cbiAgJHNjb3BlLmdldFNjb3JlID0gZnVuY3Rpb24oZ2FtZSwgaW5kZXgpIHtcbiAgICAvLyB3YXJuaW5nOiBtYWdpYyBudW1iZXJzIGFoZWFkXG4gICAgdmFyIHNjb3JlID0gKGluZGV4ID09PSAwKSA/IGdhbWUudmlzaXRpbmdfc3F1YWRfc2NvcmUgOiBnYW1lLmhvbWVfc3F1YWRfc2NvcmU7XG4gICAgcmV0dXJuIHNjb3JlO1xuICB9O1xuXG4gICRzY29wZS5zdGFydHMgPSBmdW5jdGlvbihnYW1lKSB7XG4gICAgdmFyIHN0YXJ0c0xhYmVsID0gJyc7XG4gICAgaWYgKGdhbWUubm90ZSAmJiBnYW1lLm5vdGUubGVuZ3RoID4gMCkge1xuICAgICAgc3RhcnRzTGFiZWwgKz0gZ2FtZS5ub3RlICsgJyAtICc7XG4gICAgfVxuICAgIGlmIChnYW1lLnRiZCkge1xuICAgICAgc3RhcnRzTGFiZWwgKz0gJ1RCRCc7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0YXJ0c0xhYmVsICs9IChnYW1lLnN0YXJ0ZWQpID8gJ1N0YXJ0ZWQgJyA6ICdTdGFydHMgJztcbiAgICAgIHN0YXJ0c0xhYmVsICs9IGRhdGVVdGlscy5kYXRlRm9ybWF0KGdhbWUuc3RhcnRzX2F0LCBcImRkZCwgbW1tIGQgaDpNTSBUVCBaXCIpO1xuICAgIH1cbiAgICBpZiAoZ2FtZS5pZl9uZWNlc3NhcnkpIHtcbiAgICAgIHN0YXJ0c0xhYmVsICs9ICcgKklmIE5lY2Vzc2FyeSc7XG4gICAgfVxuICAgIGlmIChnYW1lLnBvc3Rwb25lZCkge1xuICAgICAgc3RhcnRzTGFiZWwgKz0gJyBbICpQUEQgXSc7XG4gICAgfVxuICAgIHJldHVybiBzdGFydHNMYWJlbDtcbiAgfTtcblxuICAkc2NvcGUuc2hvd1RlYW0gPSBmdW5jdGlvbih0ZWFtKSB7XG4gICAgdmFyIHRlYW1QYXRoID0gJy9zZWFzb24vJyArIHRlYW0ubGVhZ3VlLnNlYXNvbl9pZCArICcvbGVhZ3VlLycgKyB0ZWFtLmxlYWd1ZS5pZCArICcvdGVhbS8nICsgdGVhbS5pZCArICc/d2Vlaz0nICsgJHNjb3BlLndlZWsuc2x1ZztcbiAgICAkbG9jYXRpb24udXJsKHRlYW1QYXRoKTtcbiAgfTtcblxuICAkc2NvcGUuaXNDb2FjaCA9IGZ1bmN0aW9uKHRlYW0pIHtcbiAgICByZXR1cm4gdGVhbS5jb2FjaF9pZHMuaW5kZXhPZih1c2VyTW9kZWwudXNlci5pZCkgPiAtMTtcbiAgfTtcblxuICAkc2NvcGUuc2VhcmNoID0gZnVuY3Rpb24oZ2FtZSkge1xuICAgIHZhciBtYXRjaCA9IGZhbHNlO1xuICAgIF8uZWFjaChnYW1lLnNxdWFkcywgZnVuY3Rpb24oc3F1YWQpIHtcbiAgICAgIGlmIChzcXVhZC5uYW1lLnRvTG93ZXJDYXNlKCkuaW5kZXhPZigkc2NvcGUuZ2FtZVF1ZXJ5LnRvTG93ZXJDYXNlKCkpICE9IC0xKSB7XG4gICAgICAgIG1hdGNoID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gbWF0Y2g7XG4gIH07XG5cbiAgJHNjb3BlLiRvbignVGVhbVBpY2tDb250cm9sbGVyOjpwaWNrc0NoYW5nZWQnLCBmdW5jdGlvbihldmVudCwgYXJncykge1xuICAgICRzY29wZS5zYXZlUGlja3NFbmFibGVkID0gdHJ1ZTtcbiAgICB1cGRhdGVQaWNrQ291bnQoYXJncy5waWNrcyk7XG4gIH0pO1xuXG59O1xuXG5UZWFtUGlja0NvbnRyb2xsZXIuJGluamVjdCA9IFsndGVhbScsICd3ZWVrJywgJ2dhbWVzJywgJ3BpY2tzJywgJyRyb290U2NvcGUnLCAnJHNjb3BlJywgJyRsb2cnLCAnJGxvY2F0aW9uJywgJ3VzZXJNb2RlbCcsICdkYXRlVXRpbHMnXTtcbm1vZHVsZS5leHBvcnRzID0gVGVhbVBpY2tDb250cm9sbGVyO1xuIiwidmFyIFBsYXlMZWFndWVzQ29udHJvbGxlciA9IGZ1bmN0aW9uKGxlYWd1ZXMsICRzY29wZSwgJGxvZywgJGxvY2F0aW9uLCAkbW9kYWwsIHVzZXJNb2RlbCwgbWVzc2FnZU1vZGVsLCBzZWFzb25Nb2RlbCwgbGVhZ3VlU2VydmljZSkge1xuXG4gICRzY29wZS5sZWFndWVzID0gbGVhZ3Vlcy5kYXRhO1xuXG4gIC8vIHBhZ2luYXRpb25cbiAgJHNjb3BlLmN1cnJlbnRMZWFndWVQYWdlID0gMTtcbiAgJHNjb3BlLmxlYWd1ZXNQZXJQYWdlID0gMTAwO1xuXG4gICRzY29wZS5jcmVhdGVMZWFndWUgPSBmdW5jdGlvbihzZWFzb24pIHtcblxuICAgIHZhciBtb2RhbEluc3RhbmNlID0gJG1vZGFsLm9wZW4oe1xuICAgICAgdGVtcGxhdGVVcmw6ICdtb2R1bGVzL3ByaXZhdGUvbGVhZ3VlL25ldy9sZWFndWUubmV3LnRwbC5odG1sJyxcbiAgICAgIGNvbnRyb2xsZXI6ICdOZXdMZWFndWVDb250cm9sbGVyJ1xuICAgIH0pO1xuXG4gICAgbW9kYWxJbnN0YW5jZS5yZXN1bHQudGhlbihmdW5jdGlvbihsZWFndWUpIHtcbiAgICAgIGxlYWd1ZVNlcnZpY2UuY3JlYXRlTGVhZ3VlKGxlYWd1ZSk7XG4gICAgfSwgZnVuY3Rpb24gKCkge1xuICAgICAgJGxvZy5kZWJ1ZygnQ3JlYXRlIGxlYWd1ZSBtb2RhbCBkaXNtaXNzZWQuLi4nKTtcbiAgICAgIG1lc3NhZ2VNb2RlbC5zZXRNZXNzYWdlKHsgdHlwZTogJ3dhcm5pbmcnLCBjb250ZW50OiAnQ3JlYXRlIGxlYWd1ZSBjYW5jZWxsZWQnIH0sIGZhbHNlKTtcbiAgICB9KTtcblxuICB9O1xuXG4gICRzY29wZS5qb2luTGVhZ3VlID0gZnVuY3Rpb24oc2Vhc29uKSB7XG4gICAgdmFyIHNlYXNvbiA9IHNlYXNvbk1vZGVsLmdldEN1cnJlbnRTZWFzb24oKTtcbiAgICAkbG9jYXRpb24udXJsKCcvc2Vhc29uLycgKyBzZWFzb24uaWQgKyAnL2xlYWd1ZXMvcHVibGljJyk7XG4gIH07XG5cbiAgJHNjb3BlLnZpZXdMZWFndWUgPSBmdW5jdGlvbihsZWFndWUpIHtcbiAgICAkbG9jYXRpb24udXJsKCcvc2Vhc29uLycgKyBsZWFndWUuc2Vhc29uX2lkICsgJy9sZWFndWUvJyArIGxlYWd1ZS5pZCk7XG4gIH07XG5cbiAgJHNjb3BlLnN0YXJ0cyA9IGZ1bmN0aW9uKGxlYWd1ZSkge1xuICAgIHZhciBzdGFydHNMYWJlbCA9IChsZWFndWUuc3RhcnRlZCkgPyAnU3RhcnRlZCAnIDogJ1N0YXJ0cyAnO1xuICAgIHJldHVybiBzdGFydHNMYWJlbCArIGxlYWd1ZS5zdGFydF93ZWVrO1xuICB9O1xuXG4gICRzY29wZS5pc0NvbW1pc2ggPSBmdW5jdGlvbihsZWFndWUpIHtcbiAgICByZXR1cm4gbGVhZ3VlLmNvbW1pc2hfaWRzLmluZGV4T2YodXNlck1vZGVsLnVzZXIuaWQpID4gLTE7XG4gIH07XG5cbiAgJHNjb3BlLnNlYXJjaCA9IGZ1bmN0aW9uKGl0ZW0pIHtcbiAgICBpZiAoaXRlbS5uYW1lLmluZGV4T2YoJHNjb3BlLnF1ZXJ5LnRvTG93ZXJDYXNlKCkpICE9IC0xIHx8IGl0ZW0uY29tbWlzaF9uYW1lcy5qb2luKCcsICcpLmluZGV4T2YoJHNjb3BlLnF1ZXJ5LnRvTG93ZXJDYXNlKCkpICE9IC0xKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9O1xuXG4gIC8qKlxuICAgKiBJbnZva2VkIG9uIHN0YXJ0dXAsIGxpa2UgYSBjb25zdHJ1Y3Rvci5cbiAgICovXG4gIHZhciBpbml0ID0gZnVuY3Rpb24gKCkge1xuICAgICRsb2cuZGVidWcoXCJteSBsZWFndWVzIGNvbnRyb2xsZXJcIik7XG4gIH07XG4gIGluaXQoKTtcblxufTtcblxuUGxheUxlYWd1ZXNDb250cm9sbGVyLiRpbmplY3QgPSBbJ2xlYWd1ZXMnLCAnJHNjb3BlJywgJyRsb2cnLCAnJGxvY2F0aW9uJywgJyRtb2RhbCcsICd1c2VyTW9kZWwnLCAnbWVzc2FnZU1vZGVsJywgJ3NlYXNvbk1vZGVsJywgJ2xlYWd1ZVNlcnZpY2UnXTtcbm1vZHVsZS5leHBvcnRzID0gUGxheUxlYWd1ZXNDb250cm9sbGVyO1xuXG4iLCJ2YXIgUGxheVRlYW1zQ29udHJvbGxlciA9IGZ1bmN0aW9uKHRlYW1zLCAkc2NvcGUsICRsb2csICRzdGF0ZVBhcmFtcywgJGxvY2F0aW9uKSB7XG5cbiAgJHNjb3BlLnRlYW1zID0gdGVhbXMuZGF0YTtcblxuICAvLyBwYWdpbmF0aW9uXG4gICRzY29wZS5jdXJyZW50VGVhbVBhZ2UgPSAxO1xuICAkc2NvcGUudGVhbXNQZXJQYWdlID0gMTAwO1xuXG4gICRzY29wZS5pblBsYXkgPSBmdW5jdGlvbih0ZWFtKSB7XG4gICAgcmV0dXJuICh0ZWFtLmFjdGl2ZSAmJiB0ZWFtLmFsaXZlKSA/IDAgOiAxO1xuICB9O1xuXG4gICRzY29wZS5zaG93VGVhbSA9IGZ1bmN0aW9uKHRlYW0pIHtcbiAgICAkbG9jYXRpb24udXJsKCcvc2Vhc29uLycgKyAkc3RhdGVQYXJhbXMuc2Vhc29uSWQgKyAnL2xlYWd1ZS8nICsgdGVhbS5sZWFndWUuaWQgKyAnL3RlYW0vJyArIHRlYW0uaWQpO1xuICB9O1xuXG4gICRzY29wZS5zZWFyY2ggPSBmdW5jdGlvbihpdGVtKSB7XG4gICAgaWYgKGl0ZW0ubmFtZS5pbmRleE9mKCRzY29wZS5xdWVyeS50b0xvd2VyQ2FzZSgpKSAhPSAtMSB8fCBpdGVtLmxlYWd1ZS5uYW1lLmluZGV4T2YoJHNjb3BlLnF1ZXJ5LnRvTG93ZXJDYXNlKCkpICE9IC0xKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9O1xuXG4gICRzY29wZS5waWNrU3RhdHVzID0gZnVuY3Rpb24ocGljaykge1xuICAgIHZhciBzdGF0dXMgPSAnJztcbiAgICBpZiAocGljay53YXJuaW5nID09PSB0cnVlKSB7XG4gICAgICBzdGF0dXMgPSAnd2FybmluZyc7XG4gICAgfSBlbHNlIGlmIChwaWNrLmNvcnJlY3QgPT09IHRydWUpIHtcbiAgICAgIHN0YXR1cyA9ICdjaGVjayc7XG4gICAgfSBlbHNlIGlmIChwaWNrLmdhbWUgJiYgKHBpY2suZ2FtZS50aWUgPT09IHRydWUgfHwgcGljay5nYW1lLmluY29tcGxldGUgPT09IHRydWUpKSB7XG4gICAgICBzdGF0dXMgPSAnbWludXMnO1xuICAgIH0gZWxzZSBpZiAocGljay5jb3JyZWN0ID09PSBmYWxzZSkge1xuICAgICAgc3RhdHVzID0gJ3RpbWVzJztcbiAgICB9IGVsc2UgaWYgKHBpY2subG9ja2VkID09PSB0cnVlKSB7XG4gICAgICBzdGF0dXMgPSAnbG9jayc7XG4gICAgfSBlbHNlIGlmIChwaWNrLmxvY2tlZCA9PT0gZmFsc2UpIHtcbiAgICAgIHN0YXR1cyA9ICd1bmxvY2snO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdGF0dXMgPSAndGgtbGlzdCc7XG4gICAgfVxuICAgIHJldHVybiBzdGF0dXM7XG4gIH07XG5cbiAgLyoqXG4gICAqIEludm9rZWQgb24gc3RhcnR1cCwgbGlrZSBhIGNvbnN0cnVjdG9yLlxuICAgKi9cbiAgdmFyIGluaXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgJGxvZy5kZWJ1ZyhcInBsYXkgdGVhbXMgY29udHJvbGxlclwiKTtcbiAgfTtcbiAgaW5pdCgpO1xuXG59O1xuXG5QbGF5VGVhbXNDb250cm9sbGVyLiRpbmplY3QgPSBbJ3RlYW1zJywgJyRzY29wZScsICckbG9nJywgJyRzdGF0ZVBhcmFtcycsICckbG9jYXRpb24nXTtcbm1vZHVsZS5leHBvcnRzID0gUGxheVRlYW1zQ29udHJvbGxlcjtcbiIsInZhciBBZG1pblNlYXNvbnNDb250cm9sbGVyID0gZnVuY3Rpb24oJHNjb3BlLCAkbG9jYXRpb24sICRtb2RhbCwgc2Vhc29uTW9kZWwsIHNlYXNvblNlcnZpY2UpIHtcblxuICAkc2NvcGUuc2Vhc29ucyA9IHNlYXNvbk1vZGVsLnNlYXNvbnM7XG5cbiAgJHNjb3BlLnNob3dTZWFzb24gPSBmdW5jdGlvbihzZWFzb24pIHtcbiAgICAkbG9jYXRpb24udXJsKCRsb2NhdGlvbi5wYXRoKCkgKyAnLycgKyBzZWFzb24uaWQpO1xuICB9O1xuXG4gICRzY29wZS5jcmVhdGVTZWFzb24gPSBmdW5jdGlvbigpIHtcblxuICAgIHZhciBtb2RhbEluc3RhbmNlID0gJG1vZGFsLm9wZW4oe1xuICAgICAgdGVtcGxhdGVVcmw6ICdtb2R1bGVzL3ByaXZhdGUvYWRtaW4vc2Vhc29ucy9zZWFzb24vbmV3L2FkbWluLnNlYXNvbi5uZXcudHBsLmh0bWwnLFxuICAgICAgY29udHJvbGxlcjogJ0FkbWluU2Vhc29uTmV3Q29udHJvbGxlcidcbiAgICB9KTtcblxuICAgIG1vZGFsSW5zdGFuY2UucmVzdWx0LnRoZW4oZnVuY3Rpb24oc2Vhc29uKSB7XG4gICAgICBzZWFzb25TZXJ2aWNlLmNyZWF0ZVNlYXNvbihzZWFzb24pO1xuICAgIH0sIGZ1bmN0aW9uICgpIHtcbiAgICAgICRsb2cuZGVidWcoJ0NyZWF0ZSBzZWFzb24gbW9kYWwgZGlzbWlzc2VkLi4uJyk7XG4gICAgICBtZXNzYWdlTW9kZWwuc2V0TWVzc2FnZSh7IHR5cGU6ICd3YXJuaW5nJywgY29udGVudDogJ0NyZWF0ZSBzZWFzb24gY2FuY2VsbGVkJyB9LCBmYWxzZSk7XG4gICAgfSk7XG5cbiAgfTtcblxuICAvKipcbiAgICogSW52b2tlZCBvbiBzdGFydHVwLCBsaWtlIGEgY29uc3RydWN0b3IuXG4gICAqL1xuICB2YXIgaW5pdCA9IGZ1bmN0aW9uICgpIHtcbiAgfTtcbiAgaW5pdCgpO1xufTtcblxuQWRtaW5TZWFzb25zQ29udHJvbGxlci4kaW5qZWN0ID0gWyckc2NvcGUnLCAnJGxvY2F0aW9uJywgJyRtb2RhbCcsICdzZWFzb25Nb2RlbCcsICdzZWFzb25TZXJ2aWNlJ107XG5tb2R1bGUuZXhwb3J0cyA9IEFkbWluU2Vhc29uc0NvbnRyb2xsZXI7XG4iLCJ2YXIgQWRtaW5XZWVrQ29udHJvbGxlciA9IGZ1bmN0aW9uKHdlZWssIGdhbWVzLCAkc2NvcGUsICRsb2csICRtb2RhbCwgZGF0ZVV0aWxzLCBnYW1lU2VydmljZSwgc3F1YWRTZXJ2aWNlLCB3ZWVrU2VydmljZSwgbWVzc2FnZU1vZGVsKSB7XG5cbiAgdmFyIGNvbXBsZXRlV2VlayA9IGZ1bmN0aW9uKHdlZWspIHtcbiAgICB3ZWVrU2VydmljZS5jb21wbGV0ZVdlZWsod2VlaylcbiAgICAgIC50aGVuKGZ1bmN0aW9uKCkge1xuICAgICAgICAkc2NvcGUud2Vla0RhdGEuY29tcGxldGUgPSB0cnVlO1xuICAgICAgfSk7XG4gIH07XG5cbiAgdmFyIHNlbmRSZW1pbmRlciA9IGZ1bmN0aW9uKHdlZWspIHtcbiAgICB3ZWVrU2VydmljZS5zZW5kUmVtaW5kZXIod2Vlayk7XG4gIH07XG5cbiAgJHNjb3BlLndlZWtEYXRhID0gd2Vlay5kYXRhO1xuXG4gICRzY29wZS5nYW1lcyA9IGdhbWVzLmRhdGE7XG5cbiAgJHNjb3BlLmRhdGVGb3JtYXQgPSBkYXRlVXRpbHMuZGF0ZUZvcm1hdDtcblxuICAkc2NvcGUuZ2FtZVF1ZXJ5ID0gJyc7XG5cbiAgJHNjb3BlLmVkaXRXZWVrID0gZnVuY3Rpb24od2Vlaykge1xuXG4gICAgdmFyIG1vZGFsSW5zdGFuY2UgPSAkbW9kYWwub3Blbih7XG4gICAgICB0ZW1wbGF0ZVVybDogJ21vZHVsZXMvcHJpdmF0ZS9hZG1pbi93ZWVrL2VkaXQvYWRtaW4ud2Vlay5lZGl0LnRwbC5odG1sJyxcbiAgICAgIGNvbnRyb2xsZXI6ICdBZG1pbldlZWtFZGl0Q29udHJvbGxlcicsXG4gICAgICByZXNvbHZlOiB7XG4gICAgICAgIHdlZWs6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgIHJldHVybiB3ZWVrO1xuICAgICAgICB9LFxuICAgICAgICB3ZWVrVHlwZXM6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgIHJldHVybiB3ZWVrU2VydmljZS5nZXRXZWVrVHlwZXMoKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuXG4gICAgbW9kYWxJbnN0YW5jZS5yZXN1bHQudGhlbihmdW5jdGlvbih3ZWVrKSB7XG4gICAgICB3ZWVrU2VydmljZS51cGRhdGVXZWVrKHdlZWspO1xuICAgIH0sIGZ1bmN0aW9uICgpIHtcbiAgICAgICRsb2cuZGVidWcoJ1dlZWsgdXBkYXRlIGNhbmNlbGxlZC4uLicpO1xuICAgICAgbWVzc2FnZU1vZGVsLnNldE1lc3NhZ2UoeyB0eXBlOiAnd2FybmluZycsIGNvbnRlbnQ6ICdXZWVrIHVwZGF0ZSBjYW5jZWxsZWQnIH0sIGZhbHNlKTtcbiAgICB9KTtcblxuICB9O1xuXG4gICRzY29wZS5lZGl0R2FtZSA9IGZ1bmN0aW9uKGdhbWUsIHdlZWspIHtcblxuICAgIHZhciBtb2RhbEluc3RhbmNlID0gJG1vZGFsLm9wZW4oe1xuICAgICAgdGVtcGxhdGVVcmw6ICdtb2R1bGVzL3ByaXZhdGUvYWRtaW4vZ2FtZS9lZGl0L2FkbWluLmdhbWUuZWRpdC50cGwuaHRtbCcsXG4gICAgICBjb250cm9sbGVyOiAnQWRtaW5HYW1lRWRpdENvbnRyb2xsZXInLFxuICAgICAgcmVzb2x2ZToge1xuICAgICAgICBnYW1lOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICByZXR1cm4gZ2FtZTtcbiAgICAgICAgfSxcbiAgICAgICAgc3F1YWRzOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICByZXR1cm4gc3F1YWRTZXJ2aWNlLmdldFdlZWtTcXVhZHMod2Vlayk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcblxuICAgIG1vZGFsSW5zdGFuY2UucmVzdWx0LnRoZW4oZnVuY3Rpb24oZ2FtZSkge1xuICAgICAgZ2FtZVNlcnZpY2UudXBkYXRlR2FtZShnYW1lKTtcbiAgICB9LCBmdW5jdGlvbiAoKSB7XG4gICAgICAkbG9nLmRlYnVnKCdHYW1lIHVwZGF0ZSBjYW5jZWxsZWQuLi4nKTtcbiAgICAgIG1lc3NhZ2VNb2RlbC5zZXRNZXNzYWdlKHsgdHlwZTogJ3dhcm5pbmcnLCBjb250ZW50OiAnR2FtZSB1cGRhdGUgY2FuY2VsbGVkJyB9LCBmYWxzZSk7XG4gICAgfSk7XG5cbiAgfTtcblxuICAkc2NvcGUuY3JlYXRlR2FtZSA9IGZ1bmN0aW9uKHdlZWssIGdhbWVzKSB7XG5cbiAgICB2YXIgbW9kYWxJbnN0YW5jZSA9ICRtb2RhbC5vcGVuKHtcbiAgICAgIHRlbXBsYXRlVXJsOiAnbW9kdWxlcy9wcml2YXRlL2FkbWluL2dhbWUvbmV3L2FkbWluLmdhbWUubmV3LnRwbC5odG1sJyxcbiAgICAgIGNvbnRyb2xsZXI6ICdBZG1pbkdhbWVOZXdDb250cm9sbGVyJyxcbiAgICAgIHJlc29sdmU6IHtcbiAgICAgICAgd2VlazogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgcmV0dXJuIHdlZWs7XG4gICAgICAgIH0sXG4gICAgICAgIGxhc3RHYW1lOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICBpZiAoZ2FtZXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgcmV0dXJuIGdhbWVzW2dhbWVzLmxlbmd0aCAtIDFdXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBzcXVhZHM6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgIHJldHVybiBzcXVhZFNlcnZpY2UuZ2V0V2Vla1NxdWFkcyh3ZWVrKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuXG4gICAgbW9kYWxJbnN0YW5jZS5yZXN1bHQudGhlbihmdW5jdGlvbihnYW1lKSB7XG4gICAgICBnYW1lU2VydmljZS5jcmVhdGVHYW1lKGdhbWUpO1xuICAgIH0sIGZ1bmN0aW9uICgpIHtcbiAgICAgICRsb2cuZGVidWcoJ0NyZWF0ZSBnYW1lIG1vZGFsIGRpc21pc3NlZC4uLicpO1xuICAgICAgbWVzc2FnZU1vZGVsLnNldE1lc3NhZ2UoeyB0eXBlOiAnd2FybmluZycsIGNvbnRlbnQ6ICdDcmVhdGUgZ2FtZSBjYW5jZWxsZWQnIH0sIGZhbHNlKTtcbiAgICB9KTtcblxuICB9O1xuXG4gICRzY29wZS5jb25maXJtU2VuZFJlbWluZGVyID0gZnVuY3Rpb24od2Vlaykge1xuICAgIHZhciBtb2RhbEluc3RhbmNlID0gJG1vZGFsLm9wZW4oe1xuICAgICAgdGVtcGxhdGVVcmw6ICdjb21tb24vbW9kdWxlcy9jb25maXJtL2NvbmZpcm0udHBsLmh0bWwnLFxuICAgICAgY29udHJvbGxlcjogJ0NvbmZpcm1Db250cm9sbGVyJyxcbiAgICAgIHJlc29sdmU6IHtcbiAgICAgICAgbWVzc2FnZTogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgcmV0dXJuICdBcmUgeW91IHN1cmUgeW91IHdhbnQgdG8gc2VuZCB3ZWVrbHkgcmVtaW5kZXI/JztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICAgIG1vZGFsSW5zdGFuY2UucmVzdWx0LnRoZW4oZnVuY3Rpb24oKSB7XG4gICAgICBzZW5kUmVtaW5kZXIod2Vlayk7XG4gICAgfSwgZnVuY3Rpb24gKCkge1xuICAgICAgJGxvZy5kZWJ1ZygnU2VuZCByZW1pbmRlciBjYW5jZWxsZWQuLi4nKTtcbiAgICAgIG1lc3NhZ2VNb2RlbC5zZXRNZXNzYWdlKHsgdHlwZTogJ3dhcm5pbmcnLCBjb250ZW50OiAnU2VuZCByZW1pbmRlciBjYW5jZWxsZWQnIH0sIGZhbHNlKTtcbiAgICB9KTtcbiAgfTtcblxuICAkc2NvcGUuY29uZmlybVdlZWtDb21wbGV0ZSA9IGZ1bmN0aW9uKHdlZWspIHtcbiAgICB2YXIgbW9kYWxJbnN0YW5jZSA9ICRtb2RhbC5vcGVuKHtcbiAgICAgIHRlbXBsYXRlVXJsOiAnY29tbW9uL21vZHVsZXMvY29uZmlybS9jb25maXJtLnRwbC5odG1sJyxcbiAgICAgIGNvbnRyb2xsZXI6ICdDb25maXJtQ29udHJvbGxlcicsXG4gICAgICByZXNvbHZlOiB7XG4gICAgICAgIG1lc3NhZ2U6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgIHJldHVybiAnQXJlIHlvdSBzdXJlIHlvdSB3YW50IHRvIG1hcmsgdGhpcyB3ZWVrIGFzIGNvbXBsZXRlPyc7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgICBtb2RhbEluc3RhbmNlLnJlc3VsdC50aGVuKGZ1bmN0aW9uKCkge1xuICAgICAgY29tcGxldGVXZWVrKHdlZWspO1xuICAgIH0sIGZ1bmN0aW9uICgpIHtcbiAgICAgICRsb2cuZGVidWcoJ0NvbXBsZXRlIHdlZWsgY2FuY2VsbGVkLi4uJyk7XG4gICAgICBtZXNzYWdlTW9kZWwuc2V0TWVzc2FnZSh7IHR5cGU6ICd3YXJuaW5nJywgY29udGVudDogJ1dlZWsgY29tcGxldGUgY2FuY2VsbGVkJyB9LCBmYWxzZSk7XG4gICAgfSk7XG4gIH07XG5cbiAgJHNjb3BlLnNlYXJjaCA9IGZ1bmN0aW9uKGdhbWUpIHtcbiAgICB2YXIgbWF0Y2ggPSBmYWxzZTtcbiAgICBfLmVhY2goZ2FtZS5zcXVhZHMsIGZ1bmN0aW9uKHNxdWFkKSB7XG4gICAgICBpZiAoc3F1YWQubmFtZS50b0xvd2VyQ2FzZSgpLmluZGV4T2YoJHNjb3BlLmdhbWVRdWVyeS50b0xvd2VyQ2FzZSgpKSAhPSAtMSkge1xuICAgICAgICBtYXRjaCA9IHRydWU7XG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIG1hdGNoO1xuICB9O1xuXG4gIC8qKlxuICAgKiBJbnZva2VkIG9uIHN0YXJ0dXAsIGxpa2UgYSBjb25zdHJ1Y3Rvci5cbiAgICovXG4gIHZhciBpbml0ID0gZnVuY3Rpb24gKCkge1xuICB9O1xuICBpbml0KCk7XG59O1xuXG5BZG1pbldlZWtDb250cm9sbGVyLiRpbmplY3QgPSBbJ3dlZWsnLCAnZ2FtZXMnLCAnJHNjb3BlJywgJyRsb2cnLCAnJG1vZGFsJywgJ2RhdGVVdGlscycsICdnYW1lU2VydmljZScsICdzcXVhZFNlcnZpY2UnLCAnd2Vla1NlcnZpY2UnLCAnbWVzc2FnZU1vZGVsJ107XG5tb2R1bGUuZXhwb3J0cyA9IEFkbWluV2Vla0NvbnRyb2xsZXI7XG4iLCJ2YXIgQWRtaW5TcXVhZHNDb250cm9sbGVyID0gZnVuY3Rpb24oc3F1YWRzLCAkc2NvcGUsICRsb2csICRtb2RhbCwgc3F1YWRTZXJ2aWNlLCBtZXNzYWdlTW9kZWwpIHtcblxuICAkc2NvcGUuc3F1YWRzID0gc3F1YWRzLmRhdGE7XG5cbiAgJHNjb3BlLnNlbGVjdGVkU3F1YWRUeXBlID0gbnVsbDtcblxuICAkc2NvcGUuc3F1YWRUeXBlcyA9IF8uY29tcGFjdChfLnVuaXEoXy5tYXAoJHNjb3BlLnNxdWFkcywgZnVuY3Rpb24oc3F1YWQpIHtcbiAgICAgIHJldHVybiBzcXVhZC5zcXVhZF90eXBlO1xuICB9KSkpO1xuXG4gICRzY29wZS5xdWVyeSA9ICcnO1xuXG4gICRzY29wZS5jcmVhdGVTcXVhZCA9IGZ1bmN0aW9uKCkge1xuXG4gICAgdmFyIG1vZGFsSW5zdGFuY2UgPSAkbW9kYWwub3Blbih7XG4gICAgICB0ZW1wbGF0ZVVybDogJ21vZHVsZXMvcHJpdmF0ZS9hZG1pbi9zcXVhZHMvbmV3L2FkbWluLnNxdWFkcy5uZXcudHBsLmh0bWwnLFxuICAgICAgY29udHJvbGxlcjogJ0FkbWluU3F1YWRzTmV3Q29udHJvbGxlcidcbiAgICB9KTtcblxuICAgIG1vZGFsSW5zdGFuY2UucmVzdWx0LnRoZW4oZnVuY3Rpb24oc3F1YWQpIHtcbiAgICAgIHNxdWFkU2VydmljZS5jcmVhdGVTcXVhZChzcXVhZCk7XG4gICAgfSwgZnVuY3Rpb24gKCkge1xuICAgICAgJGxvZy5kZWJ1ZygnQ3JlYXRlIHNxdWFkIG1vZGFsIGRpc21pc3NlZC4uLicpO1xuICAgICAgbWVzc2FnZU1vZGVsLnNldE1lc3NhZ2UoeyB0eXBlOiAnd2FybmluZycsIGNvbnRlbnQ6ICdDcmVhdGUgc3F1YWQgY2FuY2VsbGVkJyB9LCBmYWxzZSk7XG4gICAgfSk7XG5cbiAgfTtcblxuICAkc2NvcGUuZWRpdFNxdWFkID0gZnVuY3Rpb24oc3F1YWQpIHtcblxuICAgIHZhciBtb2RhbEluc3RhbmNlID0gJG1vZGFsLm9wZW4oe1xuICAgICAgdGVtcGxhdGVVcmw6ICdtb2R1bGVzL3ByaXZhdGUvYWRtaW4vc3F1YWRzL2VkaXQvYWRtaW4uc3F1YWRzLmVkaXQudHBsLmh0bWwnLFxuICAgICAgY29udHJvbGxlcjogJ0FkbWluU3F1YWRzRWRpdENvbnRyb2xsZXInLFxuICAgICAgcmVzb2x2ZToge1xuICAgICAgICBzcXVhZDogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgcmV0dXJuIHNxdWFkO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBtb2RhbEluc3RhbmNlLnJlc3VsdC50aGVuKGZ1bmN0aW9uKHNxdWFkKSB7XG4gICAgICBzcXVhZFNlcnZpY2UudXBkYXRlU3F1YWQoc3F1YWQpO1xuICAgIH0sIGZ1bmN0aW9uICgpIHtcbiAgICAgICRsb2cuZGVidWcoJ1NxdWFkIHVwZGF0ZSBjYW5jZWxsZWQuLi4nKTtcbiAgICAgIG1lc3NhZ2VNb2RlbC5zZXRNZXNzYWdlKHsgdHlwZTogJ3dhcm5pbmcnLCBjb250ZW50OiAnU3F1YWQgdXBkYXRlIGNhbmNlbGxlZCcgfSwgZmFsc2UpO1xuICAgIH0pO1xuXG4gIH07XG5cblxuICAkc2NvcGUuc2VhcmNoID0gZnVuY3Rpb24oaXRlbSkge1xuICAgIGlmIChpdGVtLm5hbWUudG9Mb3dlckNhc2UoKS5pbmRleE9mKCRzY29wZS5xdWVyeS50b0xvd2VyQ2FzZSgpKSAhPSAtMSAmJiAoISRzY29wZS5zZWxlY3RlZFNxdWFkVHlwZSB8fCBpdGVtLnNxdWFkX3R5cGUgPT0gJHNjb3BlLnNlbGVjdGVkU3F1YWRUeXBlKSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfTtcblxuICAvKipcbiAgICogSW52b2tlZCBvbiBzdGFydHVwLCBsaWtlIGEgY29uc3RydWN0b3IuXG4gICAqL1xuICB2YXIgaW5pdCA9IGZ1bmN0aW9uICgpIHtcbiAgfTtcbiAgaW5pdCgpO1xufTtcblxuQWRtaW5TcXVhZHNDb250cm9sbGVyLiRpbmplY3QgPSBbJ3NxdWFkcycsICckc2NvcGUnLCAnJGxvZycsICckbW9kYWwnLCAnc3F1YWRTZXJ2aWNlJywgJ21lc3NhZ2VNb2RlbCddO1xubW9kdWxlLmV4cG9ydHMgPSBBZG1pblNxdWFkc0NvbnRyb2xsZXI7XG4iLCJ2YXIgTGVhZ3VlSW52aXRlUmVxdWVzdENvbnRyb2xsZXIgPSBmdW5jdGlvbihsZWFndWVJZCwgJG1vZGFsSW5zdGFuY2UsICRzY29wZSwgJGxvZywgdXNlck1vZGVsKSB7XG5cbiAgJHNjb3BlLmludml0YXRpb24gPSB7XG4gICAgbGVhZ3VlX2lkOiBsZWFndWVJZCxcbiAgICBlbWFpbDogdXNlck1vZGVsLnVzZXIuZW1haWwsXG4gICAgbWVzc2FnZTogXCJcIlxuICB9O1xuXG4gICRzY29wZS5yZXF1ZXN0SW52aXRlID0gZnVuY3Rpb24gKGludml0YXRpb24pIHtcbiAgICAkbW9kYWxJbnN0YW5jZS5jbG9zZShpbnZpdGF0aW9uKTtcbiAgfTtcblxuICAkc2NvcGUuY2FuY2VsID0gZnVuY3Rpb24gKCkge1xuICAgICRtb2RhbEluc3RhbmNlLmRpc21pc3MoJ2NhbmNlbCcpO1xuICB9O1xuXG4gICRzY29wZS5oYXNFcnJvciA9IGZ1bmN0aW9uKGlucHV0KSB7XG4gICAgcmV0dXJuICFpbnB1dC4kZm9jdXNlZCAmJiBpbnB1dC4kZGlydHkgJiYgaW5wdXQuJGludmFsaWQ7XG4gIH07XG5cbiAgJHNjb3BlLmhhc1Byb3BlcnR5RXJyb3IgPSBmdW5jdGlvbihpbnB1dCwgcHJvcGVydHkpIHtcbiAgICByZXR1cm4gIWlucHV0LiRmb2N1c2VkICYmIGlucHV0LiRkaXJ0eSAmJiBpbnB1dC4kZXJyb3JbcHJvcGVydHldO1xuICB9O1xuXG4gIC8qKlxuICAgKiBJbnZva2VkIG9uIHN0YXJ0dXAsIGxpa2UgYSBjb25zdHJ1Y3Rvci5cbiAgICovXG4gIHZhciBpbml0ID0gZnVuY3Rpb24gKCkge1xuICAgICRsb2cuZGVidWcoXCJsZWFndWUgaW52aXRlIHJlcXVlc3QgY29udHJvbGxlclwiKTtcbiAgfTtcbiAgaW5pdCgpO1xufTtcblxuTGVhZ3VlSW52aXRlUmVxdWVzdENvbnRyb2xsZXIuJGluamVjdCA9IFsnbGVhZ3VlSWQnLCAnJG1vZGFsSW5zdGFuY2UnLCAnJHNjb3BlJywgJyRsb2cnLCAndXNlck1vZGVsJ107XG5tb2R1bGUuZXhwb3J0cyA9IExlYWd1ZUludml0ZVJlcXVlc3RDb250cm9sbGVyO1xuIiwiXG52YXIgUHVibGljTGVhZ3Vlc0NvbnRyb2xsZXIgPSBmdW5jdGlvbigkc2NvcGUsICRsb2csICRsb2NhdGlvbiwgcHVibGljTGVhZ3Vlcykge1xuXG4gICAgJHNjb3BlLnB1YmxpY0xlYWd1ZXMgPSBwdWJsaWNMZWFndWVzLmRhdGE7XG5cbiAgICAkc2NvcGUuc2hvd0xlYWd1ZSA9IGZ1bmN0aW9uKGxlYWd1ZSkge1xuICAgICAgJGxvY2F0aW9uLnVybCgnL3NlYXNvbi8nICsgbGVhZ3VlLnNlYXNvbl9pZCArICcvbGVhZ3VlLycgKyBsZWFndWUuaWQpO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBJbnZva2VkIG9uIHN0YXJ0dXAsIGxpa2UgYSBjb25zdHJ1Y3Rvci5cbiAgICAgKi9cbiAgICB2YXIgaW5pdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJGxvZy5kZWJ1ZyhcInB1YmxpYyBsZWFndWVzIGNvbnRyb2xsZXJcIik7XG4gICAgfTtcbiAgICBpbml0KCk7XG5cbn07XG5cblB1YmxpY0xlYWd1ZXNDb250cm9sbGVyLiRpbmplY3QgPSBbJyRzY29wZScsICckbG9nJywgJyRsb2NhdGlvbicsICdwdWJsaWNMZWFndWVzJ107XG5tb2R1bGUuZXhwb3J0cyA9IFB1YmxpY0xlYWd1ZXNDb250cm9sbGVyO1xuXG4iLCJ2YXIgUHJpdmF0ZUxlYWd1ZXNDb250cm9sbGVyID0gZnVuY3Rpb24ocHJpdmF0ZUxlYWd1ZXMsICRzY29wZSwgJGxvZywgJGxvY2F0aW9uKSB7XG5cbiAgICAkc2NvcGUucHJpdmF0ZUxlYWd1ZXMgPSBwcml2YXRlTGVhZ3Vlcy5kYXRhO1xuXG4gICAgJHNjb3BlLnNob3dMZWFndWUgPSBmdW5jdGlvbihsZWFndWUpIHtcbiAgICAgICRsb2NhdGlvbi51cmwoJy9zZWFzb24vJyArIGxlYWd1ZS5zZWFzb25faWQgKyAnL2xlYWd1ZS8nICsgbGVhZ3VlLmlkKTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogSW52b2tlZCBvbiBzdGFydHVwLCBsaWtlIGEgY29uc3RydWN0b3IuXG4gICAgICovXG4gICAgdmFyIGluaXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICRsb2cuZGVidWcoXCJwcml2YXRlIGxlYWd1ZXMgY29udHJvbGxlclwiKTtcbiAgICB9O1xuICAgIGluaXQoKTtcblxufTtcblxuUHJpdmF0ZUxlYWd1ZXNDb250cm9sbGVyLiRpbmplY3QgPSBbJ3ByaXZhdGVMZWFndWVzJywgJyRzY29wZScsICckbG9nJywgJyRsb2NhdGlvbiddO1xubW9kdWxlLmV4cG9ydHMgPSBQcml2YXRlTGVhZ3Vlc0NvbnRyb2xsZXI7XG5cbiIsInZhciBWaWV3VGVhbVBpY2tzQ29udHJvbGxlciA9IGZ1bmN0aW9uKGxlYWd1ZVdlZWtzLCBjdXJyZW50V2VlaywgcGlja3MsICRzY29wZSwgJGxvZywgJGxvY2F0aW9uLCAkc3RhdGVQYXJhbXMsIGRhdGVVdGlscykge1xuXG4gIHZhciBjcmVhdGVGYWtlTm9uZVBpY2tzID0gZnVuY3Rpb24oKSB7XG4gICAgaWYgKCRzY29wZS5waWNrcy5sZW5ndGggPCAkc2NvcGUubGVhZ3VlV2Vla3MubGVuZ3RoKSB7XG4gICAgICAvLyBpbXBvcnRhbnQgdGhhdCB3ZWVrcyBhcmUgaW4gYXNjZW5kaW5nIG9yZGVyIGZvciB0aGlzIHRvIHdvcmtcbiAgICAgIGZvciAoaSA9ICRzY29wZS5waWNrcy5sZW5ndGg7IGkgPCAkc2NvcGUubGVhZ3VlV2Vla3MubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY3JlYXRlRmFrZU5vbmVQaWNrKCRzY29wZS5sZWFndWVXZWVrc1tpXSk7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIHZhciBjcmVhdGVGYWtlTm9uZVBpY2sgPSBmdW5jdGlvbih3ZWVrKSB7XG4gICAgdmFyIHBpY2sgPSB7XG4gICAgICBzcXVhZDoge1xuICAgICAgICBpZDogMCxcbiAgICAgICAgbmFtZTogXCJOb25lXCIsXG4gICAgICAgIGFiYnJldjogXCJOb25lXCIsXG4gICAgICAgIHNob3J0OiBcIk5vbmVcIlxuICAgICAgfSxcbiAgICAgIGNvcnJlY3Q6ICghJHNjb3BlLnRlYW1EYXRhLmFsaXZlKSA/IGZhbHNlIDogbnVsbCxcbiAgICAgIGxvY2tlZDogKCEkc2NvcGUudGVhbURhdGEuYWxpdmUpID8gdHJ1ZSA6IGZhbHNlLFxuICAgICAgd2Vlazoge1xuICAgICAgICBuYW1lOiB3ZWVrLm5hbWUsXG4gICAgICAgIHNsdWc6IHdlZWsuc2x1ZyxcbiAgICAgICAgZGF0ZTogd2Vlay5zdGFydHNfYXRcbiAgICAgIH1cbiAgICB9O1xuICAgICRzY29wZS5waWNrcy5wdXNoKHBpY2spO1xuICB9O1xuXG4gICRzY29wZS5sZWFndWVXZWVrcyA9IGxlYWd1ZVdlZWtzLmRhdGE7XG5cbiAgJHNjb3BlLnBpY2tzID0gcGlja3MuZGF0YTtcblxuICAkc2NvcGUuc2VsZWN0ZWRXZWVrU2x1ZyA9ICRzdGF0ZVBhcmFtcy53ZWVrO1xuXG4gICRzY29wZS5zZWxlY3RlZFdlZWsgPSBfLmZpbmQoJHNjb3BlLmxlYWd1ZVdlZWtzLCBmdW5jdGlvbihsZWFndWVXZWVrKSB7IHJldHVybiBsZWFndWVXZWVrLnNsdWcgPT09ICRzY29wZS5zZWxlY3RlZFdlZWtTbHVnIH0pO1xuXG4gICRzY29wZS5jb3JyZWN0UGlja0NvdW50ID0gZnVuY3Rpb24ocGlja3MpIHtcbiAgICB2YXIgY29ycmVjdFBpY2tzID0gXy5maWx0ZXIocGlja3MsIGZ1bmN0aW9uKHBpY2spIHtcbiAgICAgIHJldHVybiBwaWNrLmNvcnJlY3Q7XG4gICAgfSk7XG4gICAgcmV0dXJuIGNvcnJlY3RQaWNrcy5sZW5ndGg7XG4gIH07XG5cbiAgJHNjb3BlLmNoYW5nZVdlZWsgPSBmdW5jdGlvbihzbHVnKSB7XG4gICAgaWYgKHNsdWcpIHtcbiAgICAgICRsb2NhdGlvbi5zZWFyY2goJ3dlZWsnLCBzbHVnKTsgLy8gYWRkIC8gcmVwbGFjZSB0aGUgd2VlayBxdWVyeSBwYXJhbVxuICAgICAgJHNjb3BlLnNlbGVjdGVkV2VlayA9IF8uZmluZCgkc2NvcGUubGVhZ3VlV2Vla3MsIGZ1bmN0aW9uKGxlYWd1ZVdlZWspIHsgcmV0dXJuIGxlYWd1ZVdlZWsuc2x1ZyA9PT0gc2x1ZyB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgJGxvY2F0aW9uLnNlYXJjaCgnd2VlaycsIG51bGwpOyAvLyByZW1vdmUgd2VlayBxdWVyeSBwYXJhbVxuICAgICAgJHNjb3BlLnNlbGVjdGVkV2VlayA9IG51bGw7XG4gICAgfVxuICB9O1xuXG4gICRzY29wZS5waWNrU3RhdHVzID0gZnVuY3Rpb24ocGljaykge1xuICAgIHZhciBzdGF0dXMgPSAnJztcbiAgICBpZiAocGljay5jb3JyZWN0ID09PSB0cnVlKSB7XG4gICAgICBzdGF0dXMgPSAnY2hlY2snO1xuICAgIH0gZWxzZSBpZiAocGljay5nYW1lICYmIChwaWNrLmdhbWUudGllID09PSB0cnVlIHx8IHBpY2suZ2FtZS5pbmNvbXBsZXRlID09PSB0cnVlKSkge1xuICAgICAgc3RhdHVzID0gJ21pbnVzJztcbiAgICB9IGVsc2UgaWYgKHBpY2suY29ycmVjdCA9PT0gZmFsc2UpIHtcbiAgICAgIHN0YXR1cyA9ICd0aW1lcyc7XG4gICAgfSBlbHNlIGlmIChwaWNrLmxvY2tlZCkge1xuICAgICAgc3RhdHVzID0gJ2xvY2snO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdGF0dXMgPSAndW5sb2NrJztcbiAgICB9XG4gICAgcmV0dXJuIHN0YXR1cztcbiAgfTtcblxuICAkc2NvcGUucGlja01ldGEgPSBmdW5jdGlvbihwaWNrKSB7XG4gICAgdmFyIG1ldGEgPSBwaWNrLndlZWsubmFtZTtcbiAgICBpZiAocGljay5nYW1lKSB7XG4gICAgICBpZiAocGljay5nYW1lLm5vdGUgJiYgcGljay5nYW1lLm5vdGUubGVuZ3RoID4gMCkge1xuICAgICAgICBtZXRhICs9ICcgfCAnICsgcGljay5nYW1lLm5vdGU7XG4gICAgICB9IGVsc2UgaWYgKHBpY2suZ2FtZS50YmQpIHtcbiAgICAgICAgbWV0YSArPSAnIHwgVEJEJztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG1ldGEgKz0gJyB8ICcgKyBkYXRlVXRpbHMuZGF0ZUZvcm1hdChwaWNrLmdhbWUuc3RhcnQsIFwibW1tIGRcIikgKyAnIHwgJyArIGRhdGVVdGlscy5kYXRlRm9ybWF0KHBpY2suZ2FtZS5zdGFydCwgXCJoOk1NIFRUIFpcIik7XG4gICAgICB9XG4gICAgICBpZiAocGljay5nYW1lLnBvc3Rwb25lZCkge1xuICAgICAgICBtZXRhICs9ICcgfCAqUFBEJztcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG1ldGE7XG4gIH07XG5cbiAgLyoqXG4gICAqIEludm9rZWQgb24gc3RhcnR1cCwgbGlrZSBhIGNvbnN0cnVjdG9yLlxuICAgKi9cbiAgdmFyIGluaXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKCRzY29wZS50ZWFtRGF0YS5sZWFndWUuZWxpbWluYXRpb24pIHtcbiAgICAgIGNyZWF0ZUZha2VOb25lUGlja3MoKTtcbiAgICB9XG4gICAgaWYgKGN1cnJlbnRXZWVrKSB7XG4gICAgICAkc2NvcGUuc2VsZWN0ZWRXZWVrU2x1ZyA9IGN1cnJlbnRXZWVrLmRhdGEuc2x1ZztcbiAgICAgICRzY29wZS5jaGFuZ2VXZWVrKCRzY29wZS5zZWxlY3RlZFdlZWtTbHVnKTtcbiAgICB9XG4gIH07XG4gIGluaXQoKTtcbn07XG5cblZpZXdUZWFtUGlja3NDb250cm9sbGVyLiRpbmplY3QgPSBbJ2xlYWd1ZVdlZWtzJywgJ2N1cnJlbnRXZWVrJywgJ3BpY2tzJywgJyRzY29wZScsICckbG9nJywgJyRsb2NhdGlvbicsICckc3RhdGVQYXJhbXMnLCAnZGF0ZVV0aWxzJ107XG5tb2R1bGUuZXhwb3J0cyA9IFZpZXdUZWFtUGlja3NDb250cm9sbGVyO1xuIiwidmFyIFRlYW1QaWNrT25lQ29udHJvbGxlciA9IGZ1bmN0aW9uKCRzY29wZSwgJGxvZywgcGlja1NlcnZpY2UpIHtcblxuICAkc2NvcGUuY3VycmVudFBpY2sgPSBfLmZpbmQoJHNjb3BlLnBpY2tzLCBmdW5jdGlvbihwaWNrKXsgcmV0dXJuIHBpY2sud2Vla19pZCA9PT0gJHNjb3BlLndlZWsuaWQgfSk7XG5cbiAgJHNjb3BlLm1ha2VQaWNrID0gZnVuY3Rpb24oZ2FtZSwgc3F1YWQpIHtcbiAgICBpZiAoJHNjb3BlLmlzRGlzYWJsZWQoZ2FtZSwgc3F1YWQpKSB7XG4gICAgICAvLyBpZ25vcmUgaXRcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgJHNjb3BlLmN1cnJlbnRQaWNrID0ge1xuICAgICAgd2Vla19pZDogZ2FtZS53ZWVrX2lkLFxuICAgICAgd2Vla190eXBlX2lkOiBnYW1lLndlZWtfdHlwZV9pZCxcbiAgICAgIGdhbWVfaWQ6IGdhbWUuaWQsXG4gICAgICB0ZWFtX2lkOiAkc2NvcGUudGVhbS5pZCxcbiAgICAgIHNxdWFkX2lkOiBzcXVhZC5pZCxcbiAgICAgIGdhbWU6IGdhbWUsXG4gICAgICBzcXVhZDogc3F1YWRcbiAgICB9O1xuICAgICRzY29wZS5zYXZlUGljaygpO1xuICB9O1xuXG4gICRzY29wZS5zYXZlUGljayA9IGZ1bmN0aW9uKCkge1xuICAgIHBpY2tTZXJ2aWNlLnNhdmVQaWNrKCRzY29wZS5jdXJyZW50UGljaylcbiAgICAgIC5maW5hbGx5KGZ1bmN0aW9uKCkge1xuICAgICAgICAkc2NvcGUuc2hvd1RlYW0oJHNjb3BlLnRlYW0pO1xuICAgICAgfSk7XG4gIH07XG5cbiAgJHNjb3BlLmhhc1NxdWFkQmVlblVzZWQgPSBmdW5jdGlvbihnYW1lLCBzcXVhZCkge1xuICAgIGlmICgkc2NvcGUudGVhbS5sZWFndWUuYWxsb3dfZHVwcykge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgc3F1YWRIYXNCZWVuVXNlZCA9IGZhbHNlO1xuICAgICAgXy5lYWNoKCRzY29wZS5waWNrcywgZnVuY3Rpb24ocGljaykge1xuICAgICAgICBpZiAocGljay5zcXVhZC5pZCA9PSBzcXVhZC5pZCAmJiBwaWNrLndlZWtfdHlwZV9pZCA9PSBnYW1lLndlZWtfdHlwZV9pZCAmJiBwaWNrLndlZWtfaWQgIT0gZ2FtZS53ZWVrX2lkKSB7XG4gICAgICAgICAgc3F1YWRIYXNCZWVuVXNlZCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIHNxdWFkSGFzQmVlblVzZWQ7XG4gICAgfVxuICB9O1xuXG4gICRzY29wZS5pc0N1cnJlbnRQaWNrTG9ja2VkID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuICRzY29wZS5jdXJyZW50UGljayAmJiAkc2NvcGUuY3VycmVudFBpY2subG9ja2VkO1xuICB9O1xuXG4gICRzY29wZS5pc0Rpc2FibGVkID0gZnVuY3Rpb24oZ2FtZSwgc3F1YWQpIHtcbiAgICB2YXIgaXNEaXNhYmxlZCA9IGZhbHNlO1xuICAgIGlmIChnYW1lLmxvY2tlZCB8fCAkc2NvcGUuaGFzU3F1YWRCZWVuVXNlZChnYW1lLCBzcXVhZCkgfHwgJHNjb3BlLmlzQ3VycmVudFBpY2tMb2NrZWQoKSkge1xuICAgICAgaXNEaXNhYmxlZCA9IHRydWU7XG4gICAgfVxuICAgIHJldHVybiBpc0Rpc2FibGVkO1xuICB9O1xuXG4gICRzY29wZS5waWNrU3RhdHVzID0gZnVuY3Rpb24oZ2FtZSwgc3F1YWQpIHtcbiAgICB2YXIgc3RhdHVzID0gJyc7XG4gICAgaWYgKCFfLmlzVW5kZWZpbmVkKCRzY29wZS5jdXJyZW50UGljaykgJiYgJHNjb3BlLmN1cnJlbnRQaWNrLmdhbWVfaWQgPT0gZ2FtZS5pZCAmJiAkc2NvcGUuY3VycmVudFBpY2suc3F1YWRfaWQgPT0gc3F1YWQuaWQpIHtcbiAgICAgIGlmICgkc2NvcGUuY3VycmVudFBpY2suY29ycmVjdCA9PT0gdHJ1ZSkge1xuICAgICAgICBzdGF0dXMgPSAnY2hlY2snO1xuICAgICAgfSBlbHNlIGlmICgkc2NvcGUuY3VycmVudFBpY2suZ2FtZSAmJiAoJHNjb3BlLmN1cnJlbnRQaWNrLmdhbWUudGllID09PSB0cnVlIHx8ICRzY29wZS5jdXJyZW50UGljay5nYW1lLmluY29tcGxldGUgPT09IHRydWUpKSB7XG4gICAgICAgIHN0YXR1cyA9ICdtaW51cyc7XG4gICAgICB9IGVsc2UgaWYgKCRzY29wZS5jdXJyZW50UGljay5jb3JyZWN0ID09PSBmYWxzZSkge1xuICAgICAgICBzdGF0dXMgPSAndGltZXMnO1xuICAgICAgfSBlbHNlIGlmICgkc2NvcGUuY3VycmVudFBpY2subG9ja2VkKSB7XG4gICAgICAgIHN0YXR1cyA9ICdsb2NrJztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHN0YXR1cyA9ICd1bmxvY2snO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gc3RhdHVzO1xuICB9O1xuXG4gIC8qKlxuICAgKiBJbnZva2VkIG9uIHN0YXJ0dXAsIGxpa2UgYSBjb25zdHJ1Y3Rvci5cbiAgICovXG4gIHZhciBpbml0ID0gZnVuY3Rpb24gKCkge1xuICAgICRsb2cuZGVidWcoXCJwaWNrIG9uZSBjb250cm9sbGVyXCIpO1xuICB9O1xuICBpbml0KCk7XG59O1xuXG5UZWFtUGlja09uZUNvbnRyb2xsZXIuJGluamVjdCA9IFsnJHNjb3BlJywgJyRsb2cnLCAncGlja1NlcnZpY2UnXTtcbm1vZHVsZS5leHBvcnRzID0gVGVhbVBpY2tPbmVDb250cm9sbGVyO1xuIiwidmFyIFRlYW1QaWNrTWFueUNvbnRyb2xsZXIgPSBmdW5jdGlvbigkcm9vdFNjb3BlLCAkc2NvcGUsICRsb2csICRhbmNob3JTY3JvbGwsIG1lc3NhZ2VNb2RlbCwgcGlja1NlcnZpY2UpIHtcblxuICB2YXIgc2Nyb2xsVG9Ub3AgPSBmdW5jdGlvbigpIHtcbiAgICAkYW5jaG9yU2Nyb2xsKCk7IC8vIGhhY2t5P1xuICB9O1xuXG4gIHZhciBhbGxQaWNrc01hZGUgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gJHNjb3BlLnBpY2tzLmxlbmd0aCA9PSAkc2NvcGUudGVhbS5sZWFndWUubWF4X3BpY2tzX3Blcl93ZWVrIHx8ICRzY29wZS5waWNrcy5sZW5ndGggPj0gJHNjb3BlLmdhbWVzLmxlbmd0aDtcbiAgfTtcblxuICB2YXIgZ2V0UGljayA9IGZ1bmN0aW9uKGdhbWUsIHNxdWFkKSB7XG4gICAgdmFyIHBpY2sgPSBfLmZpbmQoJHNjb3BlLnBpY2tzLCBmdW5jdGlvbihwaWNrKSB7IHJldHVybiBwaWNrLmdhbWVfaWQgPT09IGdhbWUuaWQgJiYgcGljay5zcXVhZF9pZCA9PT0gc3F1YWQuaWQgfSk7XG4gICAgcmV0dXJuIHBpY2s7XG4gIH07XG5cbiAgdmFyIHJlbW92ZVBpY2sgPSBmdW5jdGlvbihwaWNrVG9SZW1vdmUpIHtcbiAgICAkc2NvcGUucGlja3MgPSBfLnJlamVjdCgkc2NvcGUucGlja3MsIGZ1bmN0aW9uKHBpY2spIHsgcmV0dXJuIHBpY2suZ2FtZV9pZCA9PT0gcGlja1RvUmVtb3ZlLmdhbWVfaWQgJiYgcGljay5zcXVhZF9pZCA9PT0gcGlja1RvUmVtb3ZlLnNxdWFkX2lkIH0pXG4gIH07XG5cbiAgdmFyIHJlbW92ZUdhbWVQaWNrcyA9IGZ1bmN0aW9uKGdhbWUpIHtcbiAgICAkc2NvcGUucGlja3MgPSBfLnJlamVjdCgkc2NvcGUucGlja3MsIGZ1bmN0aW9uKHBpY2spIHsgcmV0dXJuIHBpY2suZ2FtZV9pZCA9PT0gZ2FtZS5pZCB9KVxuICB9O1xuXG4gIHZhciBhZGRQaWNrID0gZnVuY3Rpb24oZ2FtZSwgc3F1YWQpIHtcbiAgICBpZiAoYWxsUGlja3NNYWRlKCkpIHtcbiAgICAgIHZhciBtZXNzYWdlID0gJ05vIG1vcmUgcGlja3MgYWxsb3dlZC4gVW5zZWxlY3QgYSBwaWNrIGlmIG5lY2Vzc2FyeS4nO1xuICAgICAgdmFyIG1heFBpY2tzID0gJHNjb3BlLnRlYW0ubGVhZ3VlLm1heF9waWNrc19wZXJfd2VlaztcbiAgICAgIGlmIChtYXhQaWNrcykge1xuICAgICAgICBtZXNzYWdlID0gJ09ubHkgJyArIG1heFBpY2tzICsgJyBwaWNrcyBhbGxvd2VkLiBVbnNlbGVjdCBhIHBpY2sgaWYgbmVjZXNzYXJ5Lic7XG4gICAgICB9XG4gICAgICBtZXNzYWdlTW9kZWwuc2V0TWVzc2FnZSh7IHR5cGU6ICdkYW5nZXInLCBjb250ZW50OiBtZXNzYWdlIH0sIGZhbHNlKTtcbiAgICAgIHNjcm9sbFRvVG9wKCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHZhciBwaWNrID0ge1xuICAgICAgd2Vla19pZDogZ2FtZS53ZWVrX2lkLFxuICAgICAgd2Vla190eXBlX2lkOiBnYW1lLndlZWtfdHlwZV9pZCxcbiAgICAgIGdhbWVfaWQ6IGdhbWUuaWQsXG4gICAgICB0ZWFtX2lkOiAkc2NvcGUudGVhbS5pZCxcbiAgICAgIHNxdWFkX2lkOiBzcXVhZC5pZFxuICAgIH07XG4gICAgJHNjb3BlLnBpY2tzLnB1c2gocGljayk7XG4gIH07XG5cbiAgJHNjb3BlLnRvZ2dsZVBpY2sgPSBmdW5jdGlvbihnYW1lLCBzcXVhZCkge1xuICAgIGlmICghJHNjb3BlLmlzQ29hY2goJHNjb3BlLnRlYW0pIHx8IGdhbWUubG9ja2VkKSByZXR1cm47XG4gICAgdmFyIHBpY2sgPSBnZXRQaWNrKGdhbWUsIHNxdWFkKTtcbiAgICBpZiAoIV8uaXNVbmRlZmluZWQocGljaykgJiYgcGljay5sb2NrZWQpIHtcbiAgICAgIHJldHVybjsgLy8gbm8gdG9nZ2xpbmcgbG9ja2VkIHBpY2tzXG4gICAgfVxuICAgIGlmICghXy5pc1VuZGVmaW5lZChwaWNrKSkge1xuICAgICAgLy8gaWYgYSBwaWNrIGV4aXN0cyBhbHJlYWR5LCB0aGVuIHlvdSBhcmUgYXR0ZW1wdGluZyB0byBkZS1zZWxlY3QgaXRcbiAgICAgIHJlbW92ZVBpY2socGljayk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlbW92ZUdhbWVQaWNrcyhnYW1lKTsgLy8gbm8gMiBwaWNrcyBmb3IgdGhlIHNhbWUgZ2FtZVxuICAgICAgYWRkUGljayhnYW1lLCBzcXVhZCk7XG4gICAgfVxuICAgICRyb290U2NvcGUuJGJyb2FkY2FzdCgnVGVhbVBpY2tDb250cm9sbGVyOjpwaWNrc0NoYW5nZWQnLCB7IHBpY2tzOiAkc2NvcGUucGlja3MgfSk7XG4gIH07XG5cbiAgJHNjb3BlLnNhdmVQaWNrcyA9IGZ1bmN0aW9uKCkge1xuICAgIHBpY2tTZXJ2aWNlLnNhdmVQaWNrcygkc2NvcGUudGVhbS5pZCwgJHNjb3BlLnBpY2tzKVxuICAgICAgLmZpbmFsbHkoZnVuY3Rpb24ocmVzdWx0KSB7XG4gICAgICAgICRzY29wZS5zaG93VGVhbSgkc2NvcGUudGVhbSk7XG4gICAgICB9KTtcbiAgfTtcblxuICAkc2NvcGUuaXNEaXNhYmxlZCA9IGZ1bmN0aW9uKGdhbWUpIHtcbiAgICB2YXIgaXNEaXNhYmxlZCA9IGZhbHNlO1xuICAgIGlmIChnYW1lLmxvY2tlZCkge1xuICAgICAgaXNEaXNhYmxlZCA9IHRydWU7XG4gICAgfVxuICAgIHJldHVybiBpc0Rpc2FibGVkO1xuICB9O1xuXG4gICRzY29wZS5waWNrU3RhdHVzID0gZnVuY3Rpb24oZ2FtZSwgc3F1YWQpIHtcbiAgICB2YXIgc3RhdHVzID0gJycsXG4gICAgICBwaWNrID0gZ2V0UGljayhnYW1lLCBzcXVhZCk7XG4gICAgaWYgKCFfLmlzVW5kZWZpbmVkKHBpY2spKSB7XG4gICAgICBpZiAocGljay5jb3JyZWN0ID09PSB0cnVlKSB7XG4gICAgICAgIHN0YXR1cyA9ICdjaGVjayc7XG4gICAgICB9IGVsc2UgaWYgKHBpY2suZ2FtZSAmJiAocGljay5nYW1lLnRpZSA9PT0gdHJ1ZSB8fCBwaWNrLmdhbWUuaW5jb21wbGV0ZSA9PT0gdHJ1ZSkpIHtcbiAgICAgICAgc3RhdHVzID0gJ21pbnVzJztcbiAgICAgIH0gZWxzZSBpZiAocGljay5jb3JyZWN0ID09PSBmYWxzZSkge1xuICAgICAgICBzdGF0dXMgPSAndGltZXMnO1xuICAgICAgfSBlbHNlIGlmIChwaWNrLmxvY2tlZCA9PT0gdHJ1ZSkge1xuICAgICAgICBzdGF0dXMgPSAnbG9jayc7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzdGF0dXMgPSAndW5sb2NrJztcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHN0YXR1cztcbiAgfTtcblxuICAkc2NvcGUuJG9uKCdUZWFtUGlja0NvbnRyb2xsZXI6OnNhdmVQaWNrcycsIGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgJHNjb3BlLnNhdmVQaWNrcygpO1xuICB9KTtcbiAgXG4gIC8qKlxuICAgKiBJbnZva2VkIG9uIHN0YXJ0dXAsIGxpa2UgYSBjb25zdHJ1Y3Rvci5cbiAgICovXG4gIHZhciBpbml0ID0gZnVuY3Rpb24gKCkge1xuICAgICRsb2cuZGVidWcoXCJwaWNrIG1hbnkgY29udHJvbGxlclwiKTtcbiAgfTtcbiAgaW5pdCgpO1xufTtcblxuVGVhbVBpY2tNYW55Q29udHJvbGxlci4kaW5qZWN0ID0gWyckcm9vdFNjb3BlJywgJyRzY29wZScsICckbG9nJywgJyRhbmNob3JTY3JvbGwnLCAnbWVzc2FnZU1vZGVsJywgJ3BpY2tTZXJ2aWNlJ107XG5tb2R1bGUuZXhwb3J0cyA9IFRlYW1QaWNrTWFueUNvbnRyb2xsZXI7XG4iLCJ2YXIgQWRtaW5HYW1lRWRpdENvbnRyb2xsZXIgPSBmdW5jdGlvbihnYW1lLCBzcXVhZHMsICRzY29wZSwgJG1vZGFsSW5zdGFuY2UpIHtcblxuICAkc2NvcGUuZ2FtZURhdGEgPSBhbmd1bGFyLmNvcHkoZ2FtZSk7XG5cbiAgJHNjb3BlLnNxdWFkcyA9IHNxdWFkcy5kYXRhO1xuXG4gICRzY29wZS5jbG9zZVN0YXJ0c0F0ID0gZnVuY3Rpb24oKSB7XG4gICAgJHNjb3BlLnN0YXJ0c0F0RHJvcGRvd24gPSB7XG4gICAgICBpc29wZW46IGZhbHNlXG4gICAgfTtcbiAgfTtcbiAgJHNjb3BlLmNsb3NlU3RhcnRzQXQoKTtcblxuICAkc2NvcGUuZ2V0U3F1YWQgPSBmdW5jdGlvbihzcXVhZElkKSB7XG4gICAgdmFyIHNxdWFkID0gXy5maW5kKCRzY29wZS5zcXVhZHMsIGZ1bmN0aW9uKHNxdWFkKSB7IHJldHVybiBzcXVhZC5pZCA9PT0gc3F1YWRJZCB9KTtcbiAgICByZXR1cm4gc3F1YWQ7XG4gIH07XG5cbiAgJHNjb3BlLmVkaXRHYW1lID0gZnVuY3Rpb24oZ2FtZSkge1xuICAgICRtb2RhbEluc3RhbmNlLmNsb3NlKGdhbWUpO1xuICB9O1xuXG4gICRzY29wZS5jYW5jZWwgPSBmdW5jdGlvbiAoKSB7XG4gICAgJG1vZGFsSW5zdGFuY2UuZGlzbWlzcygnY2FuY2VsJyk7XG4gIH07XG5cbiAgLyoqXG4gICAqIEludm9rZWQgb24gc3RhcnR1cCwgbGlrZSBhIGNvbnN0cnVjdG9yLlxuICAgKi9cbiAgdmFyIGluaXQgPSBmdW5jdGlvbiAoKSB7XG4gIH07XG4gIGluaXQoKTtcbn07XG5cbkFkbWluR2FtZUVkaXRDb250cm9sbGVyLiRpbmplY3QgPSBbJ2dhbWUnLCAnc3F1YWRzJywgJyRzY29wZScsICckbW9kYWxJbnN0YW5jZSddO1xubW9kdWxlLmV4cG9ydHMgPSBBZG1pbkdhbWVFZGl0Q29udHJvbGxlcjtcbiIsInZhciBBZG1pbkdhbWVOZXdDb250cm9sbGVyID0gZnVuY3Rpb24od2VlaywgbGFzdEdhbWUsIHNxdWFkcywgJHNjb3BlLCAkbW9kYWxJbnN0YW5jZSkge1xuXG4gICRzY29wZS53ZWVrRGF0YSA9IHdlZWs7XG5cbiAgJHNjb3BlLnNxdWFkcyA9IHNxdWFkcy5kYXRhO1xuXG4gICRzY29wZS5uZXdHYW1lRGF0YSA9IHtcbiAgICB3ZWVrX2lkOiB3ZWVrLmlkLFxuICAgIG5vdGU6ICcnLFxuICAgIGhvbWVfc3F1YWRfaWQ6IHNxdWFkcy5kYXRhWzBdLmlkLFxuICAgIHZpc2l0aW5nX3NxdWFkX2lkOiBzcXVhZHMuZGF0YVswXS5pZCxcbiAgICBzdGFydHNfYXQ6IChsYXN0R2FtZSkgPyBsYXN0R2FtZS5zdGFydHNfYXQgOiBtb21lbnQoKS5mb3JtYXQoKSxcbiAgICBwbGF5b2ZmOiBmYWxzZSxcbiAgICB0YmQ6IGZhbHNlLFxuICAgIGlmX25lY2Vzc2FyeTogZmFsc2VcbiAgfTtcblxuICAkc2NvcGUuY2xvc2VTdGFydHNBdCA9IGZ1bmN0aW9uKCkge1xuICAgICRzY29wZS5zdGFydHNBdERyb3Bkb3duID0ge1xuICAgICAgaXNvcGVuOiBmYWxzZVxuICAgIH07XG4gIH07XG4gICRzY29wZS5jbG9zZVN0YXJ0c0F0KCk7XG5cbiAgJHNjb3BlLmNyZWF0ZUdhbWUgPSBmdW5jdGlvbihnYW1lKSB7XG4gICAgJG1vZGFsSW5zdGFuY2UuY2xvc2UoZ2FtZSk7XG4gIH07XG5cbiAgJHNjb3BlLmNhbmNlbCA9IGZ1bmN0aW9uICgpIHtcbiAgICAkbW9kYWxJbnN0YW5jZS5kaXNtaXNzKCdjYW5jZWwnKTtcbiAgfTtcblxuICAvKipcbiAgICogSW52b2tlZCBvbiBzdGFydHVwLCBsaWtlIGEgY29uc3RydWN0b3IuXG4gICAqL1xuICB2YXIgaW5pdCA9IGZ1bmN0aW9uICgpIHtcbiAgfTtcbiAgaW5pdCgpO1xufTtcblxuQWRtaW5HYW1lTmV3Q29udHJvbGxlci4kaW5qZWN0ID0gWyd3ZWVrJywgJ2xhc3RHYW1lJywgJ3NxdWFkcycsICckc2NvcGUnLCAnJG1vZGFsSW5zdGFuY2UnXTtcbm1vZHVsZS5leHBvcnRzID0gQWRtaW5HYW1lTmV3Q29udHJvbGxlcjtcbiIsInZhciBBZG1pbldlZWtzQ29udHJvbGxlciA9IGZ1bmN0aW9uKHNlYXNvbiwgd2Vla3MsIGxlYWd1ZXMsICRzY29wZSwgJGxvY2F0aW9uLCAkbW9kYWwsIHNlYXNvblNlcnZpY2UsIHdlZWtTZXJ2aWNlKSB7XG5cbiAgJHNjb3BlLnNlYXNvbiA9IHNlYXNvbi5kYXRhO1xuXG4gICRzY29wZS53ZWVrcyA9IHdlZWtzLmRhdGE7XG5cbiAgJHNjb3BlLnByaXZhdGVRdWVyeSA9ICcnO1xuXG4gICRzY29wZS5wdWJsaWNRdWVyeSA9ICcnO1xuXG4gICRzY29wZS5wdWJsaWNMZWFndWVzID0gXy5maWx0ZXIobGVhZ3Vlcy5kYXRhLCBmdW5jdGlvbihsZWFndWUpIHtcbiAgICByZXR1cm4gbGVhZ3VlLnB1YmxpYztcbiAgfSk7XG5cbiAgJHNjb3BlLnByaXZhdGVMZWFndWVzID0gXy5maWx0ZXIobGVhZ3Vlcy5kYXRhLCBmdW5jdGlvbihsZWFndWUpIHtcbiAgICByZXR1cm4gIWxlYWd1ZS5wdWJsaWM7XG4gIH0pO1xuXG4gICRzY29wZS5lZGl0U2Vhc29uID0gZnVuY3Rpb24oc2Vhc29uKSB7XG5cbiAgICB2YXIgbW9kYWxJbnN0YW5jZSA9ICRtb2RhbC5vcGVuKHtcbiAgICAgIHRlbXBsYXRlVXJsOiAnbW9kdWxlcy9wcml2YXRlL2FkbWluL3NlYXNvbnMvc2Vhc29uL2VkaXQvYWRtaW4uc2Vhc29uLmVkaXQudHBsLmh0bWwnLFxuICAgICAgY29udHJvbGxlcjogJ0FkbWluU2Vhc29uRWRpdENvbnRyb2xsZXInLFxuICAgICAgcmVzb2x2ZToge1xuICAgICAgICBzZWFzb246IGZ1bmN0aW9uKCkge1xuICAgICAgICAgIHJldHVybiBzZWFzb247XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcblxuICAgIG1vZGFsSW5zdGFuY2UucmVzdWx0LnRoZW4oZnVuY3Rpb24oc2Vhc29uKSB7XG4gICAgICBzZWFzb25TZXJ2aWNlLnVwZGF0ZVNlYXNvbihzZWFzb24pO1xuICAgIH0sIGZ1bmN0aW9uICgpIHtcbiAgICAgICRsb2cuZGVidWcoJ0VkaXQgc2Vhc29uIG1vZGFsIGRpc21pc3NlZC4uLicpO1xuICAgICAgbWVzc2FnZU1vZGVsLnNldE1lc3NhZ2UoeyB0eXBlOiAnd2FybmluZycsIGNvbnRlbnQ6ICdFZGl0IHNlYXNvbiBjYW5jZWxsZWQnIH0sIGZhbHNlKTtcbiAgICB9KTtcblxuICB9O1xuXG4gICRzY29wZS5jcmVhdGVXZWVrID0gZnVuY3Rpb24oc2Vhc29uKSB7XG5cbiAgICB2YXIgbW9kYWxJbnN0YW5jZSA9ICRtb2RhbC5vcGVuKHtcbiAgICAgIHRlbXBsYXRlVXJsOiAnbW9kdWxlcy9wcml2YXRlL2FkbWluL3dlZWsvbmV3L2FkbWluLndlZWsubmV3LnRwbC5odG1sJyxcbiAgICAgIGNvbnRyb2xsZXI6ICdBZG1pbldlZWtOZXdDb250cm9sbGVyJyxcbiAgICAgIHJlc29sdmU6IHtcbiAgICAgICAgc2Vhc29uOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICByZXR1cm4gc2Vhc29uO1xuICAgICAgICB9LFxuICAgICAgICB3ZWVrVHlwZXM6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgIHJldHVybiB3ZWVrU2VydmljZS5nZXRXZWVrVHlwZXMoKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuXG4gICAgbW9kYWxJbnN0YW5jZS5yZXN1bHQudGhlbihmdW5jdGlvbih3ZWVrKSB7XG4gICAgICB3ZWVrU2VydmljZS5jcmVhdGVXZWVrKHdlZWspO1xuICAgIH0sIGZ1bmN0aW9uICgpIHtcbiAgICAgICRsb2cuZGVidWcoJ1dlZWsgY3JlYXRlIGNhbmNlbGxlZC4uLicpO1xuICAgICAgbWVzc2FnZU1vZGVsLnNldE1lc3NhZ2UoeyB0eXBlOiAnd2FybmluZycsIGNvbnRlbnQ6ICdXZWVrIGNyZWF0ZSBjYW5jZWxsZWQnIH0sIGZhbHNlKTtcbiAgICB9KTtcblxuICB9O1xuXG4gICRzY29wZS5zaG93V2VlayA9IGZ1bmN0aW9uKHdlZWspIHtcbiAgICAkbG9jYXRpb24udXJsKCRsb2NhdGlvbi5wYXRoKCkgKyAnL3dlZWtzLycgKyB3ZWVrLmlkKTtcbiAgfTtcblxuICAkc2NvcGUuc2hvd0xlYWd1ZSA9IGZ1bmN0aW9uKGxlYWd1ZSkge1xuICAgICRsb2NhdGlvbi51cmwoJy9zZWFzb24vJyArIGxlYWd1ZS5zZWFzb25faWQgKyAnL2xlYWd1ZS8nICsgbGVhZ3VlLmlkKTtcbiAgfTtcblxuICAvKipcbiAgICogSW52b2tlZCBvbiBzdGFydHVwLCBsaWtlIGEgY29uc3RydWN0b3IuXG4gICAqL1xuICB2YXIgaW5pdCA9IGZ1bmN0aW9uICgpIHtcbiAgfTtcbiAgaW5pdCgpO1xufTtcblxuQWRtaW5XZWVrc0NvbnRyb2xsZXIuJGluamVjdCA9IFsnc2Vhc29uJywgJ3dlZWtzJywgJ2xlYWd1ZXMnLCAnJHNjb3BlJywgJyRsb2NhdGlvbicsICckbW9kYWwnLCAnc2Vhc29uU2VydmljZScsICd3ZWVrU2VydmljZSddO1xubW9kdWxlLmV4cG9ydHMgPSBBZG1pbldlZWtzQ29udHJvbGxlcjtcbiIsInZhciBBZG1pbldlZWtOZXdDb250cm9sbGVyID0gZnVuY3Rpb24oc2Vhc29uLCB3ZWVrVHlwZXMsICRzY29wZSwgJG1vZGFsSW5zdGFuY2UpIHtcblxuICAkc2NvcGUud2Vla1R5cGVzID0gd2Vla1R5cGVzLmRhdGE7XG5cbiAgJHNjb3BlLndlZWtEYXRhID0ge1xuICAgIHNlYXNvbl9pZDogc2Vhc29uLmlkLFxuICAgIG5hbWU6ICcnLFxuICAgIHdlZWtfdHlwZV9pZDogd2Vla1R5cGVzLmRhdGFbMF0uaWQsXG4gICAgc3RhcnRzX2F0OiBtb21lbnQoKS5mb3JtYXQoKSxcbiAgICBlbmRzX2F0OiBtb21lbnQoKS5mb3JtYXQoKVxuICB9O1xuXG4gICRzY29wZS5jbG9zZVN0YXJ0c0F0ID0gZnVuY3Rpb24oKSB7XG4gICAgJHNjb3BlLnN0YXJ0c0F0RHJvcGRvd24gPSB7XG4gICAgICBpc29wZW46IGZhbHNlXG4gICAgfTtcbiAgfTtcbiAgJHNjb3BlLmNsb3NlU3RhcnRzQXQoKTtcblxuICAkc2NvcGUuY2xvc2VFbmRzQXQgPSBmdW5jdGlvbigpIHtcbiAgICAkc2NvcGUuZW5kc0F0RHJvcGRvd24gPSB7XG4gICAgICBpc29wZW46IGZhbHNlXG4gICAgfTtcbiAgfTtcbiAgJHNjb3BlLmNsb3NlRW5kc0F0KCk7XG5cbiAgJHNjb3BlLmNyZWF0ZVdlZWsgPSBmdW5jdGlvbih3ZWVrKSB7XG4gICAgJG1vZGFsSW5zdGFuY2UuY2xvc2Uod2Vlayk7XG4gIH07XG5cbiAgJHNjb3BlLmNhbmNlbCA9IGZ1bmN0aW9uICgpIHtcbiAgICAkbW9kYWxJbnN0YW5jZS5kaXNtaXNzKCdjYW5jZWwnKTtcbiAgfTtcblxuICAkc2NvcGUuaGFzRXJyb3IgPSBmdW5jdGlvbihpbnB1dCkge1xuICAgIHJldHVybiAhaW5wdXQuJGZvY3VzZWQgJiYgaW5wdXQuJGRpcnR5ICYmIGlucHV0LiRpbnZhbGlkO1xuICB9O1xuXG4gICRzY29wZS5oYXNQcm9wZXJ0eUVycm9yID0gZnVuY3Rpb24oaW5wdXQsIHByb3BlcnR5KSB7XG4gICAgcmV0dXJuICFpbnB1dC4kZm9jdXNlZCAmJiBpbnB1dC4kZGlydHkgJiYgaW5wdXQuJGVycm9yW3Byb3BlcnR5XTtcbiAgfTtcblxuICAvKipcbiAgICogSW52b2tlZCBvbiBzdGFydHVwLCBsaWtlIGEgY29uc3RydWN0b3IuXG4gICAqL1xuICB2YXIgaW5pdCA9IGZ1bmN0aW9uICgpIHtcbiAgfTtcbiAgaW5pdCgpO1xufTtcblxuQWRtaW5XZWVrTmV3Q29udHJvbGxlci4kaW5qZWN0ID0gWydzZWFzb24nLCAnd2Vla1R5cGVzJywgJyRzY29wZScsICckbW9kYWxJbnN0YW5jZSddO1xubW9kdWxlLmV4cG9ydHMgPSBBZG1pbldlZWtOZXdDb250cm9sbGVyO1xuIiwidmFyIEFkbWluV2Vla0VkaXRDb250cm9sbGVyID0gZnVuY3Rpb24od2Vlaywgd2Vla1R5cGVzLCAkc2NvcGUsICRtb2RhbEluc3RhbmNlKSB7XG5cbiAgJHNjb3BlLndlZWtEYXRhID0gYW5ndWxhci5jb3B5KHdlZWspO1xuXG4gICRzY29wZS53ZWVrVHlwZXMgPSB3ZWVrVHlwZXMuZGF0YTtcblxuICAkc2NvcGUuY2xvc2VTdGFydHNBdCA9IGZ1bmN0aW9uKCkge1xuICAgICRzY29wZS5zdGFydHNBdERyb3Bkb3duID0ge1xuICAgICAgaXNvcGVuOiBmYWxzZVxuICAgIH07XG4gIH07XG4gICRzY29wZS5jbG9zZVN0YXJ0c0F0KCk7XG5cbiAgJHNjb3BlLmNsb3NlRW5kc0F0ID0gZnVuY3Rpb24oKSB7XG4gICAgJHNjb3BlLmVuZHNBdERyb3Bkb3duID0ge1xuICAgICAgaXNvcGVuOiBmYWxzZVxuICAgIH07XG4gIH07XG4gICRzY29wZS5jbG9zZUVuZHNBdCgpO1xuXG4gICRzY29wZS5lZGl0V2VlayA9IGZ1bmN0aW9uKHdlZWspIHtcbiAgICAkbW9kYWxJbnN0YW5jZS5jbG9zZSh3ZWVrKTtcbiAgfTtcblxuICAkc2NvcGUuY2FuY2VsID0gZnVuY3Rpb24gKCkge1xuICAgICRtb2RhbEluc3RhbmNlLmRpc21pc3MoJ2NhbmNlbCcpO1xuICB9O1xuXG4gICRzY29wZS5oYXNFcnJvciA9IGZ1bmN0aW9uKGlucHV0KSB7XG4gICAgcmV0dXJuICFpbnB1dC4kZm9jdXNlZCAmJiBpbnB1dC4kZGlydHkgJiYgaW5wdXQuJGludmFsaWQ7XG4gIH07XG5cbiAgJHNjb3BlLmhhc1Byb3BlcnR5RXJyb3IgPSBmdW5jdGlvbihpbnB1dCwgcHJvcGVydHkpIHtcbiAgICByZXR1cm4gIWlucHV0LiRmb2N1c2VkICYmIGlucHV0LiRkaXJ0eSAmJiBpbnB1dC4kZXJyb3JbcHJvcGVydHldO1xuICB9O1xuXG4gIC8qKlxuICAgKiBJbnZva2VkIG9uIHN0YXJ0dXAsIGxpa2UgYSBjb25zdHJ1Y3Rvci5cbiAgICovXG4gIHZhciBpbml0ID0gZnVuY3Rpb24gKCkge1xuICB9O1xuICBpbml0KCk7XG59O1xuXG5BZG1pbldlZWtFZGl0Q29udHJvbGxlci4kaW5qZWN0ID0gWyd3ZWVrJywgJ3dlZWtUeXBlcycsICckc2NvcGUnLCAnJG1vZGFsSW5zdGFuY2UnXTtcbm1vZHVsZS5leHBvcnRzID0gQWRtaW5XZWVrRWRpdENvbnRyb2xsZXI7XG4iLCJ2YXIgQWRtaW5TcXVhZHNOZXdDb250cm9sbGVyID0gZnVuY3Rpb24oJHNjb3BlLCAkbW9kYWxJbnN0YW5jZSkge1xuXG4gICRzY29wZS5zcXVhZERhdGEgPSB7XG4gICAgbmFtZTogJycsXG4gICAgYWJicmV2OiAnJyxcbiAgICBzaG9ydDogJycsXG4gICAgc3F1YWRfdHlwZTogJydcbiAgfTtcblxuICAkc2NvcGUuY3JlYXRlU3F1YWQgPSBmdW5jdGlvbihzcXVhZCkge1xuICAgICRtb2RhbEluc3RhbmNlLmNsb3NlKHNxdWFkKTtcbiAgfTtcblxuICAkc2NvcGUuY2FuY2VsID0gZnVuY3Rpb24gKCkge1xuICAgICRtb2RhbEluc3RhbmNlLmRpc21pc3MoJ2NhbmNlbCcpO1xuICB9O1xuXG4gICRzY29wZS5oYXNFcnJvciA9IGZ1bmN0aW9uKGlucHV0KSB7XG4gICAgcmV0dXJuICFpbnB1dC4kZm9jdXNlZCAmJiBpbnB1dC4kZGlydHkgJiYgaW5wdXQuJGludmFsaWQ7XG4gIH07XG5cbiAgJHNjb3BlLmhhc1Byb3BlcnR5RXJyb3IgPSBmdW5jdGlvbihpbnB1dCwgcHJvcGVydHkpIHtcbiAgICByZXR1cm4gIWlucHV0LiRmb2N1c2VkICYmIGlucHV0LiRkaXJ0eSAmJiBpbnB1dC4kZXJyb3JbcHJvcGVydHldO1xuICB9O1xuXG4gIC8qKlxuICAgKiBJbnZva2VkIG9uIHN0YXJ0dXAsIGxpa2UgYSBjb25zdHJ1Y3Rvci5cbiAgICovXG4gIHZhciBpbml0ID0gZnVuY3Rpb24gKCkge1xuICB9O1xuICBpbml0KCk7XG59O1xuXG5BZG1pblNxdWFkc05ld0NvbnRyb2xsZXIuJGluamVjdCA9IFsnJHNjb3BlJywgJyRtb2RhbEluc3RhbmNlJ107XG5tb2R1bGUuZXhwb3J0cyA9IEFkbWluU3F1YWRzTmV3Q29udHJvbGxlcjtcbiIsInZhciBBZG1pblNxdWFkc0VkaXRDb250cm9sbGVyID0gZnVuY3Rpb24oc3F1YWQsICRzY29wZSwgJG1vZGFsSW5zdGFuY2UpIHtcblxuICAkc2NvcGUuc3F1YWREYXRhID0gYW5ndWxhci5jb3B5KHNxdWFkKTtcblxuICAkc2NvcGUuZWRpdFNxdWFkID0gZnVuY3Rpb24oc3F1YWQpIHtcbiAgICAkbW9kYWxJbnN0YW5jZS5jbG9zZShzcXVhZCk7XG4gIH07XG5cbiAgJHNjb3BlLmNhbmNlbCA9IGZ1bmN0aW9uICgpIHtcbiAgICAkbW9kYWxJbnN0YW5jZS5kaXNtaXNzKCdjYW5jZWwnKTtcbiAgfTtcblxuICAkc2NvcGUuaGFzRXJyb3IgPSBmdW5jdGlvbihpbnB1dCkge1xuICAgIHJldHVybiAhaW5wdXQuJGZvY3VzZWQgJiYgaW5wdXQuJGRpcnR5ICYmIGlucHV0LiRpbnZhbGlkO1xuICB9O1xuXG4gICRzY29wZS5oYXNQcm9wZXJ0eUVycm9yID0gZnVuY3Rpb24oaW5wdXQsIHByb3BlcnR5KSB7XG4gICAgcmV0dXJuICFpbnB1dC4kZm9jdXNlZCAmJiBpbnB1dC4kZGlydHkgJiYgaW5wdXQuJGVycm9yW3Byb3BlcnR5XTtcbiAgfTtcblxuICAvKipcbiAgICogSW52b2tlZCBvbiBzdGFydHVwLCBsaWtlIGEgY29uc3RydWN0b3IuXG4gICAqL1xuICB2YXIgaW5pdCA9IGZ1bmN0aW9uICgpIHtcbiAgfTtcbiAgaW5pdCgpO1xufTtcblxuQWRtaW5TcXVhZHNFZGl0Q29udHJvbGxlci4kaW5qZWN0ID0gWydzcXVhZCcsICckc2NvcGUnLCAnJG1vZGFsSW5zdGFuY2UnXTtcbm1vZHVsZS5leHBvcnRzID0gQWRtaW5TcXVhZHNFZGl0Q29udHJvbGxlcjtcbiIsInZhciBBZG1pblNlYXNvbk5ld0NvbnRyb2xsZXIgPSBmdW5jdGlvbigkc2NvcGUsICRtb2RhbEluc3RhbmNlKSB7XG5cbiAgJHNjb3BlLm5ld1NlYXNvbkRhdGEgPSB7XG4gICAgbmFtZTogJycsXG4gICAgc2Vhc29uX3R5cGU6ICcnLFxuICAgIHN0YXJ0c19hdDogbW9tZW50KCkuZm9ybWF0KCksXG4gICAgZW5kc19hdDogbW9tZW50KCkuZm9ybWF0KClcbiAgfTtcblxuICAkc2NvcGUuY2xvc2VTdGFydHNBdCA9IGZ1bmN0aW9uKCkge1xuICAgICRzY29wZS5zdGFydHNBdERyb3Bkb3duID0ge1xuICAgICAgaXNvcGVuOiBmYWxzZVxuICAgIH07XG4gIH07XG4gICRzY29wZS5jbG9zZVN0YXJ0c0F0KCk7XG5cbiAgJHNjb3BlLmNsb3NlRW5kc0F0ID0gZnVuY3Rpb24oKSB7XG4gICAgJHNjb3BlLmVuZHNBdERyb3Bkb3duID0ge1xuICAgICAgaXNvcGVuOiBmYWxzZVxuICAgIH07XG4gIH07XG4gICRzY29wZS5jbG9zZUVuZHNBdCgpO1xuXG4gICRzY29wZS5jcmVhdGVTZWFzb24gPSBmdW5jdGlvbihzZWFzb24pIHtcbiAgICAkbW9kYWxJbnN0YW5jZS5jbG9zZShzZWFzb24pO1xuICB9O1xuXG4gICRzY29wZS5jYW5jZWwgPSBmdW5jdGlvbiAoKSB7XG4gICAgJG1vZGFsSW5zdGFuY2UuZGlzbWlzcygnY2FuY2VsJyk7XG4gIH07XG5cbiAgJHNjb3BlLmhhc0Vycm9yID0gZnVuY3Rpb24oaW5wdXQpIHtcbiAgICByZXR1cm4gIWlucHV0LiRmb2N1c2VkICYmIGlucHV0LiRkaXJ0eSAmJiBpbnB1dC4kaW52YWxpZDtcbiAgfTtcblxuICAkc2NvcGUuaGFzUHJvcGVydHlFcnJvciA9IGZ1bmN0aW9uKGlucHV0LCBwcm9wZXJ0eSkge1xuICAgIHJldHVybiAhaW5wdXQuJGZvY3VzZWQgJiYgaW5wdXQuJGRpcnR5ICYmIGlucHV0LiRlcnJvcltwcm9wZXJ0eV07XG4gIH07XG5cbiAgLyoqXG4gICAqIEludm9rZWQgb24gc3RhcnR1cCwgbGlrZSBhIGNvbnN0cnVjdG9yLlxuICAgKi9cbiAgdmFyIGluaXQgPSBmdW5jdGlvbiAoKSB7XG4gIH07XG4gIGluaXQoKTtcbn07XG5cbkFkbWluU2Vhc29uTmV3Q29udHJvbGxlci4kaW5qZWN0ID0gWyckc2NvcGUnLCAnJG1vZGFsSW5zdGFuY2UnXTtcbm1vZHVsZS5leHBvcnRzID0gQWRtaW5TZWFzb25OZXdDb250cm9sbGVyO1xuIiwidmFyIEFkbWluU2Vhc29uRWRpdENvbnRyb2xsZXIgPSBmdW5jdGlvbihzZWFzb24sICRzY29wZSwgJG1vZGFsSW5zdGFuY2UpIHtcblxuICAkc2NvcGUuc2Vhc29uRGF0YSA9IGFuZ3VsYXIuY29weShzZWFzb24pO1xuXG4gICRzY29wZS5jbG9zZVN0YXJ0c0F0ID0gZnVuY3Rpb24oKSB7XG4gICAgJHNjb3BlLnN0YXJ0c0F0RHJvcGRvd24gPSB7XG4gICAgICBpc29wZW46IGZhbHNlXG4gICAgfTtcbiAgfTtcbiAgJHNjb3BlLmNsb3NlU3RhcnRzQXQoKTtcblxuICAkc2NvcGUuY2xvc2VFbmRzQXQgPSBmdW5jdGlvbigpIHtcbiAgICAkc2NvcGUuZW5kc0F0RHJvcGRvd24gPSB7XG4gICAgICBpc29wZW46IGZhbHNlXG4gICAgfTtcbiAgfTtcbiAgJHNjb3BlLmNsb3NlRW5kc0F0KCk7XG5cbiAgJHNjb3BlLnVwZGF0ZVNlYXNvbiA9IGZ1bmN0aW9uKHNlYXNvbikge1xuICAgICRtb2RhbEluc3RhbmNlLmNsb3NlKHNlYXNvbik7XG4gIH07XG5cbiAgJHNjb3BlLmNhbmNlbCA9IGZ1bmN0aW9uICgpIHtcbiAgICAkbW9kYWxJbnN0YW5jZS5kaXNtaXNzKCdjYW5jZWwnKTtcbiAgfTtcblxuICAkc2NvcGUuaGFzRXJyb3IgPSBmdW5jdGlvbihpbnB1dCkge1xuICAgIHJldHVybiAhaW5wdXQuJGZvY3VzZWQgJiYgaW5wdXQuJGRpcnR5ICYmIGlucHV0LiRpbnZhbGlkO1xuICB9O1xuXG4gICRzY29wZS5oYXNQcm9wZXJ0eUVycm9yID0gZnVuY3Rpb24oaW5wdXQsIHByb3BlcnR5KSB7XG4gICAgcmV0dXJuICFpbnB1dC4kZm9jdXNlZCAmJiBpbnB1dC4kZGlydHkgJiYgaW5wdXQuJGVycm9yW3Byb3BlcnR5XTtcbiAgfTtcblxuICAvKipcbiAgICogSW52b2tlZCBvbiBzdGFydHVwLCBsaWtlIGEgY29uc3RydWN0b3IuXG4gICAqL1xuICB2YXIgaW5pdCA9IGZ1bmN0aW9uICgpIHtcbiAgfTtcbiAgaW5pdCgpO1xufTtcblxuQWRtaW5TZWFzb25FZGl0Q29udHJvbGxlci4kaW5qZWN0ID0gWydzZWFzb24nLCAnJHNjb3BlJywgJyRtb2RhbEluc3RhbmNlJ107XG5tb2R1bGUuZXhwb3J0cyA9IEFkbWluU2Vhc29uRWRpdENvbnRyb2xsZXI7XG4iXX0=
;