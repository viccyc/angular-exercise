app.controller('MainController', ['$scope', function($scope) {
  $scope.title = 'Best hills for snowboarding';
  $scope.promo = 'Fernie';
  $scope.product = {
    name: 'The Book of Trees',
    price: 19,
    pubdate: new Date('2014', '03', '08')
  };
}]);