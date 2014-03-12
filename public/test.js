var myApp = angular.module('myApp', []);

// one controller can handle a whole page or section of page
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

	$scope.favoriteCat = 'Vivian';

	// write a setFavoriteCatToPurrie() function here

}





