"use strict";angular.module("loghApp",["ui.bootstrap","ngCookies","ngResource","ngSanitize","ngRoute"]).config(["$routeProvider",function(a){a.when("/",{templateUrl:"views/main.html",controller:"MainCtrl"}).otherwise({redirectTo:"/"})}]);var loghApp=angular.module("loghApp");loghApp.filter("reverse",function(){return function(a){return a.split("").reverse().join("")}}),loghApp.controller("MainCtrl",["$scope",function(a){a.choices=[{code:"edit-profile",desc:"Edit Profile"},{code:"sign-out",desc:"Sign Out"}],a.footon=function(a){alert(a.desc)}}]);