'use strict';

/**
 * @ngdoc function
 * @name eventCreaterApp.controller:ImageeditorCtrl
 * @description
 * # ImageeditorCtrl
 * Controller of the eventCreaterApp
 */
angular.module('eventCreatorApp')
  .controller('ImageeditorCtrl', function ($scope, $rootScope, $location) {
    $scope.enabledResizeSelector = true;
    var clear = $scope.$watch( 'imageEditor', function( imageEditor ){
      //console.log( $scope.imageEditor );
      //window.imageEditor = $scope.imageEditor;
      if ( imageEditor ) {
        clear();
        $scope.enabled = true;
      }
    });
    $scope.capture = function(){
      var img = $scope.imageEditor.toDataURL();
      $scope.imgSrc = img ;
      $rootScope._lastSuccessFul = img;
    };
    $scope.onImageChange = function(size){
      console.log( 'img change width:' + size.width + ' height:' + size.height );
    };

    $scope.UserImage = {base64:'images/dummyBg.png'};
    $scope.imgSrc = $scope.UserImage.base64 ;

    $scope.ShowImgEditor = true ;

    $scope.changeLogger = function(){
      console.log($scope.UserImage);
      $scope.imgSrc = 'data:'+$scope.UserImage.filetype+';base64,'+$scope.UserImage.base64 ;
    };

    $scope.saveImage = function(){
      $rootScope.BannerImage = $rootScope._lastSuccessFul ;
      console.log('saved');
      $location.path('/designer');
    }

  });
