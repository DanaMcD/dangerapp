var myApp = angular.module('myApp', []);



function homePageCtrl($scope, $window) {
    $scope.greeting = 'Hola!';

	
	$scope.hellos = [
		{language: 'choctaw', greetings: 'Halito'},
		{language: 'corsican', greetings: 'Salute'},
		{language: 'german', greetings: 'Servas'}
	];


	$scope.sayHello = function () {
    	$window.alert('HELLO!');
	};

	$scope.favoriteCat= 'Vivian';
	
	$scope.setFavoriteCatToPurrie = function () {
		favoriteCat = 'Purrie';
	};

    $scope.sayHello = function () {
    	$window.alert('HELLO!');
	};

	$scope.favoriteCat = 'Vivian';

	
}





