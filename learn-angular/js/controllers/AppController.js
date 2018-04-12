app.controller('MainController', ['$scope', function($scope) {
  $scope.move = {
    icon: 'img/move.jpg',
    title: 'MOVE',
    developer: 'MOVE, Inc.',
    price: 0.99
  };

  $scope.shutterbugg = {
    icon: 'img/shutterbugg.jpg',
    title: 'Shutterbugg',
    developer: 'Chico Dusty',
    price: 2.99
  };

  $scope.gameboard = {
    icon: 'img/gameboard.jpg',
    title: 'Gameboard',
    developer: 'Armando P.',
    price: 1.99
  };

  $scope.forecast = "good";

  $scope.apps = [
    {
      icon: 'img/move.jpg',
      title: 'MOVE',
      developer: 'MOVE, Inc.',
      price: 0.99
    },
    {
      icon: 'img/shutterbugg.jpg',
      title: 'Shutterbug',
      developer: 'Chico Dusty',
      price: 2.99
    },
    {
      icon: 'img/snowboard.jpg',
      title: 'Snowboard',
      developer: 'Viccy Grace',
      price: 2.50
    },
    {
      icon: 'img/Revv52.jpg',
      title: 'Revv52',
      developer: 'Matthew James',
      price: 1.99
    }
  ];
}]);