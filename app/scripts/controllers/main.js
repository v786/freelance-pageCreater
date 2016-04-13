'use strict';

/**
 * @ngdoc function
 * @name eventCreatorApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the eventCreatorApp
 */
angular.module('eventCreatorApp')
  .controller('MainCtrl', function ($scope, $location) {
    this.ArrayGenerator = function(Lower, Upper, Postfix){
      var Arr = [];
      for (var j=Lower ; j<=Upper ; j++){
        if(j<10){
          Arr.push('0'+j+' '+Postfix);
        }else {
          Arr.push(j+' '+Postfix);
        }
      }
      return Arr;
    };

    $scope.hourSelector = this.ArrayGenerator(0,23,'Hours');

    $scope.MinuteSelector = this.ArrayGenerator(0,59,'Minutes');

    $scope.ResponsiveScreen = function () {
      var clientWidth = document.documentElement.clientWidth;
      if (clientWidth > 800) {
        return true ; // for large screen
      } else {
        return false ; // for smaller screen
      }
    };

    $scope.save = function(){
      console.log('main saved');
      $location.path('/designer');
    }


  });
