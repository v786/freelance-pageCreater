'use strict';

/**
 * @ngdoc function
 * @name eventCreaterApp.controller:RichtextCtrl
 * @description
 * # RichtextCtrl
 * Controller of the eventCreaterApp
 */
angular.module('eventCreatorApp')
  .controller('RichtextCtrl', function ($scope) {
    $scope.froalaOptions = {
      toolbarBottom: true,
      toolbarButtons: ['fullscreen', 'bold', 'italic','|',
        'underline', 'strikeThrough', 'subscript', 'superscript', 'fontFamily', 'fontSize', '|',
        'color', 'emoticons','|', 'paragraphFormat', 'align', 'formatOL', 'formatUL', 'outdent', 'indent',
        '-', 'insertLink', 'insertTable', '|', 'quote', 'insertHR', 'undo', 'redo', 'clearFormatting', 'selectAll', 'html'
      ]
    }

  });
