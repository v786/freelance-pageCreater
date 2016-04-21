'use strict';

/**
 * @ngdoc function
 * @name eventCreatorApp.controller:DesignerCtrl
 * @description
 * # DesignerCtrl
 * Controller of the eventCreatorApp
 */
angular.module('eventCreatorApp')
  .controller('DesignerCtrl', function ($scope, $sce, ngDialog, $location) {
    $scope.event = {
      eventDate: '03-Apr-2016' ,
      eventTime: '06:00 To 09:00',
      address :   'Amphi Theatre,\nBandstand, Bandra',
      position : {
        latitude : 0.0,
        longitude : 0.0,
        zoom : 5
      },
      htmlContent : '<h2>What is ADE Playground?</h2><p>ADE Playground is a unique, dance-related lifestyle program offering five days of film screenings, music hardware presentations, art shows and exhibitions, exclusive fashion offers, interactive talk shows, promotional activities and pop-up musical performances at 25 creative hotspots around the city, including roof-top terraces, clothing shops, and art galleries, as well as outdoor exhibitions and cinemas.</p><article><h2>Is there a mobile website available?</h2><p>Yes, our mobile website is available at <a href="http://www.amsterdam-dance-event.nl/" target="_blank">m.amsterdam-dance-event.nl</a> (on your mobile phone).<br><br>The official ADE app is available App Store and Google Play.</p></article><article><h2>How can I follow ADE online?</h2><p>You can follow us on <a href="https://twitter.com/ADE_NL">Twitter</a>, <a href="https://instagram.com/amsterdamdanceevent/">Instagram</a>, and you can also like us on our <a href="https://www.facebook.com/amsterdamdanceevent">Facebook page</a>.</p></article><p></p>',
      description : function(){
        return $sce.trustAsHtml($scope.event.htmlContent);
      }
    };
    $scope.organiser = {
      manager : 'Shubham Prasad',
      location : "College of engineering and Technology, Ghatikia",
      phone : '9777215018',
      email : 'spd2192@gmail.com'
    };
    $scope.ShowOrganiserDetails = function () {
      ngDialog.open({ template: 'views/organiser.html' });
    };
    $scope.ShowOnMaps = function () {
      ngDialog.open({ template: 'views/map.html' });
    };

    $scope.showRichTextEditor = false ;
    $scope.ShowTextEditor = function () {
      $scope.showRichTextEditor = true ;
    };
    $scope.HideTextEditor = function () {
      $scope.showRichTextEditor = false ;
    };
    $scope.CkeditorOptions = {
      toolbarBottom:true,
      toolbarButtons: ['fullscreen', 'bold', 'italic','|',
        'underline', 'strikeThrough', 'subscript', 'superscript', 'fontFamily', 'fontSize', '|',
        'color', 'emoticons','|', 'paragraphFormat', 'align', 'formatOL', 'formatUL', 'outdent', 'indent',
        '-', 'insertLink', 'insertTable', '|', 'quote', 'insertHR', 'undo', 'redo', 'clearFormatting', 'selectAll', 'html'
      ]
    };

    $scope.showImageEditor = function(){
      $location.path('/imageEditor');
    };



  });
